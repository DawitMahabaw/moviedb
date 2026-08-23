import React from 'react'
import styles from "./DisplayRow.module.css";
import SlideShow from '../SlideShow/SlideShow';
import { movies } from '../../Data/Data';


function DisplayRow() {
  return (
    <div className={styles.mainWrapper}>
      <SlideShow title="Movie Suggestions" movies={movies} />
      <SlideShow title="Popular on netflix" movies={movies} />
      <SlideShow title="Movie Suggestions" movies={movies} />
    </div>
  );
}

export default DisplayRow