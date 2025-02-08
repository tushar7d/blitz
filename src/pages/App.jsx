import { Link } from "react-router";

let AboutMe = () => {
  return (
    <div
      className={
        "mt-4 rounded-2xl p-3 sm:min-w-[320px] md:mx-0 md:mt-0 md:flex md:items-center md:justify-between md:p-12"
      }
    >
      <div className="mb-4 md:order-last md:mb-0">
        <img
          src="/pic.png"
          className="mx-auto h-[200px] w-[200px] md:mx-0 md:h-[250px] md:w-[250px]"
        />
      </div>

      <div className="flex flex-col justify-between text-center md:w-[70%] md:text-left">
        <h1 className="  animate-text mb-2 bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text font-serif text-6xl font-black text-transparent select-none md:text-7xl">
          Hello Everyone!
        </h1>
        <div className="space-y-2 dark:text-white">
          <p className="mt-3 text-xl select-none md:text-2xl">
            I'm Tushar Debnath, a product designer and design technologist with
            more than ten years of expertise in shaping products and creating
            impactful user experiences
          </p>
        </div>

        <div className="mt-4">
          <Link href={"/about"}>
            <button className="tetx-xl mx-auto mt-6 mb-6 transform rounded-full bg-white px-6 py-3 font-serif font-semibold text-black drop-shadow-lg transition hover:scale-105 hover:subpixel-antialiased">
              More about me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

function Index() {
  return (
    <main>
      <AboutMe />
    </main>
  );
}

export default Index;
