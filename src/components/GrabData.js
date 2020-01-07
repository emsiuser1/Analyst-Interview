import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setOccData, setJsonData } from '../actions'

const EarningsData = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		fetch('http://127.0.0.1:5000/occupational-earnings')
			.then(res => res.json())
			.then(data => {
				dispatch(setOccData(data))
			})
		fetch('http://127.0.0.1:5000/json-file')
			.then(res => res.json())
			.then(data => {
				dispatch(setJsonData(data))
			})
	}, [dispatch])

  return (
    <div>
    </div>
  )
}

export default EarningsData;
