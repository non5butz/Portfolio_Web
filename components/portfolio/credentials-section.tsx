const credentials = {
  education: [
    {
      period: "2024 - Present",
      title: "北陸先端科学技術大学院大学（JAIST）",
      description: "修士課程 / 人間中心設計・UX研究",
    },
    {
      period: "2015 - 2019",
      title: "大学名",
      description: "学部名 / 専攻",
    },
  ],
  experience: [
    {
      period: "2019 - Present",
      title: "実務経験 5年以上",
      description: "UI/UXデザイン、フロントエンド開発、プロダクト設計",
    },
  ],
  skills: {
    design: ["Figma", "Adobe XD", "Sketch", "Prototyping"],
    development: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    research: ["User Interview", "Usability Testing", "A/B Testing", "Analytics"],
  },
}

export function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">
            Credentials
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">
            経歴・スキル
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          {/* Left column: Education & Experience */}
          <div className="space-y-12">
            {/* Education */}
            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                Education
              </h3>
              <div className="space-y-6">
                {credentials.education.map((item, index) => (
                  <div key={index} className="border-l-2 border-border pl-6">
                    <p className="font-mono text-xs text-muted-foreground mb-1">
                      {item.period}
                    </p>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Experience */}
            <div>
              <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                Experience
              </h3>
              <div className="space-y-6">
                {credentials.experience.map((item, index) => (
                  <div key={index} className="border-l-2 border-border pl-6">
                    <p className="font-mono text-xs text-muted-foreground mb-1">
                      {item.period}
                    </p>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right column: Skills */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
              Skills
            </h3>
            <div className="space-y-8">
              {/* Design */}
              <div>
                <p className="font-medium mb-3">Design</p>
                <div className="flex flex-wrap gap-2">
                  {credentials.skills.design.map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm px-4 py-2 rounded-full bg-background text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Development */}
              <div>
                <p className="font-medium mb-3">Development</p>
                <div className="flex flex-wrap gap-2">
                  {credentials.skills.development.map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm px-4 py-2 rounded-full bg-background text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Research */}
              <div>
                <p className="font-medium mb-3">Research</p>
                <div className="flex flex-wrap gap-2">
                  {credentials.skills.research.map((skill) => (
                    <span 
                      key={skill}
                      className="text-sm px-4 py-2 rounded-full bg-background text-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Gradient accent */}
            <div 
              className="mt-12 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
