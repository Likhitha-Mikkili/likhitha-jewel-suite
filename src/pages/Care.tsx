import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Droplet, Shield } from "lucide-react";

const Care = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Jewelry Care Guide</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="pt-6 text-center">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Keep It Clean</h3>
                  <p className="text-sm text-muted-foreground">Regular cleaning maintains shine</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Droplet className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Avoid Chemicals</h3>
                  <p className="text-sm text-muted-foreground">Remove before cleaning or swimming</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-heading font-semibold mb-2">Store Safely</h3>
                  <p className="text-sm text-muted-foreground">Keep in original box or pouch</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">General Care Tips</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Remove jewelry before exercising, swimming, or bathing</li>
                    <li>• Apply perfume, hairspray, and lotion before putting on jewelry</li>
                    <li>• Store pieces separately to prevent scratching</li>
                    <li>• Clean regularly with a soft, lint-free cloth</li>
                    <li>• Have jewelry professionally cleaned and inspected annually</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Gold Jewelry Care</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Gold is durable but can be scratched. To clean gold jewelry:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Mix warm water with mild dish soap</li>
                    <li>• Soak jewelry for 10-15 minutes</li>
                    <li>• Gently brush with a soft toothbrush</li>
                    <li>• Rinse with clean water and dry with a soft cloth</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Diamond & Gemstone Care</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Diamonds and gemstones require special care to maintain their brilliance:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Clean with a specialized jewelry cleaner</li>
                    <li>• Avoid ultrasonic cleaners for certain gemstones</li>
                    <li>• Check settings regularly to ensure stones are secure</li>
                    <li>• Have prongs checked and tightened professionally</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Storage Tips</h2>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Store each piece in its original box or a soft pouch</li>
                    <li>• Keep jewelry in a cool, dry place away from sunlight</li>
                    <li>• Use anti-tarnish strips in storage boxes</li>
                    <li>• Store chains flat or hanging to prevent tangling</li>
                  </ul>
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

export default Care;
