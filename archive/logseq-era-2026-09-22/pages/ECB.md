public:: true

# ECB
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a327da01500f39109206bb5a3a2615c9186a4f601b12a94217ea618a5f31340d",
  "@type": "Page",
  "vc:slug": "ecb",
  "title": "ECB",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:central-bank",
      "vc:label": "Central Bank"
    },
    {
      "@id": "urn:visionflow:linked:monetary-policy",
      "vc:label": "Monetary Policy"
    },
    {
      "@id": "urn:visionflow:linked:financial-stability",
      "vc:label": "Financial Stability"
    },
    {
      "@id": "urn:visionflow:linked:financial-system",
      "vc:label": "Financial System"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ECB"
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
  "@id": "urn:ngm:class:ecb",
  "@type": "Class",
  "label": "ECB",
  "definition": "The European Central Bank, the central bank responsible for monetary policy across the member states that use the euro and for supervisory functions within the banking union.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:central-bank",
      "label": "Central Bank"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:central-bank",
        "label": "Central Bank"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:monetary-policy",
        "label": "Monetary Policy"
      },
      {
        "@id": "urn:ngm:class:financial-stability",
        "label": "Financial Stability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ecb:36dacb8a0506",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a327da01500f39109206bb5a3a2615c9186a4f601b12a94217ea618a5f31340d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Central Bank]]",
      "resolved": "urn:visionflow:linked:central-bank",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Monetary Policy]]",
      "resolved": "urn:visionflow:linked:monetary-policy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial Stability]]",
      "resolved": "urn:visionflow:linked:financial-stability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Financial System]]",
      "resolved": "urn:visionflow:linked:financial-system",
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
  - The European Central Bank, the central bank responsible for monetary policy across the member states that use the euro and for supervisory functions within the banking union.

- ### Semantic Classification
  - owl-class:: governance:ECB
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Central Bank]]
  - bridges-to:: [[Financial System]]
  - requires:: [[Central Bank]]
  - enables:: [[Monetary Policy]], [[Financial Stability]]

- ### Content
  - The European Central Bank conducts monetary policy for the euro area with the primary objective of maintaining price stability. It manages the issuance of the euro and operates the principal instruments of monetary policy.
  - Through the Single Supervisory Mechanism the bank also carries out prudential supervision of significant credit institutions in participating states. It contributes to financial stability and to the smooth operation of payment systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
