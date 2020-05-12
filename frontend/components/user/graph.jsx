import React from 'react';
import { Link } from 'react-router-dom';

import { Bar } from 'react-chartjs-2';

class OptionsChart extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        // debugger
        if (this.props.options.length < 2) {
            // debugger
            return <span>Options not loaded!</span>;
        }

        return (
            <div className='graph-js'>
                <Bar
                    fontSize='12'
                    data={
                        {
                            labels: [
                                this.props.options[0].title + ' (id:' + this.props.options[0].id * 23 + ')',
                                this.props.options[1].title + '  (id:' + this.props.options[1].id * 23 +')'
                            ],
                            datasets: [
                                {
                                    label: 'no of votes',
                                    data: [
                                        this.props.options[0].count,
                                        this.props.options[1].count
                                    ],
                                    backgroundColor: '#007acc',
                                }
                            ],
                        }
                    }
                    options={{
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    fontSize: 14
                                }
                            }],
                            xAxes: [{
                                ticks: {
                                    fontSize: 18
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: this.props.pollTitle,
                            fontSize: 22
                        },
                        legend: {
                            labels: {
                                fontSize: 14
                            },
                            defa: 30
                        },
                    }}

                />
            </div>
        )
    }
}

export default OptionsChart;