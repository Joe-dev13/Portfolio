import React from 'react'


const Projects = () =>{
    return (
        <div id = "section_2" className=" container">

            <h3 class = "center">Featured Projects</h3>

            <div class="row">
                <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                    <img src = "https://images.thestar.com/tXna-86LkO7aVrWKSh6ESUqkbP4=/1200x800/smart/filters:cb(2700061000)/https://www.thestar.com/content/dam/thestar/entertainment/2018/05/09/toronto-tattoo-artist-hopes-black-panther-pieces-instil-pride-dispel-myths/_1_blackpanthertattoos_2.jpg" alt = "Lituation"/>
                    <a href="get-inked.netlify.app"class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">arrow_forward</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Get Inked:</span>
                        <p>This website is desinged to provided a tattoo locating service, with the help of Google apis.
                            This website was inspired by the lack of a centerlaized tattoo shop locator. It is designed to help the customer find a tattoo idea as well as a shop to have the tattoo preformed.</p>
                        <h6>Technologies:</h6>
                        <ul>
                            <li>Google Maps API</li>
                            <li>Google Places API</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Firebase</li>
                        </ul>
                    </div>
                </div>
                </div>
            

                
                <div class="col s12 m6">
                <div class="card">
                    <div class="card-image">
                    <img src = "https://images.theconversation.com/files/224720/original/file-20180625-19382-16m5yrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip" alt = "chat room"/>
                    <a href=" https://sleepy-harbor-60617.herokuapp.com/" class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">arrow_forward</i></a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Pig Skin Bets:</span>
                        <p>Pig Skin Bets is an online sportsbook for people that are looking to make their Sundays a little more interesting.</p>
                        <h6>Technologies:</h6>
                        <ul>
                            <li>EJS</li>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MongoDB</li>
                            <li>Passport.js</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>


            <div class="row">
                <div class="col s12 m12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Best-Paired</span>
                            <p>
                                An applaction that allows you to pair drinks with food to help improve dinner experinces.
                            </p>
                            <p>Technologies: React, Redux, Node </p>
                        </div>
                        <div class="card-action">
                        <a class="waves-effect waves-light btn green" href = "https://github.com/Joe-dev13/best-paired"><i class="material-icons left">developer_mode</i>See Code</a>
                            
                        </div>
                    </div>
                </div>
            </div>


            <div class="row">
                <div class="col s12 m12">
                    <div class="card">
                        <div class="card-content">
                            <span class="card-title">Certified</span>
                            <p>In a world where we are clicking, swiping and liking is our normal and #hashtagging, mentions, and certified accounts deterimine popularity. Its also important to understand that technology is not only for our entertainment but for changing 
                                the way we view life and interact with it.</p>
                            <p>Technologies: React, Redux, Node, Express, MongoDB, React Bootstrap</p>
                        </div>
                        <div class="card-action">
                        <a class="waves-effect waves-light btn green" href = "https://github.com/MatthewLee4/certified "><i class="material-icons left">developer_mode</i>See Code</a>
                            
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <hr/>
            
        </div>
    )
}

export default Projects