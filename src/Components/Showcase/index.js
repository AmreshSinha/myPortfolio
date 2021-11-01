import React from "react";

const Showcase = () => {
    return (
        <div className="showcase-wrapper">
            {/* <h2 className="showcase-heading gradient">Showcase</h2> */}
            <div className="showcase-wrapper-flex">
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Standalone Project</div>
                        <div className="heading">Spotify PromoCards API</div>
                        <div className="project-dates">Sep 2021 - Present</div>
                        <div className="tags">
                            <p className="tag">Open-Source</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">Maintainer of Unofficial Spotify Cards API.</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://spotify-cards.up.railway.app/" rel="noreferrer" target="_blank">https://spotify-cards.up.railway.app/</a>
                                <br /><br />
                                <a className="project-link-style" href="https://github.com/AmreshSinha/Spotify-Cards-API" rel="noreferrer" target="_blank">https://github.com/AmreshSinha/Spotify-Cards-API</a>
                            </p>
                        </div>
                    </div>
                    <div className="showcase-image">
                        <img src="https://spotify-cards.up.railway.app/api?id=05iALOptaNoV3EmXnxz1IJ&color=A0C3D2" alt="Spotify Cards API" />
                    </div>
                </div>
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Standalone Project</div>
                        <div className="heading">Fake Speedtest Generator</div>
                        <div className="project-dates">Sep 2018 - Present</div>
                        <div className="tags">
                            <p className="tag">Open-Source</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">Project initially build to spoof friends.<br />Corporate peeps stay away pls!</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://fakespeedtest.000webhostapp.com/" rel="noreferrer" target="_blank">Live Down</a>
                                <br /><br />
                                <a className="project-link-style" href="https://github.com/AmreshSinha/Fake-SpeedTest-Generator" rel="noreferrer" target="_blank">https://git.io/JJ0MH</a>
                            </p>
                        </div>
                    </div>
                    <div className="showcase-image">
                        <img src="https://www.speedtest.net/result/7656618580.png" alt="Spotify Cards API" />
                    </div>
                </div>
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Standalone Project</div>
                        <div className="heading">glassFolio</div>
                        <div className="project-dates">Sep 2021 - Present</div>
                        <div className="tags">
                            <p className="tag">Open-Source</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">Fully Glassmorphic UI based Portfolio for Devs.</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://amreshsinha.github.io/glassFolio/" rel="noreferrer" target="_blank">https://amreshsinha.github.io/glassFolio/</a>
                                <br /><br />
                                <a className="project-link-style" href="https://github.com/AmreshSinha/glassFolio" rel="noreferrer" target="_blank">https://github.com/AmreshSinha/glassFolio</a>
                            </p>
                        </div>
                    </div>
                    <div className="showcase-image">
                        <img src="https://raw.githubusercontent.com/AmreshSinha/glassFolio/main/assets/website-screen1.png" alt="Spotify Cards API" />
                    </div>
                </div>
                <div className="showcase-card">
                    <div className="showcase-info">
                        <div className="role">Standalone Project</div>
                        <div className="heading">Covid19 API</div>
                        <div className="project-dates">Aug 2021 - Present</div>
                        <div className="tags">
                            <p className="tag">Open-Source</p>
                        </div>
                        <div className="summary">
                            <p className="project-headline">API built to fetch Covid19 stats of World and Countries.</p>
                            <p className="project-link">
                                <a className="project-link-style" href="https://github.com/AmreshSinha/Covid19-API" rel="noreferrer" target="_blank">https://github.com/AmreshSinha/Covid19-API</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Showcase;