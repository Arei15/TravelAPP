'use client'

import { useEffect, useState } from 'react'
import NotificationsProfile from '@/layouts/NotificationsProfile'
import { SearchPlacesModal } from '@/common//modals/SearchPlacesModal'
import { RecommendedPlaces } from '@/common/RecommendedPlaces'
import { PlaceCard } from '@/common/PlaceCard'
import { categories } from '@/constants/categories'
import { createPortal } from 'react-dom'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../firebase/config'
import Image from 'next/image'
import clsx from 'clsx'
import { ProfileContext } from '@/layouts/Providers'
import { useRouter } from 'next/navigation'
import SeeAllPlacesCard from '@/common/SeeAllPlacesCard'
import Link from 'next/link'

export const Home = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)
  const [erevan, setErevan] = useState({})
  const [searchValue, setSearchValue] = useState('')
  const router = useRouter()

  return (
    <>
      {searchValue.length || isOpenSearchModal ? (
        createPortal(
          <SearchPlacesModal
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            handleCloseModal={() => setIsOpenSearchModal(false)}
          />,
          document.body
        )
      ) : (
        <div className="w-screen h-screen overflow-y-auto safe-top">
          <div className="flex flex-col py-2.5 px-4 overflow-x-hidden relative">
            <div className="flex w-full my-2.5 min-h-16 justify-between items-start">
              <h1 className="font-poppins font-semibold text-3xl text-dark-blue text-wrap">
                Where do you wanna go?
              </h1>
              <div>
                <NotificationsProfile notificationsCount={999} />
              </div>
            </div>
            <input
              value={searchValue}
              onChange={(e) =>
                isOpenSearchModal
                  ? null
                  : !searchValue.length &&
                    (setSearchValue(e.target.value), setIsOpenSearchModal(true))
              }
              className="w-full border-2 rounded-[20px] mt-2.5 py-[18px] border-[#D2D2D2] px-4 outline-none"
              placeholder="Search place"
            />
            <div id="category-menu" className="overflow-x-auto font-poppins">
              <div className="flex pt-5 pb-2 w-max">
                {categories.map((category, idx) => {
                  const isSelected = selectedCategories.includes(
                    category.categoryName
                  )

                  return (
                    <button
                      onClick={() =>
                        isSelected
                          ? setSelectedCategories((prev) =>
                              prev.filter(
                                (selected) => selected !== category.categoryName
                              )
                            )
                          : setSelectedCategories((prev) => [
                              ...prev,
                              category.categoryName,
                            ])
                      }
                      key={idx}
                      className="flex w-max mx-5 gap-1.5 font-medium"
                    >
                      <Image
                        priority
                        src={category.categoryIcon}
                        alt={category.categoryIcon}
                      />
                      <span
                        className={clsx(
                          'transition-all duration-300',
                          !isSelected && 'text-[#848282]'
                        )}
                      >
                        {category.categoryName}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex mt-4 gap-[10px] w-max pb-14">
                <PlaceCard
                  width={270}
                  height={270}
                  placeRating={4.8}
                  placeImage={'/images/profile-image.jpeg'}
                  placeName={'Berlin Dom'}
                />
                <PlaceCard
                  width={270}
                  height={270}
                  placeRating={4.8}
                  placeImage={'/images/profile-image.jpeg'}
                  placeName={'Berlin Dom'}
                />
                <PlaceCard
                  width={270}
                  height={270}
                  placeRating={4.8}
                  placeImage={'/images/profile-image.jpeg'}
                  placeName={'Berlin Dom'}
                />
                <PlaceCard
                  width={270}
                  height={270}
                  placeRating={4.8}
                  placeImage={'/images/profile-image.jpeg'}
                  placeName={'Berlin Dom'}
                />
                <SeeAllPlacesCard />
              </div>
            </div>

            <div className="flex absolute desktop:top-[60.5%] w-full pr-10 mobile:top-[61.8%] top-[61.8%]">
              <h2 className="text-dark-blue font-medium">Recommended Places</h2>
              <Link
                href="/recommended"
                className="ml-auto text-main-blue underline text-sm font-semibold leading-none"
              >
                See All
              </Link>
            </div>

            <RecommendedPlaces />
          </div>
        </div>
      )}
    </>
  )
}
