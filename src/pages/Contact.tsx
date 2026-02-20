import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import bg from "@/assets/contact.png";

const Contact = () => {
  const [locLoading, setLocLoading] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);

  const officeAddress = "46, RAMAR KOVIL STREET RAM NAGAR, COIMBATORE 641009, Tamil Nadu, India";
  const officeMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    officeAddress,
  )}`;

  const handleDirectionsFromMyLocation = () => {
    setLocError(null);
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setLocError("Geolocation is not supported by your browser.");
      return;
    }

    setLocLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const origin = `${lat},${lng}`;
        const destination = encodeURIComponent(officeAddress);
        const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}`;
        window.open(url, "_blank", "noopener");
        setLocLoading(false);
      },
      (err) => {
        setLocError(err.message || "Unable to determine location");
        setLocLoading(false);
      },
      { timeout: 10000 },
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main
        className="flex-1 container mx-auto px-4 py-12"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Hero Section */}
        <div className="text-center mb-12">

          <p className="text-lg text-white max-w-3xl mx-auto">
            Ready to make a difference? Whether you want to volunteer, partner
            with us, or learn more about our work, we'd love to hear from you.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <div className="max-w-6xl w-full">
              <CardContent>
                <div className="flex flex-col md:flex-row items-stretch bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex-1 flex items-center p-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Phone className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-700">Mobile</h4>
                      <a href="tel:+919666984000" className="block mt-1 text-xl font-medium text-slate-900">+91 96669 84000</a>
                    </div>
                  </div>

                  <div className="hidden md:block w-px bg-slate-200" />

                  <div className="flex-1 flex items-center p-6">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <Mail className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-700">Email</h4>
                      <a href="mailto:sunai2k3@gmail.com" className="block mt-1 text-xl font-medium text-slate-900">sunai2k3@gmail.com</a>
                    </div>
                  </div>

                  <div className="hidden md:block w-px bg-slate-200" />

                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => window.open(officeMapsUrl, "_blank", "noopener")}
                    onKeyDown={(e) => { if (e.key === "Enter") { window.open(officeMapsUrl, "_blank", "noopener"); } }}
                    className="flex-1 flex items-center p-6 cursor-pointer"
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                        <MapPin className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-emerald-700">Location</h4>
                      <p className="mt-1 text-base text-slate-900 font-medium">
                        Address: 46 , RAMAR KOVIL STREET RAM NAGAR ,
                        <br /> COIMBATORE 641009
                        <br /> Tamil Nadu, India
                      </p>
                      {locError && (<div className="text-sm text-red-600 mt-2">{locError}</div>)}
                    </div>
                  </div>
                </div>
              </CardContent>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
