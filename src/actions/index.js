import * as types from "./../constants/Calendar";

export const setYearData = year => {
  return { type: types.SET_YEAR_DATA, year };
};

export const setMarkedDay = (date, className) => {
  return { type: types.SET_MARKED_DAY, date, className };
};

export const removeMarkedDay = date => {
  return { type: types.REMOVE_MARKED_DAY, date };
};

export const setModalIsOpen = (isOpen, date) => {
  return { type: types.SET_MODAL_IS_OPEN, isOpen, date };
};
