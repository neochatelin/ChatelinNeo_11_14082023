import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useParams } from "react-router-dom";
import Dropdowns from "../components/Dropdowns";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Lightbox from "../components/Lightbox";

const FicheLogement = ()=>{
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();

    useEffect( ()=>{
        let loadData = ()=>{
            API.getById(id).then((res)=>{
                setData(res);
                setIsLoaded(true);
            });
        }
        loadData();
    }, [id])

    if(isLoaded){
        return(
            <main className="App-content">
                <Lightbox data={data.pictures}/>
                <div className="info">
                    <div className="content">
                        <div>
                            <p className="title">{data.title}</p>
                            <p className="location">{data.location}</p>
                            <ul className="tags">
                                {
                                    data.tags.map((e)=>(<li key={e}>{e}</li>))
                                }
                            </ul>
                        </div>
                        <div>
                            <Host name={data.host.name} picture={data.host.picture}/>
                            <Rating rate={data.rating}/>
                        </div>
                    </div>
                    <div>
                        <Dropdowns title="Description" isList={false} content={data.description}/>
                        <Dropdowns title="Équipements" isList={true} content={data.equipments}/>
                    </div>
                </div>
            </main>
        );
    }else{
        return(
            <p>is Loading ...</p>
        )
    }
}

export default FicheLogement;