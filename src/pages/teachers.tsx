import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Award, BookOpen, Play } from "lucide-react";
import { TEACHERS } from "@/lib/constants";

export default function Teachers() {
  return (
    <Layout>
      <div className="bg-primary py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10" />
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <Badge variant="outline" className="border-secondary text-secondary">Our Faculty</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold">Meet Our Expert Tutors</h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Qualified scholars from Al-Azhar University dedicated to teaching Quran and Arabic with Ihsan (Excellence).
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEACHERS.map((teacher) => (
            <Card key={teacher.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none shadow-md flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-serif font-bold text-xl">{teacher.name}</h3>
                  <p className="text-white/80 text-sm">{teacher.role}</p>
                </div>
                
                {/* Intro Video Trigger */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-lg">
                   <Play className="w-4 h-4 fill-current" />
                </div>
              </div>
              <CardContent className="p-6 space-y-4 flex-1 flex flex-col">
                <div className="flex justify-between items-center text-sm">
                   <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-secondary text-secondary" />
                      <span className="font-bold">{teacher.rating}</span>
                   </div>
                   <div className="text-muted-foreground">{teacher.experience} Experience</div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {teacher.bio}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.certificates?.map((cert, i) => (
                     <Badge key={i} variant="secondary" className="text-[10px] bg-primary/5 text-primary">{cert}</Badge>
                  ))}
                </div>
                
                <div className="pt-4 flex items-center justify-between border-t border-border mt-auto">
                   <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[8px] text-white border border-white">Ijaza</div>
                      <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[8px] text-primary border border-white">Azhar</div>
                   </div>
                   <Button size="sm" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                     View Profile
                   </Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Join as Teacher Card */}
          <Card className="bg-primary text-primary-foreground flex flex-col items-center justify-center text-center p-8 border-none shadow-lg relative overflow-hidden">
             <div className="absolute inset-0 bg-pattern opacity-10" />
             <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto">
                   <BookOpen className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-2xl mb-2">Become a Tutor</h3>
                  <p className="text-primary-foreground/80 text-sm">Are you a qualified Quran teacher? Join our growing faculty.</p>
                </div>
                <Button className="bg-secondary text-primary font-bold hover:bg-secondary/90 w-full">
                   Apply Now
                </Button>
             </div>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
