import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setOccData } from '../actions'
import { getOccData} from '../reducers'

const EarningsData = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		fetch('http://127.0.0.1:5000/occupational-earnings')
			.then(res => res.json())
			.then(data => {
				dispatch(setOccData(data))
			})
	}, [])

  return (
    <div>
    </div>
  )
}

export default EarningsData;
