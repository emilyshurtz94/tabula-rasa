import React from 'react';

export default function Daily() {


    return (
        <div class="container ">
            <div id="index-banner" class="parallax-container">
                <div class="section no-pad-bot">
                    <div class="container">
                        <br>
                        </br>
                        <h1 class="header center grey-text text-lighten-2">How are you today?</h1>
                        <div class="col">
                            <h5 class="header col s12 light">Pick the emoji that fits the best with how you're feeling today.</h5>
                            <form action="#">
                                <p>
                                    <label>
                                        <input name="upset" type="radio" />
                                        <span><i class="material-icons">mood_bad</i> Upset</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="mad" type="radio" />
                                        <span><i class="material-icons">sentiment_very_dissatisfied</i> Mad</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="sad" type="radio" />
                                        <span><i class="material-icons">sentiment_dissatisfied
                                        </i> Sad</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="not_great" type="radio" />
                                        <span><i class="material-icons">sentiment_neutral</i> Not Great</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="okay" type="radio" />
                                        <span><i class="material-icons">sentiment_satisfied</i> Okay</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="happy" type="radio" />
                                        <span><i class="material-icons">sentiment_very_satisfied</i> Happy</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="excited" type="radio" />
                                        <span><i class="material-icons">mood</i> Excited</span>
                                    </label>
                                </p>
                            </form>
                        </div>
                        <div class="row center">
                            <a id="daily-button" class="btn-large waves-effect waves-light grey lighten-1">Submit</a>
                        </div>
                        <br>
                        </br>
                        <div class="parallax"><img src="gradient-blue.jpg" alt="calming blue green colors"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}