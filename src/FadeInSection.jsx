import { useEffect, useRef, useState } from "react"

function FadeInSection({ children }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        {threshold: 0.1, rootMargin: "0px 0px -20% 0px"}
      )

    if (ref.current) { observer.observe(ref.current) }

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }

    }, [])

    return (
        <div
        ref={ref}
        className={`transition-all duration-1000 ease-in-out transform
            ${isVisible ? "opacity-100 translate-x-4" : "opacity-0 translate-x-5"}`}
        >
        {children}
        </div>
  )
}

export default FadeInSection