import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About JMK GROUPS
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Established in 2010, we've grown from a small seed to a trusted leader 
            in renewable energy solutions across India.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Sons of the Soil in Green Energy
            </h3>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Located in India's largest wind energy corridor, Muppandal Belt, Tamil Nadu, 
                we have been evolving with the renewable energy sector for over 20 years. 
                As "Sons of the Soil," we understand the local landscape and harness 
                nature's power efficiently.
              </p>
              <p>
                Our team of 150+ professionals brings 200+ portfolios of work experience 
                in wind, solar, and related industries, enabling us to deliver 
                comprehensive energy solutions across India.
              </p>
              <p>
                We maintain wind farms totaling close to 400MW and have successfully 
                completed solar turnkey projects exceeding 100MW, earning the trust 
                of valuable customers throughout Tamil Nadu.
              </p>
            </div>
            <div className="mt-8">
              <Button variant="energy" asChild>
                <Link to="/about" className="flex items-center">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">2010</h4>
                    <p className="text-muted-foreground">Established Year</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Eye className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">20+ Years</h4>
                    <p className="text-muted-foreground">Industry Experience</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-glow/10 p-3 rounded-lg">
                    <Heart className="w-8 h-8 text-primary-glow" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground">Pan India</h4>
                    <p className="text-muted-foreground">Service Coverage</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Vision, Mission, Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring">
            <CardContent className="p-8 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
              <p className="text-muted-foreground">
                Green and Clean mother earth for our children.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring">
            <CardContent className="p-8 text-center">
              <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
              <p className="text-muted-foreground">
                Be an organization constantly focused on catering global energy needs 
                through green and clean energy led by scientific innovations governed by ethical values.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card shadow-card border-0 hover:shadow-glow transition-spring">
            <CardContent className="p-8 text-center">
              <div className="bg-primary-glow/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-primary-glow" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Values</h3>
              <p className="text-muted-foreground">
                Innovations governed by Ethics and cater them at high Quality.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;