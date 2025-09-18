import { Card, CardContent } from "./ui/card";
import { DollarSign, Clock, Shield, Globe, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Price Benchmarking",
    description: "Save large amounts on product costs through our price benchmarking tools that ensure you get the best price."
  },
  {
    icon: Clock,
    title: "Time Efficiency",
    description: "Reduce sourcing time from months to weeks with our streamlined process and expert team."
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    description: "Minimize supply chain risks through verified suppliers and comprehensive quality controls."
  },
  {
    icon: Globe,
    title: "Global Footprint",
    description: "Access manufacturers across the world with local expertise."
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Get personalized support from our end to end customer support team who understand your business needs."
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Our tools enable enterprise grade sourcing capability for SMEs."
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            Why Choose FixWise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don't just connect you with suppliers – we become your strategic partner 
            in global sourcing success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{benefit.stat}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}