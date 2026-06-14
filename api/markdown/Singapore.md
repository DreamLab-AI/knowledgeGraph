public:: true

# Singapore
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2b6bf9c2f542b04179fda7c24ccd4e9060dfa3bca3b09f9208d86d7fa93730aa",
  "@type": "Page",
  "vc:slug": "singapore",
  "title": "Singapore",
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
      "vc:value": "Singapore"
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
  "@id": "urn:ngm:class:singapore",
  "@type": "Class",
  "label": "Singapore",
  "definition": "A sovereign island city-state in Southeast Asia and a major financial and technology hub. It is known for its role in global trade, finance, and as a centre for fintech and digital asset regulation.",
  "domain": "finance",
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
  "@id": "urn:visionflow:annotation:link-resolutions:singapore:51e2a46721d1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2b6bf9c2f542b04179fda7c24ccd4e9060dfa3bca3b09f9208d86d7fa93730aa"
  },
  "vc:resolutions": [
    {
      "raw": "[[China]]",
      "resolved": "urn:visionflow:linked:china",
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
  - A sovereign island city-state in Southeast Asia and a major financial and technology hub. It is known for its role in global trade, finance, and as a centre for fintech and digital asset regulation.

- ### Semantic Classification
  - owl-class:: geography:Singapore
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[China]]

- ### Content
  - Singapore is a sovereign state located at the southern tip of the Malay Peninsula. It is a global financial centre and one of the busiest port cities in the world, with an economy oriented around trade, finance, and services.
  - Its financial regulator, the Monetary Authority of Singapore, has issued frameworks for digital payment tokens and stablecoins, making the country a notable jurisdiction for fintech and blockchain activity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
