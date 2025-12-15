import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import CourseDetail from "@/pages/course-detail";
import Teachers from "@/pages/teachers";
import Courses from "@/pages/courses";
import Pricing from "@/pages/pricing";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import FreeTrial from "@/pages/free-trial";
import FAQ from "@/pages/faq";
import PlacementTest from "@/pages/placement-test";
import QuranReader from "@/pages/quran-reader";
import { Chatbot } from "@/components/chatbot";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/courses" component={Courses} />
      <Route path="/courses/:slug" component={CourseDetail} />
      <Route path="/teachers" component={Teachers} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/free-trial" component={FreeTrial} />
      <Route path="/faq" component={FAQ} />
      <Route path="/placement-test" component={PlacementTest} />
      <Route path="/quran-reader" component={QuranReader} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <Chatbot />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
