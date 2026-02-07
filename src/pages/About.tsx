import { Users, Target, Lightbulb, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { brand } from "@/config/brand";

const About = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8" style={{ color: brand.theme.accent }} />,
      title: "Mission",
      description: brand.about.mission,
    },
    {
      icon: <Lightbulb className="h-8 w-8" style={{ color: brand.theme.accent }} />,
      title: "Vision",
      description: brand.about.vision,
    },
    {
      icon: <Award className="h-8 w-8" style={{ color: brand.theme.accent }} />,
      title: "Values",
      description: brand.about.values,
    },
  ];

  const team = brand.team;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 text-white overflow-hidden bg-black">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Accent glow */}
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: brand.theme.accent }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center gap-2 flex-wrap text-sm mb-6 opacity-90">
            <span className="px-3 py-1 rounded-full border border-white/15">
              {brand.instagram}
            </span>
            <span className="px-3 py-1 rounded-full border border-white/15">
              {brand.est}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {brand.about.heroTitle}
          </h1>

          <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto">
            {brand.about.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                {brand.about.storyTitle}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {brand.about.storyP1}
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                {brand.about.storyP2}
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-medium bg-card-gradient">
  <img
    src="/images/our-story.jpeg"
    alt="International Auto Service & Collision Center workshop"
    className="w-full h-64 md:h-80 object-cover opacity-85"
  />

  {/* Overlay oscuro para integrarlo al diseño */}
  <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />

  {/* Borde sutil industrial */}
  <div className="absolute inset-0 ring-1 ring-white/10 rounded-2xl" />
</div>

          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission, Vision & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and customer experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals committed to quality repairs and clear communication.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="bg-card-gradient border-0 shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-24 h-24 bg-muted/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users
                      className="h-12 w-12"
                      style={{ color: brand.theme.accent }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="font-medium mb-3" style={{ color: brand.theme.accent }}>
                    {member.role}
                  </p>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
