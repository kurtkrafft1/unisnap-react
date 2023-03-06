import React from "react";
import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <div>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={["#F0FFFF", "#89CFF0", "#f8b26a", "#088F8F", "#5F9EA0"]}
      />
    </div>
  );
};

export default Loader;
