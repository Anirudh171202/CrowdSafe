import { useContext, useEffect } from 'react';
import Chart from 'react-apexcharts'
import DensityContext from '../../DensityContext';

const RealTimePeopleCountGraph = () => {
    const [density, setDensity] = useContext(DensityContext);
    return (
        <div>
            <Chart
                type="realtime"
                height='60%'
                width='100%'
                series={[
                    {
                        name: "Number of People in Frame",
                        data: density.count
                    }
                ]}

                options={{
                    chart: {
                        toolbar: {
                            show: false
                        },

                    },
                    colors: ['#000333'],
                    stroke: { width: 1, curve: 'smooth' },
                    dataLabels: { enabled: false },
                    xaxis: {
                        // categories: density.time,
                        type: 'numeric'                    },
                    // yaxis: {
                    //     // categories: density.count,
                        
                    // }
                }}
            />
        </div>
    )
}

export default RealTimePeopleCountGraph;