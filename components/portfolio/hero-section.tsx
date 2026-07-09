"use client"

import { ArrowDown } from "lucide-react"
import dynamic from "next/dynamic" // next/dynamicをインポート
import { useState, useEffect } from "react"

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center w-full h-full text-muted-foreground">
      Loading 3D...
    </div>
  ),
})

export function HeroSection() {
  // SPサイズかどうかを判定する状態（ステート）を定義
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // 画面幅をチェックする関数（768px未満をSPとする）
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // 初回マウント時にチェック
    checkIsMobile()

    // ウィンドウサイズが変更された時にも判定を更新
    window.addEventListener("resize", checkIsMobile)

    // クリーンアップ関数
    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById("philosophy")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  // 画面幅に応じてSplineのURLを出し分ける
  const splineSceneUrl = isMobile
    ? "https://prod.spline.design/hWQzfwU7zvUGJYXL/scene.splinecode" // ← SP版のURL
    : "https://prod.spline.design/b4IBMd6TnUFXGVlT/scene.splinecode" // ← PC版のURL

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundColor: "lab(98.26 0 0)" }}
    >
      {/* URLを変数（splineSceneUrl）に変更 */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Spline scene={splineSceneUrl} />
      </div>

      {/* Gradient accent line */}
      <div
        className="absolute top-0 left-0 w-full h-1 z-10"
        style={{
          background: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
        }}
      />

      <div className="max-w-5xl relative z-10 pointer-events-none select-none">
        {/* Tagline */}
        <p className="text-muted-foreground tracking-widest text-sm uppercase mb-6">
          UI/UX Designer & Web Engineer
        </p>

        {/* Main catchphrase */}
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8">
          <span
            className="block bg-clip-text text-transparent mt-2"
            style={{
              backgroundImage: "linear-gradient(90deg, #5B90C4 0%, #E8BDB7 100%)",
            }}
          >
            より良い体験を、
            <br />
            一歩ずつ。
          </span>
          <span className="text-3xl lg:text-[42px] mt-4 block">Designing Better Experiences.</span>
        </h1>

        {/* Sub description */}
        <p className="text-muted-foreground text-sm max-w-4xl leading-relaxed mb-12">
          人間中心設計（HCD）の考え方を軸に、
          <br className="hidden md:block" />
          UI/UX設計やWebディレクション、デザインシステムの構築に取り組んできました。
          <br className="hidden md:block" />
          営業やマーケティングの経験も生かしながら、人・事業・技術をつなぐプロダクトづくりを目指しています。
        </p>

        {/* Profile image area */}
        <div className="flex items-center gap-6">
          <div
            className="w-16 h-16 rounded-full overflow-hidden"
            style={{
              boxShadow: "0 0 0 2px #5B90C4, 0 0 0 4px #E8BDB7",
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
            <p className="text-xs md:text-sm text-muted-foreground">
              HCD Specialist
              <br className="md:block" />
              Master's Student Technology <br className="block md:hidden" />
              Management (MOT) at JAIST
            </p>
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
