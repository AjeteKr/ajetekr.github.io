
import React from "react";
import JavascriptIcon from "../../img/javascript-icon.png";
import TypescriptIcon from "../../img/typescript-icon.png";
import ReactIcon from "../../img/react-icon.png";
import NextjsIcon from "../../img/nextjs-icon.png";
import VuejsIcon from "../../img/vuejs-icon.png";
import TailwindcssIcon from "../../img/tailwindcss-icon.png";
import FigmaIcon from "../../img/figma-icon.png";
import GitIcon from "../../img/git-icon.png";
import DotNetIcon from "../../img/dotnet-icon.png";
import SqlServerIcon from "../../img/sqlserver-icon.png";
import SqlLiteIcon from "../../img/sqllite-icon.png";
import AngularIcon from "../../img/angular-icon.png"

function Technologies() {
  const technologies = [
    { name: "JavaScript", icon: JavascriptIcon, level: 80 },
    { name: "TypeScript", icon: TypescriptIcon, level: 70 },
    { name: "React", icon: ReactIcon, level: 80 },
    { name: "Next.js", icon: NextjsIcon, level: 60 },
    { name: "Vue.js", icon: VuejsIcon, level: 50 },
    { name: "TailwindCSS", icon: TailwindcssIcon, level: 75 },
    { name: "Figma", icon: FigmaIcon, level: 65 },
    { name: "GIT", icon: GitIcon, level: 90 },
    { name: ".NET", icon: DotNetIcon, level: 70 },
    { name: "SQL Server", icon: SqlServerIcon, level: 65 },
    { name: "SQL Lite", icon: SqlLiteIcon, level: 70 },
    { name: "Angular", icon: AngularIcon, level: 80 },
  ];
  
  return (
    <div id="technologies" className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#6420AA] to-[#FF3EA5]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2">
        <h2 className="text-2xl font-bold text-center mb-6 text-[#6420AA]">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((technology) => (
            <div key={technology.name} className="flex flex-col items-center bg-[#f2e4fd] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <img src={technology.icon} alt={technology.name} className="w-16 h-16 mx-auto" />
              <p className="mt-4 text-center font-semibold text-[#6420AA]">{technology.name}</p>
              <div className="w-full bg-[#FF7ED4] rounded-full mt-2">
                <div
                  className="bg-[#FF3EA5] text-xs font-medium text-center text-white rounded-full"
                  style={{ width: `${technology.level}%` }}
                >
                  {technology.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Technologies;
