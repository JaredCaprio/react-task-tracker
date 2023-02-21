import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function CardSkeleton({ cards }) {
  return Array(cards)
    .fill(0)
    .map((_, i) => {
      return (
        <SkeletonTheme baseColor="#7780c1" highlightColor="#0ebae3" key={i}>
          <div className="card-skeleton">
            <div className="left-col">
              <Skeleton width={300} height={40} />
            </div>
            <div className="left-right">
              <Skeleton width={200} />
            </div>
          </div>
        </SkeletonTheme>
      );
    });
}
