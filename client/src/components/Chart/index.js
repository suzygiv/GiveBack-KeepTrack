import React, {useRef, useEffect, useState} from "react";
import Chart from 'chart.js';
import axios from 'axios';

function KeepTrackChart(props) {
    const [data, setData]=useState([])
    const [labels, setLabels]=useState([])
    useEffect(()=>{
    axios.get('/api/submissiondb/chartData')
    .then(response => {
        console.log(response)
        setData(response.data.map(record=>record.totalAmount))
        setLabels(response.data.map(record=>record.category))
    })
    }, [])
    const ctx = useRef(null);
        if (ctx && ctx.current) {
            new Chart(ctx.current, {
                type: 'pie',
                data: {
                    datasets: [{
                        data,
                        backgroundColor: [
                            'rgba(97, 218, 251)',
                            'rgba(200, 239, 250)',
                            'rgba(27, 157, 194)',
                            'rgba(38, 70, 79)',
                            'rgba(0, 199, 255)'

                    ], 
                    }],
                    labels   
                    },
                
                });
        }
    return(
<div 
><canvas ref={ctx}/>
</div>
)
}


export default KeepTrackChart