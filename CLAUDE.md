# Claude Code Configuration - SPARC Development Environment

## 🚨 CRITICAL: CONCURRENT EXECUTION & FILE MANAGEMENT

**ABSOLUTE RULES**:
1. ALL operations MUST be concurrent/parallel in a single message
2. **NEVER save working files, text/mds and tests to the root folder**
3. ALWAYS organize files in appropriate subdirectories
4. **USE CLAUDE CODE'S TASK TOOL** for spawning agents concurrently, not just MCP

### ⚡ GOLDEN RULE: "1 MESSAGE = ALL RELATED OPERATIONS"

**MANDATORY PATTERNS:**
- **TodoWrite**: ALWAYS batch ALL todos in ONE call (5-10+ todos minimum)
- **Task tool (Claude Code)**: ALWAYS spawn ALL agents in ONE message with full instructions
- **File operations**: ALWAYS batch ALL reads/writes/edits in ONE message
- **Bash commands**: ALWAYS batch ALL terminal operations in ONE message
- **Memory operations**: ALWAYS batch ALL memory store/retrieve in ONE message

### 🎯 CRITICAL: Claude Code Task Tool for Agent Execution

**Claude Code's Task tool is the PRIMARY way to spawn agents:**
```javascript
// ✅ CORRECT: Use Claude Code's Task tool for parallel agent execution
[Single Message]:
  Task("Research agent", "Analyze requirements and patterns...", "researcher")
  Task("Coder agent", "Implement core features...", "coder")
  Task("Tester agent", "Create comprehensive tests...", "tester")
  Task("Reviewer agent", "Review code quality...", "reviewer")
  Task("Architect agent", "Design system architecture...", "system-architect")
```

**MCP tools are ONLY for coordination setup:**
- `mcp__claude-flow__swarm_init` - Initialize coordination topology
- `mcp__claude-flow__agent_spawn` - Define agent types for coordination
- `mcp__claude-flow__task_orchestrate` - Orchestrate high-level workflows

### 📁 File Organization Rules

**NEVER save to root folder. Use these directories:**
- `/src` - Source code files
- `/tests` - Test files
- `/docs` - Documentation and markdown files
- `/config` - Configuration files
- `/scripts` - Utility scripts
- `/examples` - Example code

**Logseq Ontology Project Directories:**
- `/docs/ontology` - Ontology documentation and specifications
- `/publishing-tools` - WasmVOWL and rust-web-publish tools
- `/Ontology-Tools` - Migration and validation utilities
- `/mainKnowledgeGraph/pages` - Logseq knowledge graph pages
- `/memory` - AgentDB persistence location (150x faster vector search)
- `/scripts/migration` - Ontology migration scripts
- `/config/ontology` - Ontology configuration files

## Project Overview

This is a **Logseq Ontology Management System** using:
- **SPARC Methodology** - Systematic Test-Driven Development
- **Claude-Flow Orchestration** - Multi-agent coordination
- **AgentDB Integration** - 150x faster semantic search with HNSW indexing
- **WasmVOWL Publishing** - Ontology visualization and deployment
- **Vector Memory** - Persistent ontology context across sessions

## SPARC Commands

### Core Commands
- `npx claude-flow sparc modes` - List available modes
- `npx claude-flow sparc run <mode> "<task>"` - Execute specific mode
- `npx claude-flow sparc tdd "<feature>"` - Run complete TDD workflow
- `npx claude-flow sparc info <mode>` - Get mode details

### Batchtools Commands
- `npx claude-flow sparc batch <modes> "<task>"` - Parallel execution
- `npx claude-flow sparc pipeline "<task>"` - Full pipeline processing
- `npx claude-flow sparc concurrent <mode> "<tasks-file>"` - Multi-task processing

### Build Commands
- `npm run build` - Build project
- `npm run test` - Run tests
- `npm run lint` - Linting
- `npm run typecheck` - Type checking

## SPARC Workflow Phases

1. **Specification** - Requirements analysis (`sparc run spec-pseudocode`)
2. **Pseudocode** - Algorithm design (`sparc run spec-pseudocode`)
3. **Architecture** - System design (`sparc run architect`)
4. **Refinement** - TDD implementation (`sparc tdd`)
5. **Completion** - Integration (`sparc run integration`)

## Code Style & Best Practices

- **Modular Design**: Files under 500 lines
- **Environment Safety**: Never hardcode secrets
- **Test-First**: Write tests before implementation
- **Clean Architecture**: Separate concerns
- **Documentation**: Keep updated

## 🚀 Available Agents (59 Total)

### Core Development
`coder`, `reviewer`, `tester`, `planner`, `researcher`

### AgentDB Specialists (NEW - 5 agents)
`agentdb-vector-search`, `agentdb-memory-patterns`, `agentdb-optimization`, `agentdb-learning`, `agentdb-advanced`

### Swarm Coordination
`hierarchical-coordinator`, `mesh-coordinator`, `adaptive-coordinator`, `collective-intelligence-coordinator`, `swarm-memory-manager`

### Consensus & Distributed
`byzantine-coordinator`, `raft-manager`, `gossip-coordinator`, `consensus-builder`, `crdt-synchronizer`, `quorum-manager`, `security-manager`

### Performance & Optimization
`perf-analyzer`, `performance-benchmarker`, `task-orchestrator`, `memory-coordinator`, `smart-agent`

### GitHub & Repository
`github-modes`, `pr-manager`, `code-review-swarm`, `issue-tracker`, `release-manager`, `workflow-automation`, `project-board-sync`, `repo-architect`, `multi-repo-swarm`

### SPARC Methodology
`sparc-coord`, `sparc-coder`, `specification`, `pseudocode`, `architecture`, `refinement`

### Specialized Development
`backend-dev`, `mobile-dev`, `ml-developer`, `cicd-engineer`, `api-docs`, `system-architect`, `code-analyzer`, `base-template-generator`

### Testing & Validation
`tdd-london-swarm`, `production-validator`

### Migration & Planning
`migration-planner`, `swarm-init`

## 🎯 Claude Code vs MCP Tools

### Claude Code Handles ALL EXECUTION:
- **Task tool**: Spawn and run agents concurrently for actual work
- File operations (Read, Write, Edit, MultiEdit, Glob, Grep)
- Code generation and programming
- Bash commands and system operations
- Implementation work
- Project navigation and analysis
- TodoWrite and task management
- Git operations
- Package management
- Testing and debugging

### MCP Tools ONLY COORDINATE:
- Swarm initialization (topology setup)
- Agent type definitions (coordination patterns)
- Task orchestration (high-level planning)
- Memory management
- Neural features
- Performance tracking
- GitHub integration

**KEY**: MCP coordinates the strategy, Claude Code's Task tool executes with real agents.

## 🚀 Quick Setup

```bash
# Add MCP servers (Claude Flow required, others optional)
claude mcp add claude-flow npx claude-flow@alpha mcp start
claude mcp add ruv-swarm npx ruv-swarm mcp start  # Optional: Enhanced coordination
claude mcp add flow-nexus npx flow-nexus@latest mcp start  # Optional: Cloud features

# Initialize AgentDB for ontology persistence (recommended)
npx agentdb init --dir /home/devuser/logseq/memory --enable-hnsw
npx agentdb optimize --quantization 8bit  # 4-8x memory reduction
```

## MCP Tool Categories

### Coordination
`swarm_init`, `agent_spawn`, `task_orchestrate`

### Monitoring
`swarm_status`, `agent_list`, `agent_metrics`, `task_status`, `task_results`

### Memory & Neural
`memory_usage`, `neural_status`, `neural_train`, `neural_patterns`

### AgentDB Vector Operations (NEW)
`agentdb_search`, `agentdb_similarity`, `agentdb_cluster`, `agentdb_optimize`, `agentdb_learn`

### GitHub Integration
`github_swarm`, `repo_analyze`, `pr_enhance`, `issue_triage`, `code_review`

### System
`benchmark_run`, `features_detect`, `swarm_monitor`

### Flow-Nexus MCP Tools (Optional Advanced Features)
Flow-Nexus extends MCP capabilities with 70+ cloud-based orchestration tools:

**Key MCP Tool Categories:**
- **Swarm & Agents**: `swarm_init`, `swarm_scale`, `agent_spawn`, `task_orchestrate`
- **Sandboxes**: `sandbox_create`, `sandbox_execute`, `sandbox_upload` (cloud execution)
- **Templates**: `template_list`, `template_deploy` (pre-built project templates)
- **Neural AI**: `neural_train`, `neural_patterns`, `seraphina_chat` (AI assistant)
- **GitHub**: `github_repo_analyze`, `github_pr_manage` (repository management)
- **Real-time**: `execution_stream_subscribe`, `realtime_subscribe` (live monitoring)
- **Storage**: `storage_upload`, `storage_list` (cloud file management)

**Authentication Required:**
- Register: `mcp__flow-nexus__user_register` or `npx flow-nexus@latest register`
- Login: `mcp__flow-nexus__user_login` or `npx flow-nexus@latest login`
- Access 70+ specialized MCP tools for advanced orchestration

## 🚀 Agent Execution Flow with Claude Code

### The Correct Pattern:

1. **Optional**: Use MCP tools to set up coordination topology
2. **REQUIRED**: Use Claude Code's Task tool to spawn agents that do actual work
3. **REQUIRED**: Each agent runs hooks for coordination
4. **REQUIRED**: Batch all operations in single messages

### Example Full-Stack Development:

```javascript
// Single message with all agent spawning via Claude Code's Task tool
[Parallel Agent Execution]:
  Task("Backend Developer", "Build REST API with Express. Use hooks for coordination.", "backend-dev")
  Task("Frontend Developer", "Create React UI. Coordinate with backend via memory.", "coder")
  Task("Database Architect", "Design PostgreSQL schema. Store schema in memory.", "code-analyzer")
  Task("Test Engineer", "Write Jest tests. Check memory for API contracts.", "tester")
  Task("DevOps Engineer", "Setup Docker and CI/CD. Document in memory.", "cicd-engineer")
  Task("Security Auditor", "Review authentication. Report findings via hooks.", "reviewer")
  
  // All todos batched together
  TodoWrite { todos: [...8-10 todos...] }
  
  // All file operations together
  Write "backend/server.js"
  Write "frontend/App.jsx"
  Write "database/schema.sql"
```

## 📋 Agent Coordination Protocol

### Every Agent Spawned via Task Tool MUST:

**1️⃣ BEFORE Work:**
```bash
npx claude-flow@alpha hooks pre-task --description "[task]"
npx claude-flow@alpha hooks session-restore --session-id "swarm-[id]"
```

**2️⃣ DURING Work:**
```bash
npx claude-flow@alpha hooks post-edit --file "[file]" --memory-key "swarm/[agent]/[step]"
npx claude-flow@alpha hooks notify --message "[what was done]"
```

**3️⃣ AFTER Work:**
```bash
npx claude-flow@alpha hooks post-task --task-id "[task]"
npx claude-flow@alpha hooks session-end --export-metrics true
```

## 🎯 Concurrent Execution Examples

### ✅ CORRECT WORKFLOW: MCP Coordinates, Claude Code Executes

```javascript
// Step 1: MCP tools set up coordination (optional, for complex tasks)
[Single Message - Coordination Setup]:
  mcp__claude-flow__swarm_init { topology: "mesh", maxAgents: 6 }
  mcp__claude-flow__agent_spawn { type: "researcher" }
  mcp__claude-flow__agent_spawn { type: "coder" }
  mcp__claude-flow__agent_spawn { type: "tester" }

// Step 2: Claude Code Task tool spawns ACTUAL agents that do the work
[Single Message - Parallel Agent Execution]:
  // Claude Code's Task tool spawns real agents concurrently
  Task("Research agent", "Analyze API requirements and best practices. Check memory for prior decisions.", "researcher")
  Task("Coder agent", "Implement REST endpoints with authentication. Coordinate via hooks.", "coder")
  Task("Database agent", "Design and implement database schema. Store decisions in memory.", "code-analyzer")
  Task("Tester agent", "Create comprehensive test suite with 90% coverage.", "tester")
  Task("Reviewer agent", "Review code quality and security. Document findings.", "reviewer")
  
  // Batch ALL todos in ONE call
  TodoWrite { todos: [
    {id: "1", content: "Research API patterns", status: "in_progress", priority: "high"},
    {id: "2", content: "Design database schema", status: "in_progress", priority: "high"},
    {id: "3", content: "Implement authentication", status: "pending", priority: "high"},
    {id: "4", content: "Build REST endpoints", status: "pending", priority: "high"},
    {id: "5", content: "Write unit tests", status: "pending", priority: "medium"},
    {id: "6", content: "Integration tests", status: "pending", priority: "medium"},
    {id: "7", content: "API documentation", status: "pending", priority: "low"},
    {id: "8", content: "Performance optimization", status: "pending", priority: "low"}
  ]}
  
  // Parallel file operations
  Bash "mkdir -p app/{src,tests,docs,config}"
  Write "app/package.json"
  Write "app/src/server.js"
  Write "app/tests/server.test.js"
  Write "app/docs/API.md"
```

### ❌ WRONG (Multiple Messages):
```javascript
Message 1: mcp__claude-flow__swarm_init
Message 2: Task("agent 1")
Message 3: TodoWrite { todos: [single todo] }
Message 4: Write "file.js"
// This breaks parallel coordination!
```

## Performance Benefits

### Claude-Flow
- **84.8% SWE-Bench solve rate**
- **32.3% token reduction**
- **2.8-4.4x speed improvement**
- **27+ neural models**

### AgentDB Performance (NEW)
- **150x faster** semantic search with HNSW indexing
- **4-32x memory reduction** with quantization (4bit, 8bit, 16bit)
- **Sub-millisecond** vector similarity matching
- **Persistent memory** across sessions with automatic recovery
- **Batch operations** for ontology processing
- **9 RL algorithms** for adaptive learning (Decision Transformer, Q-Learning, SARSA, Actor-Critic, etc.)

## Hooks Integration

### Pre-Operation
- Auto-assign agents by file type
- Validate commands for safety
- Prepare resources automatically
- Optimize topology by complexity
- Cache searches

### Post-Operation
- Auto-format code
- Train neural patterns
- Update memory
- Analyze performance
- Track token usage

### Session Management
- Generate summaries
- Persist state
- Track metrics
- Restore context
- Export workflows

## Advanced Features (v2.0.0)

### Claude-Flow Features
- 🚀 Automatic Topology Selection
- ⚡ Parallel Execution (2.8-4.4x speed)
- 🧠 Neural Training
- 📊 Bottleneck Analysis
- 🤖 Smart Auto-Spawning
- 🛡️ Self-Healing Workflows
- 💾 Cross-Session Memory
- 🔗 GitHub Integration

### AgentDB Features (NEW)
- 🔍 **Semantic Vector Search** - 150x faster with HNSW indexing
- 🧠 **Pattern Learning** - 9 RL algorithms for ontology optimization
- 💾 **Persistent Memory** - Cross-session ontology context
- 🗜️ **Quantization** - 4-32x memory reduction (4bit/8bit/16bit)
- 🎯 **Hybrid Search** - Combined vector + keyword search
- 🔄 **QUIC Sync** - Multi-database synchronization
- 📊 **Custom Metrics** - Euclidean, Cosine, Dot Product, Manhattan
- 🏗️ **Batch Operations** - Process ontology migrations efficiently

## Integration Tips

1. Start with basic swarm init
2. Scale agents gradually
3. Use memory for context
4. Monitor progress regularly
5. Train patterns from success
6. Enable hooks automation
7. Use GitHub tools first

## Support

- Documentation: https://github.com/ruvnet/claude-flow
- Issues: https://github.com/ruvnet/claude-flow/issues
- Flow-Nexus Platform: https://flow-nexus.ruv.io (registration required for cloud features)

---

Remember: **Claude Flow coordinates, Claude Code creates!**

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.
Never save working files, text/mds and tests to the root folder.

---

## 🌐 narrativegoldmine.com Publishing Pipeline

### Overview

Every `git push` to `main` triggers automated deployment to **narrativegoldmine.com**

**Workflow File**: `.github/workflows/publish.yml`

**Deployment Targets**:
- **Main Site**: https://narrativegoldmine.com (Logseq knowledge base)
- **3D Ontology**: https://narrativegoldmine.com/ontology (WasmVOWL visualization)
- **GitHub Mirror**: https://dreamlab-ai.github.io/knowledgeGraph

### Pipeline Stages

#### Stage 1: Ontology Extraction (Python)
```bash
# Parse 2,519 markdown pages
python3 Ontology-Tools/tools/converters/webvowl_header_only_converter.py \
  --pages-dir mainKnowledgeGraph/pages \
  --output /tmp/narrativegoldmine-ontology.ttl

# Convert to WebVOWL JSON
python3 Ontology-Tools/tools/converters/ttl_to_webvowl_json.py \
  --input /tmp/narrativegoldmine-ontology.ttl \
  --output /tmp/narrativegoldmine-ontology.json
```

**Output**: 35,952 triples, 1,155 classes, 144 properties

#### Stage 2: WasmVOWL Build (Rust + Node)
```bash
cd publishing-tools/WasmVOWL/modern

# Copy ontology for auto-load
mkdir -p public/data
cp /tmp/narrativegoldmine-ontology.json public/data/ontology.json

# Build React Three Fiber app
npm install
npm run build  # Vite production build
```

**Output**: 64KB gzipped bundle, 4.4x faster layout

#### Stage 3: Logseq SPA Generation (Rust)
```bash
# Uses rust-web-publish custom action
# Generates static HTML from markdown
# Filters by: public:: true property
```

**Output**: Static HTML pages with backlinks

#### Stage 4: Deployment (GitHub Pages)
```bash
# Deploy to public repo gh-pages branch
# Custom domain: narrativegoldmine.com
# CNAME record configured
```

**Total Time**: 3-5 minutes from push to live

### Performance Metrics

| Component | Technology | Performance |
|-----------|-----------|-------------|
| **Ontology Parse** | Python 3.11 + RDFLib | 35,952 triples in ~10s |
| **TTL to JSON** | Python converter | 1,155 classes in ~5s |
| **WasmVOWL Build** | Vite + Rust/WASM | 64KB bundle in ~30s |
| **Layout Engine** | Rust petgraph | 8ms/tick (4.4x faster) |
| **Logseq Parser** | Rust pulldown-cmark | 10x faster than ClojureScript |
| **Total Pipeline** | GitHub Actions | 3-5 min end-to-end |

### Repository Structure

**Private Source**: `jjohare/logseq`
- Contains `mainKnowledgeGraph/` (1.2 GB private data)
- GitHub Actions workflows
- Publishing tools source code

**Public Deployment**: `DreamLab-AI/knowledgeGraph`
- `gh-pages` branch - Compiled website
- `main` branch - Publishing tools only (no private data)
- Served at narrativegoldmine.com

### Key Files

```
.github/workflows/
├── publish.yml                 # Master deployment workflow
├── sync-to-mobile.yml          # Mobile sync
└── sync-from-mobile.yml        # Mobile sync

.github/actions/
└── publish-with-ontology/
    └── action.yml              # Composite publishing action

publishing-tools/
├── WasmVOWL/                   # 3D ontology visualization
│   ├── modern/                 # React Three Fiber frontend
│   │   ├── src/
│   │   ├── public/data/        # Auto-loaded ontology.json
│   │   └── package.json        # Uses narrativegoldmine-webvowl-wasm@0.0.1
│   └── rust-wasm/              # Rust/WASM layout engine
└── rust-web-publish/           # Logseq SPA generator
    ├── logseq-publisher-rust/  # Rust core
    └── logseq-publisher-npm/   # npm wrapper

Ontology-Tools/tools/converters/
├── webvowl_header_only_converter.py  # MD → TTL
└── ttl_to_webvowl_json.py            # TTL → WebVOWL JSON
```

---

## 🧪 Chrome DevTools MCP for Testing

### Setup

```bash
# Already added to MCP config
claude mcp add chrome-devtools npx chrome-devtools-mcp@latest
```

**Note**: **Restart Claude Code** to activate the MCP server.

### Available Tools (After Restart)

**Navigation**:
- `browser_navigate` - Navigate to URLs
- `browser_back`, `browser_forward`, `browser_reload`

**Inspection**:
- `screenshot` - Capture page screenshots
- `dom_query` - Query DOM with CSS selectors
- `evaluate_js` - Execute JavaScript in page context
- `console_log` - Monitor browser console

**Interaction**:
- `click_element` - Click elements
- `fill_input` - Fill forms
- `hover_element` - Hover interactions

**Monitoring**:
- `network_monitor` - Track network requests
- `performance_metrics` - Get page performance
- `coverage_report` - Code coverage analysis

### Testing Workflow: narrativegoldmine.com

#### Test 1: Main Site Validation

```javascript
[Single Message]:
  // Navigate to main site
  mcp__chrome-devtools__browser_navigate {
    url: "https://narrativegoldmine.com",
    wait_until: "networkidle"
  }

  // Check console errors
  mcp__chrome-devtools__console_log {
    filter: "error|warning"
  }

  // Verify Logseq app loaded
  mcp__chrome-devtools__dom_query {
    selector: ".logseq-app"
  }

  // Get performance metrics
  mcp__chrome-devtools__performance_metrics {}

  // Screenshot for verification
  mcp__chrome-devtools__screenshot {
    path: "/tmp/narrativegoldmine-main.png",
    full_page: true
  }
```

#### Test 2: 3D Ontology Visualization

```javascript
[Single Message]:
  // Navigate to ontology
  mcp__chrome-devtools__browser_navigate {
    url: "https://narrativegoldmine.com/ontology",
    wait_until: "networkidle"
  }

  // Wait for WASM to load
  mcp__chrome-devtools__evaluate_js {
    script: `
      return new Promise((resolve) => {
        const check = setInterval(() => {
          if (window.wasmLoaded) {
            clearInterval(check);
            resolve(true);
          }
        }, 100);
        setTimeout(() => { clearInterval(check); resolve(false); }, 10000);
      });
    `
  }

  // Verify ontology data
  mcp__chrome-devtools__evaluate_js {
    script: `
      return {
        classes: window.ontologyStore?.classes?.length || 0,
        edges: window.ontologyStore?.edges?.length || 0,
        wasmLoaded: window.wasmLoaded || false,
        threeRenderer: !!document.querySelector('canvas[data-engine="three.js"]'),
        expectedClasses: 1155,
        expectedEdges: 100,
        status: (
          window.ontologyStore?.classes?.length === 1155 &&
          window.ontologyStore?.edges?.length === 100
        ) ? 'PASS' : 'FAIL'
      };
    `
  }

  // Monitor network for ontology.json
  mcp__chrome-devtools__network_monitor {
    filter: "ontology.json|webvowl"
  }

  // Check for errors
  mcp__chrome-devtools__console_log {
    filter: "WebGL|WASM|Error"
  }

  // Screenshot 3D visualization
  mcp__chrome-devtools__screenshot {
    path: "/tmp/ontology-3d-visualization.png",
    element: "canvas[data-engine='three.js']"
  }

  // Store test results in AgentDB
  mcp__claude-flow__memory_usage {
    action: "store",
    key: "testing/deployment-" + new Date().toISOString(),
    value: JSON.stringify({
      timestamp: new Date().toISOString(),
      main_site: "PASS",
      ontology_classes: 1155,
      ontology_edges: 100,
      wasm_loaded: true,
      console_errors: 0,
      screenshot: "/tmp/ontology-3d-visualization.png"
    }),
    namespace: "narrativegoldmine/testing"
  }
```

#### Test 3: Post-Deployment Validation

```javascript
// Run after GitHub Actions deployment completes
[Single Message]:
  // Test both endpoints
  mcp__chrome-devtools__browser_navigate {
    url: "https://narrativegoldmine.com"
  }

  // Get build timestamp
  mcp__chrome-devtools__evaluate_js {
    script: "return document.querySelector('meta[name=build-date]')?.content"
  }

  // Test ontology page
  mcp__chrome-devtools__browser_navigate {
    url: "https://narrativegoldmine.com/ontology"
  }

  // Comprehensive validation
  mcp__chrome-devtools__evaluate_js {
    script: `
      return {
        deployment_time: new Date().toISOString(),
        ontology: {
          classes: window.ontologyStore?.classes?.length,
          edges: window.ontologyStore?.edges?.length,
          expected_classes: 1155,
          expected_edges: 100
        },
        performance: {
          wasm_load_time: performance.getEntriesByName('wasm-init')[0]?.duration,
          graph_render_time: performance.getEntriesByName('graph-render')[0]?.duration
        },
        validation: {
          classes_match: window.ontologyStore?.classes?.length === 1155,
          edges_match: window.ontologyStore?.edges?.length === 100,
          overall_status: (
            window.ontologyStore?.classes?.length === 1155 &&
            window.ontologyStore?.edges?.length === 100
          ) ? 'PASS' : 'FAIL'
        }
      };
    `
  }

  // Store comprehensive results
  mcp__claude-flow__memory_usage {
    action: "store",
    key: "deployments/validation-" + Date.now(),
    value: JSON.stringify({
      pipeline_stage: "post-deployment-validation",
      timestamp: new Date().toISOString(),
      tests_run: ["main_site", "ontology_load", "wasm_init", "data_validation"],
      overall_status: "PASS",
      metrics: {
        classes_loaded: 1155,
        edges_loaded: 100,
        load_time_ms: 800,
        console_errors: 0
      }
    }),
    namespace: "narrativegoldmine/deployments"
  }

  // Train from successful deployment
  mcp__claude-flow__neural_train {
    pattern_type: "deployment_validation",
    training_data: "memory:narrativegoldmine/deployments/*",
    epochs: 20
  }
```

### Integration with AgentDB

**Store test results for pattern learning:**

```javascript
// After each test run
mcp__claude-flow__memory_usage {
  action: "store",
  key: "testing/runs/run-" + Date.now(),
  value: JSON.stringify({
    test_suite: "narrativegoldmine_e2e",
    timestamp: new Date().toISOString(),
    results: {
      main_site_load_time: 1200,
      ontology_load_time: 800,
      classes_loaded: 1155,
      edges_loaded: 100,
      console_errors: 0,
      performance_score: 95,
      wasm_init_time: 350
    },
    status: "PASS",
    screenshots: [
      "/tmp/narrativegoldmine-main.png",
      "/tmp/ontology-3d-visualization.png"
    ]
  }),
  namespace: "narrativegoldmine/testing"
}

// Retrieve test history for analysis
mcp__claude-flow__memory_search {
  pattern: "testing/runs/*",
  namespace: "narrativegoldmine",
  limit: 50
}

// Train regression detection
mcp__claude-flow__neural_train {
  pattern_type: "performance_regression",
  training_data: "memory:narrativegoldmine/testing/runs/*",
  epochs: 30
}
```

---

## 🧬 AgentDB Ontology Workflows

### Workflow 1: Semantic Concept Search

```javascript
[Single Message]:
  // Initialize mesh swarm for parallel search
  mcp__claude-flow__swarm_init { topology: "mesh", maxAgents: 5 }

  // Spawn specialized agents via Task tool
  Task("Vector Search Agent", "Search ontology using agentdb-vector-search skill. Find concepts related to 'neural network fairness'. Use HNSW indexing for 150x faster search.", "researcher")
  
  Task("Relationship Analyzer", "Analyze semantic relationships between AI-0376 (Fairness Metrics) and related classes. Use agentdb-memory-patterns skill to retrieve connection history.", "code-analyzer")
  
  Task("Pattern Learner", "Learn categorization patterns from successful ontology migrations using agentdb-learning skill with Decision Transformer algorithm.", "ml-developer")

  // Vector search in AgentDB
  mcp__claude-flow__memory_search {
    pattern: "fairness metrics neural networks bias mitigation",
    namespace: "narrativegoldmine/ontology/classes",
    limit: 20
  }

  // Store search results
  mcp__claude-flow__memory_usage {
    action: "store",
    key: "ontology/searches/fairness-neural-" + Date.now(),
    value: JSON.stringify({
      query: "fairness metrics neural networks",
      related_classes: ["AI-0376", "AI-0397", "AI-0001"],
      relationships: ["dt:enables", "dt:requires"],
      timestamp: new Date().toISOString()
    }),
    namespace: "narrativegoldmine/ontology"
  }

  // Train semantic search patterns
  mcp__claude-flow__neural_train {
    pattern_type: "semantic_search",
    training_data: "memory:narrativegoldmine/ontology/searches/*",
    epochs: 40
  }
```

### Workflow 2: Ontology Migration with Learning

```javascript
[Single Message]:
  // Spawn migration swarm
  Task("Migration Planner", "Plan migration of BC-0500 series blockchain pages. Use agentdb-memory-patterns skill to check prior migration strategies. Store decisions in memory namespace narrativegoldmine/migration.", "migration-planner")
  
  Task("OWL Validator", "Validate OWL axioms and TTL generation. Use agentdb-vector-search to find similar validation patterns from past migrations.", "reviewer")
  
  Task("TTL Generator", "Generate Turtle/OWL files with webvowl_header_only_converter.py. Monitor conversion metrics and store in AgentDB.", "coder")
  
  Task("Pattern Trainer", "Train migration patterns using agentdb-learning skill with Q-Learning algorithm. Learn from successful BC-series migrations.", "ml-developer")

  // Check migration history
  mcp__claude-flow__memory_usage {
    action: "retrieve",
    key: "migration/patterns/blockchain-series",
    namespace: "narrativegoldmine"
  }

  // Store new migration strategy
  mcp__claude-flow__memory_usage {
    action: "store",
    key: "migration/decisions/BC-0500-series-" + Date.now(),
    value: JSON.stringify({
      series: "BC-0500",
      strategy: "batch_conversion",
      validation: "passed",
      ttl_triples: 35952,
      classes_added: 65,
      timestamp: new Date().toISOString()
    }),
    namespace: "narrativegoldmine/migration"
  }

  // Train from migration success
  mcp__claude-flow__neural_train {
    pattern_type: "ontology_migration",
    training_data: "memory:narrativegoldmine/migration/*",
    epochs: 50
  }

  // Batch all todos
  TodoWrite { todos: [
    {content: "Plan BC-0500 migration strategy", status: "completed", activeForm: "Planning BC-0500 migration strategy"},
    {content: "Validate OWL axioms", status: "completed", activeForm: "Validating OWL axioms"},
    {content: "Generate TTL files", status: "in_progress", activeForm: "Generating TTL files"},
    {content: "Convert TTL to WebVOWL JSON", status: "pending", activeForm: "Converting TTL to WebVOWL JSON"},
    {content: "Test ontology visualization", status: "pending", activeForm: "Testing ontology visualization"},
    {content: "Deploy to narrativegoldmine.com", status: "pending", activeForm: "Deploying to narrativegoldmine.com"},
    {content: "Validate deployment with Chrome DevTools", status: "pending", activeForm: "Validating deployment with Chrome DevTools"},
    {content: "Store migration metrics in AgentDB", status: "pending", activeForm: "Storing migration metrics in AgentDB"}
  ]}
```

### Workflow 3: Complete Publishing Pipeline with Testing

```javascript
[Single Message]:
  // Spawn full deployment swarm
  Task("Ontology Converter", "Run Python converters to generate TTL and WebVOWL JSON. Monitor for 35,952 triples, 1,155 classes. Store metrics in AgentDB.", "coder")
  
  Task("WasmVOWL Builder", "Build React Three Fiber app with npm run build. Verify WASM bundle size (64KB target). Check for build errors.", "backend-dev")
  
  Task("GitHub Actions Monitor", "Monitor .github/workflows/publish.yml execution. Track pipeline stages. Report completion time.", "cicd-engineer")
  
  Task("Deployment Tester", "After deployment, use chrome-devtools-mcp to test narrativegoldmine.com. Verify 1,155 classes loaded. Store test results in AgentDB.", "tester")
  
  Task("Performance Analyzer", "Analyze WASM load time, graph rendering performance. Compare against 4.4x faster baseline. Use agentdb-optimization for metrics storage.", "perf-analyzer")

  // Monitor GitHub Actions workflow
  mcp__claude-flow__github_repo_analyze {
    repo: "jjohare/logseq",
    analysis_type: "workflow_status"
  }

  // Wait for deployment (check every 30s)
  // ... GitHub Actions runs for 3-5 minutes ...

  // Test deployment with Chrome DevTools
  mcp__chrome-devtools__browser_navigate {
    url: "https://narrativegoldmine.com/ontology",
    wait_until: "networkidle"
  }

  mcp__chrome-devtools__evaluate_js {
    script: `return {
      classes: window.ontologyStore?.classes?.length,
      edges: window.ontologyStore?.edges?.length,
      status: (window.ontologyStore?.classes?.length === 1155) ? 'PASS' : 'FAIL'
    }`
  }

  // Store deployment metrics in AgentDB
  mcp__claude-flow__memory_usage {
    action: "store",
    key: "publishing/deployments/" + new Date().toISOString(),
    value: JSON.stringify({
      pipeline_duration_min: 4.2,
      ttl_triples: 35952,
      webvowl_classes: 1155,
      webvowl_edges: 100,
      wasm_bundle_kb: 64,
      test_status: "PASS",
      timestamp: new Date().toISOString()
    }),
    namespace: "narrativegoldmine/publishing"
  }

  // Train deployment optimization
  mcp__claude-flow__neural_train {
    pattern_type: "deployment_optimization",
    training_data: "memory:narrativegoldmine/publishing/*",
    epochs: 30
  }

  // Batch all todos
  TodoWrite { todos: [
    {content: "Generate ontology files (TTL + JSON)", status: "completed", activeForm: "Generating ontology files"},
    {content: "Build WasmVOWL React app", status: "completed", activeForm: "Building WasmVOWL React app"},
    {content: "Monitor GitHub Actions pipeline", status: "completed", activeForm: "Monitoring GitHub Actions pipeline"},
    {content: "Wait for deployment to complete", status: "completed", activeForm: "Waiting for deployment to complete"},
    {content: "Test narrativegoldmine.com main site", status: "completed", activeForm: "Testing narrativegoldmine.com main site"},
    {content: "Test 3D ontology visualization", status: "completed", activeForm: "Testing 3D ontology visualization"},
    {content: "Verify 1,155 classes loaded", status: "completed", activeForm: "Verifying 1,155 classes loaded"},
    {content: "Store deployment metrics in AgentDB", status: "completed", activeForm: "Storing deployment metrics in AgentDB"},
    {content: "Train deployment optimization patterns", status: "completed", activeForm: "Training deployment optimization patterns"}
  ]}
```

---

## 🚀 AgentDB Performance Optimizations

### HNSW Indexing (150x Faster Semantic Search)

```javascript
// Build HNSW index for ontology classes
mcp__claude-flow__neural_patterns {
  action: "learn",
  operation: "hnsw_index_build",
  metadata: {
    dataset: "ontology_classes_embeddings",
    dimensions: 768,              // OpenAI ada-002 embedding size
    max_elements: 1200,           // 1,155 classes + 4% buffer
    M: 16,                        // Connections per node (higher = more accurate, slower build)
    ef_construction: 200,         // Build-time accuracy (higher = better quality, slower build)
    ef_search: 50                 // Search-time accuracy (higher = better recall, slower search)
  }
}

// Search with HNSW index
mcp__claude-flow__memory_search {
  pattern: "neural network fairness bias",
  namespace: "narrativegoldmine/ontology/classes",
  limit: 10,
  algorithm: "hnsw"  // 150x faster than linear scan
}
```

### Quantization (4-32x Memory Reduction)

```javascript
// Quantize embeddings for 1,155 ontology classes
mcp__claude-flow__neural_patterns {
  action: "learn",
  operation: "quantize_vectors",
  metadata: {
    input_file: "/memory/ontology_embeddings_fp32.bin",
    output_file: "/memory/ontology_embeddings_int8.bin",
    quantization_type: "int8",   // 4x memory reduction (fp32 → int8)
    preserve_accuracy: 0.95,     // 95% accuracy preservation
    calibration_samples: 100     // Use 100 samples for calibration
  }
}

// For extreme memory savings
mcp__claude-flow__neural_patterns {
  action: "learn",
  operation: "quantize_vectors",
  metadata: {
    quantization_type: "int4",   // 8x memory reduction (fp32 → int4)
    preserve_accuracy: 0.90      // 90% accuracy (acceptable trade-off)
  }
}
```

### Batch Operations for Ontology Processing

```javascript
// Process multiple ontology conversions in parallel
[Single Message]:
  // Spawn converter agents for different series
  Task("AI Series Converter", "Convert AI-0001 to AI-0500 pages to TTL using agentdb-optimization batch mode. Process in chunks of 100 pages.", "coder")
  
  Task("BC Series Converter", "Convert BC-0001 to BC-0505 pages to TTL using batch operations. Monitor memory usage with quantization.", "coder")
  
  Task("DT Series Converter", "Convert DT-0001 to DT-0490 pages to TTL. Use HNSW indexing for deduplication checks.", "coder")

  // All running in parallel with agentdb batch optimization
  // Expected: 3x faster than sequential processing
  
  TodoWrite { todos: [
    {content: "Batch convert AI series (500 pages)", status: "in_progress", activeForm: "Batch converting AI series"},
    {content: "Batch convert BC series (505 pages)", status: "in_progress", activeForm: "Batch converting BC series"},
    {content: "Batch convert DT series (490 pages)", status: "in_progress", activeForm: "Batch converting DT series"},
    {content: "Merge TTL files (1,495 total pages)", status: "pending", activeForm: "Merging TTL files"},
    {content: "Validate 35,952 triples generated", status: "pending", activeForm: "Validating triples generated"},
    {content: "Convert merged TTL to WebVOWL JSON", status: "pending", activeForm: "Converting to WebVOWL JSON"},
    {content: "Verify 1,155 classes in JSON", status: "pending", activeForm: "Verifying classes in JSON"}
  ]}
```

---

## 📚 Additional Documentation

### Optimization Guides

- **AgentDB Features**: `/docs/optimization/CLAUDE-MD-OPTIMIZATION-SUMMARY.md`
- **Chrome DevTools Testing**: `/docs/optimization/chrome-devtools-testing-guide.md`
- **Project Overview**: `/docs/PROJECT_OVERVIEW.md`
- **Architecture**: `/docs/ARCHITECTURE.md`
- **Ontology Statistics**: `/docs/ONTOLOGY-STATISTICS.md`

### Quick Reference

**Endpoints**:
- Main site: https://narrativegoldmine.com
- 3D ontology: https://narrativegoldmine.com/ontology
- GitHub repo: https://github.com/jjohare/logseq

**Key Metrics**:
- 2,519 pages
- 1,155 ontology classes
- 35,952 RDF triples
- 100 active relationships
- 3-5 min deployment time
- 150x faster search with AgentDB HNSW

**MCP Servers**:
- ✅ claude-flow@alpha - Multi-agent coordination
- ✅ ruv-swarm - Enhanced swarm features
- ✅ flow-nexus - Cloud orchestration (70+ tools)
- ⚠️ chrome-devtools - Web testing (**requires Claude Code restart**)

---

Remember: **Claude Flow coordinates, Claude Code creates, AgentDB remembers, Chrome DevTools validates!**
