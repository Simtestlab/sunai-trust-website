import React, { useState, useRef } from "react";
import Header from "@/components/Header";
import partnerImg from "@/assets/partner.jpg";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload, Building2, MapPin, Phone, FileText, Landmark, Target } from "lucide-react";

/* ─── initial state ───────────────────────────────── */
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
  contactPersonNumber: "",
  whatsappNumber: "",
  contactPersonEmail: "",
  website: "",
  socialMediaLink: "",
  bankAccountNo: "",
  bankIFSC: "",
  bankName: "",
};

/* ─── section wrapper ─────────────────────────────── */
const Section = ({
  step,
  icon: Icon,
  title,
  children,
}: {
  step: number;
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
    <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 border-b border-gray-200">
      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold">
        {step}
      </span>
      <Icon className="w-5 h-5 text-emerald-600" />
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
    </div>
    <div className="p-6">{children}</div>
  </div>
);

/* ─── component ───────────────────────────────────── */
const NGORegistration = () => {
  const [form, setForm] = useState(initialState);
  const [documentsName, setDocumentsName] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [documentsError, setDocumentsError] = useState("");
  const documentsInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      const files = (e.target as HTMLInputElement).files;
      if (files && files[0]) {
        const file = files[0];
        const ext = "." + file.name.split(".").pop()?.toLowerCase();
        const allowed = [".pdf", ".jpg", ".jpeg", ".png"];
        if (!allowed.includes(ext)) {
          setDocumentsError("Invalid file type. Allowed: PDF, JPG, JPEG, PNG.");
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          setDocumentsError("Max 5 MB.");
          return;
        }
        setDocumentsError("");
        setForm({ ...form, documents: file });
        setDocumentsName(file.name);
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files && files[0]) {
      const file = files[0];
      const ext = "." + file.name.split(".").pop()?.toLowerCase();
      const allowed = [".pdf", ".jpg", ".jpeg", ".png"];
      if (!allowed.includes(ext)) {
        setDocumentsError("Invalid file type.");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setDocumentsError("Max 5 MB.");
        return;
      }
      setDocumentsError("");
      setForm({ ...form, documents: file });
      setDocumentsName(file.name);
    }
  };

  const handleReset = () => {
    setForm(initialState);
    setDocumentsName("");
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("NGO registration submitted!");
  };

  /* ─── render ────────────────────────────────────── */
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <div
          className="relative bg-cover bg-center py-14 md:py-20"
          style={{ backgroundImage: `url(${partnerImg})` }}
        >
          <div className="absolute inset-0 bg-emerald-900/60" aria-hidden />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
              NGO / Partner Registration
            </h1>
            <p className="text-white/90 text-base md:text-lg max-w-xl mx-auto">
              Together, we build stronger communities and a brighter future for
              all.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="container mx-auto px-4 py-10 max-w-3xl -mt-8 relative z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1 — Organisation Details */}
            <Section step={1} icon={Building2} title="Organisation Details">
              <div className="space-y-1.5">
                <Label htmlFor="organizationName">
                  NGO / Organisation Name *
                </Label>
                <Input
                  id="organizationName"
                  name="organizationName"
                  value={form.organizationName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="registrationNumber">
                    Registration Number *
                  </Label>
                  <Input
                    id="registrationNumber"
                    name="registrationNumber"
                    value={form.registrationNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="registrationDate">
                    Registration Date *
                  </Label>
                  <Input
                    id="registrationDate"
                    name="registrationDate"
                    type="date"
                    value={form.registrationDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="yearOfEstablishment">
                    Year of Establishment *
                  </Label>
                  <Input
                    id="yearOfEstablishment"
                    name="yearOfEstablishment"
                    type="number"
                    value={form.yearOfEstablishment}
                    onChange={handleChange}
                    placeholder="YYYY"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="panTaxId">PAN</Label>
                  <Input
                    id="panTaxId"
                    name="panTaxId"
                    value={form.panTaxId}
                    onChange={handleChange}
                    placeholder="Enter PAN"
                  />
                </div>
              </div>
            </Section>

            {/* 2 — Legal Status */}
            <Section step={2} icon={FileText} title="Legal & Tax Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="tax12aUrn">12A URN </Label>
                  <Input
                    id="tax12aUrn"
                    name="tax12aUrn"
                    value={form.tax12aUrn}
                    onChange={handleChange}
                    placeholder="12A URN"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="tax80gUrn">80G URN </Label>
                  <Input
                    id="tax80gUrn"
                    name="tax80gUrn"
                    value={form.tax80gUrn}
                    onChange={handleChange}
                    placeholder="80G URN"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="csrRegNumber">
                    CSR Registration Number 
                  </Label>
                  <Input
                    id="csrRegNumber"
                    name="csrRegNumber"
                    value={form.csrRegNumber}
                    onChange={handleChange}
                    placeholder="CSR registration number"
                  />
                </div>
              </div>
            </Section>

            {/* 3 — Address & Contact */}
            <Section step={3} icon={MapPin} title="Address & Contact">
              <div className="space-y-1.5">
                <Label htmlFor="registeredAddress">
                  Registered Address *
                </Label>
                <Input
                  id="registeredAddress"
                  name="registeredAddress"
                  value={form.registeredAddress}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="state">State *</Label>
                  <Input
                    id="state"
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    value={form.contactNumber}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="officialEmail">Official Email *</Label>
                  <Input
                    id="officialEmail"
                    name="officialEmail"
                    type="email"
                    value={form.officialEmail}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="contactPersonNumber">Contact Person Number</Label>
                  <Input
                    id="contactPersonNumber"
                    name="contactPersonNumber"
                    value={form.contactPersonNumber}
                    onChange={handleChange}
                    placeholder="Contact person's phone"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="whatsappNumber">WhatsApp Number</Label>
                  <Input
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={form.whatsappNumber}
                    onChange={handleChange}
                    placeholder="WhatsApp number"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contactPersonEmail">Contact Person Email</Label>
                  <Input
                    id="contactPersonEmail"
                    name="contactPersonEmail"
                    type="email"
                    value={form.contactPersonEmail}
                    onChange={handleChange}
                    placeholder="Contact person's email"
                  />
                </div>
              </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                  <div className="space-y-1.5">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      name="website"
                      value={form.website}
                      onChange={handleChange}
                      placeholder="https://your-website.org"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="socialMediaLink">Social Media Link</Label>
                    <Input
                      id="socialMediaLink"
                      name="socialMediaLink"
                      value={form.socialMediaLink}
                      onChange={handleChange}
                      placeholder="https://facebook.com/yourpage"
                    />
                  </div>
                </div>
            </Section>

            {/* 4 — Mission & Scope */}
            <Section step={4} icon={Target} title="Mission & Scope">
              <div className="space-y-1.5">
                <Label htmlFor="missionVision">
                  Mission & Vision (brief summary)
                </Label>
                <Textarea
                  id="missionVision"
                  name="missionVision"
                  value={form.missionVision}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Briefly describe your organization's mission and vision..."
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
                <div className="space-y-1.5">
                  <Label htmlFor="areasOfOperation">
                    Areas of Operation
                  </Label>
                  <Input
                    id="areasOfOperation"
                    name="areasOfOperation"
                    value={form.areasOfOperation}
                    onChange={handleChange}
                    placeholder="e.g. Education, Healthcare, Environment"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="activeVolunteers">
                    No. of Active Volunteers
                  </Label>
                  <Input
                    id="activeVolunteers"
                    name="activeVolunteers"
                    type="number"
                    value={form.activeVolunteers}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </Section>

            {/* 5 — Documents */}
            <Section step={5} icon={Upload} title="Supporting Documents">
              <div className="space-y-2">
                <Label>
                  Upload Documents (Registration Certificate, 12A/80G, Audit
                  Report)
                </Label>
                <div
                  className={`border-2 border-dashed rounded-xl p-6 text-center transition-all cursor-pointer ${isDragging
                      ? "border-emerald-500 bg-emerald-50"
                      : "border-gray-300 hover:border-emerald-400 bg-gray-50/50"
                    }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <label htmlFor="documents" className="cursor-pointer block">
                    <Upload
                      className={`w-8 h-8 mx-auto mb-2 ${isDragging ? "text-emerald-500" : "text-gray-400"
                        }`}
                    />
                    <span className="text-sm text-gray-600 block">
                      {isDragging
                        ? "Drop file here"
                        : "Drag & drop or click to browse"}
                    </span>
                    <span className="text-xs text-gray-400 block mt-1">
                      PDF / JPG / PNG — max 5 MB
                    </span>
                    <input
                      ref={documentsInputRef}
                      id="documents"
                      name="documents"
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                  {documentsName && (
                    <div className="mt-3 px-3 py-2 bg-emerald-50 rounded-lg inline-flex items-center gap-2">
                      <Upload className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm text-emerald-700 font-medium">
                        {documentsName}
                      </span>
                    </div>
                  )}
                  {documentsError && (
                    <p className="text-sm text-red-600 mt-2">
                      {documentsError}
                    </p>
                  )}
                </div>
              </div>
            </Section>

            {/* 6 — Bank Details */}
            <Section step={6} icon={Landmark} title="Bank Details">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <Label htmlFor="bankAccountNo">Account Number</Label>
                  <Input
                    id="bankAccountNo"
                    name="bankAccountNo"
                    value={form.bankAccountNo}
                    onChange={handleChange}
                    placeholder="Account number"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="bankIFSC">IFSC Code</Label>
                  <Input
                    id="bankIFSC"
                    name="bankIFSC"
                    value={form.bankIFSC}
                    onChange={handleChange}
                    placeholder="IFSC code"
                  />
                </div>
                <div className="space-y-1.5 sm:col-span-2">
                  <Label htmlFor="bankName">Bank Name & Branch</Label>
                  <Input
                    id="bankName"
                    name="bankName"
                    value={form.bankName}
                    onChange={handleChange}
                    placeholder="Bank name and branch"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                Bank details are stored securely and encrypted on our servers.
              </p>
            </Section>

            {/* Actions */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col sm:flex-row justify-end gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={handleReset}
                className="min-w-[130px] rounded-xl"
              >
                Reset Form
              </Button>
              <Button
                type="submit"
                className="min-w-[160px] rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-semibold shadow-md hover:shadow-lg"
              >
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NGORegistration;
