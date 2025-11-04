import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Recycle } from "lucide-react";

const Sustainability = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Our Commitment to Sustainability</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Eco-Friendly</h3>
                  <p className="text-sm text-muted-foreground">Sustainable practices</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Ethical Sourcing</h3>
                  <p className="text-sm text-muted-foreground">Responsible materials</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Recycle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Recycling</h3>
                  <p className="text-sm text-muted-foreground">Minimal waste approach</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Our Environmental Commitment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At The Fashion Edit.in, we recognize our responsibility to protect the environment 
                    and contribute to a sustainable future. We are committed to implementing ethical and 
                    eco-friendly practices throughout our entire supply chain, from sourcing to packaging.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Ethical Sourcing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We ensure that all our materials are sourced responsibly:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Conflict-free diamonds certified by the Kimberley Process</li>
                    <li>• Recycled gold and precious metals whenever possible</li>
                    <li>• Fair trade gemstones from verified suppliers</li>
                    <li>• Partnerships with mines that follow environmental regulations</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Sustainable Manufacturing</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Our production processes minimize environmental impact:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Energy-efficient workshops with renewable energy sources</li>
                    <li>• Water recycling systems in our manufacturing facilities</li>
                    <li>• Minimal waste production through precise cutting techniques</li>
                    <li>• Recycling of precious metal scraps and unused materials</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Eco-Friendly Packaging</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We use sustainable packaging materials:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Recycled and recyclable packaging materials</li>
                    <li>• FSC-certified paper and cardboard</li>
                    <li>• Biodegradable cushioning materials</li>
                    <li>• Reusable jewelry boxes and pouches</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Social Responsibility</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    We believe in fair and ethical treatment of all workers:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Fair wages and safe working conditions for all artisans</li>
                    <li>• Support for local communities and traditional crafts</li>
                    <li>• No child labor in our supply chain</li>
                    <li>• Regular audits of supplier practices</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Continuous Improvement</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are constantly working to improve our sustainability practices. We regularly review 
                    our processes, explore new eco-friendly technologies, and collaborate with industry 
                    partners to set higher standards for environmental responsibility in jewelry manufacturing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sustainability;
