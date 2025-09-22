import { useEffect, useState } from 'react'
import { urlFor } from '../utils/sanity'
import CloseIcon from '../assets/close.svg?react'

interface ImageSliderProps {
  images: Array<{
    asset?: {
      _ref: string
      _type: 'reference'
      _weak?: boolean
    }
    caption?: string
    _key: string
  }>
  initialIndex: number
  isOpen: boolean
  onClose: () => void
}

export default function ImageSlider({
  images,
  initialIndex,
  isOpen,
  onClose,
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          onClose()
          break
        case 'ArrowLeft':
          setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
          break
        case 'ArrowRight':
          setCurrentIndex((prev) => (prev + 1) % images.length)
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, images.length, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  const currentImage = images[currentIndex]

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  // Touch handling for swipe gestures
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && images.length > 1) {
      goToNext()
    }
    if (isRightSwipe && images.length > 1) {
      goToPrevious()
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-zinc-800 p-2 text-zinc-100 transition-colors hover:bg-zinc-700 md:right-6 md:top-6 md:p-3"
      >
        <CloseIcon className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Previous button */}
      {images.length > 1 && (
        <button
          onClick={goToPrevious}
          className="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xl text-zinc-100 transition-colors hover:bg-zinc-700 md:left-6 md:h-12 md:w-12 md:text-2xl"
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {images.length > 1 && (
        <button
          onClick={goToNext}
          className="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-xl text-zinc-100 transition-colors hover:bg-zinc-700 md:right-6 md:h-12 md:w-12 md:text-2xl"
        >
          ›
        </button>
      )}

      {/* Image container */}
      <div
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {currentImage?.asset && (
          <img
            src={urlFor(currentImage.asset).url()}
            alt={currentImage.caption || 'Project screenshot'}
            className="max-h-full max-w-full object-contain"
          />
        )}
      </div>

      {/* Image counter */}
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-zinc-800 px-4 py-2 text-zinc-100">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {/* Image caption */}
      {currentImage?.caption && (
        <div className="absolute bottom-20 left-1/2 max-w-md -translate-x-1/2 rounded-lg bg-zinc-800 px-4 py-2 text-center text-zinc-100">
          {currentImage.caption}
        </div>
      )}

      {/* Backdrop click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
