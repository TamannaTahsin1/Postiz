import logo from "../../../assets/Logo/logo.png";
import Container from "../Container/Container";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import perrermint from "../../../assets/footer/peppermint.svg";

const Footer = () => {
  return (
    <Container>
      <div className="relative z-20 bg-black px-10 pt-14">
        <div className=" grid  gap-3 space-y-8 text-center lg:text-start lg:grid-cols-4">
          <div className="space-y-4 lg:pt-7">
            <div className="ml-20 block lg:mx-0">
              <img src={logo} className="mx-auto block lg:mx-0" alt="" />
            </div>
            <p className="text-sm text-gray-400">
              Open-source social media scheduling tool
            </p>
            <div className="hidden justify-start gap-3 lg:flex">
              <FaGithub className="size-8 rounded-full bg-[#3E3E3E] p-2" />
              <FaDiscord className="size-8 rounded-full bg-[#3E3E3E] p-2" />
              <FaLinkedinIn className="size-8 rounded-full bg-[#3E3E3E] p-2" />
              <FaXTwitter className="size-8 rounded-full bg-[#3E3E3E] p-2" />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold">Free Tools</h1>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Free Marketing Tools</p>
              <p>List your agency</p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold">Resources</h1>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Blog</p>
              <p>Docs</p>
              <p>Channels</p>
              <p>Roadmap</p>
              <p>Discord</p>
              <p>Alternatives</p>
              <p>Comparisons </p>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="font-semibold">Company</h1>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Pricing</p>
              <p>Terms of service</p>
              <p>Privacy Policy</p>
            </div>
          </div>
        </div>
        <div className="my-10">
          <hr className="border-[#1b1b1b]" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-center gap-3 lg:hidden">
            <FaGithub className="size-8 rounded-full bg-[#3E3E3E] p-2" />
            <FaDiscord className="size-8 rounded-full bg-[#3E3E3E] p-2" />
            <FaLinkedinIn className="size-8 rounded-full bg-[#3E3E3E] p-2" />
            <FaXTwitter className="size-8 rounded-full bg-[#3E3E3E] p-2" />
          </div>
          <div className="flex flex-col-reverse gap-2 pb-6 text-center text-sm text-gray-300 lg:flex-row lg:justify-start lg:gap-10">
            <p>© Postiz, 2024. All rights reserved.</p>
            <p className="flex items-center justify-center gap-2">
              Designed by
              <span>
                <img src={perrermint} alt="" />
              </span>
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
