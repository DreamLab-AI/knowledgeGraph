# Logseq Ontology Tools - Knowledge Base

**Last Updated**: 2025-11-13
**Version**: 2.0.0
**Status**: Production

---

## Overview

This repository contains ontology management tools for the Logseq Knowledge Graph, a comprehensive semantic knowledge base spanning blockchain, AI, robotics, metaverse, and cross-domain concepts. The system uses a single-source-of-truth architecture where markdown pages serve as the authoritative data source for automated ontology generation.

### Key Statistics
- **1,728 ontology pages** in mainKnowledgeGraph/pages/
- **32,000+ RDF triples** generated from markdown
- **1,200+ semantic classes** across multiple domains
- **8 major blockchain platforms** documented with implementation details

---

## Architecture

### Single Source of Truth
```
mainKnowledgeGraph/pages/*.md (1,728 markdown files)
           ↓
   Header Extractor Tool
           ↓
   ontology-unified-full.ttl (RDF/Turtle)
           ↓
   WebVOWL Visualization
```

**Core Principle**: All ontology data originates from markdown OntologyBlock headers. No manual TTL editing.

### OntologyBlock Format

Each ontology page contains a structured header:

```markdown
- ### OntologyBlock
  id:: term-ontology
  collapsed:: true

  - **Identification**
    - domain-prefix:: BC
    - sequence-number:: 0524
    - term-id:: BC-0524
    - preferred-term:: Transaction Fee
    - source-domain:: blockchain
    - status:: complete
    - version:: 1.0.0

  - **Definition**
    - definition:: [Concise technical definition]
    - maturity:: established
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:TransactionFee
    - belongsToDomain:: [[Blockchain]]

  - #### Relationships
    - is-subclass-of:: [[Tokenomics]]

  - #### OWL Axioms
    - ```clojure
      (Declaration (Class :TransactionFee))
      (SubClassOf :TransactionFee :Tokenomics)
      ```

- ## About [Term Name]
  [Extended content with examples and implementations]
```

---

## Tools & Workflows

### Header Extractor
**Location**: `tools/converters/webvowl_header_only_converter.py`

Extracts OntologyBlock headers from markdown and generates unified RDF/Turtle ontology.

**Usage**:
```bash
cd Ontology-Tools
python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output ../ontology-unified-full.ttl
```

**Features**:
- Parses 1,728 markdown files
- Extracts only OntologyBlock headers (ignores content below)
- Generates 32,000+ triples
- Validates OWL syntax
- Creates cross-domain bridges

### WebVOWL Visualization
**Location**: `publishing-tools/WasmVOWL/`

Interactive 3D graph visualization using React Three Fiber + WASM physics engine.

**Technology Stack**:
- React + TypeScript frontend
- Rust WASM physics simulation
- Petgraph for graph topology
- Rapier3D for force-directed layout

**Build**:
```bash
cd publishing-tools/WasmVOWL/rust-wasm
cargo build --target wasm32-unknown-unknown --release
wasm-bindgen target/wasm32-unknown-unknown/release/rust_wasm.wasm --out-dir ../modern/public/wasm

cd ../modern
npm install
npm run build
```

---

## Domain Coverage

### Blockchain Domain
**Statistics**:
- 500+ blockchain concepts documented
- 8 major platforms with implementation details
- 50+ protocols and standards referenced

**Key Topics**:
- **Tokenomics**: Transaction fees, gas mechanics, supply models, emission schedules
- **Consensus**: Proof-of-Work, Proof-of-Stake, Byzantine Fault Tolerance
- **Enterprise**: Hyperledger Fabric, R3 Corda, permissioned networks
- **DeFi**: AMMs, lending protocols, liquidity pools, yield farming
- **DAO Governance**: Voting mechanisms, treasury management, proposal systems
- **Regulatory**: AML/KYC, FATF recommendations, EU MiCA, securities regulation

**Platform Coverage**:
- **Ethereum**: Gas mechanics, EIP-1559, staking, L2 scaling
- **Bitcoin**: UTXO model, halving, satoshi-per-byte fees, 21M supply cap
- **Binance Smart Chain**: BNB tokenomics, burn mechanisms
- **Polygon**: L2 optimization, sidechain architecture
- **Solana**: High-throughput consensus, fee markets
- **Arbitrum/Optimism**: L2 rollups, 90-99% fee reduction
- **Cardano**: UTXO model, Ouroboros consensus, emission schedule
- **Polkadot**: Parachains, cross-chain interoperability

### AI Domain
- Machine learning fundamentals
- Neural architectures (CNNs, RNNs, Transformers)
- Training methodologies
- Evaluation metrics
- Ethical AI and governance

### Robotics Domain
- Autonomous systems
- Sensor fusion
- Path planning algorithms
- Human-robot interaction
- Industrial automation

### Metaverse Domain
- Virtual worlds and digital twins
- Spatial computing
- Avatar systems
- Virtual economies

---

## Recent Major Updates

### November 2025 - Branch Cleanup & Enrichment Merge

**Commit**: `5f5139e9`

#### What Was Done

**1. Intelligent Enrichment Merge**
- Analyzed 200 BC files from legacy enrichment branch
- Identified only **11 files (5.5%)** with concrete implementation details
- Excluded 189 generic template files to prevent knowledge graph pollution
- Modified 11 existing pages + created 1 new page (Gas Limit)

**2. Content Enhancement**
Added concrete blockchain implementations to 12 pages:
- Transaction Fee, Tokenomics, Gas Price, Gas Limit
- Base Fee, Priority Fee, Fee Market
- Deflationary Token, Emission Schedule, Burning Mechanism
- Total Supply, Smart Contract

**Quality Criteria for Enrichments**:
- ✅ Specific platform implementations (Bitcoin, Ethereum, BSC, Polygon, Solana)
- ✅ Protocol references (EIP-1559, EIP-721, etc.)
- ✅ Quantitative metrics (TPS, gas costs, supply caps)
- ❌ Generic template definitions (excluded)

**3. Branch Cleanup**
Deleted 7 obsolete branches from origin:
- claude/fix-wasm-graph-viewer-forces-011CV2bsWSLG4U9xo92qeDvh (WASM fixes merged)
- claude/init-claude-flow-011CV2bsWSLG4U9xo92qeDvh (Chimera Prime merged)
- claude/ontology-comparison-011CV2bsWSLG4U9xo92qeDvh (analysis complete)
- claude/project-work-011CV2bsWSLG4U9xo92qeDvh (fully merged)
- claude/init-claude-flow-011CV2a5mfyAKqz2q8bHT7at (superseded)
- old-system (archive)
- claude/examine-logseq-ontology-011CUvfmccC2Fv2ecZgxvaJ8 (enrichments extracted)

**Branches Kept**:
- **main**: Primary development branch
- **mobile**: Android Logseq sync via CI/CD

#### Example Enhancement

**Before** (Chimera Prime):
> "The payment required for processing transactions and including them in blockchain blocks, compensating validators/miners for computational resources and providing spam protection."

**After** (Enriched):
> "The payment required for processing transactions and including them in blockchain blocks, compensating validators/miners for computational resources and providing spam protection.
>
> ### Implementation Across Blockchains
> Transaction fees are implemented universally across Bitcoin (satoshi-per-byte pricing), Ethereum (gas-based fees with EIP-1559), Binance Smart Chain, Polygon, Solana, and other major blockchains. These fees serve critical economic purposes including spam prevention, network security incentivization through miner/validator compensation, and efficient resource allocation through market-based transaction prioritization mechanisms."

---

## Development Guidelines

### Adding New Ontology Pages

**1. Create Markdown File**
- Location: `mainKnowledgeGraph/pages/`
- Naming: Use capitalized term names (e.g., "Transaction Fee.md")
- Format: Follow OntologyBlock template

**2. Assign BC-ID**
Check existing term-ids to avoid conflicts:
```bash
grep "term-id::" mainKnowledgeGraph/pages/*.md | sort -u
```

**3. Write Definition**
- Concise (1-2 sentences for primary definition)
- Technical accuracy over marketing language
- Include concrete examples in "About" section
- Reference specific protocols, platforms, or standards

**4. Define Relationships**
- Use `is-subclass-of` for taxonomic hierarchy
- Use `related-to` for cross-domain connections
- Link to existing pages via [[WikiLinks]]

**5. Validate OWL Axioms**
- Follow functional syntax
- Declare classes before use
- Use proper namespace prefixes (bc:, ai:, rb:, mv:)

**6. Regenerate Ontology**
```bash
python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output ../ontology-unified-full.ttl
```

### Quality Standards

**Definition Quality Checklist**:
- [ ] Concise and technically accurate
- [ ] Includes concrete examples (protocols, platforms, metrics)
- [ ] Avoids marketing language and buzzwords
- [ ] References authoritative sources where applicable
- [ ] Authority score reflects confidence level (0.80-0.95 for established concepts)

**Structural Integrity**:
- [ ] OntologyBlock header properly formatted
- [ ] All required fields present (term-id, preferred-term, definition)
- [ ] OWL class properly namespaced
- [ ] Relationships link to existing pages
- [ ] No duplicate term-ids

**Content Enrichment**:
- [ ] "About" section provides extended context
- [ ] Concrete implementations documented for technical concepts
- [ ] Platform-specific details included where relevant
- [ ] Quantitative metrics included (TPS, costs, limits)

---

## Merge Strategy for Legacy Content

### Selective Enrichment Principle
When merging content from legacy branches or external sources:

**1. Quality Filter**
Analyze all candidate files for:
- Concrete examples and implementations
- Specific platform/protocol references
- Quantitative metrics
- Technical depth beyond generic definitions

**2. Duplicate Detection**
- Check for existing pages with similar concepts
- Verify term-id namespace conflicts
- Detect case-sensitivity issues in filenames

**3. Integration Strategy**
- **If page exists**: Merge enrichments into "About" section, preserve OntologyBlock
- **If page is new**: Create with proper naming and BC-ID assignment
- **If content is generic**: Exclude to prevent knowledge graph pollution

**4. Validation**
- Verify no duplicate pages created
- Confirm existing BC-IDs preserved
- Test ontology generation
- Review merged content for quality

### Example: November 2025 Merge
- Analyzed 200 legacy BC files
- Only 11 files (5.5%) passed quality filter
- 189 generic templates excluded
- Result: Zero duplicates, high-quality enrichments only

---

## CI/CD & Deployment

### Branch Strategy
- **main**: Primary development, always deployable
- **mobile**: Android Logseq sync (automated via GitHub Actions)

### Build Pipeline
WebVOWL SPA build is automated via GitHub Actions:
1. Build Rust WASM module
2. Generate WASM bindings
3. Build React application with ontology data
4. Deploy to GitHub Pages

### Publishing Flow
```bash
# Phase 1: Generate ontology
cd Ontology-Tools
python3 tools/converters/webvowl_header_only_converter.py \
  --pages-dir ../mainKnowledgeGraph/pages \
  --output ../ontology-unified-full.ttl

# Phase 2: Build WASM
cd ../publishing-tools/WasmVOWL/rust-wasm
./build.sh

# Phase 3: Build SPA
cd ../modern
npm run build

# Phase 4: Deploy
npm run deploy  # or via GitHub Actions
```

---

## Troubleshooting

### Common Issues

**Issue**: Ontology generation fails with parsing errors
- **Cause**: Malformed OntologyBlock headers
- **Fix**: Validate markdown structure, check for missing fields

**Issue**: WebVOWL shows no graph
- **Cause**: Empty or invalid TTL file
- **Fix**: Check ontology-unified-full.ttl exists and has content

**Issue**: Duplicate classes in ontology
- **Cause**: Multiple pages with same term-id
- **Fix**: Search for duplicate term-ids, consolidate or reassign

**Issue**: WASM fails to load
- **Cause**: Build mismatch or CORS issues
- **Fix**: Rebuild WASM with `wasm-bindgen`, check HTTP headers

**Issue**: Graph physics not working
- **Cause**: Edge topology not properly extracted
- **Fix**: Verify `edges_with_endpoints()` method in Rust graph module

### Validation Commands

**Check for duplicate term-ids**:
```bash
grep "term-id::" mainKnowledgeGraph/pages/*.md | \
  cut -d: -f4 | sort | uniq -d
```

**Count ontology pages**:
```bash
grep -l "### OntologyBlock" mainKnowledgeGraph/pages/*.md | wc -l
```

**Validate TTL syntax**:
```bash
rapper -i turtle -o ntriples ontology-unified-full.ttl > /dev/null
```

**Check ontology stats**:
```bash
grep "^@prefix\|^bc:\|^ai:\|^rb:\|^mv:" ontology-unified-full.ttl | wc -l
```

---

## References

### Key Files
- `mainKnowledgeGraph/pages/*.md` - Ontology source files (1,728 pages)
- `tools/converters/webvowl_header_only_converter.py` - TTL generator
- `publishing-tools/WasmVOWL/` - Visualization framework
- `ontology-unified-full.ttl` - Generated RDF ontology

### External Resources
- [OWL 2 Web Ontology Language](https://www.w3.org/TR/owl2-overview/)
- [RDF 1.1 Turtle](https://www.w3.org/TR/turtle/)
- [WebVOWL Specification](http://vowl.visualdataweb.org/webvowl.html)
- [Logseq Documentation](https://docs.logseq.com/)

### Blockchain Standards Referenced
- **EIP-1559**: Ethereum fee market reform
- **EIP-721**: Non-fungible token standard
- **EIP-20**: Token standard (ERC-20)
- **BIP-32**: Bitcoin HD wallets
- **BIP-39**: Mnemonic codes
- **ISO/IEC 23257:2021**: Blockchain and DLT reference architecture

---

## Maintenance & Support

### Regular Maintenance Tasks

**Monthly**:
- Review and update platform statistics (TPS, fees, supply)
- Add new protocols and standards as they emerge
- Validate external references and links
- Update authority scores based on maturity

**Quarterly**:
- Audit ontology for duplicate or outdated concepts
- Review cross-domain bridges for accuracy
- Update blockchain platform coverage
- Regenerate all documentation

**Annual**:
- Major version release with breaking changes
- Comprehensive ontology restructuring if needed
- Update to latest OWL/RDF standards
- Benchmark against industry ontologies

### Contact & Contributions
For questions, issues, or contributions, please use the GitHub issue tracker.

---

## Changelog

### v2.0.0 (2025-11-13)
- Intelligent enrichment merge from legacy branch
- Added 12 enhanced blockchain implementation pages
- Cleaned up 7 obsolete development branches
- Established quality criteria for content enrichment (5.5% signal vs noise)
- Zero duplicate pages maintained
- Platform coverage: 8 major blockchains documented

### v1.0.0 (2025-11-12)
- Chimera Prime integration (240 new pages)
- Unified ontology architecture (single source of truth)
- WebVOWL WASM visualization
- Header-only extraction pipeline
- Cross-domain bridges (1,667 relationships)

---

**Document Version**: 1.0
**Last Reviewed**: 2025-11-13
**Maintained By**: Ontology Development Team
