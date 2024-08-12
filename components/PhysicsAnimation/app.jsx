// components/App.jsx
import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import p5 from 'p5';

const App = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const sketch = (p) => {
        let engine;
        let world;
        let circles = [];
        let mouse;
        let mouseConstraint;
        let selected = [];
        let mouseDown = false;

        const wordsToDisplay = [
          'WebsiteDesign',
          'SEO Optimization',
          'ShortVideo',
          'Marketing',
          'Photography',
          'Behance',
          'Email',
          'Discord',
          'YouTube',
          'WebsiteDesign',
          'SEO Optimization',
          'ShortVideo',
          'Marketing',
          'Photography',
          'Behance',
          'Email',
          'Discord',
          'YouTube',
          'WebsiteDesign',
          'SEO Optimization',
          'ShortVideo',
          'Marketing',
          'Photography',
          'Behance',
          'Email',
          'Discord',
          'YouTube',
        ];

        // Define an array of colors
        const colors = [
          '#F2CA61',
          '#F26161',
          '#DB7AFD',
          '#FFD700',
          '#FF4500',
          '#61F29B',
          '#10b981',
          '#FFFFFF',
          '#61D8F2',
          '#F2CA61',
          '#F26161',
          '#DB7AFD',
          '#FFD700',
          '#FF4500',
          '#61F29B',
          '#10b981',
          '#FFFFFF',
          '#61D8F2',
          '#F2CA61',
          '#F26161',
          '#DB7AFD',
          '#FFD700',
          '#FF4500',
          '#61F29B',
          '#10b981',
          '#FFFFFF',
          '#61D8F2',
        ];

        const resizeCanvasAndWorld = () => {
          // Resize canvas to match width and 40vh height
          p.resizeCanvas(window.innerWidth, window.innerHeight * 0.4);

          // Update boundaries
          const ground = Matter.Composite.allBodies(world).find(
            (body) => body.label === 'ground'
          );
          const wallLeft = Matter.Composite.allBodies(world).find(
            (body) => body.label === 'wallLeft'
          );
          const wallRight = Matter.Composite.allBodies(world).find(
            (body) => body.label === 'wallRight'
          );

          if (ground) {
            Matter.Body.setPosition(ground, {
              x: p.width / 2,
              y: p.height - 10,
            });
            Matter.Body.setVertices(
              ground,
              Matter.Bodies.rectangle(p.width / 2, p.height - 10, p.width, 20)
                .vertices
            );
          }

          if (wallLeft) {
            Matter.Body.setPosition(wallLeft, { x: -5, y: p.height / 2 });
            Matter.Body.setVertices(
              wallLeft,
              Matter.Bodies.rectangle(-5, p.height / 2, 10, p.height).vertices
            );
          }

          if (wallRight) {
            Matter.Body.setPosition(wallRight, {
              x: p.width + 5,
              y: p.height / 2,
            });
            Matter.Body.setVertices(
              wallRight,
              Matter.Bodies.rectangle(p.width + 5, p.height / 2, 10, p.height)
                .vertices
            );
          }

          // Recreate circles to fit new dimensions
          createCircles();
        };

        const createCircles = () => {
          // Clear previous circles
          circles.forEach(({ body }) => Matter.World.remove(world, body));
          circles = [];

          // Create new circles with updated dimensions and colors
          wordsToDisplay.forEach((text, index) => {
            const circleWidth = text.length * 20 + 40;
            const circleHeight = 40;

            // Ensure circles are within canvas bounds
            const x = p.random(circleWidth / 2, p.width - circleWidth / 2);
            const y = p.random(circleHeight / 2, p.height - circleHeight / 2);

            // Select a color from the array or generate a random color
            const color = colors[index % colors.length];

            const circle = Matter.Bodies.rectangle(
              x,
              y,
              circleWidth,
              circleHeight,
              {
                label: 'circle',
                render: {
                  fillStyle: color, // Set unique background color
                  strokeStyle: 'black',
                  lineWidth: 2.5,
                },
              }
            );

            circles.push({ body: circle, text });
            Matter.World.add(world, circle);
          });
        };

        p.setup = () => {
          // Create canvas with width 100% and height 40vh
          p.createCanvas(window.innerWidth, window.innerHeight * 0.4).parent(
            canvasRef.current
          );

          // Create Matter.js engine and world
          engine = Matter.Engine.create();
          world = engine.world;

          // Add walls
          const ground = Matter.Bodies.rectangle(
            p.width / 2,
            p.height - 10,
            p.width,
            20,
            { isStatic: true, label: 'ground' }
          );
          const wallLeft = Matter.Bodies.rectangle(
            -5,
            p.height / 2,
            10,
            p.height,
            { isStatic: true, label: 'wallLeft' }
          );
          const wallRight = Matter.Bodies.rectangle(
            p.width + 5,
            p.height / 2,
            10,
            p.height,
            { isStatic: true, label: 'wallRight' }
          );
          Matter.World.add(world, [ground, wallLeft, wallRight]);

          // Create circles with words
          createCircles();

          // Setup mouse control
          mouse = Matter.Mouse.create(p.canvas.elt);
          mouseConstraint = Matter.MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
              stiffness: 0.2,
              render: {
                visible: false,
              },
            },
          });
          Matter.World.add(world, mouseConstraint);

          // Event listeners for mouse interaction
          Matter.Events.on(mouseConstraint, 'mousedown', () => {
            mouseDown = true;
            updateSelection();
          });

          Matter.Events.on(mouseConstraint, 'mouseup', () => {
            mouseDown = false;
            selected.forEach((body) => {
              body.render.fillStyle = '#00ff00'; // Reset fill color
            });
            selected.length = 0;
          });

          Matter.Events.on(mouseConstraint, 'mousemove', () => {
            if (mouseDown) {
              updateSelection();
            }
          });

          const updateSelection = () => {
            const position = mouse.position;
            const justSelected = Matter.Query.point(
              circles.map((c) => c.body),
              position
            );
            selected.push(...justSelected);
            justSelected.forEach((body) => {
              body.render.fillStyle = 'yellow'; // Highlight selected bodies
            });
          };

          resizeCanvasAndWorld(); // Initial resize call
        };

        p.draw = () => {
          p.background('#ffffff'); // Change background color to a green shade
          Matter.Engine.update(engine);

          // Draw circles with text
          circles.forEach(({ body, text }) => {
            const pos = body.position;
            const angle = body.angle;

            p.push();
            p.translate(pos.x, pos.y);
            p.rotate(angle);
            p.rectMode(p.CENTER);
            p.fill(body.render.fillStyle); // Fill color
            p.stroke(body.render.strokeStyle); // Stroke color
            p.strokeWeight(body.render.lineWidth); // Stroke width
            p.rect(0, 0, text.length * 18 + 40, 40, 20); // Rounded rectangle with radius of 20
            p.noStroke();
            p.fill('#0f0f0f');
            p.textSize(16);
            p.textAlign(p.CENTER, p.CENTER);
            p.text(text.toUpperCase(), 0, 0);
            p.pop();
          });
        };

        p.windowResized = () => {
          resizeCanvasAndWorld(); // Resize canvas and world
        };

        // Handle mouse moved event
        p.mouseMoved = () => {
          for (let { body } of circles) {
            if (
              p.dist(p.mouseX, p.mouseY, body.position.x, body.position.y) < 50
            ) {
              Matter.Body.applyForce(
                body,
                { x: body.position.x, y: body.position.y },
                { x: p.random(-0.2, 0.2), y: p.random(-0.2, 0.2) }
              );
            }
          }
        };
      };

      // Initialize p5 with the canvas ref
      new p5(sketch);

      // Clean up p5 instance on component unmount
      return () => {
        if (canvasRef.current) {
          canvasRef.current.innerHTML = '';
        }
      };
    }
  }, []);

  return <div ref={canvasRef}></div>;
};

export default App;
