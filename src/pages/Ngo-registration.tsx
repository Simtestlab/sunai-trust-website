import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Building2, Shield, BanknoteIcon, FileText, CheckCircle2 } from "lucide-react";

const initialState = {
  organizationName: "",
  registrationNumber: "",
  registrationDate: "",
  yearOfEstablishment: "",
  panTaxId: "",
  registeredAddress: "",
  state: "",
  city: "",
  contactNumber: "",
  officialEmail: "",
  missionVision: "",
  areasOfOperation: "",
  activeVolunteers: "",
  documents: null as File | null,
  tax12aUrn: "",
  tax80gUrn: "",
  csrRegNumber: "",
  bankAccountNo: "",
  bankIFSC: "",
  bankName: "",
};

const NGORegistration = () => {
  const [form, setForm] = useState(initialState);
  const [documentsName, setDocumentsName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [documentsError, setDocumentsError] = useState("");
  const documentsInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        const file = files[0];
        const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
        const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
        const maxBytes = 5 * 1024 * 1024;
        if (!allowed.includes(fileExtension)) { setDocumentsError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.'); return; }
        if (file.size > maxBytes) { setDocumentsError('File too large. Maximum 5 MB.'); return; }
        setDocumentsError('');
        setForm({ ...form, [name]: file });
        setDocumentsName(file.name);
      } else {
        setForm({ ...form, [name]: null });
        setDocumentsName("");
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
      if (!allowed.includes(fileExtension)) { setDocumentsError('Invalid type. Allowed: PDF, JPG, JPEG, PNG.'); return; }
      if (file.size > 5 * 1024 * 1024) { setDocumentsError('Max 5 MB.'); return; }
      setDocumentsError('');
      setForm({ ...form, documents: file });
      setDocumentsName(file.name);
    }
  };
  const handleReset = () => { setForm(initialState); setDocumentsName(""); };
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); console.log(form); alert("NGO registration submitted!"); };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-800 via-indigo-700 to-blue-900 py-10 sm:py-14 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Building2 className="w-4 h-4" />
            Organization Registration
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white leading-tight">
            NGO Registration
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Partner with SUNAI through structured CSR initiatives. We offer transparent governance,
            impact reporting, and scalable project models aligned with SDGs.
          </p>
        </div>
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-lg overflow-hidden">

                {/* Section 1: Organization Info */}
                <div className="p-5 sm:p-8 md:p-10 border-b border-slate-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-800">Organization Details</h2>
                      <p className="text-[10px] sm:text-xs text-slate-500">Basic information about your NGO</p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="organizationName" className="text-xs sm:text-sm font-medium">NGO / Organisation Name *</Label>
                      <Input id="organizationName" name="organizationName" value={form.organizationName} onChange={handleChange} required placeholder="Enter organization name" className="text-sm sm:text-base" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="registrationNumber" className="text-xs sm:text-sm font-medium">Registration Number *</Label>
                        <Input id="registrationNumber" name="registrationNumber" value={form.registrationNumber} onChange={handleChange} placeholder="Registration number" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="registrationDate" className="text-xs sm:text-sm font-medium">Registration Date *</Label>
                        <Input id="registrationDate" name="registrationDate" type="date" value={form.registrationDate} onChange={handleChange} className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="yearOfEstablishment" className="text-xs sm:text-sm font-medium">Year of Establishment *</Label>
                        <Input id="yearOfEstablishment" name="yearOfEstablishment" type="number" value={form.yearOfEstablishment} onChange={handleChange} placeholder="YYYY" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="activeVolunteers" className="text-xs sm:text-sm font-medium">No. of Active Volunteers</Label>
                        <Input id="activeVolunteers" name="activeVolunteers" type="number" value={form.activeVolunteers} onChange={handleChange} placeholder="0" className="text-sm sm:text-base" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 2: Address & Contact */}
                <div className="p-5 sm:p-8 md:p-10 border-b border-slate-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-800">Address & Contact</h2>
                      <p className="text-[10px] sm:text-xs text-slate-500">Location and contact details</p>
                    </div>
                  </div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="registeredAddress" className="text-xs sm:text-sm font-medium">Registered Address *</Label>
                      <Input id="registeredAddress" name="registeredAddress" value={form.registeredAddress} onChange={handleChange} required placeholder="Full registered address" className="text-sm sm:text-base" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="state" className="text-xs sm:text-sm font-medium">State *</Label>
                        <Input id="state" name="state" value={form.state} onChange={handleChange} placeholder="State" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="city" className="text-xs sm:text-sm font-medium">City *</Label>
                        <Input id="city" name="city" value={form.city} onChange={handleChange} placeholder="City" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="contactNumber" className="text-xs sm:text-sm font-medium">Contact Number *</Label>
                        <Input id="contactNumber" name="contactNumber" value={form.contactNumber} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="text-sm sm:text-base" />
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <Label htmlFor="officialEmail" className="text-xs sm:text-sm font-medium">Official Email *</Label>
                        <Input id="officialEmail" name="officialEmail" type="email" value={form.officialEmail} onChange={handleChange} placeholder="email@organization.org" className="text-sm sm:text-base" />
                      </div>
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="missionVision" className="text-xs sm:text-sm font-medium">Mission & Vision (brief)</Label>
                      <Textarea id="missionVision" name="missionVision" value={form.missionVision} onChange={handleChange} rows={3} placeholder="Tell us about your organization's mission and vision..." className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="areasOfOperation" className="text-xs sm:text-sm font-medium">Areas of Operation</Label>
                      <Input id="areasOfOperation" name="areasOfOperation" value={form.areasOfOperation} onChange={handleChange} placeholder="e.g., Mentorship, Healthcare, Environment" className="text-sm sm:text-base" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Compliance & Legal */}
                <div className="p-5 sm:p-8 md:p-10 border-b border-slate-100 bg-slate-50/50">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                      <Shield className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-800">Compliance & Legal</h2>
                      <p className="text-[10px] sm:text-xs text-slate-500">Tax exemption and CSR details</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="tax12aUrn" className="text-xs sm:text-sm font-medium">12A (URN)</Label>
                      <Input id="tax12aUrn" name="tax12aUrn" value={form.tax12aUrn} onChange={handleChange} placeholder="12A URN" className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="tax80gUrn" className="text-xs sm:text-sm font-medium">80G (URN)</Label>
                      <Input id="tax80gUrn" name="tax80gUrn" value={form.tax80gUrn} onChange={handleChange} placeholder="80G URN" className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="csrRegNumber" className="text-xs sm:text-sm font-medium">CSR Registration</Label>
                      <Input id="csrRegNumber" name="csrRegNumber" value={form.csrRegNumber} onChange={handleChange} placeholder="CSR registration number" className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="panTaxId" className="text-xs sm:text-sm font-medium">PAN</Label>
                      <Input id="panTaxId" name="panTaxId" value={form.panTaxId} onChange={handleChange} placeholder="PAN number" className="text-sm sm:text-base" />
                    </div>
                  </div>

                  {/* Document Upload */}
                  <div className="mt-5 sm:mt-6 space-y-1.5 sm:space-y-2">
                    <Label className="text-xs sm:text-sm font-medium">Documents (Registration Certificate, 12A/80G, Audit)</Label>
                    <div
                      className={`border-2 border-dashed rounded-xl p-4 sm:p-6 text-center transition-all cursor-pointer ${isDragging ? 'border-blue-500 bg-blue-50' : 'border-slate-300 hover:border-blue-400 hover:bg-blue-50/50'
                        }`}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={() => documentsInputRef.current?.click()}
                    >
                      <Upload className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 ${documentsName ? 'text-blue-600' : 'text-slate-400'}`} />
                      {documentsName ? (
                        <div className="flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          <p className="text-xs sm:text-sm font-medium text-blue-700">{documentsName}</p>
                        </div>
                      ) : (
                        <>
                          <p className="text-xs sm:text-sm text-slate-500">Drag & drop or click to upload</p>
                          <p className="text-[10px] sm:text-xs text-slate-400 mt-1">PDF, JPG, JPEG, PNG (max 5 MB)</p>
                        </>
                      )}
                      {documentsError && <p className="text-xs text-red-500 mt-2">{documentsError}</p>}
                      <input ref={documentsInputRef} type="file" name="documents" accept=".pdf,.jpg,.jpeg,.png" onChange={handleChange} className="hidden" />
                    </div>
                  </div>
                </div>

                {/* Section 4: Banking */}
                <div className="p-5 sm:p-8 md:p-10 border-b border-slate-100">
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <BanknoteIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-slate-800">Banking Details</h2>
                      <p className="text-[10px] sm:text-xs text-slate-500">For fund transfer and verification</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="bankAccountNo" className="text-xs sm:text-sm font-medium">Account Number</Label>
                      <Input id="bankAccountNo" name="bankAccountNo" value={form.bankAccountNo} onChange={handleChange} placeholder="Account number" className="text-sm sm:text-base" />
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      <Label htmlFor="bankIFSC" className="text-xs sm:text-sm font-medium">IFSC Code</Label>
                      <Input id="bankIFSC" name="bankIFSC" value={form.bankIFSC} onChange={handleChange} placeholder="IFSC code" className="text-sm sm:text-base" />
                    </div>
                    <div className="sm:col-span-2 space-y-1.5 sm:space-y-2">
                      <Label htmlFor="bankName" className="text-xs sm:text-sm font-medium">Bank Name & Branch</Label>
                      <Input id="bankName" name="bankName" value={form.bankName} onChange={handleChange} placeholder="Bank name and branch" className="text-sm sm:text-base" />
                    </div>
                  </div>
                  <p className="text-[10px] sm:text-xs text-slate-400 mt-3">All banking information is handled with secure encryption.</p>
                </div>

                {/* Action Buttons */}
                <div className="p-5 sm:p-8 md:p-10 flex flex-col sm:flex-row items-center justify-end gap-3 sm:gap-4">
                  <Button type="button" variant="outline" onClick={handleReset} className="w-full sm:w-auto min-w-[120px] text-xs sm:text-sm">
                    Reset Form
                  </Button>
                  <Button type="submit" className="w-full sm:w-auto min-w-[160px] bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 text-white font-bold text-xs sm:text-sm">
                    Submit Registration
                  </Button>
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

export default NGORegistration;
