import React from "react";
import { Cube } from "./Cube";
import { ListOfLangs } from "./ListOfLangs";
import "../StyleSheet/SecondaryContent.css";

interface Props {}

export const SecondaryContent = (props: Props) => {
  return (
    <div className="SecondaryContent">
      <ListOfLangs />
      <Cube />
    </div>
  );
};
