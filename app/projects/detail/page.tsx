// import ParallaxSlider from '@/app/components/ParallaxSliderWithDots'
import ParallaxSliderDrag from "@/app/components/ParallaxSliderDragable";
import React from "react";

const DetailProject = () => {
  return (
    <div className="mt-40 justify-items-center mx-32">
      <div className="flex m-h-screen w-full">
        <div className="flex-initial w-7/12">
          <div className="min-h-[30rem] max-h-[20rem] w-full relative">
            <ParallaxSliderDrag />
          </div>
        </div>
        <div className="flex-initial w-5/12 ml-8">
          <div className="year text-3xl font-sans font-bold mb-2">2024</div>
          <div className="title text-3xl font-sans font-bold mb-4">
            Taiwan Tourism Information Center in Jakarta Opening
          </div>
          <div className="second-title text-xl my-4">
            Taiwan is your best friend! The opening ceremony launched Taiwan Day
            by sharing local delicacies and joining hands with local tourism
            industry players to expand opportunities to travel to Taiwan in the
            Indonesian market.
          </div>
          <div className="text-detail text-justify my-4">
          {`In order to expand the Indonesian Taiwanese tourism market, the
          Ministry of Transportation and Communications, Tourism Administration
          established the Taiwan Tourism Information Center in Jakarta in
          February 2024 located in GoWork Central Park, a bustling commercial
          mall in Jakarta. Echoing the one-stop lifestyle of shopping malls in
          Indonesia, the service office deepens Taiwan tourism brand recognition
          in a market-friendly way and encourages Indonesian tourists to visit
          Taiwan. The opening ceremony started with "Taiwan Day." Foods served
          included hand-made candied hawthorn and other Taiwanese specialties,
          and there were souvenirs on site, exhibiting the friendly charm of
          travel in Taiwan. In attendance were the heads of Indonesia's most
          representative tourism associations, ASINDO and ASITA, and more than
          40 companies. These included the top tour Indonesian and Taiwanese
          ground travel agencies, OTAs and the air carriers China Airlines, EVA
          Air, and Singapore Airlines. At the same time, with its focus on
          expanding publicity, the office has generated more than 50 domestic
          and foreign online, print and television reports, and has been given
          continued exposure in Indonesian and Taiwanese media, expanding
          Taiwan's brand awareness in Indonesia and expanding its voice. The
          office has promoted Taiwanese tourism and brought more Indonesian
          tourists to visit Taiwan. The office is centered around the idea
          “Taiwan is your best friend” and has a thoughtful reception area and
          multi-functional service space. The latest information on Taiwanese
          tourism is displayed at the reception desk, and service staff are
          stationed there. Visitors can sit down on the sofa to relax and enjoy
          hot tea and snacks from Taiwan while learning more about travel in
          Taiwan. The multi-functional conference room is decorated in a "What's
          New in Taiwan" style, integrating photos of Taiwan's latest tourist
          attractions, souvenirs from sightseeing areas around Taiwan and
          handmade crafts to present Taiwan's diverse travel characteristics.
          The Taiwan Tourism Information Center in Jakarta opens its doors to
          welcome every Indonesian tourist and business operator with the most
          enthusiastic spirit and service!`}
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default DetailProject;
