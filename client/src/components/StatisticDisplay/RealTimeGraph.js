import Chart from 'react-apexcharts'
import { useEffect, useState } from 'react'
import { sendRandomData } from '../../api'

const RealTimePeopleCountGraph = () => {
    const [data, setData] = useState([])
     // Fetch data from the fake API // todo: remove, this is a test
    const fetchFici = async () => {
        const response = await fetch('http://localhost:3000/data')
        console.log(response);
        response.json().then(data => {
            setData(data)
        })
    }

    // Call the fetchFici function every 2 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            fetchFici()
        }, 2000);
        return () => { clearInterval(timer) }
    }, [])

    useEffect(() => {
        const timer2 = setInterval(() => { sendRandomData() }, 4000);
        return () => { clearInterval(timer2) }
    }, [])

    return (
        <div>
            <Chart
                type="realtime"
                height='60%'
                width='100%'
                series={[
                    {
                        name: "Number of People",
                        data: data?.map(data => data.bid)
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
                        categories: data?.map(data => data.time),

                    },
                    yaxis: {
                        show: false,
                    }
                }}
            />
        </div>
    )
}

export default RealTimePeopleCountGraph;