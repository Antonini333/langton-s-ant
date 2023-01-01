import { useEffect } from 'react';

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

    const rotateRight = (grid) => {
        grid.ant.direction = ((grid.ant.direction + 1) + (ANTLEFT + 1)) % (ANTLEFT + 1);
    }

    const rotateLeft = (grid) => {
        grid.ant.direction = ((grid.ant.direction - 1) + (ANTLEFT + 1)) % (ANTLEFT + 1);
    }

    const moveForward = (grid) => {
        switch (grid.ant.direction) {
            case ANTUP:
                grid.ant.x = ((grid.ant.x - 1) + grid.width) % grid.width;
                break;
            case ANTRIGHT:
                grid.ant.y = ((grid.ant.y + 1) + grid.height) % grid.height;
                break;
            case ANTDOWN:
                grid.ant.x = ((grid.ant.x + 1) + grid.width) % grid.width;
                break;
            case ANTLEFT:
                grid.ant.y = ((grid.ant.y - 1) + grid.height) % grid.height;
                break;
        }
    }

    const move = (grid) => {
        let canvas = document.getElementById('grid');
        let ctx = canvas.getContext('2d');
        for (let i = 0; i < 100; i++) {
            let cell = grid.cells[grid.ant.x][grid.ant.y];
            if (cell.alive) {
                grid.cells[grid.ant.x][grid.ant.y].alive = false;
                ctx.fillStyle = "white";
                ctx.fillRect(grid.ant.x, grid.ant.y, 1, 1);
                rotateRight(grid);
                moveForward(grid);
            } else {
                grid.cells[grid.ant.x][grid.ant.y].alive = true;
                ctx.fillStyle = "black";
                ctx.fillRect(grid.ant.x, grid.ant.y, 1, 1);
                rotateLeft(grid);
                moveForward(grid);
            }
            ctx.fillStyle = 'red';
            ctx.fillRect(grid.ant.x, grid.ant.y, 1, 1);
            grid.moves++;
        }
    }

    const moveAnt = (grid) => {
        let canvas = document.getElementById('grid');
        let ctx = canvas.getContext('2d');
        move(grid);
        ctx.stroke();
        var moves = document.getElementById('moves');
        moves.innerHTML = grid.moves;
    }

    useEffect(() => {
        let canvas = document.getElementById('grid');
        grid = { ...grid, width: canvas.width, height: canvas.height }
        init(grid);
        setInterval(moveAnt, 1000 / 13, grid);
    }, []);

    return (
        <>
        <canvas id="grid" width="500" height="500"></canvas>
            <span id="moves"></span>
        </>
    )
}

export default AntGame