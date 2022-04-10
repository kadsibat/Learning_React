
import './App.css';
import WithContextApp from './withcontext/WithContextApp';
import WithPropsApp from './withprops/WithPropsApp';

function App() {
  return (
    <div className="App">
     <h2>useContext Class</h2>
     {/* <WithPropsApp/> */}
     <WithContextApp/>
    </div>
  );
}

export default App;
