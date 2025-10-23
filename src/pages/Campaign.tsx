import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import DemoImg from '@/assets/demoimg.png'
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
            <img src={DemoImg} alt='Campaign Hero' className='w-full aspect-[4/3] object-cover shadow-md'/>
            <div>
              <h3 className="text-3xl text-foreground mb-4">Campaign 2025</h3>
              <p className="text-lg text-foreground">running 2 activities</p>
            </div>
          </div>

          {/* Campaign Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {campaigns.map((campaign, index) => (
                <Card
                    key={index}
                    className="overflow-hidden cursor-pointer rounded-none border-0 shadow-none bg-transparent hover:shadow-xl transition-shadow"
                >
                  <img
                      src={DemoImg}
                      alt="Campaign Hero"
                      className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-4 text-center bg-transparent">
                    <h3 className="text-foreground">{campaign.title}</h3>
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
