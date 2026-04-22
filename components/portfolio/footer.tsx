export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Tsujita Nozomi. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Design with Evidence.
        </p>
      </div>
    </footer>
  )
}
