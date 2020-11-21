import React from "react";
import Button from "@material-ui/core/Button";
import TicketIcon from "../../resources/images/icons/ticket.png";
// import "../../resources/styles.css";

const MyButton = ({ bck, color, text, link }) => {
  return (
    <Button
      className="my_button"
      href={link}
      variant="contained"
      size="small"
      style={{
        background: bck,
        color
      }}
    >
      <img src={TicketIcon} className="iconImage" alt="icon_button" />
      {text}
    </Button>
  );
};

export default MyButton;
