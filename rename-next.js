const fs = require("fs")
const path = require("path")

function main() {
  const outDir = path.join(__dirname, "out")
  const oldNext = path.join(outDir, "_next")
  const newNext = path.join(outDir, "assets")

  // 1. Rename _next to assets
  if (fs.existsSync(oldNext)) {
    fs.renameSync(oldNext, newNext)
    console.log("Renamed _next to assets")
  }

  // 2. Find all files and rename problematic ones
  function getAllFiles(dir, fileList = []) {
    if (!fs.existsSync(dir)) return fileList
    const files = fs.readdirSync(dir)
    files.forEach((file) => {
      const filePath = path.join(dir, file)
      if (fs.statSync(filePath).isDirectory()) {
        getAllFiles(filePath, fileList)
      } else {
        fileList.push(filePath)
      }
    })
    return fileList
  }

  let allFiles = getAllFiles(outDir)
  const renameMap = [] // { oldName: '', newName: '' }

  allFiles.forEach((filePath) => {
    const filename = path.basename(filePath)
    let newFilename = filename

    // Replace ~ with -
    if (newFilename.includes("~")) {
      newFilename = newFilename.replace(/~/g, "-")
    }
    // Replace .. with .
    if (newFilename.includes("..")) {
      newFilename = newFilename.replace(/\.\./g, ".")
    }

    if (newFilename !== filename) {
      const newPath = path.join(path.dirname(filePath), newFilename)
      fs.renameSync(filePath, newPath)
      renameMap.push({ oldName: filename, newName: newFilename })
    }
  })

  if (renameMap.length > 0) {
    console.log("Renamed problematic files:", renameMap)
  }

  // Reload all files list after renames
  allFiles = getAllFiles(outDir)

  // 3. Replace paths and map in all text files
  allFiles.forEach((filePath) => {
    if (
      filePath.endsWith(".html") ||
      filePath.endsWith(".js") ||
      filePath.endsWith(".css") ||
      filePath.endsWith(".txt") ||
      filePath.endsWith(".json")
    ) {
      let content = fs.readFileSync(filePath, "utf8")

      // Replace _next references
      let updatedContent = content
        .replace(/\/_next\//g, "/assets/")
        .replace(/\\\/_next\\\//g, "\\/assets\\/")
        .replace(/%2F_next%2F/g, "%2Fassets%2F")
        .replace(/"_next\//g, '"assets/')
        .replace(/\.\/_next\//g, "./assets/")
        .replace(/"\/images\//g, '"./images/')
        .replace(/"\/icon/g, '"./icon')
        .replace(/"\/apple-icon/g, '"./apple-icon')

      // Replace problematic chunk references
      renameMap.forEach(({ oldName, newName }) => {
        // Just global replace the plain filename string
        // Be careful not to use regex that parses special chars without escaping,
        // since we just use string replacement (or split/join).
        updatedContent = updatedContent.split(oldName).join(newName)
      })

      if (content !== updatedContent) {
        fs.writeFileSync(filePath, updatedContent, "utf8")
      }
    }
  })

  console.log("Replaced all references in all files.")
}

main()
