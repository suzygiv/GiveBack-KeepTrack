import React, {useRef, useEffect, useState} from "react";
import Chart from 'chart.js';
import axios from 'axios';

// larger issue-- need to total by category
// use the chart.js documentation to customize

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
                        data
                    }],
                
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels
                    
                },
            });
        }
    return(
<canvas ref={ctx}/>
)
}


export default KeepTrackChart