import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom"; // ✅ use HashRouter here
import Home from "./pages/Home";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Showcase from "./pages/Showcase";
import Campaign from "./pages/Campaign";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Header />
          <Routes>
            {/* You don’t need /aethersparkz prefix when using HashRouter */}
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:courseId" element={<CourseDetail />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/campaign" element={<Campaign />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* Fallback route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
);

export default App;