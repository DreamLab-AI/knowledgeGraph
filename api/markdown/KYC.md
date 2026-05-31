public:: true

# KYC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6895b775af7de0c9dd1899747bd9967cfdee5a71248b9e5ea37578ab6c26944",
  "@type": "Page",
  "vc:slug": "kyc",
  "title": "KYC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-verification",
      "vc:label": "Identity Verification"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:compliance",
      "vc:label": "Compliance"
    },
    {
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:financial-regulation",
      "vc:label": "Financial Regulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "KYC"
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
  "@id": "urn:ngm:class:kyc",
  "@type": "Class",
  "label": "KYC",
  "definition": "Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:identity-verification",
      "label": "Identity Verification"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:kyc:84a9ceb1ee3a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6895b775af7de0c9dd1899747bd9967cfdee5a71248b9e5ea37578ab6c26944"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Verification]]",
      "resolved": "urn:visionflow:linked:identity-verification",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compliance]]",
      "resolved": "urn:visionflow:linked:compliance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Know Your Customer]]",
      "resolved": "urn:visionflow:linked:know-your-customer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Regulation]]",
      "resolved": "urn:visionflow:linked:financial-regulation",
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
  - Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship.

- ### Semantic Classification
  - owl-class:: governance:KYC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Identity Verification]]
  - bridges-to:: [[Know Your Customer]], [[Financial Regulation]]
  - requires:: [[Identity Verification]], [[Anti-Money Laundering]]
  - enables:: [[Compliance]]

- ### Content
  - Know Your Customer procedures require regulated entities such as banks and financial service providers to identify and verify their customers, understand the nature of their activities and assess the risk of illicit use. These procedures support anti-money laundering and counter-terrorist financing obligations.
  - KYC typically involves collecting identifying documents, screening against sanctions and politically exposed person lists, and ongoing monitoring of transactions. Requirements vary by jurisdiction and by the risk profile of the customer and product.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
