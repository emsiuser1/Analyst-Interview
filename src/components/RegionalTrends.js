import React, {useEffect, useState} from 'react';
import { Line } from 'react-chartjs-2';
import styled from 'styled-components'
//npm install chart.js --save

const RegionalTrends = () => {

	const Div = styled.div`
		margin-left: 2%;
		width: 96%;
	`
	const [regional, setRegional] = useState([])
	const [state, setState] = useState([])
	const [nation, setNation] = useState([])

	useEffect(() => {
		fetch('http://127.0.0.1:5000/json-file')
			.then(res => res.json())
			.then(data => {
				setRegional(data['trend_comparison']['regional'])
				setState(data['trend_comparison']['state'])
				setNation(data['trend_comparison']['nation'])
			})
	}, [])



	const data = {
		labels: [2013, 2014, 2015, 2016, 2017, 2018],
		datasets: [
			{
				label: 'Regional Trends',
				fill: false,
				data: regional,
				borderColor: '#204354',
				backgroundColor: '#41d592'
			},
			{
				label: 'State Trends',
				fill: false,
				data: state,
				borderColor: '#41d592',
				backgroundColor: '#204354'
			},
			{
				label: 'National Trends',
				fill: false,
				data: nation,
				borderColor: 'red',
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
    	<Line data={data} options={options} width='15' height='5'/>
    </Div>
  )
}

export default RegionalTrends;
