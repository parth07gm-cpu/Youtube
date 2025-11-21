import React, { useRef } from "react";

const filters = [
  "All",
  "Live",
  "Music",
  "News",
  "Gaming",
  "Podcasts",
  "Comedy",
  "Tech",
  "AI",
  "Recently uploaded",
  "Watched",
  "New to you",
  "Mixes",
  "Trailers",
  "Cricket",
  "UX",
  "Street Food",
  "Deep House",
  "Photography",
  "Travel",
];

const ButtonList = () => {
  const scrollRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = direction === "right" ? 300 : -300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleWheel = (event) => {
    if (!scrollRef.current) return;
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      event.preventDefault();
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="border-b border-slate-100 px-4 pb-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Scroll filters left"
          onClick={() => scrollByAmount("left")}
          className="hidden whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <div className="relative flex-1 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white" />
          <div
            ref={scrollRef}
            onWheel={handleWheel}
            className="scrollbar-hide flex gap-3 overflow-x-auto overflow-y-hidden pb-1 pt-2 text-sm text-slate-600"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-100 px-4 py-1.5 font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Scroll filters right"
          onClick={() => scrollByAmount("right")}
          className="hidden whitespace-nowrap rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm transition hover:bg-slate-50 sm:inline-flex"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

const ArrowLeftIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 6 6 6-6 6" />
  </svg>
);

export default ButtonList;
