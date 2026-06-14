public:: true

# Identifier Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8e237dc19e3eb1f2923a1814c544fb1f0c88ef0b5344a09ef7d09cdc9289378",
  "@type": "Page",
  "vc:slug": "identifier-layer",
  "title": "Identifier Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-layer",
      "vc:label": "Cryptographic Layer"
    },
    {
      "@id": "urn:visionflow:linked:identity-layer",
      "vc:label": "Identity Layer"
    },
    {
      "@id": "urn:visionflow:linked:custody-layer",
      "vc:label": "Custody Layer"
    },
    {
      "@id": "urn:visionflow:linked:uniform-resource-identifier",
      "vc:label": "Uniform Resource Identifier"
    },
    {
      "@id": "urn:visionflow:linked:namespace",
      "vc:label": "Namespace"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:w-3-c-world-wide-web-consortium",
      "vc:label": "W3C (World Wide Web Consortium)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Identifier Layer"
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
  "@id": "urn:ngm:class:identifier-layer",
  "@type": "Class",
  "label": "Identifier Layer",
  "definition": "The Identifier Layer is the stratum that defines and manages the names and references used to denote entities unambiguously. It sits above the data and cryptographic primitives that make identifiers durable and verifiable and below the Identity Layer that binds meaning to them. It contains naming schemes, resolution mechanisms, and uniqueness guarantees.",
  "domain": "security",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:data-layer",
        "label": "Data Layer"
      },
      {
        "@id": "urn:ngm:class:cryptographic-layer",
        "label": "Cryptographic Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-layer",
        "label": "Identity Layer"
      },
      {
        "@id": "urn:ngm:class:custody-layer",
        "label": "Custody Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:identifier-layer:0b50ecb111a3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8e237dc19e3eb1f2923a1814c544fb1f0c88ef0b5344a09ef7d09cdc9289378"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:linked:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Layer]]",
      "resolved": "urn:visionflow:linked:cryptographic-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Layer]]",
      "resolved": "urn:visionflow:linked:identity-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Layer]]",
      "resolved": "urn:visionflow:linked:custody-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Uniform Resource Identifier]]",
      "resolved": "urn:visionflow:linked:uniform-resource-identifier",
      "kind": "StubLink"
    },
    {
      "raw": "[[Namespace]]",
      "resolved": "urn:visionflow:linked:namespace",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[W3C (World Wide Web Consortium)]]",
      "resolved": "urn:visionflow:linked:w-3-c-world-wide-web-consortium",
      "kind": "StubLink"
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
  - The Identifier Layer is the stratum that defines and manages the names and references used to denote entities unambiguously. It sits above the data and cryptographic primitives that make identifiers durable and verifiable and below the Identity Layer that binds meaning to them. It contains naming schemes, resolution mechanisms, and uniqueness guarantees.

- ### Semantic Classification
  - owl-class:: id:IdentifierLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Uniform Resource Identifier]], [[Namespace]]
  - requires:: [[Data Layer]], [[Cryptographic Layer]]
  - enables:: [[Identity Layer]], [[Custody Layer]]

- ### Content
  - The Identifier Layer provides the systematic names by which entities are referred to without ambiguity. Typical members include naming and addressing schemes, resolution and lookup services, uniqueness and collision-avoidance mechanisms, and the rules for minting and retiring identifiers. It is concerned with denotation, not with what an entity is.
  - It requires the Data Layer to persist identifier records and the Cryptographic Layer where identifiers must be verifiable or self-certifying. It enables the Identity Layer, which attaches verified meaning to identifiers, and the Custody Layer, which references assets by them.
  - The layer bridges to the uniform resource identifier and the concept of a namespace, which structure how names are scoped and resolved. Stability and uniqueness guaranteed here are prerequisites for trustworthy reference everywhere above.

- ### Provenance
  - sources:: [[W3C (World Wide Web Consortium)]]
  - migration-date:: 2026-05-29T00:00:00Z
