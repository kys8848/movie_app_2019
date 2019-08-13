import React from 'react';


class App extends React.Component {
  state = {
    isLoading:true,
    movies: []
  };

  componentDidMount(){
    setTimeout(() => {
      this.setState({ isLoading:false});
    }, 6000);
  }

  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? ":Loading..." : "we are ready"}</div>
  }
}


/*
function App() {
  return <div>안녕 오소고날!</div>;
    //<div className="App" />;
    
  
}*/

export default App;
