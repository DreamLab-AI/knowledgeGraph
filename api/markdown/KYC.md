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
  "definition": "Know Your Customer, the set of procedures by which a regulated entity verifies the identity of its clients and assesses associated risks before and during a business relationship, forming a cornerstone of anti-money laundering and counter-terrorist financing compliance frameworks.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:identity-verification",
    "label": "Identity Verification"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:anti-money-laundering",
        "label": "Anti-Money Laundering"
      },
      {
        "@id": "urn:ngm:class:customer-due-diligence",
        "label": "Customer Due Diligence"
      },
      {
        "@id": "urn:ngm:class:document-verification",
        "label": "Document Verification"
      },
      {
        "@id": "urn:ngm:class:sanctions-screening",
        "label": "Sanctions Screening"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:risk-management",
        "label": "Risk Management"
      },
      {
        "@id": "urn:ngm:class:counter-terrorist-financing",
        "label": "Counter-Terrorist Financing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:customer-identification-program",
        "label": "Customer Identification Program"
      },
      {
        "@id": "urn:ngm:class:enhanced-due-diligence",
        "label": "Enhanced Due Diligence"
      },
      {
        "@id": "urn:ngm:class:politically-exposed-person-screening",
        "label": "Politically Exposed Person Screening"
      },
      {
        "@id": "urn:ngm:class:transaction-monitoring",
        "label": "Transaction Monitoring"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:biometric-authentication",
        "label": "Biometric Authentication"
      },
      {
        "@id": "urn:ngm:class:optical-character-recognition",
        "label": "Optical Character Recognition"
      },
      {
        "@id": "urn:ngm:class:risk-scoring",
        "label": "Risk Scoring"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:financial-action-task-force",
        "label": "Financial Action Task Force"
      },
      {
        "@id": "urn:ngm:class:bank-secrecy-act",
        "label": "Bank Secrecy Act"
      },
      {
        "@id": "urn:ngm:class:eu-anti-money-laundering-directive",
        "label": "EU Anti-Money Laundering Directive"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:privacy-preserving-protocol",
        "label": "Privacy-Preserving Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self-Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:aml-cft",
        "label": "AML/CFT"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:know-your-customer",
      "label": "Know Your Customer"
    },
    {
      "@id": "urn:ngm:class:customer-identification",
      "label": "Customer Identification"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
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
