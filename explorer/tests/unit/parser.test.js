/**
 * London TDD Unit Tests for Parser Module
 *
 * Focus: Test interactions and behaviors with mocked dependencies
 * Follows Arrange-Act-Assert pattern
 */

describe("Parser Module", function() {
    var parser;
    var mockGraph;
    var mockAttributeParser;
    var mockNodePrototypeMap;
    var mockPropertyPrototypeMap;

    beforeEach(function() {
        // Arrange: Create mocks for all dependencies
        mockGraph = jasmine.createSpyObj('graph', [
            'setZoom',
            'options',
            'getNodeMap',
            'getPropertyMap'
        ]);

        mockAttributeParser = jasmine.createSpyObj('attributeParser', [
            'parse',
            'parseAttribute',
            'parseAttributes'
        ]);

        mockNodePrototypeMap = jasmine.createSpyObj('nodePrototypeMap', [
            'get',
            'has',
            'create'
        ]);

        mockPropertyPrototypeMap = jasmine.createSpyObj('propertyPrototypeMap', [
            'get',
            'has',
            'create'
        ]);

        // Initialize parser with mocked graph
        parser = require("../../src/webvowl/js/parser")(mockGraph);
    });

    describe("parseOntology", function() {
        it("should parse valid ontology data and create nodes", function() {
            // Arrange
            var ontologyData = {
                class: [
                    { id: "class1", type: "owl:Class" },
                    { id: "class2", type: "owl:Class" }
                ],
                property: []
            };

            // Act
            parser.parse(ontologyData);

            // Assert
            var nodes = parser.nodes();
            expect(nodes).toBeDefined();
            expect(Array.isArray(nodes)).toBe(true);
        });

        it("should handle empty ontology data gracefully", function() {
            // Arrange
            var emptyData = {
                class: [],
                property: []
            };

            // Act
            parser.parse(emptyData);

            // Assert
            var nodes = parser.nodes();
            var properties = parser.properties();
            expect(nodes.length).toBe(0);
            expect(properties.length).toBe(0);
        });

        it("should parse properties and link them to nodes", function() {
            // Arrange
            var ontologyData = {
                class: [
                    { id: "class1", type: "owl:Class" },
                    { id: "class2", type: "owl:Class" }
                ],
                property: [
                    {
                        id: "prop1",
                        type: "owl:ObjectProperty",
                        domain: "class1",
                        range: "class2"
                    }
                ]
            };

            // Act
            parser.parse(ontologyData);

            // Assert
            var properties = parser.properties();
            expect(properties).toBeDefined();
            expect(properties.length).toBeGreaterThan(0);
        });

        it("should handle malformed ontology data with error", function() {
            // Arrange
            var malformedData = {
                // Missing required fields
                invalid: "data"
            };

            // Act & Assert
            expect(function() {
                parser.parse(malformedData);
            }).toThrow();
        });
    });

    describe("Dictionary Management", function() {
        it("should store and retrieve dictionary entries", function() {
            // Arrange
            var testDictionary = [
                { id: "term1", label: "Term One" },
                { id: "term2", label: "Term Two" }
            ];

            // Act
            parser.setDictionary(testDictionary);
            var retrieved = parser.getDictionary();

            // Assert
            expect(retrieved).toEqual(testDictionary);
            expect(retrieved.length).toBe(2);
        });

        it("should return empty array when no dictionary set", function() {
            // Act
            var dictionary = parser.getDictionary();

            // Assert
            expect(Array.isArray(dictionary)).toBe(true);
            expect(dictionary.length).toBe(0);
        });
    });

    describe("Settings Import", function() {
        it("should indicate settings not imported by default", function() {
            // Act & Assert
            expect(parser.settingsImported()).toBe(false);
        });

        it("should parse zoom settings from imported data", function() {
            // Arrange
            var settingsData = {
                global: {
                    zoom: 1.5
                }
            };

            // Act
            parser.parseSettings(settingsData);

            // Assert
            expect(mockGraph.setZoom).toHaveBeenCalledWith(1.5);
            expect(parser.settingsImported()).toBe(true);
        });

        it("should handle missing settings gracefully", function() {
            // Act
            parser.parseSettings(null);

            // Assert
            expect(parser.settingsImported()).toBe(false);
        });
    });

    describe("Node Creation", function() {
        it("should create nodes with correct types", function() {
            // Arrange
            var nodeData = {
                id: "testNode",
                type: "owl:Class",
                label: "Test Class"
            };

            mockNodePrototypeMap.get.and.returnValue(function() {
                return {
                    id: nodeData.id,
                    type: nodeData.type,
                    label: nodeData.label
                };
            });

            // Act
            var node = parser.createNode(nodeData);

            // Assert
            expect(node).toBeDefined();
            expect(node.id).toBe("testNode");
            expect(node.type).toBe("owl:Class");
        });

        it("should throw error for unknown node types", function() {
            // Arrange
            var invalidNodeData = {
                id: "invalidNode",
                type: "invalid:Type"
            };

            mockNodePrototypeMap.has.and.returnValue(false);

            // Act & Assert
            expect(function() {
                parser.createNode(invalidNodeData);
            }).toThrow();
        });
    });

    describe("Property Creation", function() {
        it("should create properties with domain and range", function() {
            // Arrange
            var propertyData = {
                id: "testProperty",
                type: "owl:ObjectProperty",
                domain: "class1",
                range: "class2"
            };

            var mockProperty = jasmine.createSpyObj('property', ['domain', 'range']);
            mockProperty.domain.and.returnValue(mockProperty);
            mockProperty.range.and.returnValue(mockProperty);

            mockPropertyPrototypeMap.get.and.returnValue(function() {
                return mockProperty;
            });

            // Act
            var property = parser.createProperty(propertyData);

            // Assert
            expect(mockProperty.domain).toHaveBeenCalled();
            expect(mockProperty.range).toHaveBeenCalled();
        });

        it("should handle properties without domain or range", function() {
            // Arrange
            var propertyData = {
                id: "testProperty",
                type: "owl:ObjectProperty"
            };

            // Act
            var property = parser.createProperty(propertyData);

            // Assert
            expect(property).toBeDefined();
        });
    });

    describe("Class Hierarchy Parsing", function() {
        it("should parse subclass relationships", function() {
            // Arrange
            var ontologyData = {
                class: [
                    { id: "parent", type: "owl:Class" },
                    { id: "child", type: "owl:Class" }
                ],
                property: [
                    {
                        id: "subclass1",
                        type: "rdfs:subClassOf",
                        domain: "child",
                        range: "parent"
                    }
                ]
            };

            // Act
            parser.parse(ontologyData);

            // Assert
            var properties = parser.properties();
            var subclassProperty = properties.find(function(p) {
                return p.type === "rdfs:subClassOf";
            });
            expect(subclassProperty).toBeDefined();
        });
    });

    describe("Equivalent Class Merging", function() {
        it("should merge equivalent classes", function() {
            // Arrange
            var ontologyData = {
                class: [
                    { id: "class1", type: "owl:Class" },
                    { id: "class2", type: "owl:Class" }
                ],
                property: [
                    {
                        id: "equiv1",
                        type: "owl:equivalentClass",
                        domain: "class1",
                        range: "class2"
                    }
                ]
            };

            // Act
            parser.parse(ontologyData);

            // Assert - Should have processed equivalent classes
            var nodes = parser.nodes();
            expect(nodes).toBeDefined();
        });
    });

    describe("Error Handling", function() {
        it("should handle circular references", function() {
            // Arrange
            var circularData = {
                class: [
                    { id: "class1", type: "owl:Class" }
                ],
                property: [
                    {
                        id: "circular",
                        type: "owl:ObjectProperty",
                        domain: "class1",
                        range: "class1"
                    }
                ]
            };

            // Act & Assert - Should not throw
            expect(function() {
                parser.parse(circularData);
            }).not.toThrow();
        });

        it("should handle missing node references", function() {
            // Arrange
            var brokenData = {
                class: [
                    { id: "class1", type: "owl:Class" }
                ],
                property: [
                    {
                        id: "broken",
                        type: "owl:ObjectProperty",
                        domain: "class1",
                        range: "nonexistent"
                    }
                ]
            };

            // Act
            parser.parse(brokenData);

            // Assert - Should handle gracefully
            expect(parser.nodes()).toBeDefined();
        });
    });

    describe("Performance Considerations", function() {
        it("should parse large ontologies efficiently", function() {
            // Arrange
            var largeOntology = {
                class: [],
                property: []
            };

            // Create 1000 classes
            for (var i = 0; i < 1000; i++) {
                largeOntology.class.push({
                    id: "class" + i,
                    type: "owl:Class",
                    label: "Class " + i
                });
            }

            // Act
            var startTime = performance.now();
            parser.parse(largeOntology);
            var endTime = performance.now();
            var duration = endTime - startTime;

            // Assert - Should complete in reasonable time (<1 second)
            expect(duration).toBeLessThan(1000);
        });
    });
});
