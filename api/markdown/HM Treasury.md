public:: true

# HM Treasury
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a679cafa3e852e467763a1d15a1effba0a6c83a3e96fa2b92fb9980ff51a32aa",
  "@type": "Page",
  "vc:slug": "hm-treasury",
  "title": "HM Treasury",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
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
      "vc:value": "HM Treasury"
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
  "@id": "urn:ngm:class:hm-treasury",
  "@type": "Class",
  "label": "HM Treasury",
  "definition": "HM Treasury is the United Kingdom government department responsible for economic and financial policy, including taxation, public spending, and financial services regulation.",
  "domain": "government",
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
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hm-treasury:f4afd0b244a5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a679cafa3e852e467763a1d15a1effba0a6c83a3e96fa2b92fb9980ff51a32aa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
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
  - HM Treasury is the United Kingdom government department responsible for economic and financial policy, including taxation, public spending, and financial services regulation.

- ### Semantic Classification
  - owl-class:: government:HMTreasury
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Financial Regulation]]
  - enables:: [[Financial Regulation]]

- ### Content
  - HM Treasury is the United Kingdom's economics and finance ministry, led by the Chancellor of the Exchequer. It sets fiscal policy, manages public finances, and oversees the framework for financial services regulation.
  - It works with bodies including the Bank of England and the Financial Conduct Authority, and it has published proposals on the regulation of cryptoassets and stablecoins in the United Kingdom.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
