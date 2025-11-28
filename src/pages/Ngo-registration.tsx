import React, { useState, useRef, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Upload } from "lucide-react";

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
  documents: null,
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
        const maxBytes = 5 * 1024 * 1024; // 5MB
        if (!allowed.includes(fileExtension)) {
          setDocumentsError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.');
          return;
        }
        if (file.size > maxBytes) {
          setDocumentsError('File too large. Maximum allowed size is 5 MB.');
          return;
        }
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

  const handleFileSelect = (file: File) => {
    // validate before accepting
    const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
    const allowed = ['.pdf', '.jpg', '.jpeg', '.png'];
    const maxBytes = 5 * 1024 * 1024;
    if (!allowed.includes(fileExtension)) {
      setDocumentsError('Invalid file type. Allowed: PDF, JPG, JPEG, PNG.');
      return;
    }
    if (file.size > maxBytes) {
      setDocumentsError('File too large. Maximum allowed size is 5 MB.');
      return;
    }
    setDocumentsError('');
    setForm({ ...form, documents: file });
    setDocumentsName(file.name);
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
      handleFileSelect(file);
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setForm({ ...form, [name]: value });
  };

  const handleReset = () => {
    setForm(initialState);
    setDocumentsName("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("NGO registration submitted!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 relative overflow-auto">
        <div 
          className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2000')`,
          }}
        />        
        <div className="relative container mx-auto px-4 py-12 flex justify-center">
          <div className="max-w-3xl w-full">
            <form onSubmit={handleSubmit} className="bg-white/85 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6">
              <div className="mb-8 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                  NGO Registration
                </h1>
                <p className="text-sm md:text-base max-w-2xl mx-auto text-slate-600 drop-shadow-sm">
                  Together, we build stronger communities and a brighter future for all.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="organizationName" className="text-teal-700">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="registrationNumber" className="text-teal-700">
                      Registration Number *
                    </Label>
                    <Input
                      id="registrationNumber"
                      name="registrationNumber"
                      value={form.registrationNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registrationDate" className="text-teal-700">
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
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="tax12aUrn" className="text-teal-700">
                      12A (URN) *
                    </Label>
                    <Input
                      id="tax12aUrn"
                      name="tax12aUrn"
                      value={form.tax12aUrn}
                      onChange={handleChange}
                      placeholder="12A URN"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="tax80gUrn" className="text-teal-700">
                      80G (URN) *
                    </Label>
                    <Input
                      id="tax80gUrn"
                      name="tax80gUrn"
                      value={form.tax80gUrn}
                      onChange={handleChange}
                      placeholder="80G URN"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="csrRegNumber" className="text-teal-700">
                      CSR Registration *
                    </Label>
                    <Input
                      id="csrRegNumber"
                      name="csrRegNumber"
                      value={form.csrRegNumber}
                      onChange={handleChange}
                      placeholder="CSR registration number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="yearOfEstablishment" className="text-teal-700">
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
                </div>

                <div className="space-y-2">
                  <Label htmlFor="registeredAddress" className="text-teal-700">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state" className="text-teal-700">
                      State *
                    </Label>
                    <Input
                      id="state"
                      name="state"
                      value={form.state}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-teal-700">
                      City *
                    </Label>
                    <Input
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactNumber" className="text-teal-700">
                      Contact Number *
                    </Label>
                    <Input
                      id="contactNumber"
                      name="contactNumber"
                      value={form.contactNumber}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="officialEmail" className="text-teal-700">
                      Official Email  *
                    </Label>
                    <Input
                      id="officialEmail"
                      name="officialEmail"
                      type="email"
                      value={form.officialEmail}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="missionVision" className="text-teal-700">
                    Mission & Vision (short)
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="areasOfOperation" className="text-teal-700">
                      Areas of Operation
                    </Label>
                    <Input
                      id="areasOfOperation"
                      name="areasOfOperation"
                      value={form.areasOfOperation}
                      onChange={handleChange}
                      placeholder="e.g., Education, Health, Environment"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="activeVolunteers" className="text-teal-700">
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
              </div>

              <div className="space-y-2">
                <Label htmlFor="documents" className="text-teal-700">
                  UPLOAD DOCUMENTS (REG CERTIFICATE, 12A/80G, AUDIT)
                </Label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                    isDragging ? 'border-teal-500 bg-teal-50' : 'border-slate-300 hover:border-teal-400'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                >
                  <Upload className={`w-10 h-10 mx-auto mb-3 ${isDragging ? 'text-teal-500' : 'text-slate-400'}`} />
                  <label htmlFor="documents" className="cursor-pointer block">
                    <span className={`text-sm block mb-1 ${isDragging ? 'text-teal-600 font-medium' : 'text-slate-600'}`}>
                      {isDragging ? 'Drop your file here' : 'Drag & Drop Files Here'}
                    </span>
                    <span className="text-xs text-slate-500 block">or</span>
                    <span className="text-xs text-slate-500 block mt-1">Browse Files</span>
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
                    <div className="mt-4 p-3 bg-teal-50 rounded-md inline-flex items-center gap-2 justify-center">
                      <Upload className="w-4 h-4 text-teal-600" />
                      <p className="text-sm text-teal-700 font-medium">{documentsName}</p>
                    </div>
                  )}
                  {documentsError && <p className="text-sm text-red-600 mt-2">{documentsError}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-teal-700">Bank Info</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bankAccountNo" className="text-teal-700 text-sm">
                      Account Number
                    </Label>
                    <Input
                      id="bankAccountNo"
                      name="bankAccountNo"
                      value={form.bankAccountNo}
                      onChange={handleChange}
                      placeholder="Account number"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankIFSC" className="text-teal-700 text-sm">
                      IFSC
                    </Label>
                    <Input
                      id="bankIFSC"
                      name="bankIFSC"
                      value={form.bankIFSC}
                      onChange={handleChange}
                      placeholder="IFSC code"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bankName" className="text-teal-700 text-sm">
                      Bank Name
                    </Label>
                    <Input
                      id="bankName"
                      name="bankName"
                      value={form.bankName}
                      onChange={handleChange}
                      placeholder="Bank name and branch"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="panTaxId" className="text-teal-700">
                      PAN
                    </Label>
                    <Input
                      id="panTaxId"
                      name="panTaxId"
                      value={form.panTaxId}
                      onChange={handleChange}
                      placeholder="Enter PAN"
                    />
                  </div>
                </div>
                <p className="text-xs text-slate-500">
                  Preferably store bank details encrypted on server
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t">
                <Button
                  type="button"
                  variant="outline"
                  onClick={handleReset}
                  className="min-w-[120px]"
                >
                  RESET
                </Button>
                <Button
                  type="submit"
                  className="min-w-[120px] bg-gradient-to-r from-teal-600 to-green-600 hover:from-indigo-700 hover:to-blue-700"
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

export default NGORegistration;
