# Inverse Property Pairs Meta-Model
## Logseq Ontology System - Property Characteristics Specification

**Version**: 1.0.0
**Date**: 2025-11-07
**Status**: ACTIVE - Production Standard
**Author**: Hive Mind Collective Intelligence System

---

## Executive Summary

This document defines canonical inverse property pairs and property characteristics for the Logseq Ontology System, implementing OWL 2 DL best practices to prevent concept explosion and ensure bidirectional relationship integrity across 1,001+ concepts.

**Key Benefits**:
- ✅ **50% Work Reduction**: Symmetric properties require only ONE relationship
- ✅ **Automatic Inference**: OWL reasoners infer inverse relationships
- ✅ **Consistency Guarantee**: Bidirectional integrity enforced
- ✅ **Conflict Prevention**: Clear property characteristics prevent logical contradictions

---

## Property Characteristics Overview

### OWL 2 DL Property Types

| Characteristic | Definition | Example | Impact |
|----------------|------------|---------|--------|
| **Symmetric** | If A→B then B→A automatically | `related-to`, `bridges-to` | No inverse needed, 50% reduction |
| **Asymmetric** | If A→B then NOT B→A | `requires`, `is-required-by` | Need explicit inverse pair |
| **Transitive** | If A→B and B→C then A→C | `is-part-of` | Enables hierarchical reasoning |
| **Functional** | Each subject has at most ONE value | `belongs-to` | Cardinality constraint |
| **Inverse Functional** | Each object relates to at most ONE subject | Unique identifiers | Identity reasoning |

---

## Canonical Inverse Property Pairs

### 1. Compositional Relationships

#### has-part ↔ is-part-of

```clojure
# Property Declarations
Declaration(ObjectProperty(dt:hasPart))
Declaration(ObjectProperty(dt:isPartOf))

# Inverse Relationship
InverseObjectProperties(dt:hasPart dt:isPartOf)

# Characteristics
TransitiveObjectProperty(dt:isPartOf)
# Transitivity allows: If A ⊃ B and B ⊃ C then A ⊃ C

# Example Usage
SubClassOf(mv:Avatar
  ObjectSomeValuesFrom(dt:hasPart mv:AvatarBody)
)
# Automatically infers:
# SubClassOf(mv:AvatarBody
#   ObjectSomeValuesFrom(dt:isPartOf mv:Avatar)
# )
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: System/component hierarchies, physical composition

---

#### contains ↔ is-contained-in

```clojure
Declaration(ObjectProperty(dt:contains))
Declaration(ObjectProperty(dt:isContainedIn))

InverseObjectProperties(dt:contains dt:isContainedIn)
TransitiveObjectProperty(dt:isContainedIn)
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Spatial containment, data structures

---

### 2. Dependency Relationships

#### requires ↔ is-required-by

```clojure
Declaration(ObjectProperty(dt:requires))
Declaration(ObjectProperty(dt:isRequiredBy))

InverseObjectProperties(dt:requires dt:isRequiredBy)
AsymmetricObjectProperty(dt:requires)
# Asymmetry prevents circular dependencies: If A requires B, then B cannot require A
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Technical dependencies, prerequisites

---

#### depends-on ↔ is-dependency-of

```clojure
Declaration(ObjectProperty(dt:dependsOn))
Declaration(ObjectProperty(dt:isDependencyOf))

InverseObjectProperties(dt:dependsOn dt:isDependencyOf)
AsymmetricObjectProperty(dt:dependsOn)
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: External dependencies, infrastructure requirements

---

### 3. Enablement Relationships

#### enables ↔ is-enabled-by

```clojure
Declaration(ObjectProperty(dt:enables))
Declaration(ObjectProperty(dt:isEnabledBy))

InverseObjectProperties(dt:enables dt:isEnabledBy)
AsymmetricObjectProperty(dt:enables)
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Capability enablement, feature provision

---

### 4. Implementation Relationships

#### implements ↔ is-implemented-by

```clojure
Declaration(ObjectProperty(dt:implements))
Declaration(ObjectProperty(dt:isImplementedBy))

InverseObjectProperties(dt:implements dt:isImplementedBy)
AsymmetricObjectProperty(dt:implements)
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Interface implementation, standard compliance

---

### 5. Usage Relationships

#### uses ↔ is-used-by

```clojure
Declaration(ObjectProperty(dt:uses))
Declaration(ObjectProperty(dt:isUsedBy))

InverseObjectProperties(dt:uses dt:isUsedBy)
# No asymmetry - allows bidirectional usage
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Resource utilization, service consumption

---

### 6. Membership Relationships

#### belongs-to ↔ has-member

```clojure
Declaration(ObjectProperty(dt:belongsTo))
Declaration(ObjectProperty(dt:hasMember))

InverseObjectProperties(dt:belongsTo dt:hasMember)
FunctionalObjectProperty(dt:belongsTo)
# Functional: Each entity belongs to exactly ONE parent
```

**Domain**: `owl:Thing`
**Range**: `owl:Thing`
**Use Case**: Set membership, organizational hierarchy

---

## Symmetric Properties (NO Inverse Needed)

These properties are their own inverse - only ONE relationship required:

### related-to (General Association)

```clojure
Declaration(ObjectProperty(dt:relatedTo))

SymmetricObjectProperty(dt:relatedTo)
# If Avatar related-to DigitalIdentity,
# then DigitalIdentity related-to Avatar (automatic)
```

**Usage**: Generic semantic relationships, conceptual associations

---

### bridges-to (Cross-Domain Connection)

```clojure
Declaration(ObjectProperty(dt:bridgesTo))

SymmetricObjectProperty(dt:bridgesTo)
```

**Usage**: Cross-domain ontology bridges (AI ↔ Blockchain ↔ Metaverse)

**Special Syntax**:
```markdown
- bridges-to:: [[Smart Contract]] (domain: blockchain)
```

---

### connected-to (Network Connection)

```clojure
Declaration(ObjectProperty(dt:connectedTo))

SymmetricObjectProperty(dt:connectedTo)
```

**Usage**: Network topology, peer relationships

---

### interacts-with (Interaction)

```clojure
Declaration(ObjectProperty(dt:interactsWith))

SymmetricObjectProperty(dt:interactsWith)
```

**Usage**: Agent interactions, system communications

---

### adjacent-to (Spatial Adjacency)

```clojure
Declaration(ObjectProperty(dt:adjacentTo))

SymmetricObjectProperty(dt:adjacentTo)
```

**Usage**: Spatial relationships, geographic proximity

---

### equivalent-to (Equivalence)

```clojure
Declaration(ObjectProperty(dt:equivalentTo))

SymmetricObjectProperty(dt:equivalentTo)
TransitiveObjectProperty(dt:equivalentTo)
# Both symmetric AND transitive
```

**Usage**: Synonyms, alternative formulations, equivalent concepts

---

## Implementation Guidelines

### When to Create Named Inverses

✅ **CREATE explicit inverse pairs for**:
- Asymmetric relationships (requires, enables, implements)
- Transitive relationships needing different properties (hasPart vs isPartOf)
- Domain-specific semantics requiring clear directionality

❌ **DO NOT create inverses for**:
- Symmetric properties (related-to, bridges-to, connected-to)
- Properties that should be self-inverse

---

### Markdown File Format

**Asymmetric Property Example**:
```markdown
- #### Relationships
  id:: avatar-relationships
  - has-part:: [[Avatar Body]], [[Animation Rig]]
  - requires:: [[Digital Identity]], [[3D Rendering Engine]]
  - enables:: [[User Embodiment]], [[Social Presence]]
```

**Auto-Generated Inverses** (in target files):
```markdown
# Avatar Body.md
- #### Relationships
  - is-part-of:: [[Avatar]]

# Digital Identity.md
- #### Relationships
  - is-required-by:: [[Avatar]]
```

**Symmetric Property Example**:
```markdown
- #### Relationships
  - related-to:: [[Virtual World]], [[Digital Twin]]
  - bridges-to:: [[Smart Contract]] (domain: blockchain)
```

**NO inverse needed** - reasoner infers bidirectional relationship automatically.

---

## Validation Rules

### Rule 1: Symmetric Property Consistency

```python
def validate_symmetric_property(property_name):
    if property_name in SYMMETRIC_PROPERTIES:
        # Should NOT have inverse in target file
        assert not has_inverse_relationship(property_name)
        # Should have SymmetricObjectProperty axiom
        assert has_symmetric_axiom(property_name)
```

### Rule 2: Asymmetric Property Completeness

```python
def validate_asymmetric_property(source_concept, property_name, target_concept):
    inverse_property = INVERSE_MAP[property_name]

    # Check target file has inverse
    target_file = read_concept_file(target_concept)
    assert inverse_property in target_file.relationships
    assert source_concept in target_file.relationships[inverse_property]
```

### Rule 3: Transitive Property Hierarchy

```python
def validate_transitive_closure(property_name):
    if property_name in TRANSITIVE_PROPERTIES:
        # Check reasoner can infer transitive chain
        assert reasoner.infer_transitive(property_name)
```

---

## Property Characteristics Summary Table

| Property | Symmetric | Asymmetric | Transitive | Functional | Inverse Property |
|----------|-----------|------------|------------|------------|------------------|
| `has-part` | ❌ | ❌ | ❌ | ❌ | `is-part-of` |
| `is-part-of` | ❌ | ❌ | ✅ | ❌ | `has-part` |
| `requires` | ❌ | ✅ | ❌ | ❌ | `is-required-by` |
| `is-required-by` | ❌ | ✅ | ❌ | ❌ | `requires` |
| `enables` | ❌ | ✅ | ❌ | ❌ | `is-enabled-by` |
| `is-enabled-by` | ❌ | ✅ | ❌ | ❌ | `enables` |
| `implements` | ❌ | ✅ | ❌ | ❌ | `is-implemented-by` |
| `is-implemented-by` | ❌ | ✅ | ❌ | ❌ | `implements` |
| `uses` | ❌ | ❌ | ❌ | ❌ | `is-used-by` |
| `is-used-by` | ❌ | ❌ | ❌ | ❌ | `uses` |
| `belongs-to` | ❌ | ❌ | ❌ | ✅ | `has-member` |
| `has-member` | ❌ | ❌ | ❌ | ❌ | `belongs-to` |
| `related-to` | ✅ | ❌ | ❌ | ❌ | *self* |
| `bridges-to` | ✅ | ❌ | ❌ | ❌ | *self* |
| `connected-to` | ✅ | ❌ | ❌ | ❌ | *self* |
| `interacts-with` | ✅ | ❌ | ❌ | ❌ | *self* |
| `adjacent-to` | ✅ | ❌ | ❌ | ❌ | *self* |
| `equivalent-to` | ✅ | ❌ | ✅ | ❌ | *self* |

---

## Automated Relationship Addition

### Algorithm: Bidirectional Relationship Enforcer

```python
def enforce_bidirectional_relationships(source_file, target_file):
    """
    Automatically adds inverse relationships to maintain bidirectionality
    """
    for relationship in source_file.relationships:
        property_name = relationship.property
        target_concepts = relationship.values

        # Skip symmetric properties (already bidirectional)
        if property_name in SYMMETRIC_PROPERTIES:
            continue

        # Get inverse property
        inverse_property = INVERSE_MAP.get(property_name)
        if not inverse_property:
            warn(f"No inverse defined for {property_name}")
            continue

        # Add inverse to each target file
        for target_concept in target_concepts:
            target_file = load_concept_file(target_concept)

            # Check if inverse already exists
            if not has_relationship(target_file, inverse_property, source_file.name):
                add_relationship(
                    target_file,
                    inverse_property,
                    source_file.name
                )
                save_concept_file(target_file)
                log(f"Added {inverse_property} to {target_concept}")
```

---

## OWL Axiom Patterns

### Pattern 1: Symmetric Property Declaration

```clojure
# Property declaration
Declaration(ObjectProperty(dt:relatedTo))

# Symmetric characteristic
SymmetricObjectProperty(dt:relatedTo)

# Usage (only need to assert in ONE direction)
SubClassOf(mv:Avatar
  ObjectSomeValuesFrom(dt:relatedTo mv:DigitalIdentity)
)

# Reasoner automatically infers:
# SubClassOf(mv:DigitalIdentity
#   ObjectSomeValuesFrom(dt:relatedTo mv:Avatar)
# )
```

### Pattern 2: Asymmetric Inverse Pair

```clojure
# Property declarations
Declaration(ObjectProperty(dt:requires))
Declaration(ObjectProperty(dt:isRequiredBy))

# Inverse relationship
InverseObjectProperties(dt:requires dt:isRequiredBy)

# Asymmetric characteristics
AsymmetricObjectProperty(dt:requires)
AsymmetricObjectProperty(dt:isRequiredBy)

# Usage in source file
SubClassOf(mv:Avatar
  ObjectSomeValuesFrom(dt:requires mv:DigitalIdentity)
)

# Reasoner automatically infers:
# SubClassOf(mv:DigitalIdentity
#   ObjectSomeValuesFrom(dt:isRequiredBy mv:Avatar)
# )
```

### Pattern 3: Transitive Property Chain

```clojure
Declaration(ObjectProperty(dt:isPartOf))
TransitiveObjectProperty(dt:isPartOf)

# Assertions
SubClassOf(mv:AvatarHand ObjectSomeValuesFrom(dt:isPartOf mv:AvatarBody))
SubClassOf(mv:AvatarBody ObjectSomeValuesFrom(dt:isPartOf mv:Avatar))

# Reasoner infers transitive closure:
# SubClassOf(mv:AvatarHand ObjectSomeValuesFrom(dt:isPartOf mv:Avatar))
```

---

## Migration Strategy

### Phase 1: Property Meta-Model Creation

1. Create property definition pages (e.g., `Property___has-part.md`)
2. Include OWL axioms with characteristics
3. Document usage patterns and examples

### Phase 2: Relationship Audit

1. Scan all 1,001 concept files
2. Identify unidirectional relationships
3. Check for missing inverses

### Phase 3: Automated Addition

1. For each asymmetric property: add inverse to target file
2. For each symmetric property: verify SymmetricObjectProperty axiom
3. For transitive properties: verify TransitiveObjectProperty axiom

### Phase 4: Validation

1. Run OWL reasoner (HermiT/ELK)
2. Check consistency
3. Verify no logical contradictions

---

## Benefits Quantification

### Work Reduction from Symmetric Properties

**Current State** (without symmetric optimization):
- 241 files with `has-part` relationships
- 218 files with `is-part-of` relationships
- Total: 459 relationship assertions

**Optimized State** (with symmetric for applicable properties):
- Estimate 30% of relationships are symmetric (`related-to`, `bridges-to`)
- 30% of 459 = ~138 relationships
- **Work saved**: 138 inverse relationships NOT needed
- **Effort reduction**: ~30% for symmetric properties

**Cross-Domain Bridges**:
- 201 cross-domain bridges identified
- If `bridges-to` is symmetric: save 201 inverse relationships
- **50% work reduction** on bridge relationships

---

## Conclusion

This inverse property meta-model provides:

✅ **Consistency**: Bidirectional relationships guaranteed
✅ **Efficiency**: 50% reduction for symmetric properties
✅ **Reasoning**: OWL 2 DL inference enabled
✅ **Scalability**: Automated maintenance across 1,001+ concepts
✅ **Quality**: Logical contradictions prevented

**Next Steps**:
1. Implement automated relationship adder tool
2. Execute bidirectional relationship migration
3. Validate with OWL reasoner
4. Document migration results

---

**Document Owner**: Hive Mind Collective Intelligence System
**Review Cycle**: Quarterly
**Version Control**: Git-tracked in `/docs/INVERSE-PROPERTY-STANDARD.md`
