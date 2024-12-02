import Link from "next/link";  // Import Link from next/link
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectPage = () => {
  return (
    <div className="mt-40">
      <div className="mx-64 min-h-80">
        <div className="title-page-project text-3xl text-center font-sans font-bold mb-8">
          Taiwan Tourism Administration
        </div>
        <div className="flex my-10">
          <div className="flex-initial w-96 content-center mr-8">
            <div className="w-96 h-96 bg-taiwan-logo bg-cover bg-center"></div>
          </div>
          <div className="flex-initial w-auto">
            <div className="w-full block h-full relative">
              <div className="font-bold font-sans text-xl pt-8">
                2024
                <br /> Taiwan Tourism Information Center in
                <br /> Jakarta Opening
              </div>
              <div className="mt-4">
                {`Taiwan is your best friend!`} <br />
                {`
The opening ceremony launched Taiwan Day by sharing local delicacies and joining hands with local tourism industry players to expand opportunities to travel to Taiwan in the Indonesian market.`}
              </div>
              <div className="wrapper-button absolute bottom-4 right-4">
                <Link href="/projects/detail">
                  <button className="btn rounded-full">
                    Read More
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex-initial w-96 content-center mr-8">
            <div className="w-96 h-96 bg-about-us bg-cover bg-center"></div>
          </div>
          <div className="flex-initial w-auto">
            <div className="w-full block h-full relative">
              <div className="font-bold font-sans text-xl pt-8">
                2024
                <br /> Taiwan Tourism Information Center in
                <br /> Jakarta Opening
              </div>
              <div className="mt-4">
                {`Taiwan is your best friend!`} <br />
                {`
The opening ceremony launched Taiwan Day by sharing local delicacies and joining hands with local tourism industry players to expand opportunities to travel to Taiwan in the Indonesian market.`}
              </div>
              <div className="wrapper-button absolute bottom-4 right-4">
                <Link href="/projects/detail">
                  <button className="btn rounded-full">
                    Read More
                    <FontAwesomeIcon icon={faAnglesRight} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
