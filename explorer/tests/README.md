# WebVOWL Test Suite

Comprehensive London TDD test suite for WebVOWL ontology visualization.

## Quick Start

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test types
npm run test:unit
npm run test:integration
npm run test:e2e
npm run test:benchmark

# Watch mode for development
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Test Structure

```
tests/
├── unit/                           # Unit tests (100+ tests)
│   ├── parser.test.js             # Parser module tests
│   ├── graph.test.js              # Graph module tests
│   └── elements.test.js           # Element factory tests
│
├── integration/                    # Integration tests (30+ tests)
│   └── owl-parsing.integration.test.js
│
├── e2e/                           # End-to-end tests (20+ tests)
│   └── visualization.e2e.test.js
│
├── benchmarks/                    # Performance benchmarks
│   └── performance.benchmark.js
│
├── fixtures/                      # Test data
│   └── ontologies/
│
└── karma.conf.js                  # Test runner configuration
```

## Test Philosophy

### London TDD Approach

This test suite follows **London School TDD**:

✅ **Behavior-Driven**: Focus on interactions, not state
✅ **Mock-Heavy**: Extensive use of mocks to isolate units
✅ **Collaboration Testing**: Verify how objects work together
✅ **Outside-In**: Start from high-level behaviors

### Test Pyramid

```
         /\
        /E2E\      ~10 tests (browser-based)
       /------\
      /Integr.\   ~30 tests (real modules)
     /----------\
    /   Unit     \ ~100+ tests (mocked dependencies)
   /--------------\
```

## Coverage Areas

### ✅ Unit Tests (100+ tests)

**Parser Module**:
- [x] Parse valid ontology data
- [x] Handle empty/malformed data
- [x] Create nodes with correct types
- [x] Link properties to nodes
- [x] Handle circular references
- [x] Dictionary management
- [x] Settings import

**Graph Module**:
- [x] Node management (add/remove/find)
- [x] Link management
- [x] Force layout control
- [x] Zoom and pan operations
- [x] Graph filtering
- [x] Statistics calculation
- [x] Rendering pipeline

**Element Factories**:
- [x] OwlClass creation
- [x] OwlObjectProperty creation
- [x] Set operators (Union, Intersection, Complement)
- [x] Property characteristics (Functional, Transitive)
- [x] Link visualization
- [x] Element attributes and styling

### ✅ Integration Tests (30+ tests)

- [x] Complete parsing pipeline (OWL → Graph)
- [x] Graph layout integration
- [x] Real ontology files (FOAF, etc.)
- [x] Filter integration
- [x] Error recovery
- [x] Memory management

### ✅ End-to-End Tests (20+ tests)

- [x] Application loading
- [x] Ontology selection
- [x] Graph interaction (zoom, pan, click)
- [x] Filter operations
- [x] Search functionality
- [x] Export operations
- [x] Responsive layout
- [x] Accessibility
- [x] Error handling

### ✅ Performance Benchmarks

- [x] Parsing performance (small/medium/large)
- [x] Layout stabilization
- [x] Rendering updates
- [x] Memory usage
- [x] Search performance
- [x] Filter performance

## Performance Thresholds

| Metric | Threshold | Purpose |
|--------|-----------|---------|
| Small ontology parse | <100ms | Fast feedback |
| Medium ontology parse | <500ms | Interactive |
| Large ontology parse | <2000ms | Acceptable |
| Layout stabilization | <1000ms | Smooth UX |
| Render update | <50ms | 20 FPS minimum |
| Memory per node | <10KB | Scalability |

## Writing Tests

### Test Naming Convention

```javascript
describe("Module Name", function() {
    it("should [expected behavior] when [condition]", function() {
        // Test implementation
    });
});
```

### Arrange-Act-Assert Pattern

```javascript
it("should create node with correct type", function() {
    // Arrange: Setup test data and mocks
    var mockGraph = jasmine.createSpyObj('graph', ['addNode']);
    var nodeData = { id: "test", type: "owl:Class" };

    // Act: Execute the behavior
    var node = createNode(mockGraph, nodeData);

    // Assert: Verify the outcome
    expect(node.type()).toBe("owl:Class");
    expect(mockGraph.addNode).toHaveBeenCalled();
});
```

### Mocking Guidelines

**DO Mock**:
- ✅ External dependencies (HTTP, filesystem)
- ✅ Slow operations (layout computation)
- ✅ Complex libraries (D3.js force layout)
- ✅ User input/events

**DON'T Mock**:
- ❌ Objects under test
- ❌ Simple data structures
- ❌ Pure functions
- ❌ Trivial dependencies

### Example: Creating Mocks

```javascript
// Spy object with methods
var mockGraph = jasmine.createSpyObj('graph', [
    'addNode',
    'addLink',
    'update'
]);

// Configure return values
mockGraph.addNode.and.returnValue({ id: "node1" });

// Spy on existing method
spyOn(d3.layout, 'force').and.returnValue(mockForce);

// Verify calls
expect(mockGraph.addNode).toHaveBeenCalledWith(nodeData);
expect(mockGraph.addNode).toHaveBeenCalledTimes(3);
```

## Running Tests

### NPM Scripts

```bash
# Run all tests once
npm test

# Run with coverage report
npm run test:coverage

# Watch mode (auto-rerun on file changes)
npm run test:watch

# Run specific test file
npm test -- tests/unit/parser.test.js

# Run tests matching pattern
npm test -- --grep "Parser Module"

# Run tests in specific browser
npm test -- --browsers=Chrome
npm test -- --browsers=Firefox
```

### CI/CD Integration

Tests run automatically on:

- **Every commit**: Unit + Integration tests
- **Pull requests**: Full test suite
- **Nightly builds**: Full suite + benchmarks

### Coverage Reports

After running `npm run test:coverage`:

```bash
# View HTML report
open coverage/index.html

# View terminal summary
cat coverage/lcov-report/index.html

# Check coverage.json for programmatic access
cat coverage/coverage.json
```

### Coverage Requirements

| Metric | Target | Minimum |
|--------|--------|---------|
| Statements | 85% | 80% |
| Branches | 80% | 75% |
| Functions | 85% | 80% |
| Lines | 85% | 80% |

## Continuous Integration

### GitHub Actions Example

```yaml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npm test
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v2
        with:
          files: ./coverage/lcov.info
```

## Debugging Tests

### Run Single Test

```javascript
// Use 'fit' instead of 'it' to focus on one test
fit("should do something specific", function() {
    // Only this test will run
});

// Use 'fdescribe' to focus on one suite
fdescribe("Specific Module", function() {
    // Only tests in this suite will run
});
```

### Skip Tests

```javascript
// Temporarily skip a test
xit("should do something", function() {
    // This test will be skipped
});

// Skip a suite
xdescribe("Module", function() {
    // All tests in this suite will be skipped
});
```

### Debug Output

```javascript
it("should debug something", function() {
    var result = functionUnderTest();

    // Print to console
    console.log("Result:", result);

    // Use debugger (if running with --debug-brk)
    debugger;

    expect(result).toBeDefined();
});
```

## Best Practices

### Test Independence

✅ **DO**:
- Each test runs independently
- Clean up after each test
- No shared state between tests

❌ **DON'T**:
- Rely on test execution order
- Share variables between tests
- Leave DOM elements after test

### Test Speed

✅ **DO**:
- Keep unit tests fast (<100ms)
- Use mocks for slow operations
- Run integration tests separately

❌ **DON'T**:
- Make network requests in unit tests
- Wait unnecessarily with setTimeout
- Test implementation details

### Test Maintenance

✅ **DO**:
- Update tests when requirements change
- Refactor tests with production code
- Remove obsolete tests

❌ **DON'T**:
- Comment out failing tests
- Skip tests without explanation
- Ignore test warnings

## Troubleshooting

### Common Issues

**Problem**: "ReferenceError: d3 is not defined"
- **Solution**: Ensure D3.js is loaded before tests in karma.conf.js

**Problem**: "Timeout of 2000ms exceeded"
- **Solution**: Increase timeout for async tests: `it("...", function(done) { ... }, 5000);`

**Problem**: "Expected spy to have been called"
- **Solution**: Check if async operation completed before assertion

**Problem**: PhantomJS crashes
- **Solution**: Use Chrome Headless: `npm test -- --browsers=ChromeHeadless`

### Getting Help

- 📖 Read test strategy: `/docs/testing/test-strategy.md`
- 💬 Check existing tests for examples
- 🐛 Open issue on GitHub
- 📧 Contact testing team

## Contributing

### Pull Request Checklist

Before submitting a PR:

- [ ] All tests pass (`npm test`)
- [ ] Coverage above threshold (`npm run test:coverage`)
- [ ] New features have tests
- [ ] Bug fixes have regression tests
- [ ] Tests follow London TDD style
- [ ] Test names are descriptive
- [ ] No skipped tests (unless documented)

### Adding New Tests

1. Create test file in appropriate directory
2. Follow naming convention: `*.test.js`
3. Use Arrange-Act-Assert pattern
4. Mock external dependencies
5. Include both happy path and edge cases
6. Run locally: `npm test`
7. Verify coverage: `npm run test:coverage`

## Resources

- 📖 [Test Strategy Document](../docs/testing/test-strategy.md)
- 📖 [Jasmine Documentation](https://jasmine.github.io/)
- 📖 [London TDD Guide](https://github.com/testdouble/contributing-tests/wiki/London-school-TDD)
- 📖 [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

## License

MIT License - Same as WebVOWL

---

**Last Updated**: 2025-11-10
**Test Count**: 150+ tests
**Coverage**: TBD (run `npm run test:coverage`)
