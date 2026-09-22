public:: true

# Securities Law

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:securities-law",
  "@type": "Page",
  "title": "Securities Law",
  "vc:slug": "securities-law",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:securities-law",
  "@type": "Class",
  "label": "Securities Law",
  "definition": "Securities law is the body of statutory and regulatory rules governing the issuance, sale, and trading of financial instruments classified as securities, with the aim of protecting investors and ensuring fair, transparent markets. It defines disclosure obligations, registration requirements, and anti-fraud provisions, and applies tests to determine when an instrument such as a token constitutes a security. In the digital-asset context it shapes whether token offerings must register and comply with investor-protection regimes.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-regulation",
      "label": "Financial Regulation"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:ico",
        "label": "ICO"
      },
      {
        "@id": "urn:ngm:class:security-token-offering",
        "label": "Security Token Offering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-token-offering",
        "label": "Security Token Offering"
      },
      {
        "@id": "urn:ngm:class:ico",
        "label": "ICO"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:howey-test",
        "label": "Howey Test"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:kyc-aml",
        "label": "KYC/AML"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:sec",
        "label": "SEC"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
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
  - Securities law is the body of statutory and regulatory rules governing the issuance, sale, and trading of financial instruments classified as securities, with the aim of protecting investors and ensuring fair, transparent markets. It defines disclosure obligations, registration requirements, and anti-fraud provisions, and applies tests to determine when an instrument such as a token constitutes a security. In the digital-asset context it shapes whether token offerings must register and comply with investor-protection regimes.
  - Related core concepts: [[Financial Regulation]] [[Howey Test]] [[Security Token Offering]] [[Investor Protection]] [[SEC]]
- ### Overview
  - Securities law balances capital formation against investor protection by mandating disclosure and prohibiting fraud and manipulation. Classification tests, most notably the Howey test in the United States, determine whether an arrangement is an investment contract and therefore a security. The rise of token offerings has forced regulators to apply these long-standing frameworks to novel digital instruments.
- ### Key aspects
  - Registration and disclosure obligations for issuers of securities
  - Anti-fraud and market-manipulation prohibitions protecting investors
  - Classification tests determining whether an instrument is a security
  - Exemptions and safe harbours for private placements and accredited investors
  - Enforcement by supervisory authorities with civil and criminal powers
- ### Applications
  - Determining whether a token offering must register or qualify for exemption
  - Structuring compliant security token offerings and private placements
  - Imposing investor-protection and disclosure duties on digital-asset issuers
  - Guiding exchanges on listing and trading of regulated instruments
- ### Relationships
  - relatedTo:: [[Financial Regulation]]
  - relatedTo:: [[ICO]]
  - relatedTo:: [[Security Token Offering]]
  - bridgesTo:: [[Security Token Offering]]
  - bridgesTo:: [[ICO]]
  - supports:: [[Investor Protection]]
  - supports:: [[Compliance]]
  - uses:: [[Howey Test]]
  - implements:: [[Regulatory Compliance]]
  - requires:: [[KYC/AML]]
  - requires:: [[Compliance]]
  - standardizedBy:: [[SEC]]
  - enables:: [[Investor Protection]]
  - partOf:: [[Financial Regulation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
