import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Star,
  CheckCircle2,
  Play,
  ArrowRight,
  Users,
  Clock,
  Award,
  BookOpen,
  GraduationCap,
  Globe,
  Video,
  Search,
} from "lucide-react";
import heroImage from "@assets/generated_images/islamic_academy_hero_image.png";
import studentImage from "@assets/generated_images/happy_student_learning_quran.png";
import { COURSES, TESTIMONIALS } from "@/lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const images = [
  "/images/student-1.png",
  "/images/student-2.png",
  "/images/student-3.png",
  "/images/student-4.png",
  "/images/student-5.png",
];
export default function Home() {
  return (
    <Layout>
      {/* Hero Section - Dark Emerald Theme from Reference */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary text-white">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Islamic Academy"
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="absolute inset-0 bg-pattern opacity-10" />
        </div>

        <div
          style={{ margin: "0 auto" }}
          className="container relative z-10 px-4 py-20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-secondary font-medium text-sm animate-in fade-in zoom-in duration-1000">
                <Star className="w-4 h-4 fill-secondary" /> 4.9/5 Rating from
                500+ Students
              </div>

              <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight">
                The Best Online Platform for Learning{" "}
                <span className="text-secondary">Quran</span> and{" "}
                <span className="text-secondary">Arabic</span>
              </h1>

              <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
                Join us now and start the journey of understanding Quran and
                Sunnah. Expert tutors, flexible schedules, and certified
                learning paths.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/free-trial">
                  <Button
                    size="lg"
                    className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 h-16 rounded-xl font-bold shadow-xl shadow-secondary/20 hover:-translate-y-1 transition-transform"
                  >
                    Book a Free Evaluation
                  </Button>
                </Link>
                <Link href="/courses">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-8 h-16 rounded-xl backdrop-blur-sm"
                  >
                    Explore Courses
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-primary bg-gray-300 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Student"
                      />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-primary font-bold text-xs">
                    5k+
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">5,000+</div>
                  <div className="text-white/60 text-sm">
                    Satisfied Learners
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative  block"
            >
              {/* Hero Composition from Reference Image */}
              <div className="relative z-10">
                <img
                  src={studentImage}
                  alt="Happy Student"
                  className="rounded-3xl shadow-2xl border-4 border-white/10 w-full max-w-lg mx-auto"
                />

                {/* Floating Badge 1 */}
                <div className="absolute left-1 md:-left-12 top-10 md:top-20 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce duration-[3000ms]">
                  <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-bold text-primary">24/7 Support</div>
                    <div className="text-xs text-muted-foreground">
                      All Time Zones
                    </div>
                  </div>
                </div>

                {/* Floating Badge 2 */}
                <div className="absolute right-1 md:-right-8 bottom-10 md:bottom-20 bg-primary text-white p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-white/20 animate-bounce duration-[4000ms]">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <div className="font-bold">50+ Mentors</div>
                    <div className="text-xs text-white/70">Expert Teachers</div>
                  </div>
                </div>
              </div>

              {/* Background Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-secondary/20 blur-[100px] rounded-full -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Search Bar (Requested) */}
      <section className="py-8 bg-muted/50 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-sm p-2 flex items-center border border-border">
            <Search className="w-5 h-5 text-muted-foreground ml-3" />
            <input
              className="flex-1 p-3 outline-none text-sm"
              placeholder="Search for word meanings, course topics, or specific surahs..."
            />
            <Button className="rounded-lg">Search</Button>
          </div>
        </div>
      </section>

      {/* Learning Paths Section (Guided Learning) */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
              Guided Learning for a Meaningful Life
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Choose the path that fits your goals. Structured curriculum for
              every stage of your journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-border -z-10 -translate-y-1/2" />

            {[
              {
                title: "Arabic for All",
                desc: "Build confidence in reading, writing, and speaking Arabic. Live, interactive sessions.",
                icon: Globe,
                color: "bg-emerald-500",
                textColor: "text-white",
              },
              {
                title: "Memorize & Recite",
                desc: "Learn to read, recite, and memorize with step-by-step guidance. Certified teachers.",
                icon: BookOpen,
                color: "bg-amber-400",
                textColor: "text-primary",
              },
              {
                title: "Islamic Studies",
                desc: "Learn Aqidah, Seerah, Fiqh, and more. Understand your faith deeply.",
                icon: Users,
                color: "bg-primary",
                textColor: "text-white",
              },
            ].map((path, i) => (
              <div
                key={i}
                className={`${path.color} ${path.textColor} p-8 rounded-3xl shadow-lg relative group hover:-translate-y-2 transition-transform duration-300`}
              >
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-md">
                  {/* Icon Logic */}
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                    {i === 0 && <span className="text-2xl">📖</span>}
                    {i === 1 && <span className="text-2xl">🤲</span>}
                    {i === 2 && <span className="text-2xl">🕌</span>}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold mt-10 mb-4 text-center">
                  {path.title}
                </h3>
                <p className="text-center opacity-90 leading-relaxed">
                  {path.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses Grid */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <Badge
                variant="outline"
                className="mb-4 border-primary text-primary"
              >
                Academic Programs
              </Badge>
              <h2 className="text-4xl font-serif font-bold text-primary">
                Explore Our Courses
              </h2>
            </div>
            <Link href="/courses">
              <Button
                variant="outline"
                className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-white"
              >
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.slice(0, 3).map((course) => (
              <Link key={course.id} href={`/courses/${course.slug}`}>
                <Card className="group cursor-pointer hover:shadow-2xl transition-all duration-300 border-none shadow-lg overflow-hidden bg-white h-full flex flex-col rounded-2xl">
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 text-primary hover:bg-white font-bold shadow-sm backdrop-blur-sm">
                        {course.level}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-secondary" />{" "}
                        {course.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4 text-secondary" />{" "}
                        {course.students}
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6 flex-1 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">
                          Course Fee
                        </span>
                        <span className="font-bold text-xl text-primary">
                          {course.price}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors">
                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section (Requested) */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-primary">
              Student Gallery
            </h2>
            <p className="text-muted-foreground">
              Moments of learning and joy from our community
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {images.map((src, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-md relative group ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={src}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Student learning online"
                />

                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-sm font-medium">
                    Live Online Learning
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Recorded Courses Section (Requested) */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold">
                Free Resources Library
              </h2>
              <p className="text-white/70 mt-2">
                Access hundreds of hours of recorded lectures for free.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
            >
              View Library
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors cursor-pointer group"
              >
                <div className="aspect-video bg-black/50 rounded-xl mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-10 h-10 text-white fill-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-1">
                  Understanding Surah Al-Fatiha
                </h3>
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <Video className="w-3 h-3" /> 45 mins • Sheikh Abdullah
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-7xl">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            Testimonials
          </Badge>
          <h2 className="text-4xl font-serif font-bold text-primary mb-16">
            What Our Students Say
          </h2>

          <Carousel className="w-full">
            <CarouselContent>
              {TESTIMONIALS.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-6 h-full">
                    <div className="bg-white border border-border p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col text-left relative">
                      <div className="absolute -top-6 right-8 text-6xl text-secondary font-serif opacity-20">
                        "
                      </div>

                      <div className="flex gap-1 mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(testimonial.rating)
                                ? "fill-secondary text-secondary"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                        "{testimonial.text}"
                      </p>

                      <div className="flex items-center gap-4 pt-6 border-t border-border">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-bold text-primary">
                            {testimonial.name}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto ">
          <div className="bg-primary rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/attached_assets/pattern.png')] opacity-10 bg-repeat" />
            <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 blur-[80px] rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight">
                Start Your Spiritual Journey Today
              </h2>
              <p className="text-xl text-white/80">
                Join thousands of students worldwide mastering the Quran. Get a
                free trial session with no commitment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/free-trial">
                  <Button
                    size="lg"
                    className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-10 py-6 rounded-xl font-bold shadow-xl"
                  >
                    Book Free Trial
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10 text-lg px-10 py-6 rounded-xl"
                  >
                    Contact Support
                  </Button>
                </Link>
              </div>
              <div className="pt-8 flex items-center justify-center gap-2 text-white/60 text-sm">
                <CheckCircle2 className="w-4 h-4 text-secondary" /> No credit
                card required
                <span className="mx-2">•</span>
                <CheckCircle2 className="w-4 h-4 text-secondary" /> Cancel
                anytime
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
