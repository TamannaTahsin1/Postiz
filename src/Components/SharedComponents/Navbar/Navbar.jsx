import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import Container from "../Container/Container";
import logo from "../../../assets/Logo/logo.png";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import DropdownSm from "./DropdownSm";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = [
    { id: 1, name: "Features" },
    {
      id: 2,
      name: "Providers",
      subRoute: ["Hootsuite", "Buffer", "Sprout Social"],
    },
    { id: 3, name: "Blog" },
    { id: 4, name: "Pricing" },
    { id: 5, name: "FAQ" },
  ];

  return (
    <div className="sticky top-0 z-50 bg-black text-primary shadow-sm transition-colors duration-300 ">
      <Container>
        <div className="mx-auto flex items-center justify-between py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img loading="lazy" src={logo} className="h-8" alt="Logo" />
            </Link>
          </div>

          {/* Menu for large devices */}
          <div className="hidden flex-1 items-center justify-center lg:flex">
            <div className="flex items-center gap-10">
              {navMenu.map((menu) => (
                <div key={menu.id}>
                  {menu.subRoute ? (
                    <Dropdown navItem={menu} />
                  ) : (
                    <Link className="text-primary duration-300" to={menu.link}>
                      <h1>{menu.name}</h1>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="hidden flex-shrink-0 gap-4 lg:flex">
            <Button className="min-w-[120px] rounded-full border-primary bg-transparent text-white hover:border-primary hover:bg-primary hover:text-black ">
              Log in
            </Button>

            <Button className="w-full rounded-full  ">
              {`Get Started >>`}
            </Button>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex-shrink-0 lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoIosClose className="text-3xl text-gray-300 " />
              ) : (
                <IoIosMenu className="text-3xl text-gray-300 " />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="px-4 pb-4 lg:hidden">
            {navMenu.map((menu) => (
              <div key={menu.id} className="mb-2">
                {menu.subRoute ? (
                  <DropdownSm navItem={menu} />
                ) : (
                  <Link
                    className="block py-2 text-slate-400 duration-300 hover:text-primary"
                    to={menu.link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <h1> {menu.name}</h1>
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button className="rounded-full  border-primary bg-transparent text-white hover:border-primary hover:bg-primary hover:text-black ">
                Log in
              </Button>

              <Button className="w-full rounded-full border-[1px] border-gray-300 bg-white ">
                {`Get Started >>`}
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Navbar;
