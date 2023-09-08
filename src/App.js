import React, { useState } from 'react';
import { useReducer } from 'react';

import { useEffect } from 'react';
import SearchIcon from "./search.svg";
import "./App.css";
import MovieCard from './MovieCard';
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const appid="5fabc516e3be986130c31c8d278f35ac";

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const initialState = {"coord":{"lon":75,"lat":19.5},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"base":"stations","main":{"temp":295.73,"feels_like":296.32,"temp_min":295.73,"temp_max":295.73,"pressure":1006,"humidity":87,"sea_level":1006,"grnd_level":948},"visibility":10000,"wind":{"speed":6.24,"deg":276,"gust":13.62},"clouds":{"all":100},"dt":1694179914,"sys":{"country":"IN","sunrise":1694133971,"sunset":1694178601},"timezone":19800,"id":1264418,"name":"","cod":200};
    const [state, updateState] = useReducer(
      (state, updates) => ({ ...state, ...updates }),
      initialState
    );
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}?q=${title}&appid=5fabc516e3be986130c31c8d278f35ac`);
        const data = await response.json();
        //console.log(data.Search);
        // obj=data;
        // setMovies(JSON.stringify(data));
        updateState(data);
        if(data.cod==="404"){
          updateState({name:""});
        }
        
        console.log(data.name);
    };
    useEffect(() => {
        searchMovies("");
    }, []);


    return (
    <div className="app">
      <h1>Weather App</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for City"
          onKeyUp={(e) => {searchMovies(searchTerm)}}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {
        state.name?.length >0 ? (
          <MovieCard movie={state} />
        ) : (
          <div className="empty">
          <h2>No data found</h2>
        </div>
        )
      }
    </div>
  );
}
export default App;