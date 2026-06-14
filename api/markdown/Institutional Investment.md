public:: true

# Institutional Investment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:be2aeda1ef5174b425fa0fc01feabe4585e4e5de3ba0710ff5a897969404809d",
  "@type": "Page",
  "vc:slug": "institutional-investment",
  "title": "Institutional Investment",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-management",
      "vc:label": "Asset Management"
    },
    {
      "@id": "urn:visionflow:linked:cryptocurrency",
      "vc:label": "Cryptocurrency"
    },
    {
      "@id": "urn:visionflow:linked:institutional-economics",
      "vc:label": "Institutional Economics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Institutional Investment"
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
  "@id": "urn:ngm:class:institutional-investment",
  "@type": "Class",
  "label": "Institutional Investment",
  "definition": "The investment of pooled funds by organisations such as pension funds, insurers, endowments and asset managers on behalf of their beneficiaries or clients.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asset-management",
      "label": "Asset Management"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:asset-management",
        "label": "Asset Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
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
  "@id": "urn:visionflow:annotation:link-resolutions:institutional-investment:3f2c9e957a8d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:be2aeda1ef5174b425fa0fc01feabe4585e4e5de3ba0710ff5a897969404809d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Management]]",
      "resolved": "urn:visionflow:linked:asset-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency]]",
      "resolved": "urn:visionflow:linked:cryptocurrency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Economics]]",
      "resolved": "urn:visionflow:linked:institutional-economics",
      "kind": "StubLink"
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
  - The investment of pooled funds by organisations such as pension funds, insurers, endowments and asset managers on behalf of their beneficiaries or clients.

- ### Semantic Classification
  - owl-class:: general:InstitutionalInvestment
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Asset Management]]
  - bridges-to:: [[Institutional Economics]]
  - requires:: [[Asset Management]]
  - enables:: [[Cryptocurrency]]

- ### Content
  - Institutional investment is carried out by entities that manage large pools of capital, including pension funds, insurance companies, sovereign wealth funds, endowments and mutual funds. These investors allocate across asset classes according to mandates, risk tolerance and liability profiles.
  - Because of their scale, institutional investors influence market liquidity, governance and price formation, and their gradual entry into asset classes such as digital assets is often treated as a marker of market maturity.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
