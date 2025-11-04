import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Gem, Users } from "lucide-react";

const Craftsmanship = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Our Craftsmanship</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Expert Artisans</h3>
                  <p className="text-sm text-muted-foreground">Decades of experience</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Gem className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Finest Materials</h3>
                  <p className="text-sm text-muted-foreground">Premium quality guaranteed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Personal Touch</h3>
                  <p className="text-sm text-muted-foreground">Handcrafted with care</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">The Art of Jewelry Making</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    At The Fashion Edit.in, we believe that true beauty lies in the details. Each piece of 
                    jewelry is meticulously crafted by skilled artisans who have dedicated their lives to 
                    perfecting their craft. From the initial design sketch to the final polish, every step 
                    is executed with precision and care.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Traditional Techniques</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Our artisans employ time-honored techniques passed down through generations:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hand-forging and shaping of precious metals</li>
                    <li>• Traditional stone-setting methods for maximum security</li>
                    <li>• Hand-finishing and polishing for perfect luster</li>
                    <li>• Careful quality inspection at each stage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Modern Innovation</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    While we honor traditional methods, we also embrace modern technology to enhance our 
                    designs. Computer-aided design (CAD) allows us to visualize and perfect each piece 
                    before production, while advanced casting techniques ensure consistent quality and 
                    intricate detailing.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Quality Assurance</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Every piece undergoes rigorous quality checks:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Material purity verification and hallmarking</li>
                    <li>• Stone quality and authenticity certification</li>
                    <li>• Structural integrity and durability testing</li>
                    <li>• Final aesthetic inspection before packaging</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Our Promise</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to creating jewelry that not only meets but exceeds your expectations. 
                    Each piece is a testament to our dedication to excellence, combining artistic vision with 
                    superior craftsmanship to create treasures that last a lifetime.
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

export default Craftsmanship;
