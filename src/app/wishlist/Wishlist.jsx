import { PlaceCard } from '@/common/PlaceCard'
import React from 'react'

export default function Wishlist() {
  return (
    <div className="flex flex-col px-4 pb-28 w-screen h-screen overflow-y-auto safe-top">
      <div className="flex items-center w-full mb-5 justify-between mt-5">
        <h1 className="font-semibold text-3xl text-wrap text-dark-blue">
          Wishlist
        </h1>
      </div>
      <div className="mx-auto w-full grid mobile-min:grid-cols-1 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
        <PlaceCard
          isInWishlistProp={true}
          width={166}
          height={166}
          placeRating={4.2}
          placeImage="/images/profile-image.jpeg"
          placeName={'Lake Como'}
        />
      </div>
    </div>
  )
}
