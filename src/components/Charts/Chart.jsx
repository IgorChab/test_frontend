import React, {useState, useEffect, useContext} from 'react'
import Context from '../../context';
import Chart from "react-apexcharts";

export const CustomChart = () => {

    const {data, currency, darkTheme} = useContext(Context)

    const [state, setState] = useState({
        options: {
            xaxis: {
                type: 'datetime',
                categories: []
            },
            title: {
                text: data.title,
                align: 'left'
            },
            theme: {
                mode: darkTheme? 'dark' : 'light',
            },
            noData: {
                text: 'Loading...'
            }
        },
        series: [
            {
                name: "series-1",
                data: []
            }
        ]
    })

    useEffect(() => {

        let times = data && data['data_'+ currency].map(elm => {
            return elm.time
        })

        let values = data && data['data_'+ currency].map(elm => {
            return elm.value
        })

        setState({
            options: {
                xaxis: {
                    type: 'datetime',
                    categories: times
                },
                title: {
                    text: data.title,
                    align: 'left'
                },
                subtitle: {
                    text: 'Price Movements',
                    align: 'left'
                },
                yaxis: {
                    opposite: true
                },
                theme: {
                    mode: darkTheme? 'dark' : 'light',
                },
                noData: {
                    text: 'Loading...'
                }
            },
            series: [
                {
                    name: "Price",
                    data: values
                }
            ]
        })
    }, [data, currency, darkTheme])

    return (
        <Chart
            options={state.options}
            series={state.series}
            type="area"
            height='80%'
        />
    )
}
