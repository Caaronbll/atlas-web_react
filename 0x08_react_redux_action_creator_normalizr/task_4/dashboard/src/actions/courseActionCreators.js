import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

export const selectCourse = (course) => {
    return {
        type: SELECT_COURSE,
        course,
    };
};

export const unselectCourse = (course) => {
    return {
        type: UNSELECT_COURSE,
        course,
    };
};