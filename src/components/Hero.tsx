import { Button } from "./ui/button"

export default function Hero() {
  return (
    <section className="relative text-white py-40">
      <div className="absolute inset-0 z-0">
        <img
          src="WhatsApp Image 2025-01-20 at 18.15.20.jpeg"
          alt="Cupping Therapy"
          className="w-full h-full object-cover"
          style={{objectPosition: "50% 45%"}}
        />
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Experience the Healing Power of Cupping</h1>
        <p className="text-xl mb-8">Specialized in dry and humid cupping and relaxing massage</p>
        <Button size="lg" variant="secondary">
          Book an Appointment
        </Button>
      </div>
    </section>
  )
}

