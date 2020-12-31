import React from "react";
import { Cube } from "./Cube";
import { ListOfLangs } from "./ListOfLangs";
import "../StyleSheet/SecondayContent.css";

interface Props {}

export const SecondaryContent = (props: Props) => {
  return (
    <div className="secondaryContent">
      <ListOfLangs />
      <Cube />
    </div>
  );
};
