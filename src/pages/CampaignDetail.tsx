import { useParams } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import DemoImg from "@/assets/demoimg.png";

const CampaignDetail = () => {
  const { campaignId } = useParams();

  // Campaign data mapping
  const campaignData: Record<string, { title: string; description: string }> = {
    "1": { title: "Campaign 2025", description: "Running 2 activities showcasing student creativity" },
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
        {/* Hero Section with Campaign Title */}
        <section className="relative bg-gradient-to-b from-[#87CEEB] to-[#87CEEB] py-32 overflow-hidden">
          {/* Decorative clouds */}
          <div className="absolute top-10 left-20 w-32 h-16 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-20 right-32 w-40 h-20 bg-white rounded-full opacity-80"></div>
          <div className="absolute top-10 right-1/4 w-48 h-24 bg-white rounded-full opacity-80"></div>
          
          {/* Decorative hills */}
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#6B8E23] to-[#8FBC8F] rounded-t-[100%]"></div>
          <div className="absolute bottom-0 left-0 w-1/3 h-24 bg-[#556B2F] rounded-tr-full"></div>
          <div className="absolute bottom-0 right-0 w-1/2 h-28 bg-[#6B8E23] rounded-tl-full"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-6xl font-bold text-primary italic">{campaign.title}</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Main Content Section */}
          <section className="mb-16">
            <p className="text-lg text-foreground leading-relaxed mb-12">
              The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              {/* Left Column - Images */}
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="relative bg-gradient-to-b from-[#87CEEB] to-[#87CEEB] aspect-[4/3] overflow-hidden"
                  >
                    {/* Decorative cloud */}
                    <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-white rounded-full opacity-80"></div>
                    {/* Decorative hill */}
                    <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#6B8E23] to-[#8FBC8F] rounded-t-[100%]"></div>
                  </div>
                ))}
              </div>

              {/* Right Column - Campaign Info */}
              <div>
                <SectionHeading variant="primary" className="text-4xl mb-4">
                  {campaign.title}
                </SectionHeading>
                <p className="text-lg text-foreground leading-relaxed">
                  {campaign.description}
                </p>
                <p className="text-lg text-foreground leading-relaxed mt-4">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
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
