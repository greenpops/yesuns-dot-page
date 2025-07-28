'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const DEFAULTIMAGES = ['/file.svg', '/globe.svg'];

type CarouselBasicProps = {
  images?: string[];
};

export function CarouselBasic({ images = DEFAULTIMAGES }: CarouselBasicProps) {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);

  const imageIndex = ((page % images.length) + images.length) % images.length;

  function paginate(newDirection: number) {
    setPage([page + newDirection, newDirection]);
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className='relative w-full max-w-xs'>
      <div
        style={{
          position: 'relative',
          width: 400,
          height: 250,
          overflow: 'hidden',
          margin: 'auto',
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={imageIndex}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </AnimatePresence>
        <button
          onClick={() => paginate(-1)}
          style={{
            position: 'absolute',
            top: '60%',
            left: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            borderRadius: '50%',
            padding: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-50%)',
            fontSize: '1.5rem',
            color: '#333',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            transition: 'background-color 0.3s ease',
            outline: 'none',
            boxSizing: 'border-box',
            width: '2.5rem',
            height: '2.5rem',
            zIndex: 1,
          }}
          aria-label='Previous'
        >
          ←
        </button>
        <button
          onClick={() => paginate(1)}
          style={{
            position: 'absolute',
            top: '60%',
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            border: 'none',
            borderRadius: '50%',
            padding: '0.5rem',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transform: 'translateY(-50%)',
            fontSize: '1.5rem',
            color: '#333',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(5px)',
            transition: 'background-color 0.3s ease',
            outline: 'none',
            boxSizing: 'border-box',
            width: '2.5rem',
            height: '2.5rem',
            right: 10,
            zIndex: 1,
          }}
          aria-label='Next'
        >
          →
        </button>
      </div>
    </div>
  );
}