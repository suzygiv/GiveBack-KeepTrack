import React, {useRef} from "react";
import Chart from 'chart.js';

// larger issue-- need to total by category
// use the chart.js documentation to customize

function KeepTrackChart(props) {
    const ctx = useRef(null);
        if (ctx && ctx.current) {
            new Chart(ctx.current, {
                type: 'pie',
                data: {
                    datasets: [{
                        data: [10, 20, 30]
                    }],
                
                    // These labels appear in the legend and in the tooltips when hovering different arcs
                    labels: [
                        'Red',
                        'Yellow',
                        'Blue'
                    ]
                },
            });
        }
    return(
<canvas ref={ctx}/>
)
}


export default KeepTrackChart