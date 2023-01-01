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

    const init = (grid) => {
        if (!grid.cells.length) {
            for (let x = 0; x < grid.width; x++) {
                grid.cells[x] = [];
                for (let y = 0; y < grid.height; y++) {
                    let cell = { alive: false }
                    grid.cells[x][y] = cell;
                }
            }
            grid.ant = { ...grid.ant, x: grid.width / 2, y: grid.height / 2 }
        }
    }

    return (
        <>
        <canvas id="grid" width="500" height="500"></canvas>
            <span id="moves"></span>
        </>
    )
}

export default AntGame