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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex])

  useEffect(() => {
    setIsLoading(true)
  }, [currentIndex])

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
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.touchAction = 'auto'
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

  const minSwipeDistance = 30

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 md:p-0">
      <button
        onClick={onClose}
        className="absolute right-2 top-2 z-10 rounded-full bg-zinc-800 p-2 text-zinc-100 transition-colors hover:bg-zinc-700 md:right-6 md:top-6 md:p-3"
      >
        <CloseIcon className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute bottom-20 left-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 bg-opacity-90 text-2xl text-zinc-100 transition-colors hover:bg-opacity-100 md:hidden"
          >
            ‹
          </button>
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-800 bg-opacity-80 text-2xl text-zinc-100 transition-colors hover:bg-opacity-100 md:left-6 md:flex"
          >
            ‹
          </button>
        </>
      )}

      {images.length > 1 && (
        <>
          <button
            onClick={goToNext}
            className="absolute bottom-20 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 bg-opacity-90 text-2xl text-zinc-100 transition-colors hover:bg-opacity-100 md:hidden"
          >
            ›
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-10 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-zinc-800 bg-opacity-80 text-2xl text-zinc-100 transition-colors hover:bg-opacity-100 md:right-6 md:flex"
          >
            ›
          </button>
        </>
      )}

      <div
        className="relative mx-4 max-h-[85vh] max-w-full overflow-hidden rounded-10 md:mx-0 md:max-h-[90vh] md:max-w-[90vw]"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-zinc-300 border-t-transparent"></div>
          </div>
        )}

        {currentImage?.asset && (
          <img
            src={urlFor(currentImage.asset).url()}
            alt={currentImage.caption || 'Project screenshot'}
            className="max-h-full max-w-full object-contain transition-opacity duration-200"
            draggable={false}
            onLoad={() => setIsLoading(false)}
            onLoadStart={() => setIsLoading(true)}
            style={{ opacity: isLoading ? 0 : 1 }}
          />
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-32 left-1/2 -translate-x-1/2 rounded-full bg-zinc-800 bg-opacity-90 px-3 py-1 text-sm text-zinc-100 md:bottom-6 md:px-4 md:py-2 md:text-base">
          {currentIndex + 1} / {images.length}
        </div>
      )}

      {currentImage?.caption && (
        <div className="absolute bottom-12 left-4 right-4 rounded-lg bg-zinc-800 bg-opacity-90 px-3 py-2 text-center text-sm text-zinc-100 md:bottom-20 md:left-1/2 md:right-auto md:max-w-md md:-translate-x-1/2 md:px-4 md:text-base">
          {currentImage.caption}
        </div>
      )}

      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
