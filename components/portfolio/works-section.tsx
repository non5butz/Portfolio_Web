import { ArrowUpRight } from "lucide-react"

const works = [
  {
    id: 1,
    title: "楽天RAXY",
    category: "Product website",
    tags: ["Wireframe", "Style Guide", "Direction"],
    description:
      "サービスサイトの全面リニューアルに伴い、情報設計、ワイヤーフレーム作成、スタイルガイドの策定を担当。ブランド体験と使いやすさの両立を目指しました。",
    metrics: "Released in 2024 • Full Site Redesign",
    image: "./images/img-RAXY.png",
    image2x: "./images/img-RAXY@2x.png",
    link: "https://raxy.rakuten.co.jp/",
  },
  {
    id: 2,
    title: "楽天RAXY",
    category: "Product website",
    tags: ["Wireframe", "Style Guide", "Direction"],
    description:
      "サービスサイトの全面リニューアルに伴い、情報設計、ワイヤーフレーム作成、スタイルガイドの策定を担当。ブランド体験と使いやすさの両立を目指しました。",
    metrics: "Released in 2024 • Full Site Redesign",
    image: "./images/img-RAXY.png",
    image2x: "./images/img-RAXY@2x.png",
    link: "https://raxy.rakuten.co.jp/",
  },
  {
    id: 3,
    title: "株式会社Interactorコーポレートサイト",
    category: "Corporate website",
    tags: ["Wireframe", "UI Design", "WordPress"],
    description:
      "既存のブランド理念を継承したリデザインと実装を主導。プランニングからデザインおよびコーディング、WordPressの構築まで一貫して請け負いました。",
    metrics: "2025 Renewal & New Brand Identity",
    image: "./images/img-interactor.png",
    image2x: "./images/img-interactor@2x.png",
    link: "https://interactor.jp/",
  },
  {
    id: 4,
    title: "株式会社音楽館コーポレートサイト",
    category: "Corporate website",
    tags: ["Wireframe", "UI Design", "WordPress"],
    description:
      "既存のブランド理念を継承したリデザインと実装を主導。プランニングからデザインおよびコーディング、WordPressの構築まで一貫して請け負いました。",
    metrics: "2025 Renewal & New Brand Identity",
    image: "./images/img-interactor.png",
    image2x: "./images/img-interactor@2x.png",
    link: "https://interactor.jp/",
  },
  {
    id: 5,
    title: "Tesoro de Mexico",
    category: "Conceptual Design Mockup",
    tags: ["Wireframe", "UI Design", "WordPress"],
    description:
      "既存のブランド理念を継承したリデザインと実装を主導。プランニングからデザインおよびコーディング、WordPressの構築まで一貫して請け負いました。",
    metrics: "2025 Renewal & New Brand Identity",
    image: "./images/img-interactor.png",
    image2x: "./images/img-interactor@2x.png",
    link: "https://interactor.jp/",
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">Works</p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">制作実績</h2>
        </div>

        {/* Works grid */}
        <div className="space-y-16 md:space-y-24">
          {works.map((work, index) => {
            const ImageWrapper = work.link ? "a" : "div"
            const TitleWrapper = work.link ? "a" : "span"

            return (
              <article
                key={work.id}
                className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
              >
                {/* Image placeholder */}
                <ImageWrapper
                  href={work.link}
                  target={work.link ? "_blank" : undefined}
                  rel={work.link ? "noopener noreferrer" : undefined}
                  className={`aspect-4/3 rounded-lg flex items-center justify-center relative overflow-hidden bg-secondary/50 ${
                    index % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  {work.image ? (
                    <img
                      src={work.image}
                      srcSet={work.image2x ? `${work.image} 1x, ${work.image2x} 2x` : undefined}
                      alt={work.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, #5B90C4 0%, #E8BDB7 100%)",
                          opacity: 0.15,
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm tracking-widest uppercase z-10">
                          Project Image
                        </span>
                      </div>
                    </>
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(135deg, #5B90C4 0%, #E8BDB7 100%)",
                        opacity: 0.2,
                      }}
                    />
                    <ArrowUpRight className="w-8 h-8 text-white relative z-10" />
                  </div>
                </ImageWrapper>

                {/* Content */}
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  {/* Category */}
                  <p className="text-sm text-muted-foreground mb-2">{work.category}</p>

                  {/* Title */}
                  <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:opacity-70 transition-opacity">
                    <TitleWrapper
                      href={work.link}
                      target={work.link ? "_blank" : undefined}
                      rel={work.link ? "noopener noreferrer" : undefined}
                    >
                      {work.title}
                    </TitleWrapper>
                  </h3>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">{work.description}</p>

                  {/* Metrics */}
                  <p
                    className="font-mono text-sm bg-clip-text text-transparent"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
                    }}
                  >
                    {work.metrics}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
