import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image';
import React from "react";
import { useState } from 'react';
import Script from "next/script";

const Navigation = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();
  const styles = {
    active:
      "border-b-2 border-transparent text-white border-blue-500 transition-all ease-in-out mx-0.5 sm:mx-2",
    inactive:
      "border-b-2 border-transparent hover:text-sky-300 dark:hover:text-sky-300 hover:border-blue-500 transition-all ease-in-out mx-1.5 sm:mx-6",
  };
  return (
    <>

    <nav className="bg-blue-900 px-2 sm:px-4 py-2.5 dark:bg-blue-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
    <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <Link href="/">
        <Image
            className=""
            src="/logo.png"
            width={45}
            height={45}
            priority
            alt="Ali Zahedah"
          />
          </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>

            </button>
      </div>
      <span className="flex text-white font-bold lg:block hidden  ">Ali Zahedah</span>
      <div
        className={
          "lg:flex flex-grow items-center" +
          (navbarOpen ? " flex" : " hidden")
        }
        id="example-navbar-danger"
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="text-white">
          <Link href="/projects">
            <p
              className={
                router.asPath.includes("/projects")
                  ? styles.active
                  : styles.inactive
              }
            >
              Projects
            </p>
          </Link>
          </li>
          <li className="text-white">
          <Link href="/about">
            <p
              className={
                router.pathname == "/about" ? styles.active : styles.inactive
              }
            >
              About
            </p>
          </Link>
            </li>
          <li className="text-white">
          <Link href="/contact">
            <p
              className={
                router.pathname == "/contact" ? styles.active : styles.inactive
              }
            >
              Contact
            </p>
          </Link>
          </li>
          <div className="flex md:order-2">
      {/* LinkedIn */}
  <a
    className="border-b-2 border-transparent hover:text-sky-300  mx-1.5 sm:mx-6"
    href="https://www.linkedin.com/in/ali-zahedah/"
    aria-label="linkedIn account"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-white hover:fill-blue-500 transition-colors ease-in-out"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
    </svg>
  </a>
  {/* Github */}
  <a
    className="border-b-2 border-transparent hover:text-sky-300  mx-1.5 sm:mx-6"
    href="https://www.facebook.com/ahz.fb/"
    aria-label="Faccebook Account"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-white hover:fill-blue-500 transition-colors ease-in-out"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z" />
    </svg>
  </a>
  {/* Instagram */}
  <a
    className="border-b-2 border-transparent hover:text-sky-300  mx-1.5 sm:mx-6"
    href="https://www.instagram.com/ahz93aly/"
    aria-label="Instagram account"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className="fill-white hover:fill-blue-500 transition-colors ease-in-out"
    >
      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 7.082c1.602 0 1.792.006 2.425.035 1.627.074 2.385.845 2.46 2.459.028.633.034.822.034 2.424s-.006 1.792-.034 2.424c-.075 1.613-.832 2.386-2.46 2.46-.633.028-.822.035-2.425.035-1.602 0-1.792-.006-2.424-.035-1.63-.075-2.385-.849-2.46-2.46-.028-.632-.035-.822-.035-2.424s.007-1.792.035-2.424c.074-1.615.832-2.386 2.46-2.46.632-.029.822-.034 2.424-.034zm0-1.082c-1.63 0-1.833.007-2.474.037-2.18.1-3.39 1.309-3.49 3.489-.029.641-.036.845-.036 2.474 0 1.63.007 1.834.036 2.474.1 2.179 1.31 3.39 3.49 3.49.641.029.844.036 2.474.036 1.63 0 1.834-.007 2.475-.036 2.176-.1 3.391-1.309 3.489-3.49.029-.64.036-.844.036-2.474 0-1.629-.007-1.833-.036-2.474-.098-2.177-1.309-3.39-3.489-3.489-.641-.03-.845-.037-2.475-.037zm0 2.919c-1.701 0-3.081 1.379-3.081 3.081s1.38 3.081 3.081 3.081 3.081-1.379 3.081-3.081c0-1.701-1.38-3.081-3.081-3.081zm0 5.081c-1.105 0-2-.895-2-2 0-1.104.895-2 2-2 1.104 0 2.001.895 2.001 2s-.897 2-2.001 2zm3.202-5.922c-.397 0-.72.322-.72.72 0 .397.322.72.72.72.398 0 .721-.322.721-.72 0-.398-.322-.72-.721-.72z" />
    </svg>
  </a>
  </div>
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
};

export default Navigation;
