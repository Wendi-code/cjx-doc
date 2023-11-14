import useAnimation from "../hooks/useAnimation";
import Terminal from "../layout/Terminal";

export default function Bash() {
  const bashCommands = [
    "cjx init",
    "cjx setup <JavaFX SDK directory>",
    "cjx create simple <Project Name>",
    "cjx create jfxml <Project Name>",
    "cjx clone <Project url>",
    "cjx doctor",
  ];

  const displayedCommand = useAnimation(bashCommands);

  return (
    <Terminal style={"w-[550px] h-[300px]"}>
      <p className="text-sm tracking-[1.5px] mt-[1.5px]">{`${displayedCommand}`}</p>
    </Terminal>
  );
}
