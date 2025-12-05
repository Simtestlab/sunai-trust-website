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
import { Upload } from "lucide-react";

const initialState = {
  firstName: "",
  lastName: "",
  fullName: "",
  phoneNumber: "",
  whatsappNumber: "",
  maritalStatus: "",
  languagesKnown: [] as string[],
  email: "",
  photo: null,
  address: "",
  location: "",
  country: "",
  pincode: "",
  state: "",
  city: "",
  aadharNumber: "",
  aadharCopy: null,
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
  resume: null,
  pin: "",
};

const languageOptions = ["TAMIL", "MALAYALAM", "HINDI", "TELUGU", "ENGLISH"];
const educationTypes = ["High School", "Diploma", "Bachelor's", "Master's", "PhD", "Other"];

const Volunteer = () => {
  const [form, setForm] = useState(initialState);
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
        // validation
        if (name === 'aadharCopy') {
          const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
          const maxBytes = 3 * 1024 * 1024; // 3MB
          if (!allowed.includes(fileExtension)) {
            setAadharError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.');
            return;
          }
          if (file.size > maxBytes) {
            setAadharError('File too large. Maximum allowed size is 3 MB.');
            return;
          }
          setAadharError('');
          setForm({ ...form, [name]: file });
          setAadharCopyName(file.name);
        } else if (name === 'resume') {
          const allowed = ['.pdf', '.doc', '.docx'];
          const maxBytes = 5 * 1024 * 1024; // 5MB
          if (!allowed.includes(fileExtension)) {
            setResumeError('Invalid file type. Allowed: PDF, DOC, DOCX.');
            return;
          }
          if (file.size > maxBytes) {
            setResumeError('File too large. Maximum allowed size is 5 MB.');
            return;
          }
          setResumeError('');
          setForm({ ...form, [name]: file });
          setResumeName(file.name);
        } else {
          // generic file (photo)
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
  const handleFileSelect = (file: File, fieldName: string) => {
    setForm({ ...form, [fieldName]: file });
    if (fieldName === "photo") setPhotoName(file.name);
    if (fieldName === "aadharCopy") setAadharCopyName(file.name);
    if (fieldName === "resume") setResumeName(file.name);
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
        const maxBytes = 3 * 1024 * 1024;
        if (!allowed.includes(fileExtension)) {
          setAadharError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.');
          return;
        }
        if (file.size > maxBytes) {
          setAadharError('File too large. Maximum allowed size is 3 MB.');
          return;
        }
        setAadharError('');
        setForm({ ...form, [fieldName]: file });
        setAadharCopyName(file.name);
      } else if (fieldName === 'resume') {
        const allowed = ['.pdf', '.doc', '.docx'];
        const maxBytes = 5 * 1024 * 1024;
        if (!allowed.includes(fileExtension)) {
          setResumeError('Invalid file type. Allowed: PDF, DOC, DOCX.');
          return;
        }
        if (file.size > maxBytes) {
          setResumeError('File too large. Maximum allowed size is 5 MB.');
          return;
        }
        setResumeError('');
        setForm({ ...form, [fieldName]: file });
        setResumeName(file.name);
      } else {
        // photo or generic
        setForm({ ...form, [fieldName]: file });
        if (fieldName === 'photo') setPhotoName(file.name);
      }
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialState);
    setPhotoName("");
    setAadharCopyName("");
    setResumeName("");
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Volunteer registration submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-auto">
        {/* Background applied to the form section only (not full page) */}
        <div className="relative container mx-auto px-4 py-12 flex justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2000')` }}>
          <div className="max-w-3xl w-full">
            <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6">
              <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  Volunteer Registration
                </h1>
                <p className="text-lg max-w-2xl mx-auto text-slate-600 drop-shadow-sm">
                  Join our community of change-makers and help us create a better tomorrow
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Personal information:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Phone Number *</Label>
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={form.phoneNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsappNumber">Whatsapp Number *</Label>
                    <Input
                      id="whatsappNumber"
                      name="whatsappNumber"
                      value={form.whatsappNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="space-y-2">
                    <Label>Marital status</Label>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="YES"
                          checked={form.maritalStatus === "YES"}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span>YES</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="radio"
                          name="maritalStatus"
                          value="NO"
                          checked={form.maritalStatus === "NO"}
                          onChange={handleChange}
                          className="w-4 h-4"
                        />
                        <span>NO</span>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Languages known</Label>
                    <Textarea
                      id="languages"
                      name="languages"
                      rows={2}
                      placeholder="Type languages separated by commas"
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor="email">EMAIL *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Photo Upload */}
                <div className="space-y-2 mt-4">
                  <Label htmlFor="photo">Photo: [Accepted type: PNG/JPG/JPEG/PDF - Upto 3 MB] *</Label>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-all ${
                      isDraggingPhoto 
                        ? 'border-teal-500 bg-teal-50' 
                        : 'border-slate-300 hover:border-teal-400'
                    }`}
                    onDragOver={(e) => handleDragOver(e, "photo")}
                    onDragLeave={(e) => handleDragLeave(e, "photo")}
                    onDrop={(e) => handleDrop(e, "photo")}
                  >
                    <Upload className={`w-12 h-12 mx-auto mb-3 ${isDraggingPhoto ? 'text-teal-500' : 'text-slate-400'}`} />
                    <label htmlFor="photo" className="cursor-pointer block">
                      <span className={`text-sm block mb-1 ${isDraggingPhoto ? 'text-teal-600 font-medium' : 'text-slate-600'}`}>
                        {isDraggingPhoto ? 'Drop your file here' : 'Drag & Drop Files Here'}
                      </span>
                      <span className="text-xs text-slate-500 block">or</span>
                      <span className="text-xs text-slate-500 block mt-1">Browse Files</span>
                      {photoName && (
                        <span className="text-xs text-slate-500 block mt-2">0 of 10</span>
                      )}
                      <input
                        id="photo"
                        name="photo"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                    {photoName && (
                      <div className="mt-4 p-3 bg-teal-50 rounded-md inline-flex items-center gap-2">
                        <Upload className="w-4 h-4 text-teal-600" />
                        <p className="text-sm text-teal-700 font-medium">{photoName}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Location/Address Section */}
              <div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={form.address}
                      onChange={handleChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={form.pincode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="aadharNumber">Aadhar or Personal ID Number *</Label>
                      <Input
                        id="aadharNumber"
                        name="aadharNumber"
                        value={form.aadharNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="aadharCopy">Upload Aadhar or Personal ID Copy: [Accepted type: PNG/JPG/JPEG/PDF - Upto 3 MB] **</Label>
                      <div
                        className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                          isDraggingAadhar ? 'border-teal-500 bg-teal-50' : 'border-slate-300 hover:border-teal-400'
                        }`}
                        onDragOver={(e) => handleDragOver(e, 'aadharCopy')}
                        onDragLeave={(e) => handleDragLeave(e, 'aadharCopy')}
                        onDrop={(e) => handleDrop(e, 'aadharCopy')}
                      >
                        <Upload className={`w-10 h-10 mx-auto mb-3 ${isDraggingAadhar ? 'text-teal-500' : 'text-slate-400'}`} />
                        <label htmlFor="aadharCopy" className="cursor-pointer block">
                          <span className={`text-sm block mb-1 ${isDraggingAadhar ? 'text-teal-600 font-medium' : 'text-slate-600'}`}>
                            {isDraggingAadhar ? 'Drop your file here' : 'Drag & Drop Files Here'}
                          </span>
                          <span className="text-xs text-slate-500 block">or</span>
                          <span className="text-xs text-slate-500 block mt-1">Browse Files</span>
                          <input
                            ref={aadharInputRef}
                            id="aadharCopy"
                            name="aadharCopy"
                            type="file"
                            accept=".pdf,.jpg,.jpeg,.png"
                            onChange={handleChange}
                            className="hidden"
                          />
                        </label>
                        {aadharCopyName && (
                          <div className="mt-4 p-3 bg-teal-50 rounded-md inline-flex items-center gap-2">
                            <Upload className="w-4 h-4 text-teal-600" />
                            <p className="text-sm text-teal-700 font-medium">{aadharCopyName}</p>
                          </div>
                        )}
                        {aadharError && <p className="text-sm text-red-600 mt-2">{aadharError}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth *</Label>
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={form.dob}
                      onChange={handleChange}
                      placeholder="dd-mm-yyyy"
                    />
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Education:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="educationType">Type</Label>
                    <Select
                      value={form.educationType}
                      onValueChange={(value) => handleSelectChange("educationType", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Type" />
                      </SelectTrigger>
                      <SelectContent>
                        {educationTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="specialization">Specialization/Major</Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      value={form.specialization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="skill">Skill</Label>
                    <Input
                      id="skill"
                      name="skill"
                      value={form.skill}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="certification">Certification</Label>
                    <Input
                      id="certification"
                      name="certification"
                      value={form.certification}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Job/Work Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Job/Work:</h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="title">Title/Designation</Label>
                    <Input
                      id="title"
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearsOfExperience">Years of experience</Label>
                    <Input
                      id="yearsOfExperience"
                      name="yearsOfExperience"
                      value={form.yearsOfExperience}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Volunteering Information Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Volunteering information:</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="hasVolunteerExperience">Vol. Experience (YES/NO)</Label>
                    <Input
                      id="hasVolunteerExperience"
                      name="hasVolunteerExperience"
                      value={form.hasVolunteerExperience}
                      onChange={handleChange}
                      placeholder="YES or NO"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="volunteerYearsOfExperience">Years of experience</Label>
                    <Input
                      id="volunteerYearsOfExperience"
                      name="volunteerYearsOfExperience"
                      value={form.volunteerYearsOfExperience}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Label htmlFor="areaOfInterest">Describe your area of interest *</Label>
                  <Textarea
                    id="areaOfInterest"
                    name="areaOfInterest"
                    value={form.areaOfInterest}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                </div>
              </div>

              {/* Action Buttons */}
              {/* Emergency Contact Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Emergency Contact</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName">Contact Name</Label>
                    <Input
                      id="emergencyName"
                      name="emergencyName"
                      value={form.emergencyName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyNumber">Contact Number</Label>
                    <Input
                      id="emergencyNumber"
                      name="emergencyNumber"
                      value={form.emergencyNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Resume Upload Section */}
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-teal-700">Resume</h2>
                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume: [Accepted type: PDF/DOC/DOCX - Upto 5 MB]</Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                      isDraggingResume ? 'border-teal-500 bg-teal-50' : 'border-slate-300 hover:border-teal-400'
                    }`}
                    onDragOver={(e) => handleDragOver(e, 'resume')}
                    onDragLeave={(e) => handleDragLeave(e, 'resume')}
                    onDrop={(e) => handleDrop(e, 'resume')}
                  >
                    <Upload className={`w-10 h-10 mx-auto mb-3 ${isDraggingResume ? 'text-teal-500' : 'text-slate-400'}`} />
                    <label htmlFor="resume" className="cursor-pointer block">
                      <span className={`text-sm block mb-1 ${isDraggingResume ? 'text-teal-600 font-medium' : 'text-slate-600'}`}>
                        {isDraggingResume ? 'Drop your file here' : 'Drag & Drop Files Here'}
                      </span>
                      <span className="text-xs text-slate-500 block">or</span>
                      <span className="text-xs text-slate-500 block mt-1">Browse Files</span>
                      <input
                        ref={resumeInputRef}
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                        className="hidden"
                      />
                    </label>
                    {resumeName && (
                      <div className="mt-4 p-3 bg-teal-50 rounded-md inline-flex items-center gap-2">
                        <Upload className="w-4 h-4 text-teal-600" />
                        <p className="text-sm text-teal-700 font-medium">{resumeName}</p>
                      </div>
                    )}
                    {resumeError && <p className="text-sm text-red-600 mt-2">{resumeError}</p>}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="min-w-[120px]"
                >
                  Reset
                </Button>
                <Button
                  type="submit"
                  className="min-w-[120px] bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-700 hover:to-green-700"
                >
                  SUBMIT 
                </Button>
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
