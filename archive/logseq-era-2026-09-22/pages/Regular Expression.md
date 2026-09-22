public:: true

# Regular Expression

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:regular-expression",
  "@type": "Page",
  "title": "Regular Expression",
  "vc:slug": "regular-expression",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:regular-expression",
  "@type": "Class",
  "label": "Regular Expression",
  "definition": "A regular expression is a formal notation for describing sets of strings using a concise pattern language built from literals, character classes, quantifiers, and grouping. Regular expressions describe exactly the class of regular languages and are typically implemented by compiling the pattern into a finite-state machine for efficient matching. They are a foundational tool for searching, validating, and transforming text.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:formal-language",
      "label": "Formal Language"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:formal-language",
        "label": "Formal Language"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite State Machine"
      },
      {
        "@id": "urn:ngm:class:automata-theory",
        "label": "Automata Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:formal-language",
        "label": "Formal Language"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      },
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite State Machine"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:automata-theory",
        "label": "Automata Theory"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:posix",
        "label": "POSIX"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:compiler",
        "label": "Compiler"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:finite-state-machine",
        "label": "Finite State Machine"
      },
      {
        "@id": "urn:ngm:class:programming-language",
        "label": "Programming Language"
      },
      {
        "@id": "urn:ngm:class:algorithm",
        "label": "Algorithm"
      },
      {
        "@id": "urn:ngm:class:data-validation",
        "label": "Data Validation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:regex",
      "label": "Regex"
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
  - A regular expression is a formal notation for describing sets of strings using a concise pattern language built from literals, character classes, quantifiers, and grouping. Regular expressions describe exactly the class of regular languages and are typically implemented by compiling the pattern into a finite-state machine for efficient matching. They are a foundational tool for searching, validating, and transforming text.
  - [[Formal Language]] [[Finite State Machine]] [[Compiler]]
- ### Overview
  - Regular expressions originate from the theory of regular languages and are equivalent in expressive power to deterministic and nondeterministic finite automata.
  - Practical regex engines extend the pure formalism with features such as backreferences and lookaround, some of which exceed the regular-language class.
  - Matching can be performed by simulating an automaton (linear time) or by backtracking (potentially exponential time on adversarial inputs).
- ### Mechanisms
  - The pattern is compiled into a nondeterministic finite automaton, optionally converted to a deterministic one.
  - Quantifiers, character classes, anchors, and groups define how the pattern consumes input.
  - Greedy and lazy matching control how much input a quantifier consumes.
  - Captured groups extract substrings for downstream processing or substitution.
- ### Applications
  - Input validation for fields such as email addresses, identifiers, and structured codes.
  - Lexical analysis in compilers and interpreters.
  - Search-and-replace operations in editors, log processing, and data cleaning pipelines.
- ### Relationships
  - partOf:: [[Formal Language]]
  - uses:: [[Finite State Machine]]
  - uses:: [[Automata Theory]]
  - implements:: [[Formal Language]]
  - enables:: [[Compiler]]
  - enables:: [[Data Validation]]
  - supports:: [[Compiler]]
  - supports:: [[Natural Language Processing]]
  - requires:: [[Finite State Machine]]
  - dependsOn:: [[Automata Theory]]
  - standardizedBy:: [[POSIX]]
  - contrastsWith:: [[Compiler]]
  - relatedTo:: [[Finite State Machine]]
  - relatedTo:: [[Programming Language]]
  - relatedTo:: [[Algorithm]]
  - relatedTo:: [[Data Validation]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
