import React,{useEstate,useEffect} from "react";
import Fauna from '../assets/images/Fauna.png'
import BeegSmoll from '../assets/images/BeegSmoll.jpg'
import Sana from '../assets/images/Sanna.png'
import Mumei from '../assets/images/Mumei.png'
import Bae from '../assets/images/Bae.png'
import Kronii from '../assets/images/Krony.png'
import Irys from '../assets/images/Irys.png'
import CouncilFragmets from "./Fragments/CouncilFragmets";
import TitleFragments from "./Fragments/TitleFragments";
const myStyle={
    backgroundImage: `url(${BeegSmoll})`,
    backgroundSize:"750px",
    backgroundRepeat: 'repeat',
};
// Se utilizan 2 Subconponetes el rpimero asociado a las cartas es CouncilFragments y el segundo asociado con el titulo de la pagina TitleFragments
const HoloCouncil = () =>{
    return(
        <div style={myStyle}>
            <TitleFragments tit={"Smol Council + Hope"}></TitleFragments>
            <div className="row"style={{marginLeft:"100px"}}>
                <div className="col" >
                    <CouncilFragmets
                        titulo={"Ceres Fauna"}
                        imagen={Fauna}
                        textoDesctipcion={"Miembro de Council y guardiana de la naturaleza, el seugundo concepto creado por los dioses."}
                        chaneLink={"https://www.youtube.com/channel/UCO_aKKYxn4tvrqPjcTzZ6EQ"}
                        twettLink={"https://twitter.com/ceresfauna"}>
                    </CouncilFragmets>
                </div>
                <div className="col">
                    <CouncilFragmets titulo={"Tsukumo Sana"}
                                     imagen={Sana}
                                     textoDesctipcion={"Miembro de Council y oradora del espacio, el primer concepto creado por los dioses"}
                                     twettLink={"https://twitter.com/tsukumosana"}
                                     chaneLink={"https://www.youtube.com/channel/UCsUj0dszADCGbF3gNrQEuSQ"}>
                    </CouncilFragmets>
                </div>
                <div className="col">
                    <CouncilFragmets titulo={"Nanashi Mumei"}
                                     imagen={Mumei}
                                     textoDesctipcion={"Miembro de Council y guardiana de la civilización, concepto creado por la humanidad."}
                                     twettLink={"https://twitter.com/nanashimumei_en"}
                                     chaneLink={"https://www.youtube.com/channel/UC3n5uGu18FoCy23ggWWp8tA"}>
                    </CouncilFragmets>
                </div>

            </div>
            <br/>
            <div className="row" style={{marginLeft:"100px"}} >
                <div className="col">
                    <CouncilFragmets titulo={"Hakos Baelz"}
                                     imagen={Bae}
                                     textoDesctipcion={"Miembro de Council y el concepto del caos mismo, nacido del mundo"}
                                     twettLink={"https://twitter.com/hakosbaelz"}
                                     chaneLink={"https://www.youtube.com/channel/UCgmPnx-EEeOrZSg5Tiw7ZRQ"}>
                    </CouncilFragmets>
                </div>
                <div className="col">
                    <CouncilFragmets titulo={"Ouro Kronii"}
                                 imagen={Kronii}
                                 textoDesctipcion={"Miembro de Council y guardiana del tiempo el tercer concepto creado por los dioces "}
                                 twettLink={"https://twitter.com/ourokronii"}
                                 chaneLink={"https://www.youtube.com/channel/UCmbs8T6MWqUHP1tIQvSgKrg"}>
                    </CouncilFragmets>
                </div>
                <div className="col">
                    <CouncilFragmets titulo={"IRyS"}
                                 imagen={Irys}
                                 textoDesctipcion={"Una nephilin que decidio despertar en nuestra era llena de desesperacion para traer esperanza con su musica."}
                                 twettLink={"https://twitter.com/irys_en"}
                                 chaneLink={"https://www.youtube.com/channel/UC8rcEBzJSleTkf_-agPM20g"}>
                    </CouncilFragmets>
                </div>


            </div>

        </div>
    )

}
export default HoloCouncil