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
  organizationName: "",
  registrationNumber: "",
  yearOfEstablishment: "",
  type: "Trust",
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
  bankInfo: "",
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
      <main className="flex-1 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=2000')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 to-transparent" />
        
        <div className="relative container mx-auto px-4 py-12 flex justify-center">
          <div className="max-w-3xl w-full">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
                Register - NGO
              </h1>
              <p className="text-sm text-slate-600">
                Together, we build stronger communities and a brighter future for all.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/85 backdrop-blur-md p-8 rounded-lg shadow-lg space-y-6">
                  {/* Organization Information */}
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
                          Registration Number
                        </Label>
                        <Input
                          id="registrationNumber"
                          name="registrationNumber"
                          value={form.registrationNumber}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="type" className="text-teal-700">
                          Type
                        </Label>
                        <Select
                          value={form.type}
                          onValueChange={(value) => handleSelectChange("type", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Trust">Trust</SelectItem>
                            <SelectItem value="Society">Society</SelectItem>
                            <SelectItem value="Section 8 Company">Section 8 Company</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="yearOfEstablishment" className="text-teal-700">
                          Year of Establishment
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
                      <div className="space-y-2">
                        <Label htmlFor="panTaxId" className="text-teal-700">
                          PAN / Tax ID
                        </Label>
                        <Input
                          id="panTaxId"
                          name="panTaxId"
                          value={form.panTaxId}
                          onChange={handleChange}
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
                          State
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
                          City
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
                          Contact Number
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
                          Official Email
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

                  {/* Document Upload */}
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

                  {/* Bank Information */}
                  <div className="space-y-2">
                    <Label htmlFor="bankInfo" className="text-teal-700">
                      Bank Info (Account no, IFSC, Bank Name)
                    </Label>
                    <Input
                      id="bankInfo"
                      name="bankInfo"
                      value={form.bankInfo}
                      onChange={handleChange}
                      placeholder="Preferably store bank details encrypted on server"
                    />
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
                      SUBMIT NGO
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
