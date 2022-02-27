import React from 'react';

export default function Daily() {


    return (
        <div className="container ">
            <div id="index-banner" className="parallax-container">
                <div className="section no-pad-bot">
                    <div className="container">
                        <br>
                        </br>
                        <h1 className="header center grey-text text-lighten-2">How are you today?</h1>
                        <div className="col">
                            <h5 className="header col s12 light">Pick the emoji that fits the best with how you're feeling today.</h5>
                            <form action="#">
                                <p>
                                    <label>
                                        <input name="upset" type="radio" value="1" />
                                        <span><i className="material-icons">mood_bad</i> Upset</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="mad" type="radio" value="2" />
                                        <span><i className="material-icons">sentiment_very_dissatisfied</i> Mad</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="sad" type="radio" value="3" />
                                        <span><i className="material-icons">sentiment_dissatisfied
                                        </i> Sad</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="not_great" type="radio" value="4" />
                                        <span><i className="material-icons">sentiment_neutral</i> Not Great</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="okay" type="radio" value="5" />
                                        <span><i className="material-icons">sentiment_satisfied</i> Okay</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="happy" type="radio" value="6" />
                                        <span><i className="material-icons">sentiment_very_satisfied</i> Happy</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="excited" type="radio" value="7" />
                                        <span><i className="material-icons">mood</i> Excited</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div className="row center">
                            <a id="daily-button" className="btn-large waves-effect waves-light grey lighten-1">Submit</a>
                        </div>
                        <br>
                        </br>
                        <div className="parallax"><img src="gradient-blue.jpg" alt="calming blue green colors"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}