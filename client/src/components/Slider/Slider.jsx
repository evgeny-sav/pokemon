import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Carousel, Image } from 'react-bootstrap';

const Slider = () => {
  const { sprites } = useSelector(state => state.pokemon.data, shallowEqual);
  return (
    <Carousel
      className="text-center"
      nextIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFCB05"
          width="20"
          height="20"
          viewBox="0 0 8 8"
        >
          <path d="M2.75 0l-1.5 1.5L3.75 4l-2.5 2.5L2.75 8l4-4-4-4z" />
        </svg>
      }
      prevIcon={
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#FFCB05"
          width="20"
          height="20"
          viewBox="0 0 8 8"
        >
          <path d="M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z" />
        </svg>
      }
    >
      {Object.keys(sprites)
        .sort(a => (/front_default/.test(a) ? -1 : 1))
        .reduce((acc, key) => {
          const imgUrl = sprites[key];
          if (imgUrl !== null) {
            const slide = (
              <Carousel.Item key={`${name}${Math.random()}`}>
                <Image width={200} src={imgUrl} alt={name} />
              </Carousel.Item>
            );
            acc.push(slide);
          }
          return acc;
        }, [])}
    </Carousel>
  );
};

export default Slider;
