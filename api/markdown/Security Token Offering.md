public:: true

# Security Token Offering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d7fac6d47bad7bc287a079ec79896bf3537dfbc8399c0b6624d1891023a4256f",
  "@type": "Page",
  "vc:slug": "security-token-offering",
  "title": "Security Token Offering",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9683"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Security Token Offering"
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
  "@id": "urn:ngm:class:security-token-offering",
  "@type": "Class",
  "label": "Security Token Offering",
  "definition": "A Security Token Offering (STO) is a regulated fundraising mechanism in which blockchain-based tokens representing ownership rights, revenue shares, or other financial entitlements are offered to investors under applicable securities law. Unlike utility token sales, STOs require issuer compliance with financial regulation, investor accreditation, and prospectus or exemption filings, bringing traditional capital market discipline to tokenised asset issuance.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:financial-regulation", "label": "Financial Regulation"},
      {"@id": "urn:ngm:class:regulatory-compliance", "label": "Regulatory Compliance"},
      {"@id": "urn:ngm:class:identity-verification", "label": "Identity Verification"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:security-token", "label": "Security Token"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:asset-tokenization", "label": "Asset Tokenization"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:security-token-offering:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d7fac6d47bad7bc287a079ec79896bf3537dfbc8399c0b6624d1891023a4256f"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - A Security Token Offering (STO) is a regulated fundraising mechanism in which blockchain-based tokens representing ownership rights, revenue shares, or other financial entitlements are offered to investors under applicable securities law. Unlike utility token sales, STOs require issuer compliance with financial regulation, investor accreditation, and prospectus or exemption filings, bringing traditional capital market discipline to tokenised asset issuance.

- ### Semantic Classification
  - owl-class:: spatial-computing:SecurityTokenOffering
  - owl-role:: concept

- ### Relationships
  - requires [[Financial Regulation]]
  - requires [[Regulatory Compliance]]
  - requires [[Identity Verification]]
  - uses [[Security Token]]
  - uses [[Smart Contract]]
  - relatedTo [[Asset Tokenization]]
  - relatedTo [[Digital Asset]]

- ### Content

  ## Overview

  A Security Token Offering represents a compliant fundraising route for tokenised securities on a blockchain. Issuers must satisfy applicable financial regulation (such as Reg D, Reg S, or EU prospectus rules), implement KYC/AML via identity verification providers, and embed transfer restrictions into the token's smart contract logic. Security tokens may represent equity in a company, debt instruments, revenue participation rights, or fractionalised real-world assets such as real estate. Smart contracts automate cap-table management, dividend distribution, and compliance checks at transfer time. Asset tokenisation via STOs unlocks liquidity for traditionally illiquid assets and enables fractional ownership, broadening investor access. Regulatory compliance frameworks vary significantly across jurisdictions, making cross-border STOs complex but increasingly addressed by regulatory sandboxes and emerging token-specific legislation.

  #### Related Concepts
  - [[Financial Regulation]]
  - [[Regulatory Compliance]]
  - [[Identity Verification]]
  - [[Security Token]]
  - [[Smart Contract]]
  - [[Asset Tokenization]]
  - [[Digital Asset]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
