export default function movingAlg(points) {
    const result = points.map(point => (
        { x: point.x + 1, y: point.y, id: point.id }
    ));

    return result;
}