import { useState } from "react";
import { BiBuildingHouse } from "react-icons/bi";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Job } from "./jobs";

export default function ExpCard(job: Job) {
  const [showDesc, setDesc] = useState(false);

  function toggleDesc() {
    setDesc(!showDesc);
  }

  return (
    <div className="flex flex-col border-b-white w-full gap-5">
      <div className="flex flex-row justify-between">
        <p className="text-xl text-soft-gray dark:text-p-dark">{job.title}</p>

        {job.description ? (
          <MdOutlineKeyboardArrowDown
            color="#666666"
            size={30}
            onClick={toggleDesc}
            className={`cursor-pointer transform transition-transform ${
              showDesc ? "rotate-180" : ""
            }`}
          />
        ) : null}
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2">
          <BiBuildingHouse color="#666666" />
          <p className="font-semibold text-sm text-soft-gray dark:text-p-dark">
            {job.institution}
          </p>
        </div>

        <div className="flex flex-row gap-2">
          <CiClock1 />
          <p className="font-semibold text-sm xsm:text-xsm text-soft-gray dark:text-p-dark">
            {job.time}
          </p>
        </div>
      </div>
      <div
        className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
          showDesc ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-justify font-normal text-soft-gray dark:text-p-dark">
          {job.description}
        </p>
      </div>

      <hr className="mb-10 bg-soft-gray" />
    </div>
  );
}
