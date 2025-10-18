import { Facebook, Instagram, BookText } from "lucide-react";
import Logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
      <footer className="w-full bg-primary text-primary-foreground m-auto">
        <div className="max-w-6xl mx-auto px-2 py-4">
          {/* === Top Row === */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            {/* Working Hours */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
                Working Hour:
              </h3>
              <div className="space-y-1 text-base">
                <p>Mon 19.30 - 21.30</p>
                <p>Tue 19.30 - 21.30</p>
                <p>Thur 19.30 - 21.30</p>
                <p>Fri 19.30 - 21.30</p>
                <p>Sat 19.30 - 21.30</p>
                <p>Sun 19.30 - 21.30</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
                Location:
              </h3>
              <div className="space-y-1 text-base">
                <p>80 (G Floor, Jalan Perniagaan,</p>
                <p>Pusat Perniagaan Alma,</p>
                <p>14000 Bukit Mertajam,</p>
                <p>Pulau Pinang</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-center md:items-start md:ml-20">
              <h3 className="text-xl font-bold mb-4 underline decoration-2 underline-offset-4">
                Contact Us:
              </h3>
              <a
                  href="tel:+60189134216"
                  className="text-lg hover:underline block mb-3"
              >
                +6018-9134216
              </a>
              <div className="w-28 h-28 bg-white rounded-md mb-3 flex items-center justify-center">
                <div className="text-xs text-center text-primary">QR Code</div>
              </div>
            </div>
          </div>

          {/* === Bottom Row === */}
          <div className="mt-4 flex flex-col sm:flex-row items-center sm:justify-center md:justify-end gap-4">
            <div className="flex items-center gap-3">
              <img
                  src={Logo}
                  alt="logo"
                  className="w-12 h-12 rounded-full bg-sky object-cover"
              />
              <span className="text-lg font-bold mr-20 xs:mr-0">Aether Sparkz</span>
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0 md:mr-40">
              <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
              >
                <Facebook fill="white" className="h-10 w-10" />
              </a>
              <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
              >
                <Instagram className="h-10 w-10" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <BookText color="red" className="h-10 w-10" />
              </a>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;