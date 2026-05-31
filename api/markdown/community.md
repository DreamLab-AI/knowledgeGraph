public:: true

# community
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3348cf64a1becc86baedbc32d8d180a90e2f40c1b3afc64b78423c0d39ce7401",
  "@type": "Page",
  "vc:slug": "community",
  "title": "community",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:open-source",
      "vc:label": "open source"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
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
      "vc:value": "community"
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
  "@id": "urn:ngm:class:community",
  "@type": "Class",
  "label": "community",
  "definition": "A community is a group of people who interact around a shared interest, project, or platform, contributing to its development, governance, or use.",
  "domain": "social",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:open-source",
        "label": "open source"
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
  "@id": "urn:visionflow:annotation:link-resolutions:community:f354ee99e2bc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3348cf64a1becc86baedbc32d8d180a90e2f40c1b3afc64b78423c0d39ce7401"
  },
  "vc:resolutions": [
    {
      "raw": "[[open source]]",
      "resolved": "urn:visionflow:linked:open-source",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
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
  - A community is a group of people who interact around a shared interest, project, or platform, contributing to its development, governance, or use.

- ### Semantic Classification
  - owl-class:: social:community
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Governance]]
  - enables:: [[open source]]

- ### Content
  - Communities form around open source software, online platforms, and shared technical interests, coordinating through forums, repositories, and messaging channels. Contribution norms and moderation shape how members participate.
  - In open source and protocol projects, the community often participates in governance, prioritising features, reviewing changes, and in some cases voting on decisions about the project's direction.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
