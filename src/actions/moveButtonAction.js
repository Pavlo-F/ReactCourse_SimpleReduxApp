import {
    MOVE_SHAPE,
} from "../consts/const";

export default function move(x, y) {
    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: { x, y },
        });
    };
}
