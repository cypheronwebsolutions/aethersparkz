import { Card } from "./ui/card";
import DemoImg from '@/assets/demoimg.png'

interface ShowcaseCardProps {
  title: string;
  author: string;
}

const ShowcaseCard = ({ title, author }: ShowcaseCardProps) => {
  return (
    <Card className="overflow-hidden cursor-pointer rounded-none border-0 shadow-none bg-transparent hover:shadow-xl transition-shadow">
      <img src={DemoImg} alt='Showcase' className='aspect-[4/3] object-cover'/>
      <div className="p-4 text-center">
        <h3 className="font-bold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">by {author}</p>
      </div>
    </Card>
  );
};

export default ShowcaseCard;
