import React from 'react'

class ClassComponent extends React.Component {

//!constructor zorunlu degil
  // constructor(props){
  //   super(props)
  //   this.state={count:0}
  // }
state={count:0}

increase= ()=>this.setState({count:this.state.count+1})

// increase = () =>this.setState({name:"felix"})


//!COMPONENT OLUŞTUKTAN SONRA GERCEKLEŞECEK EYLEM
componentDidMount(){
  console.log("class comp mounted")
  this.increase()
}


//!component güncelleginde gerceklesecek eylem
componentDidUpdate(prevProps,prevState){
  console.log("class comp updated")
  console.log(prevState.count)
  prevState.count !== this.state.count && console.log("class comp uptadate");
}


//!component öldügünde gercekleşecek eylem
 componentWillUnmount(){
   console.log("class comp will unmount bye bye")
 }

  render() {
     console.log("class comp render");
    return (
      <div className="class">
        <h2>Class Component</h2>
        <h3>Count:{this.state.count}</h3>
        {/* <h3>Name:{this.state.name}</h3> */}
        <button onClick={this.increase}>Increase</button>
        

      </div>
    )
  }
}

export default ClassComponent
