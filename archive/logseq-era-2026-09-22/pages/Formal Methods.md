public:: true

# Formal Methods
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:formal-methods",
  "@type": "Page",
  "title": "Formal Methods",
  "vc:slug": "formal-methods",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:formal-methods",
  "@type": "Class",
  "label": "Formal Methods",
  "definition": "Formal methods are mathematically rigorous techniques for the specification, development, and verification of software and hardware systems. They use formal logic, set theory, and automata to express system requirements precisely and to prove that an implementation satisfies them. In blockchain and smart-contract engineering, formal methods are applied to prove the absence of classes of bugs and to guarantee that contract behaviour matches its intended specification.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:formal-verification",
      "label": "Formal Verification"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:mathematical-logic",
        "label": "Mathematical Logic"
      },
      {
        "@id": "urn:ngm:class:temporal-logic",
        "label": "Temporal Logic"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:model-checking",
        "label": "Model Checking"
      },
      {
        "@id": "urn:ngm:class:theorem-proving",
        "label": "Theorem Proving"
      },
      {
        "@id": "urn:ngm:class:formal-specification",
        "label": "Formal Specification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:mathematical-logic",
        "label": "Mathematical Logic"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:program-verification",
        "label": "Program Verification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:type-system",
        "label": "Type System"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:program-analysis",
        "label": "Program Analysis"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ]
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
  - Formal methods are mathematically rigorous techniques for the specification, development, and verification of software and hardware systems. They use formal logic, set theory, and automata to express system requirements precisely and to prove that an implementation satisfies them. In blockchain and smart-contract engineering, formal methods are applied to prove the absence of classes of bugs and to guarantee that contract behaviour matches its intended specification.
  - Related concepts: [[Formal Verification]] [[Model Checking]] [[Theorem Proving]] [[Mathematical Logic]] [[Smart Contract]]

- ### Overview
  - Formal methods replace testing's sampling of behaviours with proof over all behaviours. By giving a system a precise mathematical meaning, they let engineers state exactly what correctness means and then establish it deductively or by exhaustive exploration, which is especially valuable where bugs are irreversible, as in deployed smart contracts.

- ### Mechanisms
  - Formal specification expresses intended behaviour in a precise logical or algebraic notation.
  - Model checking exhaustively explores a finite-state model to verify temporal properties or produce a counterexample.
  - Theorem proving uses deductive logic, interactively or automatically, to prove properties over infinite state spaces.
  - Abstraction and refinement relate high-level specifications to concrete implementations while preserving guarantees.

- ### Applications
  - Verification of smart contracts and consensus protocols in blockchain systems.
  - Safety-critical control software in aerospace, rail, and medical devices.
  - Hardware design verification and compiler correctness.

- ### Relationships
  - uses:: [[Mathematical Logic]]
  - uses:: [[Temporal Logic]]
  - has-part:: [[Model Checking]]
  - has-part:: [[Theorem Proving]]
  - has-part:: [[Formal Specification]]
  - depends-on:: [[Mathematical Logic]]
  - enables:: [[Formal Verification]]
  - enables:: [[Program Verification]]
  - supports:: [[Smart Contract]]
  - supports:: [[Type System]]
  - bridges-to:: [[Smart Contract]]
  - bridges-to:: [[Program Analysis]]
  - related-to:: [[Formal Verification]]

- ### Provenance
  - updated:: 2026-06-15
  - attributed-to:: did:nostr:ontology-mesh
  - inference-rule:: GapMaterialisation
