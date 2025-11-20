import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
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

            <Card>
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map section removed per request */}
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
