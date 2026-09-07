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
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
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
      "@id": "urn:visionflow:owl:class:virtual-society",
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
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:transaction-history",
        "label": "Transaction History"
      },
      {
        "@id": "urn:ngm:class:trust",
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
        "@id": "urn:ngm:class:community",
        "label": "Community Moderation"
      },
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "Trust Scoring"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:social-network-graph",
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
