export default function Services() {
    const services = [
      {
        icon: "WhatsApp Image 2025-01-20 at 18.15.22 (2).jpeg",
        title: "Dry Cupping",
        description: "Traditional dry cupping therapy to improve blood flow and relieve muscle tension.",
        adjustPosition: true
      },
      {
        icon: "unnamed.jpg",
        title: "Humid Cupping",
        description: "Humid cupping technique for enhanced detoxification and skin rejuvenation.",
        adjustPosition: false
      },
      {
        icon: "WhatsApp Image 2025-01-20 at 18.15.22.jpeg",
        title: "Relaxing Massage",
        description: "Soothing massage therapy to complement cupping treatments and promote overall relaxation.",
        adjustPosition: true
      },
    ];
  
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-lg shadow-md overflow-hidden group"
                style={{ height: "300px" }} // Ensure consistent card height
              >
                {/* Background Image */}
                <img
                  src={service.icon}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={service.adjustPosition ? { objectPosition: "50% 60%" } : {}}
                />
                {/* Text Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-center">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }