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
    href="https://github.com/ahzsy93"
    aria-label="Github"
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

  </div>
        </ul>
      </div>
    </div>
  </nav>
  </>
  );
};

export default Navigation;
