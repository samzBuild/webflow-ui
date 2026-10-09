import { useState } from "react";
import Button from "../ui/Button";
import Navlink from "../ui/Navlink";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  function handleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed z-10 w-full py-4">
      <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between rounded-md bg-white px-4 py-2 lg:bg-transparent lg:py-4">
        {/* logo */}
        <div className="flex items-center justify-center gap-2">
          <div className="h-9 w-8 rounded-md bg-black"></div>
          <span className="font-heading text-2xl font-semibold">FasterUI</span>
        </div>

        {/* navlinks deskotop */}
        <nav className="hidden lg:block">
          <Navlink />
        </nav>

        {/* nav CTA */}
        <div className="hidden lg:block">
          <Button variant="black" text="SignIn" />
          <Button text="Sign Up" />
        </div>

        {/* Hamburger icon mobile */}
        <div className="lg:hidden">
          <button onClick={handleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="h-10 w-10"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
                fill="#000000"
              />
            </svg>
          </button>
        </div>

        {/* menu mobile */}
        {isOpen && (
          <div className="absolute top-14 left-0 w-full border-b border-neutral-500 bg-white px-4 py-6">
            <nav>
              <ul className="font-inter flex flex-col gap-6 text-xl text-black">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">How It Works</a>
                </li>
                <li>
                  <a href="">Services</a>
                </li>
              </ul>
              <div className="mt-8">
                <Button variant="black" text="SignIn" />
                <Button text="Sign Up" />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
