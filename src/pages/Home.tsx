import HeroCarousel from "@/components/HeroCarousel";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import SectionHeading from "@/components/SectionHeading";
import DemoImg from "@/assets/demoimg.png"

const Home = () => {
  const courses = [
    "Kids Starter",
    "Kids Starter",
    "Kids Starter",
    "Kids Starter",
  ];

  const testimonials = [
    {
      text: "A very good place to learn poster colour. Every Week new techniques taught. The instructor is very nice and patien.",
      author: "Chuan Ooi",
    },
    {
      text: "A very good place to learn poster colour. Every Week new techniques taught. The instructor is very nice and patien.",
      author: "Chuan Ooi",
    },
    {
      text: "A very good place to learn poster colour. Every Week new techniques taught. The instructor is very nice and patien.",
      author: "Chuan Ooi",
    },
    {
      text: "A very good place to learn poster colour. Every Week new techniques taught. The instructor is very nice and patien.",
      author: "Chuan Ooi",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        {/* Hero Section */}
        <section>
          <HeroCarousel />
        </section>

        {/* Why Choose Us Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col items-center">
              <SectionHeading className="m-0">Why Choose Us?</SectionHeading>
              <p className="text-lg text-foreground mt-4 text-center max-w-2xl">
                hfhghfhfhfhghfhfhfhghfhfhfhghfhf
              </p>
            </div>
            <div className="relative w-full overflow-hidden">
              <img src={DemoImg} alt='Demo' className='object-cover object-cente h-64 w-auto rounded-sm'/>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <CourseCard key={index} title={course} />
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="border-t-4 border-dashed border-foreground pt-12 pb-8">
            <div className="flex justify-center">
              <SectionHeading className='text-4xl font-thin'>What Parents Say About Us</SectionHeading>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                author={testimonial.author}
              />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Home;
