import './styleSheet.css'


const StyleSheet = (props) => {
 
  
  return (
    <div>
      <img className="logo"
     src="https://secure.meetupstatic.com/photos/event/3/1/b/9/600_488352729.jpeg"
        alt="clarusway-logo"
      />
      <h1 className="header" >Regular-style --- STYLESHEET </h1>
      <p className={ props.secenek? "once":"sonra"}>Welcome to Clarusway</p>
    </div>
  );
};

export default StyleSheet;
