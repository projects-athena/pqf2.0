import React, { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface CarouselProps {
  slides: React.ReactNode[];
  autoplay?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoplay = false }) => {
  const options = {
    loop: true,
    skipSnaps: false,
    align: 'center',
    slidesToScroll: 1,
  };

  const plugins = autoplay ? [Autoplay({ delay: 1000, stopOnInteraction: false })] : [];
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    const snapIndex = emblaApi.selectedScrollSnap();
    emblaApi.scrollTo(snapIndex, true);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slide, index) => (
          <div className="embla__slide" key={index}>
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
