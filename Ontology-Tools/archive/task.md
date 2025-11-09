# MASTER REFACTORING DIRECTIVE: Logseq/OWL Hybrid Ontology System
## Single Source of Truth - Disruptive Technologies Meta-Ontology

**Status**: ACTIVE REFACTORING (2025-10-29)
**Scope**: 994 markdown files → Unified canonical format
**Goal**: World-class research-grade disruptive technology ontology

---

## 1. EXECUTIVE SUMMARY

We are refactoring the **entire Logseq/pages corpus** (994 files, 191K lines) from multiple inconsistent formats into a **single canonical Logseq/OWL hybrid format**. This system serves as the definitive source of truth for four integrated ontology graphs:

1. **Metaverse Ontology** (MV) - Virtual worlds, avatars, immersive tech
2. **Blockchain Ontology** (BC) - Distributed systems, consensus, crypto
3. **AI-Grounded Ontology** (AI) - Machine learning, ethics, governance
4. **Robotics Ontology** (RB) - Hardware, control systems, HRI

### Core Philosophy

**Separation of Concerns**:
- **OntologyBlock** (collapsed): Machine-readable formal semantics (OWL 2 DL)
- **About Section** (expanded): Human-readable context and documentation

**Single File = Single Concept**: Each markdown file defines ONE ontological class with complete metadata, relationships, and formal axioms.

---

## 2. CURRENT STATE ANALYSIS

### File Statistics (as of 2025-10-29)
```
Total Files: 994
Total Lines: 191,049
Average Size: 192 lines/file
Total Size: ~55 MB

By Domain Prefix:
- BC-0xxx: 200 files (Blockchain)
- RB-xxxx: 105 files (Robotics)
- AI-0xxx: 64 files (AI-Grounded)
- No prefix: 625 files (Metaverse + general)

Quality Distribution:
- Empty files: 73 (7.3%) - NEEDS WORK
- Stub files (1-50 lines): 102 (10.3%) - NEEDS WORK
- Medium files (50-300 lines): 701 (70.5%) - REFACTOR NEEDED
- Comprehensive (300+ lines): 118 (11.9%) - GOOD EXAMPLES
```

### Format Analysis

**THREE COMPETING FORMATS IDENTIFIED**:

1. **Format A: Logseq Nested Block** (Metaverse standard - 25% of files)
   - Example: `6G Network Slice.md`
   - Collapsed `###  OntologyBlock` with nested properties
   - Uses `[[WikiLinks]]` for relationships
   - OWL axioms in ` ```clojure ` code fence
   - ✅ **THIS IS THE CANONICAL FORMAT**

2. **Format B: Markdown with Metadata Headers** (AI/BC standard - 60% of files)
   - Example: `AI-0376-algorithmic-accountability.md`
   - Markdown headers (`## Metadata`, `## Definition`)
   - Bullet list metadata
   - OWL in `<details>` + ` ```clojure `
   - ❌ NEEDS CONVERSION

3. **Format C: Simple Reference** (15% of files)
   - Minimal structure
   - No OWL syntax
   - ❌ NEEDS ENRICHMENT

---

## 3. CANONICAL FORMAT SPECIFICATION

### Required File Structure

Every concept file MUST follow this exact structure:

```markdown
- ### OntologyBlock
  id:: [concept-slug]-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: [numeric-id]
    - preferred-term:: [Full Concept Name]
    - source-domain:: [metaverse|blockchain|ai-grounded|robotics]
    - status:: [complete|in-progress|draft|legacy]
    - version:: [semver]
    - last-updated:: [YYYY-MM-DD]

  - **Definition**
    - definition:: [Concise single-sentence formal definition]
    - maturity:: [mature|emerging|experimental|deprecated]
    - source:: [[Standard1]], [[Standard2]], [[Standard3]]
    - authority-score:: [0.0-1.0 if applicable]

  - **Semantic Classification**
    - owl:class:: [namespace:ClassName]
    - owl:physicality:: [PhysicalEntity|VirtualEntity|HybridEntity]
    - owl:role:: [Agent|Object|Process]
    - owl:inferred-class:: [namespace:InferredClass]
    - belongsToDomain:: [[PrimaryDomain]], [[SecondaryDomain]]
    - implementedInLayer:: [[LayerName]]

  - #### Relationships
    id:: [concept-slug]-relationships
    - has-part:: [[Component1]], [[Component2]]
    - is-part-of:: [[ParentConcept]]
    - requires:: [[Dependency1]], [[Dependency2]]
    - depends-on:: [[ExternalDependency]]
    - enables:: [[EnabledCapability1]], [[EnabledCapability2]]
    - related-to:: [[RelatedConcept1]], [[RelatedConcept2]]
    - bridges-to:: [[CrossDomainConcept]] (domain: [target-domain])

  - #### OWL Axioms
    id:: [concept-slug]-owl-axioms
    collapsed:: true
    - ```clojure
      Declaration(Class([namespace]:[ClassName]))

      # Classification
      SubClassOf([namespace]:[ClassName] [namespace]:[ParentClass])
      SubClassOf([namespace]:[ClassName] [namespace]:[Physicality])
      SubClassOf([namespace]:[ClassName] [namespace]:[Role])

      # Domain/Layer classification
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom([namespace]:belongsToDomain [namespace]:[Domain])
      )

      # Relationships with cardinality
      SubClassOf([namespace]:[ClassName]
        ObjectSomeValuesFrom([namespace]:[property] [namespace]:[Range])
      )

      # ... additional axioms ...
      ```

- ## About [Concept Name]
  id:: [concept-slug]-about

  - [Rich human-readable description with context]
  -
  - ### Key Characteristics
    id:: [concept-slug]-characteristics
    - [Characteristic 1]
    - [Characteristic 2]
    - ...
  -
  - ### Technical Components
    id:: [concept-slug]-components
    - [[Component1]] - Description
    - [[Component2]] - Description
  -
  - ### Use Cases
    id:: [concept-slug]-use-cases
    - **Use Case 1**: Description
    - **Use Case 2**: Description
  -
  - ### Standards & References
    id:: [concept-slug]-standards
    - [[Standard Name]] - Description
    - Citation format for academic sources
  -
  - ### Related Concepts
    id:: [concept-slug]-related
    - [[RelatedConcept1]] - Relationship type
    - [[RelatedConcept2]] - Relationship type
```

### Critical Requirements

1. ✅ **First block MUST be `### OntologyBlock`** (exactly 3 #)
2. ✅ **First property MUST be `ontology:: true`** (Logseq query tag)
3. ✅ **Must include `source-domain`** (metaverse/blockchain/ai-grounded/robotics)
4. ✅ **Must include `status`** (complete/in-progress/draft/legacy)
5. ✅ **OWL axioms in Clojure code fence** (` ```clojure `)
6. ✅ **Use `[[WikiLinks]]` for all concept references**
7. ✅ **Every block/subblock needs unique `id::`**
8. ✅ **OntologyBlock MUST be `collapsed:: true`**

---

## 4. REFACTORING EXECUTION STRATEGY

### Phase 1: Preparation & Analysis

**Tasks**:
1. ✅ Sample representative files from each format type
2. ✅ Identify canonical format (Format A - Logseq nested)
3. ✅ Create master refactoring directive (this file)
4. 🔄 Extract cross-domain bridges from git history
5. 🔄 Create batch processing groups (200 files per batch)

**Deliverables**:
- This updated `task.md` file
- Bridge extraction report
- Batch assignment manifest

### Phase 2: Hive Mind Swarm Initialization

**Swarm Topology**: Hierarchical (Queen + Specialized Workers)

**Agent Types**:
1. **Queen Coordinator** (1 agent)
   - Overall orchestration
   - Progress monitoring
   - Quality validation
   - State management across context resets

2. **Format Converter Agents** (4 agents - one per domain)
   - `converter-ai`: AI-Grounded files (AI-0xxx)
   - `converter-bc`: Blockchain files (BC-0xxx)
   - `converter-rb`: Robotics files (RB-xxxx)
   - `converter-mv`: Metaverse files (no prefix)

3. **Bridge Extractor Agent** (1 agent)
   - Mine git history for lost cross-domain relationships
   - Rebuild semantic bridges between ontologies
   - Add `bridges-to::` properties

4. **Quality Validator Agent** (1 agent)
   - Validate canonical format compliance
   - Check OWL syntax correctness
   - Verify WikiLink integrity
   - Ensure metadata completeness

5. **Documentation Updater Agent** (1 agent)
   - Update README.md
   - Refresh architecture docs
   - Remove legacy notes
   - Generate completion reports

**Initialization Command**:
```bash
npx claude-flow@alpha swarm init --topology hierarchical --max-agents 8
```

### Phase 3: Batch Processing Strategy

**Batch Size**: 200 files per batch (prevents context overload)

**Batch Groups**:
```
Batch 1: AI-0001 to AI-0200 (AI domain)
Batch 2: BC-0001 to BC-0200 (Blockchain domain - part 1)
Batch 3: BC-0201 to BC-0400 (Blockchain domain - part 2)
Batch 4: RB-0001 to RB-0200 (Robotics domain)
Batch 5: Metaverse core concepts (alphabetical A-L)
Batch 6: Metaverse core concepts (alphabetical M-Z)
```

**Processing Pattern (per batch)**:
1. Converter agent loads 200 files
2. Applies canonical format transformation
3. Preserves all semantic content
4. Adds missing metadata (source-domain, status)
5. Writes transformed files back
6. Validator agent checks results
7. Queen coordinator updates progress tracker

**State Management**:
- Use `npx claude-flow@alpha hooks session-end` to export state
- Use `npx claude-flow@alpha hooks session-restore` after context reset
- Persistent memory keys: `refactor/batch-[N]/status`, `refactor/batch-[N]/completed-files`

### Phase 4: Cross-Domain Bridge Restoration

**Strategy**:
1. Bridge Extractor agent mines git history:
   ```bash
   git log --all --full-history --source --diff-filter=D -- "*.ttl" | grep "dt:"
   ```
2. Extract all `dt:implements`, `dt:securedBy`, `dt:enables` relationships
3. Map to WikiLink format: `bridges-to:: [[TargetConcept]] (domain: [domain])`
4. Add to relevant concept files under Relationships section

**Target**: Restore 200+ cross-domain bridges identified in previous work

### Phase 5: Documentation & Cleanup

**Tasks**:
1. Update `README.md`:
   - Change title to "Disruptive Technologies Ontology"
   - Remove Metaverse-specific branding
   - Add 4-domain overview
   - Link to `task.md` as system specification

2. Update `docs/` architecture:
   - Document Logseq/OWL hybrid system
   - Explain canonical format rationale
   - Provide agent interaction guide
   - Add batch processing playbook

3. Remove legacy files:
   - Delete old `.ttl` files in `ontologies/` subdirectories
   - Clean up duplicate markdown in `docs/`
   - Remove temporary working files

4. Final validation:
   - Run OWL extractor tool on entire corpus
   - Validate generated `.ofn` file
   - Run SPARQL competency questions
   - Generate world-class certification report

---

## 5. AGENT INTERACTION PROTOCOL

### For Converter Agents

**Input**:
- List of 200 files to process
- Source format type (A/B/C)
- Target domain (metaverse/blockchain/ai-grounded/robotics)

**Process**:
1. Read source file
2. Parse existing content (definition, relationships, OWL)
3. Map to canonical format structure
4. Add missing required fields:
   - `source-domain:: [domain]`
   - `status:: [complete|draft]` (infer from content richness)
   - `id::` blocks (generate from concept name)
5. Preserve ALL semantic content (no data loss)
6. Transform OWL syntax if needed (maintain functional syntax)
7. Convert markdown headers to Logseq nested structure
8. Write transformed file to same path

**Output**:
- 200 transformed markdown files
- Transformation log with statistics
- Error report for any failed conversions

**Memory Usage**:
```bash
# Before processing
npx claude-flow@alpha memory store --key "refactor/batch-N/start-time" --value "[timestamp]"

# After processing
npx claude-flow@alpha memory store --key "refactor/batch-N/status" --value "completed"
npx claude-flow@alpha memory store --key "refactor/batch-N/files-processed" --value "200"
npx claude-flow@alpha memory store --key "refactor/batch-N/errors" --value "[error-count]"
```

### For Bridge Extractor Agent

**Input**:
- Git repository path
- List of all concept files (994 files)

**Process**:
1. Mine git history for deleted `.ttl` files containing `dt:` relationships
2. Extract semantic bridge patterns:
   - `dt:implements` (AI → Robotics, AI → Blockchain)
   - `dt:securedBy` (Metaverse → Blockchain)
   - `dt:enables` (cross-domain capabilities)
   - `dt:produces` (data flow relationships)
3. Map IRIs to WikiLink format:
   - `mv:Avatar dt:implements aigo:ReinforcementLearning`
   - → `Avatar.md`: `bridges-to:: [[Reinforcement Learning]] (domain: ai-grounded)`
4. Update concept files with bridge relationships
5. Create bridge catalog

**Output**:
- Bridge catalog (JSON or markdown table)
- 200+ updated concept files with restored bridges
- Bridge validation report

### For Quality Validator Agent

**Input**:
- List of refactored files (batch or full corpus)
- Canonical format specification (from this file)

**Process**:
1. For each file:
   - ✅ Check first block is `### OntologyBlock`
   - ✅ Check `ontology:: true` exists
   - ✅ Check required fields present (term-id, preferred-term, etc.)
   - ✅ Validate `source-domain` is one of 4 domains
   - ✅ Check OWL axioms in Clojure code fence
   - ✅ Verify all `[[WikiLinks]]` reference existing files
   - ✅ Validate block IDs are unique
2. Parse OWL syntax (Functional Syntax validation)
3. Generate compliance score per file (0-100%)

**Output**:
- Validation report with compliance scores
- List of files needing corrections
- WikiLink integrity report (broken links)

### For Documentation Updater Agent

**Input**:
- Refactoring completion status
- Statistics (994 files processed, X bridges restored, etc.)

**Process**:
1. Update `/Metaverse-Ontology/README.md`:
   - Generalize to "Disruptive Technologies Ontology"
   - Add 4-domain overview section
   - Link to this `task.md` as specification
   - Add Logseq/OWL hybrid system explanation
2. Create `/Metaverse-Ontology/docs/LOGSEQ-OWL-SYSTEM.md`
3. Create `/Metaverse-Ontology/docs/CANONICAL-FORMAT-GUIDE.md`
4. Update `/Metaverse-Ontology/docs/WORLD-CLASS-COMPLETION-REPORT.md`
5. Clean up legacy files

**Output**:
- Updated documentation corpus
- Completion report with certification
- Clean repository structure

---

## 6. PROGRESS TRACKING

### Batch Completion Tracker

| Batch | Files | Domain | Status | Completed | Errors |
|-------|-------|--------|--------|-----------|--------|
| 1 | AI-0xxx (64 files) | AI-Grounded | ✅ **COMPLETE** | 64/64 | 0 |
| 2 | BC-0001 to BC-0100 | Blockchain | ✅ **COMPLETE** | 100/100 | 0 |
| 3 | BC-0101 to BC-0200 | Blockchain | 🔄 Pending | 0/100 | 0 |
| 4 | RB-0001 to RB-0005 (5 files) | Robotics | ✅ **COMPLETE** | 5/5 | 0 |
| 5 | MV A-L | Metaverse | 🔄 Pending | 0/362 | 0 |
| 6 | MV M-Z | Metaverse | 🔄 Pending | 0/362 | 0 |

**Current Progress**: 169/994 files refactored (17.0%)

### Quality Metrics

| Metric | Target | Current | Status |
|--------|--------|---------|--------|
| Format Compliance | 100% | 17.0% | 🔄 Batches 1-2, 4 Done |
| Metadata Completeness | 100% | 17.0% | 🔄 169 files complete |
| OWL Syntax Validity | 100% | 17.0% | ✅ Batches 1-2, 4 validated |
| WikiLink Integrity | 100% | TBD | 🔄 Pending validation |
| Cross-Domain Bridges | 200+ | 0 | 🔄 Pending extraction |
| Empty Files Resolved | 0 | 73 | 🔄 Not yet addressed |

---

## 7. CONTEXT RESET RECOVERY

When context window resets during refactoring:

### Recovery Checklist

1. **Restore Session State**:
   ```bash
   npx claude-flow@alpha hooks session-restore --session-id "refactor-dt-ontology"
   ```

2. **Check Progress**:
   ```bash
   npx claude-flow@alpha memory retrieve --key "refactor/current-batch"
   npx claude-flow@alpha memory retrieve --key "refactor/batch-N/status"
   ```

3. **Review This File**:
   - Re-read this `task.md` to understand system
   - Check batch completion tracker (section 6)
   - Identify next pending batch

4. **Resume Processing**:
   - Spawn appropriate converter agent for next batch
   - Continue from last completed file in batch
   - Update progress tracker

### State Export Command (run before context exhaustion)
```bash
npx claude-flow@alpha hooks session-end --export-metrics true --session-id "refactor-dt-ontology"
```

---

## 8. SUCCESS CRITERIA

This refactoring is COMPLETE when:

✅ **Format Standardization**
- [ ] 100% of 994 files use canonical Logseq nested format
- [ ] 0 files in Format B or C
- [ ] All OWL axioms in Clojure code fences

✅ **Metadata Completeness**
- [ ] 100% of files have `source-domain` field
- [ ] 100% of files have `status` field
- [ ] 100% of files have `term-id` field
- [ ] 0 empty files (73 current → 0)

✅ **Cross-Domain Integration**
- [ ] 200+ semantic bridges restored from git history
- [ ] All bridges documented with `bridges-to::` property
- [ ] Bridge catalog generated

✅ **Quality Validation**
- [ ] 100% OWL syntax validity (parseable by horned-owl)
- [ ] 100% WikiLink integrity (no broken links)
- [ ] Generated `.ofn` file validates with OWL reasoner
- [ ] 60 SPARQL competency questions pass

✅ **Documentation**
- [ ] README.md updated for "Disruptive Technologies Ontology"
- [ ] Canonical format guide created
- [ ] Logseq/OWL system architecture documented
- [ ] World-class completion report generated
- [ ] Legacy files removed

✅ **Certification**
- [ ] Grade A (94+/100) validation score
- [ ] Publication-ready status
- [ ] Research-grade quality certification

---

## 9. REFERENCES

### Key Files
- **This File**: `/Metaverse-Ontology/task.md` (Master directive)
- **Canonical Examples**:
  - `/logseq/pages/6G Network Slice.md` (Metaverse format)
  - `/logseq/pages/Virtual World.md` (Rich relationships)
- **Format B Example**: `/logseq/pages/AI-0376-algorithmic-accountability.md`
- **README**: `/Metaverse-Ontology/README.md` (needs update)

### Tools
- **OWL Extractor**: `/logseq-owl-extractor/` (Rust CLI tool)
- **Validators**: `/tools/validation/` (Python validators)
- **Converters**: `/tools/converters/` (Format transformation scripts)

### Architecture Documents
- **OntologyDefinition.md**: TBox (base classes, namespaces)
- **PropertySchema.md**: RBox (object/data/annotation properties)
- **URIMapping.md**: WikiLink → IRI conversion rules

---

## 10. AGENT QUICK START

**If you are an AI agent reading this for the first time:**

1. **Understand the System**: Read sections 1-3 (philosophy, current state, canonical format)
2. **Check Progress**: Review section 6 (batch tracker)
3. **Identify Your Role**: Match your capabilities to agent types (section 4, phase 2)
4. **Load Next Batch**: Find first "Pending" batch in tracker
5. **Process Files**: Follow agent interaction protocol (section 5)
6. **Update Progress**: Modify batch tracker and persist to memory
7. **Report Completion**: Update this file before context exhaustion

**Quick Commands**:
```bash
# Find next batch
grep "Pending" /home/devuser/workspace/project/Metaverse-Ontology/task.md

# Start refactoring
# [Follow your agent-specific protocol from section 5]

# Save progress
npx claude-flow@alpha hooks session-end --export-metrics true
```

---

**Last Updated**: 2025-10-29
**Version**: 1.0.0
**Status**: ACTIVE - Ready for swarm execution
**Next Action**: Initialize hive mind swarm and begin Batch 1 (AI-Grounded files)
