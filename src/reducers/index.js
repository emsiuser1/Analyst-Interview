import {combineReducers} from 'redux';

import OccData from './OccupationalEarnings'

const allReducers = combineReducers({
	OccData: OccData
})

export default allReducers

export const getOccData = state => state.OccData
