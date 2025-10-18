import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";

const Campaign = () => {
  const campaigns = Array(9).fill({
    title: "Campaign 2025",
  });

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <SectionHeading variant='primary'>CAMPAIGN</SectionHeading>
          <p className="text-lg text-foreground mt-6 max-w-3xl">
            The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
          </p>

          {/* Featured Campaign */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
            <div className="relative w-full h-96 bg-gradient-to-b from-sky to-white rounded-2xl overflow-hidden">
              {/* Sky background */}
              <div className="absolute top-16 left-1/2 -translate-x-1/2 w-48 h-24 bg-cloud rounded-full blur-xl opacity-90"></div>
              
              {/* Hills */}
              <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 600 250" className="w-full h-auto">
                  <path
                    d="M0,120 Q150,60 300,120 T600,120 L600,250 L0,250 Z"
                    fill="hsl(76, 61%, 67%)"
                    opacity="0.6"
                  />
                  <path
                    d="M0,160 Q200,90 400,160 T600,160 L600,250 L0,250 Z"
                    fill="hsl(76, 61%, 47%)"
                    opacity="0.8"
                  />
                  <path
                    d="M0,190 Q150,120 300,190 T600,190 L600,250 L0,250 Z"
                    fill="hsl(76, 100%, 25%)"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Campaign 2025</h3>
              <p className="text-lg text-foreground">running 2 activities</p>
            </div>
          </div>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="overflow-hidden cursor-pointer hover:shadow-xl transition-shadow">
                <div className="relative w-full h-64 bg-gradient-to-b from-sky to-white overflow-hidden">
                  {/* Sky background */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-cloud rounded-full blur-lg opacity-90"></div>
                  
                  {/* Hills */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 400 150" className="w-full h-auto">
                      <path
                        d="M0,80 Q100,40 200,80 T400,80 L400,150 L0,150 Z"
                        fill="hsl(76, 61%, 67%)"
                        opacity="0.6"
                      />
                      <path
                        d="M0,100 Q150,60 300,100 T400,100 L400,150 L0,150 Z"
                        fill="hsl(76, 61%, 47%)"
                        opacity="0.8"
                      />
                      <path
                        d="M0,120 Q100,80 200,120 T400,120 L400,150 L0,150 Z"
                        fill="hsl(76, 100%, 25%)"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-foreground">{campaign.title}</h3>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Campaign;
