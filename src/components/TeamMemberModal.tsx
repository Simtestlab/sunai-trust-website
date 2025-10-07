import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  X,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
  Quote,
  ExternalLink,
} from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  department: string;
  description: string;
  bio: string;
  experience: string;
  education: string;
  achievements: string[];
  skills: string[];
  location: string;
  joinDate: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email: string;
  };
  quote: string;
  projects: string[];
}

interface TeamMemberModalProps {
  member: TeamMember;
  isOpen: boolean;
  onClose: () => void;
}

const TeamMemberModal = ({ member, isOpen, onClose }: TeamMemberModalProps) => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "experience", label: "Experience" },
    { id: "achievements", label: "Achievements" },
    { id: "projects", label: "Projects" },
  ];

  const handleSocialClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${member.social.email}`;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <DialogHeader className="relative p-0">
            <div className="relative h-64 bg-gradient-to-br from-teal-600 to-green-600">
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              >
                <X className="w-5 h-5" />
              </Button>

              <div className="absolute inset-0 bg-black/20" />

              <div className="relative h-full flex items-end p-8">
                <div className="flex items-end space-x-6">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-teal-600 rounded-full p-2">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <div className="text-white pb-2">
                    <DialogTitle className="text-3xl font-bold mb-2">
                      {member.name}
                    </DialogTitle>
                    <p className="text-xl font-semibold text-teal-100 mb-1">
                      {member.title}
                    </p>
                    <Badge className="bg-white/20 text-white border-white/30 mb-4">
                      {member.department}
                    </Badge>

                    <div className="flex space-x-3">
                      {member.social.linkedin && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleSocialClick(member.social.linkedin!)
                          }
                          className="text-white hover:bg-white/20 p-2"
                        >
                          <Linkedin className="w-5 h-5" />
                        </Button>
                      )}
                      {member.social.twitter && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() =>
                            handleSocialClick(member.social.twitter!)
                          }
                          className="text-white hover:bg-white/20 p-2"
                        >
                          <Twitter className="w-5 h-5" />
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={handleEmailClick}
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <Mail className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-slate-200 px-8 pt-6">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? "border-teal-600 text-teal-600"
                        : "border-transparent text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-8 overflow-y-auto max-h-96">
              {activeTab === "overview" && (
                <div className="space-y-6">
                  {/* Quote */}
                  <div className="bg-teal-50 border-l-4 border-teal-400 p-6 rounded-r-lg">
                    <Quote className="w-8 h-8 text-teal-600 mb-3" />
                    <p className="text-slate-700 italic text-lg leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>

                  {/* Bio */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      About
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  {/* Key Info Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Location
                          </p>
                          <p className="text-sm text-slate-600">
                            {member.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Joined
                          </p>
                          <p className="text-sm text-slate-600">
                            {member.joinDate}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <Briefcase className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Experience
                          </p>
                          <p className="text-sm text-slate-600">
                            {member.experience}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-800">
                            Education
                          </p>
                          <p className="text-sm text-slate-600">
                            {member.education}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Core Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-sm"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "experience" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Professional Experience
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      {member.bio}
                    </p>

                    <div className="bg-slate-50 p-4 rounded-lg">
                      <h4 className="font-medium text-slate-800 mb-2">
                        Current Role
                      </h4>
                      <p className="text-slate-600 text-sm">
                        {member.description}
                      </p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-3">
                      Education & Qualifications
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <GraduationCap className="w-6 h-6 text-blue-600 mb-2" />
                      <p className="text-slate-700">{member.education}</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "achievements" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                            <Award className="w-4 h-4 text-green-600" />
                          </div>
                          <p className="text-slate-600 leading-relaxed">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "projects" && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">
                      Current & Recent Projects
                    </h3>
                    <div className="grid gap-4">
                      {member.projects.map((project, idx) => (
                        <div
                          key={idx}
                          className="p-4 border border-slate-200 rounded-lg hover:shadow-md transition-shadow"
                        >
                          <div className="flex items-center justify-between">
                            <h4 className="font-medium text-slate-800">
                              {project}
                            </h4>
                            <Button size="sm" variant="ghost">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                          <p className="text-sm text-slate-600 mt-1">
                            Leading strategic implementation and community
                            engagement
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-slate-200 p-6 bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Want to connect with {member.name.split(" ")[0]}?
              </div>
              <div className="flex space-x-3">
                <Button size="sm" onClick={handleEmailClick}>
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                {member.social.linkedin && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleSocialClick(member.social.linkedin!)}
                  >
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TeamMemberModal;
