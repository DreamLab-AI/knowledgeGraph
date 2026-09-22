public:: true

# Formal Logic
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:formal-logic", "@type": "Page", "title": "Formal Logic", "vc:slug": "formal-logic", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:formal-logic",
  "@type": "Class",
  "label": "Formal Logic",
  "definition": "Formal logic is the study of inference using precisely defined symbolic languages and rules, abstracting valid reasoning patterns from the content of particular arguments. It specifies syntax for well-formed formulae and semantics that assign truth conditions, enabling proofs to be checked mechanically. In artificial intelligence it underpins knowledge representation, automated reasoning and the verification of systems.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:logic",
      "label": "Logic"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:description-logic",
        "label": "Description Logic"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ontology",
        "label": "Ontology"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:logic",
        "label": "Logic"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      },
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
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
  - Formal Logic is rooted in Logic and relates to [[Symbolic AI]], [[Knowledge Representation]], [[Description Logic]]. Formal logic is the study of inference using precisely defined symbolic languages and rules, abstracting valid reasoning patterns from the content of particular arguments.

- ### Overview
  - Formal logic isolates the structure of valid inference, expressing arguments in symbolic languages whose syntax and semantics are precisely defined.
  - Propositional and predicate logics provide the canonical systems, with rules of inference that preserve truth from premises to conclusions.
  - Because proofs reduce to symbol manipulation, validity can be checked mechanically, a property central to automated reasoning.

- ### Key aspects
  - A formal language defines well-formed formulae from atomic symbols and connectives.
  - A semantics assigns truth conditions, often via interpretations or models.
  - Inference rules and axioms specify which formulae may be derived from others.
  - Soundness and completeness relate provability to semantic truth within the system.

- ### Applications
  - Knowledge representation and ontology reasoning in artificial intelligence.
  - Automated theorem proving and proof assistants.
  - Formal verification of hardware and software correctness.
  - Specification of query languages and rule systems.

- ### Relationships
  - subClassOf:: [[Logic]]
  - uses:: [[Description Logic]]
  - uses:: [[Reasoning]]
  - requires:: [[Knowledge Representation]]
  - enables:: [[Automated Reasoning]]
  - enables:: [[Inference]]
  - supports:: [[Symbolic AI]]
  - supports:: [[Formal Verification]]
  - implements:: [[Ontology]]
  - dependsOn:: [[Logic]]
  - contrastsWith:: [[Artificial Intelligence]]
  - relatedTo:: [[Knowledge Representation]]
  - relatedTo:: [[Symbolic AI]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
