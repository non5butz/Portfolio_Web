import { Search, Code, Users } from "lucide-react"

const philosophies = [
  {
    icon: Search,
    number: "01",
    title: "Research",
    titleJa: "調査・分析",
    description: "ユーザーリサーチとデータ分析に基づき、課題の本質を特定。仮説を立て、検証可能な形に落とし込みます。",
  },
  {
    icon: Code,
    number: "02",
    title: "Design & Build",
    titleJa: "設計・実装",
    description: "デザインから実装まで一貫して担当。プロトタイプを素早く形にし、フィードバックループを回します。",
  },
  {
    icon: Users,
    number: "03",
    title: "Validate",
    titleJa: "検証・改善",
    description: "ユーザビリティテストと定量データで効果を検証。継続的な改善により、成果を最大化します。",
  },
]

export function PhilosophySection() {
  return (
    <section id="philosophy" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">
            Philosophy
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">
            なぜ、私に依頼すべきか
          </h2>
        </div>
        
        {/* Philosophy cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {philosophies.map((item) => (
            <div key={item.number} className="group">
              {/* Number and icon */}
              <div className="flex items-center gap-4 mb-6">
                <span 
                  className="text-sm font-mono bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)"
                  }}
                >
                  {item.number}
                </span>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #5B90C4 0%, #E8BDB7 100%)"
                  }}
                >
                  <item.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {item.titleJa}
              </p>
              
              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
