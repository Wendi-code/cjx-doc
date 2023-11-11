import Bash from "./Bash";
import Features from "./Features";

export default function MoreInfo() {
  return (
    <div className=" flex flex-col px-[40px] text-custom-pink  ">
      <p
        className="font-sans text-[52px] font-bold tracking-[-5px] py-5 mt-20"
        id="cjx-heading"
      >
        cjx cli
      </p>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col w-1/3">
          <p className="font-consolas leading-6 text-[18px]">
            cjx is a command line tool that lets you setup your javaFX
            development environment in visual studio code.
          </p>

          <Features />
        </div>
        <Bash />
      </div>
    </div>
  );
}
