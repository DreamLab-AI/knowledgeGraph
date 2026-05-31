public:: true

# Optimality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:24c7fef6ba4d0adaf196528d73326dfbb3680328a85944627cf6c0bea98856c0",
  "@type": "Page",
  "vc:slug": "optimality",
  "title": "Optimality",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:optimisation",
      "vc:label": "Optimisation"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    },
    {
      "@id": "urn:visionflow:linked:robustness",
      "vc:label": "Robustness"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Optimality"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optimality",
  "@type": "Class",
  "label": "Optimality",
  "definition": "The property of being the best achievable solution with respect to a defined objective and set of constraints, central to optimisation and decision problems.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:optimisation",
      "label": "Optimisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:optimality:658f8d7d1f81",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:24c7fef6ba4d0adaf196528d73326dfbb3680328a85944627cf6c0bea98856c0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Optimisation]]",
      "resolved": "urn:visionflow:linked:optimisation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robustness]]",
      "resolved": "urn:visionflow:linked:robustness",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The property of being the best achievable solution with respect to a defined objective and set of constraints, central to optimisation and decision problems.

- ### Semantic Classification
  - owl-class:: general:Optimality
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Optimisation]]
  - bridges-to:: [[Robustness]]
  - requires:: [[Optimisation]]
  - enables:: [[Game Theory]]

- ### Content
  - Optimality characterises a solution that maximises or minimises an objective function subject to constraints. Depending on context it may mean a global optimum, a local optimum or a notion such as Pareto optimality where no objective can improve without worsening another.
  - Establishing optimality requires a well-defined objective and feasible region, and proofs of optimality often rely on conditions such as convexity or duality. In multi-criteria and strategic settings, optimality is defined relative to trade-offs or equilibrium concepts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
