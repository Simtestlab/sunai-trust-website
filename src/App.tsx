import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import Volunteer from "./pages/Volunteer";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
// Program pages
import Education from "./pages/programs/Education";
import Health from "./pages/programs/Health";
import Empowerment from "./pages/programs/Empowerment";
import TreePlantation from "./pages/programs/TreePlantation";
import RuralDevelopment from "./pages/programs/RuralDevelopment";
import Charity from "./pages/programs/Charity";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Program Routes */}
          <Route path="/programs/education" element={<Education />} />
          <Route path="/programs/health" element={<Health />} />
          <Route path="/programs/empowerment" element={<Empowerment />} />
          <Route path="/programs/tree-plantation" element={<TreePlantation />} />
          <Route path="/programs/rural-development" element={<RuralDevelopment />} />
          <Route path="/programs/charity" element={<Charity />} />
          {/* Other Routes */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
