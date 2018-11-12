export const FETCH_YEARLY_CALENDAR = "FETCH_YEARLY_CALENDAR";
export const FETCH_MARKED_DAYS = "FETCH_MARKED_DAYS";
export const REMOVE_MARKED_DAYS = "REMOVE_MARKED_DAYS";
export const OPEN_MODAL = "OPEN_MODAL";

export const setYearlyCalendar = year => {
  return { type: FETCH_YEARLY_CALENDAR, year };
};

export const sethMarkDay = (date, bg) => {
  return { type: FETCH_MARKED_DAYS, date, bg };
};

export const removeMarkDay = date => {
  return { type: REMOVE_MARKED_DAYS, date };
};

export const openModal = (show, date) => {
  return { type: OPEN_MODAL, show, date };
};
