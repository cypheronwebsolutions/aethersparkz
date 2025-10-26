import { useParams } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import DemoImg from "@/assets/demoimg.png";

const CourseDetail = () => {
  const { courseId } = useParams();

  // Course data mapping
  const courseData: Record<string, { title: string; description: string }> = {
    "1": { title: "Classroom", description: "Professional art and design education" },
    "2": { title: "Digital Art Basics", description: "Learn the fundamentals of digital art" },
    "3": { title: "Advanced Drawing", description: "Master advanced drawing techniques" },
    "4": { title: "Animation Workshop", description: "Create stunning animations" },
    "5": { title: "3D Modeling", description: "Build and render 3D models" },
    "6": { title: "Portfolio Development", description: "Build your professional portfolio" },
  };

  const course = courseData[courseId || "1"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        {/* Hero Section with Course Title */}
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
            <h1 className="text-6xl font-bold text-primary italic">{course.title}</h1>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Overview Section */}
          <section className="mb-16">
            <SectionHeading variant="default" className="text-3xl mb-4">
              Overview
            </SectionHeading>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
            </p>
          </section>

          {/* Structure Section */}
          <section className="mb-16">
            <SectionHeading variant="default" className="text-3xl mb-4">
              Structure
            </SectionHeading>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
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
          </section>

          {/* Outcome Section */}
          <section className="mb-16">
            <SectionHeading variant="default" className="text-3xl mb-4">
              Outcome
            </SectionHeading>
            <p className="text-lg text-foreground leading-relaxed mb-4">
              The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
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
          </section>

          {/* Showcase Section */}
          <section className="mb-16">
            <SectionHeading variant="default" className="text-3xl mb-4">
              Showcase
            </SectionHeading>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div
                  key={item}
                  className="relative bg-gradient-to-b from-[#87CEEB] to-[#87CEEB] aspect-square overflow-hidden"
                >
                  {/* Decorative cloud */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-16 h-8 bg-white rounded-full opacity-80"></div>
                  {/* Decorative hill */}
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#6B8E23] to-[#8FBC8F] rounded-t-[100%]"></div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
