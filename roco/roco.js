
var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Composites = Matter.Composites,
    Common = Matter.Common,
    MouseConstraint = Matter.MouseConstraint,
    Mouse = Matter.Mouse,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Events = Matter.Events;


var canvas = document.getElementById("canvas");

//canvas.width = 800;
//canvas.height = 600;



// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    canvas: canvas,
    options: {
        background: '#9bbc0f',
        showAngleIndicator: false,
        wireframes: false,
        showAxes: false,
        showConvexHulls: false
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
var offset = 10,
    options = { 
        isStatic: true,
        restitution: 0.3,
        friction: 0.0
    };

world.bodies = [];

var stackAll = [];

/*var walls = [
    Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
];*/
var walls = [
    Bodies.rectangle(0, 0, canvas.width*2 - offset, offset*2, options),
    Bodies.rectangle(canvas.width - offset/2, offset, offset, canvas.height*2 - offset, options),
    Bodies.rectangle(offset, canvas.height, canvas.width*2 - offset, offset*2, options),
    Bodies.rectangle(0, offset, offset*2, canvas.height*2 - offset, options)
];
// these static walls will not be rendered in this sprites example, see options
World.add(world, walls);

var v = [
        {x : 13, y : 7},
        {x : 24, y : 1},
        {x : 38, y : 1},
        {x : 49, y : 7},
        
        {x : 56, y : 13},
        {x : 61, y : 25},
        {x : 61, y : 49},
        {x : 51, y : 56},
        {x : 51, y : 61},
        
        {x : 12, y : 61},
        {x : 12, y : 56},
        
        {x : 2, y : 49},
        {x : 2, y : 25},
        {x : 7, y : 13}
    ];

function createRocoN(x, y) {
    /*
    var body1 = Bodies.rectangle(x+12, y+11, 40, 52,
        {render: {
            sprite: {
                texture: './rocogb.png',
                xScale: 0.125,
                yScale: 0.125
            }
        }});
    
    
    var compound = Body.create({
        parts: [body1],
        density: 0.0005,
        frictionAir: 0.04,
        restitution: 0.3,
        friction: 0.001
    });*/
    
    var bodyVert = Bodies.fromVertices(x, y, v, {
        density: 0.01,
        frictionAir: 0.02,
        restitution: 1.1,
        friction: 1.1,
        render: {
            sprite: {
                texture: './rocogb.png',
                xScale: 0.125,
                yScale: 0.125
            }
        }
    });
    
    Body.scale(bodyVert, 1.0, 1.0);
    
    var angleRot = -0.5 + (Common.random() * 1.0);
    
    Body.rotate(bodyVert, angleRot);
    
    return bodyVert;
}

function createRocoR(x, y) {
    /*
    var body1 = Bodies.rectangle(x+12, y+11, 40, 52,
        {render: {
            sprite: {
                texture: './rocogb.png',
                xScale: 0.125,
                yScale: 0.125
            }
        }});
    
    
    var compound = Body.create({
        parts: [body1],
        density: 0.0005,
        frictionAir: 0.04,
        restitution: 0.3,
        friction: 0.001
    });*/
    
    var bodyVert = Bodies.fromVertices(x, y, v, {
        density: 0.01,
        frictionAir: 0.02,
        restitution: 1.1,
        friction: 1.1,
        render: {
            sprite: {
                texture: './rocogb.png',
                xScale: 0.25,
                yScale: 0.25
            }
        }
    });
    
    Body.scale(bodyVert, 2.0, 2.0);
    
    var angleRot = -0.5 + (Common.random() * 1.0);
    
    Body.rotate(bodyVert, angleRot);
    
    return bodyVert;
}

function createRocoSR(x, y) {
    /*
    var body1 = Bodies.rectangle(x+12, y+11, 40, 52,
        {render: {
            sprite: {
                texture: './rocogb.png',
                xScale: 0.125,
                yScale: 0.125
            }
        }});
    
    
    var compound = Body.create({
        parts: [body1],
        density: 0.0005,
        frictionAir: 0.04,
        restitution: 0.3,
        friction: 0.001
    });*/
    
    var bodyVert = Bodies.fromVertices(x, y, v, {
        density: 0.01,
        frictionAir: 0.02,
        restitution: 1.1,
        friction: 1.1,
        render: {
            sprite: {
                texture: './rocosr.png',
                xScale: 0.375,
                yScale: 0.375
            }
        }
    });
    
    Body.scale(bodyVert, 3.0, 3.0);
    
    var angleRot = -0.5 + (Common.random() * 1.0);
    
    Body.rotate(bodyVert, angleRot);
    
    return bodyVert;
}

/*
var stack = Composites.stack(30, 30, 5, 4, 35, 10, function(x, y) {
    return createRocoR(x,y);
});

World.add(world, stack);*/

//World.add(world, createRocoR(20,20));

// add mouse control
var mouse = Mouse.create(canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            angularStiffness: 0.5,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

function roconize() {
    var r = Common.random();
    if(r < 0.03) {
        var y = 40;
        var x = Common.random() * 760 + 20;
        var roco = createRocoSR(x, y);
        stackAll.push(roco);
        World.add(world, roco);

    } else if(r < 0.15){
        var y = 40;
        var x = Common.random() * 760 + 20;
        var roco = createRocoR(x, y);
        stackAll.push(roco);
        World.add(world, roco);
    } else {
        var y = 40;
        var x = Common.random() * 760 + 20;
        var roco = createRocoN(x, y);
        stackAll.push(roco);
        World.add(world, roco);
    }
}

function deroconize() {
    var b = stackAll.pop();
    if(b!=null) {
        Matter.Composite.remove(world, b);
    }
}

document.getElementById("roconize").addEventListener("click", roconize);
document.getElementById("deroconize").addEventListener("click", deroconize);