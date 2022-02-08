export const SURSCR_CHANGE_EMAIL = 'SURSCR_CHANGE_EMAIL';
export const SURSCR_CHANGE_FREQ = 'SURSCR_CHANGE_FREQ';

export const actionChangeEmail = (value) => {
  return {
    type: SURSCR_CHANGE_EMAIL,
    payload: value,
  };
};

export const actionChangeSFreq = (value) => {
  return {
    type: SURSCR_CHANGE_FREQ,
    payload: value,
  };
};

