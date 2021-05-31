import './App.css';
import React from 'react'
import Movie from "./components/movie/Movie";
import Header from "./components/header/Header";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MovieDetail from "./components/movieDetail/MovieDetail";


function App() {
    return (
        <div>
            <Router>
            <Header/>

                <Switch>
                    <Route exact path={"/movie"} render={()=>{
                        return <Movie/>
                    }}/>
                    <Route exact path={"/movie/:id"} render={(props)=>{
                        return <MovieDetail item={props}/>
                    }}/>


                </Switch>

            </Router>
        </div>
    );
}

export default App;
