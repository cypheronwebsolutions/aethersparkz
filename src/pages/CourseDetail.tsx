import {useParams} from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import DemoImg from "@/assets/demoimg.png";

const CourseDetail = () => {
    const {courseId} = useParams();

    // Course data mapping
    const courseData: Record<string, { title: string; description: string }> = {
        "1": {title: "Classroom", description: "Professional art and design education"},
        "2": {title: "Digital Art Basics", description: "Learn the fundamentals of digital art"},
        "3": {title: "Advanced Drawing", description: "Master advanced drawing techniques"},
        "4": {title: "Animation Workshop", description: "Create stunning animations"},
        "5": {title: "3D Modeling", description: "Build and render 3D models"},
        "6": {title: "Portfolio Development", description: "Build your professional portfolio"},
    };

    const course = courseData[courseId || "1"];

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1">

                {/* Hero Section with Course Title */}
                <section className="relative overflow-hidden">
                    {/* Full-width image */}
                    <img
                        src={DemoImg}
                        alt="Hero Section Img"
                        className="w-full h-[500px] object-cover"
                    />

                    {/* Optional overlay for better text visibility */}
                    <div className="absolute inset-0"></div>

                    {/* Title at bottom-left */}
                    <div className="absolute bottom-16 left-16 z-10">
                        <h1 className="text-6xl font-bold text-primary italic">
                            {course.title}
                        </h1>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-16">
                    {/* Overview Section */}
                    <section className="mb-16">
                        <SectionHeading variant="default" className="text-3xl mb-4">
                            Overview
                        </SectionHeading>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            The best proof of our professional art and design education. Check out the masterpieces and
                            let their impactful creations from across all majors speak for themselves!
                        </p>
                    </section>

                    {/* Structure Section */}
                    <section className="mb-16">
                        <SectionHeading variant="default" className="text-3xl mb-4">
                            Structure
                        </SectionHeading>
                        <p className="text-lg text-foreground leading-relaxed mb-4">
                            The best proof of our professional art and design education. Check out the masterpieces and
                            let their impactful creations from across all majors speak for themselves!
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
                            The best proof of our professional art and design education. Check out the masterpieces and
                            let their impactful creations from across all majors speak for themselves!
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
                                    className="relative aspect-square w-full overflow-hidden"
                                >
                                    <img src={DemoImg} alt='Image card' className='aspect-square object-cover object-cente'/>
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
