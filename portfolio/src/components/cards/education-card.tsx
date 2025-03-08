import CardWrapper from "@/components/cards/card-wrapper";
import classNames from "classnames";

const educationData = [
  {
    study: "Front-End Development",
    name: "Brainster Academy",
    date: "2024 - 2025",
  },
  {
    study: "IT & Software Engineering",
    name: "University for Information Science & Technology St. Paul the Apostle",
    date: "2018 - 2025",
  },
];

const EducationItem = ({
  education,
  active,
}: {
  education: any;
  active?: boolean;
}) => {
  const { study, name, date } = education;

  return (
    <div className="flex justify-between flex-col items-stretch md:flex-row md:items-center py-4 gap-3 md:gap-2">
      <div className="flex flex-col gap-1">
        <h5
          className={classNames(
            "block text-xs md:text-md md:hidden font-medium dark:text-white text-black",
            { "opacity-35": !active, "opacity-65": active }
          )}
        >
          {date}
        </h5>
        <h1
          className={classNames(
            "text-3xl md:text-4xl font-medium dark:text-white text-black text-left w-fit",
            { "line-through opacity-55": !active, "opacity-100": active }
          )}
        >
          {study}
        </h1>
      </div>
      <div className="flex flex-col md:items-end md:text-right">
        <h3
          className={classNames(
            "text-sm lg:text-lg font-medium dark:text-white text-black",
            { "opacity-65": !active, "opacity-80": active }
          )}
        >
          {name}
        </h3>
        <h5
          className={classNames(
            "hidden md:block text-xs lg:text-md font-medium dark:text-white text-black",
            { "opacity-35": !active, "opacity-65": active }
          )}
        >
          {date}
        </h5>
      </div>
    </div>
  );
};

const EducationCard = () => {
  return (
    <CardWrapper>
      <div className="static h-full flex flex-col gap-6 p-8 justify-start">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-medium dark:text-white text-black uppercase opacity-90 text-center">
            Education
          </h1>
        </div>
        <div className="flex flex-col relative z-10 lg:justify-around">
          <EducationItem education={educationData[0]} active />

          {educationData.slice(1).map((education, index) => (
            <EducationItem key={index} education={education} />
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default EducationCard;
