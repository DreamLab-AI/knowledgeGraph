/**
 * Performance Benchmarks for WebVOWL
 *
 * Measures and validates performance characteristics
 * Compares against baseline metrics
 */

describe("WebVOWL Performance Benchmarks", function() {
    var parser;
    var graph;
    var performanceThresholds = {
        smallOntologyParse: 100,      // ms
        mediumOntologyParse: 500,     // ms
        largeOntologyParse: 2000,     // ms
        layoutStabilization: 1000,    // ms
        renderUpdate: 50,             // ms
        memoryPerNode: 10 * 1024      // bytes (~10KB per node)
    };

    beforeEach(function() {
        var container = document.createElement('div');
        container.id = 'benchmark-graph';
        document.body.appendChild(container);

        graph = require("../../src/webvowl/js/graph")('#benchmark-graph');
        parser = require("../../src/webvowl/js/parser")(graph);
    });

    afterEach(function() {
        var container = document.getElementById('benchmark-graph');
        if (container) {
            document.body.removeChild(container);
        }
    });

    describe("Parsing Performance", function() {
        it("should parse small ontology (<50 nodes) under threshold", function() {
            // Arrange
            var smallOntology = generateOntology(30, 40);

            // Act
            var startTime = performance.now();
            parser.parse(smallOntology);
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert
            expect(duration).toBeLessThan(performanceThresholds.smallOntologyParse);
            console.log("Small ontology parse time: " + duration.toFixed(2) + "ms");
        });

        it("should parse medium ontology (50-200 nodes) under threshold", function() {
            // Arrange
            var mediumOntology = generateOntology(100, 150);

            // Act
            var startTime = performance.now();
            parser.parse(mediumOntology);
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert
            expect(duration).toBeLessThan(performanceThresholds.mediumOntologyParse);
            console.log("Medium ontology parse time: " + duration.toFixed(2) + "ms");
        });

        it("should parse large ontology (200+ nodes) under threshold", function() {
            // Arrange
            var largeOntology = generateOntology(300, 450);

            // Act
            var startTime = performance.now();
            parser.parse(largeOntology);
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert
            expect(duration).toBeLessThan(performanceThresholds.largeOntologyParse);
            console.log("Large ontology parse time: " + duration.toFixed(2) + "ms");
        });

        it("should scale linearly with ontology size", function() {
            // Arrange
            var sizes = [50, 100, 200, 400];
            var times = [];

            // Act
            sizes.forEach(function(size) {
                var ontology = generateOntology(size, size * 1.5);
                var startTime = performance.now();
                parser.parse(ontology);
                var endTime = performance.now();
                times.push(endTime - startTime);
            });

            // Assert - Time should grow roughly linearly
            var ratio1 = times[1] / times[0];
            var ratio2 = times[2] / times[1];
            var ratio3 = times[3] / times[2];

            // Ratios should be consistent (within 50%)
            expect(Math.abs(ratio1 - ratio2)).toBeLessThan(ratio1 * 0.5);
            expect(Math.abs(ratio2 - ratio3)).toBeLessThan(ratio2 * 0.5);

            console.log("Scaling ratios:", ratio1.toFixed(2), ratio2.toFixed(2), ratio3.toFixed(2));
        });
    });

    describe("Layout Performance", function() {
        it("should stabilize force layout within threshold", function(done) {
            // Arrange
            var ontology = generateOntology(50, 75);
            parser.parse(ontology);
            graph.nodes(parser.nodes());
            graph.links(parser.properties());

            // Act
            var startTime = performance.now();
            graph.start();

            // Monitor alpha value (layout energy)
            var checkInterval = setInterval(function() {
                if (graph.force && graph.force.alpha() < 0.01) {
                    clearInterval(checkInterval);

                    var endTime = performance.now();
                    var duration = endTime - startTime;

                    // Assert
                    expect(duration).toBeLessThan(performanceThresholds.layoutStabilization);
                    console.log("Layout stabilization time: " + duration.toFixed(2) + "ms");

                    done();
                }
            }, 100);
        }, 5000); // 5 second timeout

        it("should handle large graph layout efficiently", function(done) {
            // Arrange
            var ontology = generateOntology(200, 300);
            parser.parse(ontology);
            graph.nodes(parser.nodes());
            graph.links(parser.properties());

            // Act
            var startTime = performance.now();
            graph.start();

            setTimeout(function() {
                var endTime = performance.now();
                var duration = endTime - startTime;

                // Assert - Should make progress even if not fully stabilized
                expect(graph.nodes()[0].x).toBeDefined();
                expect(graph.nodes()[0].y).toBeDefined();
                console.log("Large layout progress time: " + duration.toFixed(2) + "ms");

                done();
            }, 2000);
        }, 5000);
    });

    describe("Rendering Performance", function() {
        it("should update DOM within threshold", function() {
            // Arrange
            var ontology = generateOntology(50, 75);
            parser.parse(ontology);
            graph.nodes(parser.nodes());
            graph.links(parser.properties());

            // Act
            var startTime = performance.now();
            graph.update();
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert
            expect(duration).toBeLessThan(performanceThresholds.renderUpdate);
            console.log("Render update time: " + duration.toFixed(2) + "ms");
        });

        it("should handle incremental updates efficiently", function() {
            // Arrange
            var ontology = generateOntology(100, 150);
            parser.parse(ontology);
            graph.nodes(parser.nodes());
            graph.update();

            // Act - Add new nodes
            var additionalNodes = [
                { id: "new1", type: "owl:Class", x: 100, y: 100 },
                { id: "new2", type: "owl:Class", x: 200, y: 200 }
            ];

            var startTime = performance.now();
            graph.nodes(graph.nodes().concat(additionalNodes));
            graph.update();
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert - Incremental update should be fast
            expect(duration).toBeLessThan(performanceThresholds.renderUpdate);
            console.log("Incremental update time: " + duration.toFixed(2) + "ms");
        });

        it("should maintain frame rate during zoom", function(done) {
            // Arrange
            var ontology = generateOntology(100, 150);
            parser.parse(ontology);
            graph.nodes(parser.nodes());
            graph.update();

            var frameTimes = [];
            var frameCount = 0;
            var maxFrames = 60;

            // Act - Simulate zoom animation
            var lastTime = performance.now();
            var zoomInterval = setInterval(function() {
                var currentTime = performance.now();
                frameTimes.push(currentTime - lastTime);
                lastTime = currentTime;

                // Zoom in/out
                var currentZoom = graph.getZoom();
                graph.setZoom(currentZoom * 1.01);
                graph.update();

                frameCount++;
                if (frameCount >= maxFrames) {
                    clearInterval(zoomInterval);

                    // Assert - Average frame time should be < 33ms (30 FPS)
                    var avgFrameTime = frameTimes.reduce(function(a, b) {
                        return a + b;
                    }, 0) / frameTimes.length;

                    expect(avgFrameTime).toBeLessThan(33);
                    console.log("Average frame time during zoom: " + avgFrameTime.toFixed(2) + "ms");

                    done();
                }
            }, 16); // ~60 FPS target
        }, 3000);
    });

    describe("Memory Performance", function() {
        it("should use reasonable memory for nodes", function() {
            // Skip if performance.memory not available
            if (!performance.memory) {
                pending("performance.memory not available");
                return;
            }

            // Arrange
            var nodeCount = 100;
            var ontology = generateOntology(nodeCount, nodeCount * 1.5);

            // Force garbage collection if available
            if (global.gc) {
                global.gc();
            }

            var initialMemory = performance.memory.usedJSHeapSize;

            // Act
            parser.parse(ontology);
            var nodes = parser.nodes();

            var finalMemory = performance.memory.usedJSHeapSize;
            var memoryUsed = finalMemory - initialMemory;
            var memoryPerNode = memoryUsed / nodeCount;

            // Assert
            expect(memoryPerNode).toBeLessThan(performanceThresholds.memoryPerNode);
            console.log("Memory per node: " + (memoryPerNode / 1024).toFixed(2) + " KB");
        });

        it("should cleanup memory on graph clear", function() {
            // Skip if performance.memory not available
            if (!performance.memory) {
                pending("performance.memory not available");
                return;
            }

            // Arrange
            var ontology = generateOntology(200, 300);
            parser.parse(ontology);
            graph.nodes(parser.nodes());

            if (global.gc) {
                global.gc();
            }

            var beforeClear = performance.memory.usedJSHeapSize;

            // Act
            graph.nodes([]);
            graph.links([]);
            graph.update();

            if (global.gc) {
                global.gc();
            }

            var afterClear = performance.memory.usedJSHeapSize;

            // Assert - Memory should decrease or stay stable
            expect(afterClear).toBeLessThanOrEqual(beforeClear * 1.1); // Allow 10% variance
            console.log("Memory before: " + (beforeClear / 1024 / 1024).toFixed(2) + " MB");
            console.log("Memory after: " + (afterClear / 1024 / 1024).toFixed(2) + " MB");
        });
    });

    describe("Search Performance", function() {
        it("should search nodes efficiently", function() {
            // Arrange
            var ontology = generateOntology(500, 750);
            parser.parse(ontology);
            var nodes = parser.nodes();

            // Act
            var startTime = performance.now();
            var results = nodes.filter(function(node) {
                return node.label && node.label().includes("Class 250");
            });
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert - Search should be fast
            expect(duration).toBeLessThan(10); // < 10ms
            expect(results.length).toBeGreaterThan(0);
            console.log("Search time (500 nodes): " + duration.toFixed(2) + "ms");
        });
    });

    describe("Filter Performance", function() {
        it("should filter large graph quickly", function() {
            // Arrange
            var ontology = generateOntology(300, 450);
            parser.parse(ontology);
            var nodes = parser.nodes();
            var properties = parser.properties();

            var datatypeFilter = require("../../src/webvowl/js/modules/datatypeFilter")();
            datatypeFilter.enabled(true);

            // Act
            var startTime = performance.now();
            datatypeFilter.filter(nodes, properties);
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert
            expect(duration).toBeLessThan(100); // < 100ms
            console.log("Filter time (300 nodes): " + duration.toFixed(2) + "ms");
        });
    });

    // Helper function to generate test ontologies
    function generateOntology(classCount, propertyCount) {
        var ontology = {
            "class": [],
            "property": [],
            "propertyAttribute": []
        };

        // Generate classes
        for (var i = 0; i < classCount; i++) {
            ontology.class.push({
                "id": "class" + i,
                "type": "owl:Class",
                "label": { "en": "Class " + i }
            });
        }

        // Generate properties
        for (var j = 0; j < propertyCount; j++) {
            var domainIdx = Math.floor(Math.random() * classCount);
            var rangeIdx = Math.floor(Math.random() * classCount);

            ontology.property.push({
                "id": "prop" + j,
                "type": "owl:ObjectProperty",
                "domain": "class" + domainIdx,
                "range": "class" + rangeIdx,
                "label": { "en": "Property " + j }
            });
        }

        return ontology;
    }

    // Performance summary reporter
    afterAll(function() {
        console.log("\n=== Performance Benchmark Summary ===");
        console.log("Thresholds:");
        console.log("  Small ontology parse: < " + performanceThresholds.smallOntologyParse + "ms");
        console.log("  Medium ontology parse: < " + performanceThresholds.mediumOntologyParse + "ms");
        console.log("  Large ontology parse: < " + performanceThresholds.largeOntologyParse + "ms");
        console.log("  Layout stabilization: < " + performanceThresholds.layoutStabilization + "ms");
        console.log("  Render update: < " + performanceThresholds.renderUpdate + "ms");
        console.log("=====================================\n");
    });
});
