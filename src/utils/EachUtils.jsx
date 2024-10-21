import { Children } from "react";

const EachUtils = ({ datalist, render }) => {
  //render => callback
  return Children.toArray(datalist.map((item) => render(item)));
};

export default EachUtils;
