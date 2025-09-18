import { Card, CardContent } from "./ui/card";
import { Package, Smartphone, Shirt, Home, Cpu, Wrench } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Consumer Goods",
    description: "Everyday consumer products from trusted manufacturers."
  },
  {
    icon: Smartphone,
    title: "Electronics",
    description: "Cutting-edge tech products, components, and accessories with quality assurance."
  },
  {
    icon: Shirt,
    title: "Textiles & Apparel",
    description: "Fashion, clothing, and textile products in line with modern trends."
  },
  {
    icon: Home,
    title: "Home & Garden",
    description: "Furniture, décor, tools, and home improvement products worldwide."
  },
  {
    icon: Cpu,
    title: "Industrial Parts",
    description: "Machinery, components, and industrial equipment from certified suppliers."
  },
  {
    icon: Wrench,
    title: "Custom Manufacturing",
    description: "Specialized manufacturing solutions tailored to your requirements."
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            What We Source
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From consumer electronics to industrial machinery, we connect you with 
            verified suppliers across every major product category.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}