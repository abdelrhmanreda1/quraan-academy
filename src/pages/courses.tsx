import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "wouter";
import { Search, BookOpen, Clock, Users, Star, ArrowRight, Filter } from "lucide-react";
import { COURSES } from "@/lib/constants";
import { useState } from "react";

export default function Courses() {
  const [filter, setFilter] = useState("all");

  return (
    <Layout>
      {/* Header */}
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4 text-center space-y-4">
          <Badge variant="outline" className="border-primary text-primary">Academic Programs</Badge>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary">Explore Our Courses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Islamic education paths designed for all ages and proficiency levels.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="sticky top-[72px] z-30 bg-background/80 backdrop-blur-md border-b border-border py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search for a course..." className="pl-10 bg-white" />
          </div>
          
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["all", "Quran", "Arabic", "Islamic Studies", "Kids"].map((cat) => (
              <Button 
                key={cat}
                variant={filter === cat ? "default" : "outline"}
                onClick={() => setFilter(cat)}
                className={`capitalize ${filter === cat ? "bg-primary text-white" : "border-primary/20 text-primary"}`}
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <Link key={course.id} href={`/courses/${course.slug}`}>
              <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden bg-white h-full flex flex-col">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                  <Badge className="absolute top-4 right-4 bg-secondary text-primary hover:bg-secondary font-bold">
                    {course.level}
                  </Badge>
                </div>
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" /> {course.duration}
                    <span className="mx-2">•</span>
                    <Users className="w-4 h-4" /> {course.students}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-1">
                    {course.description}
                  </p>
                  
                  {/* Progress Bar (Visual only for listings) */}
                  <div className="w-full bg-muted rounded-full h-1.5 mb-4 overflow-hidden">
                     <div className="bg-secondary h-full w-3/4 rounded-full" />
                  </div>
                  <div className="text-xs text-muted-foreground mb-4">Level 1 of 5 Completed (Mock)</div>

                  <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-bold text-primary ml-1">{course.rating}</span>
                    </div>
                    <span className="font-bold text-lg text-primary">{course.price}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full bg-primary/5 text-primary hover:bg-primary hover:text-white border-primary/20 border transition-all">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
