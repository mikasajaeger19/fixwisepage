import { Button } from "./ui/button";
import { ArrowRight, Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import {Link} from "react-router-dom"
export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg">
            <h1 className="text-4xl lg:text-5xl mb-6 text-gray-900 leading-tight">
              Source Products <span className="text-primary">Globally</span> with Confidence
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Connect with verified manufacturers worldwide. We handle quality control, 
              logistics, and compliance so you can focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <Link to='/search'>
                  <Button size="lg" className="flex items-center gap-2">
                    Start Sourcing
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              <Button variant="outline" size="lg" className="flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            {/* <div className="mt-8 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Verified Suppliers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
            </div> */}
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1741591647573-7c0e8806daec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBzdXBwbHklMjBjaGFpbiUyMG1hbnVmYWN0dXJpbmd8ZW58MXx8fHwxNzU4MDkzNzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Global supply chain manufacturing"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-900">Live Sourcing</span>
              </div>
              <div className="text-xs text-gray-600 mt-1">24/7 Global Network</div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}