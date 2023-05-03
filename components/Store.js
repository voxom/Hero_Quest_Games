"use client"
import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "../app/page.module.css"
import items from "../public/items.js"


export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  })

  // TODO: Loop through object and display the corresponding image

  {items.map((item, index) => (
    console.log(item))
  )}
    
  

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">1</div>
      <div className="keen-slider__slide number-slide2">2</div>
      <div className="keen-slider__slide number-slide3">3</div>
      <div className="keen-slider__slide number-slide4">4</div>
      <div className="keen-slider__slide number-slide5">5</div>
      <div className="keen-slider__slide number-slide6">6</div>
    </div>
  )
}





/* sorta works
import React, { Component } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styles from "../app/page.module.css"

export default class NextJsCarousel extends Component {
  render() {
    return (
        <Carousel
          autoPlay
          stopOnHover
          dynamicHeight
          animationHandler="fade"
          swipeable={false}
        >
          <div className={styles.gallery_item}>
            <img src="/apparel.jpg" alt="apparel picture" />
          </div>
          <div className={styles.gallery_item}>
            <img src="/arcade.jpg" alt="arcade picture" />
          </div>
          <div className={styles.gallery_item}>
            <img src="/merch.jpg" alt="apparel picture" />
          </div>
          <div className={styles.gallery_item}>
            <img src="/games.jpg" alt="videogame picture" />
          </div>
        </Carousel>
    )
  }
}
*/