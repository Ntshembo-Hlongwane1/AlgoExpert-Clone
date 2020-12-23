import React from "react";
import "../StyleSheet/MainContentCards.css";

interface Props {
  Icon: string;
  HeaderText: string;
  paragraphText: string;
}

export const MainContentCards = (props: Props) => {
  return (
    <div className="Card">
      <div className="Card__icon">
        <img src={props.Icon} alt="Content ICON" className="Content__icon" />
      </div>
      <div className="Card__HeaderText">
        <h3>{props.HeaderText}</h3>
      </div>
      <div className="Card__paragraphText">
        <h5>{props.paragraphText}</h5>
      </div>
    </div>
  );
};
