import { TopSection } from ".";

const MainSection = () => {
  return (
    <div>
      <TopSection />

      <div className="flex flex-row gap-2 ">
        <div className=" w-1/3 h-[80vh] bg-white rounded-2xl flex flex-col items-center">
          <div className="py-3 w-full bg-primary rounded-t-2xl text-center">
            Categories
          </div>
          <div className="p-2">
            <div className="relative mt-1">
              <button className="absolute left-0 top-0 mt-2 ml-1 py-2 px-2">
                <svg
                  className="h-5 w-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 30 30"
                >
                  <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
              </button>
              <input
                type="text"
                placeholder="Search Categories "
                className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-full flex flex-col gap-3">
          <div className="bg-white rounded-2xl px-4 py-2">
            <p>
              <span className=" text-primary">Section:</span> The Servant is
              dependent on his Lord
            </p>
          </div>

          <div className="bg-white rounded-2xl px-4 py-2 flex flex-col gap-3">
            <p>
              <span className="text-primary">icon</span> 1. The Servant is
              dependent on his Lord #1
            </p>
            <p>
              All human beings depend on Allah for their welfare and prevention
              of evil in various matters of their religion and world. Allah says
              (interpretation of the meaning): O mankind, you are those in need
              of Allah, while Allah is the Free of need, the Praiseworthy.
            </p>
            <p>
              <span className="text-primary">Reference:</span> <br /> Surah
              Al-Fatir 35:15
            </p>

            <div>
              <ul className="flex flex-row gap-3 justify-end items-center">
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
                <li>icon</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
