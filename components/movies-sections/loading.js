import React from "react";

import { Skeleton } from "@/components/skeleton";

function MoviesSectionLoading() {
  return (
    <div className="mt-36">
      <Skeleton width={128} height={36} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] auto-rows-[320px] gap-6">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <Skeleton key={index} />
          ))}
      </div>
    </div>
  );
}

export { MoviesSectionLoading };
