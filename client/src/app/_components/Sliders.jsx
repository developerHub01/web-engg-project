import React from "react";
import GlobalApi from "@/app/_utils/GlobalApi";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Sliders = async () => {
  const sliderList = await getSlidersList();
  return (
    <Carousel className="w-full rounded-lg overflow-hidden shadow-xl">
      <CarouselContent>
        {sliderList.map((slide, index) => (
          <CarouselItem key={index}>
            <Image
              src={
                process.env.NEXT_PUBLIC_BACKEND_BASE_URL + slide.image[0].url
              }
              alt={slide.name}
              width={1000}
              height={400}
              className="w-full h-[200] md:h-[400] object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

const getSlidersList = async () => {
  const sliders = await GlobalApi.getSliders();
  return sliders.data.data;
};

export default Sliders;
