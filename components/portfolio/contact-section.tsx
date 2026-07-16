import { Mail, ArrowUpRight } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section header */}
        <p className="text-muted-foreground tracking-widest text-sm uppercase mb-4">Contact</p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-8 text-balance">
          より良い体験を、
          <br />
          ご一緒に。
        </h2>

        <p className="text-muted-foreground text-base max-w-4xl mx-auto mb-12 leading-relaxed">
          新規プロダクトの設計、サービスの改善、研究協力など、 お気軽にご相談ください。
        </p>

        {/* Contact button */}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeyD4Y9-jSv0laFG0DnqtpNz15GO2hqysOyaL23s_F5a8nNuw/viewform?usp=dialog"
          target="_blank"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white transition-all hover:scale-105 hover:shadow-lg group"
          style={{
            background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
          }}
        >
          <Mail className="w-5 h-5" />
          <span className="font-medium">メールで連絡する</span>
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
