    function handleDirection(direction) {
        if (directions.hasOwnProperty(direction)) {
            directions[direction]();
        } else {
            console.log("Unknown direction:", direction);
        }
    }
    