import { useState, useRef } from "react";

export default function ImageSlider({ images  }) {
  const [index, setIndex] = useState(0);
  const startX = useRef(null);

  const next = () =>
    setIndex((i) => (i + 1) % images.length);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;

    if (diff > 50) next();
    if (diff < -50) prev();

    startX.current = null;
  };

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-300 ease-out "
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            draggable={false}
            className=" h-full w-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2
                   bg-black/60 text-white rounded-full w-9 h-9
                   flex items-center justify-center hover:bg-black/80"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   bg-black/60 text-white rounded-full w-9 h-9
                   flex items-center justify-center hover:bg-black/80"
      >
        ›
      </button>
    </div>
  );
}
