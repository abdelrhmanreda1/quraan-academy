import { Layout } from "@/components/layout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MessageCircle } from "lucide-react";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  return (
    <Layout>
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl font-serif font-bold text-primary">Frequently Asked Questions</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our courses, scheduling, payments, and technical requirements.
          </p>
          
          <div className="max-w-xl mx-auto mt-8 relative">
             <Input placeholder="Search questions..." className="pl-10 h-12 bg-white shadow-sm" />
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="grid gap-8">
           <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
              <h2 className="text-2xl font-serif font-bold text-primary mb-6">General Inquiries</h2>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
                <AccordionItem value="tech-1">
                    <AccordionTrigger className="text-lg font-medium">What software do I need for classes?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      We use Zoom or Skype for our classes. You will need a stable internet connection, a headset, and a webcam (optional but recommended).
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="pay-1">
                    <AccordionTrigger className="text-lg font-medium">What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      We accept all major credit cards (Visa, Mastercard), PayPal, and direct bank transfers. Payments are secure and encrypted.
                    </AccordionContent>
                </AccordionItem>
              </Accordion>
           </div>
           
           <div className="bg-secondary/10 p-8 rounded-2xl border border-secondary/20 text-center">
              <h3 className="text-xl font-bold text-primary mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">Can't find the answer you're looking for? Chat with our friendly team.</p>
              <div className="flex justify-center gap-4">
                 <Button className="bg-primary text-white hover:bg-primary/90">Contact Support</Button>
                 <Button variant="outline" className="border-primary text-primary">Chat on WhatsApp</Button>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
