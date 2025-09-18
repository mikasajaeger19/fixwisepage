import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">FW</span>
              </div>
              <span className="text-xl font-semibold">FixWise</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in global product sourcing. Connecting businesses 
              with verified manufacturers worldwide.
            </p>
            <div className="flex space-x-3">
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                <Facebook className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Consumer Goods</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Technology Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Textiles & Apparel</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Home & Garden</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Industrial Parts</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Manufacturing</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quality Assurance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supplier Network</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hello@fixwise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>903-779-8032</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Kerala, India</span>
              </div>
            </div>
            
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />
      </div>
    </footer>
  );
}