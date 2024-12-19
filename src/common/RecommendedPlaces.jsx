import React from "react";
import { PlaceCard } from "./PlaceCard";

export function RecommendedPlaces() {
  return (
    <div className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-x-auto">
      <div className="w-max flex pb-28 gap-[10px]">
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage={"/images/profile-image.jpeg"}
          placeName={"Lake Como"}
        />
      </div>
    </div>
  );
}
