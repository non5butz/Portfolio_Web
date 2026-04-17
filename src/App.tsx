import React from "react"
import { Navigation, ArrowRight, Instagram, Facebook, Twitter, Star } from "lucide-react"

export default function App() {
  return (
    <div className="w-full text-brand-black selection:bg-brand-light selection:text-white">
      {/* 1. Hero Section */}
      <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          {/* User's uploaded video (needs to be placed in public/hero-video.mp4) */}
          <source src="./img/219181_960x540.mp4" type="video/mp4" />
          {/* Fallback pattern */}
          <source src="./img/219181_960x540.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col h-full container mx-auto px-6 md:px-12 pt-8 pb-20 justify-between">
          <header className="flex items-center text-white">
            {/* Logo */}
            <div className="flex items-center gap-1">
              <Navigation className="w-5 h-5 -rotate-45 fill-white" />
              <span className="font-semibold text-lg italic">
                <span className="font-bold font-sans not-italic">Leav</span> Tours
              </span>
            </div>
          </header>

          <div className="flex flex-col md:flex-row justify-between items-end pb-12 w-full">
            <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] max-w-2xl font-light">
              Heed the call of <br className="hidden md:block" />
              nature and{" "}
              <span className="font-serif italic font-bold">
                leave it <br className="hidden md:block" />
                all behind.
              </span>
            </h1>
            <button className="hidden md:flex mt-8 md:mt-0 bg-brand-light hover:bg-[#0aa698] transition-colors text-white text-sm font-medium tracking-wide px-8 py-3 rounded-full uppercase items-center gap-2">
              Book Now <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. Leave it to us Section */}
      <section className="flex flex-col lg:flex-row w-full">
        {/* Left part */}
        <div className="w-full lg:w-1/3 bg-brand-light text-white p-12 lg:p-20 flex flex-col justify-center">
          <Navigation className="w-8 h-8 -rotate-45 fill-white mb-20 opacity-80" />
          <h2 className="text-5xl md:text-6xl leading-[1.1] font-light mb-8">
            <span className="font-serif italic font-semibold">Leave</span>
            <br />
            <span className="font-serif italic font-semibold">it to us!</span>
          </h2>
          <p className="text-base/relaxed max-w-md opacity-95">
            Write a paragraph that talks about your company here. You can talk about your company's
            background, history, mission, vision, or philosophy.
          </p>
        </div>

        {/* Right part */}
        <div className="w-full lg:w-2/3 bg-brand-dark p-12 lg:p-20 text-white flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&w=600&q=80"
                  alt="Red Truck"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Customized
                  <br />
                  Tours
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Write a paragraph that talks about your company here. You can talk about your
                  company's background, history, mission, vision, or philosophy.
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-6 lg:mt-8">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1566421389772-5b967d1dfcfb?auto=format&fit=crop&w=600&q=80"
                  alt="Street cafe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Hassle-free
                  <br />
                  Arrangements
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Anything that will introduce your brand's persona to your clients.
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col gap-6 lg:mt-16">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1510312305653-8ed496efae77?auto=format&fit=crop&w=600&q=80"
                  alt="Hammock"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Flexible
                  <br />
                  Rebooking Policy
                </h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  This will help build a connection between you and them, that hopefully leads into
                  a working relationship.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Nature Adventures Section */}
      <section className="py-24 px-6 md:px-12 container mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">
          Nature <span className="font-serif italic font-bold text-brand-dark">Adventures</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Package 1 */}
          <div className="flex flex-col bg-white/50 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542382103-ba82404e4a70?auto=format&fit=crop&w=800&q=80"
                alt="Self Paced Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <h3 className="text-2xl font-semibold w-2/3">Self-Paced Tour</h3>
                <span className="text-xl font-medium">$399</span>
              </div>
            </div>
            <div className="p-8 flex justify-between items-start gap-4">
              <p className="text-sm text-gray-700 leading-relaxed w-3/4">
                Give a detailed description of the package you are serving.
              </p>
              <button className="bg-brand-light text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-brand-dark transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Package 2 */}
          <div className="flex flex-col bg-white/50 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1432405972818-bdea2dfa14e9?auto=format&fit=crop&w=800&q=80"
                alt="Semi Guiided Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <h3 className="text-2xl font-semibold w-2/3">Semi-Guided Tour</h3>
                <span className="text-xl font-medium">$499</span>
              </div>
            </div>
            <div className="p-8 flex justify-between items-start gap-4">
              <p className="text-sm text-gray-700 leading-relaxed w-3/4">
                Give a detailed description of the package you are serving.
              </p>
              <button className="bg-brand-light text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-brand-dark transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Package 3 */}
          <div className="flex flex-col bg-white/50 rounded-2xl overflow-hidden group hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-square w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80"
                alt="Fully Guided Tour"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                <h3 className="text-2xl font-semibold w-2/3">Fully Guided Tour</h3>
                <span className="text-xl font-medium">$599</span>
              </div>
            </div>
            <div className="p-8 flex justify-between items-start gap-4">
              <p className="text-sm text-gray-700 leading-relaxed w-3/4">
                Give a detailed description of the package you are serving.
              </p>
              <button className="bg-brand-light text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 hover:bg-brand-dark transition-colors">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Can Offer You */}
      <section className="py-24 px-6 md:px-12 container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          What We <span className="font-serif italic font-bold text-brand-dark">Can Offer You</span>
        </h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-16">
          Add a short description of the business and the services that you provide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {/* Offer 1 */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
              alt="Bespoke Tour Packages"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 right-6 text-white text-left text-xl font-semibold">
              Bespoke Tour
              <br />
              Packages
            </h3>
          </div>
          {/* Offer 2 */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1541819747970-d29b0becc4fa?auto=format&fit=crop&w=600&q=80"
              alt="Certified Activity Guides"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 right-6 text-white text-left text-xl font-semibold">
              Certified Activity
              <br />
              Guides
            </h3>
          </div>
          {/* Offer 3 */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1516315808-fc7b9cc0d0f2?auto=format&fit=crop&w=600&q=80"
              alt="A la Carte Activities"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 right-6 text-white text-left text-xl font-semibold">
              A la Carte
              <br />
              Activities
            </h3>
          </div>
          {/* Offer 4 */}
          <div className="relative aspect-square md:aspect-[4/5] rounded-2xl overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1610471206155-23c14a48e718?auto=format&fit=crop&w=600&q=80"
              alt="Transport & Airport Transfers"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
            <h3 className="absolute bottom-6 left-6 right-6 text-white text-left text-xl font-semibold">
              Transport &<br />
              Airport Transfers
            </h3>
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="relative w-full py-32 px-6 md:px-12 flex items-center justify-center min-h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
            alt="Mountains"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#06332e]/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-20">
            What Our <span className="font-serif italic font-bold">Clients Say</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full text-white">
            {/* Testimonial 1 */}
            <div className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Boost your product and service's credibility by adding testimonials from your
                clients. People love recommendations so feedback from others who've tried it is
                invaluable.
              </p>
              <p className="font-bold">Miguel Rivera</p>
            </div>
            {/* Testimonial 2 */}
            <div className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Boost your product and service's credibility by adding testimonials from your
                clients. People love recommendations so feedback from others who've tried it is
                invaluable.
              </p>
              <p className="font-bold">Larissa Charter</p>
            </div>
            {/* Testimonial 3 */}
            <div className="flex flex-col">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-white text-white" />
                ))}
              </div>
              <p className="text-sm leading-relaxed opacity-90 mb-6">
                Boost your product and service's credibility by adding testimonials from your
                clients. People love recommendations so feedback from others who've tried it is
                invaluable.
              </p>
              <p className="font-bold">Carey Larson</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer & Book Now CTA */}
      <footer className="bg-[#0a0a0a] text-white pt-16 pb-12 px-6 md:px-12 w-full">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Footer Logo */}
          <div className="flex items-center gap-1">
            <Navigation className="w-5 h-5 -rotate-45 fill-white" />
            <span className="font-semibold text-lg italic">
              <span className="font-bold font-sans not-italic">Leav</span> Tours
            </span>
          </div>

          {/* Huge Booking Image Card */}
          <div className="relative w-full aspect-[2/1] md:aspect-[3/1] rounded-[2rem] overflow-hidden flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1545622783-b3c9b74052f5?auto=format&fit=crop&w=1920&q=80"
              alt="Coastal Road from Car"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center px-4">
              <h2 className="text-4xl md:text-6xl font-light mb-4">
                Book a Tour <span className="font-serif italic font-bold">with Us</span>
              </h2>
              <p className="text-sm md:text-base opacity-90">
                Add a short statement that supports the heading.
              </p>
            </div>
          </div>

          {/* Footer Connect Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Phone</h4>
              <p className="text-gray-400 text-sm">(123) 456-7890</p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="font-bold text-lg">Email</h4>
              <p className="text-gray-400 text-sm">hello@reallygreatsite.com</p>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-bold text-lg">Social</h4>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-brand-light transition-colors">
                  <Facebook className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="hover:text-brand-light transition-colors">
                  <Twitter className="w-5 h-5 fill-current" />
                </a>
                <a href="#" className="hover:text-brand-light transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
