import { Card, CardContent } from "./ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content: "ProSource helped us find reliable manufacturers in Asia for our IoT devices. Their quality control process gave us confidence, and we saved 35% on production costs.",
    rating: 5,
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    title: "Procurement Manager",
    company: "Global Retail Co.",
    content: "The team's expertise in textile sourcing is unmatched. They found us sustainable suppliers that met our ethical standards while keeping costs competitive.",
    rating: 5,
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    title: "Founder",
    company: "HomeStyle Brand",
    content: "From furniture to home décor, ProSource has been our trusted partner for 3 years. Their logistics support makes international sourcing seamless.",
    rating: 5,
    avatar: "EW"
  },
  {
    name: "David Park",
    title: "Operations Director",
    company: "Industrial Solutions Ltd.",
    content: "Finding specialized industrial components used to take months. Now we get quality parts in weeks, with full traceability and compliance documentation.",
    rating: 5,
    avatar: "DP"
  },
  {
    name: "Lisa Thompson",
    title: "Product Manager",
    company: "Consumer Electronics Co.",
    content: "Their supplier verification process is thorough. We've never had quality issues with any products sourced through ProSource. Highly recommended!",
    rating: 5,
    avatar: "LT"
  },
  {
    name: "Ahmed Hassan",
    title: "Founder",
    company: "Fashion Forward",
    content: "ProSource connected us with ethical manufacturers in Bangladesh and Vietnam. Their transparency in the supply chain helped us build a sustainable brand.",
    rating: 5,
    avatar: "AH"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. See what business leaders say about 
            their sourcing success with ProSource.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary/20 mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${testimonial.name}`} />
                    <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}