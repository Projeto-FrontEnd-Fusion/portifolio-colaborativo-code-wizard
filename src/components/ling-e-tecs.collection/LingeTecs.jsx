import CssSvg from "./lingetecsSVGs/CssSvg";
import HtmlSvg from "./lingetecsSVGs/HtmlSvg";
import JsSvg from "./lingetecsSVGs/JsSvg";
import RcSvg from "./lingetecsSVGs/RcSvg";
import GitSvg from "./lingetecsSVGs/GitSvg";
import GitHSvg from "./lingetecsSVGs/GitHSvg";
import VsSvg from "./lingetecsSVGs/VsSvg";
import TwSvg from "./lingetecsSVGs/TwSvg"

function LingeTecs() {
    return (
        <div className="bg-dark-color">
            <div className="container">
                <h1>Linguagens e Tecnológias</h1>
                <div className="container grid grid-cols-2">
                    <HtmlSvg/>  
                    <CssSvg/>
                    <JsSvg/>   
                    <RcSvg/>
                    <GitSvg/>
                    <GitHSvg/> 
                    <VsSvg/>
                    <TwSvg/>        

                </div>

            </div>
        </div>
    );
};

export default LingeTecs;