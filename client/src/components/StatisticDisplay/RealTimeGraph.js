import Chart from 'react-apexcharts'

const RealTimePeopleCountGraph = ({}) => {
    const data = [];

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