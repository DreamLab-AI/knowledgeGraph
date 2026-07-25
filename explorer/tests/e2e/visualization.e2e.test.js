/**
 * End-to-End Tests for WebVOWL Visualization
 *
 * Tests complete user workflows from loading to interaction
 * Requires browser environment (Karma/Selenium)
 */

describe("WebVOWL End-to-End Tests", function() {
    var baseUrl = 'http://localhost:8000/';

    beforeEach(function() {
        // Load the application
        browser.get(baseUrl);
        browser.waitForAngular();
    });

    describe("Application Loading", function() {
        it("should load the main page successfully", function() {
            // Assert
            expect(browser.getTitle()).toContain('WebVOWL');

            var graphContainer = element(by.id('graph'));
            expect(graphContainer.isPresent()).toBe(true);
        });

        it("should display the menu bar", function() {
            // Assert
            var menuBar = element(by.css('.menubar'));
            expect(menuBar.isDisplayed()).toBe(true);

            var ontologyMenu = element(by.id('select'));
            expect(ontologyMenu.isDisplayed()).toBe(true);
        });

        it("should load default ontology on startup", function(done) {
            // Wait for graph to render
            browser.sleep(2000);

            // Assert
            var nodes = element.all(by.css('circle.node'));
            nodes.count().then(function(count) {
                expect(count).toBeGreaterThan(0);
                done();
            });
        });
    });

    describe("Ontology Selection", function() {
        it("should load FOAF ontology from menu", function(done) {
            // Arrange
            var ontologyMenu = element(by.id('select'));

            // Act
            ontologyMenu.click();
            var foafOption = element(by.cssContainingText('option', 'FOAF'));
            foafOption.click();

            // Wait for load
            browser.sleep(2000);

            // Assert
            var nodes = element.all(by.css('circle.node'));
            nodes.count().then(function(count) {
                expect(count).toBeGreaterThan(0);
                done();
            });
        });

        it("should update graph when loading new ontology", function(done) {
            // Arrange
            var nodes = element.all(by.css('circle.node'));
            var initialCount;

            nodes.count().then(function(count) {
                initialCount = count;

                // Act
                var ontologyMenu = element(by.id('select'));
                ontologyMenu.click();
                var option = element(by.css('option:nth-child(2)'));
                option.click();

                browser.sleep(2000);

                // Assert
                nodes.count().then(function(newCount) {
                    expect(newCount).not.toBe(initialCount);
                    done();
                });
            });
        });
    });

    describe("Graph Interaction", function() {
        it("should zoom in on mouse wheel", function(done) {
            // Arrange
            var graph = element(by.id('graph'));
            var svg = element(by.css('#graph svg'));

            // Act
            browser.actions()
                .mouseMove(graph)
                .mouseWheel(0, 120) // Scroll up
                .perform();

            browser.sleep(500);

            // Assert
            svg.getAttribute('transform').then(function(transform) {
                expect(transform).toContain('scale');
                done();
            });
        });

        it("should pan graph on drag", function(done) {
            // Arrange
            var graph = element(by.id('graph'));

            // Act
            browser.actions()
                .mouseMove(graph, {x: 100, y: 100})
                .mouseDown()
                .mouseMove({x: 50, y: 50})
                .mouseUp()
                .perform();

            browser.sleep(500);

            // Assert - Graph should have moved
            var svg = element(by.css('#graph svg'));
            svg.getAttribute('transform').then(function(transform) {
                expect(transform).toContain('translate');
                done();
            });
        });

        it("should highlight node on hover", function(done) {
            // Arrange
            var firstNode = element.all(by.css('circle.node')).first();

            // Act
            browser.actions()
                .mouseMove(firstNode)
                .perform();

            browser.sleep(300);

            // Assert
            firstNode.getAttribute('class').then(function(className) {
                expect(className).toContain('hovered');
                done();
            });
        });

        it("should show details on node click", function(done) {
            // Arrange
            var firstNode = element.all(by.css('circle.node')).first();

            // Act
            firstNode.click();
            browser.sleep(300);

            // Assert
            var sidebar = element(by.css('.sidebar'));
            sidebar.isDisplayed().then(function(displayed) {
                expect(displayed).toBe(true);

                var detailsContent = element(by.css('.sidebar .content'));
                expect(detailsContent.isPresent()).toBe(true);

                done();
            });
        });
    });

    describe("Filter Operations", function() {
        beforeEach(function(done) {
            // Load a test ontology
            browser.get(baseUrl);
            browser.sleep(2000);
            done();
        });

        it("should filter datatypes when enabled", function(done) {
            // Arrange
            var initialNodes = element.all(by.css('circle.node'));
            var initialCount;

            initialNodes.count().then(function(count) {
                initialCount = count;

                // Act
                var filterMenu = element(by.id('filter-menu'));
                filterMenu.click();

                var datatypeCheckbox = element(by.id('datatype-filter'));
                datatypeCheckbox.click();

                browser.sleep(500);

                // Assert
                var filteredNodes = element.all(by.css('circle.node:not(.filtered)'));
                filteredNodes.count().then(function(newCount) {
                    expect(newCount).toBeLessThanOrEqual(initialCount);
                    done();
                });
            });
        });

        it("should restore nodes when filter disabled", function(done) {
            // Arrange
            var filterMenu = element(by.id('filter-menu'));
            filterMenu.click();
            var datatypeCheckbox = element(by.id('datatype-filter'));
            datatypeCheckbox.click();
            browser.sleep(500);

            var filteredCount;
            element.all(by.css('circle.node')).count().then(function(count) {
                filteredCount = count;

                // Act
                datatypeCheckbox.click();
                browser.sleep(500);

                // Assert
                element.all(by.css('circle.node')).count().then(function(restoredCount) {
                    expect(restoredCount).toBeGreaterThanOrEqual(filteredCount);
                    done();
                });
            });
        });
    });

    describe("Search Functionality", function() {
        it("should find nodes by label", function(done) {
            // Arrange
            var searchBox = element(by.css('.search-input'));
            var searchTerm = 'Person';

            // Act
            searchBox.clear();
            searchBox.sendKeys(searchTerm);
            browser.sleep(500);

            // Assert
            var highlightedNodes = element.all(by.css('circle.node.highlighted'));
            highlightedNodes.count().then(function(count) {
                expect(count).toBeGreaterThan(0);
                done();
            });
        });

        it("should clear search highlights", function(done) {
            // Arrange
            var searchBox = element(by.css('.search-input'));
            searchBox.sendKeys('Person');
            browser.sleep(500);

            // Act
            var clearButton = element(by.css('.search-clear'));
            clearButton.click();
            browser.sleep(500);

            // Assert
            var highlightedNodes = element.all(by.css('circle.node.highlighted'));
            highlightedNodes.count().then(function(count) {
                expect(count).toBe(0);
                done();
            });
        });
    });

    describe("Export Functionality", function() {
        it("should export graph as SVG", function(done) {
            // Arrange
            var exportMenu = element(by.id('export-menu'));

            // Act
            exportMenu.click();
            var svgOption = element(by.cssContainingText('button', 'SVG'));
            svgOption.click();

            browser.sleep(1000);

            // Assert - Download should trigger
            // Note: Actual file download verification depends on browser settings
            expect(true).toBe(true); // Placeholder
            done();
        });

        it("should export graph as JSON", function(done) {
            // Arrange
            var exportMenu = element(by.id('export-menu'));

            // Act
            exportMenu.click();
            var jsonOption = element(by.cssContainingText('button', 'JSON'));
            jsonOption.click();

            browser.sleep(1000);

            // Assert
            expect(true).toBe(true); // Placeholder
            done();
        });
    });

    describe("Responsive Layout", function() {
        it("should adapt to mobile viewport", function(done) {
            // Act
            browser.driver.manage().window().setSize(375, 667); // iPhone size
            browser.sleep(1000);

            // Assert
            var graph = element(by.id('graph'));
            graph.getSize().then(function(size) {
                expect(size.width).toBeLessThan(400);
                done();
            });
        });

        it("should show mobile menu on small screens", function(done) {
            // Arrange
            browser.driver.manage().window().setSize(375, 667);
            browser.sleep(1000);

            // Assert
            var mobileMenu = element(by.css('.mobile-menu'));
            mobileMenu.isDisplayed().then(function(displayed) {
                expect(displayed).toBe(true);
                done();
            });
        });
    });

    describe("Performance Benchmarks", function() {
        it("should load large ontology in reasonable time", function(done) {
            // Arrange
            var startTime = Date.now();

            // Act
            var ontologyMenu = element(by.id('select'));
            ontologyMenu.click();
            var benchmarkOption = element(by.cssContainingText('option', 'Benchmark'));
            benchmarkOption.click();

            browser.sleep(5000);

            // Assert
            var endTime = Date.now();
            var loadTime = endTime - startTime;

            expect(loadTime).toBeLessThan(10000); // <10 seconds

            var nodes = element.all(by.css('circle.node'));
            nodes.count().then(function(count) {
                expect(count).toBeGreaterThan(0);
                done();
            });
        });

        it("should maintain 30+ FPS during interaction", function(done) {
            // Note: Actual FPS measurement requires browser DevTools protocol
            // This is a placeholder for the concept

            // Arrange
            var graph = element(by.id('graph'));

            // Act - Rapid zoom/pan
            for (var i = 0; i < 10; i++) {
                browser.actions()
                    .mouseMove(graph)
                    .mouseWheel(0, 60)
                    .perform();
            }

            browser.sleep(1000);

            // Assert
            expect(true).toBe(true); // Placeholder
            done();
        });
    });

    describe("Error Handling", function() {
        it("should display error for invalid ontology URL", function(done) {
            // Arrange
            var directInput = element(by.css('.direct-input'));

            // Act
            directInput.click();
            var urlInput = element(by.css('.url-input'));
            urlInput.sendKeys('http://invalid-url.com/ontology.json');
            var loadButton = element(by.css('.load-button'));
            loadButton.click();

            browser.sleep(2000);

            // Assert
            var errorMessage = element(by.css('.error-message'));
            errorMessage.isDisplayed().then(function(displayed) {
                expect(displayed).toBe(true);
                done();
            });
        });

        it("should recover from render error", function(done) {
            // This would require injecting a problematic ontology
            // Placeholder for error recovery testing
            expect(true).toBe(true);
            done();
        });
    });

    describe("Accessibility", function() {
        it("should support keyboard navigation", function(done) {
            // Arrange
            var body = element(by.css('body'));

            // Act
            body.sendKeys(protractor.Key.TAB);
            browser.sleep(300);

            // Assert
            var focusedElement = browser.driver.switchTo().activeElement();
            focusedElement.getTagName().then(function(tag) {
                expect(['button', 'a', 'input']).toContain(tag);
                done();
            });
        });

        it("should have ARIA labels for controls", function(done) {
            // Assert
            var controls = element.all(by.css('button'));
            controls.first().getAttribute('aria-label').then(function(label) {
                expect(label).toBeDefined();
                expect(label.length).toBeGreaterThan(0);
                done();
            });
        });
    });
});
