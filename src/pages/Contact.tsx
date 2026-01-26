import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const [locLoading, setLocLoading] = useState(false);
  const [locError, setLocError] = useState<string | null>(null);

  const officeAddress = "Gandhipuram, Coimbatore, Tamilnadu, India";
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

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">

          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Ready to make a difference? Whether you want to volunteer, partner
            with us, or learn more about our work, we'd love to hear from you.
          </p>
        </div>

        <div className="w-full flex justify-center">
          {/* Contact Information */}
          <div className="max-w-4xl space-y-6 w-full md:w-2/3 lg:w-1/2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-teal-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Contact Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="text-sm">+91 96669 84000</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="text-sm">support@sunai.org</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-slate-400" />
                  <span className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</span>
                </div>
              </CardContent>
            </Card>
            <div
              role="button"
              tabIndex={0}
              onClick={() => window.open(officeMapsUrl, "_blank", "noopener")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  window.open(officeMapsUrl, "_blank", "noopener");
                }
              }}
              className="focus:outline-none"
            >
              <Card className="cursor-pointer">
                <CardHeader>
                  <CardTitle className="flex items-center text-teal-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    Our Locations
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-800">Office</h4>
                    <p className="text-sm text-slate-600">
                      Gandhipuram
                      <br />
                      Coimbatore, Tamilnadu
                      <br />
                      India
                    </p>
                    {locError && (
                      <div className="text-sm text-red-600 mt-2">{locError}</div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
