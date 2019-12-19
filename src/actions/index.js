export const setOccData = (res) => {
	return {
		type: 'SETOCCDATA',
		payload: res
	}
}

export const setJsonData = (res) => {
	return {
		type: 'SETJSONDATA',
		payload: res
	}
}