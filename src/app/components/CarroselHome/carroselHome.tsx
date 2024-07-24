import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import CursoDestaque from '../CursoDestaque/cursoDestaque';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
}

type PropType = {
  slides: Slide[];
  options?: EmblaOptionsType;
};

const CarroselDestaque: React.FC<PropType> = ({ slides, options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide" key={index}>
              <CursoDestaque
                image={slide.image}
                title={slide.title}
                subtitle={slide.subtitle}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarroselDestaque;
