import {combineReducers} from 'redux';

import OccData from './OccupationalEarnings'
import JsonData from './JsonData'

const allReducers = combineReducers({
	OccData: OccData,
	JsonData: JsonData
})

export default allReducers

export const getOccData = state => state.OccData
export const getJsonData = state => state.JsonData
