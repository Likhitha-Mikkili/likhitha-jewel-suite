import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Returns = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="font-heading text-4xl font-bold mb-8">Returns & Exchanges</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
              <p className="text-muted-foreground mb-4">
                We want you to be completely satisfied with your purchase. If for any reason you're not,
                you may return your item within 30 days of delivery for a full refund or exchange.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p className="text-muted-foreground mb-4">To be eligible for a return:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Item must be in original condition</li>
                <li>Item must be unworn and unused</li>
                <li>Original packaging and tags must be intact</li>
                <li>Proof of purchase is required</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How to Return</h2>
              <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
                <li>Contact our customer service team</li>
                <li>Receive return authorization and shipping instructions</li>
                <li>Securely pack your item</li>
                <li>Ship using the provided label</li>
                <li>Refund will be processed within 7-10 business days</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Exchanges</h2>
              <p className="text-muted-foreground mb-4">
                We offer free exchanges for size or style changes. Simply follow the return process and
                indicate your exchange preference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
              <p className="text-muted-foreground">
                Contact our customer service team at support@thefashionedit.in for any return or exchange
                inquiries.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Returns;
