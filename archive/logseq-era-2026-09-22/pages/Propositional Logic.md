public:: true

# Propositional Logic

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:propositional-logic",
  "@type": "Page",
  "title": "Propositional Logic",
  "vc:slug": "propositional-logic",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:propositional-logic",
  "@type": "Class",
  "label": "Propositional Logic",
  "definition": "Propositional logic, also known as sentential logic or zeroth-order logic, is a formal system in which the basic units are whole propositions that are either true or false, combined using logical connectives such as conjunction, disjunction, negation, implication, and biconditional. It studies the truth-functional behaviour of compound statements and provides the foundation on which richer logics, including predicate logic, are built. Its decidability and clear semantics make it central to circuit design, satisfiability solving, and automated reasoning.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:logic",
      "label": "Logic"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:logic",
      "label": "Logic"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:logical-inference",
        "label": "Logical Inference"
      }
    ],
    "requires": {
      "@id": "urn:ngm:class:formal-language",
      "label": "Formal Language"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      }
    ],
    "uses": {
      "@id": "urn:ngm:class:logical-inference",
      "label": "Logical Inference"
    },
    "supports": [
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "contrastsWith": {
      "@id": "urn:ngm:class:predicate-logic",
      "label": "Predicate Logic"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:first-order-logic",
        "label": "First-Order Logic"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:knowledge-representation",
      "label": "Knowledge Representation"
    },
    "dependsOn": {
      "@id": "urn:ngm:class:formal-language",
      "label": "Formal Language"
    },
    "implements": {
      "@id": "urn:ngm:class:logic",
      "label": "Logic"
    }
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Propositional Logic]] reasons over whole propositions joined by truth-functional connectives.
  - It is the simplest layer of [[Logic]] and the substrate beneath [[Predicate Logic]] and [[First-Order Logic]].
  - Its decidable [[Logical Inference]] underpins [[Constraint Satisfaction]] and [[Automated Reasoning]].
- ### Overview
  - Atomic propositions are assigned truth values, and connectives define how the truth of compounds depends on their parts.
  - Truth tables give a complete, mechanical method for evaluating any propositional formula.
  - The satisfiability problem (SAT) — deciding whether an assignment makes a formula true — is the canonical NP-complete problem.
  - Normal forms such as conjunctive and disjunctive normal form provide canonical representations for reasoning and solving.
- ### Key aspects
  - Connectives — conjunction, disjunction, negation, implication, and biconditional define truth-functional composition.
  - Truth tables — exhaustive enumeration of truth values establishes validity, satisfiability, and entailment.
  - Decidability — propositional validity is decidable, unlike full first-order logic.
  - Normal forms — CNF and DNF support resolution and DPLL-style search.
  - Entailment and proof — natural deduction and resolution derive consequences from premises.
- ### Applications
  - Digital circuit design and Boolean function minimisation.
  - SAT and SMT solvers for verification, planning, and configuration.
  - Rule evaluation in business logic and policy engines.
  - Teaching the foundations of formal reasoning and proof.
- ### Relationships
  - Propositional logic sits under [[Logic]] and contrasts with the richer expressivity of predicate logic.
  - partOf:: [[Logic]]
  - hasPart:: [[Logical Inference]]
  - requires:: [[Formal Language]]
  - enables:: [[Constraint Satisfaction]]
  - enables:: [[Automated Reasoning]]
  - uses:: [[Logical Inference]]
  - supports:: [[Theorem Proving]]
  - supports:: [[Formal Verification]]
  - contrastsWith:: [[Predicate Logic]]
  - relatedTo:: [[Reasoning]]
  - relatedTo:: [[First-Order Logic]]
  - relatedTo:: [[Constraint Satisfaction]]
  - bridgesTo:: [[Knowledge Representation]]
  - dependsOn:: [[Formal Language]]
  - implements:: [[Logic]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
