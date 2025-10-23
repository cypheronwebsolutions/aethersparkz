import SectionHeading from "@/components/SectionHeading";

const Course = () => {
  const courses = [
    { title: "Classroom", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 2", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 3", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <SectionHeading variant='primary'>COURSE</SectionHeading>
          <p className="text-lg text-foreground max-w-3xl mt-6 leading-relaxed">
            The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
          </p>

          {/* Course Cards */}
          <div className="space-y-8 mt-12">
            {courses.map((course, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                {/* Left side - Landscape */}
                <div className="relative bg-gradient-to-b from-sky to-white h-64">
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-32 h-16 bg-white rounded-full blur-lg opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0">
                    <svg viewBox="0 0 300 150" className="w-full h-auto">
                      <path d="M0,80 Q75,40 150,80 T300,80 L300,150 L0,150 Z" fill="hsl(76, 61%, 67%)" opacity="0.6" />
                      <path d="M0,100 Q100,60 200,100 T300,100 L300,150 L0,150 Z" fill="hsl(76, 61%, 47%)" opacity="0.8" />
                      <path d="M0,115 Q75,80 150,115 T300,115 L300,150 L0,150 Z" fill="hsl(76, 100%, 25%)" />
                    </svg>
                  </div>
                </div>
                {/* Right side - Course info */}
                <div className="bg-muted p-8 md:p-12 flex flex-col justify-center h-64">
                  <h3 className="text-3xl font-bold text-primary italic mb-4">
                    {course.title}
                  </h3>
                  {index === 0 && (
                    <p className="text-foreground leading-relaxed">
                      {course.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Course;
