import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-serif font-bold text-primary mb-4">Get in Touch</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are here to help you with any questions about our courses, teachers, or technical issues.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-border">
               <h2 className="text-2xl font-serif font-bold text-primary mb-6">Send us a Message</h2>
               <form className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <label className="text-sm font-medium">First Name</label>
                       <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-medium">Last Name</label>
                       <Input placeholder="Doe" />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input placeholder="+1 (555) 000-0000" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Subject</label>
                    <Input placeholder="Course Inquiry" />
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-medium">Message</label>
                    <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
                 </div>
                 <Button className="w-full bg-primary text-white hover:bg-primary/90 h-12">
                    Send Message <Send className="w-4 h-4 ml-2" />
                 </Button>
               </form>
             </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
               <Card className="border-none shadow-md bg-secondary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                     <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <Phone className="w-5 h-5" />
                     </div>
                     <div className="font-bold text-primary">Phone</div>
                     <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                  </CardContent>
               </Card>
               <Card className="border-none shadow-md bg-secondary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                     <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <Mail className="w-5 h-5" />
                     </div>
                     <div className="font-bold text-primary">Email</div>
                     <div className="text-sm text-muted-foreground">support@quraan-academy.com</div>
                  </CardContent>
               </Card>
               <Card className="border-none shadow-md bg-secondary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                     <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <MessageCircle className="w-5 h-5" />
                     </div>
                     <div className="font-bold text-primary">WhatsApp</div>
                     <div className="text-sm text-muted-foreground">+1 (555) 987-6543</div>
                  </CardContent>
               </Card>
               <Card className="border-none shadow-md bg-secondary/10">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                     <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <div className="font-bold text-primary">Location</div>
                     <div className="text-sm text-muted-foreground">New York, USA</div>
                  </CardContent>
               </Card>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-100 rounded-2xl h-[400px] w-full relative overflow-hidden flex items-center justify-center border border-border">
               <MapPin className="w-12 h-12 text-primary/50 mb-2" />
               <p className="text-muted-foreground font-medium">Google Maps Integration</p>
               {/* Embed Iframe would go here */}
               <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
