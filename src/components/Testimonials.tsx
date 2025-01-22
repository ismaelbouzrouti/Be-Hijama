interface Testimonial {
    name: string;
    quote: string;
  }
  
  const testimonials: Testimonial[] = [
    {
      name: "Sarah L.",
      quote: "The cupping therapy at be.hijama has been life-changing. My chronic back pain has significantly improved!",
    },
    {
      name: "Michael R.",
      quote: "I was skeptical at first, but after trying their humid cupping, I'm a believer. Highly recommended!",
    },
    {
      name: "Emma T.",
      quote: "The combination of cupping and massage left me feeling completely rejuvenated. I'll definitely be back!",
    },
  ];
  
  const avatar = "avatar.png"; 
  
  export default function Testimonials() {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center">
                <img
                  src={avatar}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full mb-4"
                />
                <p className="text-gray-600 mb-4 text-center">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  