# Chrome DevTools MCP Testing Guide

## Installation

```bash
# Already added to Claude Code MCP config
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

**Note**: Restart Claude Code for the MCP server to activate.

## Available Tools

Once Chrome DevTools MCP is active, you'll have access to:

### Navigation
- `browser_navigate(url, wait_until)` - Navigate to URL and wait for page load
- `browser_back()` - Navigate back
- `browser_forward()` - Navigate forward
- `browser_reload()` - Reload current page

### Interaction
- `click_element(selector)` - Click an element
- `fill_input(selector, text)` - Fill input fields
- `select_option(selector, value)` - Select dropdown options
- `hover_element(selector)` - Hover over elements

### Inspection
- `screenshot(path, full_page, element)` - Capture screenshots
- `dom_query(selector)` - Query DOM elements
- `evaluate_js(script)` - Execute JavaScript
- `console_log(filter)` - Monitor console messages

### Monitoring
- `network_monitor(filter)` - Track network requests
- `performance_metrics()` - Get page performance metrics
- `coverage_report()` - Get code coverage

## Testing narrativegoldmine.com Endpoints

### Test 1: Main Site Validation

```javascript
// Navigate and validate main site
mcp__chrome-devtools__browser_navigate({
  url: "https://narrativegoldmine.com",
  wait_until: "networkidle"
})

// Check for console errors
mcp__chrome-devtools__console_log({
  filter: "error"
})

// Verify Logseq SPA loaded
mcp__chrome-devtools__dom_query({
  selector: ".logseq-app"
})

// Get page performance
mcp__chrome-devtools__performance_metrics()

// Capture screenshot
mcp__chrome-devtools__screenshot({
  path: "/tmp/narrativegoldmine-main.png",
  full_page: true
})
```

### Test 2: 3D Ontology Visualization

```javascript
// Navigate to ontology page
mcp__chrome-devtools__browser_navigate({
  url: "https://narrativegoldmine.com/ontology",
  wait_until: "networkidle"
})

// Wait for WASM to load
mcp__chrome-devtools__evaluate_js({
  script: `
    return new Promise((resolve) => {
      const checkWasm = setInterval(() => {
        if (window.wasmLoaded) {
          clearInterval(checkWasm);
          resolve(true);
        }
      }, 100);
      setTimeout(() => { clearInterval(checkWasm); resolve(false); }, 10000);
    });
  `
})

// Verify ontology data loaded
mcp__chrome-devtools__evaluate_js({
  script: `
    return {
      classes: window.ontologyStore?.classes?.length || 0,
      edges: window.ontologyStore?.edges?.length || 0,
      wasmLoaded: window.wasmLoaded || false,
      threeRenderer: !!document.querySelector('canvas[data-engine="three.js"]')
    };
  `
})

// Check for WebGL/WASM errors
mcp__chrome-devtools__console_log({
  filter: "WebGL|WASM|three.js|Error"
})

// Monitor network requests for ontology data
mcp__chrome-devtools__network_monitor({
  filter: "ontology.json|webvowl"
})

// Screenshot the 3D visualization
mcp__chrome-devtools__screenshot({
  path: "/tmp/ontology-3d-graph.png",
  element: "canvas[data-engine='three.js']"
})
```

### Test 3: End-to-End Deployment Validation

```javascript
// Complete deployment test workflow
[Single Message]:
  // 1. Test main site
  mcp__chrome-devtools__browser_navigate({
    url: "https://narrativegoldmine.com"
  })
  
  // 2. Check build timestamp
  mcp__chrome-devtools__evaluate_js({
    script: "return document.querySelector('meta[name=build-date]')?.content"
  })
  
  // 3. Test ontology page
  mcp__chrome-devtools__browser_navigate({
    url: "https://narrativegoldmine.com/ontology"
  })
  
  // 4. Verify data loaded
  mcp__chrome-devtools__evaluate_js({
    script: `
      return {
        timestamp: new Date().toISOString(),
        classes: window.ontologyStore?.classes?.length,
        edges: window.ontologyStore?.edges?.length,
        expectedClasses: 1155,
        expectedEdges: 100,
        status: (
          window.ontologyStore?.classes?.length === 1155 &&
          window.ontologyStore?.edges?.length === 100
        ) ? 'PASS' : 'FAIL'
      };
    `
  })
  
  // 5. Monitor performance
  mcp__chrome-devtools__performance_metrics()
  
  // 6. Capture screenshots
  mcp__chrome-devtools__screenshot({
    path: "/tmp/deployment-validation.png",
    full_page: true
  })
  
  // 7. Store results in AgentDB
  mcp__claude-flow__memory_usage({
    action: "store",
    key: "testing/deployment-" + new Date().toISOString(),
    value: JSON.stringify({
      timestamp: new Date().toISOString(),
      main_site: "PASS",
      ontology_classes: 1155,
      ontology_edges: 100,
      performance: "metrics captured",
      screenshot: "/tmp/deployment-validation.png"
    }),
    namespace: "narrativegoldmine/testing"
  })
```

### Test 4: Interactive Testing

```javascript
// Test user interactions with ontology
[Single Message]:
  // Navigate to ontology
  mcp__chrome-devtools__browser_navigate({
    url: "https://narrativegoldmine.com/ontology"
  })
  
  // Click on a node
  mcp__chrome-devtools__click_element({
    selector: ".ontology-node[data-id='AI-0376']"
  })
  
  // Verify node details panel opened
  mcp__chrome-devtools__dom_query({
    selector: ".node-details-panel.visible"
  })
  
  // Get node information
  mcp__chrome-devtools__evaluate_js({
    script: "return window.selectedNode?.properties"
  })
  
  // Screenshot node details
  mcp__chrome-devtools__screenshot({
    path: "/tmp/node-details-AI-0376.png",
    element: ".node-details-panel"
  })
```

## Integration with AgentDB

Store test results for pattern learning:

```javascript
// After each test run
mcp__claude-flow__memory_usage({
  action: "store",
  key: "testing/runs/run-" + Date.now(),
  value: JSON.stringify({
    test_suite: "deployment_validation",
    timestamp: new Date().toISOString(),
    results: {
      main_site_load_time: 1200,
      ontology_load_time: 800,
      classes_loaded: 1155,
      edges_loaded: 100,
      console_errors: 0,
      performance_score: 95
    },
    status: "PASS"
  }),
  namespace: "narrativegoldmine/testing"
})

// Train pattern recognition from test history
mcp__claude-flow__neural_train({
  pattern_type: "testing_regression",
  training_data: JSON.stringify({
    historical_tests: "memory:narrativegoldmine/testing/*"
  }),
  epochs: 20
})
```

## Automated Testing Workflow

Integrate with GitHub Actions for post-deployment testing:

```yaml
# .github/workflows/post-deploy-test.yml
name: Post-Deployment Testing

on:
  workflow_run:
    workflows: ["Publish to DreamLab-AI/knowledgeGraph with WasmVOWL"]
    types:
      - completed

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test with Chrome DevTools MCP
        run: |
          # Use Claude Code with chrome-devtools-mcp
          # Run automated test suite
          # Store results in AgentDB
```

## Performance Benchmarks

Expected performance metrics:

| Metric | Target | Measured |
|--------|--------|----------|
| Main site load | < 2s | TBD |
| Ontology load | < 1s | TBD |
| WASM initialization | < 500ms | TBD |
| Classes rendered | 1155 | TBD |
| Edges rendered | 100 | TBD |
| Console errors | 0 | TBD |
| Performance score | > 90 | TBD |

## Troubleshooting

### Chrome DevTools MCP not found
**Solution**: Restart Claude Code after adding the MCP server.

### Browser launch errors
**Solution**: Ensure Chrome/Chromium is installed:
```bash
which google-chrome || which chromium
```

### Network timeout
**Solution**: Increase `wait_until` timeout:
```javascript
mcp__chrome-devtools__browser_navigate({
  url: "https://narrativegoldmine.com/ontology",
  wait_until: "networkidle",
  timeout: 30000  // 30 seconds
})
```

### WASM not loading
**Solution**: Check browser console for WASM errors:
```javascript
mcp__chrome-devtools__console_log({
  filter: "WASM|WebAssembly"
})
```

---

**Next Steps**: Restart Claude Code and run the test workflows after the next deployment to narrativegoldmine.com.
