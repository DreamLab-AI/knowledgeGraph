public:: true

# Predicate Logic

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:predicate-logic",
  "@type": "Page",
  "title": "Predicate Logic",
  "vc:slug": "predicate-logic",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:predicate-logic",
  "@type": "Class",
  "label": "Predicate Logic",
  "definition": "Predicate logic, also called first-order predicate calculus, is a formal system that extends propositional logic with quantifiers and predicates over individual variables, allowing statements about the properties of and relations between objects in a domain of discourse. It introduces the universal and existential quantifiers, enabling expressions such as 'for all x, P(x)' and 'there exists an x such that P(x)'. Predicate logic provides the semantic and syntactic backbone for much of automated reasoning, formal specification, and knowledge representation.",
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
      },
      {
        "@id": "urn:ngm:class:propositional-logic",
        "label": "Propositional Logic"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:propositional-logic",
        "label": "Propositional Logic"
      },
      {
        "@id": "urn:ngm:class:formal-language",
        "label": "Formal Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "uses": {
      "@id": "urn:ngm:class:logical-inference",
      "label": "Logical Inference"
    },
    "implements": {
      "@id": "urn:ngm:class:first-order-logic",
      "label": "First-Order Logic"
    },
    "supports": [
      {
        "@id": "urn:ngm:class:semantic-reasoning",
        "label": "Semantic Reasoning"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Satisfaction"
      }
    ],
    "contrastsWith": {
      "@id": "urn:ngm:class:propositional-logic",
      "label": "Propositional Logic"
    },
    "bridgesTo": {
      "@id": "urn:ngm:class:knowledge-graph",
      "label": "Knowledge Graph"
    },
    "standardizedBy": {
      "@id": "urn:ngm:class:formal-verification",
      "label": "Formal Verification"
    }
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:first-order-logic",
      "label": "First-Order Logic"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Predicate Logic]] extends [[Propositional Logic]] with [[Quantifier]]-style operators over variables.
  - It is the formal foundation underpinning [[First-Order Logic]] and much of [[Knowledge Representation]].
  - Predicates and quantification let it express relations between objects rather than only whole-sentence truth values, supporting [[Logical Inference]] and [[Reasoning]].
- ### Overview
  - Predicate logic separates a sentence into a predicate (a property or relation) applied to one or more terms (constants, variables, or function applications).
  - Variables are bound by quantifiers: the universal quantifier asserts a property holds of every individual, the existential quantifier asserts it holds of at least one.
  - Its model-theoretic semantics interpret formulae over a domain with an assignment of meanings to predicate, function, and constant symbols, giving a rigorous notion of truth.
  - Soundness and completeness results (Goedel's completeness theorem) guarantee that valid arguments are exactly those derivable in standard proof calculi.
- ### Key aspects
  - Quantifiers — universal and existential binding of variables across a domain of discourse.
  - Predicates and functions — relations and mappings over individuals, distinguishing it from purely sentential logic.
  - Well-formed formulae — a recursive syntax built from atomic predicates, connectives, and quantifiers.
  - Inference rules — universal instantiation, existential generalisation, modus ponens and resolution.
  - Decidability — first-order validity is semi-decidable, motivating practical proof-search strategies.
- ### Applications
  - Automated theorem proving and proof assistants for mathematics and verification.
  - Formal specification of software and hardware behaviour and their verification.
  - Description-logic fragments powering ontologies and the semantic web.
  - Query languages and rule engines in knowledge-based and expert systems.
- ### Relationships
  - Predicate logic is rooted under [[Logic]] and bridges symbolic reasoning to knowledge representation.
  - partOf:: [[Logic]]
  - hasPart:: [[Logical Inference]]
  - hasPart:: [[Propositional Logic]]
  - requires:: [[Propositional Logic]]
  - requires:: [[Formal Language]]
  - enables:: [[Theorem Proving]]
  - enables:: [[Automated Reasoning]]
  - enables:: [[Knowledge Representation]]
  - uses:: [[Logical Inference]]
  - implements:: [[First-Order Logic]]
  - supports:: [[Semantic Reasoning]]
  - supports:: [[Ontology]]
  - relatedTo:: [[Reasoning]]
  - relatedTo:: [[Constraint Satisfaction]]
  - contrastsWith:: [[Propositional Logic]]
  - bridgesTo:: [[Knowledge Graph]]
  - standardizedBy:: [[Formal Verification]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
