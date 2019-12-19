const OccData = (state = [{}], action) => {
	switch(action.type) {
		case 'SETOCCDATA':
			return action.payload
		default:
			return state
	}
}

export default OccData