const credentials = {
  education: [
    {
      period: "2024 - Present",
      title: "北陸先端科学技術大学院大学 博士前期課程（技術経営プログラム）",
      description: "HCD・AI・XR・3D都市モデルを活用した地方創生とビジネスモデルの研究",
    },
  ],
  experience: [
    {
      period: "2024 - Present",
      title: "IT・通信キャリア / Product Designer・UX Strategist",
      description:
        "大規模EC・ネイティブアプリのUI/UXデザイン、HTML/CSSによるフロントエンド実装、組織横断デザインシステムの構築・合意形成、Webディレクション",
    },
    {
      period: "2022 - 2023",
      title: "大手ECサービス / UXチーム ディレクター",
      description:
        "キャンペーンLPリニューアルでクリック数230%増、メルマガ改善で開封率・CTRを倍増、Asana導入で月10人日の工数削減、Style Guideの構築",
    },
    {
      period: "2020 - 2021",
      title: "鉄道シミュレータ製造業 / 営業・Webディレクション・UI設計",
      description:
        "数百万〜数億円規模の案件推進、コーポレートサイト改修でUUを約5倍に拡大、コンシューマ向けソフトの画面遷移設計",
    },
    {
      period: "2018 - 2020",
      title: "入力デバイス スタートアップベンチャー / アカウントマネージャー",
      description:
        "営業部門の立ち上げ、新規代理店12社・ECサイト22店舗への販路拡大、販促企画とWebマーケティングを単独で推進",
    },
    {
      period: "2010 - 2018",
      title: "通信キャリア / 代理店営業・SV・研修担当",
      description:
        "店頭スタッフのマネジメント、店頭イベントの企画・運営、営業研修（累計200名以上）を担当",
    },
  ],
  skills: {
    design: ["Figma", "Photoshop", "Illustrator", "Prototyping", "Design System"],
    development: ["HTML5 / CSS3", "Tailwind CSS", "JavaScript (EJS)", "WordPress", "WebGL"],
    research: [
      "HCD / 人間中心設計",
      "UX設計",
      "User Interview",
      "Google Analytics",
      "Project Management",
    ],
  },
  certifications: [
    "HCD-Net認定 人間中心設計スペシャリスト",
    "日本ディープラーニング協会 G検定",
    "情報処理技術者試験 ITパスポート",
    "CGクリエイター検定 ディジタル映像部門 3級",
  ],
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
          <h2 className="font-serif text-3xl md:text-4xl font-medium text-balance">経歴・スキル</h2>
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
                    <p className="font-mono text-xs text-muted-foreground mb-1">{item.period}</p>
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
                    <p className="font-mono text-xs text-muted-foreground mb-1">{item.period}</p>
                    <p className="font-medium mb-1">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column: Skills */}
          <div>
            <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">Skills</h3>
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

            {/* Certifications */}
            <div className="mt-12">
              <p className="font-medium mb-3">Certifications</p>
              <ul className="space-y-2">
                {credentials.certifications.map((cert) => (
                  <li key={cert} className="text-sm text-muted-foreground leading-relaxed">
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Gradient accent */}
            <div
              className="mt-12 h-1 rounded-full"
              style={{
                background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
