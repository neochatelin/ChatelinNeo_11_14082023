import React from "react";
import ImgComponent from "../components/ImgComponent";
import Dropdowns from "../components/Dropdowns";

const APropos = ()=>{
    return(
        <main>
            <div className="App-content">
                <ImgComponent img="/assets/img_aPropos.png" text=""/>
                <Dropdowns title="Fiabilité" content={["Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."]}/>
                <Dropdowns title="Respect" content={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}/>
                <Dropdowns title="Service" content={["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."]}/>
                <Dropdowns title="Sécurité" content={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}/>
            </div>
        </main>
    );
}

export default APropos;