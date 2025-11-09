# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a **Logseq knowledge graph instance**, not the Logseq application source code. It's a personal knowledge management system containing organized content about AI, blockchain, machine learning, and related technologies, published to narrativegoldmine.com.

## Key Architecture

### Directory Structure

- **mainKnowledgeGraph/** - Root knowledge base directory (1.2 GB)
  - **pages/** - Core knowledge content (2,519+ markdown files)
    - Ontology-based organization with prefix codes:
      - `AI-####` - AI topics (ethics, governance, safety, development)
      - `BC-####` - Blockchain topics (comprehensive ontology BC-0001 to BC-0505)
      - Topic pages for ML/DL, transformers, neural networks, etc.
  - **journals/** - Daily journal entries with timestamped notes
  - **assets/** - Media files, research papers, images (1.0 GB)
  - **whiteboards/** - Visual diagrams (.edn format)
  - **logseq/** - Configuration and customization
    - `config.edn` - Main Logseq configuration
    - `custom.js` - Custom JavaScript runtime (272 lines)
    - `custom.css` - Custom styling
    - `bak/` - Configuration backups

### Technology Stack

- **Format**: Markdown (.md) for content, EDN (Clojure) for configuration
- **Customization**: JavaScript for code execution, Clojure for queries
- **Publishing**: GitHub Actions → Logseq SPA → GitHub Pages
- **Domain**: narrativegoldmine.com

## Publishing Workflow

### Automated Publishing (GitHub Actions)

Triggered on every push to main:

```bash
# 1. Convert Logseq graph to static SPA
logseq/publish-spa --graph-directory mainKnowledgeGraph --output-directory www

# 2. Configure for GitHub Pages
touch www/.nojekyll

# 3. Set default landing page to introduction
sed -i 's/#\/all-pages/#\/page\/introduction/g' www/index.html

# 4. Configure custom domain
echo 'narrativegoldmine.com' > www/CNAME

# 5. Deploy to external repository
# Deploys to: flossverse/knowledgeGraph (gh-pages branch)
# Requires: ACCESS_TOKEN secret configured
```

**Workflow file**: `.github/workflows/publish.yml`

## Logseq Configuration

### Core Settings (config.edn)

**Task Management**:
```clojure
:preferred-workflow :todo  ; Uses TODO/DOING (not NOW/LATER)
```

**File Naming**:
```clojure
:file/name-format :triple-lowbar  ; Slashes → ___ in filenames
```

**Graph Visualization**:
```clojure
:graph/settings {:journal? true}
:graph/forcesettings {:link-dist 180 :charge-strength -1000}
```

**Week Settings**:
```clojure
:start-of-week 6  ; Sunday as first day
```

**Query System**:
- Default journal queries for NOW/DOING tasks
- Custom result transforms (`:sort-by-priority`)
- Linked reference collapse threshold: 50

**Integrations**:
- Zotero integration configured
- Flashcards, whiteboards, journals enabled
- Block timestamps, search accent removal enabled

### Custom Code Execution (custom.js)

The knowledge graph includes an **executable code runtime** via the "Kit" system:

**Supported Languages**:
- **JavaScript**: Native async execution
- **Python**: Pyodide v0.23.4 (WebAssembly)
- **R**: WebR (latest, WebAssembly)

**Built-in Kits**:
- `evalpage` - Run all code blocks on current page
- `evalparent` - Run parent block's code
- `runpage` - Execute all code on named page
- `togglemsg` - Toggle status messages on/off

**Architecture**:
- `Concept` prototype system for modular organization
- `Language` modules: JS, Python, R
- `Module.Kits` - Code execution framework
- `Module.Msg` - Status messaging system
- MutationObserver watches DOM for `.kit` class elements
- Async dependency loading for Python/R environments

**Usage in Markdown**:
```markdown
{{renderer :kit, evalpage}}  ; Creates button to run all code on page
{{renderer :kit, runpage, pageName}}  ; Run code from specific page
```

## Content Organization

### Ontology System

Recent commits introduced ontology-based organization:

**AI Domain** (500+ pages):
- AI-0376 to AI-0448: Fairness, bias, governance, ethics
- AI-0397 to AI-0406: Safety research, red teaming, adversarial robustness
- Cross-referenced topics: AI Governance, AI Ethics, AI Risk, AI Development

**Blockchain Domain** (BC-0001 to BC-0505):
- Fundamentals: blockchain, distributed ledger, blocks, transactions
- Cryptography: hashing, digital signatures, zero-knowledge proofs
- Consensus: PoW, PoS, mining algorithms
- DeFi: tokens, smart contracts, DAOs, tokenomics
- Enterprise: Hyperledger, permissioned chains
- Applications: supply chain, healthcare, real estate
- Sustainability and environmental impact

**ML/DL Topics**:
- BERT, ALBERT, Transformers
- Neural Networks, Computer Vision
- Natural Language Processing

### File Naming Conventions

- Page references: `[[Page Name]]` (wiki-style links)
- Special characters in filenames: Use triple underscore `___` for slashes
- Example: `AI___Governance` → filename for page "AI/Governance"
- Ontology codes: `AI-0001.md`, `BC-0001.md`, etc.

### Task Management

- Workflow: TODO → DOING → DONE
- Journal queries automatically surface NOW/DOING tasks
- Priority-based sorting via `:block/priority` property

## Development Commands

### Local Editing

```bash
# 1. Edit content in Logseq application
# 2. Changes are stored in mainKnowledgeGraph/

# Commit and push
git add mainKnowledgeGraph/
git commit -m "Description"
git push  # Triggers automatic publishing
```

### Manual Publishing (if needed)

```bash
# Install Logseq CLI
npm install -g @logseq/publish-spa

# Publish graph
logseq/publish-spa --graph-directory mainKnowledgeGraph --output-directory www --version nightly

# Customize output
touch www/.nojekyll
sed -i 's/#\/all-pages/#\/page\/introduction/g' www/index.html
echo 'narrativegoldmine.com' > www/CNAME
```

## Important Patterns

### Code Block Execution

JavaScript code blocks are executable within the graph:

```javascript
// Runs in browser context with access to:
logseq.api  // Logseq API
logseq.Language  // Language modules (JS, Python, R)
logseq.Module  // Kits, Msg modules
logseq.kits  // Registered kit handlers
```

### Query System

Advanced Datalog queries in content:

```clojure
#+BEGIN_QUERY
{:title "Custom Query"
 :query [:find (pull ?b [*])
         :where [?b :block/marker "TODO"]]
 :result-transform (fn [result] (sort-by :block/priority result))}
#+END_QUERY
```

### Configuration Backup

- Custom JavaScript backed up to `customBackup.js`
- Config snapshots in `logseq/bak/` with timestamps
- Manual backup pattern before major changes

## Git Workflow

**Current Branch**: main (default for all work)

**Recent Development Focus**:
- Ontology-based system reorganization
- Preparation for public ontology merge
- Graph structure improvements
- Content expansion and refinement

**Submodules**:
- ResearchPapers - Linked research paper repository

## Publishing Details

**Source Repository**: This repo (logseq)
**Publishing Repository**: flossverse/knowledgeGraph
**Publishing Branch**: gh-pages
**Domain**: narrativegoldmine.com
**Build Tool**: Logseq SPA Publisher (nightly version)
**Deployment**: GitHub Actions via peaceiris/actions-gh-pages@v3

**Required Secret**: `ACCESS_TOKEN` for cross-repo deployment

## Notes for Development

1. **Content Changes**: Edit in Logseq app, push to trigger auto-publish
2. **Configuration Changes**: Modify `mainKnowledgeGraph/logseq/config.edn`
3. **Custom Code**: Edit `mainKnowledgeGraph/logseq/custom.js`
4. **Publishing Changes**: Modify `.github/workflows/publish.yml`
5. **File Naming**: Remember triple underscore convention for special chars
6. **Task Markers**: Use TODO/DOING, not NOW/LATER
7. **Ontology Codes**: Follow AI-#### or BC-#### pattern for new categorized content
