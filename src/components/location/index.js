import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="venue_location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2478.4900985570093!2d-0.24356588457361553!3d51.59590801204931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876112b847e1733%3A0x5459509257c80ef1!2sBoulevard%20Dr%2C%20Edgware%2C%20London%2C%20UK!5e0!3m2!1sen!2scm!4v1605820826660!5m2!1sen!2scm"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
        tabIndex="0"
      ></iframe>

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
