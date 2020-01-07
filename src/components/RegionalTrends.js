import React from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'
//npm install chart.js --save

//fix graph to display correct data
//turn into percentages

const RegionalTrends = (props) => {

	const Div = styled.div`
		margin-left: 2%;
		width: 96%;
	` 

	const data = {
		labels: [2013, 2014, 2015, 2016, 2017, 2018],
		datasets: [
			{
				label: 'Regional Trends',
				fill: false,
				data: props.regionalTrends[0],
				borderColor: '#204354',
				backgroundColor: '#41d592'
			},
			{
				label: 'State Trends',
				fill: false,
				data: props.regionalTrends[1],
				borderColor: '#41d592',
				backgroundColor: '#204354'
			},
			{
				label: 'National Trends',
				fill: false,
				data: props.regionalTrends[2],
				borderColor: '#5b5aec',
				backgroundColor: '#204354'
			}

		]
	}


	const options = {
		showLines: true,
		legend: {
			labels: {
				fontColor: '#819bb1'
			}
		},
		scales: {
			yAxes: [
				{
					gridLines: {
						color: '#819bb1',
					},
					ticks: {
						fontColor: '#819bb1'
					}
				}
			],
			xAxes: [
				{
					gridLines: {
						color: '#819bb1'
					},
					ticks: {
						fontColor: '#819bb1'
					}
				}
			]
		}
	}

  return (
    <Div>
    	<Line data={data} options={options} width={15} height={5}/>
    </Div>
  )
}

export default RegionalTrends;
