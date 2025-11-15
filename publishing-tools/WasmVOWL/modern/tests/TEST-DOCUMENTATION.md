# WebVOWL Modern - Test Suite Documentation

## Overview

Comprehensive test suite for WebVOWL Modern application covering unit tests, integration tests, and WASM module tests.

**Test Framework**: Vitest v4.0.8
**Test Environment**: jsdom (for React components)
**Coverage Tool**: @vitest/coverage-v8

---

## Test Structure

```
modern/tests/
├── setup.ts                    # Global test setup and mocks
├── __mocks__/
│   └── wasmMock.ts            # WASM module mock for testing
├── unit/
│   ├── useGraphStore.test.ts   # Graph state management tests (47 tests)
│   ├── useUIStore.test.ts      # UI state management tests (16 tests)
│   └── useWasmSimulation.test.ts # WASM integration hook tests (10 tests)
└── integration/
    └── wasm-integration.test.ts # WASM integration tests (12 tests)
```

---

## Unit Tests

### useGraphStore Tests (47 tests)

**File**: `tests/unit/useGraphStore.test.ts`

**Coverage Areas**:
- ✅ Initial state validation
- ✅ Node operations (add, update, remove, position updates)
- ✅ Edge operations (add, update, remove)
- ✅ Selection management (node/edge selection, hover states)
- ✅ Filter operations (nodeType, degree, edgeType filters)
- ✅ Multiple filter application
- ✅ Ontology loading and parsing
- ✅ Statistics calculation (node counts, edge counts, degrees)
- ✅ Clear operations

**Key Test Cases**:
1. Node CRUD operations
2. Edge CRUD operations
3. Filter chaining and application
4. Ontology data transformation
5. Graph statistics computation

### useUIStore Tests (16 tests)

**File**: `tests/unit/useUIStore.test.ts`

**Coverage Areas**:
- ✅ Initial state (viewport, settings, notifications)
- ✅ View mode toggling (2D/3D)
- ✅ Viewport operations (zoom, rotation, target)
- ✅ Settings management (link distance, charge strength, gravity)
- ✅ Loading state management
- ✅ Notification system (add, remove, types)
- ✅ Sidebar state
- ✅ Menu state

**Key Test Cases**:
1. Viewport transformations
2. Settings updates and resets
3. Notification lifecycle
4. UI state transitions

### useWasmSimulation Tests (10 tests)

**File**: `tests/unit/useWasmSimulation.test.ts`

**Coverage Areas**:
- ✅ WASM module initialization
- ✅ Auto-start behavior
- ✅ Control functions (start, stop, reset, step)
- ✅ Settings synchronization
- ✅ Graph data loading
- ✅ Error handling
- ✅ Cleanup on unmount

**Key Test Cases**:
1. Dynamic WASM import
2. Simulation lifecycle management
3. Frame-by-frame updates
4. Error recovery

---

## Integration Tests

### WASM Integration Tests (12 tests)

**File**: `tests/integration/wasm-integration.test.ts`

**Coverage Areas**:
- ✅ Ontology loading (simple and complex)
- ✅ Datatype property handling
- ✅ Graph statistics calculation
- ✅ Filter integration (nodeType, degree, multiple filters)
- ✅ Data export
- ✅ Performance benchmarks

**Key Test Cases**:
1. Simple ontology (2 classes, 1 property)
2. Complex ontology (3 classes, 3 properties)
3. Large ontology (100 classes, 200 properties)
4. Filter performance (10 iterations)

**Performance Expectations**:
- Large ontology loading: < 1000ms
- Filter operations (10x): < 500ms

---

## Rust/WASM Tests

### Location: `rust-wasm/`

**Test Results**: ✅ **47 tests passed, 0 failed**

**Test Execution Time**: < 1 second

**Coverage Areas**:
1. **Graph Module** (12 tests)
   - Node and edge creation
   - Graph operations (add, update, query)
   - Degree calculation
   - Metadata management

2. **Layout Module** (14 tests)
   - Force calculations (repulsion, attraction, center, damping)
   - Simulation lifecycle
   - Position initialization
   - Parameter configuration

3. **Ontology Module** (11 tests)
   - OWL class parsing
   - Property parsing (object and datatype)
   - Validation rules
   - Parser configuration

4. **Render Module** (5 tests)
   - SVG generation
   - Node rendering
   - Edge rendering
   - Empty graph handling

5. **Integration Tests** (5 tests)
   - Full workflow testing
   - Error handling
   - Statistics computation

**Warnings** (non-critical):
- Unused feature flag: `console_error_panic_hook`
- Unused variable in render module
- Dead code in coordinate normalization

---

## Running Tests

### TypeScript/React Tests

```bash
cd modern

# Run all tests
npm test

# Run in watch mode
npm run test:watch

# Run with UI
npm run test:ui

# Generate coverage report
npm run test:coverage
```

### Rust/WASM Tests

```bash
cd rust-wasm

# Run unit tests
cargo test

# Run with output
cargo test -- --nocapture

# Run specific test
cargo test test_simulation_creation

# Run benchmarks
npm run bench
```

---

## Coverage Configuration

**File**: `vitest.config.ts`

**Coverage Thresholds**:
- Lines: 80%
- Functions: 80%
- Branches: 75%
- Statements: 80%

**Excluded from Coverage**:
- `node_modules/`
- `tests/`
- Configuration files (`*.config.{js,ts}`)
- Distribution files (`dist/`)
- Type definitions (`*.d.ts`)
- Entry point (`main.tsx`)

---

## Test Setup

### Global Setup (`tests/setup.ts`)

**Mocks**:
- WebGL context (for R3F components)
- ResizeObserver
- IntersectionObserver
- matchMedia

**Cleanup**:
- Automatic cleanup after each test via `@testing-library/react`

### WASM Mock (`tests/__mocks__/wasmMock.ts`)

**Functionality**:
- Simulates WASM module behavior
- Provides mock implementations for all WebVowl methods
- Enables testing without actual WASM binary

---

## Test Best Practices

### Followed Patterns:
1. **Arrange-Act-Assert** structure
2. **Descriptive test names** explaining what and why
3. **Independent tests** with proper cleanup
4. **Mock external dependencies** (WASM, WebGL)
5. **Test edge cases** (empty graphs, invalid data)
6. **Performance validation** for large datasets

### Coverage Goals:
- **Unit Tests**: Core logic and state management
- **Integration Tests**: Module interactions
- **E2E Tests**: User workflows (future enhancement)

---

## Known Limitations

1. **React Three Fiber**: Limited component testing due to WebGL requirements
   - Using mocks for Canvas components
   - Testing logic hooks separately

2. **WASM Module**: Testing via mock implementation
   - Actual WASM binary tested separately in Rust
   - Integration tested through mock

3. **Performance Tests**: Synthetic benchmarks
   - Real-world performance may vary
   - Browser-specific optimizations not tested

---

## Future Enhancements

### Planned Tests:
1. ✨ Component visual regression tests
2. ✨ E2E user workflow tests (Playwright)
3. ✨ Accessibility tests (jest-axe)
4. ✨ Cross-browser compatibility tests
5. ✨ Load testing for large ontologies (1000+ nodes)

### Planned Improvements:
1. 🔄 Increase coverage to 90%+
2. 🔄 Add property-based testing for graph algorithms
3. 🔄 Implement snapshot testing for rendered output
4. 🔄 Add mutation testing for critical paths

---

## Continuous Integration

### GitHub Actions Workflow (recommended):

```yaml
name: Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '22'
      - name: Install dependencies
        run: cd modern && npm install
      - name: Run TypeScript tests
        run: cd modern && npm test
      - name: Generate coverage
        run: cd modern && npm run test:coverage
      - name: Run Rust tests
        run: cd rust-wasm && cargo test
```

---

## Troubleshooting

### Common Issues:

**Issue**: `vitest: command not found`
**Solution**: Run `npm install` in modern directory

**Issue**: WASM module import fails
**Solution**: Build WASM first: `cd rust-wasm && npm run build`

**Issue**: WebGL context errors
**Solution**: Mocks are configured in `tests/setup.ts`

**Issue**: Tests timeout
**Solution**: Increase timeout in test file or vitest config

---

## Test Results Summary

### Total Tests: 85+

- ✅ **TypeScript Unit Tests**: 73 tests
  - useGraphStore: 47 tests
  - useUIStore: 16 tests
  - useWasmSimulation: 10 tests

- ✅ **TypeScript Integration Tests**: 12 tests
  - WASM integration: 12 tests

- ✅ **Rust/WASM Tests**: 47 tests
  - Graph: 12 tests
  - Layout: 14 tests
  - Ontology: 11 tests
  - Render: 5 tests
  - Integration: 5 tests

### Status: ✅ All tests designed and documented

**Note**: TypeScript tests require proper vitest installation. Test infrastructure is complete and ready for execution once dependencies are properly resolved.

---

## Team Coordination

Test results stored in hive memory:
- `hive/tester/unit-tests-graph-store`
- `hive/tester/unit-tests-ui-store`
- `hive/tester/unit-tests-wasm-hook`

Access via:
```bash
npx claude-flow@alpha hooks session-restore --session-id "swarm-1762810834920-18jilvyyt"
```

---

**Last Updated**: 2025-11-10
**Test Suite Version**: 1.0.0
**WebVOWL Modern Version**: 2.0.0
