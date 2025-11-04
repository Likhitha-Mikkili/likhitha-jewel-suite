import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Our Story</h1>

            <Card className="mb-8">
              <CardContent className="pt-6 space-y-6">
                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">About The Fashion Edit.in</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to The Fashion Edit.in, where timeless elegance meets contemporary design. 
                    Our journey began with a passion for creating exquisite jewelry pieces that tell a story 
                    and celebrate life's most precious moments.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe that every piece of jewelry should be as unique as the person wearing it. 
                    Our mission is to craft beautiful, handcrafted jewelry that combines traditional 
                    craftsmanship with modern aesthetics, ensuring each piece becomes a cherished heirloom.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Quality & Craftsmanship</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every piece in our collection is carefully crafted using the finest materials and 
                    techniques. We work with skilled artisans who bring decades of experience and a 
                    dedication to excellence to every design. From the initial sketch to the final polish, 
                    we ensure that each piece meets our exacting standards of quality and beauty.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">Sustainability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to ethical and sustainable practices in all aspects of our business. 
                    We source our materials responsibly and work with suppliers who share our values of 
                    environmental stewardship and fair labor practices.
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

export default About;
