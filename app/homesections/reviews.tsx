"use client"
import { BlurImage } from "@/components/MediaComponents/BlurImage"
import { PubImages } from "@/imageData"
import { Star } from "lucide-react"
import { useEffect, useRef } from "react"

interface IReview {
  fullName: string
  comment: string
  stars: number
  source?: "Google" | "Yelp" | "Facebook" // optional source
}

const reviews: IReview[] = [
  {
    fullName: "Olivia Martin",
    comment: "Absolutely love my new haircut! The team is professional and made the whole experience enjoyable.",
    stars: 5,
    source: "Google"
  },
  {
    fullName: "James Lee",
    comment: "Friendly staff and precise styling. My fade turned out perfect and exactly what I asked for.",
    stars: 4.5,
    source: "Facebook"
  },
  {
    fullName: "Sophia Patel",
    comment: "This has been my go-to salon for months. The stylists always know exactly what I want, and I never leave disappointed.",
    stars: 5,
    source: "Google"
  },
  {
    fullName: "Ethan Brown",
    comment: "Great attention to detail and efficient service. I come here every week for trims and my hair always looks sharp.",
    stars: 4,
    source: "Google"
  },
  {
    fullName: "Mia Wilson",
    comment: "Consistently amazing service. I’ve been coming here regularly for over a year, and the team always makes me feel at home.",
    stars: 4.5,
    source: "Google"
  },
  {
    fullName: "Liam Johnson",
    comment: "Came in for a quick trim and walked out with a sharp, clean cut. Fast, professional, and friendly.",
    stars: 5,
    source: "Facebook"
  },
  {
    fullName: "Chloe Davis",
    comment: "They take the time to understand exactly what you want. I visit every week and they never let me down.",
    stars: 4.5,
    source: "Google"
  },
  {
    fullName: "Noah Smith",
    comment: "Walked in with a last-minute appointment and they accommodated me perfectly. The haircut was flawless.",
    stars: 5,
    source: "Google"
  },
  {
    fullName: "Ava Thompson",
    comment: "Every visit is consistently great. The cuts are precise, the atmosphere is relaxing, and the staff are attentive.",
    stars: 4,
    source: "Google"
  }
]


export default function Reviews(){
  const trackRef = useRef<HTMLDivElement | null>(null)
  const animRef = useRef<Animation | null>(null);
  const cardWidth = 450
  const numCards = reviews.length

  useEffect(() => {
    if (trackRef.current) {
      console.log("ok")
      animRef.current = trackRef.current.animate(
        [
          { transform: "translateX(0px)" },
          { transform: `translateX(-${cardWidth * (reviews.length)}px)` }
        ],
        {
          duration: 10000 * numCards,
          iterations: Infinity
        }
      );
    }
  }, []);

   // Pausar animación al pasar el puntero
  const handleMouseEnter = (): void => {
    animRef.current?.pause();
  };

  // Reanudar animación desde el punto donde se congeló
  const handleMouseLeave = (): void => {
    animRef.current?.play();
  };

  return <section className="theme-primary pb-section-y">
    <div className="w-full vert-10">
      <div className="centered-content-full">
        <h1 className="text-left-md">Reviews</h1>
      </div>
      
      <div className="md:block hidden slider relative" style={{width: (cardWidth * 3) + "px"}}>
        <div ref={trackRef} className="slide-track flex" style={{width: (2 * numCards * cardWidth) + "px"}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          {reviews.map((review, i) =>{
            return <ReviewCard key={i} review={review} width={cardWidth + 'px'}/>
          })}
          {reviews.map((review, i) =>{
            return <ReviewCard key={i} review={review} width={cardWidth + 'px'}/>
          })}
        </div>
      </div>
      <div className="md:hidden flex flex-col gap-10">
        {
        reviews.map((review, i) =>{
          if (i >= 3) return
          return <ReviewCard key={i} review={review} width={'100%'}/>
        })

        }
      </div>
    </div>
  </section>
}

function ReviewCard({review, width}: {review: IReview, width: string}){
  return <div className="slide flex px-5" style={{width}}>
    <div className="p-5 theme-secondary grow vert-3 rounded-xl shadow-custom-1">
      <div className="flex-panel gap-5">
        <div className="w-13 h-13 rounded-full border border-gray-400 overflow-hidden">
          <BlurImage blurSrc={PubImages.stock.user} containerClass="w-full h-full" centerFill/>
        </div>
        
        <div className="vert-1">
          <h6>{review.fullName}</h6>
          <StarRating stars={review.stars}/>
        </div>
        
      </div>
      <p className="text-tint-dark md:text-lg text-base grow mb-5">
        {review.comment}
      </p>
      <div className="flex-panel gap-5">
        <BrandLogo source="Google"/>
        <p className="text-accent-2 text-sm italic">
          Google Review
        </p>
      </div>
    </div>
    
  </div>
}

function StarRating({ stars }: { stars: number }) {
  const starElements: any[] = []

  for (let i = 1; i <= 5; i++) {
    if (i <= stars) {
      starElements.push(<Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)
    } else if (i - 0.5 === stars) {
      starElements.push(
        <div key={i} className="relative w-4 h-4">
          <Star className="absolute inset-0 w-4 h-4 text-gray-300" />
          <Star
            className="absolute inset-0 w-4 h-4 text-yellow-500 fill-yellow-500"
            style={{ clipPath: "inset(0 50% 0 0)" }}
          />
        </div>
      )
    } else {
      starElements.push(<Star key={i} className="w-4 h-4 text-gray-300" />)
    }
  }

  return <div className="flex gap-1">{starElements}</div>
}

function BrandLogo({ source }: { source?: string }) {
  if (!source) return null

  switch (source) {
    case "Google":
      return (
        <svg className="w-8 h-8" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
          <path d="M533.5 278.4c0-17.7-1.6-35-4.7-51.7H272v97.8h146.8c-6.3 33.7-25 62.3-53.4 81.5v67.7h86.2c50.5-46.5 79.9-115.3 79.9-195.3z" fill="#4285f4"/>
          <path d="M272 544.3c72.7 0 133.7-24.1 178.3-65.3l-86.2-67.7c-24.1 16.2-55.1 25.7-92.1 25.7-70.7 0-130.5-47.6-152-111.4H31.3v69.8C75.4 486.1 166.7 544.3 272 544.3z" fill="#34a853"/>
          <path d="M119.9 322.6c-4.9-14.5-7.7-29.9-7.7-45.6s2.8-31.1 7.7-45.6V161.6H31.3c-19.2 38.1-30.3 81-30.3 128s11.1 89.9 30.3 128l88.6-69.8z" fill="#fbbc04"/>
          <path d="M272 107.6c39.6 0 75.1 13.6 103.1 40.4l77.3-77.3C405.6 24.6 344.6 0 272 0 166.7 0 75.4 58.2 31.3 161.6l88.6 69.8c21.5-63.8 81.3-111.4 152-111.4z" fill="#ea4335"/>
        </svg>
      )
    case "Facebook":
      return (
        <svg className="w-8 h-8" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.36 0 225.36 0c-73.61 0-121.36 44.38-121.36 124.72v70.62H22.89V288h81.11v224h100.2V288z"
            fill="#1877F2"
          />
        </svg>
      )
    default:
      return null
  }
}