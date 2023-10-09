import React, { useEffect, useState } from "react";
import ImgComponent from "../components/ImgComponent";
import Card from "../components/Card";
import API from "../api/api";

const Home = ()=>{
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(()=>{
        let loadData = ()=>{
            API.getAll().then((res)=>{
                setData(res);
                setIsLoaded(true);
            });
        }
        loadData();
    }, [])
    
    return(
            <main>
                {isLoaded ? 
                    <div className="App-content Home">
                        <ImgComponent img="/assets/img_home.png" text="Chez vous, partout et ailleurs"/>
                        <div className="CardsContainer">
                            {data.map (elem => (
                                <Card title={elem.title} id={elem.id} img={elem.cover} key={elem.id}/>
                            ))}
                        </div>
                    </div>
                    : <></>}
            </main>
        );
    }

export default Home;