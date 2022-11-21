import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-blue-900 mt-8">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full lg:text-7xl md:text-5xl text-3xl font-bold">
          <h1 className="w-full md:w-2/3">
            Excited for collaboration? get in touch!
          </h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-cyan-200 font-bold">
            I'm open to discuss any design or web development project, don't hesitate to contact me. 
          </p>
          <div className="w-44 pt-6 md:pt-0">
          <a
              href="tel:+971585938971"
              className="bg-blue-500 text-white shadow px-4 py-3 flex items-center justify-center whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-all ease-in-out"
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path
                  fill="white"
                  d="M2.59 1.322l2.844-1.322 4.041 7.889-2.724 1.342c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-.598.273-1.215.399-1.842.397-5.649-.019-12.086-10.43-12.133-17.33-.016-2.407.745-4.387 2.59-5.348zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.501c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.498-2.252-4.398zm15.48 14.404h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z"
                />
              </svg>
              <span className="ml-4">Let's talk</span>
            </a>
          </div>

         
        </div>
        <div className="flex flex-col">
          <div className="flex mt-24 mb-12 flex-row justify-between">
            <div className="">
              <p>Ali Zahedah</p>
            </div>
            <Link href="/">
              <p className="hidden md:block cursor-pointer text-cyan-100 hover:text-white uppercase">
                Home
              </p>
            </Link>
            <Link href="/projects">
              <p className="hidden md:block cursor-pointer text-cyan-100 hover:text-white uppercase">
                Projects
              </p>
            </Link>
            <Link href="/about">
              <p className="hidden md:block cursor-pointer text-cyan-100 hover:text-white uppercase">
                About
              </p>
            </Link>
            <Link href="/contact">
              <p className="hidden md:block cursor-pointer text-cyan-100 hover:text-white uppercase">
                Contact
              </p>
            </Link>
            <div className="flex flex-row space-x-8 items-center justify-between">
              <a aria-label="linkedIn account" href="https://www.linkedin.com/in/ali-zahedah/" className="border-b-2 border-transparent hover:text-gray-800 ">
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
              <a aria-label="Facebook account" href="https://www.facebook.com/ahz.fb/" className="border-b-2 border-transparent hover:text-gray-800 ">
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
              <a
                aria-label="Instagram account"
                className="border-b-2 border-transparent hover:text-gray-800 "
                href="https://www.instagram.com/ahz93aly/"
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
          </div>
          <hr className="border-gray-600" />
          <p className="w-full text-center my-5 text-cyan-100">
            Copyright © 2022 Ali H. Zahedah
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
