import { Link, useLocation } from "react-router-dom";
import { Phone, Facebook, Instagram, BookText, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Logo from "../assets/logo.jpg"
const Header = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Course", path: "/course" },
    { name: "Showcase", path: "/showcase" },
    { name: "Campaign", path: "/campaign" },
    { name: "About Us", path: "/about-us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
      <header className="w-full shadow-sm">
        {/* Top bar */}
        <div className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-3 border-b border-primary-foreground/10">
              <div className="flex items-center gap-2">
                <Phone fill="white" strokeWidth={0.5} className="h-7 w-7 transform -scale-x-100" />
                <a href="tel:+60189134216" className="text-xl hover:underline">
                  +6018-9134216
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                  <Facebook fill="white" className="h-7 w-7" />
                </a>
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                >
                  <Instagram className="h-7 w-7" />
                </a>
                <a href="#" className="hover:opacity-80 transition-opacity">
                  <BookText color="red" className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="bg-white text-black">
          <div className="container mx-auto px-4 flex items-center justify-between py-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex flex-col items-center text-center">
                <img
                    src={Logo}
                    alt="logo"
                    className="w-20 h-20 rounded-full bg-sky object-cover"
                />
                <span className="text-l ">Aether Sparkz</span>
              </div>
              {/*<div className="w-16 h-16 rounded-full bg-sky flex items-center justify-center">*/}
              {/*  <span className="text-2xl font-bold text-primary">AS</span>*/}
              {/*</div>*/}
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                  <Link
                      key={item.path}
                      to={item.path}
                      className={`text-2xl transition-all hover:text-secondary relative ${
                          isActive(item.path) ? "text-secondary" : ""
                      }`}
                  >
                    {item.name}
                  </Link>
              ))}
            </nav>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-64">
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`text-xl transition-all hover:text-secondary ${
                        isActive(item.path) ? "text-secondary font-semibold" : ""
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
  );
};

export default Header;