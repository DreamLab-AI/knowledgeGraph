public:: true

# Traditional Banking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:31b6cf3e8f000416f0418f481016eb9237dfaf3863a5916545f36af0ef7cb6a6",
  "@type": "Page",
  "vc:slug": "traditional-banking",
  "title": "Traditional Banking",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:traditional-finance",
      "vc:label": "Traditional Finance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Traditional Banking"
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
  "@id": "urn:ngm:class:traditional-banking",
  "@type": "Class",
  "label": "Traditional Banking",
  "definition": "Traditional banking is the conventional system of deposit-taking, lending, and payment services provided by licensed banks operating under regulatory supervision.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:traditional-finance",
      "label": "Traditional Finance"
    }
  ],
  "relations": {
    "requires": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:traditional-banking:b84c6a3a1493",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:31b6cf3e8f000416f0418f481016eb9237dfaf3863a5916545f36af0ef7cb6a6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Traditional Finance]]",
      "resolved": "urn:visionflow:linked:traditional-finance",
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
  - Traditional banking is the conventional system of deposit-taking, lending, and payment services provided by licensed banks operating under regulatory supervision.

- ### Semantic Classification
  - owl-class:: finance:TraditionalBanking
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Traditional Finance]]
  - bridges-to:: [[Payment System]]
  - requires:: [[Financial Regulation]]

- ### Content
  - Traditional banking centres on accepting deposits, extending credit, and operating payment infrastructure. Banks act as intermediaries that hold customer funds, maintain ledgers of balances, and settle transfers between accounts.
  - Banks operate under capital and liquidity rules and supervision by regulators, and they connect to clearing and settlement systems that move funds between institutions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
