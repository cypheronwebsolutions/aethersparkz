import { Card } from "./ui/card";

interface ShowcaseCardProps {
  title: string;
  author: string;
}

const ShowcaseCard = ({ title, author }: ShowcaseCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
      <div className="relative w-full h-64 bg-gradient-to-b from-sky to-white overflow-hidden">
        {/* Sky background */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-16 bg-cloud rounded-full blur-lg opacity-90"></div>
        
        {/* Hills */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 400 150" className="w-full h-auto">
            <path
              d="M0,80 Q100,40 200,80 T400,80 L400,150 L0,150 Z"
              fill="hsl(76, 61%, 67%)"
              opacity="0.6"
            />
            <path
              d="M0,100 Q150,60 300,100 T400,100 L400,150 L0,150 Z"
              fill="hsl(76, 61%, 47%)"
              opacity="0.8"
            />
            <path
              d="M0,120 Q100,80 200,120 T400,120 L400,150 L0,150 Z"
              fill="hsl(76, 100%, 25%)"
            />
          </svg>
        </div>
      </div>
      <div className="p-4 text-center">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
      </div>
    </Card>
  );
};

export default ShowcaseCard;
