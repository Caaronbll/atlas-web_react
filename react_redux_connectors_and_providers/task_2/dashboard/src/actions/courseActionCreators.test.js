import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("action_tests", () => {
    it("select course should return { type: SELECT_COURSE, index: 1 }", () => {
        const result = selectCourse(1);

        expect(result).toEqual({ type: SELECT_COURSE, index: 1 });
    });
    it("unselect course should return { type: UNSELECT_COURSE, index: 1 }", () => {
        const result = unSelectCourse(1);

        expect(result).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
});