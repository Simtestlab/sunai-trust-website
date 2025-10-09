import { Card, CardContent } from "@/components/ui/card";

const MissionVision = () => {
  return (
    <section className="py-20 bg-soft-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Purpose & Direction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided by a clear vision and driven by a meaningful mission
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card className="hover-lift border-0 shadow-card bg-card overflow-hidden group scroll-reveal">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=64&h=64&fit=crop)`,
                  }}
                ></div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Vision
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We envision a society that fosters a dignified life for every
                human being in harmony with nature. A world where communities
                thrive through sustainable development, equitable access to
                resources, and empowerment of the marginalized.
              </p>
            </CardContent>
          </Card>

          {/* Mission Card */}
          <Card className="hover-lift border-0 shadow-card bg-card overflow-hidden group scroll-reveal">
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=64&h=64&fit=crop)`,
                  }}
                ></div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Mission
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To promote holistic development for all humans, regardless of
                their religion, caste, creed, race, color, or gender. We follow
                a people-centered and people-led development philosophy,
                empowering communities through education, healthcare, and
                sustainable livelihood initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;