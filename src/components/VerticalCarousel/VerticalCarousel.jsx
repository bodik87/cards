import { nanoid } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { CategoryItemContainer } from "../../components/containers/CategoryItemContainer";
import { UpArrow, DownArrow } from "../SVG"

import styles from "./VerticalCarousel.module.scss";

export const VerticalCarousel = ({
  itemsArray = [],
  itemHeight = 0,
  maxItemsCount = 0,
}) => {

  const [startArray, setStartArray] = useState(0);

  const carouselContainerVisibleHeight =
    itemsArray.length > maxItemsCount
      ? itemHeight * maxItemsCount
      : itemHeight * itemsArray.length;

  // For arrows styles
  const inactiveUpArrow = startArray === 0;
  const inactiveDownArrow =
    startArray >= (itemsArray.length - maxItemsCount) * itemHeight;

  const translateUP = () => {
    if (inactiveUpArrow) return;
    setStartArray((startArray) => startArray - itemHeight);
  };
  const translateDown = () => {
    if (inactiveDownArrow) return;
    else setStartArray((startArray) => startArray + itemHeight);
  };

  return (
    <>
      <div className={styles.verticalCarouselContainer}>
        <UpArrow
          color={inactiveUpArrow ? "transparent" : "#95AABB"}
          style={inactiveUpArrow ? "upArrow_inactive" : "upArrow"}
          onClick={translateUP}
        />
        <div
          style={{ height: carouselContainerVisibleHeight, overflow: "hidden" }}
        >
          <div style={{ transform: `translateY(-${startArray}px)` }}>
            <ul>
              {itemsArray.map(el => {
                return (
                  <li
                    key={nanoid()}
                    style={{ height: itemHeight }}
                  >
                    <CategoryItemContainer
                      category={el}
                      id={el.id}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <DownArrow
          color={inactiveDownArrow ? "transparent" : "#95AABB"}
          style={inactiveDownArrow ? "downArrow_inactive" : "downArrow"}
          onClick={translateDown}
        />
      </div>
    </>
  );
};
