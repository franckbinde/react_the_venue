import React, { useState } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

const Pricing = () => {
  const [state, setState] = useState({
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit exercitationem doloribus optio! In nam at, accusantium suscipit pariatur ipsum accusamus.",
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptatum veniam qui excepturi voluptas modi adipisci impedit dignissimos, ipsum ea.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Contactimor fulu mas compradr Eius error quos corporis minus incidunt nisi omnis itaque nam ut libero."
    ],
    linkto: ["http://sales/b", "https://sales/m", "https://sales/s"],
    delay: [500, 0, 500]
  });

  const showBoxes = () =>
    state.prices.map((_, index) => (
      <Zoom key={index} delay={state.delay[index]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${state.prices[index]}</span>
              <span>{state.positions[index]}</span>
            </div>
            <div className="pricing_description">{state.desc[index]}</div>
            <div className="pricing_buttons">
              <MyButton
                text="Purchase"
                bck="#ffa800"
                color="#ffffff"
                link={state.linkto[index]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));

  return (
    <div className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>

        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </div>
  );
};

export default Pricing;

/// USING CLASS BASED COMPONENTS ///

// import React, { Component } from "react";
// import MyButton from "../utils/MyButton";
// import Zoom from "react-reveal/Zoom";

// export default class Pricing extends Component {
//   state = {
//     prices: [100, 150, 250],
//     positions: ["Balcony", "Medium", "Star"],
//     desc: [
//       "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit exercitationem doloribus optio! In nam at, accusantium suscipit pariatur ipsum accusamus.",
//       "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur voluptatum veniam qui excepturi voluptas modi adipisci impedit dignissimos, ipsum ea.",
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Contactimor fulu mas compradr Eius error quos corporis minus incidunt nisi omnis itaque nam ut libero."
//     ],
//     linkto: ["http://sales/b", "https://sales/m", "https://sales/s"],
//     delay: [500, 0, 500]
//   };

//   showBoxes = () =>
//     this.state.prices.map((_, index) => (
//       <Zoom key={index} delay={this.state.delay[index]}>
//         <div className="pricing_item">
//           <div className="pricing_inner_wrapper">
//             <div className="pricing_title">
//               <span>${this.state.prices[index]}</span>
//               <span>{this.state.positions[index]}</span>
//             </div>
//             <div className="pricing_description">{this.state.desc[index]}</div>
//             <div className="pricing_buttons">
//               <MyButton
//                 text="Purchase"
//                 bck="#ffa800"
//                 color="#ffffff"
//                 link={this.state.linkto[index]}
//               />
//             </div>
//           </div>
//         </div>
//       </Zoom>
//     ));

//   render() {
//     return (
//       <div className="bck_black">
//         <div className="center_wrapper pricing_section">
//           <h2>Pricing</h2>

//           <div className="pricing_wrapper">{this.showBoxes()}</div>
//         </div>
//       </div>
//     );
//   }
// }
