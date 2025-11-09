# Ontology Builder Guide

This guide explains how to contribute to and extend the Disruptive Technologies Ontology using Logseq-based markdown workflows.

## Overview

The Disruptive Technologies Ontology uses a **Logseq-first development approach**, where ontology classes are authored as structured markdown pages with embedded RDF/Turtle blocks. This provides:

- ✅ **Human-readable** class definitions
- ✅ **Version control friendly** (text-based diffs)
- ✅ **Knowledge graph features** during development
- ✅ **Automated extraction** to TTL for production

## Table of Contents

- [Quick Start](#quick-start)
- [Logseq Workflow](#logseq-workflow)
- [Markdown Format Specification](#markdown-format-specification)
- [Folding Conventions](#folding-conventions)
- [TTL Extraction](#ttl-extraction)
- [Validation Workflow](#validation-workflow)
- [Contribution Patterns](#contribution-patterns)
- [Examples](#examples)

---

## Quick Start

### 1. Set Up Logseq

```bash
# Install Logseq (https://logseq.com/)
# Open the ontologies/ directory as a graph in Logseq
```

### 2. Create a New Class Page

```markdown
- # Ontology Block
  collapsed:: true
  - **Class:** YourClassName
  - **IRI:** http://purl.org/disruptive-tech/ontology#YourClassName
  - **SubClassOf:** ParentClass
  - **Source Domain:** metaverse|blockchain|artificial-intelligence|robotics
  - **Source File:** your-ontology-v1.0.0.ttl
  - **Integration Date:** 2025-10-29
  - **TRL:** 5
  - **Quality Score:** 0.85
  - ```turtle
    dt:YourClassName rdf:type owl:Class ;
        rdfs:label "Your Class Name"@en ;
        rdfs:comment "Description of your class"@en ;
        rdfs:subClassOf dt:ParentClass ;
        meta:sourceOntology "dt:" ;
        meta:technologyDomain "your-domain" ;
        meta:technologyReadinessLevel "5"^^xsd:integer ;
        meta:qualityScore "0.85"^^xsd:float .
    ```

- ## Description
  - Your class description here
  - Use bullet points for readability
  - Include key characteristics

- ## Properties
  - Object properties
    - `hasComponent` → connects to components
  - Data properties
    - `hasValue` → stores values (xsd:string)

- ## Cross-Domain Relationships
  - Connects to [[OtherDomainClass]] via `dt:relationshipProperty`
  - Implements [[AI-MachineLearning]] for intelligence
```

### 3. Extract to TTL

```bash
# Use the extraction tool
cd tools/conversion
python md-to-ttl.py ../../ontologies/your-domain/pages/ \
    --output ../../ontologies/your-domain/schemas/your-domain-v1.0.0.ttl
```

### 4. Validate

```bash
# Run validation
cd tools/validation
python shacl-validator.py ../../ontologies/your-domain/schemas/your-domain-v1.0.0.ttl
```

---

## Logseq Workflow

### Development Cycle

```
1. Author class in Logseq markdown
   ↓
2. Use Logseq features (linking, queries, visualization)
   ↓
3. Extract RDF blocks to TTL
   ↓
4. Validate with SHACL/Reasoner
   ↓
5. Iterate and refine
   ↓
6. Generate combined ontology
   ↓
7. Deploy production TTL
```

### Logseq Features for Ontology Development

**Bidirectional Links:**
```markdown
- [[SmartContract]] can secure [[DigitalAsset]]
  - This creates automatic backlinks for navigation
```

**Property Syntax:**
```markdown
- IRI:: http://example.org/ontology#ClassName
- Domain:: blockchain
- TRL:: 7
```

**Queries for Navigation:**
```clojure
#+BEGIN_QUERY
{:title "All Blockchain Classes"
 :query [:find (pull ?p [*])
         :where
         [?p :block/properties ?props]
         [(get ?props :domain) ?domain]
         [(= ?domain "blockchain")]]}
#+END_QUERY
```

**Folded Blocks:**
```markdown
- # Ontology Block
  collapsed:: true
  - Content hidden by default
  - Keeps pages clean and scannable
```

---

## Markdown Format Specification

### Required Sections

Every ontology class page MUST include:

#### 1. Ontology Block (Collapsed)

```markdown
- # Ontology Block
  collapsed:: true
  - **Class:** ClassName
  - **IRI:** http://purl.org/disruptive-tech/ontology#ClassName
  - **SubClassOf:** ParentClass
  - **Source Domain:** metaverse|blockchain|artificial-intelligence|robotics
  - **Source File:** source-file.ttl
  - **Integration Date:** YYYY-MM-DD
  - **TRL:** 1-9
  - **Quality Score:** 0.0-1.0
  - ```turtle
    # Complete RDF/Turtle definition
    ```
```

#### 2. Description Section

```markdown
- ## Description
  - High-level overview
  - Key characteristics
  - Domain context
```

#### 3. Properties Section

```markdown
- ## Properties
  - Object properties
    - Property 1
    - Property 2
  - Data properties
    - Property 1
    - Property 2
```

#### 4. Cross-Domain Relationships (if applicable)

```markdown
- ## Cross-Domain Relationships
  - Links to other domains
  - Semantic bridges
```

### Optional Sections

```markdown
- ## Related Concepts
  - Links to similar classes

- ## Use Cases
  - Practical applications

- ## Examples
  - Code examples

- ## References
  - Citations and sources
```

---

## Folding Conventions

### Why Folding?

Folding keeps Logseq pages **clean and scannable** by hiding technical details until needed.

### Folding Syntax

**Logseq Property:**
```markdown
- # Section Header
  collapsed:: true
  - Content hidden by default
```

**When to Fold:**

1. ✅ **Ontology Block** - Always folded (contains technical RDF)
2. ✅ **Large code blocks** - Fold if > 20 lines
3. ✅ **Detailed specifications** - Fold technical details
4. ❌ **Short descriptions** - Keep visible
5. ❌ **Cross-domain links** - Keep visible for navigation

### Example with Multiple Folded Blocks

```markdown
- # Ontology Block
  collapsed:: true
  - Technical RDF definition...

- ## Description
  - High-level overview (VISIBLE)

- ## Detailed Specification
  collapsed:: true
  - Long technical details...
  - Implementation notes...

- ## Properties
  - Object properties (VISIBLE)
  - Data properties (VISIBLE)
```

---

## TTL Extraction

### Automated Extraction Script

The `md-to-ttl.py` script extracts RDF blocks from markdown pages:

```bash
# Basic usage
python tools/conversion/md-to-ttl.py \
    ontologies/metaverse/pages/ \
    --output ontologies/metaverse/schemas/metaverse-v1.0.0.ttl

# Options
--domain metaverse          # Filter by domain
--validate                  # Run validation after extraction
--include-metadata          # Add generation metadata
--format turtle             # Output format (turtle, rdfxml, jsonld)
```

### Extraction Rules

1. **Turtle Blocks Only:** Extracts ```` ```turtle ```` code blocks
2. **Preserve Order:** Maintains class definition order
3. **Add Namespaces:** Automatically adds standard prefixes
4. **Metadata Injection:** Adds extraction date and source file metadata

### Manual Extraction

For single-class extraction:

```markdown
1. Open class page in Logseq
2. Navigate to Ontology Block
3. Copy Turtle code block
4. Paste into .ttl file
5. Add required namespace prefixes
```

---

## Validation Workflow

### Three-Level Validation

#### Level 1: Syntax Validation

```bash
# Validate Turtle syntax
rapper -i turtle -c ontologies/metaverse/schemas/metaverse-v1.0.0.ttl
```

#### Level 2: SHACL Constraint Validation

```bash
# Validate against SHACL shapes
python tools/validation/shacl-validator.py \
    ontologies/metaverse/schemas/metaverse-v1.0.0.ttl \
    --shapes tools/validation/schemas/disruptive-tech-constraints.ttl
```

#### Level 3: OWL Reasoning Validation

```bash
# Check logical consistency
python tools/validation/reasoner-check.py \
    ontologies/metaverse/schemas/metaverse-v1.0.0.ttl \
    --reasoner hermit
```

### Validation Checklist

Before committing changes:

- [ ] Markdown follows format specification
- [ ] Turtle syntax is valid
- [ ] All IRIs resolve correctly
- [ ] SHACL constraints pass
- [ ] No logical inconsistencies
- [ ] Cross-domain links verified
- [ ] Metadata complete (TRL, quality score, source domain)

---

## Contribution Patterns

### Pattern 1: Adding a New Class

```markdown
1. Identify the domain (metaverse, blockchain, AI, robotics)
2. Create page: ontologies/{domain}/pages/YourClass.md
3. Follow markdown format specification
4. Add cross-domain links if applicable
5. Extract to TTL and validate
6. Update domain index page
7. Submit pull request
```

### Pattern 2: Adding a Cross-Domain Bridge

```markdown
1. Identify source and target classes
2. Define relationship property (dt:yourRelationship)
3. Update both class pages with bidirectional links:
   - Source: "Connects to [[TargetClass]] via `dt:yourRelationship`"
   - Target: "Connected from [[SourceClass]] via `dt:yourRelationship`"
4. Add property definition to combined ontology
5. Document in cross-domain index
```

### Pattern 3: Refining Existing Classes

```markdown
1. Open class page in Logseq
2. Update Description section
3. Add/modify Properties
4. Update Turtle block to match
5. Re-extract to TTL
6. Validate changes
7. Increment version if major change
```

### Pattern 4: Creating Domain Extensions

```markdown
1. Create extension directory: ontologies/{domain}/extensions/
2. Define new classes following format
3. Link to core domain classes
4. Create extension-specific TTL
5. Document extension purpose and scope
```

---

## Examples

### Example 1: Simple Class

**File:** `ontologies/blockchain/pages/Transaction.md`

```markdown
- # Ontology Block
  collapsed:: true
  - **Class:** Transaction
  - **IRI:** http://purl.org/disruptive-tech/ontology/blockchain#Transaction
  - **SubClassOf:** BlockchainOperation
  - **Source Domain:** blockchain
  - **Source File:** blockchain-v1.0.0.ttl
  - **Integration Date:** 2025-10-29
  - **TRL:** 9
  - **Quality Score:** 0.98
  - ```turtle
    bc:Transaction rdf:type owl:Class ;
        rdfs:label "Transaction"@en ;
        rdfs:comment "Atomic unit of state change on blockchain"@en ;
        rdfs:subClassOf bc:BlockchainOperation .
    ```

- ## Description
  - Represents an atomic unit of state change on a blockchain
  - Contains inputs, outputs, and cryptographic signatures
  - Must be validated and confirmed by network consensus

- ## Properties
  - Object properties
    - `hasInput` → [[TransactionInput]]
    - `hasOutput` → [[TransactionOutput]]
    - `signedBy` → [[PublicKey]]
  - Data properties
    - `transactionHash` (xsd:hexBinary)
    - `timestamp` (xsd:dateTime)
    - `fee` (xsd:decimal)
```

### Example 2: Class with Cross-Domain Bridges

**File:** `ontologies/metaverse/pages/DigitalAsset.md`

```markdown
- # Ontology Block
  collapsed:: true
  - **Class:** DigitalAsset
  - **IRI:** http://purl.org/disruptive-tech/ontology/metaverse#DigitalAsset
  - **SubClassOf:** VirtualObject
  - **Source Domain:** metaverse
  - **Source File:** metaverse-v1.0.0.ttl
  - **Integration Date:** 2025-10-29
  - **TRL:** 7
  - **Quality Score:** 0.93
  - ```turtle
    mv:DigitalAsset rdf:type owl:Class ;
        rdfs:label "Digital Asset"@en ;
        rdfs:comment "Virtual object with ownership and transferability"@en ;
        rdfs:subClassOf mv:VirtualObject .
    ```

- ## Description
  - Represents any virtual object with defined ownership
  - Can be transferred between users
  - May have real-world economic value

- ## Properties
  - Object properties
    - `ownedBy` → [[User]]
    - `locatedIn` → [[VirtualWorld]]

- ## Cross-Domain Relationships
  - Secured by [[BC-SmartContract]] via `dt:securedBy`
    - Blockchain smart contracts manage ownership and transfers
  - Represented as [[BC-NFT]] via `dt:representedBy`
    - Non-fungible tokens provide on-chain proof of ownership
  - Valued by [[AI-MachineLearning]] via `dt:valuedBy`
    - AI models determine market value and rarity
```

### Example 3: Domain Index Page

**File:** `ontologies/blockchain/pages/core-concepts.md`

```markdown
# Blockchain Core Concepts

Index of foundational blockchain ontology classes.

## Consensus Mechanisms
- [[ConsensusAlgorithm]]
- [[ProofOfWork]]
- [[ProofOfStake]]
- [[ByzantineFaultTolerance]]

## Distributed Ledger
- [[Block]]
- [[Transaction]]
- [[Ledger]]
- [[MerkleTree]]

## Smart Contracts
- [[SmartContract]]
- [[ContractState]]
- [[ContractEvent]]
- [[Oracle]]

## Cryptography
- [[HashFunction]]
- [[DigitalSignature]]
- [[PublicKey]]
- [[ZeroKnowledgeProof]]

## Tokens
- [[Token]]
- [[NFT]]
- [[FungibleToken]]
- [[TokenStandard]]
```

---

## Best Practices

### Naming Conventions

**Class Names:**
- Use PascalCase: `SmartContract`, `DigitalAsset`
- Be specific and descriptive
- Avoid abbreviations unless standard

**File Names:**
- Match class name: `SmartContract.md`
- Use hyphens for multi-word: `proof-of-work.md`
- Lowercase for domain indexes: `core-concepts.md`

**Property Names:**
- Use camelCase: `hasInput`, `securedBy`
- Prefix predicates: `dt:` for cross-domain, domain prefix for internal

### Metadata Guidelines

**TRL (Technology Readiness Level):**
- 1-3: Research/concept
- 4-6: Prototype/validation
- 7-9: Production-ready/deployed

**Quality Score:**
- 0.0-0.5: Initial draft
- 0.6-0.8: Reviewed and refined
- 0.9-1.0: Production-quality

**Source Domain:**
- Must be one of: `metaverse`, `blockchain`, `artificial-intelligence`, `robotics`
- Used for provenance tracking

### Cross-Domain Link Guidelines

1. **Use explicit relationship properties:**
   - ✅ `dt:securedBy`, `dt:implements`, `dt:uses`
   - ❌ Generic `relatedTo`

2. **Document bidirectionally:**
   - Update BOTH source and target class pages
   - Maintain consistency

3. **Provide context:**
   - Explain WHY classes are connected
   - Give real-world examples

---

## Troubleshooting

### Common Issues

**Issue:** Turtle block not extracting
- **Solution:** Ensure proper markdown code fence: ```` ```turtle ````

**Issue:** Folding not working in Logseq
- **Solution:** Check `collapsed:: true` property syntax (note double colon)

**Issue:** Cross-domain links broken
- **Solution:** Verify target class page exists with correct name

**Issue:** Validation failing
- **Solution:** Run `rapper -i turtle -c file.ttl` to identify syntax errors

---

## Resources

- [Logseq Documentation](https://docs.logseq.com/)
- [RDF 1.1 Turtle Specification](https://www.w3.org/TR/turtle/)
- [OWL 2 Web Ontology Language Primer](https://www.w3.org/TR/owl2-primer/)
- [SHACL Shapes Constraint Language](https://www.w3.org/TR/shacl/)

---

## Support

For questions or issues:

1. Check existing documentation in `/docs`
2. Review examples in `/examples`
3. Open an issue on GitHub
4. Contact maintainers (see CONTRIBUTING.md)

---

**Last Updated:** 2025-10-29
**Version:** 1.0.0
