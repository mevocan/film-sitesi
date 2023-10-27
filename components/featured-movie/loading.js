import React from "react";
import { Loading } from "@/components/loading";


function FeatureMovieLoading() {
  return (
    <div style={{ height: 278 }} className="flex flex-col gap-6 mt-14 mb-14">
      <Loading />
    </div>
  );
}

export { FeatureMovieLoading };