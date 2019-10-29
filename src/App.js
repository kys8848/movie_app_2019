import React from 'react';
import axios from 'axios';
import Movie from './Movie';
import "./App.css";


class App extends React.Component {
  state = {
    isLoading:true,
    movies: []
  };

  getMovies = async () =>{
    const {data :
      { data :
         { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
  // getMovie fucnsiton에게 시간이 조금 필요하고 그걸 기다려 달라고 말해야함(원전히 불러드리기 까지)
  //console.log(movies)//ES6기법에 따라 나옴
    this.setState({movies, isLoading: false } );
}


componentDidMount(){ //async를 붙이는 이유 : componentDidMount가 완전히 동작히 끝날때 까지 약간 시간이 거릴 수 있다고 말해야함 그걸해줌
    this.getMovies(); // 이런식으로 하면 컴포넌트가 마운트 되면 겟 무비를 호출함
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
    <section className="container">
      {isLoading 
      ? <div className="loader">
          <span className="loader_text">Loading..</span>
        </div>  
      : (
        
        <div className="movies">
         {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
          ))}
        </div> 
      )}
    </section>
    );
  }
}


/*
function App() {
  return <div>안녕 오소고날!</div>;
    //<div className="App" />;
    
  
}*/

export default App;
