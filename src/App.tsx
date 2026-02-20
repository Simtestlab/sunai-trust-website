import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Volunteer from "./pages/Volunteer";
import NGORegistration from "./pages/Ngo-registration";
import Achievements from "./pages/Achievements";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import JoinUs from "./pages/JoinUs";
import Register from "./pages/Register";
// Program pages
import Education from "./pages/programs/Education";
import Health from "./pages/programs/Health";
import Empowerment from "./pages/programs/Empowerment";
import TreePlantation from "./pages/programs/TreePlantation";
import RuralDevelopment from "./pages/programs/RuralDevelopment";
import Charity from "./pages/programs/Charity";
import BloodBank from "./pages/programs/BloodBank";

const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs/education" element={<Education />} />
          <Route path="/programs/health" element={<Health />} />
          <Route path="/programs/empowerment" element={<Empowerment />} />
          <Route
            path="/programs/tree-plantation"
            element={<TreePlantation />}
          />
          <Route
            path="/programs/rural-development"
            element={<RuralDevelopment />}
          />
          <Route path="/programs/charity" element={<Charity />} />
          <Route path="/programs/blood-bank" element={<BloodBank />} />
          {/* Other Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/register/ngo" element={<NGORegistration />} />
          <Route path="/register" element={<Register />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
