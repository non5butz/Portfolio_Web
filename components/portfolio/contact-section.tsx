import { Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">Contact</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-balance">
          ご縁をいただけましたら
          <br />
          幸いです
        </h2>

        <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-12 leading-relaxed text-pretty">
          採用のご検討や、プロダクト設計・UX改善などのお仕事のご相談を承っております。
          少しでもお力になれることがございましたら、まずはお気軽にご連絡ください。
          一つひとつ、丁寧に対応させていただきます。
        </p>

        {/* Contact button */}
        <a
          href="mailto:your@email.com"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg group"
          style={{
            background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
          }}
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium">メールでご連絡する</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>

        {/* Social links */}
        <div className="mt-16 flex items-center justify-center gap-8">
          <a
            href="https://github.com/non5butz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub
          </a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <a
            href="https://www.linkedin.com/in/nozomi-t/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
          <span className="w-1 h-1 rounded-full bg-border" />
          <a
            href="https://www.facebook.com/nozomi.sakai.555"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  )
}
