"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["About Us", "Careers", "Press", "Blog", "Pricing"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 bg-gray-900 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography
              as="a"
              href="/"
              target="_blank"
              variant="h6"
              color={"white"}
              className="flex items-center gap-1"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              <Image
            width={130}
            height={100}
            src="/logos/logo.png"
            alt="logo"
            className="rounded-md"
          />
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="white"
              className="mb-12 mt-9 font-normal"
            >
              The reward for getting on the stage is fame.
            </Typography>
            <ul className="flex flex-wrap items-center justify-center md:justify-start">
              {LINKS.map((link, idx) => (
                <li key={link}>
                  <Typography
                    placeholder=""
                    onPointerEnterCapture={() => {}}
                    onPointerLeaveCapture={() => {}}
                    as="a"
                    href="#"
                    color="white"
                    className={`py-1 font-medium transition-colors ${
                      idx === 0 ? "pr-3" : "px-3"
                    }`}
                  >
                    {link}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-auto">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="h6"
              color="white"
              className="mb-3"
            >
              Get the app
            </Typography>
            <div className="flex flex-col gap-2">
              <Button
                color="white"
                className="flex items-center justify-center"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-apple.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                App Store
              </Button>
              <Button
                color="white"
                className="flex items-center justify-center"
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
              >
                <Image
                  width={256}
                  height={256}
                  src="/logos/logo-google.png"
                  className="-mt-0.5 mr-2 h-6 w-6"
                  alt="ios"
                />
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            &copy; {CURRENT_YEAR}
            <a href="https://www.material-tailwind.com" target="_blank">
              Creatify Technologies,
            </a>{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              All Rights Reserved
            </a>
            .
          </Typography>

          <div className="flex gap-2">
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="text"
              color="white"
            >
              <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
