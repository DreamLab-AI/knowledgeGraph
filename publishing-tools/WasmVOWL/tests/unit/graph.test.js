/**
 * London TDD Unit Tests for Graph Module
 *
 * Focus: Test graph construction, manipulation, and layout behaviors
 * Uses extensive mocking for D3.js dependencies
 */

describe("Graph Module", function() {
    var graph;
    var mockContainer;
    var mockParser;
    var mockOptions;
    var mockForce;

    beforeEach(function() {
        // Arrange: Mock D3 container
        mockContainer = document.createElement('div');
        mockContainer.id = 'graph-container';
        document.body.appendChild(mockContainer);

        // Mock D3.js force layout
        mockForce = jasmine.createSpyObj('force', [
            'nodes',
            'links',
            'size',
            'linkDistance',
            'charge',
            'gravity',
            'on',
            'start',
            'stop',
            'resume',
            'alpha'
        ]);

        mockForce.nodes.and.returnValue(mockForce);
        mockForce.links.and.returnValue(mockForce);
        mockForce.size.and.returnValue(mockForce);
        mockForce.linkDistance.and.returnValue(mockForce);
        mockForce.charge.and.returnValue(mockForce);
        mockForce.gravity.and.returnValue(mockForce);
        mockForce.on.and.returnValue(mockForce);

        // Mock parser
        mockParser = jasmine.createSpyObj('parser', [
            'parse',
            'nodes',
            'properties',
            'getDictionary'
        ]);

        // Mock options
        mockOptions = jasmine.createSpyObj('options', [
            'gravity',
            'charge',
            'linkDistance',
            'zoom'
        ]);

        // Initialize graph
        graph = require("../../src/webvowl/js/graph")('#graph-container');
    });

    afterEach(function() {
        // Cleanup
        document.body.removeChild(mockContainer);
    });

    describe("Graph Initialization", function() {
        it("should initialize with empty nodes and links", function() {
            // Act
            var nodes = graph.nodes();
            var links = graph.links();

            // Assert
            expect(nodes).toBeDefined();
            expect(links).toBeDefined();
            expect(Array.isArray(nodes)).toBe(true);
            expect(Array.isArray(links)).toBe(true);
        });

        it("should create SVG container", function() {
            // Act
            graph.start();

            // Assert
            var svg = mockContainer.querySelector('svg');
            expect(svg).not.toBeNull();
        });

        it("should set up force layout with default parameters", function() {
            // Arrange
            spyOn(d3.layout, 'force').and.returnValue(mockForce);

            // Act
            graph.start();

            // Assert
            expect(mockForce.size).toHaveBeenCalled();
            expect(mockForce.linkDistance).toHaveBeenCalled();
            expect(mockForce.charge).toHaveBeenCalled();
        });
    });

    describe("Node Management", function() {
        it("should add nodes to graph", function() {
            // Arrange
            var testNodes = [
                { id: 1, type: "owl:Class", x: 100, y: 100 },
                { id: 2, type: "owl:Class", x: 200, y: 200 }
            ];

            // Act
            graph.nodes(testNodes);

            // Assert
            var nodes = graph.nodes();
            expect(nodes.length).toBe(2);
            expect(nodes[0].id).toBe(1);
        });

        it("should remove nodes from graph", function() {
            // Arrange
            var testNodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "owl:Class" }
            ];
            graph.nodes(testNodes);

            // Act
            graph.removeNode(testNodes[0]);

            // Assert
            var nodes = graph.nodes();
            expect(nodes.length).toBe(1);
            expect(nodes[0].id).toBe(2);
        });

        it("should find node by id", function() {
            // Arrange
            var testNodes = [
                { id: "class1", type: "owl:Class" },
                { id: "class2", type: "owl:Class" }
            ];
            graph.nodes(testNodes);

            // Act
            var found = graph.getNodeById("class1");

            // Assert
            expect(found).toBeDefined();
            expect(found.id).toBe("class1");
        });

        it("should return null for non-existent node id", function() {
            // Act
            var notFound = graph.getNodeById("nonexistent");

            // Assert
            expect(notFound).toBeNull();
        });
    });

    describe("Link Management", function() {
        it("should create links between nodes", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "owl:Class" }
            ];
            graph.nodes(nodes);

            // Act
            var link = {
                source: nodes[0],
                target: nodes[1],
                type: "owl:ObjectProperty"
            };
            graph.addLink(link);

            // Assert
            var links = graph.links();
            expect(links.length).toBe(1);
            expect(links[0].source).toBe(nodes[0]);
            expect(links[0].target).toBe(nodes[1]);
        });

        it("should validate link source and target exist", function() {
            // Arrange
            var invalidLink = {
                source: null,
                target: null,
                type: "owl:ObjectProperty"
            };

            // Act & Assert
            expect(function() {
                graph.addLink(invalidLink);
            }).toThrow();
        });

        it("should remove links when node is removed", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "owl:Class" }
            ];
            graph.nodes(nodes);
            var link = {
                source: nodes[0],
                target: nodes[1],
                type: "owl:ObjectProperty"
            };
            graph.addLink(link);

            // Act
            graph.removeNode(nodes[0]);

            // Assert
            var links = graph.links();
            expect(links.length).toBe(0);
        });
    });

    describe("Force Layout Control", function() {
        beforeEach(function() {
            spyOn(d3.layout, 'force').and.returnValue(mockForce);
        });

        it("should start force simulation", function() {
            // Act
            graph.start();

            // Assert
            expect(mockForce.start).toHaveBeenCalled();
        });

        it("should stop force simulation", function() {
            // Arrange
            graph.start();

            // Act
            graph.stop();

            // Assert
            expect(mockForce.stop).toHaveBeenCalled();
        });

        it("should resume paused simulation", function() {
            // Arrange
            graph.start();
            graph.pause();

            // Act
            graph.resume();

            // Assert
            expect(mockForce.resume).toHaveBeenCalled();
        });

        it("should update layout parameters dynamically", function() {
            // Act
            graph.updateGravity(0.5);
            graph.updateCharge(-1000);

            // Assert
            expect(mockForce.gravity).toHaveBeenCalledWith(0.5);
            expect(mockForce.charge).toHaveBeenCalledWith(-1000);
        });
    });

    describe("Zoom and Pan", function() {
        it("should set zoom level", function() {
            // Act
            graph.setZoom(1.5);

            // Assert
            var zoom = graph.getZoom();
            expect(zoom).toBe(1.5);
        });

        it("should constrain zoom to valid range", function() {
            // Act
            graph.setZoom(10); // Too high
            var maxZoom = graph.getZoom();

            graph.setZoom(0.01); // Too low
            var minZoom = graph.getZoom();

            // Assert
            expect(maxZoom).toBeLessThanOrEqual(5);
            expect(minZoom).toBeGreaterThanOrEqual(0.1);
        });

        it("should apply zoom transform to graph", function() {
            // Arrange
            var mockZoomBehavior = jasmine.createSpyObj('zoom', ['scale', 'translate']);
            spyOn(d3.behavior, 'zoom').and.returnValue(mockZoomBehavior);

            // Act
            graph.setZoom(2.0);

            // Assert
            expect(mockZoomBehavior.scale).toHaveBeenCalledWith(2.0);
        });
    });

    describe("Graph Rendering", function() {
        it("should render nodes as SVG elements", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class", x: 100, y: 100 }
            ];
            graph.nodes(nodes);

            // Act
            graph.update();

            // Assert
            var circles = mockContainer.querySelectorAll('circle');
            expect(circles.length).toBeGreaterThan(0);
        });

        it("should render links as SVG paths", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class", x: 100, y: 100 },
                { id: 2, type: "owl:Class", x: 200, y: 200 }
            ];
            var links = [
                { source: nodes[0], target: nodes[1] }
            ];
            graph.nodes(nodes);
            graph.links(links);

            // Act
            graph.update();

            // Assert
            var paths = mockContainer.querySelectorAll('path');
            expect(paths.length).toBeGreaterThan(0);
        });

        it("should apply CSS classes to elements", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class", styleClass: "test-class" }
            ];
            graph.nodes(nodes);

            // Act
            graph.update();

            // Assert
            var element = mockContainer.querySelector('.test-class');
            expect(element).not.toBeNull();
        });
    });

    describe("Graph Filtering", function() {
        it("should filter nodes by type", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "rdfs:Datatype" },
                { id: 3, type: "owl:Class" }
            ];
            graph.nodes(nodes);

            // Act
            var filtered = graph.filterNodesByType("owl:Class");

            // Assert
            expect(filtered.length).toBe(2);
            expect(filtered[0].type).toBe("owl:Class");
        });

        it("should hide filtered nodes", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class", visible: true },
                { id: 2, type: "rdfs:Datatype", visible: true }
            ];
            graph.nodes(nodes);

            // Act
            graph.hideNodesByType("rdfs:Datatype");

            // Assert
            var nodes = graph.nodes();
            var datatypeNode = nodes.find(function(n) { return n.id === 2; });
            expect(datatypeNode.visible).toBe(false);
        });
    });

    describe("Statistics Calculation", function() {
        it("should calculate node degree", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "owl:Class" },
                { id: 3, type: "owl:Class" }
            ];
            var links = [
                { source: nodes[0], target: nodes[1] },
                { source: nodes[0], target: nodes[2] }
            ];
            graph.nodes(nodes);
            graph.links(links);

            // Act
            var degree = graph.getNodeDegree(nodes[0]);

            // Assert
            expect(degree).toBe(2);
        });

        it("should count total classes and properties", function() {
            // Arrange
            var nodes = [
                { id: 1, type: "owl:Class" },
                { id: 2, type: "owl:Class" },
                { id: 3, type: "rdfs:Datatype" }
            ];
            graph.nodes(nodes);

            // Act
            var stats = graph.getStatistics();

            // Assert
            expect(stats.classCount).toBe(2);
            expect(stats.totalNodes).toBe(3);
        });
    });

    describe("Error Handling", function() {
        it("should handle invalid container selector", function() {
            // Act & Assert
            expect(function() {
                require("../../src/webvowl/js/graph")('#nonexistent');
            }).toThrow();
        });

        it("should handle corrupted node data", function() {
            // Arrange
            var corruptedNodes = [
                { id: null, type: undefined }
            ];

            // Act & Assert
            expect(function() {
                graph.nodes(corruptedNodes);
            }).toThrow();
        });

        it("should recover from rendering errors", function() {
            // Arrange
            var problematicNode = {
                id: 1,
                type: "owl:Class",
                render: function() { throw new Error("Render error"); }
            };
            graph.nodes([problematicNode]);

            // Act & Assert - Should handle gracefully
            expect(function() {
                graph.update();
            }).not.toThrow();
        });
    });

    describe("Performance Optimization", function() {
        it("should batch DOM updates", function() {
            // Arrange
            var nodes = [];
            for (var i = 0; i < 100; i++) {
                nodes.push({ id: i, type: "owl:Class", x: i * 10, y: i * 10 });
            }

            // Act
            var startTime = performance.now();
            graph.nodes(nodes);
            graph.update();
            var endTime = performance.now();

            // Assert - Should complete quickly
            expect(endTime - startTime).toBeLessThan(100);
        });
    });
});
