import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, MapPin, Shield, Clock, Search, Mail, Factory } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Supplier {
  id: number;
  name: string;
  location: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  responseTime: string;
  minOrder: string;
  priceRange: string;
  description: string;
  productSpecs: {
    material: string;
    width: string;
    length: string;
    thickness: string;
    adhesive: string;
    certification: string[];
  };
  image: string;
  logo: string;
  specialties: string[];
  productImages: string[];
}

const suppliers: Supplier[] = [
  {
    id: 1,
    name: "SafeGrip Industries",
    location: "Guangzhou, China",
    rating: 4.8,
    reviewCount: 156,
    verified: true,
    responseTime: "< 2 hours",
    minOrder: "500 rolls",
    priceRange: "$2.50 - $4.20 per roll",
    description:
      "Leading manufacturer of industrial safety tapes with 15 years of experience. ISO 9001 certified facility specializing in anti-skid and safety marking solutions.",
    productSpecs: {
      material: "Aluminum Oxide Grit on PVC Base",
      width: "25mm, 50mm, 100mm available",
      length: "5m, 10m, 18m rolls",
      thickness: "0.7mm ± 0.1mm",
      adhesive: "Pressure-sensitive acrylic",
      certification: ["CE", "ISO 9001", "SGS", "REACH"],
    },
    image:
      "https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    logo: "SG",
    specialties: ["Industrial Safety", "Marine Grade", "Heavy Duty"],
    productImages: [
      "https://images.unsplash.com/photo-1675796011531-3f32b14f159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: 2,
    name: "NoSlip Solutions Ltd",
    location: "Shenzhen, China",
    rating: 4.6,
    reviewCount: 89,
    verified: true,
    responseTime: "< 4 hours",
    minOrder: "1000 rolls",
    priceRange: "$1.80 - $3.50 per roll",
    description:
      "Specialized manufacturer focusing on commercial and residential anti-slip solutions. Known for innovative adhesive technology and competitive pricing.",
    productSpecs: {
      material: "Silicon Carbide on Vinyl Base",
      width: "19mm, 25mm, 50mm, 75mm, 100mm",
      length: "3m, 5m, 10m, 15m rolls",
      thickness: "0.6mm ± 0.05mm",
      adhesive: "Removable acrylic (3M equivalent)",
      certification: ["RoHS", "ISO 14001", "OSHA Compliant"],
    },
    image:
      "https://images.unsplash.com/photo-1604233707683-fac593c74600?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    logo: "NS",
    specialties: ["Removable Adhesive", "Custom Sizes", "Bulk Orders"],
    productImages: [
      "https://images.unsplash.com/photo-1675796011531-3f32b14f159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
  {
    id: 3,
    name: "ProGrip Manufacturing",
    location: "Qingdao, China",
    rating: 4.9,
    reviewCount: 234,
    verified: true,
    responseTime: "< 1 hour",
    minOrder: "300 rolls",
    priceRange: "$3.20 - $5.80 per roll",
    description:
      "Premium anti-skid tape manufacturer with advanced R&D capabilities. Serves Fortune 500 companies with custom solutions and rapid prototyping services.",
    productSpecs: {
      material: "Ceramic Particles on Polyester Film",
      width: "12mm, 25mm, 50mm, 100mm, 150mm",
      length: "1m, 5m, 10m, 18m, 50m rolls",
      thickness: "0.8mm ± 0.05mm",
      adhesive: "Permanent acrylic with primer",
      certification: ["UL Listed", "FM Approved", "IMO Certified", "ABS Type Approved"],
    },
    image:
      "https://images.unsplash.com/photo-1720282338064-6c47e32bc0b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    logo: "PG",
    specialties: ["Marine Certified", "Custom Solutions", "Premium Quality"],
    productImages: [
      "https://images.unsplash.com/photo-1675796011531-3f32b14f159d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    ],
  },
];

export function ProductSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-12">
      {/* Search Header */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl mb-6 text-center text-gray-900">Find Your Product</h1>
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for products..."
                  className="pl-10 py-3"
                />
              </div>
              <Button onClick={handleSearch} size="lg">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Show FixWise if no results yet */}
      {!showResults ? (
        <div className="flex items-center justify-center flex-1 min-h-[70vh]">
            <img 
            src="/logo.png" 
            alt="FixWise Logo" 
            className="w-80 h-auto" // adjust size (64 = 16rem)
            />
        </div>
      ) : (
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-lg mb-2 text-gray-900">
              Search Results for "{searchQuery}"
            </h2>
            <p className="text-gray-600">{suppliers.length} suppliers found</p>
          </div>

          <div className="space-y-6">
            {suppliers.map((supplier) => (
              <Card
                key={supplier.id}
                className="border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-3 gap-6">
                    {/* Supplier Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold">{supplier.logo}</span>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900">
                                {supplier.name}
                              </h3>
                              {supplier.verified && (
                                <Badge
                                  variant="outline"
                                  className="text-green-600 border-green-600"
                                >
                                  <Shield className="w-3 h-3 mr-1" />
                                  Verified
                                </Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {supplier.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                {supplier.rating} ({supplier.reviewCount} reviews)
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                Response: {supplier.responseTime}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{supplier.description}</p>

                      {/* Specialties */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {supplier.specialties.map((specialty, index) => (
                          <Badge key={index} variant="secondary">
                            {specialty}
                          </Badge>
                        ))}
                      </div>

                      {/* Product Specifications */}
                      <div className="bg-gray-50 rounded-lg p-4 mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          Product Specifications
                        </h4>
                        <div className="grid grid-cols-2 gap-3 text-sm">
                          <div>
                            <span className="text-gray-600">Material:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.material}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Width:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.width}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Length:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.length}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Thickness:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.thickness}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Adhesive:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.adhesive}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Certifications:</span>
                            <span className="ml-2">
                              {supplier.productSpecs.certification.join(", ")}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Pricing and MOQ */}
                      <div className="flex items-center justify-between">
                        <div className="flex gap-6 text-sm">
                          <div>
                            <span className="text-gray-600">Price Range:</span>
                            <span className="ml-2 font-medium text-primary">
                              {supplier.priceRange}
                            </span>
                          </div>
                          <div>
                            <span className="text-gray-600">Min Order:</span>
                            <span className="ml-2 font-medium">
                              {supplier.minOrder}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Mail className="w-4 h-4 mr-1" />
                            Contact
                          </Button>
                          <Button size="sm">Request Quote</Button>
                        </div>
                      </div>
                    </div>

                    {/* Product Images */}
                    <div className="space-y-4">
                      <div className="rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={supplier.image}
                          alt={`${supplier.name} facility`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={supplier.productImages[0]}
                          alt="Anti-skid tape product"
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <Button variant="outline" size="sm" className="w-full">
                          <Factory className="w-4 h-4 mr-1" />
                          View Supplier Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
