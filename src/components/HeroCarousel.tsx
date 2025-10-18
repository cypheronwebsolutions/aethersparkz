import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import DemoImg1 from "@/assets/HeroCarousel/demoimg.png";
import DemoImg2 from "@/assets/HeroCarousel/demoimg2.jpg";
import DemoImg3 from "@/assets/HeroCarousel/demoimg3.jpg";

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const slides = [DemoImg1, DemoImg2, DemoImg3];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // ✅ Auto slide every 4 seconds (pause on hover)
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused, slides.length]);

    return (
        <div
            className="relative w-full h-[80vh] overflow-hidden m-0 p-0"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slides */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                }}
            >
                {slides.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-[80vh] object-cover flex-shrink-0"
                    />
                ))}
            </div>

            {/* Navigation buttons */}
            <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm z-10"
                onClick={prevSlide}
            >
                <ChevronLeft className="h-8 w-8 text-primary" />
            </Button>
            <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 backdrop-blur-sm z-10"
                onClick={nextSlide}
            >
                <ChevronRight className="h-8 w-8 text-primary" />
            </Button>
        </div>
    );
};

export default HeroCarousel;