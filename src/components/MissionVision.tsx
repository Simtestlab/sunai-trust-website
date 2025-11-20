import { Card, CardContent } from "@/components/ui/card";
import missionImage from "../assets/mission.jpeg";
import visionImage from "../assets/vision.jpeg";

const MissionVision = () => {
  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Purpose & Direction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided by a clear vision and driven by a meaningful mission
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Vision Card */}
          <Card
            className="
              relative
              border border-primary/10
              bg-white/70
              backdrop-blur-xl
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
              hover:scale-[1.02]
              transition-all duration-300
              rounded-2xl
            "
          >
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-accent/10 bg-cover bg-center shadow-inner"
                  style={{ backgroundImage: `url(${visionImage})` }}
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
          <Card
            className="
              relative
              border border-primary/10
              bg-white/70
              backdrop-blur-xl
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]
              hover:scale-[1.02]
              transition-all duration-300
              rounded-2xl
            "
          >
            <CardContent className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-full bg-primary/10 bg-cover bg-center shadow-inner"
                  style={{ backgroundImage: `url(${missionImage})` }}
                ></div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                  Mission
                </h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To promote holistic development for all humans, regardless of
                their religion, caste, creed, race, color, or gender. We follow
                a people-centered development philosophy, empowering communities
                through education, healthcare, and sustainable livelihood
                initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
