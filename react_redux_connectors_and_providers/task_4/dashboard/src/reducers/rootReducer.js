import notificationReducer, { initialState } from './notificationReducer';
import courseReducer, { initialCourseState } from './courseReducer';
import uiReducer, { initialUIState } from './uiReducer';
import { Map } from 'immutable';

export const initialTotalState = {
    notifications: Map(initialState),
    courses: Map(initialCourseState),
    ui: Map(initialUIState)
};

const rootReducer = {
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
};

export default rootReducer;