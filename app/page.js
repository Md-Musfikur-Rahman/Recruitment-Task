import {
  LeftNavigation,
  MainSection,
  RightSection,
  TopSection,
} from "@/sections";

export default function Home() {
  return (
    <div className="flex flex-row bg-back p-6 gap-3 w-full h-screen ">
      <div className=" w-28">
        <LeftNavigation />
      </div>
      <div className=" w-full">
        <TopSection />
        <div className="flex flex-row gap-2">
          <div className="w-full">
            <MainSection />
          </div>
          <div className="w-80">
            <RightSection />
          </div>
        </div>
      </div>
    </div>
  );
}
