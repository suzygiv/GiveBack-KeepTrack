import React, { useState, useEffect } from "react";
import KeepTrackCard from "../components/KeepTrackCard";
import axios from "axios";
import KeepTrackChart from "../components/Chart";

const KeepTrack = () => {
const [submissions, setSubmissions]=useState(null);
useEffect(()=>{
    axios.get('/api/submissiondb/keeptrack').then(response => {
        console.log(response);
        setSubmissions(response.data)
    });
}, []);

    return (
        <div>
            <KeepTrackChart/>
            <div>
            {submissions && submissions.map((submissions, index) => {
                return <KeepTrackCard {...submissions} key={index} />
            })}
            </div>
        </div>
    );
}
export default KeepTrack;