import courseReducer, { initialCourseState } from "./courseReducer";
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
} from "../actions/courseActionTypes";
import { Map, fromJS  } from "immutable";

import coursesNormalizer from "../schema/courses";

describe("courseReducer", () => {
    it("should return the initial state", () => {
        expect(courseReducer(undefined, {})).toEqual([]);
    });

    it("should handle FETCH_COURSE_SUCCESS", () => {
        const courses = {
            type: FETCH_COURSE_SUCCESS,
            data: [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: false,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ]
        };

        const expectedData = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: false,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
            ];
            const state = courseReducer(undefined, courses);
            expect(state.toJS()).toEqual(coursesNormalizer(expectedData));
    });

    it("should handle SELECT_COURSE", () => {
        const initialState = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: false,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ];
          const action = {
            type: SELECT_COURSE,
            index: 2
          };

          const expectedData = [
            {
              id: 1,
              name: "ES6",
              isSelected: false,
              credit: 60
            },
            {
              id: 2,
              name: "Webpack",
              isSelected: true,
              credit: 20
            },
            {
              id: 3,
              name: "React",
              isSelected: false,
              credit: 40
            }
          ];

          const state = courseReducer(fromJS(coursesNormalizer(initialState)), action);

          expect(state.toJS()).toEqual(coursesNormalizer(expectedData));  
        });

        it("should handle UNSELECT_COURSE", () => {
            const initialState = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: true,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ];
              const action = {
                type: UNSELECT_COURSE,
                index: 2
              };

              const expectedData = [
                {
                  id: 1,
                  name: "ES6",
                  isSelected: false,
                  credit: 60
                },
                {
                  id: 2,
                  name: "Webpack",
                  isSelected: false,
                  credit: 20
                },
                {
                  id: 3,
                  name: "React",
                  isSelected: false,
                  credit: 40
                }
              ];
            
            const state = courseReducer(fromJS(coursesNormalizer(initialState)), action);
            expect(state.toJS()).toEqual(sourseNormalizer(expectedData));
        });
});