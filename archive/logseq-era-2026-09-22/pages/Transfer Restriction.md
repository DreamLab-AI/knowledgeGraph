public:: true

# Transfer Restriction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:transfer-restriction",
  "@type": "Page",
  "title": "Transfer Restriction",
  "vc:slug": "transfer-restriction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transfer-restriction",
  "@type": "Class",
  "label": "Transfer Restriction",
  "definition": "A transfer restriction is logic embedded in a tokenised asset that conditions or blocks transfers based on the identity, eligibility, lock-up status or jurisdiction of the parties involved. It allows regulated securities to be represented on a blockchain while enforcing legal constraints automatically at the protocol level. Security token standards such as ERC-1400 expose a check function that returns whether a proposed transfer is permitted, with reason codes for rejected transfers to support auditability.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:security-token",
      "label": "Security Token"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:enterprise-token-standards",
        "label": "Enterprise Token Standards"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:know-your-customer",
        "label": "Know Your Customer"
      },
      {
        "@id": "urn:ngm:class:kyc",
        "label": "KYC"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-1400",
        "label": "ERC-1400"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      },
      {
        "@id": "urn:ngm:class:compliance",
        "label": "Compliance"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenization"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
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
  - A [[Transfer Restriction]] is logic in a [[Security Token]] [[Smart Contract]] that conditions transfers on [[Know Your Customer]] and [[Access Control]] checks, implementing [[ERC-1400]] to enforce [[Regulatory Compliance]].
- ### Overview
  - A transfer restriction is a rule embedded in a tokenised asset that conditions or blocks transfers based on the identity, eligibility or jurisdiction of the parties.
  - It allows regulated securities to be represented on a blockchain while enforcing legal constraints automatically at the protocol level.
  - Standards for security tokens expose a check function that returns whether a proposed transfer is permitted and a reason code if not.
- ### Mechanisms
  - On-chain allow-lists keyed to verified investor identities.
  - Jurisdiction and lock-up period enforcement in contract logic.
  - Reason codes returned for rejected transfers for auditability.
  - Integration with off-chain KYC and accreditation providers.
- ### Applications
  - Regulated security token offerings with investor eligibility rules.
  - Lock-up enforcement for early investor and founder allocations.
  - Jurisdiction-aware secondary trading of tokenised assets.
- ### Relationships
  - partOf:: [[Security Token]]
  - partOf:: [[Enterprise Token Standards]]
  - uses:: [[Smart Contract]]
  - uses:: [[Access Control]]
  - hasPart:: [[Know Your Customer]]
  - hasPart:: [[KYC]]
  - implements:: [[ERC-1400]]
  - implements:: [[Token Standard]]
  - enables:: [[Regulatory Compliance]]
  - enables:: [[Compliance]]
  - relatedTo:: [[Tokenization]]
  - relatedTo:: [[On-chain Governance]]
  - dependsOn:: [[Ethereum]]
  - contrastsWith:: [[ERC-20]]
- ### Provenance
  - updated:: 2026-06-15
