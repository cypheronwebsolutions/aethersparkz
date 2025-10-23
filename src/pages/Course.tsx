import SectionHeading from "@/components/SectionHeading";
import DemoImg from '@/assets/demoimg.png'

const Course = () => {
  const courses = [
    { title: "Classroom", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves! " },
    { title: "Course 2", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 3", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 4", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 5", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
    { title: "Course 6", description: "The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!" },
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
                  <div
                      key={index}
                      className="flex flex-col md:flex-row items-stretch overflow-hidden hover:shadow-2xl"
                  >
                    {/* Left side - Responsive image */}
                    <div className="flex-shrink-0 w-full md:w-auto md:min-w-[300px] relative">
                      <img
                          src={DemoImg}
                          alt="Course Image"
                          className="w-full h-full object-cover md:h-full md:w-[300px]"
                      />
                    </div>

                    {/* Right side - Flexible height */}
                    <div className="bg-[#9aa4c8] p-8 md:p-12 flex flex-col justify-center flex-1">
                      <h3 className="text-3xl font-bold text-primary italic mb-4">
                        {course.title}
                      </h3>
                      <p className="text-foreground leading-relaxed">
                        {course.description}
                      </p>
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