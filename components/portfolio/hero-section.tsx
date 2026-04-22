"use client"

import { ArrowDown } from "lucide-react"
import dynamic from "next/dynamic"

const FloatingSpheres = dynamic(
  () => import("./floating-spheres").then((mod) => mod.FloatingSpheres),
  { ssr: false }
)

export function HeroSection() {
  const scrollToNext = () => {
    const element = document.getElementById("philosophy")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden bg-background">
      {/* 3D Floating Spheres Background */}
      <div className="absolute inset-0 z-0">
        <FloatingSpheres />
      </div>
      
      {/* Gradient accent line */}
      <div 
        className="absolute top-0 left-0 w-full h-1 z-10"
        style={{
          background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)"
        }}
      />
      
      <div className="max-w-4xl relative z-10">
        {/* Tagline */}
        <p className="text-muted-foreground tracking-widest text-sm uppercase mb-6">
          UI/UX Designer & Web Engineer
        </p>
        
        {/* Main catchphrase */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 text-balance">
          <span className="block">Design with Evidence.</span>
          <span 
            className="block bg-clip-text text-transparent mt-2"
            style={{
              backgroundImage: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)"
            }}
          >
            理論で設計し、コードで証明する。
          </span>
        </h1>
        
        {/* Sub description */}
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
          実務経験5年以上の実装力と、人間中心設計（HCD）の学術的視点。
          <br className="hidden md:block" />
          JAISTで研究を続けながら、エビデンスに基づいたデザインを実践しています。
        </p>
        
        {/* Profile image area */}
        <div className="flex items-center gap-6">
          <div 
            className="w-16 h-16 rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 0 2px #5B90C4, 0 0 0 4px #E8BDB7"
            }}
          >
            <img 
              src="/images/profile.png" 
              alt="Tsujita Nozomi" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">Tsujita Nozomi</p>
            <p className="text-sm text-muted-foreground">JAIST 修士課程 / HCD研究</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </section>
  )
}
