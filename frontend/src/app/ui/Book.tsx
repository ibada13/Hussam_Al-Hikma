import React, { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import Image from "next/image";
import useSWR from "swr";
import { data } from "@/types/Types";
import { fetcher } from "@/hooks/userhooks";
import { useSearchParams } from "next/navigation";
// import TypeIcon from "./TypeIcon";
const BookCard = ({ book }: { book: any }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);


  const handleMouseEnter = () => {
    gsap.to(overlayRef.current, {
      opacity: 1,
      y: "0",
      scale: 1.05,  
      duration: 0.5,
      ease: "power2.out",
    });
    gsap.to(titleRef.current, {
      // color: "#ff0000",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(overlayRef.current, {
      // opacity: 0, 
      scale:1,
      // y:"-100%",
      duration:1,
      ease: "power2.out",
    });
    gsap.to(titleRef.current, {
      // color: '#f00',
    });
  };

  return (
    <div ref={overlayRef} className="text-white hover:text-red-500 transition-colors duration-300">
      <div
        className="relative group w-44 h-72 overflow-hidden border border-gray-700 rounded-lg cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link href={`/book/${book.id}`} passHref className="flex flex-col items-center h-full p-2">
          {book.cover_path && (
            <div className="relative w-full h-60 rounded-md overflow-hidden">
              <Image
                src={book.cover_path}
                alt={`${book.title}'s cover`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          )}
          <h4
            ref={titleRef}
            id="title"
            className="text-center text-xs font-semibold truncate mt-3 px-2 w-full"
          >
            {book.title}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
