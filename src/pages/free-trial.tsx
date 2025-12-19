import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Clock, BookOpen, CheckCircle2 } from "lucide-react";
import patternImage from "@assets/generated_images/abstract_islamic_geometric_pattern.png";

export default function FreeTrial() {
  return (
    <Layout>
      <div className="min-h-[90vh] flex items-center relative overflow-hidden bg-primary/5 py-12 md:py-0">
         {/* Background Decoration */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-primary opacity-5 skew-x-12" />
         <div className="absolute bottom-0 left-0 w-1/3 h-full bg-secondary opacity-5 -skew-x-12" />
         
         <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               <div className="space-y-8">
                  <div>
                    <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">No Commitment Required</span>
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-4">Book Your Free Trial Session</h1>
                    <p className="text-lg text-muted-foreground">
                      Experience our teaching quality firsthand. Meet your tutor, discuss your goals, and get a personalized learning plan.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                     {[
                        "30-Minute One-on-One Session",
                        "Level Assessment by Expert Tutor",
                        "Customized Learning Roadmap",
                        "Q&A about Curriculum"
                     ].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-border">
                           <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                              <CheckCircle2 className="w-5 h-5 text-primary" />
                           </div>
                           <span className="font-medium text-primary">{item}</span>
                        </div>
                     ))}
                  </div>
               </div>
               
               <div className="relative">
                  <Card className="border-none shadow-2xl relative z-10">
                     <CardHeader className="bg-primary text-white rounded-t-xl p-8 text-center">
                        <CardTitle className="text-2xl font-serif">Schedule Your Session</CardTitle>
                        <CardDescription className="text-white/70">Fill out the form below to get started</CardDescription>
                     </CardHeader>
                     <CardContent className="p-8 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Name</label>
                              <Input placeholder="Student Name" />
                           </div>
                           <div className="space-y-2">
                              <label className="text-sm font-medium">Age</label>
                              <Input type="number" placeholder="Years" />
                           </div>
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium">Email</label>
                           <Input type="email" placeholder="email@address.com" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-sm font-medium">Phone / WhatsApp</label>
                           <Input placeholder="+1 234 567 890" />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                               <label className="text-sm font-medium">Interested Course</label>
                               <Select>
                                  <SelectTrigger>
                                     <SelectValue placeholder="Select..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                     <SelectItem value="quran">Quran Recitation</SelectItem>
                                     <SelectItem value="arabic">Arabic Language</SelectItem>
                                     <SelectItem value="islamic">Islamic Studies</SelectItem>
                                  </SelectContent>
                               </Select>
                            </div>
                            <div className="space-y-2">
                               <label className="text-sm font-medium">Preferred Time</label>
                               <Select>
                                  <SelectTrigger>
                                     <SelectValue placeholder="Timezone..." />
                                  </SelectTrigger>
                                  <SelectContent>
                                     <SelectItem value="morning">Morning</SelectItem>
                                     <SelectItem value="evening">Evening</SelectItem>
                                     <SelectItem value="weekend">Weekend</SelectItem>
                                  </SelectContent>
                               </Select>
                            </div>
                        </div>
                        
                        <Button className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 h-12 text-lg shadow-lg">
                           Book My Free Class
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                           By booking, you agree to our Terms & Privacy Policy.
                        </p>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>
      </div>
    </Layout>
  );
}
