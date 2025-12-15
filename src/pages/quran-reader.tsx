import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Settings, Info } from "lucide-react";
import { Link } from "wouter";

export default function QuranReader() {
  return (
    <Layout>
      <div className="h-[calc(100vh-80px)] flex flex-col">
        <div className="bg-primary text-white p-4 flex items-center justify-between shadow-md z-10">
           <div className="flex items-center gap-4">
              <Link href="/">
                 <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Exit
                 </Button>
              </Link>
              <h1 className="font-serif font-bold text-lg">Quran Reader Integration</h1>
           </div>
           <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Settings className="w-4 h-4" /></Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10"><Info className="w-4 h-4" /></Button>
           </div>
        </div>
        
        <div className="flex-1 bg-amber-50 relative overflow-hidden flex items-center justify-center">
           {/* Mock Quran Interface */}
           <div className="text-center space-y-8 max-w-4xl px-4 animate-in fade-in zoom-in duration-700">
              <div className="font-arabic text-5xl md:text-7xl leading-relaxed text-primary" dir="rtl">
                 بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
              </div>
              <div className="text-2xl text-primary/60 font-serif">
                 In the name of Allah, the Entirely Merciful, the Especially Merciful.
              </div>
              
              <div className="pt-12 flex justify-center gap-4">
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-border w-64 text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Word Analysis</div>
                    <div className="font-bold text-primary">Bismi</div>
                    <div className="text-sm">Preposition + Noun</div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm border border-border w-64 text-left">
                    <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">Root Word</div>
                    <div className="font-bold text-primary">S-M-W</div>
                    <div className="text-sm">To be high, name</div>
                 </div>
              </div>

              <div className="pt-8">
                 <p className="text-muted-foreground text-sm">
                    * This is a simulated view. In production, this would integrate the Quran.com API or iframe.
                 </p>
              </div>
           </div>
        </div>
      </div>
    </Layout>
  );
}
