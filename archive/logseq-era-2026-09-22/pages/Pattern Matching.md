public:: true

# Pattern Matching
```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:pattern-matching", "@type": "Page", "title": "Pattern Matching", "vc:slug": "pattern-matching", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pattern-matching",
  "@type": "Class",
  "label": "Pattern Matching",
  "definition": "Pattern matching is the act of checking a sequence or structure against a pattern to detect the presence of constituent components, and, in programming languages, of binding variables to parts of the matched structure. In symbolic AI and computation it underpins rule firing, unification, and term rewriting; in software it provides a declarative way to deconstruct data by shape. It contrasts with statistical pattern recognition by operating on exact, often symbolic, structure rather than learned probabilistic similarity.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      },
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite-State Machine"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      },
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite-State Machine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pattern-recognition",
        "label": "Pattern Recognition"
      },
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:regular-expression",
        "label": "Regular Expression"
      },
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite-State Machine"
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
  - [[Pattern Matching]] is defined in relation to [[Artificial Intelligence]], [[Regular Expression]], [[Symbolic AI]], [[Pattern Recognition]], building on [[Artificial Intelligence]].
  - Pattern matching is the act of checking a sequence or structure against a pattern to detect the presence of constituent components, and, in programming languages, of binding variables to parts of the matched structure. In symbolic AI and computation it underpins rule firing, unification, and term rewriting; in software it provides a declarative way to deconstruct data by shape. It contrasts with statistical pattern recognition by operating on exact, often symbolic, structure rather than learned probabilistic similarity.

- ### Overview
  - In its classical sense, pattern matching tests whether an input conforms to a pattern and, on success, extracts the matched parts. Regular expressions match string patterns via finite automata; term matching and unification match tree-structured terms in logic programming and rewriting systems.
  - Modern programming languages expose pattern matching as a first-class construct: destructuring tuples, records, and algebraic data types, with guards and exhaustiveness checking. This yields concise, declarative code whose correctness the compiler can partly verify.

- ### Mechanisms
  - String matching via finite-state machines and regular expressions, including backtracking and DFA approaches.
  - Structural matching of terms and trees, with variable binding and, in logic systems, full unification.
  - Exhaustiveness and guard analysis in typed languages to ensure all cases are handled.

- ### Applications
  - Lexing, parsing, and text processing; configuration and protocol parsing.
  - Rule-based and expert systems where conditions match working-memory facts.
  - Functional and ML-family language control flow over algebraic data types.

- ### Relationships
  - subClassOf:: [[Artificial Intelligence]]
  - contrastsWith:: [[Pattern Recognition]]
  - uses:: [[Regular Expression]]
  - uses:: [[Finite-State Machine]]
  - hasPart:: [[Regular Expression]]
  - hasPart:: [[Finite-State Machine]]
  - enables:: [[Symbolic AI]]
  - supports:: [[Symbolic AI]]
  - implements:: [[Algorithm]]
  - partOf:: [[Artificial Intelligence]]
  - requires:: [[Algorithm]]
  - relatedTo:: [[Pattern Recognition]]
  - relatedTo:: [[Symbolic AI]]
  - relatedTo:: [[Regular Expression]]
  - relatedTo:: [[Finite-State Machine]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
