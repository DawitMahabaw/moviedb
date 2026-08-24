import React from "react";
import styles from "./MovieCard.module.css";
// react icons contains icons from many different icon libraries.
import { FaCirclePlay } from "react-icons/fa6";
// The /fa6 path tells React to load icons from the Font Awesome version 6 set.

import { BsPlusCircle } from "react-icons/bs";
// The /bs path tells React to load icons from the Bootstrap Icons set.

import { GoCheckCircleFill } from "react-icons/go";
// The /go path tells React to load icons from the GitHub Octicons icon set.

import { IoIosArrowDropdownCircle } from "react-icons/io";
// The /io path tells React to load icons from the Ionicons icon set.


function MovieCard({ movie }) {
  let genres = ["Adventure", "Action", "Thriller"];

  return (
    <div className={styles.cardWrapper}>
      {/* poster image */}
      <img
        className={styles.poster}
        src={movie?.poster_path}
        alt="poster image"
      />

      {/* hover card  */}
      <div className={styles.hoverCard}>
        {/* img */}
        <img
          className={styles.hoverImage}
          src={movie?.poster_path}
          alt="hover image"
        />

        {/* badge */}
        <div className={styles.badge}>Recently Added</div>

        {/* button row */}
        <div className={styles.buttonsRow}>
          <FaCirclePlay
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <BsPlusCircle
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={styles.circleButton}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={styles.circleButtonSmall}
            color="white"
            size={40}
          />
        </div>

        {/* metadata row */}
        <div className={styles.metaRow}>
          <span className={styles.tag}>U/A 16+</span>
          <span className={styles.tag}>Movie</span>
          <span className={styles.tag}>HD</span>
        </div>

        {/* genres */}
        {/* looping through the genres array and displaying each genre with a • between them.

        g → the current item
        index → the position of that item in the array
        key → in React helps React identify each item in a list uniquely.

        */}
        <div className={styles.genres}>
          {genres.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < genres.length - 1 && (
                  <span className={styles.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
