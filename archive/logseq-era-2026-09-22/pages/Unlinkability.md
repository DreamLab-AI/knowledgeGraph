public:: true

# Unlinkability

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:unlinkability",
  "@type": "Page",
  "title": "Unlinkability",
  "vc:slug": "unlinkability",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:unlinkability",
  "@type": "Class",
  "label": "Unlinkability",
  "definition": "Unlinkability is a privacy property that prevents an adversary from determining whether two or more items of interest, such as messages, transactions or sessions, are related to the same entity. It is a core goal of privacy-enhancing technologies and is achieved through techniques such as pseudonym rotation, mixing, blinding and zero-knowledge constructions. Unlinkability protects against profiling and correlation while still permitting legitimate use of a system.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-enhancing-technologies",
      "label": "Privacy-Enhancing Technologies"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:privacy-enhancing-technologies",
        "label": "Privacy-Enhancing Technologies"
      },
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:surveillance",
        "label": "Surveillance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:tor",
        "label": "Tor"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:privacy-enhancing-technologies",
        "label": "Privacy-Enhancing Technologies"
      },
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
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
  - Unlinkability is a privacy property that prevents an adversary from determining whether two or more items of interest, such as messages, transactions or sessions, are related to the same entity. It is a core goal of privacy-enhancing technologies and is achieved through techniques such as pseudonym rotation, mixing, blinding and zero-knowledge constructions. Unlinkability protects against profiling and correlation while still permitting legitimate use of a system.
  - Key related concepts: [[Privacy-Enhancing Technologies]] [[Pseudonymity]] [[Cryptography]] [[Zero-Knowledge Proof]] [[Privacy]]
- ### Overview
  - [[Unlinkability]] is situated within the security domain and is defined as a subclass of [[Privacy-Enhancing Technologies]].
  - It connects to the wider knowledge graph through 20 typed relations spanning structural, functional and contrastive predicates.
  - As a emerging concept, it represents established knowledge with stable terminology and well-understood boundaries.
- ### Key aspects
  - Relationship to [[Privacy-Enhancing Technologies]] situates this concept within its operational and conceptual context.
  - Relationship to [[Pseudonymity]] situates this concept within its operational and conceptual context.
  - Relationship to [[Cryptography]] situates this concept within its operational and conceptual context.
  - Relationship to [[Zero-Knowledge Proof]] situates this concept within its operational and conceptual context.
  - Relationship to [[Privacy]] situates this concept within its operational and conceptual context.
- ### Mechanisms
  - The concept is realised through its constituent parts and the standards, methods and dependencies enumerated in its relations.
  - It both requires upstream capabilities and enables downstream capabilities, forming part of a directed chain of dependencies in the graph.
- ### Applications
  - Practical use of [[Unlinkability]] appears wherever its enabled and supported concepts are deployed.
  - It is referenced by existing classes in the graph, anchoring those edges to a defined, rooted node.
- ### Relationships
  - partOf:: [[Privacy-Enhancing Technologies]]
  - partOf:: [[Privacy]]
  - requires:: [[Cryptography]]
  - requires:: [[Pseudonymity]]
  - implements:: [[Privacy]]
  - implements:: [[Data Protection]]
  - enables:: [[Privacy]]
  - enables:: [[Pseudonymity]]
  - enables:: [[Data Protection]]
  - uses:: [[Zero-Knowledge Proof]]
  - uses:: [[Onion Routing]]
  - uses:: [[Cryptography]]
  - supports:: [[Identity Management]]
  - supports:: [[Differential Privacy]]
  - dependsOn:: [[Cryptography]]
  - contrastsWith:: [[Surveillance]]
  - bridgesTo:: [[Tor]]
  - relatedTo:: [[Pseudonymity]]
  - relatedTo:: [[Privacy-Enhancing Technologies]]
  - relatedTo:: [[Differential Privacy]]
  - subClassOf:: [[Privacy-Enhancing Technologies]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
