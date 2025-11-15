# Domain Taxonomy Architecture
## Knowledge Graph Reorganization Design

**Document Version**: 1.0
**Date**: 2025-11-14
**Status**: Design Proposal
**Author**: Domain Architecture Team

---

## Executive Summary

This document presents a comprehensive domain taxonomy and reorganization strategy for the contaminated knowledge graph containing 2,684+ files mixing blockchain, robotics, AI/ML, finance, and other unrelated domains.

### Current Critical Issues

1. **Severe Domain Contamination**: Blockchain knowledge graph contains pure robotics (RB-*), AI/ML (AI-*, ML-*, CV-*), and other unrelated content
2. **Inconsistent Term IDs**: No clear prefix for pure blockchain topics; multiple conflicting schemes
3. **Quality Degradation**: Cross-domain pollution reduces knowledge graph utility and reliability
4. **Compliance Risk**: Mixed domains complicate regulatory compliance (EU AI Act, industry standards)

### Proposed Solution

**Multi-Knowledge Graph Architecture** with clear domain separation, systematic term ID schema, comprehensive metadata standards, and phased migration approach.

**Expected Benefits**:
- 95%+ content relevance within each knowledge graph
- Clear domain boundaries with explicit cross-domain handling
- Enforceable validation rules preventing future contamination
- Scalable architecture supporting future domain additions
- Regulatory compliance readiness

---

## 1. Domain Taxonomy

### 1.1 Proposed Hierarchical Structure

```
Knowledge Graph Ecosystem (Root)
│
├── blockchain-knowledge-graph/
│   ├── core-technology/
│   │   ├── consensus-mechanisms/
│   │   ├── cryptography/
│   │   ├── network-architecture/
│   │   ├── data-structures/
│   │   └── protocols/
│   ├── economics-tokenomics/
│   │   ├── monetary-policy/
│   │   ├── token-design/
│   │   ├── fee-mechanisms/
│   │   └── supply-dynamics/
│   ├── applications/
│   │   ├── defi/
│   │   ├── nft/
│   │   ├── dao-governance/
│   │   ├── supply-chain/
│   │   └── identity/
│   ├── platforms/
│   │   ├── layer1/
│   │   ├── layer2/
│   │   └── enterprise/
│   └── security/
│       ├── attack-vectors/
│       ├── auditing/
│       └── best-practices/
│
├── robotics-knowledge-graph/
│   ├── hardware-actuators/
│   │   ├── motors-servos/
│   │   ├── sensors/
│   │   └── end-effectors/
│   ├── control-systems/
│   │   ├── kinematics/
│   │   ├── dynamics/
│   │   └── path-planning/
│   ├── perception/
│   │   ├── computer-vision/
│   │   ├── lidar-radar/
│   │   └── sensor-fusion/
│   ├── robot-types/
│   │   ├── industrial/
│   │   ├── mobile/
│   │   ├── humanoid/
│   │   ├── collaborative/
│   │   └── medical/
│   └── applications/
│       ├── manufacturing/
│       ├── logistics/
│       ├── healthcare/
│       └── research/
│
├── ai-ml-knowledge-graph/
│   ├── core-algorithms/
│   │   ├── supervised-learning/
│   │   ├── unsupervised-learning/
│   │   ├── reinforcement-learning/
│   │   └── neural-networks/
│   ├── specialized-domains/
│   │   ├── computer-vision/
│   │   ├── nlp/
│   │   ├── speech-processing/
│   │   └── time-series/
│   ├── model-architectures/
│   │   ├── transformers/
│   │   ├── cnns/
│   │   ├── rnns/
│   │   └── gans/
│   ├── llm-generative-ai/
│   │   ├── foundation-models/
│   │   ├── prompt-engineering/
│   │   └── fine-tuning/
│   └── ethics-fairness/
│       ├── bias-detection/
│       ├── fairness-metrics/
│       └── responsible-ai/
│
├── economics-finance-knowledge-graph/
│   ├── traditional-finance/
│   │   ├── monetary-theory/
│   │   ├── banking/
│   │   └── markets/
│   ├── digital-currency/
│   │   ├── cryptocurrency/
│   │   ├── cbdc/
│   │   └── stablecoins/
│   ├── economic-theory/
│   │   ├── game-theory/
│   │   ├── mechanism-design/
│   │   └── behavioral-economics/
│   └── regulatory-compliance/
│       ├── financial-regulations/
│       ├── tax-policy/
│       └── reporting-standards/
│
└── cross-domain-knowledge-graph/
    ├── blockchain-ai/
    │   ├── on-chain-ml/
    │   ├── ai-governance/
    │   └── decentralized-ai/
    ├── blockchain-robotics/
    │   ├── robot-registration/
    │   ├── autonomous-transactions/
    │   └── supply-chain-robotics/
    ├── blockchain-finance/
    │   ├── defi-protocols/
    │   ├── tokenomics/
    │   └── regulatory-tech/
    └── ai-robotics/
        ├── robot-perception/
        ├── robot-learning/
        └── autonomous-systems/
```

### 1.2 Domain Classification Rules

#### Pure Domain Classification

A file belongs to a **pure domain** if:
1. **Content Threshold**: ≥80% of content directly relates to primary domain
2. **Term ID Alignment**: termID prefix matches primary domain
3. **Cross-References**: <20% references to other domains
4. **Application Context**: Use cases are domain-specific

#### Cross-Domain Classification

A file belongs to **cross-domain** if:
1. **Multi-Domain Application**: Genuinely requires knowledge from 2+ domains
2. **Integration Focus**: Describes integration, interaction, or combined application
3. **Substantive Coverage**: ≥30% content from each contributing domain
4. **Explicit Bridges**: Creates conceptual bridges between domains

#### Examples

**Pure Blockchain**: Proof of Work, Merkle Trees, Byzantine Fault Tolerance, Smart Contracts
**Pure Robotics**: Robot Kinematics, Servo Motors, SLAM, Inverse Kinematics
**Pure AI/ML**: Neural Networks, Gradient Descent, Transformers, Bias Detection
**Cross-Domain (Blockchain+AI)**: Decentralized ML Model Marketplaces, On-Chain AI Inference, Blockchain-Based AI Governance
**MISCLASSIFIED (Current)**: Robot files in blockchain KG with ZERO blockchain relevance

---

## 2. Term ID Schema Redesign

### 2.1 Current Issues

**Problems Identified**:
- No systematic prefix for pure blockchain topics
- RB-* (Robotics), AI-*, ML-*, CV-* mixed with blockchain content
- Inconsistent numbering schemes
- No namespace collision prevention

### 2.2 Proposed Term ID Structure

```
[DOMAIN]-[CATEGORY]-[NUMBER]

Domain Prefixes (2-3 chars):
  BLK: Blockchain core technology
  CRY: Cryptography (blockchain-focused)
  CON: Consensus mechanisms
  NET: Network architecture & protocols
  DFI: DeFi and financial applications
  ECO: Economics and tokenomics
  GOV: Governance & DAOs
  SEC: Security (blockchain-specific)

  RB:  Robotics (separate KG)
  ML:  Machine Learning (separate KG)
  AI:  Artificial Intelligence (separate KG)
  CV:  Computer Vision (separate KG)
  NLP: Natural Language Processing (separate KG)

  FIN: Finance & Economics (separate KG)

  CRS: Cross-domain topics

Category Codes (2 digits):
  00-09: Foundational concepts
  10-19: Core mechanisms
  20-29: Data structures
  30-39: Protocols
  40-49: Applications
  50-59: Security
  60-69: Economics
  70-79: Governance
  80-89: Standards
  90-99: Emerging topics

Number (4 digits):
  0001-9999: Sequential within category
```

### 2.3 Term ID Examples

**Blockchain Domain**:
```
BLK-00-0001: Blockchain (foundational concept)
BLK-10-0001: Block Structure
BLK-20-0001: Merkle Tree
CRY-10-0001: Hash Function
CRY-10-0002: Digital Signature
CON-10-0001: Proof of Work
CON-10-0002: Proof of Stake
CON-10-0003: Byzantine Fault Tolerance
NET-30-0001: P2P Network Architecture
DFI-40-0001: Decentralized Exchange
DFI-40-0002: Automated Market Maker
ECO-60-0001: Tokenomics
ECO-60-0002: Inflation
ECO-60-0003: Halving
GOV-70-0001: DAO
GOV-70-0002: Voting Mechanisms
SEC-50-0001: 51% Attack
SEC-50-0002: Sybil Attack
```

**Robotics Domain** (Separate KG):
```
RB-00-0001: Robot (foundational)
RB-10-0001: Servo Motor
RB-20-0001: Kinematics
RB-30-0001: SLAM
RB-40-0001: Industrial Robot
RB-40-0002: Humanoid Robot
RB-50-0001: Robot Safety Standards
```

**AI/ML Domain** (Separate KG):
```
AI-00-0001: Artificial Intelligence
ML-10-0001: Neural Network
ML-10-0002: Gradient Descent
ML-20-0001: Training Data
CV-30-0001: Object Detection
NLP-30-0001: Transformer Architecture
AI-50-0001: Fairness Auditing Tools
AI-50-0002: Bias Detection
```

**Cross-Domain**:
```
CRS-BLK-AI-0001: Decentralized ML Model Registry
CRS-BLK-RB-0001: Blockchain-Based Robot Identity
CRS-BLK-FIN-0001: DeFi Protocol Design
CRS-AI-RB-0001: Robot Perception using Deep Learning
```

### 2.4 Migration Mapping Table

| Old Term ID | Domain | New Term ID | Reason |
|------------|--------|-------------|--------|
| RB-0001 | Robotics | RB-00-0001 | Pure robotics, relocate to robotics-KG |
| AI-0386 | AI/ML | AI-50-0386 | Pure AI/ML fairness tools, relocate to ai-ml-KG |
| (none) | Blockchain | BLK-00-0001 | Create systematic blockchain IDs |
| CRYPTO-* | Blockchain | CRY-10-* | Reclassify as blockchain cryptography |
| BLOCKCHAIN-* | Blockchain | BLK-* | Normalize to standard prefix |
| ECON-* | Economics | ECO-60-* | Economics within blockchain context |
| (cross) | Multi | CRS-[DOM1]-[DOM2]-* | Genuine cross-domain topics |

### 2.5 ID Assignment Process

**For New Content**:
1. Identify primary domain (must be ≥80% relevant)
2. Select domain prefix (BLK, RB, AI, etc.)
3. Determine category (00-99)
4. Assign next available sequential number
5. Validate uniqueness across ecosystem

**For Existing Content**:
1. Analyze domain relevance (systematic audit)
2. Map to new schema using migration table
3. Create forwarding references for legacy IDs
4. Update all internal links
5. Deprecate old IDs after 12-month transition

---

## 3. File Organization Structure

### 3.1 Recommendation: Multi-Knowledge Graph Architecture

**RECOMMENDED APPROACH**: **Option B - Multiple Knowledge Graphs**

### 3.2 Justification

**Advantages**:
1. **Clear Domain Separation**: Physical file boundaries enforce logical boundaries
2. **Independent Scaling**: Each domain can grow without affecting others
3. **Access Control**: Different teams can manage different domains
4. **Tooling Optimization**: Domain-specific validation and processing
5. **Deployment Flexibility**: Deploy/update domains independently
6. **Reduced Complexity**: Each KG has focused, coherent content
7. **Performance**: Smaller graphs = faster queries and validation

**Disadvantages** (Mitigated):
1. Cross-references require inter-graph links (mitigated by link validation)
2. Slightly more complex deployment (mitigated by automation)
3. Potential duplication (mitigated by clear classification rules)

### 3.3 Proposed Directory Structure

```
knowledge-graph-ecosystem/
│
├── blockchain-knowledge-graph/
│   ├── README.md (domain scope, term ID prefix: BLK, CRY, CON, NET, DFI, ECO, GOV, SEC)
│   ├── METADATA.yaml (domain config, validation rules)
│   ├── pages/
│   │   ├── consensus-mechanisms/
│   │   │   ├── proof-of-work.md (BLK-10-0001)
│   │   │   ├── proof-of-stake.md (CON-10-0002)
│   │   │   └── byzantine-fault-tolerance.md (CON-10-0003)
│   │   ├── cryptography/
│   │   │   ├── hash-function.md (CRY-10-0001)
│   │   │   └── digital-signature.md (CRY-10-0002)
│   │   ├── defi/
│   │   ├── governance/
│   │   └── security/
│   ├── journals/
│   └── assets/
│
├── robotics-knowledge-graph/
│   ├── README.md (domain scope, term ID prefix: RB)
│   ├── METADATA.yaml
│   ├── pages/
│   │   ├── hardware-actuators/
│   │   │   ├── robot.md (RB-00-0001)
│   │   │   ├── servo-motor.md (RB-10-0001)
│   │   │   └── sensors/
│   │   ├── control-systems/
│   │   ├── perception/
│   │   └── applications/
│   ├── journals/
│   └── assets/
│
├── ai-ml-knowledge-graph/
│   ├── README.md (domain scope, term ID prefix: AI, ML, CV, NLP)
│   ├── METADATA.yaml
│   ├── pages/
│   │   ├── core-algorithms/
│   │   ├── neural-networks/
│   │   ├── computer-vision/
│   │   ├── nlp/
│   │   └── ethics-fairness/
│   │       └── fairness-auditing-tools.md (AI-50-0386)
│   ├── journals/
│   └── assets/
│
├── economics-finance-knowledge-graph/
│   ├── README.md (domain scope, term ID prefix: FIN, ECON)
│   ├── METADATA.yaml
│   ├── pages/
│   │   ├── traditional-finance/
│   │   ├── digital-currency/
│   │   └── economic-theory/
│   ├── journals/
│   └── assets/
│
├── cross-domain-knowledge-graph/
│   ├── README.md (cross-domain integration topics)
│   ├── METADATA.yaml
│   ├── pages/
│   │   ├── blockchain-ai/
│   │   ├── blockchain-robotics/
│   │   ├── blockchain-finance/
│   │   └── ai-robotics/
│   ├── journals/
│   └── assets/
│
├── shared/
│   ├── templates/
│   ├── validation-rules/
│   └── migration-tools/
│
└── ECOSYSTEM.yaml (global configuration, inter-graph links validation)
```

### 3.4 Domain-Specific README Templates

Each knowledge graph includes domain-specific README:

**blockchain-knowledge-graph/README.md**:
```markdown
# Blockchain Knowledge Graph

## Scope
Blockchain technology, distributed ledgers, consensus mechanisms, cryptography,
DeFi, DAOs, smart contracts, and blockchain security.

## Term ID Prefixes
- BLK: Blockchain core technology
- CRY: Cryptography
- CON: Consensus mechanisms
- NET: Network architecture
- DFI: DeFi applications
- ECO: Economics & tokenomics
- GOV: Governance
- SEC: Security

## Inclusion Criteria
Content must be ≥80% blockchain-relevant. For AI, robotics, or finance topics,
see ai-ml-knowledge-graph, robotics-knowledge-graph, or
cross-domain-knowledge-graph.

## Related Knowledge Graphs
- ai-ml-knowledge-graph/
- robotics-knowledge-graph/
- cross-domain-knowledge-graph/ (blockchain+AI, blockchain+finance)
```

### 3.5 METADATA.yaml Schema

```yaml
knowledgeGraph:
  name: "Blockchain Knowledge Graph"
  version: "2.0.0"
  domainScope: "Blockchain Technology"

termIDPrefixes:
  - "BLK"
  - "CRY"
  - "CON"
  - "NET"
  - "DFI"
  - "ECO"
  - "GOV"
  - "SEC"

validationRules:
  minBlockchainRelevance: 0.80
  maxCrossDomainContent: 0.20
  requiredMetadataFields:
    - termID
    - primaryDomain
    - blockchainRelevance
    - contentType
    - lastValidated

qualityStandards:
  minQualityScore: 0.70
  requireCitations: true
  maxURLsWithoutContext: 0

crossReferences:
  allowedTargets:
    - "blockchain-knowledge-graph"
    - "cross-domain-knowledge-graph"
  requiresApproval:
    - "ai-ml-knowledge-graph"
    - "robotics-knowledge-graph"
    - "economics-finance-knowledge-graph"
```

---

## 4. Metadata Standards

### 4.1 Comprehensive Metadata Schema

Every knowledge graph file MUST include structured metadata:

```markdown
# [Topic Title]

## OntologyBlock
id:: [unique-ontology-id]
collapsed:: true

- **Identification**
  - termID:: [DOMAIN-CATEGORY-NUMBER]
  - domain-prefix:: [BLK|RB|AI|ML|CV|FIN|CRS]
  - sequence-number:: [NUMBER]
  - filename-history:: ["[TERMID]-[slug].md", ...]
  - preferred-term:: [[Primary Term]]
  - aliases:: [[Alternative Name 1]], [[Alternative Name 2]]
  - source-domain:: [[Primary Domain]]
  - ontology:: true
  - status:: [draft|review|complete|deprecated]
  - version:: [SEMVER]
  - last-updated:: [YYYY-MM-DD]
  - public-access:: [true|false]

- **Classification**
  - primaryDomain:: [[Primary Domain]]
  - secondaryDomains:: [[Domain 2]], [[Domain 3]]
  - blockchainRelevance:: [High|Medium|Low|None]
  - contentType:: [Concept|Technology|Protocol|Application|Standard|Tool]
  - maturityLevel:: [Research|Development|Production|Legacy]
  - industryVerticals:: [[Healthcare]], [[Finance]], [[Supply Chain]]

- **Quality Metrics**
  - qualityScore:: [0.00-1.00]
  - citationCount:: [NUMBER]
  - lastValidated:: [YYYY-MM-DD]
  - reviewStatus:: [Initial|Editorial|Technical|Comprehensive]
  - validator:: [[Reviewer Name]]

- **Definition**
  - definition:: [Comprehensive definition with [[wiki-links]]]
  - maturity:: [emerging|developing|mature|legacy]
  - source:: [[Authoritative Source]]
  - authority-score:: [0.00-1.00]

- **Semantic Classification**
  - owl:class:: [namespace:ClassName]
  - owl:physicality:: [PhysicalEntity|VirtualEntity|AbstractEntity]
  - owl:role:: [Object|Process|Property]
  - owl:inferred-class:: [Inferred classification]
  - belongsToDomain:: [[Domain Name]]
  - implementedInLayer:: [[Layer Name]]

- **Relationships**
  id:: [topic-relationships]
  - is-part-of:: [[Parent Concept]]
  - has-parts:: [[Child Concept 1]], [[Child Concept 2]]
  - related-to:: [[Related Topic 1]], [[Related Topic 2]]
  - depends-on:: [[Dependency 1]]
  - enables:: [[Enabled Concept]]
  - conflicts-with:: [[Conflicting Approach]]

- **Cross-References**
  - internalLinks:: [[Internal Topic 1]], [[Internal Topic 2]]
  - externalLinks:: [URL 1], [URL 2]
  - crossDomainLinks:: [[ai-ml:Neural Networks]], [[robotics:SLAM]]
  - standardsReferences:: [[ISO Standard]], [[IEEE Standard]]

- **OWL Axioms** (Optional for ontology-enabled topics)
  id:: [topic-owl-axioms]
  collapsed:: true
  - ```clojure
    (Declaration (Class :TopicName))
    ...
    ```

---

## [Content sections]

---

## Metadata Footer

- **Migration Status**: [Description of migration/processing history]
- **Original File**: [Path to original if migrated]
- **Processing Date**: [YYYY-MM-DD]
- **Processing Agent**: [Agent identifier]
- **Quality Improvements**: [List of improvements]
- **Issues Resolved**: [List of resolved issues]
- **Validation Status**: [Pass|Warning|Fail]
```

### 4.2 Metadata Field Definitions

| Field | Type | Required | Description | Validation |
|-------|------|----------|-------------|------------|
| **termID** | String | YES | Unique identifier (DOMAIN-CATEGORY-NUMBER) | Regex: `^[A-Z]{2,3}-[0-9]{2}-[0-9]{4}$` |
| **domain-prefix** | Enum | YES | Domain classification | One of: BLK, CRY, CON, NET, DFI, ECO, GOV, SEC, RB, AI, ML, CV, NLP, FIN, CRS |
| **primaryDomain** | Link | YES | Main domain classification | Must match termID prefix |
| **blockchainRelevance** | Enum | YES | Blockchain relevance level | One of: High, Medium, Low, None |
| **contentType** | Enum | YES | Type of content | One of: Concept, Technology, Protocol, Application, Standard, Tool |
| **maturityLevel** | Enum | YES | Development maturity | One of: Research, Development, Production, Legacy |
| **qualityScore** | Float | YES | Quality assessment (0-1) | Range: 0.00-1.00 |
| **lastValidated** | Date | YES | Last validation date | Format: YYYY-MM-DD, max age: 12 months |
| **citationCount** | Integer | NO | Number of academic citations | Non-negative integer |
| **aliases** | List | NO | Alternative terms | Valid wiki-links |
| **secondaryDomains** | List | NO | Additional domains | Valid domain links |

### 4.3 Domain-Specific Metadata Extensions

**For Blockchain (BLK, CRY, CON, etc.)**:
```markdown
- **Blockchain-Specific**
  - networkType:: [[Mainnet|Testnet|Private|Consortium]]
  - layer:: [[Layer 1|Layer 2|Layer 3]]
  - consensusMechanism:: [[PoW|PoS|PoA|BFT]]
  - smartContractSupport:: [true|false]
  - decentralizationScore:: [0.00-1.00]
```

**For Robotics (RB)**:
```markdown
- **Robotics-Specific**
  - robotType:: [[Industrial|Mobile|Humanoid|Collaborative|Medical]]
  - degreesOfFreedom:: [NUMBER]
  - payloadCapacity:: [VALUE kg]
  - safetyStandards:: [[ISO 8373]], [[ISO 10218]]
```

**For AI/ML (AI, ML, CV, NLP)**:
```markdown
- **AI/ML-Specific**
  - modelType:: [[Supervised|Unsupervised|Reinforcement|Hybrid]]
  - fairnessMetrics:: [[Demographic Parity]], [[Equalized Odds]]
  - biasRisk:: [Low|Medium|High]
  - ethicsFramework:: [[IEEE P7003]], [[EU AI Act]]
```

### 4.4 Cross-Domain Metadata

For files in cross-domain-knowledge-graph:

```markdown
- **Cross-Domain Classification**
  - contributingDomains:: [[Blockchain]], [[AI/ML]], [[Robotics]]
  - domainContribution:: {Blockchain: 40%, AI: 60%}
  - integrationPattern:: [[API|Smart Contract|Oracle|Hybrid]]
  - useCaseCategories:: [[Decentralized AI]], [[AI Governance]]
  - requiredKnowledge::
    - blockchain:: [[Smart Contracts]], [[Consensus]]
    - ai:: [[Neural Networks]], [[Training]]
```

---

## 5. Migration Strategy

### 5.1 Phased Migration Approach

#### **Phase 1: Immediate Triage (Week 1-2)**

**Objectives**:
- Identify all misclassified files
- Create comprehensive relocation manifest
- Establish clear domain boundaries

**Tasks**:
1. **Systematic Domain Audit**
   - Scan all 2,684 files in mainKnowledgeGraph
   - Classify by domain relevance:
     - Pure Blockchain (≥80% blockchain content)
     - Pure Robotics (RB-* files)
     - Pure AI/ML (AI-*, ML-*, CV-* files)
     - Pure Finance (ECON-*, FIN-* files)
     - Cross-Domain (substantive multi-domain content)
     - Ambiguous (requires manual review)

2. **Generate Domain Classification Report**
   ```
   Domain Distribution:
   - Blockchain: XXX files (XX%)
   - Robotics: XXX files (XX%)
   - AI/ML: XXX files (XX%)
   - Finance: XXX files (XX%)
   - Cross-Domain: XXX files (XX%)
   - Ambiguous: XXX files (XX%)
   ```

3. **Create Relocation Manifest**
   - CSV format: `original_path, domain, new_path, term_id_old, term_id_new, confidence`
   - Priority classification: Critical (immediate), High, Medium, Low
   - Flagged items requiring human review

4. **Tag Files for Migration**
   - Add migration metadata to all files:
     ```markdown
     migration-status:: pending
     target-knowledge-graph:: robotics-knowledge-graph
     migration-priority:: critical
     migration-validation:: automated|manual-review
     ```

**Deliverables**:
- Domain classification report
- Relocation manifest (CSV)
- Ambiguous files list for manual review
- Migration priority matrix

**Success Metrics**:
- 100% of files classified
- <5% requiring manual review
- Clear migration plan for each file

---

#### **Phase 2: Pure Domain Separation (Week 3-5)**

**Objectives**:
- Relocate pure domain files to dedicated knowledge graphs
- Establish automated validation
- Prevent future contamination

**Tasks**:

1. **Create New Knowledge Graph Structure**
   ```bash
   mkdir -p robotics-knowledge-graph/pages
   mkdir -p ai-ml-knowledge-graph/pages
   mkdir -p economics-finance-knowledge-graph/pages
   mkdir -p cross-domain-knowledge-graph/pages

   # Copy templates
   cp templates/README-template.md robotics-knowledge-graph/README.md
   cp templates/METADATA-template.yaml robotics-knowledge-graph/METADATA.yaml
   ```

2. **Migrate Pure Robotics Files (RB-*)**
   - Priority: CRITICAL (complete week 3)
   - Estimated: 150-300 files
   - Process:
     ```bash
     # Automated migration script
     python migrate-domain.py \
       --source mainKnowledgeGraph/pages \
       --target robotics-knowledge-graph/pages \
       --domain RB \
       --manifest migration-manifest-robotics.csv \
       --validate
     ```
   - Update all internal links
   - Validate metadata completeness
   - Run quality checks

3. **Migrate Pure AI/ML Files (AI-*, ML-*, CV-*, NLP-*)**
   - Priority: CRITICAL (complete week 4)
   - Estimated: 200-400 files
   - Same process as robotics
   - Special attention to ethics/fairness topics

4. **Migrate Pure Finance Files (FIN-*, ECON-*)**
   - Priority: HIGH (complete week 5)
   - Estimated: 100-200 files
   - Distinguish between pure finance and blockchain economics
   - Blockchain economics (tokenomics, fee mechanisms) stays in blockchain-KG

5. **Update Cross-References**
   - Convert internal links to inter-graph links:
     ```markdown
     Before: [[Robot]]
     After: [[robotics:Robot]] or [Robot](../robotics-knowledge-graph/pages/robot.md)
     ```
   - Implement link validation script
   - Verify all links resolve correctly

6. **Implement Validation Rules**
   - Create domain validation scripts:
     ```python
     def validate_blockchain_kg(file_path):
         metadata = parse_metadata(file_path)
         content = read_file(file_path)

         # Rule 1: termID prefix must be BLK, CRY, CON, NET, DFI, ECO, GOV, SEC
         assert metadata['domain-prefix'] in BLOCKCHAIN_PREFIXES

         # Rule 2: blockchainRelevance must be High
         assert metadata['blockchainRelevance'] == 'High'

         # Rule 3: ≥80% content must be blockchain-relevant
         relevance_score = calculate_relevance(content, 'blockchain')
         assert relevance_score >= 0.80

         # Rule 4: No RB-*, AI-*, ML-* term IDs
         assert not re.match(r'^(RB|AI|ML|CV|NLP)-', metadata['termID'])

         return True
     ```

**Deliverables**:
- Fully populated robotics-knowledge-graph/
- Fully populated ai-ml-knowledge-graph/
- Fully populated economics-finance-knowledge-graph/
- Updated blockchain-knowledge-graph/ (pure blockchain only)
- Link validation report (100% links resolving)
- Automated validation suite

**Success Metrics**:
- 0 misclassified files in pure domain KGs
- 100% of links validated and working
- <2% files requiring additional manual review
- Validation suite catches contamination attempts

---

#### **Phase 3: Cross-Domain Resolution (Week 6-8)**

**Objectives**:
- Process files with legitimate multi-domain content
- Create cross-domain knowledge graph
- Establish cross-domain governance

**Tasks**:

1. **Review Ambiguous Files (Week 6)**
   - Manual review of flagged files (estimated 50-150)
   - Classification decision matrix:
     ```
     IF blockchain_content >= 80% → blockchain-KG
     IF robotics_content >= 80% → robotics-KG
     IF ai_content >= 80% → ai-ml-KG
     IF (blockchain_content >= 30% AND ai_content >= 30%) → cross-domain-KG
     ELSE → requires restructuring or split
     ```

2. **Create Cross-Domain Knowledge Graph (Week 6-7)**
   - Identify genuine cross-domain topics:
     - Blockchain + AI: Decentralized ML, AI-powered smart contracts
     - Blockchain + Finance: DeFi, tokenomics with financial theory
     - Blockchain + Robotics: Robot identity on blockchain (rare)
     - AI + Robotics: Robot perception, autonomous systems (separate from blockchain)

3. **Process Blockchain+AI Cross-Domain Topics (Week 7)**
   - Estimated: 50-100 files
   - Examples:
     - Decentralized ML model marketplaces
     - On-chain AI inference
     - Blockchain-based AI governance
     - AI-powered DeFi protocols
   - Assign CRS-BLK-AI-* term IDs
   - Ensure ≥30% content from each domain
   - Add explicit domain contribution metadata

4. **Process Blockchain+Finance Cross-Domain Topics (Week 7-8)**
   - Estimated: 100-200 files
   - Examples:
     - DeFi protocol design (blockchain tech + financial theory)
     - Tokenomics models (crypto + economics)
     - Algorithmic stablecoins (consensus + monetary policy)
   - Assign CRS-BLK-FIN-* term IDs

5. **Handle Edge Cases (Week 8)**
   - Files requiring split into multiple topics
   - Files requiring major restructuring
   - Files with insufficient content (candidates for deletion)

6. **Cross-Domain Link Validation**
   - Ensure cross-domain files properly reference both source domains
   - Validate that pure domain files don't duplicate cross-domain content
   - Update inter-graph link registry

**Deliverables**:
- Populated cross-domain-knowledge-graph/
- Cross-domain classification guidelines
- Edge case resolution report
- Updated inter-graph link registry

**Success Metrics**:
- 100% of ambiguous files resolved
- Cross-domain files have ≥30% content from each contributing domain
- Clear differentiation between pure and cross-domain topics
- Zero duplication between pure and cross-domain KGs

---

#### **Phase 4: Validation & Integration (Week 9-10)**

**Objectives**:
- Comprehensive quality validation
- Integration testing
- Documentation and training
- Establish ongoing governance

**Tasks**:

1. **Comprehensive Validation Sweep (Week 9)**
   - **Automated Validation**:
     ```bash
     # Run full validation suite
     python validate-ecosystem.py --all-kgs --strict

     # Checks performed:
     # - Term ID uniqueness across ecosystem
     # - Term ID format compliance
     # - Domain prefix matching
     # - Metadata completeness
     # - Blockchain relevance scores
     # - Citation presence
     # - Link resolution (internal + inter-graph)
     # - File naming conventions
     # - Content quality scores
     ```

   - **Manual Quality Review**:
     - Sample 5% of files from each KG
     - Verify content quality and relevance
     - Check cross-references accuracy
     - Validate citations and sources

2. **Integration Testing (Week 9)**
   - Test inter-graph navigation
   - Verify search functionality across KGs
   - Test build and deployment processes
   - Performance testing (query speed, load times)

3. **Documentation (Week 10)**
   - Create comprehensive documentation:
     - **Knowledge Graph User Guide**: How to navigate, search, contribute
     - **Contributor Guidelines**: How to add new content, classification rules
     - **Developer Documentation**: API, validation scripts, deployment
     - **Governance Handbook**: Review processes, quality standards

4. **Training & Onboarding (Week 10)**
   - Train content contributors on new structure
   - Train reviewers on validation processes
   - Create quick-start guides and video tutorials

5. **Establish Ongoing Governance (Week 10)**
   - **Review Process**:
     - New content must pass automated validation
     - Cross-domain content requires multi-domain expert review
     - Quarterly audit of classification accuracy

   - **Quality Monitoring**:
     - Weekly: Automated validation runs
     - Monthly: Sample quality reviews
     - Quarterly: Comprehensive domain audits

   - **Continuous Improvement**:
     - Collect feedback from users and contributors
     - Track common classification errors
     - Refine validation rules based on edge cases
     - Update documentation quarterly

**Deliverables**:
- Complete validation report (100% pass rate)
- Comprehensive documentation suite
- Training materials and tutorials
- Governance handbook
- Ongoing monitoring dashboards

**Success Metrics**:
- 100% of files pass automated validation
- <1% files flagged in manual quality review
- All documentation complete and accessible
- Governance processes documented and accepted
- Monitoring dashboards operational

---

### 5.2 Migration Timeline Summary

```
Week 1-2:   Phase 1 - Immediate Triage
            ├─ Systematic domain audit
            ├─ Generate classification report
            ├─ Create relocation manifest
            └─ Tag files for migration

Week 3-5:   Phase 2 - Pure Domain Separation
            ├─ Week 3: Migrate robotics files (RB-*)
            ├─ Week 4: Migrate AI/ML files (AI-*, ML-*, CV-*)
            ├─ Week 5: Migrate finance files (FIN-*, ECON-*)
            └─ Implement validation rules

Week 6-8:   Phase 3 - Cross-Domain Resolution
            ├─ Week 6: Review ambiguous files
            ├─ Week 7: Process Blockchain+AI cross-domain
            ├─ Week 8: Process Blockchain+Finance cross-domain
            └─ Handle edge cases

Week 9-10:  Phase 4 - Validation & Integration
            ├─ Week 9: Comprehensive validation + integration testing
            └─ Week 10: Documentation + training + governance
```

**Total Duration**: 10 weeks
**Critical Path**: Phase 2 (pure domain separation) gates Phase 3
**Resource Requirements**:
- 1 domain architect (full-time)
- 2-3 content reviewers (part-time)
- 1 developer (automation scripts)
- Domain experts (consultation basis)

---

### 5.3 Risk Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Broken Links During Migration** | High | High | Implement link validation before/after each migration batch; maintain redirect registry |
| **Classification Errors** | Medium | Medium | Multi-stage review (automated + manual); sample validation; feedback loop |
| **Data Loss** | High | Low | Git version control; backup before each migration phase; incremental migrations |
| **Performance Degradation** | Medium | Low | Test inter-graph links; optimize graph size; implement caching |
| **Contributor Confusion** | Medium | Medium | Clear documentation; training sessions; migration guides |
| **Incomplete Migration** | High | Medium | Phased approach with validation gates; cannot proceed to next phase until current phase validates |

---

## 6. Quality Control Framework

### 6.1 Validation Rules

#### Rule 1: Domain Alignment

**Requirement**: termID prefix MUST match primaryDomain

```python
def validate_domain_alignment(file):
    metadata = parse_metadata(file)
    term_id = metadata['termID']
    primary_domain = metadata['primaryDomain']

    domain_prefix = term_id.split('-')[0]

    # Map prefixes to domains
    DOMAIN_MAP = {
        'BLK': 'Blockchain Core',
        'CRY': 'Blockchain Cryptography',
        'CON': 'Blockchain Consensus',
        'RB': 'Robotics',
        'AI': 'Artificial Intelligence',
        'ML': 'Machine Learning',
        ...
    }

    expected_domain = DOMAIN_MAP.get(domain_prefix)
    assert primary_domain == expected_domain, \
        f"Domain mismatch: termID prefix {domain_prefix} → {expected_domain}, " \
        f"but primaryDomain = {primary_domain}"
```

**Enforcement**: Automated validation in CI/CD pipeline

---

#### Rule 2: Content Relevance

**Requirement**: Content MUST be >80% relevant to primaryDomain for pure domain files

```python
def validate_content_relevance(file, knowledge_graph):
    metadata = parse_metadata(file)
    content = read_file(file)
    primary_domain = metadata['primaryDomain']

    # Calculate relevance score (NLP-based keyword analysis)
    relevance_score = calculate_domain_relevance(content, primary_domain)

    # Pure domain files must have ≥80% relevance
    if knowledge_graph in ['blockchain-KG', 'robotics-KG', 'ai-ml-KG', 'finance-KG']:
        assert relevance_score >= 0.80, \
            f"Insufficient domain relevance: {relevance_score:.2f} < 0.80 for {primary_domain}"

    # Cross-domain files must have ≥30% from each contributing domain
    elif knowledge_graph == 'cross-domain-KG':
        for domain in metadata['contributingDomains']:
            domain_score = calculate_domain_relevance(content, domain)
            assert domain_score >= 0.30, \
                f"Insufficient cross-domain relevance: {domain_score:.2f} < 0.30 for {domain}"
```

**Enforcement**:
- Automated check on file save
- Manual review if score 0.70-0.80 (warning zone)
- Reject if score <0.70

---

#### Rule 3: Contamination Prevention

**Requirement**: No content from unrelated domains >10% of file

```python
def validate_contamination(file, knowledge_graph):
    metadata = parse_metadata(file)
    content = read_file(file)
    primary_domain = metadata['primaryDomain']

    # Calculate contamination from unrelated domains
    ALL_DOMAINS = ['blockchain', 'robotics', 'ai_ml', 'finance']
    allowed_domains = [primary_domain] + metadata.get('secondaryDomains', [])
    unrelated_domains = set(ALL_DOMAINS) - set(allowed_domains)

    for domain in unrelated_domains:
        contamination_score = calculate_domain_relevance(content, domain)
        assert contamination_score <= 0.10, \
            f"Contamination detected: {domain} content = {contamination_score:.2f} > 0.10"
```

**Common Contamination Patterns**:
- Robotics content in blockchain files
- Pure AI/ML tools in blockchain context (without blockchain integration)
- Finance theory without blockchain application

**Enforcement**: Automated scan; flag files exceeding threshold for review

---

#### Rule 4: Metadata Completeness

**Requirement**: All required fields must be present and valid

```python
REQUIRED_FIELDS = [
    'termID',
    'domain-prefix',
    'primaryDomain',
    'blockchainRelevance',  # Only for blockchain-related KGs
    'contentType',
    'maturityLevel',
    'qualityScore',
    'lastValidated',
    'definition',
    'status',
    'version',
]

def validate_metadata_completeness(file):
    metadata = parse_metadata(file)

    for field in REQUIRED_FIELDS:
        assert field in metadata, f"Missing required field: {field}"
        assert metadata[field] is not None, f"Field cannot be null: {field}"
        assert metadata[field] != "", f"Field cannot be empty: {field}"

    # Validate field formats
    assert re.match(r'^[A-Z]{2,3}-[0-9]{2}-[0-9]{4}$', metadata['termID'])
    assert 0.0 <= metadata['qualityScore'] <= 1.0
    assert metadata['blockchainRelevance'] in ['High', 'Medium', 'Low', 'None']
    assert metadata['status'] in ['draft', 'review', 'complete', 'deprecated']
```

**Enforcement**: Pre-commit hook; CI/CD validation; periodic audits

---

#### Rule 5: Citation Requirements

**Requirement**: Citations required for factual claims

```python
def validate_citations(file):
    content = read_file(file)
    metadata = parse_metadata(file)

    # Detect factual claims requiring citations
    claim_patterns = [
        r'\b(research shows|studies indicate|according to|found that)\b',
        r'\b(\d+%|\d+\.\d+%)\b',  # Percentage claims
        r'\b(in \d{4}|since \d{4})\b',  # Temporal claims
    ]

    claim_count = sum(len(re.findall(pattern, content, re.I))
                      for pattern in claim_patterns)

    # Count citations (footnotes, references)
    citation_count = len(re.findall(r'\[\^[\d+]\]', content))
    citation_count += len(re.findall(r'##\s*References', content, re.I))

    if claim_count > 5:
        assert citation_count >= 3, \
            f"Insufficient citations: {claim_count} claims but only {citation_count} citations"

    # All URLs must have context (no bare URLs)
    bare_urls = re.findall(r'(?<![\(\[])https?://[^\s\)]+(?![\)\]])', content)
    assert len(bare_urls) == 0, \
        f"Found {len(bare_urls)} bare URLs without context. All URLs must be expanded."
```

**Enforcement**: Automated validation; manual review for borderline cases

---

#### Rule 6: Blockchain Relevance (Blockchain KG Only)

**Requirement**: blockchainRelevance MUST be "High" for files in blockchain-knowledge-graph

```python
def validate_blockchain_relevance(file, knowledge_graph):
    if knowledge_graph != 'blockchain-knowledge-graph':
        return  # Rule only applies to blockchain KG

    metadata = parse_metadata(file)
    assert metadata['blockchainRelevance'] == 'High', \
        f"Blockchain KG files must have blockchainRelevance='High', got '{metadata['blockchainRelevance']}'"

    # Additional check: No RB-, AI-, ML- term IDs in blockchain KG
    term_id = metadata['termID']
    non_blockchain_prefixes = ['RB', 'AI', 'ML', 'CV', 'NLP']
    prefix = term_id.split('-')[0]
    assert prefix not in non_blockchain_prefixes, \
        f"Non-blockchain term ID {term_id} found in blockchain knowledge graph"
```

---

#### Rule 7: Cross-Domain Validation

**Requirement**: Cross-domain files must properly represent all contributing domains

```python
def validate_cross_domain(file, knowledge_graph):
    if knowledge_graph != 'cross-domain-knowledge-graph':
        return

    metadata = parse_metadata(file)
    content = read_file(file)

    # Must have contributingDomains specified
    assert 'contributingDomains' in metadata, "Cross-domain files must specify contributingDomains"
    assert len(metadata['contributingDomains']) >= 2, "Must have at least 2 contributing domains"

    # Each domain must have ≥30% content contribution
    for domain in metadata['contributingDomains']:
        relevance = calculate_domain_relevance(content, domain)
        assert relevance >= 0.30, \
            f"Insufficient contribution from {domain}: {relevance:.2f} < 0.30"

    # termID must be CRS-* format
    term_id = metadata['termID']
    assert term_id.startswith('CRS-'), \
        f"Cross-domain term ID must start with CRS-, got {term_id}"
```

---

### 6.2 Automated Validation Pipeline

```yaml
# .github/workflows/validate.yml

name: Knowledge Graph Validation

on: [push, pull_request]

jobs:
  validate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'

      - name: Install dependencies
        run: |
          pip install pyyaml markdown regex nltk

      - name: Run validation suite
        run: |
          python validate-ecosystem.py \
            --strict \
            --report validation-report.json

      - name: Check validation results
        run: |
          if [ $(jq '.errors' validation-report.json) -gt 0 ]; then
            echo "Validation failed with errors"
            exit 1
          fi

      - name: Upload validation report
        uses: actions/upload-artifact@v3
        with:
          name: validation-report
          path: validation-report.json
```

---

### 6.3 Quality Metrics & Monitoring

#### Quality Score Calculation

```python
def calculate_quality_score(file):
    """Calculate comprehensive quality score (0.00-1.00)"""

    metadata = parse_metadata(file)
    content = read_file(file)

    scores = {
        'metadata_completeness': score_metadata_completeness(metadata),  # 0-1
        'content_relevance': score_content_relevance(content, metadata), # 0-1
        'citation_quality': score_citations(content),                    # 0-1
        'structure_quality': score_structure(content),                   # 0-1
        'link_validity': score_links(content),                           # 0-1
        'freshness': score_freshness(metadata['lastValidated']),         # 0-1
    }

    # Weighted average
    weights = {
        'metadata_completeness': 0.20,
        'content_relevance': 0.30,
        'citation_quality': 0.15,
        'structure_quality': 0.15,
        'link_validity': 0.10,
        'freshness': 0.10,
    }

    quality_score = sum(scores[k] * weights[k] for k in scores)
    return round(quality_score, 2)
```

#### Quality Monitoring Dashboard

```python
# Generate ecosystem-wide quality report
def generate_quality_dashboard():
    report = {
        'timestamp': datetime.now().isoformat(),
        'knowledge_graphs': {}
    }

    for kg in ['blockchain-KG', 'robotics-KG', 'ai-ml-KG', 'finance-KG', 'cross-domain-KG']:
        files = get_all_files(kg)

        report['knowledge_graphs'][kg] = {
            'total_files': len(files),
            'avg_quality_score': np.mean([f.quality_score for f in files]),
            'files_below_threshold': len([f for f in files if f.quality_score < 0.70]),
            'missing_citations': len([f for f in files if f.citation_count == 0]),
            'outdated': len([f for f in files if days_since_validation(f) > 365]),
            'contamination_alerts': len([f for f in files if has_contamination(f)]),
        }

    return report
```

**Monitoring Alerts**:
- **Critical**: Files with quality score <0.50
- **Warning**: Files with quality score 0.50-0.70
- **Info**: Files not updated in >12 months

---

### 6.4 Review Process

#### Pre-Merge Review Checklist

For all new content or major edits:

```markdown
## Content Review Checklist

### Automated Validation
- [ ] All required metadata fields present
- [ ] termID format valid (DOMAIN-CATEGORY-NUMBER)
- [ ] Domain alignment correct (prefix matches primaryDomain)
- [ ] Quality score ≥0.70
- [ ] No bare URLs (all URLs expanded with context)
- [ ] Links resolve correctly
- [ ] No contamination from unrelated domains

### Manual Review
- [ ] Content accuracy verified
- [ ] Citations appropriate and complete
- [ ] Domain classification correct
- [ ] Appropriate cross-references
- [ ] Writing quality (clarity, grammar)
- [ ] No duplication with existing content

### Domain-Specific Checks
- [ ] (Blockchain) blockchainRelevance = High
- [ ] (Cross-Domain) ≥30% content from each contributing domain
- [ ] (All) No misclassified content

### Approval
- [ ] Reviewed by domain expert
- [ ] Approved by maintainer
```

---

## 7. Implementation Roadmap

### 7.1 Immediate Actions (Week 1)

1. **Setup**
   - Create migration project repository
   - Assemble migration team (architect, developers, reviewers)
   - Setup communication channels

2. **Automated Analysis**
   ```bash
   # Run domain classification analysis
   python analyze-domain-distribution.py \
     --input mainKnowledgeGraph/ \
     --output domain-classification-report.json

   # Generate relocation manifest
   python generate-relocation-manifest.py \
     --classification domain-classification-report.json \
     --output relocation-manifest.csv
   ```

3. **Manual Review Preparation**
   - Identify ambiguous files (estimated 50-150)
   - Create review spreadsheet
   - Assign reviewers

### 7.2 Short-Term Goals (Month 1)

- Complete Phase 1 (Triage) and Phase 2 (Pure Domain Separation)
- Migrate robotics, AI/ML, finance files to dedicated KGs
- Implement automated validation pipeline
- Achieve 0% contamination in pure domain KGs

### 7.3 Medium-Term Goals (Month 2-3)

- Complete Phase 3 (Cross-Domain Resolution)
- Process all ambiguous files
- Populate cross-domain knowledge graph
- Comprehensive validation and integration testing

### 7.4 Long-Term Goals (Month 3+)

- Establish ongoing governance processes
- Implement continuous monitoring
- Regular quarterly audits
- Continuous improvement based on feedback

---

## 8. Success Metrics

### 8.1 Quantitative Metrics

| Metric | Current State | Target State | Measurement Method |
|--------|---------------|--------------|-------------------|
| **Domain Purity** | Unknown (~50-60% estimated) | ≥95% | Automated relevance scoring |
| **Contamination Rate** | High (RB-*, AI-* in blockchain KG) | <2% | Automated contamination detection |
| **Metadata Completeness** | Variable | 100% required fields | Automated field presence check |
| **Quality Score (Avg)** | ~0.60 estimated | ≥0.80 | Automated quality calculation |
| **Citation Coverage** | ~30% estimated | ≥90% of factual content | Automated citation analysis |
| **Link Validity** | Unknown | 100% | Automated link checking |
| **Outdated Content** | Unknown | <10% files >12mo old | Date-based analysis |
| **Cross-Domain Clarity** | 0% (no separate KG) | 100% | Manual + automated validation |

### 8.2 Qualitative Metrics

- **User Satisfaction**: Survey of knowledge graph users (target: ≥4.0/5.0)
- **Contributor Confidence**: Survey of contributors (target: ≥4.0/5.0)
- **Search Effectiveness**: User success rate finding relevant content (target: ≥85%)
- **Onboarding Ease**: New contributor time to first contribution (target: <2 hours)

### 8.3 Operational Metrics

- **Migration Velocity**: Files processed per week (target: ≥250/week)
- **Review Throughput**: Ambiguous files reviewed per day (target: ≥10/day)
- **Validation Pass Rate**: Files passing automated validation (target: ≥95%)
- **Rework Rate**: Files requiring rework after review (target: <10%)

### 8.4 Governance Metrics

- **Time to Resolve Classification Disputes**: (target: ≤3 business days)
- **Validation Rule Updates**: (target: monthly review cycle)
- **Documentation Currency**: (target: update within 48h of process changes)

---

## 9. Appendices

### Appendix A: Term ID Mapping (Old → New)

**Full migration mapping available in**: `migration-manifest.csv`

**Sample Mapping**:

| Old Term ID | Topic | Domain | New Term ID | New Location | Priority |
|------------|-------|--------|-------------|--------------|----------|
| RB-0001 | Robot | Robotics | RB-00-0001 | robotics-KG/pages/hardware-actuators/robot.md | CRITICAL |
| AI-0386 | Fairness Auditing Tools | AI/ML | AI-50-0386 | ai-ml-KG/pages/ethics-fairness/fairness-auditing-tools.md | CRITICAL |
| (none) | Blockchain | Blockchain | BLK-00-0001 | blockchain-KG/pages/core-technology/blockchain.md | HIGH |
| (none) | Proof of Work | Blockchain | CON-10-0001 | blockchain-KG/pages/consensus-mechanisms/proof-of-work.md | HIGH |
| CRYPTO-* | Hash Function | Blockchain | CRY-10-0001 | blockchain-KG/pages/cryptography/hash-function.md | MEDIUM |
| ECON-* | Inflation | Blockchain Econ | ECO-60-0002 | blockchain-KG/pages/economics-tokenomics/inflation.md | MEDIUM |
| (TBD) | Decentralized ML | Cross-Domain | CRS-BLK-AI-0001 | cross-domain-KG/pages/blockchain-ai/decentralized-ml.md | LOW |

**Mapping Legend**:
- **Priority**: CRITICAL (blocking), HIGH (week 1-2), MEDIUM (week 3-5), LOW (week 6+)
- **Domain**: Target knowledge graph
- **New Location**: Full path in new structure

### Appendix B: File Relocation Manifest

**Format**: CSV with following columns

```csv
original_path,topic,old_term_id,new_term_id,target_kg,target_path,domain_relevance,contamination_risk,manual_review_required,priority,notes
mainKnowledgeGraph/pages/Robotics.md,Robot,RB-0001,RB-00-0001,robotics-KG,robotics-KG/pages/hardware-actuators/robot.md,1.00,none,false,CRITICAL,"Pure robotics, ZERO blockchain content"
mainKnowledgeGraph/pages/fairness-auditing-tools.md,Fairness Auditing Tools,AI-0386,AI-50-0386,ai-ml-KG,ai-ml-KG/pages/ethics-fairness/fairness-auditing-tools.md,0.98,none,false,CRITICAL,"Pure AI ethics topic"
mainKnowledgeGraph/pages/proof-of-work.md,Proof of Work,(none),CON-10-0001,blockchain-KG,blockchain-KG/pages/consensus-mechanisms/proof-of-work.md,0.95,low,false,HIGH,"Pure blockchain consensus"
mainKnowledgeGraph/pages/token-economics.md,Token Economics,ECON-*,ECO-60-0001,blockchain-KG,blockchain-KG/pages/economics-tokenomics/token-economics.md,0.85,medium,false,MEDIUM,"Blockchain economics, some general econ theory"
mainKnowledgeGraph/pages/ai-blockchain.md,AI on Blockchain,(none),CRS-BLK-AI-0001,cross-domain-KG,cross-domain-KG/pages/blockchain-ai/ai-on-blockchain.md,0.60,low,true,LOW,"Legitimate cross-domain, needs review for balance"
```

**Estimated Totals**:
- **Robotics files**: 150-300 (10-15% of KG)
- **AI/ML files**: 200-400 (15-20% of KG)
- **Finance files**: 100-200 (5-10% of KG)
- **Pure blockchain**: 1500-1800 (55-65% of KG)
- **Cross-domain**: 50-150 (2-5% of KG)
- **Ambiguous/Review**: 50-150 (2-5% of KG)

### Appendix C: Cross-Domain Guidelines

#### When to Create Cross-Domain Content

A topic belongs in `cross-domain-knowledge-graph` if:

1. **Integration Requirement**: Topic REQUIRES understanding of 2+ domains to be meaningful
2. **Balanced Contribution**: Each contributing domain provides ≥30% of the content
3. **Novel Synthesis**: Topic represents integration, not just application in another domain
4. **Practical Application**: Real-world use cases genuinely span multiple domains

#### Examples of Proper Cross-Domain Topics

**Blockchain + AI (CRS-BLK-AI-*)**:
```
VALID:
✓ Decentralized ML Model Marketplaces
  - Blockchain: Smart contracts, token economics, marketplace design
  - AI: Model architecture, training, inference, performance metrics

✓ On-Chain AI Inference
  - Blockchain: Gas optimization, consensus for computation, data availability
  - AI: Model compression, inference optimization, result verification

✓ Blockchain-Based AI Governance
  - Blockchain: DAO structures, voting mechanisms, token-based governance
  - AI: Model updates, training data selection, fairness policies

INVALID:
✗ AI for Trading Cryptocurrencies
  - This is AI application in finance, belongs in ai-ml-KG

✗ Using Blockchain to Store ML Training Data
  - This is data storage application, belongs in blockchain-KG (applications)
```

**Blockchain + Finance (CRS-BLK-FIN-*)**:
```
VALID:
✓ Algorithmic Stablecoins
  - Blockchain: Protocol design, smart contracts, consensus
  - Finance: Monetary policy, peg mechanisms, reserve management

✓ DeFi Protocol Design
  - Blockchain: Smart contract architecture, gas optimization, security
  - Finance: Interest rate models, liquidity management, risk assessment

INVALID:
✗ Traditional Finance Concepts (bonds, stocks, derivatives)
  - Belongs in economics-finance-KG unless explicitly discussing blockchain implementation

✗ Simple Token Design
  - Unless involving complex economic models, belongs in blockchain-KG (tokenomics)
```

#### Cross-Domain Review Checklist

Before classifying content as cross-domain:

- [ ] Can this topic be explained adequately with knowledge from a single domain?
- [ ] Does each contributing domain provide ≥30% of the substantive content?
- [ ] Are we documenting genuine integration or just application?
- [ ] Would users from BOTH domains find this content valuable and relevant?
- [ ] Is there novel synthesis happening, or just domain A using tool from domain B?

If any answer is NO, reconsider classification. Default to pure domain when uncertain.

#### Cross-Domain Metadata Example

```markdown
# Decentralized ML Model Marketplace

## OntologyBlock
- **Identification**
  - termID:: CRS-BLK-AI-0001
  - domain-prefix:: CRS
  - primaryDomain:: [[Cross-Domain: Blockchain + AI]]
  - status:: complete

- **Cross-Domain Classification**
  - contributingDomains:: [[Blockchain]], [[AI/ML]]
  - domainContribution::
    - blockchain: 45% (marketplace design, smart contracts, tokenomics)
    - ai: 55% (model architecture, training, inference, evaluation)
  - integrationPattern:: [[Smart Contract API]]
  - useCaseCategories:: [[Decentralized AI]], [[AI Governance]]
  - requiredKnowledge::
    - blockchain: [[Smart Contracts]], [[Gas Optimization]], [[Token Economics]]
    - ai: [[Model Training]], [[Model Inference]], [[Model Evaluation]]

- **Related Topics**
  - Pure Blockchain: [[Smart Contracts]] (/blockchain-KG/)
  - Pure AI/ML: [[Model Training]] (/ai-ml-KG/)
  - Cross-Domain: [[On-Chain AI Inference]] (/cross-domain-KG/)
```

---

## 10. Conclusion

This domain taxonomy architecture provides a comprehensive framework for reorganizing the contaminated knowledge graph into a clean, scalable, multi-knowledge-graph ecosystem.

### Key Deliverables

1. **Clear Domain Taxonomy**: Hierarchical structure with explicit boundaries
2. **Systematic Term ID Schema**: Consistent, collision-free identification system
3. **Multi-Knowledge Graph Architecture**: Separate graphs for pure domains, shared graph for cross-domain
4. **Comprehensive Metadata Standards**: Structured, enforceable metadata for all content
5. **Phased Migration Strategy**: 10-week execution plan with clear milestones
6. **Quality Control Framework**: Automated validation, quality metrics, ongoing governance

### Expected Outcomes

- **95%+ domain purity** in each knowledge graph
- **Zero contamination** (RB-* in blockchain, AI-* in robotics, etc.)
- **100% metadata completeness** for required fields
- **Enforceable validation** preventing future contamination
- **Scalable architecture** supporting future domain additions
- **Clear governance** with ongoing quality monitoring

### Next Steps

1. **Approve Architecture** (Week 0)
2. **Begin Phase 1: Immediate Triage** (Week 1-2)
3. **Execute Phase 2: Pure Domain Separation** (Week 3-5)
4. **Execute Phase 3: Cross-Domain Resolution** (Week 6-8)
5. **Execute Phase 4: Validation & Integration** (Week 9-10)
6. **Establish Ongoing Governance** (Month 3+)

This architecture transforms a contaminated, difficult-to-maintain knowledge graph into a clean, well-organized, scalable knowledge ecosystem that supports growth, quality, and regulatory compliance.

---

**Document Status**: DRAFT - Pending Review and Approval
**Prepared By**: Domain Architecture Team
**Date**: 2025-11-14
**Version**: 1.0
