#!/bin/bash
# Performance Report Generator for Phase 3
# Aggregates benchmark results and generates markdown report

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
RUST_WASM_DIR="$PROJECT_ROOT/rust-wasm"
REPORT_DIR="$PROJECT_ROOT/tests/performance-reports"
REPORT_FILE="$REPORT_DIR/phase3-performance-report-$(date +%Y%m%d-%H%M%S).md"

# Colors
BLUE='\033[0;34m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Phase 3 Performance Report Generator${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Create report directory
mkdir -p "$REPORT_DIR"

# Start report
cat > "$REPORT_FILE" << 'EOF'
# Phase 3 Performance Report

**Generated:** $(date '+%Y-%m-%d %H:%M:%S')
**Test Environment:** WebVOWL WASM Performance Validation

## Executive Summary

This report validates Phase 3 performance targets for the WebVOWL WASM implementation with OWL/RDF metadata support.

### Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| tick() time | <10ms (ideal: 8ms) | TBD |
| getGraphData() serialization | <5ms | TBD |
| checkNodeClick() (1000 nodes) | <1ms | TBD |
| Bundle size | <1.5MB | TBD |
| Frontend load time | <300ms | TBD |

---

## Benchmark Results

### 1. Simulation Tick Performance

**Test Configuration:**
- Graph sizes: 50, 100, 200, 500 nodes
- Iterations: 100 samples per size
- Measurement time: 10 seconds

EOF

echo -e "${YELLOW}Running Rust benchmarks...${NC}"
cd "$RUST_WASM_DIR"

# Check if Cargo.toml has the benchmark configured
if ! grep -q "phase3_benchmarks" Cargo.toml; then
    echo -e "${YELLOW}Adding phase3_benchmarks to Cargo.toml...${NC}"
    cat >> Cargo.toml << 'EOF'

[[bench]]
name = "phase3_benchmarks"
harness = false
EOF
fi

# Run benchmarks and capture output
BENCH_OUTPUT=$(cargo bench --bench phase3_benchmarks 2>&1 || echo "Benchmark execution completed")

# Parse tick performance
echo "" >> "$REPORT_FILE"
echo "**Results:**" >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "$BENCH_OUTPUT" | grep -A 5 "phase3_tick" || echo "Tick results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Add serialization results
cat >> "$REPORT_FILE" << 'EOF'

### 2. Graph Data Serialization

**Test Configuration:**
- Graph sizes: 50, 100, 200, 500 nodes
- Iterations: 100 samples
- Target: <5ms

**Results:**

```
EOF

echo "$BENCH_OUTPUT" | grep -A 5 "phase3_serialization" || echo "Serialization results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Add interaction results
cat >> "$REPORT_FILE" << 'EOF'

### 3. Node Click Detection

**Test Configuration:**
- Node counts: 100, 500, 1000, 2000
- Iterations: 200 samples
- Target: <1ms for 1000 nodes

**Results:**

```
EOF

echo "$BENCH_OUTPUT" | grep -A 5 "phase3_interaction" || echo "Interaction results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Add metadata results
cat >> "$REPORT_FILE" << 'EOF'

### 4. Metadata Access Performance

**Results:**

```
EOF

echo "$BENCH_OUTPUT" | grep -A 5 "phase3_metadata" || echo "Metadata results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Add workflow results
cat >> "$REPORT_FILE" << 'EOF'

### 5. Full Workflow Performance

**Test:** Load → Initialize → Simulate (10 ticks) → Serialize → Metadata

**Results:**

```
EOF

echo "$BENCH_OUTPUT" | grep -A 5 "phase3_workflow" || echo "Workflow results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Bundle size analysis
echo -e "${YELLOW}Running bundle size check...${NC}"
BUNDLE_OUTPUT=$("$SCRIPT_DIR/check-bundle-size.sh" 2>&1 || echo "Bundle check completed")

cat >> "$REPORT_FILE" << 'EOF'

---

## Bundle Size Analysis

**Target:** <1.5MB WASM binary

EOF

echo '```' >> "$REPORT_FILE"
echo "$BUNDLE_OUTPUT" | grep -A 20 "File Size Analysis" || echo "Bundle size results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Phase 2 vs Phase 3 comparison
cat >> "$REPORT_FILE" << 'EOF'

---

## Phase 2 vs Phase 3 Comparison

### Performance Metrics

| Metric | Phase 2 | Phase 3 | Change |
|--------|---------|---------|--------|
| Parse Time | 200ms | TBD | TBD |
| Tick Time | 8ms | TBD | TBD |
| Serialization | 5ms | TBD | TBD |
| Bundle Size | ~800KB | TBD | TBD |

### New Capabilities (Phase 3)

- ✅ Full OWL/RDF metadata preservation
- ✅ Enhanced class attributes (deprecated, functional, etc.)
- ✅ Property characteristics (transitive, symmetric, etc.)
- ✅ Ontology metadata (version, title, description)
- ✅ Improved type safety
- ✅ Better error handling

---

## Frontend Performance Tests

EOF

echo -e "${YELLOW}Running frontend tests...${NC}"
cd "$PROJECT_ROOT/modern"

if [ -f "package.json" ]; then
    # Run performance tests
    FRONTEND_OUTPUT=$(npm test -- performance.test.ts 2>&1 || echo "Frontend tests completed")

    echo '```' >> "$REPORT_FILE"
    echo "$FRONTEND_OUTPUT" | tail -50 >> "$REPORT_FILE"
    echo '```' >> "$REPORT_FILE"
else
    echo "Frontend tests not available" >> "$REPORT_FILE"
fi

echo "" >> "$REPORT_FILE"

# Integration test results
cat >> "$REPORT_FILE" << 'EOF'

---

## Integration Tests

EOF

cd "$RUST_WASM_DIR"
echo -e "${YELLOW}Running integration tests...${NC}"

INTEGRATION_OUTPUT=$(cargo test --test phase3_integration 2>&1 || echo "Integration tests completed")

echo '```' >> "$REPORT_FILE"
echo "$INTEGRATION_OUTPUT" | grep -A 10 "test result" || echo "Integration test results pending" >> "$REPORT_FILE"
echo '```' >> "$REPORT_FILE"
echo "" >> "$REPORT_FILE"

# Determine overall status
cat >> "$REPORT_FILE" << 'EOF'

---

## Overall Assessment

### ✅ Passed Targets

- TBD

### ⚠️ Warnings

- TBD

### ❌ Failed Targets

- TBD

---

## Recommendations

### Performance Optimizations

1. **Enable Profile-Guided Optimization (PGO)**
   - Collect runtime profiles
   - Recompile with optimization data

2. **WASM Optimization**
   - Run `wasm-opt -Oz` for size
   - Use `wasm-opt -O4` for speed

3. **Code Splitting**
   - Lazy-load non-critical features
   - Implement streaming instantiation

### Monitoring

1. **Continuous Benchmarking**
   - Run benchmarks on every PR
   - Track performance regressions

2. **Real-World Testing**
   - Test with production ontologies
   - Monitor user-reported performance

### Next Steps

1. Address any failed targets
2. Optimize identified bottlenecks
3. Set up automated performance testing
4. Document performance best practices

---

## Appendix

### Test Environment

- **OS:** $(uname -s)
- **Architecture:** $(uname -m)
- **Rust Version:** $(rustc --version)
- **Node Version:** $(node --version 2>/dev/null || echo "N/A")
- **WASM Pack Version:** $(wasm-pack --version 2>/dev/null || echo "N/A")

### Benchmark Configuration

- **Criterion:** Statistical benchmarking
- **Sample Size:** 50-200 depending on test
- **Warm-up:** 3 seconds
- **Measurement:** 5-15 seconds per benchmark

### Related Documents

- [Phase 3 Implementation Plan](../docs/PHASE3-PLAN.md)
- [Architecture Documentation](../CLAUDE.md)
- [Test Documentation](../modern/tests/TEST-DOCUMENTATION.md)

---

**Report Generated:** $(date '+%Y-%m-%d %H:%M:%S')
EOF

echo ""
echo -e "${GREEN}Performance report generated!${NC}"
echo -e "Location: ${REPORT_FILE}"
echo ""

# Also create a latest symlink
ln -sf "$(basename "$REPORT_FILE")" "$REPORT_DIR/latest.md"

echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}Summary${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""
echo "View the report:"
echo "  cat $REPORT_FILE"
echo ""
echo "Or:"
echo "  cat $REPORT_DIR/latest.md"
echo ""
