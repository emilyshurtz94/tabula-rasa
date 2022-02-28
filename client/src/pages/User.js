import React, {useState} from 'react';
import Music from '../components/Music';
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
    <div>
        <Music />
        <Exercise />
        <Meditation />
        <SubstanceUse />
        <Goal />
        <Therapy />
    </div>
)
}
export default User