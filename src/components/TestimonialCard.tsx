import { Card } from "./ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
}

const TestimonialCard = ({ text, author }: TestimonialCardProps) => {
  return (
    <Card className="p-6 border-2 border-primary bg-background rounded-none">
      <p className="text-foreground mb-4 leading-relaxed">{text}</p>
      <p className="mt-8 text-foreground">{author}</p>
    </Card>
  );
};

export default TestimonialCard;
