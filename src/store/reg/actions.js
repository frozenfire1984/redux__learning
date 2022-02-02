import {AUTH_CHANGE_EMAIL_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from "../auth/actions";

export const REG_CHANGE_EMAIL_TEXT = 'REG_CHANGE_EMAIL_TEXT';
export const REG_CHANGE_PASSWORD_TEXT = 'REG_CHANGE_PASSWORD_TEXT';
export const REG_CHANGE_REPEAT_PASSWORD_TEXT = 'REG_CHANGE_REPEAT_PASSWORD_TEXT';

export const setEmailText = (email) => {
	return {
		type: REG_CHANGE_EMAIL_TEXT,
		payload: email
	}
}

export const setPasswordText = (password) => {
	return {
		type: REG_CHANGE_PASSWORD_TEXT,
		payload: password
	}
}

export const setRepeatPasswordText = (password) => {
	return {
		type: REG_CHANGE_PASSWORD_TEXT,
		payload: password
	}
}
