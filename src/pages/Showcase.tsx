import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ShowcaseCard from "@/components/ShowcaseCard";
import { Button } from "@/components/ui/button";

const Showcase = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Kids", "Starter", "Intermedian", "Secondary"];

  const artworks = Array(12).fill({
    title: "Avatar 3",
    author: "Ooi Wei Chuan",
  });

  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-1">
        <section className="container mx-auto px-4 py-16">
          <SectionHeading variant='primary'>SHOWCASE</SectionHeading>
          <p className="text-lg text-foreground mt-6 max-w-3xl">
            The best proof of our professional art and design education. Check out the masterpieces and let their impactful creations from across all majors speak for themselves!
          </p>

          {/* Filter Tabs */}
          <div className="mt-12 flex items-center gap-4 p-2 bg-background border-2 border-primary rounded-full max-w-3xl">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                className={`flex-1 rounded-full ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-muted"
                }`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {artworks.map((artwork, index) => (
              <ShowcaseCard
                key={index}
                title={artwork.title}
                author={artwork.author}
              />
            ))}
          </div>
        </section>
      </main>

    </div>
  );
};

export default Showcase;
