"use client"
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
