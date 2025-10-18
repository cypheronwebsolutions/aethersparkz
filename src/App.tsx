import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Course from "./pages/Course";
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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aethersparkz" element={<Home />} />
          <Route path="/aethersparkz/course" element={<Course />} />
          <Route path="/aethersparkz/showcase" element={<Showcase />} />
          <Route path="/aethersparkz/campaign" element={<Campaign />} />
          <Route path="/aethersparkz/about-us" element={<AboutUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
