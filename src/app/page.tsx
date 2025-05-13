"use client";

import Head from "next/head";
import Image from "next/image";
import axios from "axios";
import {useState} from "react";
import { BsSearch } from "react-icons/bs"; 
import Weather from "@/app/components/Weather";
import DuallBall from "@public/DualBall.gif";
import Infinity from "@public/Infinity.gif";

export default function Home() {

  const [city, setCity]=useState('');
  const [weather, setWeather]=useState({});
  const [loading, setLoading]=useState(false);
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data);
      //console.log(response.data)
    });
    setCity('')
    setLoading(false)
  
  };
  
  if(loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-black/80">
        <img src="/Infinity.gif" alt="Loading..." width={100} height={100} />
      </div>
    );
  } else {

  return (
    <div>
      <Head>
        <title> Weather-App </title>
      </Head>

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/40 z-[1] ">
       <Image 
          src={"https://plus.unsplash.com/premium_photo-1682403137176-2e4082c33331?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2VhdGhlciUyMGNpdHl8ZW58MHx8MHx8fDA%3D"} 
          alt={"weather-bg"}
          layout="fill" 
          className="object-cover"
          />
      </div>

      {/* Search Form */}
      <div className="relative flex justify-between item-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
        <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-400 text-white rounded-2xl">
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder:text-gray-300"
              type="text"
              placeholder="Search City"
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Weathert Display */}
      <div className="mt-6">

        {weather.main && <Weather data={weather} />}

      </div>
      

    </div> 
  );
}
}

  