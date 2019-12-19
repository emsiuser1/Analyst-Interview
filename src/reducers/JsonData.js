const JsonData = (state = [{}], action) => {
	switch(action.type) {
		case 'SETJSONDATA':
			return action.payload
		default:
			return state
	}
}

export default JsonData