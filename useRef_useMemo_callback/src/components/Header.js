import React,{memo} from "react";
import cw from "../assets/cw_logo.png"

//!3.kullnım export yaparken memo ile sarmarlama yapıldı
const Header = ({img}) => {
  console.log("header comp render etti");
  return (
    <div className="header">
     <img
      src={img? img:cw} 
     alt="cw_logo"
      style={{margin:"1rem", maxHeight:"200px" }}/>
    </div>
  );
};

export default memo(Header);


//!2.kullanım memo ile sarmalama yapıldı
// const Header = memo(({img}) => {
//   console.log("header comp render etti");
//   return (
//     <div className="header">
//      <img
//       src={img? img:cw} 
//      alt="cw_logo"
//       style={{margin:"1rem", maxHeight:"200px" }}/>
//     </div>
//   );
// });

// export default Header;

//!1.kullanım react.memo ile sarmarlama yapıldı

// const Header = React.memo(({img}) => {
//   console.log("header comp render etti");
//   return (
//     <div className="header">
//      <img
//       src={img? img:cw} 
//      alt="cw_logo"
//       style={{margin:"1rem", maxHeight:"200px" }}/>
//     </div>
//   );
// });

// export default Header;
