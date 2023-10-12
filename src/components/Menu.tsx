import { useState } from "react";
import {
  Bars4Icon,
  XMarkIcon,
  PhoneIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [icon, setIcon] = useState<"bar" | "x">("bar");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIcon(icon === "bar" ? "x" : "bar");
  };

  return (
    <div>
      <button className="sm:hidden" onClick={toggleMenu}>
        {icon === "bar" ? (
          <Bars4Icon width={26} />
        ) : (
          <XMarkIcon width={26} />
        )}
      </button>
      <div
        className={` absolute sm:invisible ${
          isOpen ? "" : "invisible"
        }  right-4`}
      >
        <div className=" flex">
          <Link to="/booking" className="bg-slate-300 shadow-lg rounded-sm p-3">
            <PhoneIcon width={24} className=" " />
          </Link>

          <a
            href="http://shop.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-300 shadow-lg rounded-sm p-3"
          >
            <ShoppingBagIcon width={24} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
