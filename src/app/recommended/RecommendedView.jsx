'use client'

import { useState } from 'react'
import { SearchPlacesModal } from '@/common//modals/SearchPlacesModal'
import { PlaceCard } from '@/common/PlaceCard'
import { categories } from '@/constants/categories'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import clsx from 'clsx'

export default function RecommendedView() {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [isOpenSearchModal, setIsOpenSearchModal] = useState(false)
  const [searchValue, setSearchValue] = useState('')

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
                Recommended Places
              </h1>
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

            <div className={clsx('flex flex-col gap-2.5 py-2.5 pb-28')}>
              <PlaceCard
                height={166}
                placeRating={4.8}
                placeImage={'/images/placeImage.jpeg'}
                placeName={'Berlin Dom'}
              />
              <PlaceCard
                height={166}
                placeRating={4.8}
                placeImage={'/images/placeImage.jpeg'}
                placeName={'Berlin Dom'}
              />
              <PlaceCard
                height={166}
                placeRating={4.8}
                placeImage={'/images/placeImage.jpeg'}
                placeName={'Berlin Dom'}
              />
              <PlaceCard
                height={166}
                placeRating={4.8}
                placeImage={'/images/placeImage.jpeg'}
                placeName={'Berlin Dom'}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
