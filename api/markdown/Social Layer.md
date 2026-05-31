public:: true

# Social Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:802994d0f091df83d01cb43946c706b52a7f72e465232a3695b55e1094e66157",
  "@type": "Page",
  "vc:slug": "social-layer",
  "title": "Social Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:institutional-layer",
      "vc:label": "Institutional Layer"
    },
    {
      "@id": "urn:visionflow:linked:governance-layer",
      "vc:label": "Governance Layer"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:linked:social-capital",
      "vc:label": "Social Capital"
    },
    {
      "@id": "urn:visionflow:linked:network-effect",
      "vc:label": "Network Effect"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Layer"
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
  "@id": "urn:ngm:class:social-layer",
  "@type": "Class",
  "label": "Social Layer",
  "definition": "The Social Layer is the cross-cutting stratum that represents the human relationships, norms, and communities that surround and use a system. It sits above the institutional structures that formalise it and informs governance and application design. It contains community norms, reputation, communication channels, and the informal conventions that shape behaviour.",
  "domain": "social",
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
        "@id": "urn:ngm:class:institutional-layer",
        "label": "Institutional Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:governance-layer",
        "label": "Governance Layer"
      },
      {
        "@id": "urn:ngm:class:application-layer",
        "label": "Application Layer"
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-layer:a33a11c81f4a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:802994d0f091df83d01cb43946c706b52a7f72e465232a3695b55e1094e66157"
  },
  "vc:resolutions": [
    {
      "raw": "[[Institutional Layer]]",
      "resolved": "urn:visionflow:linked:institutional-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Layer]]",
      "resolved": "urn:visionflow:linked:governance-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Capital]]",
      "resolved": "urn:visionflow:linked:social-capital",
      "kind": "StubLink"
    },
    {
      "raw": "[[Network Effect]]",
      "resolved": "urn:visionflow:linked:network-effect",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Social Layer is the cross-cutting stratum that represents the human relationships, norms, and communities that surround and use a system. It sits above the institutional structures that formalise it and informs governance and application design. It contains community norms, reputation, communication channels, and the informal conventions that shape behaviour.

- ### Semantic Classification
  - owl-class:: social:SocialLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Social Capital]], [[Network Effect]]
  - requires:: [[Institutional Layer]]
  - enables:: [[Governance Layer]], [[Application Layer]]

- ### Content
  - The Social Layer captures the human dimension of a system: the communities, norms, and relationships through which people actually engage with it. Typical members include community conventions, reputation and trust signals, communication channels, and the informal rules that govern acceptable behaviour. It is concerned with people rather than mechanism.
  - It requires the Institutional Layer that formalises some of these relationships into durable structures, and it enables the Governance Layer, which legitimises decisions through social acceptance, and the Application Layer, whose adoption depends on social dynamics.
  - The layer bridges to social capital and the network effect, concepts that explain how trust and participation accumulate. Healthy norms here are often decisive in whether a technically sound system succeeds in use.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
