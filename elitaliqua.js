// Define the extract3 function
function extract3(arcs) {
    // Just a simple example: log the first 3 elements
    console.log(arcs.slice(0, 3));
}

// Define the object with arcs property
let o = {
    arcs: [1, 2, 3, 4, 5]
};

// Call extract3 with arcs from o
extract3(o.arcs);  // Output: [1, 2, 3]
