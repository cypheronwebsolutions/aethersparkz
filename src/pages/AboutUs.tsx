import SectionHeading from "@/components/SectionHeading";
import { Card } from "@/components/ui/card";
import DemoImg from "@/assets/demoimg.png";

const AboutUs = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 mb-0 pb-0">
          <section className="container mx-auto px-4 py-16">
            <SectionHeading variant="primary">ABOUT US</SectionHeading>
            <p className="text-xl text-foreground mt-6 max-w-3xl">
              The best proof of our professional art and design education. Check
              out the masterpieces and let their impactful creations from across
              all majors speak for themselves!
            </p>

            {/* Vision Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-secondary text-secondary-foreground p-8 rounded-none">
                <h3 className="text-2xl font-bold mb-4 text-center underline decoration-2 underline-offset-4">
                  Vision
                </h3>
                <p className="text-center leading-relaxed">
                  The best proof of our professional art and design education.
                  Check out the masterpieces and let their impactful creations
                  from across all majors speak for themselves!
                </p>
              </Card>
              <Card className="bg-secondary text-secondary-foreground p-8 rounded-none">
                <h3 className="text-2xl font-bold mb-4 text-center underline decoration-2 underline-offset-4">
                  Mission
                </h3>
                <p className="text-center leading-relaxed">
                  The best proof of our professional art and design education.
                  Check out the masterpieces and let their impactful creations
                  from across all majors speak for themselves!
                </p>
              </Card>
            </div>

            {/* Environment Section */}
            <div className="mt-20">
              <h2 className="font-comic text-4xl md:text-5xl font-bold text-primary text-center mb-12">
                ENVIRONMENT
              </h2>

              {/* Classroom */}
              <section className="flex flex-col items-center justify-center py-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                  {/* Image grid */}
                  <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <img
                        src={DemoImg}
                        alt="Classroom large"
                        className="w-full h-[400px] object-cover shadow-md"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <img
                          src={DemoImg}
                          alt="Classroom small 1"
                          className="w-full h-[150px] object-cover shadow-md"
                      />
                      <img
                          src={DemoImg}
                          alt="Classroom small 2"
                          className="w-full h-[150px] object-cover shadow-md"
                      />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <SectionHeading variant="accent">Classroom</SectionHeading>
                    <p className="text-lg text-foreground mt-6 leading-relaxed">
                      The best proof of our professional art and design education.
                      Check out the masterpieces and let their impactful creations
                      from across all majors speak for themselves!
                    </p>
                  </div>
                </div>
              </section>

              {/* Exhibition */}
              <section className="flex flex-col items-center justify-center py-4">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
                  {/* Text content */}
                  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <SectionHeading variant="accent">Exhibition</SectionHeading>
                    <p className="text-lg text-foreground mt-6 leading-relaxed">
                      The best proof of our professional art and design education.
                      Check out the masterpieces and let their impactful creations
                      from across all majors speak for themselves!
                    </p>
                  </div>

                  {/* Image grid */}
                  <div className="flex flex-col w-full md:w-1/2 gap-4">
                    <img
                        src={DemoImg}
                        alt="Exhibition large"
                        className="w-full h-[400px] object-cover shadow-md"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <img
                          src={DemoImg}
                          alt="Exhibition small 1"
                          className="w-full h-[150px] object-cover shadow-md"
                      />
                      <img
                          src={DemoImg}
                          alt="Exhibition small 2"
                          className="w-full h-[150px] object-cover shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>

          {/* Exhibition Gallery — Full width, flush with footer */}
          <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] bg-secondary flex items-center justify-center py-12 px-4 mt-0 mb-0">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl w-full">
              {Array.from({ length: 10 }).map((_, i) => (
                  <img
                      key={i}
                      src={DemoImg}
                      alt={`Exhibition Gallery ${i + 1}`}
                      className="w-full aspect-[4/4] object-cover shadow-md"
                  />
              ))}
            </div>
          </div>
        </main>
      </div>
  );
};

export default AboutUs;