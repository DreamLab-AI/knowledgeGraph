public:: true

# Static Analysis

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:static-analysis",
  "@type": "Page",
  "title": "Static Analysis",
  "vc:slug": "static-analysis",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:static-analysis",
  "@type": "Class",
  "label": "Static Analysis",
  "definition": "Static analysis is the examination of software source code, byte code or binaries without executing the program, in order to detect defects, security vulnerabilities, style violations and correctness properties. Techniques range from simple pattern-based linting to formal abstract interpretation and data-flow analysis over the program's control structure. It is commonly integrated into editors and continuous-integration pipelines to provide early feedback before code runs.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:software-testing",
      "label": "Software Testing"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      },
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:software-testing",
        "label": "Software Testing"
      },
      {
        "@id": "urn:ngm:class:code-review",
        "label": "Code Review"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verification",
        "label": "Verification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      },
      {
        "@id": "urn:ngm:class:security-audit",
        "label": "Security Audit"
      },
      {
        "@id": "urn:ngm:class:testing",
        "label": "Testing"
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
  - Static analysis is the examination of software source code, byte code or binaries without executing the program, in order to detect defects, security vulnerabilities, style violations and correctness properties. Techniques range from simple pattern-based linting to formal abstract interpretation and data-flow analysis over the program's control structure. It is commonly integrated into editors and continuous-integration pipelines to provide early feedback before code runs.
  - Related concepts: [[Software Testing]] [[Compiler]] [[Formal Verification]] [[Code Review]] [[Security Audit]]
- ### Overview
  - Static analysis inspects a program's structure rather than its runtime behaviour, allowing defects to be found without test inputs.
  - It complements dynamic testing by reasoning about all possible execution paths through control-flow and data-flow abstractions.
  - Modern tooling embeds static analysis directly into editors and continuous-integration systems for immediate developer feedback.
- ### Mechanisms
  - Pattern-based linters flag stylistic and common-error constructs using syntactic rules.
  - Abstract interpretation soundly over-approximates program states to prove the absence of whole classes of bugs.
  - Data-flow and taint analysis track how values propagate to detect injection and information-leak vulnerabilities.
  - Type checking and [[Formal Verification]] extend analysis toward provable correctness guarantees.
- ### Applications
  - Automated [[Code Review]] gates that block defective changes before merge.
  - [[Security Audit]] pipelines that surface vulnerable patterns in source code.
  - Compiler-integrated diagnostics that improve [[Code Generation]] quality.
  - Quality enforcement within [[Software Testing]] workflows.
- ### Relationships
  - subClassOf:: [[Software Testing]]
  - contrastsWith:: [[Simulation]]
  - bridgesTo:: [[Formal Verification]]
  - bridgesTo:: [[Compiler]]
  - enables:: [[Code Review]]
  - enables:: [[Security Audit]]
  - uses:: [[Compiler]]
  - uses:: [[Code Generation]]
  - supports:: [[Software Testing]]
  - supports:: [[Code Review]]
  - requires:: [[Compiler]]
  - implements:: [[Verification]]
  - relatedTo:: [[Formal Verification]]
  - relatedTo:: [[Security Audit]]
  - relatedTo:: [[Testing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
