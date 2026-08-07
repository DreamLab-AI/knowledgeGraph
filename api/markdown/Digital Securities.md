public:: true

# Digital Securities
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5715511c8933ff03e2e521b1fea138a4e5933edbeb7fbb1b308bfdb789fb29c0",
  "@type": "Page",
  "vc:slug": "digital-securities",
  "title": "Digital Securities",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:security-token",
      "vc:label": "Security Token"
    },
    {
      "@id": "urn:visionflow:linked:erc-1400",
      "vc:label": "ERC-1400"
    },
    {
      "@id": "urn:visionflow:linked:erc-3643",
      "vc:label": "ERC-3643"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-securities",
  "@type": "Class",
  "label": "Digital Securities",
  "definition": "Regulated financial instruments — equities, bonds, fund units, and other investment products — issued, recorded, and transferred as tokens on distributed ledgers, combining the legal character of traditional securities with programmable compliance, fractional ownership, and near-instant settlement, and implemented through permissioned token standards such as ERC-1400 and ERC-3643.",
  "domain": "finance",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:digital-asset",
    "label": "Digital Asset"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-ledger-technology",
        "label": "Distributed Ledger Technology"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:erc-1400",
        "label": "ERC-1400"
      },
      {
        "@id": "urn:ngm:class:erc-3643",
        "label": "ERC-3643"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "Regulated financial instruments — equities, bonds, fund units, and other investment products — issued, recorded, and transferred as tokens on distributed ledgers, combining the legal character of traditional securities with programmable compliance, fractional ownership, and near-instant settlement, and implemented through permissioned token standards such as ERC-1400 and ERC-3643."

- ### Semantic Classification
  - owl-class:: finance:DigitalSecurities
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Digital Asset]]
  - requires:: [[Securities Regulation]]
  - uses:: [[ERC-1400]]
  - related-to:: [[Asset Tokenisation]]

- ### Content

  ## Definition

  **Digital securities** are conventional regulated investment instruments — shares, bonds, structured products, fund interests — whose issuance, ownership record, and transfer occur on a distributed ledger rather than in a traditional central securities depository. Unlike unregulated crypto-assets, digital securities remain securities in law: the token is the record (or, in some regimes, the legal embodiment) of an instrument that carries prospectus obligations, investor protections, and market-conduct rules. The category substantially overlaps with the [[Security Token]] concept and is the flagship use case of [[Asset Tokenisation]] applied to capital markets.

  What distinguishes digital securities from their paper and book-entry predecessors is **programmable compliance**. Transfer restrictions — accredited-investor gating, jurisdiction whitelists, lock-up periods, sanctions screening — are enforced by the token contract itself. Standards such as [[ERC-1400]] (partitioned security tokens with document management and forced-transfer hooks for legal recovery) and [[ERC-3643]] (permissioned tokens bound to an on-chain identity and eligibility-verification layer) encode these controls so that a non-compliant transfer simply cannot execute. This inverts the traditional model, where compliance is checked after the fact by intermediaries.

  The promised benefits are fractionalisation of high-value assets, 24/7 markets, atomic delivery-versus-payment settlement (collapsing T+2 to near-instant), automated corporate actions, and a reduced intermediary stack. The principal constraints are legal rather than technical: whether ledger entries constitute valid registers of title, how custody and insolvency are treated, and how secondary-market liquidity develops on regulated trading venues.

  ## Current Landscape

  - **Regulatory regimes**: the EU DLT Pilot Regime permits DLT-based trading and settlement venues; Germany's eWpG recognises electronic securities registers; Switzerland's DLT Act created ledger-based securities; the UK is operating a Digital Securities Sandbox run by the Bank of England and FCA; in the US, digital securities fall under existing SEC frameworks (Reg D, Reg S, Reg A+)
  - **Institutional issuance**: sovereign and corporate digital bonds from issuers including the European Investment Bank, Siemens (under eWpG), and the Hong Kong government; UBS, Franklin Templeton, and BlackRock operate tokenised money-market funds, with BlackRock's BUIDL fund a prominent example of tokenised fund growth
  - **Infrastructure**: SIX Digital Exchange (SDX), Deutsche Börse D7, and incumbent CSDs building token rails; issuance platforms such as Securitize, Tokeny (ERC-3643's steward), and Polymath
  - **Trajectory**: consultancy and industry estimates project tokenised real-world assets, with securities at the core, reaching the trillions of dollars by 2030, though on-venue secondary liquidity remains the binding constraint
