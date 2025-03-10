import Image from "next/image";
import { Badge } from "../../shadcn/Badge";
import CardWrapper from "../card-wrapper";

const DNATrailsProject = () => {
  return (
    <CardWrapper>
      <div className="relative h-full flex flex-col justify-center gap-6 py-4 sm:py-6 px-4 sm:px-8 overflow-hidden">
        <div className="relative flex justify-between w-full h-full items-stretch flex-col">
          <div className="absolute h-full w-full aspect-[578/451] shadow-2xl rounded-lg">
            <Image
              src={"/DNATRAILS.png"}
              alt={"DNATRAILS page example"}
              fill
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-1">
          <h4 className="text-xs font-medium opacity-80 uppercase flex flex-wrap gap-2 items-center">
            <span>Project for</span>
            <span className="flex gap-1">
              <Image
                src="/DNATRAILSLOGO.png"
                alt="DNA logo"
                height={12}
                width={16}
              />
              DNA Trails
            </span>
          </h4>
          <div className="w-full flex gap-2 items-center">
            <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90">
              DNA Trails - Comming Soon
            </h1>
          </div>
          <div className="flex gap-2 flex-wrap mt-1">
            <Badge variant="default" className="text-xs">
              Frontend
            </Badge>
            <Badge variant="default" className="text-xs">
              React
            </Badge>
            <Badge variant="default" className="text-xs">
              Typescript
            </Badge>
            <Badge variant="default" className="text-xs">
              Css
            </Badge>
            <Badge variant="default" className="text-xs">
              Bootstrap
            </Badge>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default DNATrailsProject;
