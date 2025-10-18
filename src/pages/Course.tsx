import SectionHeading from "@/components/SectionHeading";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Course = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">

      <main className="flex-1">
        {/* Course Heading */}
        <section className="container mx-auto px-4 py-12">
          <SectionHeading variant='primary'>COURSE</SectionHeading>
          <p className="text-lg text-foreground max-w-3xl mt-8 leading-relaxed">
            The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
          </p>
        </section>

        {/* Course Tabs */}
        <section className="container mx-auto px-4 pb-16">
          <Tabs defaultValue="classroom" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-8 bg-transparent h-auto p-0 mb-16">
              {[1, 2, 3].map((item) => (
                <TabsTrigger 
                  key={item} 
                  value={item === 1 ? "classroom" : `course${item}`}
                  className="h-auto p-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
                >
                  <div className="w-full h-64 grid grid-cols-2 rounded-2xl overflow-hidden border-2 border-muted hover:border-primary transition-colors">
                    {/* Left side - Landscape */}
                    <div className="relative bg-gradient-to-b from-sky to-white">
                      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-white rounded-full blur-lg opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 300 150" className="w-full h-auto">
                          <path d="M0,80 Q75,40 150,80 T300,80 L300,150 L0,150 Z" fill="hsl(76, 61%, 67%)" opacity="0.6" />
                          <path d="M0,100 Q100,60 200,100 T300,100 L300,150 L0,150 Z" fill="hsl(76, 61%, 47%)" opacity="0.8" />
                          <path d="M0,115 Q75,80 150,115 T300,115 L300,150 L0,150 Z" fill="hsl(76, 100%, 25%)" />
                        </svg>
                      </div>
                    </div>
                    {/* Right side - Course name */}
                    <div className="bg-muted flex items-center justify-center p-6">
                      <h3 className="text-2xl font-bold text-primary italic">
                        {item === 1 ? "Classroom" : `Course ${item}`}
                      </h3>
                    </div>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Classroom Tab Content */}
            <TabsContent value="classroom" className="mt-0">
              {/* Classroom Hero */}
              <div className="relative w-full h-96 bg-gradient-to-b from-sky to-white rounded-t-[80px] overflow-hidden mb-16">
                <div className="absolute top-20 left-1/4 w-48 h-24 bg-white rounded-full blur-2xl opacity-90"></div>
                <div className="absolute top-24 right-1/4 w-64 h-32 bg-white rounded-full blur-2xl opacity-80"></div>
                <div className="absolute top-32 right-1/3 w-40 h-20 bg-white rounded-full blur-xl opacity-75"></div>
                
                <div className="absolute bottom-0 left-0 right-0">
                  <svg viewBox="0 0 1200 300" className="w-full h-auto" preserveAspectRatio="none">
                    <path d="M0,150 Q300,80 600,150 T1200,150 L1200,300 L0,300 Z" fill="hsl(76, 61%, 67%)" opacity="0.6" />
                    <path d="M0,180 Q400,100 800,180 T1200,180 L1200,300 L0,300 Z" fill="hsl(76, 61%, 47%)" opacity="0.8" />
                    <path d="M0,220 Q300,140 600,220 T1200,220 L1200,300 L0,300 Z" fill="hsl(76, 100%, 25%)" />
                  </svg>
                  <div className="absolute left-12 bottom-32 md:bottom-40 z-10">
                    <h2 className="text-5xl md:text-6xl font-bold text-primary italic">Classroom</h2>
                  </div>
                </div>
              </div>

              {/* Overview Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4 underline">Overview</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
                </p>
              </div>

              {/* Structure Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4 underline">Structure</h3>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>asds</li>
                    <li>dfszd</li>
                    <li>sdf</li>
                    <li>sf</li>
                    <li>safd</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>asds</li>
                    <li>dfszd</li>
                    <li>sdf</li>
                  </ul>
                </div>
              </div>

              {/* Outcome Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-4 underline">Outcome</h3>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>asds</li>
                    <li>dfszd</li>
                    <li>sdf</li>
                    <li>sf</li>
                    <li>safd</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li>asds</li>
                    <li>dfszd</li>
                    <li>sdf</li>
                  </ul>
                </div>
              </div>

              {/* Showcase Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-foreground mb-6 underline">Showcase</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="relative w-full h-48 bg-gradient-to-b from-sky to-white rounded-lg overflow-hidden">
                      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-12 bg-white rounded-full blur-lg opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0">
                        <svg viewBox="0 0 200 100" className="w-full h-auto">
                          <path d="M0,50 Q50,30 100,50 T200,50 L200,100 L0,100 Z" fill="hsl(76, 61%, 67%)" opacity="0.6" />
                          <path d="M0,65 Q75,40 150,65 T200,65 L200,100 L0,100 Z" fill="hsl(76, 61%, 47%)" opacity="0.8" />
                          <path d="M0,75 Q50,55 100,75 T200,75 L200,100 L0,100 Z" fill="hsl(76, 100%, 25%)" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Other Course Tabs */}
            <TabsContent value="course2" className="mt-0">
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">Course 2 content coming soon...</p>
              </div>
            </TabsContent>

            <TabsContent value="course3" className="mt-0">
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">Course 3 content coming soon...</p>
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </main>

    </div>
  );
};

export default Course;
