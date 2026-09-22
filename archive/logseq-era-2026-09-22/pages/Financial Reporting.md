public:: true

# Financial Reporting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:financial-reporting",
  "@type": "Page",
  "title": "Financial Reporting",
  "vc:slug": "financial-reporting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:financial-reporting",
  "@type": "Class",
  "label": "Financial Reporting",
  "definition": "Financial reporting is the structured disclosure of an organisation's financial position, performance, and cash flows to stakeholders through standardised statements and supporting notes. It rests on recognised accounting frameworks and audit assurance to provide a faithful, comparable, and verifiable view of economic activity. In blockchain and decentralised contexts, financial reporting extends to on-chain transparency, proof-of-reserves attestations, and the accounting treatment of digital assets and tokenised value.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    },
    {
      "@id": "urn:ngm:class:bc-governance-and-regulation",
      "label": "Governance and Regulation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:disclosure-requirements",
        "label": "Disclosure Requirements"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:audit",
        "label": "Audit"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:proof-of-reserves",
        "label": "Proof Of Reserves"
      },
      {
        "@id": "urn:ngm:class:disclosure-requirements",
        "label": "Disclosure Requirements"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:taxation",
        "label": "Taxation"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:proof-of-reserves",
        "label": "Proof Of Reserves"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Financial reporting underpins [[Treasury Management]] and [[Transparency]] across [[Blockchain]] organisations.
  - It requires [[Compliance]], [[Regulatory Compliance]], and independent [[Audit]] assurance.
  - It increasingly uses [[Proof Of Reserves]] attestations and relates to [[Tokenomics]] and [[Taxation]].
- ### Overview
  - Financial reporting translates raw transactions into standardised statements of position, performance, and cash flow that external parties can interpret and compare.
  - Its credibility depends on adherence to accounting standards, internal controls, and independent audit assurance.
  - Blockchain introduces continuous, cryptographically verifiable transparency, allowing reserves and balances to be attested directly on-chain alongside conventional reporting.
- ### Key aspects
  - Recognition, measurement, and presentation of assets, liabilities, income, and expenses.
  - Disclosure of accounting policies, risks, and material events in supporting notes.
  - Audit and assurance processes that validate the faithfulness of reported figures.
  - On-chain attestations such as proof-of-reserves that complement traditional statements for digital-asset entities.
- ### Applications
  - Corporate annual reports and regulatory filings for listed entities.
  - Treasury reporting and disclosures for decentralised organisations and protocols.
  - Proof-of-reserves and on-chain transparency for exchanges and stablecoin issuers.
- ### Relationships
  - hasPart:: [[Disclosure]]
  - hasPart:: [[Audit]]
  - partOf:: [[Blockchain]]
  - requires:: [[Compliance]]
  - requires:: [[Regulatory Compliance]]
  - requires:: [[Audit]]
  - enables:: [[Transparency]]
  - enables:: [[Treasury Management]]
  - uses:: [[Proof Of Reserves]]
  - uses:: [[Disclosure]]
  - supports:: [[Transparency]]
  - supports:: [[Treasury Management]]
  - dependsOn:: [[Compliance]]
  - relatedTo:: [[Tokenomics]]
  - relatedTo:: [[Taxation]]
  - relatedTo:: [[Regulatory Compliance]]
  - bridgesTo:: [[Proof Of Reserves]]
  - subClassOf:: [[Blockchain]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
