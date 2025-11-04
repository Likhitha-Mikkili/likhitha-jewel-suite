import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl font-bold mb-8 text-center">
              Frequently Asked Questions
            </h1>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent>
                  We offer a 30-day return policy for all unworn and undamaged items. 
                  The jewelry must be returned in its original packaging with all tags attached. 
                  Please contact our customer service team to initiate a return.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left">
                  Do you offer resizing services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer complimentary resizing for rings purchased from us within 
                  60 days of purchase. Additional resizing may be available for a fee. 
                  Please contact us for more details.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left">
                  How do I care for my jewelry?
                </AccordionTrigger>
                <AccordionContent>
                  Store your jewelry in a cool, dry place, preferably in individual pouches. 
                  Clean regularly with a soft cloth and avoid exposure to chemicals, perfumes, 
                  and harsh cleaning agents. Visit our Jewelry Care page for detailed instructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left">
                  What payment methods do you accept?
                </AccordionTrigger>
                <AccordionContent>
                  We accept all major credit and debit cards, UPI, net banking, and digital wallets 
                  through our secure payment gateway powered by Razorpay. All transactions are encrypted 
                  and secure.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className="text-left">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent>
                  Standard shipping takes 5-7 business days for most locations in India. 
                  Metro cities may receive orders within 3-5 business days. Express shipping 
                  options are available at checkout for faster delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className="text-left">
                  Do you provide certificates of authenticity?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, all our gold and diamond jewelry comes with a certificate of authenticity 
                  that details the quality and specifications of the materials used. Each piece 
                  is hallmarked and certified.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className="text-left">
                  Can I track my order?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, once your order is shipped, you will receive a tracking number via email 
                  and SMS. You can use this number to track your package on our courier partner's 
                  website or through your account on our website.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className="text-left">
                  Do you offer custom design services?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, we offer custom jewelry design services. Our expert designers will work 
                  with you to create a unique piece that reflects your personal style. 
                  Please contact us to schedule a consultation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className="text-left">
                  What is your warranty policy?
                </AccordionTrigger>
                <AccordionContent>
                  All our gold jewelry comes with a lifetime warranty against manufacturing defects. 
                  This warranty covers issues with craftsmanship but does not cover normal wear and tear, 
                  damage from misuse, or loss of stones due to impact.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className="text-left">
                  How can I contact customer service?
                </AccordionTrigger>
                <AccordionContent>
                  You can reach our customer service team via email at mikkililikhitha4353@gmail.com 
                  or through our contact form. We typically respond within 24 hours during business days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
