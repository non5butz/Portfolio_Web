import { ArrowUpRight } from "lucide-react"

const works = [
  {
    id: 1,
    title: "Project Title 01",
    category: "Web Application",
    tags: ["UX Research", "UI Design", "Frontend"],
    description: "課題の発見からデザイン、実装まで一貫して担当。ユーザビリティテストを通じて継続的に改善。",
    metrics: "+45% Conversion",
  },
  {
    id: 2,
    title: "Project Title 02",
    category: "Mobile App",
    tags: ["User Research", "Prototyping", "Design System"],
    description: "ユーザーインタビューに基づくペルソナ設計と、再利用可能なデザインシステムの構築。",
    metrics: "4.8 App Rating",
  },
  {
    id: 3,
    title: "Project Title 03",
    category: "SaaS Product",
    tags: ["Information Architecture", "UI Design", "React"],
    description: "複雑な業務フローを整理し、直感的なUIを設計。フロントエンド実装も担当。",
    metrics: "-30% Support Tickets",
  },
]

export function WorksSection() {
  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">
            Selected Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">
            厳選したプロジェクト
          </h2>
        </div>
        
        {/* Works grid */}
        <div className="space-y-16 md:space-y-24">
          {works.map((work, index) => (
            <article 
              key={work.id} 
              className="group grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              {/* Image placeholder */}
              <div 
                className={`aspect-[4/3] rounded-lg flex items-center justify-center relative overflow-hidden ${
                  index % 2 === 1 ? "md:order-2" : ""
                }`}
                style={{
                  background: "linear-gradient(135deg, #5B90C4 0%, #E8BDB7 100%)",
                  opacity: 0.15
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm tracking-widest uppercase">
                    Project Image
                  </span>
                </div>
                {/* Hover overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #5B90C4 0%, #E8BDB7 100%)"
                  }}
                >
                  <ArrowUpRight className="w-8 h-8 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                {/* Category */}
                <p className="text-sm text-muted-foreground mb-2">
                  {work.category}
                </p>
                
                {/* Title */}
                <h3 className="font-serif text-2xl md:text-3xl mb-4 group-hover:opacity-70 transition-opacity">
                  {work.title}
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
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {work.description}
                </p>
                
                {/* Metrics */}
                <p 
                  className="font-mono text-sm bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)"
                  }}
                >
                  {work.metrics}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
