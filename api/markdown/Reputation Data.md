public:: true

# Reputation Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:62e427c925aa60cc735c199673e7d74016dc072fbc056fbdbaf27c9380c44624",
  "@type": "Page",
  "vc:slug": "reputation-data",
  "title": "Reputation Data",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:behavioral-pattern",
      "vc:label": "Behavioral Pattern"
    },
    {
      "@id": "urn:visionflow:linked:community-moderation",
      "vc:label": "Community Moderation"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:feedback-score",
      "vc:label": "Feedback Score"
    },
    {
      "@id": "urn:visionflow:linked:fraud-detection",
      "vc:label": "Fraud Detection"
    },
    {
      "@id": "urn:visionflow:linked:open-reputation-protocol",
      "vc:label": "OpenReputation Protocol"
    },
    {
      "@id": "urn:visionflow:linked:social-graph",
      "vc:label": "Social Graph"
    },
    {
      "@id": "urn:visionflow:linked:timestamp-service",
      "vc:label": "Timestamp Service"
    },
    {
      "@id": "urn:visionflow:linked:transaction-history",
      "vc:label": "Transaction History"
    },
    {
      "@id": "urn:visionflow:linked:trust-indicator",
      "vc:label": "Trust Indicator"
    },
    {
      "@id": "urn:visionflow:linked:trust-scoring",
      "vc:label": "Trust Scoring"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "vc:label": "W3C Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:owl:class:access-control",
      "vc:label": "Access Control"
    },
    {
      "@id": "urn:visionflow:owl:class:audit-trail",
      "vc:label": "Audit Trail"
    },
    {
      "@id": "urn:visionflow:owl:class:data-storage",
      "vc:label": "Data Storage"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-provider",
      "vc:label": "Identity Provider"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-framework",
      "vc:label": "Trust Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society-domain",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20287"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reputation Data"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reputation-data",
  "@type": "Class",
  "label": "Reputation Data",
  "definition": "A structured dataset containing historical records of user behavior, transaction outcomes, peer feedback, and trust metrics used to calculate reputation scores in peer-to-peer systems and virtual communities.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:reputation-system",
      "label": "Reputation System"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:behavioral-pattern",
        "label": "Behavioral Pattern"
      },
      {
        "@id": "urn:ngm:class:feedback-score",
        "label": "Feedback Score"
      },
      {
        "@id": "urn:ngm:class:transaction-history",
        "label": "Transaction History"
      },
      {
        "@id": "urn:ngm:class:trust-indicator",
        "label": "Trust Indicator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:timestamp-service",
        "label": "Timestamp Service"
      },
      {
        "@id": "urn:ngm:class:data-storage",
        "label": "Data Storage"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-moderation",
        "label": "Community Moderation"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:trust-scoring",
        "label": "Trust Scoring"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:social-graph",
        "label": "Social Graph"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reputation-data:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:62e427c925aa60cc735c199673e7d74016dc072fbc056fbdbaf27c9380c44624"
  },
  "vc:resolutions": [
    {
      "raw": "[[Behavioral Pattern]]",
      "resolved": "urn:visionflow:linked:behavioral-pattern",
      "kind": "StubLink"
    },
    {
      "raw": "[[Community Moderation]]",
      "resolved": "urn:visionflow:linked:community-moderation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feedback Score]]",
      "resolved": "urn:visionflow:linked:feedback-score",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fraud Detection]]",
      "resolved": "urn:visionflow:linked:fraud-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[OpenReputation Protocol]]",
      "resolved": "urn:visionflow:linked:open-reputation-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Graph]]",
      "resolved": "urn:visionflow:linked:social-graph",
      "kind": "StubLink"
    },
    {
      "raw": "[[Timestamp Service]]",
      "resolved": "urn:visionflow:linked:timestamp-service",
      "kind": "StubLink"
    },
    {
      "raw": "[[Transaction History]]",
      "resolved": "urn:visionflow:linked:transaction-history",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Indicator]]",
      "resolved": "urn:visionflow:linked:trust-indicator",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Scoring]]",
      "resolved": "urn:visionflow:linked:trust-scoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "kind": "StubLink"
    },
    {
      "raw": "[[Access Control]]",
      "resolved": "urn:visionflow:owl:class:access-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit Trail]]",
      "resolved": "urn:visionflow:owl:class:audit-trail",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Storage]]",
      "resolved": "urn:visionflow:owl:class:data-storage",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:owl:class:identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation System]]",
      "resolved": "urn:visionflow:owl:class:reputation-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust Framework]]",
      "resolved": "urn:visionflow:owl:class:trust-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credentials",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A structured dataset containing historical records of user behavior, transaction outcomes, peer feedback, and trust metrics used to calculate reputation scores in peer-to-peer systems and virtual communities.

- ### Semantic Classification
  - owl-class:: spatial-computing:ReputationData
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualSocietyDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Transaction History]], [[Feedback Score]], [[Behavioral Pattern]], [[Trust Indicator]]
  - is-part-of:: [[Reputation System]], [[Trust Framework]], [[Social Graph]]
  - requires:: [[Data Storage]], [[Identity Provider]], [[Timestamp Service]]
  - enables:: [[Trust Scoring]], [[Fraud Detection]], [[Access Control]], [[Community Moderation]]
  - depends-on:: [[Verifiable Credentials]], [[Cryptographic Signature]], [[Audit Trail]]

- ### Content
  Reputation Data — content pending enrichment.

- ### Provenance
  - sources:: [[W3C Verifiable Credentials]], [[OpenReputation Protocol]]
  - migration-date:: 2026-04-26T00:00:00Z
