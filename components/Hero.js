import { Link } from "react-scroll";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => {
  return (
<>
<div className="block lg:hidden md:hidden">
  <div class="mt-20 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex flex-col items-center pb-10">
      <div className="lg:block w-full md:w-1/2 mt-20 p-16 rounded-full overflow-hidden ">
          <div className="w-2/3 m-auto rounded-full overflow-hidden -mt-16">
            <Image
              src="/images/profile.png"
              className="object-cover"
              alt="Ali Zahedah profile image"
              width={400}
              height={500}
              priority
            ></Image>
          </div>
        </div>
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Ali Zahedah</h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">IT Support Specialist</span>
          <div class="flex mt-4 space-x-3 md:mt-6">
          <div className="w-auto pt-6 md:pt-0 md:mt-16 md:ml-2">
            <a
              href="/documents/Ali_Zahedah_Resume.pdf"
              download={"Ali-Zaheda-cv"}
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
                  d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"
                />
              </svg>
              <span className="ml-4">Download My Resume</span>
            </a>
          </div> 
          </div>
      </div>
  </div>
    <div className="flex md:flex-row flex-col justify-center items-center overflow-hidden my-12 lg:my-0 relative">
      <div className="hidden lg:block md:block w-full md:w-1/2 mx-auto flex flex-col md:items-start items-center lg:p-20">
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
          Designer.
        </h1>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
          Developer.
        </h1>
        <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
          Dreamer.
        </h1>
      </div>

      <motion.div
        animate={{
          translateY: [0, 25],
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          times: [0, 1],
          repeat: Infinity,
          repeatType: "mirror",
          // repeatDelay: 1,
        }}
        className="hidden absolute md:flex flex-col items-center justify-center md:bottom-24 bottom-0 md:right-0 lg:right-1/2 lg:translate-x-1/2 transform w-24 h-16"
      >
        <Link
          to="featured"
          spy={true}
          smooth={true}
          offset={-35}
          duration={1000}
        >
          <button
            type="button"
            aria-label="Press to scroll"
            className="hidden md:flex items-center justify-center  w-10 h-10 rounded-full drop-shadow-md border border-purple-500 text-white text-3xl font-bold"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path
                fill="purple"
                d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
              />
            </svg>
          </button>
        </Link>
      </motion.div>
    </div>
</div>
<div className="hidden lg:block md:block ">
<div className="flex md:flex-row flex-col justify-center items-center overflow-hidden my-12 lg:my-0 relative">
  <div className="w-full md:w-1/2 mx-auto flex flex-col md:items-start items-center lg:p-20">
    <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
      Designer.
    </h1>
    <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
      Developer.
    </h1>
    <h1 className="text-4xl md:text-8xl font-bold text-gray-700 my-2">
      Dreamer.
    </h1>
    <div className="w-auto pt-6 md:pt-0 md:mt-16 md:ml-2">
      <a
        href="/documents/Ali_Zahedah_Resume.pdf"
        download={"Ali-Zaheda-cv"}
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
            d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-1 1h-16v20h16v-20zm-2 16h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z"
          />
        </svg>
        <span className="ml-4">Download My Resume</span>
      </a>
    </div>
  </div>

  <div className="hidden lg:block w-full md:w-1/2 mt-20 p-16 rounded-full overflow-hidden ">
    <div className="w-2/3 m-auto rounded-full overflow-hidden -mt-16">
      <Image
        src="/images/profile.png"
        className="object-cover"
        alt="Ali Zahedah profile image"
        width={400}
        height={500}
        priority
      ></Image>
    </div>
  </div>

  <motion.div
    animate={{
      translateY: [0, 25],
    }}
    transition={{
      duration: 1,
      ease: "easeInOut",
      times: [0, 1],
      repeat: Infinity,
      repeatType: "mirror",
      // repeatDelay: 1,
    }}
    className="hidden absolute md:flex flex-col items-center justify-center md:bottom-24 bottom-0 md:right-0 lg:right-1/2 lg:translate-x-1/2 transform w-24 h-16"
  >
    <Link
      to="featured"
      spy={true}
      smooth={true}
      offset={-35}
      duration={1000}
    >
      <button
        type="button"
        aria-label="Press to scroll"
        className="hidden md:flex items-center justify-center  w-10 h-10 rounded-full drop-shadow-md border border-purple-500 text-white text-3xl font-bold"
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path
            fill="purple"
            d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"
          />
        </svg>
      </button>
    </Link>
  </motion.div>
</div>
</div>
</>
  );
};