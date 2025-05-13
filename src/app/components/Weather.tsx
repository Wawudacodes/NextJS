import React from 'react';

const Weather = ({ data }) => {
  console.log(data);

  return (
    <div className="relative flex flex-col justify-between max-w-[500px] w-full h-[80vh] m-auto p-10 text-gray-300 z-10 bg-black/30 rounded-lg">
      {/* City and Country */}
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold">
          {data.name}, {data.sys.country}
        </h2>
      </div>

      {/* Weather Icon and Main  */}
      <div className="flex flex-col items-center">
        <Image 
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="Weather Icon"
          width="100"
          height="100"
        />
        <p className="text-xl capitalize">{data.weather[0].main}</p>
      </div>

      {/* Temperature */}
      <p className="text-5xl text-center mt-4">
        {data.main.temp.toFixed(0)}&#176;C
      </p>

      {/* Additional Weather Info */}
      <div className="mt-6 space-y-2 text-center text-lg">
        <p>Feels Like: {data.main.feels_like.toFixed(0)}&#176;C</p>
        <p>Humidity: {data.main.humidity}%</p>
        <p>Wind Speed: {data.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Weather;
