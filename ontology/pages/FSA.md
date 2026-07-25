public:: true

# FSA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f139b806dcbb1f0edbb14a45215f7e6d71d461ef28b6e5b8e23bc6da288e789d",
  "@type": "Page",
  "vc:slug": "fsa",
  "title": "FSA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FSA"
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
  "@id": "urn:ngm:class:fsa",
  "@type": "Class",
  "label": "FSA",
  "definition": "A financial regulatory authority, commonly the abbreviation for a national financial services agency that supervises banks, securities, and other financial institutions. The name refers to several distinct national regulators.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fsa:0832a11328c9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f139b806dcbb1f0edbb14a45215f7e6d71d461ef28b6e5b8e23bc6da288e789d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
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
  - A financial regulatory authority, commonly the abbreviation for a national financial services agency that supervises banks, securities, and other financial institutions. The name refers to several distinct national regulators.

- ### Semantic Classification
  - owl-class:: regulation:FSA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Financial Regulation]]
  - bridges-to:: [[Monetary Policy]]
  - requires:: [[Financial Regulation]]
  - enables:: [[Regulatory Compliance]]

- ### Content
  - FSA is an abbreviation used by several national financial regulators, including Japan's Financial Services Agency and the former Financial Services Authority of the United Kingdom, which was succeeded by the Financial Conduct Authority and the Prudential Regulation Authority in 2013.
  - Such authorities supervise financial institutions, enforce conduct and prudential rules, and increasingly issue guidance on digital assets and fintech within their jurisdictions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
