import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "accent" | "primary";
}

const SectionHeading = ({
                            children,
                            className,
                            variant = "default",
                        }: SectionHeadingProps) => {
    return (
        <h2
            className={cn(
                "font-bold mb-0 pb-0 relative inline-block leading-tight",
                variant === "default" && "text-black",
                variant === "accent" && "text-accent italic",
                variant === "primary" && "text-primary text-5xl",
                className
            )}
        >
            {children}

            {variant === "default" && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></div>
            )}

            {variant === "primary" && (
                <div className="absolute -bottom-4 left-0 flex items-center w-full">
                    {/* line (100% width minus arrow width) */}
                    <div className="h-[3px] bg-black flex-grow"></div>
                    {/* arrow — directly attached, no gap */}
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent -ml-[1px]"></div>
                </div>
            )}
        </h2>
    );
};

export default SectionHeading;