import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { SearcgItems } from "./SearcgItems";
import { products } from "../../assets/data/data";


export const Hero = () => {
    const [value, setValue] = useState('');

    const onChannge = (e)=>{
        setValue(e.target.value)
    }

    const onSearch = (key)=>{
        setValue(key)}
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <label >
              Over <span>6500</span>Curated Design
            </label>
            {""}
            <br />
            <label>
              Resources, <span>Graphic & Website</span> Templates
            </label>
          </h1>
          <p>High-quality Design themes for personal or commercial use contains 6k+ items in 100 categopries.</p>
          <div className="search">
            <span>All Categories</span>
            <hr />
            <input type="text" placeholder="Search Products..." onChange={onChannge} value={value}/>
            <button onClick={()=>onSearch(value)}>
                <BiSearch  className="searhIcon heIcon"/>
            </button>

          </div>
          <SearcgItems product = {products} value ={value} onSearch = {onSearch}/>
            <p>Examples:Mockup, PSD, Theme Design, Image...</p>
        </div>
      </section>
    </>
  );
};
