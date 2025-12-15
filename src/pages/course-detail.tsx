import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { Play, Clock, Users, ShieldCheck, CheckCircle2, Star, Download, Globe, MessageCircle, ArrowLeft, Award, Video, Mic, BarChart3, Medal, FileText } from "lucide-react";
import { COURSES, FAQS, TEACHERS } from "@/lib/constants";
import teacherImage from "@assets/generated_images/friendly_male_quran_tutor.png";

export default function CourseDetail() {
  const [match, params] = useRoute("/courses/:slug");
  
  if (!match) return <div>404 Course Not Found</div>;
  
  const course = COURSES.find(c => c.slug === params.slug) || COURSES[0];

  return (
    <Layout>
      {/* Course Header - Updated to Dark Theme */}
      <div className="bg-primary text-white relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/courses">
             <a className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors text-sm font-medium">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to All Courses
             </a>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary text-primary hover:bg-secondary font-bold px-4 py-1 text-sm rounded-full">
                {course.level}
              </Badge>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                {course.description}
              </p>
              
              <div className="flex flex-wrap gap-6 text-sm font-medium pt-4 border-t border-white/10 mt-8">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-secondary" />
                  <span>{course.duration} Content</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>{course.students} Enrolled</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-secondary fill-secondary" />
                  <span>{course.rating} ({course.reviews} Reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-gray-300 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-white block">Join 100+ Students</span>
                  <span className="text-white/60">started this week</span>
                </div>
              </div>
            </div>
            
            {/* Video Placeholder with Better UI */}
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/20 group cursor-pointer ring-1 ring-white/10">
              <img src={course.image} alt="Course Preview" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                   <div className="absolute inset-0 bg-secondary blur-xl opacity-50 rounded-full animate-pulse" />
                   <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform relative z-10">
                     <Play className="w-8 h-8 text-primary ml-1 fill-primary" />
                   </div>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                       <img src="/images/teacher-1.png" className="w-full h-full rounded-full object-cover" />
                    </div>
                    <div>
                       <div className="text-white font-bold text-sm">Course Introduction</div>
                       <div className="text-white/60 text-xs">By Sheikha Toka</div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-muted/50 p-1 rounded-xl h-auto">
                <TabsTrigger value="overview" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Overview</TabsTrigger>
                <TabsTrigger value="curriculum" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Tutors</TabsTrigger>
                <TabsTrigger value="reviews" className="py-3 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm font-medium">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="space-y-10 mt-8 animate-in fade-in-50 slide-in-from-bottom-2">
                <div className="prose prose-lg max-w-none text-foreground/80">
                  <h3 className="font-serif text-primary text-2xl mb-4">About This Course</h3>
                  <p className="leading-relaxed">
                    This comprehensive course is designed to take you from the basics to advanced understanding. 
                    Structured by expert scholars, it combines traditional knowledge with modern teaching methods.
                    Whether you are a beginner or looking to refine your knowledge, this course adapts to your pace.
                  </p>
                  
                  <h3 className="font-serif text-primary text-2xl mt-8 mb-4">What You Will Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {course.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-muted/30 rounded-xl border border-border">
                        <CheckCircle2 className="w-5 h-5 text-secondary shrink-0" />
                        <span className="font-medium text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* AI Feature Feature */}
                <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center relative overflow-hidden shadow-xl">
                   <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[80px] rounded-full" />
                   
                   <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
                     <Mic className="w-8 h-8 text-secondary" />
                   </div>
                   <div className="flex-1 relative z-10">
                     <div className="inline-block px-3 py-1 bg-secondary/20 text-secondary text-xs font-bold rounded-full mb-2 border border-secondary/20">New Feature</div>
                     <h4 className="font-serif font-bold text-2xl mb-2">AI-Powered Pronunciation Analysis</h4>
                     <p className="text-white/80 mb-6">
                       Practice your recitation anytime. Our advanced AI listens to your voice and provides instant feedback on Tajweed rules and pronunciation accuracy.
                     </p>
                     <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-primary">
                       Try Interactive Demo
                     </Button>
                   </div>
                </div>

                {/* Level Infographic (Requested in Word Doc) */}
                <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
                   <h3 className="text-2xl font-serif font-bold text-primary mb-6">Course Progression Path</h3>
                   <div className="relative">
                      {/* Line */}
                      <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -z-10 -translate-y-1/2 hidden md:block" />
                      
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                         {[
                            { level: 1, title: "Foundation", desc: "Basic Letters" },
                            { level: 2, title: "Beginner", desc: "Connecting Letters" },
                            { level: 3, title: "Intermediate", desc: "Tajweed Rules" },
                            { level: 4, title: "Advanced", desc: "Fluency & Maqamat" },
                         ].map((l, i) => (
                            <div key={i} className="bg-white p-4 rounded-xl border border-border text-center relative hover:scale-105 transition-transform">
                               <div className="w-8 h-8 rounded-full bg-secondary text-primary font-bold flex items-center justify-center mx-auto mb-3 border-4 border-white">
                                  {l.level}
                               </div>
                               <div className="font-bold text-primary">{l.title}</div>
                               <div className="text-xs text-muted-foreground">{l.desc}</div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Student Progress Tracking Mockup */}
                <div className="border border-border rounded-2xl p-8 bg-white shadow-sm">
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                         <BarChart3 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                         <h3 className="text-xl font-serif font-bold text-primary">Track Your Progress</h3>
                         <p className="text-muted-foreground text-sm">Visualize your journey to mastery</p>
                      </div>
                   </div>
                   
                   <div className="space-y-6">
                      <div className="space-y-2">
                         <div className="flex justify-between text-sm font-medium">
                            <span>Tajweed Accuracy</span>
                            <span className="text-primary">85%</span>
                         </div>
                         <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[85%] bg-secondary rounded-full" />
                         </div>
                      </div>
                      <div className="space-y-2">
                         <div className="flex justify-between text-sm font-medium">
                            <span>Memorization</span>
                            <span className="text-primary">42%</span>
                         </div>
                         <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <div className="h-full w-[42%] bg-primary rounded-full" />
                         </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 pt-4">
                         {[1,2,3].map(i => (
                            <div key={i} className="bg-muted/30 p-4 rounded-xl text-center border border-border">
                               <Medal className={`w-8 h-8 mx-auto mb-2 ${i === 1 ? "text-secondary" : "text-gray-300"}`} />
                               <div className="text-xs font-bold text-muted-foreground">Level {i} Badge</div>
                            </div>
                         ))}
                      </div>
                   </div>
                </div>

                {/* Related Articles Section */}
                <div>
                   <h3 className="text-2xl font-serif font-bold text-primary mb-6">Related Articles</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[1,2].map(i => (
                         <div key={i} className="flex gap-4 p-4 border border-border rounded-xl hover:bg-muted/20 cursor-pointer">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                               <FileText className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                               <h4 className="font-bold text-primary text-sm mb-1">Understanding the importance of Tajweed</h4>
                               <p className="text-xs text-muted-foreground line-clamp-2">Learn why proper pronunciation is crucial for reciting the Holy Quran correctly.</p>
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              </TabsContent>
              
              <TabsContent value="curriculum" className="mt-8">
                 <div className="space-y-4">
                   {[1,2,3,4].map((level) => (
                     <div key={level} className="border border-border rounded-xl overflow-hidden bg-white shadow-sm">
                        <div className="bg-primary/5 p-4 flex justify-between items-center">
                           <div className="font-bold text-primary flex items-center gap-3">
                              <span className="bg-primary text-white w-6 h-6 rounded flex items-center justify-center text-xs">{level}</span>
                              Level {level}: Foundation & Basics
                           </div>
                           <span className="text-sm text-muted-foreground font-normal bg-white px-2 py-1 rounded border border-border">12 Lessons • 4h 30m</span>
                        </div>
                        <div className="divide-y divide-border/50">
                           {[1,2,3].map(lesson => (
                             <div key={lesson} className="p-4 flex items-center justify-between hover:bg-muted/20 transition-colors group cursor-pointer">
                                <div className="flex items-center gap-4">
                                  <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Play className="w-3 h-3 fill-current" />
                                  </div>
                                  <div>
                                     <div className="font-medium text-primary">Introduction to Module {lesson}</div>
                                     <div className="text-xs text-muted-foreground">15 mins</div>
                                  </div>
                                </div>
                                <Button variant="ghost" size="sm" className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">Preview</Button>
                             </div>
                           ))}
                        </div>
                     </div>
                   ))}
                 </div>
              </TabsContent>

              <TabsContent value="instructor" className="mt-8">
                {/* Meet Our Tutors Section */}
                <div className="space-y-8">
                   <h3 className="text-2xl font-serif font-bold text-primary">Meet Our Expert Tutors</h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {TEACHERS.slice(0, 2).map(teacher => (
                         <div key={teacher.id} className="bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-start gap-4">
                               <img src={teacher.image} alt={teacher.name} className="w-20 h-20 rounded-full object-cover border-2 border-secondary" />
                               <div>
                                  <h4 className="font-bold text-lg text-primary">{teacher.name}</h4>
                                  <div className="text-secondary text-sm font-medium mb-2">{teacher.role}</div>
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                     <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> {teacher.rating} Rating
                                  </div>
                               </div>
                            </div>
                            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                               {teacher.bio}
                            </p>
                            <div className="mt-4 pt-4 border-t border-border flex flex-wrap gap-2">
                               {teacher.certificates?.map((cert, i) => (
                                  <Badge key={i} variant="secondary" className="text-[10px] bg-primary/5 text-primary hover:bg-primary/10">{cert}</Badge>
                               ))}
                            </div>
                         </div>
                      ))}
                   </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* FAQ */}
            <div className="pt-12 border-t border-border">
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h3>
              <Accordion type="single" collapsible className="w-full">
                {FAQS.map((faq, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
                    <AccordionTrigger className="text-lg font-medium text-primary py-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="border-none shadow-xl overflow-hidden ring-1 ring-border bg-white rounded-2xl">
                <div className="bg-primary p-8 text-center text-white relative overflow-hidden">
                   <div className="absolute inset-0 bg-pattern opacity-10" />
                   <div className="relative z-10">
                      <div className="text-sm text-white/70 uppercase tracking-widest font-medium mb-1">Course Fee</div>
                      <div className="text-5xl font-serif font-bold text-white mb-2">{course.price}</div>
                      <div className="text-sm text-secondary font-medium bg-white/10 inline-block px-3 py-1 rounded-full">30-Day Money-Back Guarantee</div>
                   </div>
                </div>
                <CardContent className="p-6 space-y-6">
                  <Link href="/free-trial">
                    <Button size="lg" className="w-full bg-secondary text-primary font-bold hover:bg-secondary/90 h-14 shadow-lg shadow-secondary/20 text-lg rounded-xl mb-3">
                      Start Free Trial
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full border-primary text-primary h-12 rounded-xl">
                    Enroll Now
                  </Button>
                  
                  <div className="space-y-4 pt-4 border-t border-border">
                    <h4 className="font-bold text-sm text-primary">This Course Includes:</h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-3">
                        <Video className="w-4 h-4 text-secondary shrink-0" /> {course.duration} on-demand video
                      </li>
                      <li className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-secondary shrink-0" /> 25 downloadable resources
                      </li>
                      <li className="flex items-center gap-3">
                        <Globe className="w-4 h-4 text-secondary shrink-0" /> Full lifetime access
                      </li>
                       <li className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-secondary shrink-0" /> Ijazah Certification available
                      </li>
                    </ul>
                  </div>
                  
                  {/* Guarantee Badge */}
                  <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3 border border-green-100">
                     <ShieldCheck className="w-8 h-8 text-green-600" />
                     <div className="text-xs text-green-800">
                        <strong>100% Satisfaction Guarantee.</strong><br/>
                        Not satisfied? Get a full refund within the first 30 days.
                     </div>
                  </div>
                </CardContent>
              </Card>

              {/* WhatsApp Widget */}
              <div className="bg-[#25D366] text-white rounded-2xl p-6 flex items-center gap-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                 <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6" />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg">Have Questions?</h4>
                    <p className="text-xs text-white/80 mb-1">Chat with our admissions team directly.</p>
                    <div className="text-sm font-bold underline">Chat on WhatsApp &rarr;</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
