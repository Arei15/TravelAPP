'use client'

import StarSvg from '../../public/icons/star.svg'
import BookmarkSvg from '../../public/icons/bookmark.svg'
import LocationSvg from '../../public/icons/location.svg'
import ShareSvg from '../../public/icons/share.svg'
import Image from 'next/image'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'

export function PlaceCard({
  width,
  height,
  placeImage,
  placeRating,
  placeName,
  isInWishlistProp,
}) {
  const [isInWishlist, setIsInWishlist] = useState(isInWishlistProp)
  return (
    <>
      <div
        style={{
          width: width ? `${width}px` : '100%',
          height: `${height}px`,
        }}
        className="relative cursor-pointer flex"
      >
        {width && (
          <div
            style={{
              width: `${height > 200 ? 209 : 113}px`,
              height: `${height > 200 ? 242 : 120}px`,
              top: `${height > 200 ? 36 : 52}px`,
            }}
            className={clsx(
              'absolute rounded-[20px] left-7 bg-[#03184E] blur-md'
            )}
          ></div>
        )}
        <Link
          href="/place-card"
          className="absolute w-full"
          style={{ height: `${height}px` }}
        >
          <Image
            src={placeImage}
            width={100}
            height={height}
            priority
            alt={`View of ${placeName}`}
            className="object-cover w-full h-full object-center rounded-[20px]"
          />
        </Link>
        <div
          className={clsx(
            'absolute top-3 left-3 flex items-center justify-center bg-[#323231]/80 rounded-full',
            !width ? 'p-2' : 'p-1'
          )}
        >
          <StarSvg className={clsx(!width ? 'w-4 h-4' : 'w-3 h-3')} />
          <h4
            className={clsx(
              'text-[#CAC8C8]',
              !width ? 'text-base' : 'text-[10px]'
            )}
          >
            {placeRating}
          </h4>
        </div>
        <span className="top-3 right-3 absolute flex items-center gap-2.5">
          {!width && (
            <button>
              <ShareSvg className="w-6 h-6 [&_path]:stroke-black" />
            </button>
          )}
          <button
            onClick={() => setIsInWishlist(!isInWishlist)}
            aria-label={
              isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'
            }
          >
            <BookmarkSvg
              className={clsx(
                isInWishlist
                  ? '[&_path]:fill-[#FF2D55] [&_path]:stroke-[#FF2D55]'
                  : '[&_path]:stroke-black',
                height > 200 || !width ? 'w-[22px] h-6' : 'w-4 h-[18px]'
              )}
            />
          </button>
        </span>
        <div className="absolute bottom-3 px-3 flex w-full justify-center">
          <div
            className={clsx(
              'bg-[#323131]/80 w-full flex items-center',
              height > 200 || !width
                ? 'p-2.5 gap-2.5 rounded-[10px]'
                : 'py-2 px-1 rounded-md gap-1.5'
            )}
          >
            <div>
              <LocationSvg className="w-[11px] h-[13px]" />
            </div>
            <h2
              className={clsx(
                'font-medium break-words text-white',
                height > 200 || !width ? 'text-base' : 'text-xs'
              )}
            >
              {placeName}
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}
