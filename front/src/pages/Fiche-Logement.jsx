import React, { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate, useParams } from "react-router-dom";
import Dropdowns from "../components/Dropdowns";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Lightbox from "../components/Lightbox";

const FicheLogement = ()=>{
    const [data, setData] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect( ()=>{
        let loadData = ()=>{
            API.getById(id).then((res)=>{
                if(res === "data not found")
                    navigate("/404")
                setData(res);
                setIsLoaded(true);
            });
        }
        setTimeout(()=>{loadData();}, 1000)
        
    }, [id, navigate])

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
            <main className="App-content">
                <div className="lightbox">
                    <div className="gray lightboxImg"></div>
                </div>
                <div className="info">
                    <div className="content">
                        <div>
                            <p className="title">{"Titre"}</p>
                            <p className="location">{"location"}</p>
                            <ul className="tags">
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div>
                            <div className="Host-card">
                                <div className="gray hostImg"></div>
                                <div>
                                    <p>Nom</p>
                                    <p>Prenom</p>
                                </div>
                            </div>
                            <div className="stars">
                                <div className="empty-star">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3"/>
                                    </svg>
                                </div>
                                <div className="empty-star">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3"/>
                                    </svg>
                                </div>
                                <div className="empty-star">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3"/>
                                    </svg>
                                </div>
                                <div className="empty-star">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3"/>
                                    </svg>
                                </div>
                                <div className="empty-star">
                                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <div className={"Dropdowns close"} >
                            <div className="Dropdown-title">
                                <p className="title">Description</p>
                                <p className="arrow">{'>'}</p>
                            </div>
                        </div>
                        <div className={"Dropdowns close"} >
                            <div className="Dropdown-title">
                                <p className="title">Équipements</p>
                                <p className="arrow">{'>'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default FicheLogement;