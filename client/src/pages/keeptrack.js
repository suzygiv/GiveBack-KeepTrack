import Axios from "axios";
import React, { useState, useEffect } from "react";
import KeepTrackCard from "../components/KeepTrackCard";
import axios from "axios";

//need seeds for this file to work

//api call will be here, but will be a get route
//need to use the react hook useState, which will be imported and destructured from React


// axios.post('/api/submissiondb/giveback', {



const KeepTrack = () => {
const [submissions, setSubmissions]=useState(null);
useEffect(()=>{
    axios.get('/api/submissiondb/keeptrack').then(response => {
        console.log(response);
        setSubmissions(response.data)
    });
}, []);
// 2. hook useEffect as soon as the page loads, API call to the back end (which is in submission.js line 13)
// 3. the get call to axios goes here, too
    return (
        <div>
            {submissions && submissions.map((submissions, index) => {
                return <KeepTrackCard {...submissions} key={index} />
            })}
        </div>
    );
}
export default KeepTrack;