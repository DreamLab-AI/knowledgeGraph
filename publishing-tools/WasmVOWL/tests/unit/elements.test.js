/**
 * London TDD Unit Tests for Element Factory Modules
 *
 * Focus: Test node and property creation with proper mocking
 */

describe("Element Factories", function() {
    var mockGraph;

    beforeEach(function() {
        // Mock graph dependency
        mockGraph = jasmine.createSpyObj('graph', [
            'options',
            'getNodeById',
            'addNode',
            'addProperty'
        ]);
    });

    describe("OwlClass Creation", function() {
        var OwlClass;

        beforeEach(function() {
            OwlClass = require("../../src/webvowl/js/elements/nodes/implementations/OwlClass");
        });

        it("should create instance with correct type", function() {
            // Act
            var owlClass = new OwlClass(mockGraph);

            // Assert
            expect(owlClass.type()).toBe("owl:Class");
        });

        it("should inherit from RoundNode", function() {
            // Act
            var owlClass = new OwlClass(mockGraph);

            // Assert
            expect(typeof owlClass.radius).toBe('function');
            expect(typeof owlClass.x).toBe('function');
            expect(typeof owlClass.y).toBe('function');
        });

        it("should set and get label", function() {
            // Arrange
            var owlClass = new OwlClass(mockGraph);

            // Act
            owlClass.label("Test Class");

            // Assert
            expect(owlClass.label()).toBe("Test Class");
        });

        it("should set and get IRI", function() {
            // Arrange
            var owlClass = new OwlClass(mockGraph);

            // Act
            owlClass.iri("http://example.org/TestClass");

            // Assert
            expect(owlClass.iri()).toBe("http://example.org/TestClass");
        });

        it("should handle multiple instances independently", function() {
            // Arrange & Act
            var class1 = new OwlClass(mockGraph);
            var class2 = new OwlClass(mockGraph);
            class1.label("Class 1");
            class2.label("Class 2");

            // Assert
            expect(class1.label()).toBe("Class 1");
            expect(class2.label()).toBe("Class 2");
        });
    });

    describe("OwlObjectProperty Creation", function() {
        var OwlObjectProperty;

        beforeEach(function() {
            OwlObjectProperty = require("../../src/webvowl/js/elements/properties/implementations/OwlObjectProperty");
        });

        it("should create instance with correct type", function() {
            // Act
            var property = new OwlObjectProperty(mockGraph);

            // Assert
            expect(property.type()).toBe("owl:ObjectProperty");
        });

        it("should set domain and range nodes", function() {
            // Arrange
            var property = new OwlObjectProperty(mockGraph);
            var mockDomain = { id: "domain" };
            var mockRange = { id: "range" };

            // Act
            property.domain(mockDomain);
            property.range(mockRange);

            // Assert
            expect(property.domain()).toBe(mockDomain);
            expect(property.range()).toBe(mockRange);
        });

        it("should have object attribute", function() {
            // Act
            var property = new OwlObjectProperty(mockGraph);

            // Assert
            var attributes = property.attributes();
            expect(attributes).toContain("object");
        });

        it("should apply correct style class", function() {
            // Act
            var property = new OwlObjectProperty(mockGraph);

            // Assert
            expect(property.styleClass()).toBe("objectproperty");
        });
    });

    describe("RdfsDatatype Creation", function() {
        var RdfsDatatype;

        beforeEach(function() {
            RdfsDatatype = require("../../src/webvowl/js/elements/nodes/implementations/RdfsDatatype");
        });

        it("should create datatype with correct type", function() {
            // Act
            var datatype = new RdfsDatatype(mockGraph);

            // Assert
            expect(datatype.type()).toBe("rdfs:Datatype");
        });

        it("should use rectangular node shape", function() {
            // Act
            var datatype = new RdfsDatatype(mockGraph);

            // Assert
            expect(typeof datatype.width).toBe('function');
            expect(typeof datatype.height).toBe('function');
        });
    });

    describe("Set Operator Nodes", function() {
        var OwlUnionOf, OwlIntersectionOf, OwlComplementOf;

        beforeEach(function() {
            OwlUnionOf = require("../../src/webvowl/js/elements/nodes/implementations/OwlUnionOf");
            OwlIntersectionOf = require("../../src/webvowl/js/elements/nodes/implementations/OwlIntersectionOf");
            OwlComplementOf = require("../../src/webvowl/js/elements/nodes/implementations/OwlComplementOf");
        });

        it("should create UnionOf with correct type", function() {
            // Act
            var union = new OwlUnionOf(mockGraph);

            // Assert
            expect(union.type()).toBe("owl:unionOf");
        });

        it("should create IntersectionOf with correct type", function() {
            // Act
            var intersection = new OwlIntersectionOf(mockGraph);

            // Assert
            expect(intersection.type()).toBe("owl:intersectionOf");
        });

        it("should create ComplementOf with correct type", function() {
            // Act
            var complement = new OwlComplementOf(mockGraph);

            // Assert
            expect(complement.type()).toBe("owl:complementOf");
        });

        it("should handle operands for union", function() {
            // Arrange
            var union = new OwlUnionOf(mockGraph);
            var operands = [
                { id: "class1" },
                { id: "class2" }
            ];

            // Act
            union.operands(operands);

            // Assert
            expect(union.operands()).toEqual(operands);
            expect(union.operands().length).toBe(2);
        });
    });

    describe("Property Characteristics", function() {
        var OwlFunctionalProperty;
        var OwlTransitiveProperty;

        beforeEach(function() {
            OwlFunctionalProperty = require("../../src/webvowl/js/elements/properties/implementations/OwlFunctionalProperty");
            OwlTransitiveProperty = require("../../src/webvowl/js/elements/properties/implementations/OwlTransitiveProperty");
        });

        it("should mark property as functional", function() {
            // Act
            var property = new OwlFunctionalProperty(mockGraph);

            // Assert
            expect(property.type()).toBe("owl:FunctionalProperty");
            expect(property.isFunctional()).toBe(true);
        });

        it("should mark property as transitive", function() {
            // Act
            var property = new OwlTransitiveProperty(mockGraph);

            // Assert
            expect(property.type()).toBe("owl:TransitiveProperty");
            expect(property.isTransitive()).toBe(true);
        });
    });

    describe("Link Visualization", function() {
        var ArrowLink, PlainLink;

        beforeEach(function() {
            ArrowLink = require("../../src/webvowl/js/elements/links/ArrowLink");
            PlainLink = require("../../src/webvowl/js/elements/links/PlainLink");
        });

        it("should create arrow link with direction", function() {
            // Arrange
            var mockProperty = jasmine.createSpyObj('property', ['domain', 'range']);

            // Act
            var arrowLink = new ArrowLink(mockGraph, mockProperty);

            // Assert
            expect(arrowLink).toBeDefined();
            expect(typeof arrowLink.render).toBe('function');
        });

        it("should create plain link without arrow", function() {
            // Arrange
            var mockProperty = jasmine.createSpyObj('property', ['domain', 'range']);

            // Act
            var plainLink = new PlainLink(mockGraph, mockProperty);

            // Assert
            expect(plainLink).toBeDefined();
        });
    });

    describe("Element Attributes", function() {
        var BaseElement;

        beforeEach(function() {
            BaseElement = require("../../src/webvowl/js/elements/BaseElement");
        });

        it("should store custom attributes", function() {
            // Arrange
            var element = new BaseElement(mockGraph);

            // Act
            element.attribute("customKey", "customValue");

            // Assert
            expect(element.attribute("customKey")).toBe("customValue");
        });

        it("should handle multiple attributes", function() {
            // Arrange
            var element = new BaseElement(mockGraph);

            // Act
            element.attribute("key1", "value1");
            element.attribute("key2", "value2");

            // Assert
            expect(element.attribute("key1")).toBe("value1");
            expect(element.attribute("key2")).toBe("value2");
        });

        it("should return undefined for non-existent attributes", function() {
            // Arrange
            var element = new BaseElement(mockGraph);

            // Act & Assert
            expect(element.attribute("nonexistent")).toBeUndefined();
        });
    });

    describe("Element Visibility", function() {
        var OwlClass;

        beforeEach(function() {
            OwlClass = require("../../src/webvowl/js/elements/nodes/implementations/OwlClass");
        });

        it("should be visible by default", function() {
            // Act
            var owlClass = new OwlClass(mockGraph);

            // Assert
            expect(owlClass.visible()).toBe(true);
        });

        it("should toggle visibility", function() {
            // Arrange
            var owlClass = new OwlClass(mockGraph);

            // Act
            owlClass.visible(false);

            // Assert
            expect(owlClass.visible()).toBe(false);
        });

        it("should hide filtered elements", function() {
            // Arrange
            var owlClass = new OwlClass(mockGraph);
            owlClass.filtered(true);

            // Act
            var isVisible = owlClass.visible();

            // Assert
            expect(isVisible).toBe(false);
        });
    });

    describe("Node Positioning", function() {
        var OwlClass;

        beforeEach(function() {
            OwlClass = require("../../src/webvowl/js/elements/nodes/implementations/OwlClass");
        });

        it("should set and get x coordinate", function() {
            // Arrange
            var node = new OwlClass(mockGraph);

            // Act
            node.x(100);

            // Assert
            expect(node.x()).toBe(100);
        });

        it("should set and get y coordinate", function() {
            // Arrange
            var node = new OwlClass(mockGraph);

            // Act
            node.y(200);

            // Assert
            expect(node.y()).toBe(200);
        });

        it("should calculate distance to another node", function() {
            // Arrange
            var node1 = new OwlClass(mockGraph);
            var node2 = new OwlClass(mockGraph);
            node1.x(0).y(0);
            node2.x(3).y(4);

            // Act
            var distance = node1.distanceTo(node2);

            // Assert
            expect(distance).toBe(5); // 3-4-5 triangle
        });
    });

    describe("Element Styling", function() {
        var OwlClass;

        beforeEach(function() {
            OwlClass = require("../../src/webvowl/js/elements/nodes/implementations/OwlClass");
        });

        it("should apply CSS class", function() {
            // Arrange
            var node = new OwlClass(mockGraph);

            // Act
            node.styleClass("highlighted");

            // Assert
            expect(node.styleClass()).toBe("highlighted");
        });

        it("should support multiple CSS classes", function() {
            // Arrange
            var node = new OwlClass(mockGraph);

            // Act
            node.styleClass("class1 class2 class3");

            // Assert
            expect(node.styleClass()).toContain("class1");
            expect(node.styleClass()).toContain("class2");
        });
    });
});
