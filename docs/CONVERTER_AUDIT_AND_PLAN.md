# Ontology Converter Audit and Consolidation Plan

## Executive Summary

Based on comprehensive audit, we have **17 converter tools** with significant overlap and critical structural issues in outputs. This document outlines problems identified and proposes consolidation strategy.

## Critical Issues Identified

### 1. Commented Out Axioms
**Problem:** All `rdfs:subClassOf` axioms are commented out with `#`
**Impact:** Ontology has no hierarchy - just flat list of classes
**Files Affected:** Most TTL converters
**Priority:** CRITICAL

### 2. Massive Prefix Repetition
**Problem:** `@prefix` declarations repeated for every class
**Impact:** 90% file bloat, unreadable output
**Files Affected:** All TTL converters
**Priority:** HIGH

### 3. Invalid URIs
**Problem:** URIs contain invalid characters: `()`, `%`, inconsistent naming
**Examples:**
- `mv:Robustness(OECD)` - parentheses invalid
- `bc:51%Attack` - percent sign invalid
- `mv:BC0105tokenomics` - code embedded, inconsistent case
**Priority:** HIGH

### 4. URI Reuse (Same Class, Multiple Concepts)
**Problem:** Same URI used for different concepts
**Example:** `aigo:AIGovernancePrinciple` declared with 3 different labels
**Impact:** Completely breaks ontology logic
**Priority:** CRITICAL

### 5. No Formal Property Definitions
**Problem:** Properties used in restrictions but never declared
**Impact:** Invalid OWL, won't validate
**Priority:** HIGH

### 6. Unclear Namespace Strategy
**Problem:** Inconsistent assignment of concepts to namespaces
**Files Affected:** All converters
**Priority:** MEDIUM

## Current Converter Inventory

### Active/Working

1. **webvowl_header_only_converter.py** (18K) - Currently used in workflow
   - Generates TTL from markdown headers
   - Has all the critical issues above
   - Used for WebVOWL JSON generation

2. **ttl_to_webvowl_json.py** (7.3K) - Currently used in workflow
   - Converts TTL to WebVOWL JSON
   - Recently fixed for proper structure
   - KEEP - works correctly now

### Experimental/Duplicative

3. **comprehensive_markdown_to_ttl.py** (20K)
4. **webvowl_enhanced_converter.py** (15K)
5. **markdown_to_ttl_direct.py** (8.7K)
6. **comprehensive_owl_to_turtle.py** (18K)
7. **fixed_owl_to_turtle.py** (7.8K)
8. **convert-to-turtle.py** (7.5K)
9. **convert_owl_to_ttl.py** (3.5K)
10. **simple_turtle_converter.py** (8.1K)

### Utility/Format Converters

11. **extract_owl_from_markdown.py** (7.0K) - Extract OWL blocks
12. **convert-to-csv.py** (8.4K)
13. **convert-to-cypher.py** (9.1K) - Neo4j
14. **convert-to-jsonld.py** (5.9K)
15. **convert-to-skos.py** (8.3K)
16. **convert-to-sql.py** (12K)
17. **simple-format-converter.py** (17K)

### New (This Session)

18. **best_practice_ttl_converter.py** - Clean implementation attempt

## Recommended Actions

### Phase 1: Fix Critical Issues (Immediate)

**Action:** Fix `webvowl_header_only_converter.py` to address all critical issues

**Changes Needed:**
1. ✅ Move prefix declarations to top (once only)
2. ✅ Implement `sanitize_uri_fragment()` for PascalCase URIs
3. ✅ Output uncommented `rdfs:subClassOf` axioms with correct syntax
4. ✅ Create unique URI for each concept
5. ✅ Formally declare all properties before use
6. ✅ Implement clear namespace assignment strategy

**Timeline:** 1-2 hours

### Phase 2: Consolidation (Next Session)

**Keep:**
- `ttl_to_webvowl_json.py` - Works correctly
- `extract_owl_from_markdown.py` - Useful utility
- One format converter each for: CSV, Cypher, JSON-LD, SQL

**Fix and Promote:**
- `webvowl_header_only_converter.py` → Best practice implementation

**Archive/Deprecate:**
- All experimental TTL converters (10 files)
- `simple-format-converter.py` (superseded by specific converters)

### Phase 3: Documentation (Future)

**Create:**
- `README.md` in converters directory
- Usage examples for each tool
- Validation scripts to check output quality

## Clojure-Style OWL Format

**Discovery:** Markdown files use Clojure-style functional syntax:
```clojure
(Declaration (Class :AIImpactAssessment))
(SubClassOf :AIImpactAssessment :TechnologyImpactAssessment)
(SubClassOf :AIImpactAssessment
  (ObjectSomeValuesFrom :evaluates :AISystem))
```

**Action Needed:** Parsers must handle this syntax, not standard OWL functional syntax

## Success Criteria

A successful converter should produce TTL with:

1. **Single prefix block** at top of file
2. **Valid URIs** using PascalCase, no invalid characters
3. **Uncommented axioms** using correct Turtle syntax:
   ```turtle
   bc:Cryptocurrency rdfs:subClassOf bc:EconomicMechanism, bc:BlockchainEntity .
   ```
4. **Unique URIs** - one class per concept
5. **Formal property declarations** before use
6. **Consistent namespace strategy** based on domain codes
7. **Term IDs as dcterms:identifier** not embedded in URI
8. **Clean, readable output** for human review

## Example: Before vs After

### Before (Current Output - BROKEN)
```turtle
# === BC-0097-cryptocurrency ===
@prefix bc: <...> .
@prefix owl: <...> .
# ... repeated 50 times ...

bc:Cryptocurrency rdf:type owl:Class .
bc:Cryptocurrency rdfs:label "Cryptocurrency"@en .
# SubClassOf(:Cryptocurrency :EconomicMechanism)  <-- COMMENTED OUT
# SubClassOf(:Cryptocurrency :BlockchainEntity)    <-- COMMENTED OUT
```

### After (Best Practice - WORKING)
```turtle
# Prefixes declared ONCE at top
@prefix bc: <http://disruption.org/ontology/blockchain#> .
@prefix dt: <http://disruption.org/ontology/disruptive-tech#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix dcterms: <http://purl.org/dc/terms/> .

# ... later in file ...

bc:Cryptocurrency a owl:Class ;
    rdfs:label "Cryptocurrency"@en ;
    rdfs:comment "A digital currency operating on blockchain..."@en ;
    dcterms:identifier "BC-0097" ;
    rdfs:subClassOf bc:EconomicMechanism, bc:BlockchainEntity .
```

## Next Steps

1. Create fixed version of `webvowl_header_only_converter.py`
2. Test with small subset of files
3. Validate output with OWL reasoner
4. Update workflow to use fixed converter
5. Archive deprecated converters
6. Document remaining tools

## Files to Keep (Final Set)

1. `webvowl_header_only_converter.py` (FIXED VERSION)
2. `ttl_to_webvowl_json.py` (already working)
3. `extract_owl_from_markdown.py`
4. `convert-to-csv.py`
5. `convert-to-cypher.py`
6. `convert-to-jsonld.py`

**Total: 6 tools** (down from 17)

---

*Audit completed: 2025-11-09*
*Next review: After Phase 1 implementation*
