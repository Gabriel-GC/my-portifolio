import './styles.css';

import Blur from "../../assets/icons/blur.png";
import HTML from "../../assets/icons/skils/html-5.png";
import CSS from "../../assets/icons/skils/css-3.png";
import React from "../../assets/icons/skils/react.png";
import VS from "../../assets/icons/skils/vscode.png";
import JS from "../../assets/icons/skils/js.png";
import Node from "../../assets/icons/skils/node-js.png";
import Ps from "../../assets/icons/skils/ps.png";
import Figma from "../../assets/icons/skils/figma.png";
import Git from "../../assets/icons/skils/git.png";

export const Skills = () => {
    return (
        <>
            <div className="content">
                <div className="txt">
                    <h2>Focus and skills</h2>
                    <p>I am very interested and easy to learn, I consider myself very applied in problem solving. I think that sharing solutions generates inspiration, I want to have the opportunity to grow and, at the opportunity, teach these steps to beginners, as I was instructed.</p>
                </div>
                <div className="asset">
                    <img className='blur' src={Blur} alt="Imagem gradiente branco" />
                    <div className="techs">
                        <div className="tech">
                            <img src={HTML} alt="Logo HTML" />
                        </div>
                        <div className="tech">
                            <img src={CSS} alt="Logo CSS" />
                        </div>
                        <div className="tech">
                            <img src={React} alt="Logo React" />
                        </div>
                        <div className="tech">
                            <img src={VS} alt="Logo Visual Studio Code " />
                        </div>
                        <div className="tech">
                            <img src={JS} alt="Logo Java" />
                        </div>
                        <div className="tech">
                            <img src={Node} alt="Logo Node js" />
                        </div>
                        <div className="tech">
                            <img src={Ps} alt="Logo Photoshop" />
                        </div>
                        <div className="tech">
                            <img src={Figma} alt="Logo Figma" />
                        </div>
                        <div className="tech">
                            <img src={Git} alt="Logo Github" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}