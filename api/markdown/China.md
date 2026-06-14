public:: true

# China
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f4855b114005dd0e2248c8748b21f92114fa091bb93f2bd7f811a75921538aa3",
  "@type": "Page",
  "vc:slug": "china",
  "title": "China",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:singapore",
      "vc:label": "Singapore"
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
      "vc:value": "China"
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
  "@id": "urn:ngm:class:china",
  "@type": "Class",
  "label": "China",
  "definition": "A country in East Asia and the world's most populous nation for much of recent history, with a large economy and significant influence in technology, manufacturing, and digital currency policy.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:china:50c0152c2952",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f4855b114005dd0e2248c8748b21f92114fa091bb93f2bd7f811a75921538aa3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Singapore]]",
      "resolved": "urn:visionflow:linked:singapore",
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
  - A country in East Asia and the world's most populous nation for much of recent history, with a large economy and significant influence in technology, manufacturing, and digital currency policy.

- ### Semantic Classification
  - owl-class:: geography:China
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Singapore]]

- ### Content
  - China is a sovereign state in East Asia with one of the largest economies in the world. It is a centre of manufacturing, technology development, and research across many fields.
  - Its central bank has developed a central bank digital currency, the digital yuan, and the country has taken a restrictive stance toward decentralised cryptocurrencies while pursuing state-led digital infrastructure.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
