import {
	REG_CHANGE_EMAIL_TEXT,
	REG_CHANGE_PASSWORD_TEXT,
	REG_CHANGE_REPEAT_PASSWORD_TEXT
} from "./actions";

const defaultState = {
	email: '',
	passrowd: '',
	repeat_passrowd: '',
}

export const regReduser = (state = defaultState, action) => {
	switch (action) {
		case REG_CHANGE_EMAIL_TEXT:
			return {
				...state,
				email: action.payload
			}
		case REG_CHANGE_PASSWORD_TEXT:
			return {
				...state,
				passrowd: action.payload
			}
		case REG_CHANGE_REPEAT_PASSWORD_TEXT:
			return {
				...state,
				passrowd: action.payload
			}
	}
	return state;
}