import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Search, Users, Shield, Truck } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Product Discovery",
    description: "Search for what you need. Our tool scrapes the internet and identifies the best suppliers matching your requirements.",
    image: "https://images.unsplash.com/photo-1721937718756-3bfec49f42a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwd2FyZWhvdXNlJTIwcHJvZHVjdHN8ZW58MXx8fHwxNzU4MDkzNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Users,
    title: "Supplier Negotiation and Sampling",
    description: "We then negotiate a suitable deal with the manufacturers and obtain samples for product validation.",
    image: "https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc1Nzk5ODU1NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Shield,
    title: "Quality Control",
    description: "Rigorous testing and inspection ensure products meet your standards before shipping.",
    image: "https://images.unsplash.com/photo-1674573070777-690850b7c68a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzU4MDE0ODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description: "We handle shipping, customs, and delivery to get your products to you safely and on time.",
    image: "https://images.unsplash.com/photo-1651649503984-5b5f3514d6f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lcnMlMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzU4MDkzNzczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function Process() {
  return (
    <section id="process" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our proven 4-step process ensures you get the right products from the right suppliers, 
            every time.
          </p>
        </div>

        <div className="space-y-16">
          {steps.map((step, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
            }`}>
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {index + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mr-4" />
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}