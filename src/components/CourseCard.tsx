import { Card } from "./ui/card";
import DemoImg from "@/assets/Kids Starter/demoimg.png"

interface CourseCardProps {
  title: string;
  image?: string;
}

const CourseCard = ({ title }: CourseCardProps) => {
  return (
    <Card className="overflow-hidden border-2 border-primary bg-primary p-6 rounded-none">
      <h3 className="text-xl text-primary-foreground mb-20">{title}</h3>
      <img src={DemoImg} alt='Demo' className="w-full h-80 object-cover object-center rounded-xl mb-20" />
    </Card>
  );
};

export default CourseCard;
