import Card from "./components/card/Card";
import Inline from "./components/inline-style/Inline";
import StyleSheet from "./components/regular-style/StyleSheet";
import data from './data';
const App = () => {
  return (
    <>
      <Inline/>
    <StyleSheet secenek={false}/> 
   <Card veri={data}/>
    </>
  );
};

export default App;
