import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Dropdown from "./Dropdown";
import Container from "../Container/Container";
import logo from "../../../assets/Logo/logo.png";
import { useState } from "react";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navMenu = [
    { id: 1, name: "Features", link: "/" },
    {
      id: 2,
      name: "Providers",
      link: "/courses",
      subRoute: ["All Courses", "Spoken English", "Data Entry"],
    },
    { id: 3, name: "Blog", link: "/about" },
    { id: 4, name: "Pricing", link: "/about" },
    { id: 5, name: "FAQ", link: "/about" },
  ];

  return (
    <div className="sticky top-0 z-50 text-primary bg-black shadow-sm transition-colors duration-300 ">
      <Container>
        <div className="mx-auto flex  items-center gap-6 py-6 xl:gap-10">
          {/* Logo */}
          <div>
            <Link to="/">
              <img loading="lazy" src={logo} className="" alt="Logo" />
            </Link>
          </div>

          <div className="flex flex-1 items-center gap-8">
            {/* Menu for large devices */}
            <div className="hidden items-center gap-10 lg:flex ">
              {navMenu.map((menu) => (
                <div key={menu.id}>
                  {menu.subRoute ? (
                    <Dropdown navItem={menu} />
                  ) : (
                    <Link
                      className=" text-primary duration-300 "
                      to={menu.link}
                    >
                      <h1>{menu.name}</h1>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/* <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoIosClose className="text-3xl text-gray-700 dark:text-gray-300" />
              ) : (
                <IoIosMenu className="text-3xl text-gray-700 dark:text-gray-300" />
              )}
            </button>
          </div> */}

          {/* Buttons */}
          <div className="hidden gap-4 lg:flex">
            <Button className="rounded-full border-primary bg-transparent text-white hover:border-primary hover:bg-primary hover:text-white ">
              Log in
            </Button>

            <Button className="w-full rounded-full  ">
              {`Get Started >>`}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="px-4 pb-4 lg:hidden">
            {navMenu.map((menu) => (
              <div key={menu.id} className="mb-2">
                {menu.subRoute ? (
                  <Dropdown navItem={menu} />
                ) : (
                  <Link
                    className="block py-2 text-slate-500 duration-300 hover:text-primary"
                    to={menu.link}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <h1> {menu.name}</h1>
                  </Link>
                )}
              </div>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button className="border-default  hover:border-default hover:bg-default rounded-full text-white hover:text-white ">
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
