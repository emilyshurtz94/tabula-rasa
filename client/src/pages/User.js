import React, {useState} from 'react';
import Music from '../components/Music';
import Exercise from '../components/Exercise';
import Meditation from '../components/Meditation';
import SubstanceUse from '../components/SubstanceUse';
import DailyReminder from '../components/DailyReminder';
import Goal from '../components/Goal';
import Therapy from '../components/Therapy';
import {QUERY_USER} from '../utils/queries';
import {useQuery} from '@apollo/client';


function User() {
const {loading, data} = useQuery(QUERY_USER)
console.log(data)

return (
    <div></div>
)
}
export default User