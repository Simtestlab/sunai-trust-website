import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, CheckCircle2, ArrowRight, ArrowLeft, User, MapPin, GraduationCap, Heart, ShieldCheck } from "lucide-react";

const initialState = {
  firstName: "",
  lastName: "",
  fullName: "",
  phoneNumber: "",
  whatsappNumber: "",
  maritalStatus: "",
  languagesKnown: [] as string[],
  email: "",
  photo: null as File | null,
  address: "",
  location: "",
  country: "",
  pincode: "",
  state: "",
  city: "",
  aadharNumber: "",
  aadharCopy: null as File | null,
  dob: "",
  educationType: "",
  specialization: "",
  skill: "",
  certification: "",
  organization: "",
  title: "",
  yearsOfExperience: "",
  hasVolunteerExperience: "",
  volunteerYearsOfExperience: "",
  areaOfInterest: "",
  mobile: "",
  languages: "",
  availability: "",
  interests: [] as string[],
  outstation: "",
  experience: "",
  emergencyName: "",
  emergencyNumber: "",
  resume: null as File | null,
  pin: "",
};

const languageOptions = ["TAMIL", "MALAYALAM", "HINDI", "TELUGU", "ENGLISH"];
const educationTypes = ["High School", "Diploma", "Bachelor's", "Master's", "PhD", "Other"];

const steps = [
  { id: 0, label: "Personal", icon: User },
  { id: 1, label: "Address", icon: MapPin },
  { id: 2, label: "Education", icon: GraduationCap },
  { id: 3, label: "Volunteer", icon: Heart },
  { id: 4, label: "Review", icon: ShieldCheck },
];

const Volunteer = () => {
  const [form, setForm] = useState(initialState);
  const [currentStep, setCurrentStep] = useState(0);
  const [photoName, setPhotoName] = useState("");
  const [aadharCopyName, setAadharCopyName] = useState("");
  const [resumeName, setResumeName] = useState("");
  const [isDraggingPhoto, setIsDraggingPhoto] = useState(false);
  const [isDraggingAadhar, setIsDraggingAadhar] = useState(false);
  const [isDraggingResume, setIsDraggingResume] = useState(false);
  const [aadharError, setAadharError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const aadharInputRef = useRef<HTMLInputElement | null>(null);
  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        const file = files[0];
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        if (name === 'aadharCopy') {
          const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
          const maxBytes = 3 * 1024 * 1024;
          if (!allowed.includes(fileExtension)) { setAadharError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.'); return; }
          if (file.size > maxBytes) { setAadharError('File too large. Maximum 3 MB.'); return; }
          setAadharError('');
          setForm({ ...form, [name]: file });
          setAadharCopyName(file.name);
        } else if (name === 'resume') {
          const allowed = ['.pdf', '.doc', '.docx'];
          const maxBytes = 5 * 1024 * 1024;
          if (!allowed.includes(fileExtension)) { setResumeError('Invalid file type. Allowed: PDF, DOC, DOCX.'); return; }
          if (file.size > maxBytes) { setResumeError('File too large. Maximum 5 MB.'); return; }
          setResumeError('');
          setForm({ ...form, [name]: file });
          setResumeName(file.name);
        } else {
          setForm({ ...form, [name]: file });
          if (name === "photo") setPhotoName(file.name);
        }
      }
    } else if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      const currentLanguages = form.languagesKnown;
      if (checked) {
        setForm({ ...form, languagesKnown: [...currentLanguages, value] });
      } else {
        setForm({ ...form, languagesKnown: currentLanguages.filter(lang => lang !== value) });
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDragOver = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    if (fieldName === "photo") setIsDraggingPhoto(true);
    if (fieldName === "aadharCopy") setIsDraggingAadhar(true);
    if (fieldName === "resume") setIsDraggingResume(true);
  };
  const handleDragLeave = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    if (fieldName === "photo") setIsDraggingPhoto(false);
    if (fieldName === "aadharCopy") setIsDraggingAadhar(false);
    if (fieldName === "resume") setIsDraggingResume(false);
  };
  const handleDrop = (e: React.DragEvent, fieldName: string) => {
    e.preventDefault();
    if (fieldName === "photo") setIsDraggingPhoto(false);
    if (fieldName === "aadharCopy") setIsDraggingAadhar(false);
    if (fieldName === "resume") setIsDraggingResume(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (fieldName === 'aadharCopy') {
        const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
        if (!allowed.includes(fileExtension)) { setAadharError('Invalid type. Allowed: PDF, JPG, JPEG, PNG.'); return; }
        if (file.size > 3 * 1024 * 1024) { setAadharError('Max 3 MB.'); return; }
        setAadharError('');
        setForm({ ...form, [fieldName]: file });
        setAadharCopyName(file.name);
      } else if (fieldName === 'resume') {
        const allowed = ['.pdf', '.doc', '.docx'];
        if (!allowed.includes(fileExtension)) { setResumeError('Invalid type. Allowed: PDF, DOC, DOCX.'); return; }
        if (file.size > 5 * 1024 * 1024) { setResumeError('Max 5 MB.'); return; }
        setResumeError('');
        setForm({ ...form, [fieldName]: file });
        setResumeName(file.name);
      } else {
        setForm({ ...form, [fieldName]: file });
        if (fieldName === 'photo') setPhotoName(file.name);
      }
    }
  };
  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };
  const handleReset = () => { setForm(initialState); setPhotoName(""); setAadharCopyName(""); setResumeName(""); setCurrentStep(0); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); alert("Volunteer registration submitted!"); };

  const FileUploadArea = ({ fieldName, fileName, isDragging, accept, label, error }: {
    fieldName: string; fileName: string; isDragging: boolean; accept: string; label: string; error?: string;
  }) => (
    <div
      className={`border-2 border-dashed rounded-xl p-4 sm:p-6 text-center transition-all duration-200 cursor-pointer ${isDragging ? 'border-teal-500 bg-teal-50' : 'border-slate-300 hover:border-teal-400 hover:bg-teal-50/50'
        }`}
      onDragOver={(e) => handleDragOver(e, fieldName)}
      onDragLeave={(e) => handleDragLeave(e, fieldName)}
      onDrop={(e) => handleDrop(e, fieldName)}
      onClick={() => {
        if (fieldName === 'aadharCopy' && aadharInputRef.current) aadharInputRef.current.click();
        else if (fieldName === 'resume' && resumeInputRef.current) resumeInputRef.current.click();
      }}
    >
      <Upload className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${fileName ? 'text-teal-600' : 'text-slate-400'}`} />
      {fileName ? (
        <p className="text-xs sm:text-sm font-medium text-teal-700">{fileName}</p>
      ) : (
        <>
          <p className="text-xs sm:text-sm text-slate-500">{label}</p>
          <p className="text-[10px] sm:text-xs text-slate-400 mt-1">Drag & drop or click to upload</p>
        </>
      )}
      {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
      <input
        ref={fieldName === 'aadharCopy' ? aadharInputRef : fieldName === 'resume' ? resumeInputRef : undefined}
        type="file"
        name={fieldName}
        accept={accept}
        onChange={handleChange}
        className="hidden"
      />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-green-600 py-10 sm:py-14 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight"
            >
              Volunteer Registration
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
              Join our community of change-makers. Contribute your time, skills, and passion
              to build a healthier, greener, and empowered tomorrow.
            </p>
          </div>
        </section>

        {/* Stepper + Form */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Step Indicator */}
            <div className="mb-8 sm:mb-10">
              <div className="flex items-center justify-between">
                {steps.map((step, idx) => (
                  <React.Fragment key={step.id}>
                    <button
                      onClick={() => setCurrentStep(idx)}
                      className={`flex flex-col items-center gap-1.5 sm:gap-2 transition-colors ${idx <= currentStep ? 'text-teal-600' : 'text-slate-400'
                        }`}
                    >
                      <div className={`w-9 h-9 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${idx < currentStep
                          ? 'bg-teal-600 border-teal-600 text-white'
                          : idx === currentStep
                            ? 'border-teal-600 text-teal-600 bg-teal-50'
                            : 'border-slate-300 text-slate-400 bg-white'
                        }`}>
                        {idx < currentStep ? (
                          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5" />
                        ) : (
                          <step.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                        )}
                      </div>
                      <span className="text-[10px] sm:text-xs font-medium hidden sm:block">{step.label}</span>
                    </button>
                    {idx < steps.length - 1 && (
                      <div className={`flex-1 h-0.5 mx-1 sm:mx-2 transition-colors duration-300 ${idx < currentStep ? 'bg-teal-600' : 'bg-slate-200'
                        }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Card */}
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg p-5 sm:p-8 md:p-10">
                {/* Step 0: Personal Info */}
                {currentStep === 0 && (
                  <div className="space-y-5 sm:space-y-6 animate-fade-up">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <User className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        Personal Information
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">Tell us about yourself</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="firstName" className="text-xs sm:text-sm font-medium">First Name *</Label>
                        <Input id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required placeholder="Enter first name" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="lastName" className="text-xs sm:text-sm font-medium">Last Name</Label>
                        <Input id="lastName" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Enter last name" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="phoneNumber" className="text-xs sm:text-sm font-medium">Phone Number *</Label>
                        <Input id="phoneNumber" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="whatsappNumber" className="text-xs sm:text-sm font-medium">WhatsApp Number *</Label>
                        <Input id="whatsappNumber" name="whatsappNumber" value={form.whatsappNumber} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="email" className="text-xs sm:text-sm font-medium">Email *</Label>
                        <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="email@example.com" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="dob" className="text-xs sm:text-sm font-medium">Date of Birth *</Label>
                        <Input id="dob" name="dob" type="date" value={form.dob} onChange={handleChange} required className="text-sm sm:text-base" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Marital Status</Label>
                        <div className="flex gap-4 sm:gap-6">
                          {["Single", "Married"].map((val) => (
                            <label key={val} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="maritalStatus" value={val} checked={form.maritalStatus === val} onChange={handleChange} className="w-4 h-4 text-teal-600" />
                              <span className="text-xs sm:text-sm text-slate-700">{val}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Languages Known</Label>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {languageOptions.map((lang) => (
                            <label key={lang} className="flex items-center gap-1.5 cursor-pointer">
                              <input type="checkbox" name="languagesKnown" value={lang} checked={form.languagesKnown.includes(lang)} onChange={handleChange} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-600 rounded" />
                              <span className="text-[10px] sm:text-xs text-slate-700">{lang}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Photo */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label className="text-xs sm:text-sm font-medium">Photo</Label>
                      <div
                        className={`border-2 border-dashed rounded-xl p-4 sm:p-6 text-center cursor-pointer transition-all ${isDraggingPhoto ? 'border-teal-500 bg-teal-50' : 'border-slate-300 hover:border-teal-400'}`}
                        onDragOver={(e) => handleDragOver(e, "photo")}
                        onDragLeave={(e) => handleDragLeave(e, "photo")}
                        onDrop={(e) => handleDrop(e, "photo")}
                      >
                        <Upload className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${photoName ? 'text-teal-600' : 'text-slate-400'}`} />
                        {photoName ? (
                          <p className="text-xs sm:text-sm font-medium text-teal-700">{photoName}</p>
                        ) : (
                          <p className="text-xs sm:text-sm text-slate-500">Upload your photo</p>
                        )}
                        <input type="file" name="photo" accept="image/*" onChange={handleChange} className="hidden" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 1: Address */}
                {currentStep === 1 && (
                  <div className="space-y-5 sm:space-y-6 animate-fade-up">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        Address &amp; Identity
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">Your location and identity details</p>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="address" className="text-xs sm:text-sm font-medium">Full Address *</Label>
                      <Textarea id="address" name="address" value={form.address} onChange={handleChange} required rows={3} placeholder="Enter your full address" className="text-sm sm:text-base" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="city" className="text-xs sm:text-sm font-medium">City *</Label>
                        <Input id="city" name="city" value={form.city} onChange={handleChange} required placeholder="City" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="state" className="text-xs sm:text-sm font-medium">State *</Label>
                        <Input id="state" name="state" value={form.state} onChange={handleChange} required placeholder="State" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="pincode" className="text-xs sm:text-sm font-medium">Pincode *</Label>
                        <Input id="pincode" name="pincode" value={form.pincode} onChange={handleChange} required placeholder="6-digit pincode" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="country" className="text-xs sm:text-sm font-medium">Country *</Label>
                        <Input id="country" name="country" value={form.country} onChange={handleChange} required placeholder="Country" className="text-sm sm:text-base" />
                      </div>
                    </div>

                    {/* Aadhar */}
                    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">Identity Verification</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="aadharNumber" className="text-xs sm:text-sm font-medium">Aadhar Number</Label>
                          <Input id="aadharNumber" name="aadharNumber" value={form.aadharNumber} onChange={handleChange} placeholder="XXXX XXXX XXXX" className="text-sm sm:text-base" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label className="text-xs sm:text-sm font-medium">Aadhar Document</Label>
                          <FileUploadArea fieldName="aadharCopy" fileName={aadharCopyName} isDragging={isDraggingAadhar} accept=".pdf,.jpg,.jpeg,.png" label="PDF, JPG, PNG (max 3 MB)" error={aadharError} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Education & Skills */}
                {currentStep === 2 && (
                  <div className="space-y-5 sm:space-y-6 animate-fade-up">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        Education &amp; Skills
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">Your educational background and skillset</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Education Level *</Label>
                        <Select value={form.educationType} onValueChange={(v) => handleSelectChange("educationType", v)}>
                          <SelectTrigger className="text-sm sm:text-base"><SelectValue placeholder="Select level" /></SelectTrigger>
                          <SelectContent>
                            {educationTypes.map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="specialization" className="text-xs sm:text-sm font-medium">Specialization</Label>
                        <Input id="specialization" name="specialization" value={form.specialization} onChange={handleChange} placeholder="e.g. Computer Science" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="skill" className="text-xs sm:text-sm font-medium">Key Skill</Label>
                        <Input id="skill" name="skill" value={form.skill} onChange={handleChange} placeholder="e.g. Leadership, Design, etc." className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="certification" className="text-xs sm:text-sm font-medium">Certifications</Label>
                        <Input id="certification" name="certification" value={form.certification} onChange={handleChange} placeholder="Any certifications" className="text-sm sm:text-base" />
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">Professional Background (Optional)</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="organization" className="text-xs sm:text-sm font-medium">Organization</Label>
                          <Input id="organization" name="organization" value={form.organization} onChange={handleChange} placeholder="Company / Institution" className="text-sm sm:text-base" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="title" className="text-xs sm:text-sm font-medium">Designation</Label>
                          <Input id="title" name="title" value={form.title} onChange={handleChange} placeholder="Your role" className="text-sm sm:text-base" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="yearsOfExperience" className="text-xs sm:text-sm font-medium">Years of Experience</Label>
                          <Input id="yearsOfExperience" name="yearsOfExperience" type="number" value={form.yearsOfExperience} onChange={handleChange} placeholder="0" className="text-sm sm:text-base" />
                        </div>
                      </div>
                    </div>

                    {/* Resume */}
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label className="text-xs sm:text-sm font-medium">Resume (Optional)</Label>
                      <FileUploadArea fieldName="resume" fileName={resumeName} isDragging={isDraggingResume} accept=".pdf,.doc,.docx" label="PDF, DOC, DOCX (max 5 MB)" error={resumeError} />
                    </div>
                  </div>
                )}

                {/* Step 3: Volunteer Preferences */}
                {currentStep === 3 && (
                  <div className="space-y-5 sm:space-y-6 animate-fade-up">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        Volunteer Preferences
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">How you'd like to contribute</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Previous Volunteer Experience?</Label>
                        <div className="flex gap-4 sm:gap-6">
                          {["Yes", "No"].map((val) => (
                            <label key={val} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="hasVolunteerExperience" value={val} checked={form.hasVolunteerExperience === val} onChange={handleChange} className="w-4 h-4 text-teal-600" />
                              <span className="text-xs sm:text-sm text-slate-700">{val}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      {form.hasVolunteerExperience === "Yes" && (
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="volunteerYearsOfExperience" className="text-xs sm:text-sm font-medium">Years of Volunteer Experience</Label>
                          <Input id="volunteerYearsOfExperience" name="volunteerYearsOfExperience" type="number" value={form.volunteerYearsOfExperience} onChange={handleChange} placeholder="0" className="text-sm sm:text-base" />
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Availability *</Label>
                        <Select value={form.availability} onValueChange={(v) => handleSelectChange("availability", v)}>
                          <SelectTrigger className="text-sm sm:text-base"><SelectValue placeholder="Select availability" /></SelectTrigger>
                          <SelectContent>
                            {["Weekdays", "Weekends", "Both", "Flexible"].map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label className="text-xs sm:text-sm font-medium">Open to Outstation?</Label>
                        <div className="flex gap-4 sm:gap-6">
                          {["Yes", "No"].map((val) => (
                            <label key={val} className="flex items-center gap-2 cursor-pointer">
                              <input type="radio" name="outstation" value={val} checked={form.outstation === val} onChange={handleChange} className="w-4 h-4 text-teal-600" />
                              <span className="text-xs sm:text-sm text-slate-700">{val}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="areaOfInterest" className="text-xs sm:text-sm font-medium">Area of Interest *</Label>
                      <Select value={form.areaOfInterest} onValueChange={(v) => handleSelectChange("areaOfInterest", v)}>
                        <SelectTrigger className="text-sm sm:text-base"><SelectValue placeholder="Select area" /></SelectTrigger>
                        <SelectContent>
                          {[
                            "Mentorship (Sunai Uplift)", "Environment (Sunai Vanam)",
                            "Blood Donation (Sunai Life)", "Healthcare (Sunai Health)", "All Programs"
                          ].map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4 sm:p-5 md:p-6 border border-slate-200">
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">Emergency Contact</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="emergencyName" className="text-xs sm:text-sm font-medium">Contact Name *</Label>
                          <Input id="emergencyName" name="emergencyName" value={form.emergencyName} onChange={handleChange} required placeholder="Emergency contact name" className="text-sm sm:text-base" />
                        </div>
                        <div className="space-y-1.5 sm:space-y-2">
                          <Label htmlFor="emergencyNumber" className="text-xs sm:text-sm font-medium">Contact Number *</Label>
                          <Input id="emergencyNumber" name="emergencyNumber" value={form.emergencyNumber} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="text-sm sm:text-base" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Review */}
                {currentStep === 4 && (
                  <div className="space-y-5 sm:space-y-6 animate-fade-up">
                    <div className="mb-4 sm:mb-6">
                      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                        Review &amp; Submit
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-1">Please review your details before submitting</p>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {/* Personal Summary */}
                      <div className="bg-teal-50 rounded-xl p-4 sm:p-5 border border-teal-100">
                        <h3 className="text-sm sm:text-base font-bold text-teal-800 mb-2 sm:mb-3">Personal Information</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                          <p><span className="font-medium">Name:</span> {form.firstName} {form.lastName}</p>
                          <p><span className="font-medium">Phone:</span> {form.phoneNumber}</p>
                          <p><span className="font-medium">Email:</span> {form.email}</p>
                          <p><span className="font-medium">DOB:</span> {form.dob}</p>
                          <p><span className="font-medium">Languages:</span> {form.languagesKnown.join(", ") || "—"}</p>
                          <p><span className="font-medium">Marital Status:</span> {form.maritalStatus || "—"}</p>
                        </div>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-4 sm:p-5 border border-blue-100">
                        <h3 className="text-sm sm:text-base font-bold text-blue-800 mb-2 sm:mb-3">Address</h3>
                        <div className="text-xs sm:text-sm text-slate-700 space-y-1">
                          <p>{form.address}</p>
                          <p>{[form.city, form.state, form.pincode, form.country].filter(Boolean).join(", ")}</p>
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-4 sm:p-5 border border-purple-100">
                        <h3 className="text-sm sm:text-base font-bold text-purple-800 mb-2 sm:mb-3">Education &amp; Skills</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                          <p><span className="font-medium">Education:</span> {form.educationType || "—"}</p>
                          <p><span className="font-medium">Specialization:</span> {form.specialization || "—"}</p>
                          <p><span className="font-medium">Skill:</span> {form.skill || "—"}</p>
                          <p><span className="font-medium">Organization:</span> {form.organization || "—"}</p>
                        </div>
                      </div>

                      <div className="bg-amber-50 rounded-xl p-4 sm:p-5 border border-amber-100">
                        <h3 className="text-sm sm:text-base font-bold text-amber-800 mb-2 sm:mb-3">Volunteer Preferences</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm text-slate-700">
                          <p><span className="font-medium">Area of Interest:</span> {form.areaOfInterest || "—"}</p>
                          <p><span className="font-medium">Availability:</span> {form.availability || "—"}</p>
                          <p><span className="font-medium">Outstation:</span> {form.outstation || "—"}</p>
                          <p><span className="font-medium">Emergency:</span> {form.emergencyName} ({form.emergencyNumber})</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
                  {currentStep > 0 ? (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="text-xs sm:text-sm px-4 sm:px-6"
                    >
                      <ArrowLeft className="w-4 h-4 mr-1 sm:mr-2" />
                      Previous
                    </Button>
                  ) : (
                    <Button type="button" variant="ghost" onClick={handleReset} className="text-xs sm:text-sm text-slate-500 px-4 sm:px-6">
                      Reset
                    </Button>
                  )}

                  {currentStep < steps.length - 1 ? (
                    <Button
                      type="button"
                      onClick={() => setCurrentStep((s) => s + 1)}
                      className="bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm px-4 sm:px-6"
                    >
                      Next
                      <ArrowRight className="w-4 h-4 ml-1 sm:ml-2" />
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className="bg-gradient-to-r from-teal-600 to-green-600 hover:opacity-90 text-white font-bold text-xs sm:text-sm px-6 sm:px-8"
                    >
                      Submit Registration
                      <CheckCircle2 className="w-4 h-4 ml-1 sm:ml-2" />
                    </Button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Volunteer;
