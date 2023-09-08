import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="container">
                <div className='movie'>
                    <div>
                        <p>{movie.name}</p>
                    </div>
                    <div>
                        {getWeatherIcon(movie.weather[0].main)}
                        {/* <img src='data:image/png;base64,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'/> */}
                        {/* <img src='https://img.freepik.com/premium-vector/sun-space-sun-with-crown-star-flat-style-vector-illustration_787461-767.jpg' /> */}
                    
                    </div>
                    <div>
                        {/* <span>{movie.name}</span> */}
                        <h3>Temp: {movie.main.temp} </h3>
                        <h3>Wheather: {movie.weather[0].description}</h3>
                        <h3>Wind Speed: {movie.wind.speed} M/s</h3>
                    </div>
                </div>
            </div>
    )
}

const getWeatherIcon = (description) => {
    switch (description) {
      case "Clouds":
        return <img src='https://cdn.icon-icons.com/icons2/2527/PNG/512/cloudy_weather_icon_151782.png'/>;
      case "Mist":
        return <img src='https://cdn-icons-png.flaticon.com/512/4005/4005817.png'/>;
        default:
        return <img src='https://img.freepik.com/premium-vector/sun-space-sun-with-crown-star-flat-style-vector-illustration_787461-767.jpg' />;
    }
  };

export default MovieCard