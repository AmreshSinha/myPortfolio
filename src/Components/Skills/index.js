import React from "react";
import BootstrapIcon from "../../bootstrap.svg";

const Skills = () => {
    return (
        <div className="skills-wrapper">
            <div className="skills">
                <div className="skills-item skills-text">
                    <h2 className="skills-heading gradient">Skills</h2>
                    <p className="skills-para">I love the way technology is changing everyday (so do I am changin' too!).
                    <br /><br />
                    I have been working in Python, C, C++, Html, CSS, JS, Node, React and Express from some time now.
                    <br /><br />
                    Currently learning Rust <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Original_Ferris.svg" /> , Svelte <img className="icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg" /> and Appwrite <img className="icon" src="https://www.vectorlogo.zone/logos/appwriteio/appwriteio-icon.svg" /> .
                    <br /><br />
                    Apart from above, I have a lot of affection to DevOps too!
                    <br /><br />
                    I love helping others with their Server, Containers, or any other DevOps related help.<br /><br />Feel free to ping me anytime ;) I will be more than happy!</p>
                </div>
                <div className="skills-item skills-info">
                    <div className="skills-info-languages">
                        <h2 className="skills-languages">Languages</h2>
                        <div className="skills-languages-list">
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            </div>
                            <div className="language-card">
                                <img className="language-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            </div>
                        </div>
                    </div>
                    <div className="skills-info-framworks">
                        <h2 className="skills-frameworks">Frameworks and Libraries</h2>
                        <div className="skills-frameworks-list">
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            </div>
                            <div className="framework-card">
                                <img className="express framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                            </div>
                            <div className="framework-card">
                                <img className="flask framework-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg" />
                            </div>
                            <div className="framework-card">
                                <img className="framework-card-img" src="https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg" />
                            </div>
                            <div className="framework-card">
                                <img className="bootstrap framework-card-img" src={BootstrapIcon} />
                            </div>
                        </div>
                    </div>
                    <div className="skills-info-technologies">
                        <h2 className="skills-technologies">Other</h2>
                        <div className="skills-other-list">
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
                            </div>
                            <div className="other-card">
                                <img className="heroku other-card-img" src="https://brand.heroku.com/static/media/heroku-logo-stroke-black.bc730a06.svg" />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                            </div>
                            <div className="other-card">
                                <img className="other-card-img" src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills;