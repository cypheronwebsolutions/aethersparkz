import { useParams } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import DemoImg from "@/assets/demoimg.png";

const CampaignDetail = () => {
  const { campaignId } = useParams();

  // Campaign data mapping
  const campaignData: Record<string, { title: string; description: string }> = {
    "1": { title: "Classroom", description: "Running 2 activities showcasing student creativity" },
    "2": { title: "Spring Art Festival", description: "Celebrating artistic expression through various mediums" },
    "3": { title: "Digital Innovation Week", description: "Exploring cutting-edge digital art techniques" },
    "4": { title: "Summer Exhibition", description: "Annual showcase of outstanding student work" },
    "5": { title: "Community Outreach Project", description: "Bringing art education to local communities" },
    "6": { title: "Winter Showcase", description: "End-of-year celebration of achievements" },
  };

  const campaign = campaignData[campaignId || "1"];

  return (
      <div className="min-h-screen flex flex-col bg-background">
        <main className="flex-1">
          {/* Hero Section with Course Title */}
          <section className="relative overflow-hidden">
            {/* Full-width image */}
            <img
                src={DemoImg}
                alt="Hero Section Img"
                className="w-full h-[500px] object-cover"
            />

            {/* Optional overlay */}
            <div className="absolute inset-0"></div>

            {/* Title at bottom-left */}
            <div className="absolute bottom-16 left-16 z-10">
              <h1 className="text-6xl font-bold text-primary italic">
                {campaign.title}
              </h1>
            </div>

            {/* Bottom horizontal image row */}
            <div className="flex justify-center gap-4 mt-4 px-4 pb-8 bg-background relative z-10">
              {Array.from({ length: 3 }).map((_, index) => (
                  <img
                      key={index}
                      src={DemoImg}
                      alt={`Gallery ${index + 1}`}
                      className="w-[350px] aspect-square object-cover shadow-md"
                  />
              ))}
            </div>
          </section>

          <div className="container mx-auto px-4 py-16">
            {/* Main Content Section */}
            <section className="mb-16">
              <p className="text-lg text-foreground leading-relaxed mb-12">
                The best proof of our professional art and design education. Check out the masterpieces and
                let their impactful creations from across all majors speak for themselves!
              </p>

              <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
                {/* Left Column - Images */}
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                      <div
                          key={item}
                          className="relative aspect-square w-full overflow-hidden"
                      >
                        <img
                            src={DemoImg}
                            alt="Image card"
                            className="aspect-square object-cover object-center"
                        />
                      </div>
                  ))}
                </div>

                {/* Right Column - Campaign Info */}
                <div>
                  <SectionHeading variant="accent" className="text-4xl mb-4">
                    {campaign.title}
                  </SectionHeading>
                  <p className="text-lg text-foreground leading-relaxed">
                    {campaign.description}
                  </p>
                  <p className="text-lg text-foreground leading-relaxed mt-4">
                    The best proof of our professional art and design education. Check out the
                    masterpieces and let their impactful creations from across all majors speak for
                    themselves!
                  </p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
  );
};

export default CampaignDetail;