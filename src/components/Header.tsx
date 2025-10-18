import { Link, useLocation } from "react-router-dom";
import { Phone, Facebook, Instagram, BookText } from "lucide-react";
import Logo from "../assets/logo.jpg"
const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/aethersparkz" },
    { name: "Course", path: "/aethersparkz/course" },
    { name: "Showcase", path: "/aethersparkz/showcase" },
    { name: "Campaign", path: "/aethersparkz/campaign" },
    { name: "About Us", path: "/aethersparkz/about-us" },
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
            <Link to="/aethersparkz" className="flex items-center gap-3">
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
                    {/*{isActive(item.path) && (*/}
                    {/*    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"></span>*/}
                    {/*)}*/}
                  </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
  );
};

export default Header;