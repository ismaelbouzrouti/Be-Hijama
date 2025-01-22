import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="050d6e0e-c5df-4dec-90a6-27c23a1f8637.jpg"
          alt="Relaxing Spa Environment"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <form className="space-y-4">
            <Input type="text" placeholder="Your Name" required />
            <Input type="email" placeholder="Your Email" required />
            <Input type="tel" placeholder="Your Phone" />
            <Textarea placeholder="Your Message" required />
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

