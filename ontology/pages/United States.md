public:: true

# United States
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:27f9fef41636dfeae5a88f0f998c004801b6fd2a5bcf87dfdd3ca39ac4199e57",
  "@type": "Page",
  "vc:slug": "united-states",
  "title": "United States",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:china",
      "vc:label": "China"
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
      "vc:value": "United States"
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
  "@id": "urn:ngm:class:united-states",
  "@type": "Class",
  "label": "United States",
  "definition": "A federal republic in North America and one of the world's largest economies, with a leading role in technology, finance, and research. It comprises fifty states and a federal district.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:china", "label": "China"},
      {"@id": "urn:ngm:class:digital-governance", "label": "Digital Governance"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:united-states:abafa4e09c01",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:27f9fef41636dfeae5a88f0f998c004801b6fd2a5bcf87dfdd3ca39ac4199e57"
  },
  "vc:resolutions": [
    {
      "raw": "[[China]]",
      "resolved": "urn:visionflow:linked:china",
      "kind": "ResolvedLink"
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
  - A federal republic in North America and one of the world's largest economies, with a leading role in technology, finance, and research. It comprises fifty states and a federal district.

- ### Semantic Classification
  - owl-class:: geography:UnitedStates
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[China]]
  - related-to:: [[Digital Governance]]

- ### Content
  - The United States is a federal republic of fifty states in North America. It has the largest national economy in the world by nominal output and is a centre of technology, finance, and academic research.
  - Its financial markets, regulators, and technology companies play a significant role in global standards for computing, artificial intelligence, and digital assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
