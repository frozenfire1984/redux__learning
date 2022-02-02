import { AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT } from './actions'

const defaultState = {
	email: '',
	passrowd: '',
}

export const authReduser = (state = defaultState, action) => {
	switch (action) {
		case AUTH_CHANGE_EMAIL_TEXT:
			return {
				...state,
				email: action.payload
			}
		case AUTH_CHANGE_PASSWORD_TEXT:
			return {
				...state,
				passrowd: action.payload
			}
	}
	return state;
}