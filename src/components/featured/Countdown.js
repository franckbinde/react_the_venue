import React, { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";

const Countdown = () => {
  const [state, setState] = useState({
    deadline: "Dec, 31, 2021",
    days: "0",
    hours: "0",
    minutes: "0",
    seconds: "0"
  });

  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      console.log("Date passed");
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));

      setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(state.deadline), 1000);
  }, []);

  return (
    <Slide left delay={1000}>
      <div className="countdown_wrapper">
        <div className="countdown_top">Event starts in</div>
        <div className="countdown_bottom">
          <div className="countdown_item">
            <div className="countdown_time">{state.days}</div>
            <div className="countdown_tag">DAYS</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{state.hours}</div>
            <div className="countdown_tag">HS</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{state.minutes}</div>
            <div className="countdown_tag">MIN</div>
          </div>
          <div className="countdown_item">
            <div className="countdown_time">{state.seconds}</div>
            <div className="countdown_tag">SEC</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default Countdown;

//// USING CLASS BASED COMPONENTS /////

// import React, { Component } from "react";
// import Slide from "react-reveal/Slide";

// export default class Countdown extends Component {
//   state = {
//     deadline: "Dec, 16, 2020",
//     days: "0",
//     hours: "0",
//     minutes: "0",
//     seconds: "0"
//   };

//   getTimeUntil(deadline) {
//     const time = Date.parse(deadline) - Date.parse(new Date());
//     if (time < 0) {
//       console.log("Date passed");
//     } else {
//       const seconds = Math.floor((time / 1000) % 60);
//       const minutes = Math.floor((time / 1000 / 60) % 60);
//       const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
//       const days = Math.floor(time / (1000 * 60 * 60 * 24));

//       this.setState({
//         days,
//         hours,
//         minutes,
//         seconds
//       });
//     }
//   }

//   componentDidMount() {
//     setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
//   }

//   render() {
//     return (
//       <Slide left delay={1000}>
//         <div className="countdown_wrapper">
//           <div className="countdown_top">Event starts in</div>
//           <div className="countdown_bottom">
//             <div className="countdown_item">
//               <div className="countdown_time">{this.state.days}</div>
//               <div className="countdown_tag">DAYS</div>
//             </div>
//             <div className="countdown_item">
//               <div className="countdown_time">{this.state.hours}</div>
//               <div className="countdown_tag">HS</div>
//             </div>
//             <div className="countdown_item">
//               <div className="countdown_time">{this.state.minutes}</div>
//               <div className="countdown_tag">MIN</div>
//             </div>
//             <div className="countdown_item">
//               <div className="countdown_time">{this.state.seconds}</div>
//               <div className="countdown_tag">SEC</div>
//             </div>
//           </div>
//         </div>
//       </Slide>
//     );
//   }
// }
