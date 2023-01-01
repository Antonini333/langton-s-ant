const AntGame = () => {

    const ANTUP = 0;
    const ANTRIGHT = 1;
    const ANTDOWN = 2;
    const ANTLEFT = 3;

    let grid = {
        cells: [],
        ant: {
            x: 0,
            y: 0,
            direction: ANTUP
        },
        height: 0,
        width: 0,
        moves: 0
    }

    return (
        <>
        <canvas id="grid" width="500" height="500"></canvas>
            <span id="moves"></span>
        </>
    )
}

export default AntGame