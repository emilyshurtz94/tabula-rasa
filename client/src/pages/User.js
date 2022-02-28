import React, {useState} from 'react';
import Music from '../components/Music';
import Meals from '../components/Meals'
import Exercise from '../components/Exercise';
import Meditation from '../components/Meditation';
import SubstanceUse from '../components/SubstanceUse';
import Goal from '../components/Goal';
import Therapy from '../components/Therapy';
import {QUERY_USER} from '../utils/queries';
import {useQuery} from '@apollo/client';


function User() {
const {loading, data} = useQuery(QUERY_USER)
console.log(data)

return (
<<<<<<< HEAD
    <div className="conatiner">
        <div className="row">
        {
            data?.me.settings.music && <Music />
        }
        {
            data?.me.settings.meals && <Meals />
        }
        {
            data?.me.settings.exercise && <Exercise />
        }
        {
            data?.me.settings.meditation && <Meditation />
        }
        {
            data?.me.settings.therapy && <Therapy />
        }
        {
            data?.me.settings.goal && <Goal />
        }
        {
            data?.me.settings.substanceUse && <SubstanceUse />
        }
        </div>
    </div>
=======
    <div></div>
>>>>>>> f6c4a80502e9a64dbd0d23103f4000d511767a54
)
}
export default User