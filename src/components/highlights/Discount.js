import React, { useState, useEffect } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import MyButton from "../utils/MyButton";
import Button from "../utils/MyButton";

const Discount = () => {
  const [state, setState] = useState({
    discountStart: 0,
    discountEnd: 30
  });

  const percentage = () => {
    if (state.discountStart < state.discountEnd) {
      setState({ ...state, discountStart: state.discountStart + 1 });
    }
  };

  useEffect(() => {
    state.discountStart > 0 &&
      setTimeout(() => {
        percentage();
      }, 30);
  }, [state.discountStart]);

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade onReveal={() => percentage()}>
          <div className="discount_percentage">
            <span>{state.discountStart}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Spread the word, and expect special gifts!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
              possimus quaerat culpa est tenetur commodi incidunt veniam! Ullam,
              perferendis quae.
            </p>

            <MyButton
              text="Purchase Tickets"
              bck="#ffa800"
              color="#ffffff"
              link="http://google.com"
            />
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Discount;

/// USING CLASS BASED COMPONENTS ///

// import React, { Component } from "react";
// import Fade from "react-reveal/Fade";
// import Slide from "react-reveal/Slide";

// export default class Discount extends Component {
//   state = {
//     discountStart: 0,
//     discountEnd: 30
//   };

//   percentage = () => {
//     if (this.state.discountStart < this.state.discountEnd) {
//       this.setState({
//         discountStart: this.state.discountStart + 1
//       });
//     }
//   };

//   componentDidUpdate() {
//     setTimeout(() => {
//       this.percentage();
//     }, 30);
//   }

//   render() {
//     return (
//       <div className="center_wrapper">
//         <div className="discount_wrapper">
//           <Fade onReveal={() => this.percentage()}>
//             <div className="discount_percentage">
//               <span>{this.state.discountStart}%</span>
//               <span>OFF</span>
//             </div>
//           </Fade>
//           <Slide right>
//             <div className="discount_description">
//               <h3>Spread the word, and expect special gifts!</h3>
//               <p>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
//                 possimus quaerat culpa est tenetur commodi incidunt veniam!
//                 Ullam, perferendis quae.
//               </p>

//               <div>button</div>
//             </div>
//           </Slide>
//         </div>
//       </div>
//     );
//   }
// }
