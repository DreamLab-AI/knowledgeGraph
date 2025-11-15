/**
 * Integration Tests for OWL Parsing Workflow
 *
 * Tests the complete pipeline from OWL data to rendered graph
 * Uses real modules with minimal mocking
 */

describe("OWL Parsing Integration", function() {
    var parser;
    var graph;
    var testOntologyData;

    beforeEach(function() {
        // Load test ontology data
        testOntologyData = {
            "_comment": "Test ontology for integration testing",
            "header": {
                "title": "Test Ontology",
                "iri": "http://test.org/ontology",
                "version": "1.0.0"
            },
            "class": [
                {
                    "id": "http://test.org/Person",
                    "type": "owl:Class",
                    "label": {
                        "en": "Person"
                    }
                },
                {
                    "id": "http://test.org/Organization",
                    "type": "owl:Class",
                    "label": {
                        "en": "Organization"
                    }
                },
                {
                    "id": "http://test.org/Employee",
                    "type": "owl:Class",
                    "label": {
                        "en": "Employee"
                    }
                }
            ],
            "property": [
                {
                    "id": "http://test.org/worksFor",
                    "type": "owl:ObjectProperty",
                    "domain": "http://test.org/Person",
                    "range": "http://test.org/Organization",
                    "label": {
                        "en": "works for"
                    }
                },
                {
                    "id": "http://test.org/hasEmployee",
                    "type": "owl:ObjectProperty",
                    "domain": "http://test.org/Organization",
                    "range": "http://test.org/Employee",
                    "label": {
                        "en": "has employee"
                    }
                }
            ],
            "propertyAttribute": [
                {
                    "id": "http://test.org/subClassOfPerson",
                    "type": "rdfs:subClassOf",
                    "domain": "http://test.org/Employee",
                    "range": "http://test.org/Person"
                }
            ]
        };

        // Create graph container
        var container = document.createElement('div');
        container.id = 'integration-test-graph';
        document.body.appendChild(container);

        // Initialize real modules
        graph = require("../../src/webvowl/js/graph")('#integration-test-graph');
        parser = require("../../src/webvowl/js/parser")(graph);
    });

    afterEach(function() {
        // Cleanup
        var container = document.getElementById('integration-test-graph');
        if (container) {
            document.body.removeChild(container);
        }
    });

    describe("Complete Parsing Pipeline", function() {
        it("should parse ontology and create graph nodes", function(done) {
            // Act
            parser.parse(testOntologyData);

            // Assert
            setTimeout(function() {
                var nodes = parser.nodes();
                expect(nodes).toBeDefined();
                expect(nodes.length).toBeGreaterThan(0);

                var personClass = nodes.find(function(n) {
                    return n.label() === "Person";
                });
                expect(personClass).toBeDefined();
                expect(personClass.type()).toBe("owl:Class");

                done();
            }, 100);
        });

        it("should create properties linking nodes", function(done) {
            // Act
            parser.parse(testOntologyData);

            // Assert
            setTimeout(function() {
                var properties = parser.properties();
                expect(properties).toBeDefined();
                expect(properties.length).toBeGreaterThan(0);

                var worksForProperty = properties.find(function(p) {
                    return p.label() === "works for";
                });
                expect(worksForProperty).toBeDefined();
                expect(worksForProperty.type()).toBe("owl:ObjectProperty");

                done();
            }, 100);
        });

        it("should establish correct domain-range relationships", function(done) {
            // Act
            parser.parse(testOntologyData);

            // Assert
            setTimeout(function() {
                var properties = parser.properties();
                var worksForProperty = properties.find(function(p) {
                    return p.label() === "works for";
                });

                var domain = worksForProperty.domain();
                var range = worksForProperty.range();

                expect(domain).toBeDefined();
                expect(range).toBeDefined();
                expect(domain.label()).toBe("Person");
                expect(range.label()).toBe("Organization");

                done();
            }, 100);
        });

        it("should handle subclass relationships", function(done) {
            // Act
            parser.parse(testOntologyData);

            // Assert
            setTimeout(function() {
                var properties = parser.properties();
                var subclassProperty = properties.find(function(p) {
                    return p.type() === "rdfs:subClassOf";
                });

                expect(subclassProperty).toBeDefined();
                expect(subclassProperty.domain().label()).toBe("Employee");
                expect(subclassProperty.range().label()).toBe("Person");

                done();
            }, 100);
        });
    });

    describe("Graph Layout Integration", function() {
        it("should apply force layout to parsed nodes", function(done) {
            // Act
            parser.parse(testOntologyData);
            graph.nodes(parser.nodes());
            graph.links(parser.properties());
            graph.start();

            // Assert
            setTimeout(function() {
                var nodes = graph.nodes();
                nodes.forEach(function(node) {
                    expect(node.x).toBeDefined();
                    expect(node.y).toBeDefined();
                    expect(typeof node.x).toBe('number');
                    expect(typeof node.y).toBe('number');
                });

                done();
            }, 500); // Wait for layout to stabilize
        });

        it("should position nodes without overlap", function(done) {
            // Act
            parser.parse(testOntologyData);
            graph.nodes(parser.nodes());
            graph.start();

            // Assert
            setTimeout(function() {
                var nodes = graph.nodes();
                var minDistance = 30; // Minimum expected distance

                for (var i = 0; i < nodes.length; i++) {
                    for (var j = i + 1; j < nodes.length; j++) {
                        var dx = nodes[i].x - nodes[j].x;
                        var dy = nodes[i].y - nodes[j].y;
                        var distance = Math.sqrt(dx * dx + dy * dy);

                        expect(distance).toBeGreaterThan(minDistance);
                    }
                }

                done();
            }, 500);
        });
    });

    describe("Real Ontology Files", function() {
        it("should parse FOAF ontology", function(done) {
            // Arrange - Load actual FOAF test data
            var xhr = new XMLHttpRequest();
            xhr.open('GET', '../src/app/data/foaf.json', true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    var foafData = JSON.parse(xhr.responseText);

                    // Act
                    parser.parse(foafData);

                    // Assert
                    var nodes = parser.nodes();
                    expect(nodes.length).toBeGreaterThan(0);

                    var personClass = nodes.find(function(n) {
                        return n.label && n.label().toLowerCase().includes("person");
                    });
                    expect(personClass).toBeDefined();

                    done();
                }
            };
            xhr.send();
        });

        it("should handle complex ontology with multiple constructs", function(done) {
            // Arrange
            var complexOntology = {
                "class": [
                    { "id": "class1", "type": "owl:Class", "label": { "en": "Class 1" }},
                    { "id": "class2", "type": "owl:Class", "label": { "en": "Class 2" }},
                    { "id": "union1", "type": "owl:unionOf", "label": { "en": "Union" }}
                ],
                "property": [
                    { "id": "prop1", "type": "owl:ObjectProperty", "domain": "class1", "range": "class2" },
                    { "id": "prop2", "type": "owl:FunctionalProperty", "domain": "class1", "range": "class2" },
                    { "id": "prop3", "type": "owl:TransitiveProperty", "domain": "class1", "range": "class1" }
                ],
                "propertyAttribute": [
                    { "type": "rdfs:subClassOf", "domain": "class2", "range": "class1" }
                ]
            };

            // Act
            parser.parse(complexOntology);

            // Assert
            setTimeout(function() {
                var nodes = parser.nodes();
                var properties = parser.properties();

                expect(nodes.length).toBe(3);
                expect(properties.length).toBeGreaterThanOrEqual(3);

                var unionNode = nodes.find(function(n) {
                    return n.type() === "owl:unionOf";
                });
                expect(unionNode).toBeDefined();

                done();
            }, 100);
        });
    });

    describe("Error Recovery Integration", function() {
        it("should gracefully handle missing node references", function() {
            // Arrange
            var brokenOntology = {
                "class": [
                    { "id": "class1", "type": "owl:Class", "label": { "en": "Class 1" }}
                ],
                "property": [
                    {
                        "id": "prop1",
                        "type": "owl:ObjectProperty",
                        "domain": "class1",
                        "range": "nonexistent" // Broken reference
                    }
                ]
            };

            // Act & Assert - Should not throw
            expect(function() {
                parser.parse(brokenOntology);
            }).not.toThrow();

            var nodes = parser.nodes();
            expect(nodes.length).toBe(1);
        });

        it("should handle circular subclass relationships", function() {
            // Arrange
            var circularOntology = {
                "class": [
                    { "id": "class1", "type": "owl:Class" },
                    { "id": "class2", "type": "owl:Class" }
                ],
                "propertyAttribute": [
                    { "type": "rdfs:subClassOf", "domain": "class1", "range": "class2" },
                    { "type": "rdfs:subClassOf", "domain": "class2", "range": "class1" }
                ]
            };

            // Act & Assert
            expect(function() {
                parser.parse(circularOntology);
            }).not.toThrow();
        });
    });

    describe("Rendering Integration", function() {
        it("should render parsed ontology to SVG", function(done) {
            // Act
            parser.parse(testOntologyData);
            graph.nodes(parser.nodes());
            graph.links(parser.properties());
            graph.update();

            // Assert
            setTimeout(function() {
                var container = document.getElementById('integration-test-graph');
                var svg = container.querySelector('svg');

                expect(svg).not.toBeNull();

                var circles = svg.querySelectorAll('circle');
                expect(circles.length).toBeGreaterThan(0);

                var paths = svg.querySelectorAll('path');
                expect(paths.length).toBeGreaterThan(0);

                done();
            }, 200);
        });

        it("should apply correct styling to elements", function(done) {
            // Act
            parser.parse(testOntologyData);
            graph.nodes(parser.nodes());
            graph.update();

            // Assert
            setTimeout(function() {
                var container = document.getElementById('integration-test-graph');
                var classElements = container.querySelectorAll('.class');

                expect(classElements.length).toBeGreaterThan(0);

                done();
            }, 200);
        });
    });

    describe("Filter Integration", function() {
        it("should filter datatypes from graph", function(done) {
            // Arrange
            var ontologyWithDatatypes = {
                "class": [
                    { "id": "class1", "type": "owl:Class", "label": { "en": "Person" }},
                    { "id": "datatype1", "type": "rdfs:Datatype", "label": { "en": "String" }}
                ],
                "property": [
                    { "id": "prop1", "type": "owl:DatatypeProperty", "domain": "class1", "range": "datatype1" }
                ]
            };

            parser.parse(ontologyWithDatatypes);

            // Act
            var datatypeFilter = require("../../src/webvowl/js/modules/datatypeFilter")();
            datatypeFilter.enabled(true);
            datatypeFilter.filter(parser.nodes(), parser.properties());

            // Assert
            setTimeout(function() {
                var filteredNodes = datatypeFilter.filteredNodes();
                var hasDatatype = filteredNodes.some(function(n) {
                    return n.type() === "rdfs:Datatype";
                });

                expect(hasDatatype).toBe(false);

                done();
            }, 100);
        });
    });

    describe("Memory and Performance", function() {
        it("should handle large ontologies without memory leak", function(done) {
            // Arrange
            var largeOntology = {
                "class": [],
                "property": []
            };

            for (var i = 0; i < 500; i++) {
                largeOntology.class.push({
                    "id": "class" + i,
                    "type": "owl:Class",
                    "label": { "en": "Class " + i }
                });
            }

            // Act
            var initialMemory = performance.memory ? performance.memory.usedJSHeapSize : 0;
            parser.parse(largeOntology);
            var afterParse = performance.memory ? performance.memory.usedJSHeapSize : 0;

            // Assert
            setTimeout(function() {
                var nodes = parser.nodes();
                expect(nodes.length).toBe(500);

                // Memory should not grow excessively (if available)
                if (performance.memory) {
                    var memoryGrowth = afterParse - initialMemory;
                    expect(memoryGrowth).toBeLessThan(50 * 1024 * 1024); // <50MB
                }

                done();
            }, 100);
        });
    });
});
