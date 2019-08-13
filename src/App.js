import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLoading:true,
    movies: []
  };

  getMovies = async () =>{
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  // getMovie fucnsiton에게 시간이 조금 필요하고 그걸 기다려 달라고 말해야함(원전히 불러드리기 까지)
  }


componentDidMount(){ //async를 붙이는 이유 : componentDidMount가 완전히 동작히 끝날때 까지 약간 시간이 거릴 수 있다고 말해야함 그걸해줌
    this.getMovies(); // 이런식으로 하면 컴포넌트가 마운트 되면 겟 무비를 호출함
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
