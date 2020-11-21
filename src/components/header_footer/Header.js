import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from "./SideDrawer";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 150) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  const toggleDrawer = (value) => {
    setDrawerOpen(value);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: headerShow ? "#2f2f2f" : "transparent",
        boxShadow: "none",
        padding: "10px 0"
      }}
    >
      <Toolbar>
        <div className="header_logo">
          <div className="font_righteous header_logo_venue">The Venue</div>
          <div className="header_logo_title">Musical Events</div>
        </div>

        <IconButton
          aria-label="Menu"
          color="inherit"
          onClick={() => toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        <SideDrawer
          open={drawerOpen}
          onClose={(value) => toggleDrawer(value)}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

/// USING CLASS BASED COMPONENTS ///

// import React, { Component } from "react";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/icons/Menu";
// import IconButton from "@material-ui/core/IconButton";
// import SideDrawer from "./SideDrawer";

// export default class Header extends Component {
//   state = {
//     drawerOpen: false,
//     headerShow: false
//   };

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.scrollY > 150) {
//       this.setState({
//         headerShow: true
//       });
//     } else {
//       this.setState({
//         headerShow: false
//       });
//     }
//   };

//   toggleDrawer = (value) => {
//     this.setState({
//       drawerOpen: value
//     });
//   };

//   render() {
//     return (
//       <AppBar
//         position="fixed"
//         style={{
//           backgroundColor: this.state.headerShow ? "#2f2f2f" : "transparent",
//           boxShadow: "none",
//           padding: "10px 0"
//         }}
//       >
//         <Toolbar>
//           <div className="header_logo">
//             <div className="font_righteous header_logo_venue">The Venue</div>
//             <div className="header_logo_title">Musical Events</div>
//           </div>

//           <IconButton
//             aria-label="Menu"
//             color="inherit"
//             onClick={() => this.toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>

//           <SideDrawer
//             open={this.state.drawerOpen}
//             onClose={(value) => this.toggleDrawer(value)}
//           />
//         </Toolbar>
//       </AppBar>
//     );
//   }
// }
