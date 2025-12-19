import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, BookOpen, Target, Heart } from "lucide-react";
import patternImage from "@assets/generated_images/abstract_islamic_geometric_pattern.png";
import heroImage from "@assets/generated_images/islamic_academy_hero_image.png";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <div className="relative bg-primary text-primary-foreground py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt="Academy Interior" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
           <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Preserving the Legacy</h1>
           <p className="text-xl max-w-3xl mx-auto text-primary-foreground/90">
             Quraan Academy is a premier online institute dedicated to spreading the light of the Quran 
             to every home in the world, combining traditional scholarship with modern technology.
           </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Our Mission</h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To make Quranic education accessible, engaging, and spiritually uplifting for students 
              of all ages and backgrounds. We strive to create a generation that not only recites 
              the Quran but lives by its values.
            </p>
            
            <div className="flex items-center gap-3 pt-6">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Heart className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-primary">Our Values</h2>
            </div>
            <ul className="grid grid-cols-2 gap-4">
               {["Ihsan (Excellence)", "Amanah (Trust)", "Ilm (Knowledge)", "Adab (Etiquette)"].map((val) => (
                 <li key={val} className="flex items-center gap-2 font-medium text-primary">
                   <div className="w-2 h-2 rounded-full bg-secondary" /> {val}
                 </li>
               ))}
            </ul>
          </div>
          <div className="relative">
             <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl rotate-3 bg-white p-2">
                <img src={patternImage} alt="Pattern" className="w-full h-full object-cover rounded-xl" />
             </div>
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs border border-border">
                <div className="text-4xl font-serif font-bold text-primary mb-1">10+</div>
                <div className="text-sm text-muted-foreground">Years of serving the Ummah with excellence.</div>
             </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-muted/30 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-primary mb-4">Life at Quraan Academy</h2>
            <p className="text-muted-foreground">Glimpses of our vibrant learning community</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
             <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-md">
                <img src={heroImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 1" />
             </div>
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-md bg-white flex items-center justify-center">
                 <img src={patternImage} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 2" />
             </div>
             <div className="col-span-1 row-span-2 rounded-2xl overflow-hidden shadow-md bg-white">
                <img src="/images/gallary-4.png" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 3" />
             </div>
             <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-md bg-white">
                <img src="https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Gallery 4" />
             </div>
          </div>
        </div>
      </div>
      
      {/* Stats/Map Placeholder */}
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
         <h2 className="text-3xl font-serif font-bold text-primary mb-8">A Global Community</h2>
         <div className="bg-primary/5 rounded-3xl p-12 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden">
            <Globe className="w-64 h-64 text-primary/10 absolute animate-pulse" />
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-12 text-center w-full max-w-4xl">
               {[
                 { count: "50+", label: "Countries" },
                 { count: "5000+", label: "Students" },
                 { count: "120+", label: "Teachers" },
                 { count: "50k+", label: "Classes" }
               ].map((stat, i) => (
                 <div key={i}>
                    <div className="text-4xl font-serif font-bold text-primary mb-2">{stat.count}</div>
                    <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">{stat.label}</div>
                 </div>
               ))}
            </div>
         </div>
      </div>
    </Layout>
  );
}
