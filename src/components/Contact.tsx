import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl mb-4 text-gray-900">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our sourcing experts today. We'll help you find the perfect 
            suppliers for your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border border-gray-200">
              <CardHeader>
                <CardTitle>Get a Free Quote</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company Name" />
                </div>
                <div>
                  <Label htmlFor="productType">Product Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consumer-goods">Consumer Goods</SelectItem>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="textiles">Textiles & Apparel</SelectItem>
                      <SelectItem value="home-garden">Home & Garden</SelectItem>
                      <SelectItem value="industrial">Industrial Parts</SelectItem>
                      <SelectItem value="custom">Custom Manufacturing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Project Details</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your sourcing needs, quantities, timeline, and any specific requirements..."
                    rows={4}
                  />
                </div>
                <Button className="w-full">Send Inquiry</Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1642522029691-029b5a432954?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MXx8fHwxNzU4MDE1Nzk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional business meeting"
                className="w-full h-48 object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="border border-gray-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-sm text-gray-600">hello@fixwise.com</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Phone</div>
                    <div className="text-sm text-gray-600">903-779-8032</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-sm text-gray-600">Kerala, India</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-4 flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <div>
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-sm text-gray-600">24/7 Support</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Need Immediate Help?</h3>
                <p className="text-gray-600 mb-4">
                  Speak with a sourcing expert right now. We're available 24/7 to help 
                  with urgent sourcing needs.
                </p>
                <Button variant="outline">Schedule a Call</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}