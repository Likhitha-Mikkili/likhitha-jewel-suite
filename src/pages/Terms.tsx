import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">Terms & Conditions</h1>

            <Card>
              <CardContent className="pt-6 space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Last updated: {new Date().toLocaleDateString()}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Please read these terms and conditions carefully before using our website or purchasing 
                    any products from The Fashion Edit.in.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using this website, you accept and agree to be bound by the terms and 
                    provision of this agreement. If you do not agree to these terms, please do not use our website.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">2. Use of Website</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    You agree to use the website only for lawful purposes and in a way that does not infringe 
                    the rights of others or restrict their use and enjoyment of the website.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">3. Product Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We strive to provide accurate product information. However, we do not warrant that product 
                    descriptions or other content is accurate, complete, reliable, current, or error-free. 
                    Colors may vary due to monitor settings.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">4. Pricing and Payment</h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    All prices are listed in Indian Rupees (INR) and are subject to change without notice. 
                    We accept various payment methods as listed on our checkout page. Payment must be received 
                    in full before order processing.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">5. Orders and Delivery</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to refuse or cancel any order for any reason. All orders are subject 
                    to product availability. Delivery times are estimates and are not guaranteed.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">6. Returns and Refunds</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Please refer to our Returns & Exchanges page for detailed information about our return policy. 
                    Returns must be made within 30 days of purchase and meet our return conditions.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">7. Intellectual Property</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    All content on this website, including text, graphics, logos, images, and software, is the 
                    property of The Fashion Edit.in and is protected by copyright laws. Unauthorized use is prohibited.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    The Fashion Edit.in shall not be liable for any indirect, incidental, special, or consequential 
                    damages arising out of the use or inability to use our products or website.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">9. Privacy</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy to understand how we collect, 
                    use, and protect your personal information.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">10. Changes to Terms</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We reserve the right to modify these terms at any time. Changes will be effective immediately 
                    upon posting to the website. Your continued use of the website constitutes acceptance of the 
                    modified terms.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">11. Governing Law</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms and conditions are governed by and construed in accordance with the laws of India. 
                    Any disputes shall be subject to the exclusive jurisdiction of the courts in India.
                  </p>
                </div>

                <div>
                  <h2 className="font-heading text-2xl font-semibold mb-4">12. Contact Information</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    If you have any questions about these Terms & Conditions, please contact us at 
                    mikkililikhitha4353@gmail.com
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

export default Terms;
