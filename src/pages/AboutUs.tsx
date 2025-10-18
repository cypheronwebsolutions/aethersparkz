import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import DemoImg from '@/assets/demoimg.png'
const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <SectionHeading variant='primary'>ABOUT US</SectionHeading>
          <p className="text-xl text-foreground mt-6 max-w-3xl">
            The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
          </p>

          {/* Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <Card className="bg-secondary text-secondary-foreground p-8 rounded-none">
              <h3 className="text-2xl font-bold mb-4 text-center underline decoration-2 underline-offset-4">
                Vision
              </h3>
              <p className="text-center leading-relaxed">
                The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
              </p>
            </Card>
            <Card className="bg-secondary text-secondary-foreground p-8 rounded-none">
              <h3 className="text-2xl font-bold mb-4 text-center underline decoration-2 underline-offset-4">
                Vision
              </h3>
              <p className="text-center leading-relaxed">
                The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
              </p>
            </Card>
          </div>

          {/* Environment Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
              ENVIRONMENT
            </h2>

            {/* Classroom */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <img src={DemoImg} alt='Classroom' />
              </div>
              <div>
                <SectionHeading variant="accent">Classroom</SectionHeading>
                <p className="text-lg text-foreground mt-6 leading-relaxed">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
                </p>
              </div>
            </div>

            {/* Exhibition */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading variant="accent">Exhibition</SectionHeading>
                <p className="text-lg text-foreground mt-6 leading-relaxed">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
                </p>
              </div>
              <div className="space-y-6">
                <img src={DemoImg} alt='Exhibition' />
              </div>
            </div>
          </div>

          {/* Exhibition Gallery */}
          <div className="bg-secondary py-16 -mx-4 px-4 mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {Array(10).fill(null).map((_, index) => (
                <div key={index} className="relative w-full h-40 bg-gradient-to-b from-sky to-white rounded-lg overflow-hidden">
                  {/* Sky background */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-cloud rounded-full blur-md opacity-90"></div>
                  
                  {/* Hills */}
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 200 80" className="w-full h-auto">
                      <path
                        d="M0,40 Q50,20 100,40 T200,40 L200,80 L0,80 Z"
                        fill="hsl(76, 61%, 67%)"
                        opacity="0.6"
                      />
                      <path
                        d="M0,50 Q60,30 120,50 T200,50 L200,80 L0,80 Z"
                        fill="hsl(76, 61%, 47%)"
                        opacity="0.8"
                      />
                      <path
                        d="M0,60 Q50,40 100,60 T200,60 L200,80 L0,80 Z"
                        fill="hsl(76, 100%, 25%)"
                      />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default AboutUs;
