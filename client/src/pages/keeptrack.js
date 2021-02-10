import React from "react";
import KeepTrackCard from "../components/KeepTrackCard";
import submissions from ""
//need seeds for this file to work

const KeepTrack = () => {
    return (
        <div>
            {projects.map((submissions, index) => {
                return <KeepTrackCard {...submissions} key={index} />
            })}
        </div>
    );
}
export default KeepTrack;