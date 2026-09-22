public:: true

# First-Order Logic
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:first-order-logic",
  "@type": "Page",
  "title": "First-Order Logic",
  "vc:slug": "first-order-logic",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:first-order-logic",
  "@type": "Class",
  "label": "First-Order Logic",
  "definition": "First-Order Logic (FOL), also called predicate logic, is a formal system that extends propositional logic with quantifiers, variables, predicates and functions, allowing statements about objects and their relationships. It can express assertions such as \"every X has some Y\" through universal and existential quantification over a domain of discourse. FOL provides a precise syntax and model-theoretic semantics that underpin automated reasoning, knowledge representation and the foundations of mathematics.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:formal-logic",
      "label": "Formal Logic"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:formal-logic",
        "label": "Formal Logic"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:predicate-logic",
        "label": "Predicate Logic"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:propositional-logic",
        "label": "Propositional Logic"
      },
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:logical-inference",
        "label": "Logical Inference"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:logical-inference",
        "label": "Logical Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:logic-programming",
        "label": "Logic Programming"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:semantic-web",
        "label": "Semantic Web"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:predicate-logic",
      "label": "Predicate Logic"
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
  - First-Order Logic (FOL), also called predicate logic, is a formal system that extends propositional logic with quantifiers, variables, predicates and functions, allowing statements about objects and their relationships. It can express assertions such as "every X has some Y" through universal and existential quantification over a domain of discourse. FOL provides a precise syntax and model-theoretic semantics that underpin automated reasoning, knowledge representation and the foundations of mathematics.
  - Related concepts: [[Formal Logic]] [[Propositional Logic]] [[Predicate Logic]] [[Automated Reasoning]] [[Knowledge Representation]]
- ### Overview
  - FOL formalises reasoning by combining terms (constants, variables and functions) into atomic formulae using predicates, then composing them with logical connectives and the quantifiers for-all and there-exists. Its semantics is given by interpretations that assign meanings to symbols over a domain; a sentence is valid if true in every interpretation. Although FOL is semi-decidable, it is expressive enough to capture much of mathematics and serves as the target language for many knowledge-representation systems.
- ### Mechanisms
  - **Syntax** — terms, predicates, connectives and the universal and existential quantifiers.
  - **Model-theoretic semantics** — interpretations over a domain of discourse fix truth values.
  - **Inference rules** — modus ponens, resolution and unification derive entailed sentences.
  - **Soundness and completeness** — derivations preserve truth and capture all valid entailments.
  - **Decidability limits** — validity is semi-decidable; satisfiability is undecidable in general.
- ### Applications
  - Automated theorem provers and proof assistants.
  - Knowledge bases and rule engines in symbolic AI.
  - Formal specification and verification of software and hardware.
  - Foundations for ontologies and the semantic web.
- ### Relationships
  - subClassOf:: [[Formal Logic]]
  - partOf:: [[Formal Logic]]
  - hasPart:: [[Predicate Logic]]
  - contrastsWith:: [[Propositional Logic]]
  - contrastsWith:: [[Description Logic]]
  - enables:: [[Automated Reasoning]]
  - enables:: [[Theorem Proving]]
  - uses:: [[Logical Inference]]
  - implements:: [[Knowledge Representation]]
  - requires:: [[Logical Inference]]
  - supports:: [[Inference Engine]]
  - supports:: [[Ontology]]
  - relatedTo:: [[Symbolic AI]]
  - relatedTo:: [[Logic Programming]]
  - relatedTo:: [[Reasoning]]
  - bridgesTo:: [[Semantic Web]]
  - sameAs:: [[Predicate Logic]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
