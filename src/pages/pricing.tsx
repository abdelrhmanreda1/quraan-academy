import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShieldCheck, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { FAQS } from "@/lib/constants";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Pricing() {
  return (
    <Layout>
      <div className="bg-primary text-primary-foreground py-24 relative overflow-hidden">
         <div className="absolute inset-0 bg-pattern opacity-10" />
         <div className="container mx-auto px-4 text-center relative z-10 space-y-6">
           <h1 className="text-4xl md:text-6xl font-serif font-bold">Affordable Quran Education</h1>
           <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
             Choose a plan that fits your schedule and budget. No hidden fees.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="flex flex-col border-none shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-muted-foreground">Basic</CardTitle>
              <div className="text-4xl font-serif font-bold text-primary pt-2">$40<span className="text-base font-sans font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>Great for beginners</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 pt-6">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 2 Classes per Week</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 30 Minutes per Class</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 1-on-1 Tutoring</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> Progress Reports</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/free-trial" className="w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">Choose Basic</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Standard Plan (Popular) */}
          <Card className="flex flex-col border-2 border-secondary shadow-2xl scale-105 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-primary font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wide shadow-md">
              Most Popular
            </div>
            <CardHeader className="text-center pb-2 bg-primary/5 rounded-t-xl pt-10">
              <CardTitle className="text-xl font-bold text-primary">Standard</CardTitle>
              <div className="text-4xl font-serif font-bold text-primary pt-2">$60<span className="text-base font-sans font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>Best for steady progress</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 pt-6">
              <ul className="space-y-3 text-sm font-medium">
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 3 Classes per Week</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 45 Minutes per Class</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 1-on-1 Tutoring</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> Monthly Assessment</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> Recorded Sessions</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/free-trial" className="w-full">
                <Button className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 shadow-lg">Choose Standard</Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Intensive Plan */}
          <Card className="flex flex-col border-none shadow-xl">
            <CardHeader className="text-center pb-2">
              <CardTitle className="text-xl font-bold text-muted-foreground">Intensive</CardTitle>
              <div className="text-4xl font-serif font-bold text-primary pt-2">$100<span className="text-base font-sans font-normal text-muted-foreground">/mo</span></div>
              <CardDescription>For Hafiz aspirants</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 space-y-4 pt-6">
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 5 Classes per Week</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 60 Minutes per Class</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> Senior Reciters</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> Ijazah Preparation</li>
                <li className="flex gap-2"><Check className="w-5 h-5 text-secondary shrink-0" /> 24/7 Support</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/free-trial" className="w-full">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">Choose Intensive</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        {/* Guarantee */}
        <div className="mt-16 text-center bg-white p-8 rounded-2xl shadow-sm border border-border max-w-2xl mx-auto">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-primary mb-2">100% Satisfaction Guarantee</h3>
          <p className="text-muted-foreground">
            If you are not satisfied after your first month, we will refund your payment in full. No questions asked.
          </p>
        </div>

        {/* Pricing FAQ */}
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-primary">Common Questions</h2>
          </div>
          <Accordion type="single" collapsible className="w-full bg-white p-6 rounded-2xl shadow-sm border border-border">
            {FAQS.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Layout>
  );
}
