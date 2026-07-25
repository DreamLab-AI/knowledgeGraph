public:: true

# BC-0480-kyc-requirements
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ae6ef318dc02ab3d11abb048acc4bf60b7644dc8e87379392681f21e547015ef",
  "@type": "Page",
  "vc:slug": "bc-0480-kyc-requirements",
  "title": "BC-0480-kyc-requirements",
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
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-compliance",
      "vc:label": "Regulatory Compliance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "BC-0480-kyc-requirements"
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
  "@id": "urn:ngm:class:bc-0480-kyc-requirements",
  "@type": "Class",
  "label": "BC-0480-kyc-requirements",
  "definition": "KYC requirements are the obligations placed on regulated firms to identify and verify their customers, assess risk and monitor activity as part of anti-money-laundering and counter-terrorist-financing controls.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:regulatory-compliance",
      "label": "Regulatory Compliance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:bc-0480-kyc-requirements:e0f8eba45b9f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ae6ef318dc02ab3d11abb048acc4bf60b7644dc8e87379392681f21e547015ef"
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
      "raw": "[[Know Your Customer]]",
      "resolved": "urn:visionflow:linked:know-your-customer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Compliance]]",
      "resolved": "urn:visionflow:linked:regulatory-compliance",
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
  - KYC requirements are the obligations placed on regulated firms to identify and verify their customers, assess risk and monitor activity as part of anti-money-laundering and counter-terrorist-financing controls.

- ### Semantic Classification
  - owl-class:: blockchain:BC0480kycrequirements
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Regulatory Compliance]]
  - bridges-to:: [[Know Your Customer]]
  - requires:: [[Identity Verification]]
  - enables:: [[Anti-Money Laundering]]

- ### Content
  - Know-your-customer (KYC) requirements are rules that compel regulated businesses to establish and verify the identity of their customers before and during a business relationship. They form part of customer due diligence within anti-money-laundering frameworks and require collecting identifying information and supporting evidence.
  - For crypto-asset service providers, KYC underpins transaction monitoring, sanctions screening and reporting of suspicious activity. The depth of checks is risk-based, with enhanced due diligence applied to higher-risk customers and transactions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
