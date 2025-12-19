import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { Loader2, CheckCircle2, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PlacementTest() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
       setIsSubmitting(true);
       setTimeout(() => {
         setIsSubmitting(false);
         setIsComplete(true);
       }, 2000);
    }
  };

  if (isComplete) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 py-20 text-center max-w-2xl">
           <motion.div 
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className="bg-white p-12 rounded-3xl shadow-xl border border-border space-y-6"
           >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Your Learning Map is Ready!</h2>
              <p className="text-muted-foreground text-lg">
                Based on your answers, we have designed a personalized curriculum for you.
              </p>
              
              <div className="bg-primary/5 p-6 rounded-xl text-left space-y-4 my-8 border border-primary/10">
                 <h3 className="font-bold text-primary flex items-center gap-2">
                    <BookOpen className="w-5 h-5" /> Recommended Path: Intermediate Level 2
                 </h3>
                 <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Focus on Tajweed Rules (Noon Saakin)</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Memorization of Juz Amma</li>
                    <li className="flex gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Arabic Grammar Basics</li>
                 </ul>
              </div>
              
              <Button size="lg" className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 h-12">
                 Book My First Class Now
              </Button>
           </motion.div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-serif font-bold text-primary">Free Placement Test</h1>
          <p className="text-muted-foreground mt-2">Let's find the perfect starting point for your journey.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12 max-w-2xl">
         <Card className="border-none shadow-lg">
            <CardContent className="p-8">
               <div className="mb-8 flex justify-between items-center text-sm font-medium text-muted-foreground">
                  <span>Step {step} of 3</span>
                  <div className="flex gap-2">
                     {[1,2,3].map(i => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i <= step ? "bg-primary" : "bg-gray-200"}`} />
                     ))}
                  </div>
               </div>

               {step === 1 && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="space-y-4">
                       <h2 className="text-xl font-bold text-primary">Can you read Arabic script?</h2>
                       <RadioGroup defaultValue="none">
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="no" id="r1" />
                             <Label htmlFor="r1" className="cursor-pointer flex-1">No, I want to learn from scratch</Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="little" id="r2" />
                             <Label htmlFor="r2" className="cursor-pointer flex-1">Yes, but with difficulty</Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="fluent" id="r3" />
                             <Label htmlFor="r3" className="cursor-pointer flex-1">Yes, fluently</Label>
                          </div>
                       </RadioGroup>
                    </div>
                 </div>
               )}

               {step === 2 && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="space-y-4">
                       <h2 className="text-xl font-bold text-primary">Have you studied Tajweed before?</h2>
                       <RadioGroup defaultValue="none">
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="no" id="t1" />
                             <Label htmlFor="t1" className="cursor-pointer flex-1">No, never</Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="basic" id="t2" />
                             <Label htmlFor="t2" className="cursor-pointer flex-1">I know basic rules</Label>
                          </div>
                          <div className="flex items-center space-x-2 border p-4 rounded-xl hover:bg-muted/50 transition-colors">
                             <RadioGroupItem value="advanced" id="t3" />
                             <Label htmlFor="t3" className="cursor-pointer flex-1">Yes, I have studied advanced rules</Label>
                          </div>
                       </RadioGroup>
                    </div>
                 </div>
               )}

               {step === 3 && (
                 <div className="space-y-6 animate-in fade-in slide-in-from-right-4">
                    <div className="space-y-4">
                       <h2 className="text-xl font-bold text-primary">What is your primary goal?</h2>
                       <Select>
                          <SelectTrigger className="w-full h-12">
                             <SelectValue placeholder="Select a goal" />
                          </SelectTrigger>
                          <SelectContent>
                             <SelectItem value="reading">Improve Reading</SelectItem>
                             <SelectItem value="memorization">Hifz (Memorization)</SelectItem>
                             <SelectItem value="understanding">Understanding Meanings</SelectItem>
                             <SelectItem value="ijazah">Get Ijazah</SelectItem>
                          </SelectContent>
                       </Select>
                    </div>
                 </div>
               )}

               <div className="mt-8 pt-6 border-t border-border flex justify-between">
                  <Button variant="ghost" disabled={step === 1} onClick={() => setStep(step - 1)}>
                     Back
                  </Button>
                  <Button onClick={handleNext} disabled={isSubmitting} className="bg-primary text-white hover:bg-primary/90 min-w-[120px]">
                     {isSubmitting ? <Loader2 className="w-4 h-4 animate-spin" /> : step === 3 ? "Get Results" : "Next"}
                  </Button>
               </div>
            </CardContent>
         </Card>
      </div>
    </Layout>
  );
}
