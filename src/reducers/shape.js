import {
    MOVE_SHAPE,
} from "../consts/const";

const initialState = {
    x: 1,
    y: 1,
};

export default function worldReducer(state = initialState, action) {
    switch (action.type) {
    case MOVE_SHAPE:
        return {
            ...state,
            x: action.payload.x,
            y: action.payload.y,
        };

    default:
        return state;
    }
}
