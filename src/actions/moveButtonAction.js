import {
    MOVE_SHAPE,
} from "../consts/const";

export default function move(points, algoritm) {
    const newPoints = algoritm(points);

    return function (dispatch) {
        dispatch({
            type: MOVE_SHAPE,
            payload: [...newPoints],
        });
    };
}
