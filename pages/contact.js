import Container from "../components/Container";
import PageNameSection from "../components/PageNameSection";

export default function Contact() {
  return (
    <Container className="mx-auto px-4 my-auto py-4 ">
      <div className="mt-10">
          <PageNameSection title={"Want to connect?"}></PageNameSection>
          <section className="grid-rows-1">
            <div className="flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="hidden w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 shadow-xl">
                <div className="flex">
                  <h1 className="font-bold  text-5xl">
                    Send me a <br /> message
                  </h1>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3  "
                    type="text"
                    placeholder="First Name*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3  "
                    type="text"
                    placeholder="Last Name*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3  "
                    type="email"
                    placeholder="Email*"
                  />
                  <input
                    className="w-full bg-gray-100 text-gray-900 mt-2 p-3  "
                    type="number"
                    placeholder="Phone*"
                  />
                </div>
                <div className="my-4">
                  <textarea
                    placeholder="Message*"
                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3  "
                  ></textarea>
                </div>
                <div className="my-2 w-1/2 lg:w-1/4">
                  <button className="bg-blue-500 text-white shadow px-4 py-3 flex items-center justify-center whitespace-nowrap cursor-pointer hover:bg-blue-600 transition-all ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M0 12l11 3.1 7-8.1-8.156 5.672-4.312-1.202 15.362-7.68-3.974 14.57-3.75-3.339-2.17 2.925v-.769l-2-.56v7.383l4.473-6.031 4.527 4.031 6-22z"
                      />
                    </svg>
                    <span className="ml-4">Send Message</span>
                  </button>
                </div>
              </div>

              <div className="flex grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-8 my-4 md:px-12  bg-blue-500 shadow-xl">
                <div className="flex flex-col text-white">
                  <h1 className="font-bold uppercase text-4xl my-4">
                    Ali Zahedah
                  </h1>
                  <p className="text-gray-200">IT Support Specialist | Web Developer | Graphic Designer</p>
                </div>
                <div className="flex flex-col space-y-2 text-white mt-16">
                  <div className="w-full h-10 flex justify-start items-start space-x-2">
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    >
                      <path
                        fill="white"
                        d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 2c5.519 0 10 4.481 10 10s-4.481 10-10 10-10-4.481-10-10 4.481-10 10-10zm1.476 12.955c.988-.405 1.757-1.211 2.116-2.216l2.408-6.739-6.672 2.387c-1.006.36-1.811 1.131-2.216 2.119l-3.065 7.494 7.429-3.045zm-.122-4.286c.551.551.551 1.446 0 1.996-.551.551-1.445.551-1.996 0-.551-.55-.551-1.445 0-1.996.551-.551 1.445-.551 1.996 0z"
                      />
                    </svg>
                    <p className="italic">Location: </p>
                    <p className="text-white font-bold ">Dubai - UAE</p>
                  </div>

                  <div className="w-full h-10 flex justify-start items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.5 17.311l-1.76-3.397-1.032.505c-1.12.543-3.4-3.91-2.305-4.497l1.042-.513-1.747-3.409-1.053.52c-3.601 1.877 2.117 12.991 5.8 11.308l1.055-.517z"
                      />
                    </svg>
                    <p className="italic">Phone: </p>
                    <a className="text-white font-bold " href="tel:+971585938971">
                      (+971) 585 938971
                    </a>
                  </div>

                  <div className="w-full h-10 flex justify-start items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="white"
                        d="M12 2.02c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 12.55l-5.992-4.57h11.983l-5.991 4.57zm0 1.288l-6-4.629v6.771h12v-6.771l-6 4.629z"
                      />
                    </svg>
                    <p className="italic">Email: </p>
                    <a
                      className="text-white font-bold "
                      href="mailto:ahzuae93@gmail.com"
                    >
                      ahzuae93@gmail.com
                    </a>
                  </div>

                  <div className="w-full h-10 flex justify-start items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="fill-white hover:fill-blue-500 transition-colors ease-in-out"
                    >
                      <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z" />
                    </svg>
                    <p className="italic">Linkedin: </p>
                    <a
                      className="text-white font-bold "
                      href="https://www.linkedin.com/in/ali-zahedah/"
                    >
                      @ali-zahedah
                    </a>
                  </div>


                </div>
              </div>
            </div>
          </section>
      </div>
    </Container>
  );
}
