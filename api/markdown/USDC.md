public:: true

# USDC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c",
  "@type": "Page",
  "vc:slug": "usdc",
  "title": "USDC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:usd",
      "vc:label": "USD"
    },
    {
      "@id": "urn:visionflow:linked:custody-infrastructure",
      "vc:label": "Custody Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:usdt",
      "vc:label": "USDT"
    },
    {
      "@id": "urn:visionflow:linked:payment-system",
      "vc:label": "Payment System"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "USDC"
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
  "@id": "urn:ngm:class:usdc",
  "@type": "Class",
  "label": "USDC",
  "definition": "A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:stablecoin",
    "label": "Stablecoin"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:usd",
        "label": "USD"
      },
      {
        "@id": "urn:ngm:class:custody-infrastructure",
        "label": "Custody Infrastructure"
      },
      {
        "@id": "urn:ngm:class:reserve-attestation",
        "label": "Reserve Attestation"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin Ecosystem"
      },
      {
        "@id": "urn:ngm:class:defi-infrastructure",
        "label": "DeFi Infrastructure"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:erc-20-tokens",
        "label": "ERC-20 Token"
      },
      {
        "@id": "urn:ngm:class:redemption-mechanism",
        "label": "Redemption Mechanism"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:erc-20-token-standard",
        "label": "ERC-20 Standard"
      },
      {
        "@id": "urn:ngm:class:cross-chain-bridge",
        "label": "Cross-Chain Bridge Protocol"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:ethereum",
        "label": "Ethereum"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      },
      {
        "@id": "urn:ngm:class:proof-of-reserves",
        "label": "Proof of Reserves"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:on-chain-settlement",
        "label": "On-Chain Settlement"
      },
      {
        "@id": "urn:ngm:class:collateral-management",
        "label": "DeFi Collateral"
      },
      {
        "@id": "urn:ngm:class:cross-border-payments",
        "label": "Cross-Border Payment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:usdt",
        "label": "USDT"
      },
      {
        "@id": "urn:ngm:class:dai",
        "label": "DAI"
      },
      {
        "@id": "urn:ngm:class:central-bank-digital-currency",
        "label": "Central Bank Digital Currency"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:centre-consortium",
        "label": "Centre Consortium"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:payment-system",
        "label": "Payment System"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:traditional-finance",
        "label": "Traditional Finance"
      },
      {
        "@id": "urn:ngm:class:programmable-money",
        "label": "Programmable Money"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:money-market-fund",
        "label": "Money Market Fund"
      },
      {
        "@id": "urn:ngm:class:circle",
        "label": "Circle Financial"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:usd-coin",
      "label": "USD Coin"
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
  "@id": "urn:visionflow:annotation:link-resolutions:usdc:a34645ceb35b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79cd6843be580ccd1e98d85095e3280d9dfb8bbddc860326fea54cd83ca7998c"
  },
  "vc:resolutions": [
    {
      "raw": "[[USD]]",
      "resolved": "urn:visionflow:linked:usd",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Custody Infrastructure]]",
      "resolved": "urn:visionflow:linked:custody-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[USDT]]",
      "resolved": "urn:visionflow:linked:usdt",
      "kind": "StubLink"
    },
    {
      "raw": "[[Payment System]]",
      "resolved": "urn:visionflow:linked:payment-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
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
  - A fiat-backed stablecoin pegged to the United States dollar, issued against reserves of cash and short-term government securities and redeemable on a one-for-one basis.

- ### Semantic Classification
  - owl-class:: blockchain:USDC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Stablecoin]]
  - bridges-to:: [[USDT]], [[Payment System]]
  - requires:: [[USD]], [[Custody Infrastructure]]

- ### Content
  - USDC is a stablecoin designed to hold a value of one US dollar. Each token in circulation is intended to be matched by reserves held off-chain, principally cash and short-dated government securities, with periodic attestations of those reserves published by the issuer.
  - On public ledgers USDC functions as a settlement and unit-of-account token, widely used as collateral in lending markets, as a quote asset on exchanges, and as a medium for transfers. Its peg depends on the reliability of the reserve backing and on the issuer's ability to honour redemptions for dollars.

- ### Current Landscape (2026)
  - Issuer Circle Internet Group went public on the NYSE (ticker CRCL) on 5 June 2025 in a ~$1.2 billion IPO priced at $31/share, making USDC the first stablecoin backed by an issuer subject to quarterly SEC reporting; the stock traded with roughly a ~$30 billion market cap by mid-2026.
  - The GENIUS Act (Guiding and Establishing National Innovation for US Stablecoins Act, Public Law 119-27) was signed on 18 July 2025, creating the first US federal payment-stablecoin framework — 1:1 high-quality-liquid-asset reserves, monthly disclosures, and explicit exclusion of payment stablecoins from "security" status; USDC's existing compliance architecture became the de facto regulatory baseline.
  - USDC circulation reached ~$73.3 billion at end-Q2 2026 (19% YoY growth), with reported on-chain transaction volume of $14.8 trillion in the quarter (151% YoY); Circle targets ~$150 billion supply in H2 2026, though supply had contracted from a ~$80 billion March peak amid a broader market pullback.
  - USDC remains the number-two stablecoin (~24% share, ~$78 billion at May 2026) behind Tether's USDT (~$189 billion, ~59%), but captured roughly 62% of stablecoin transaction volume in Q2 2026 versus 36% a year earlier, positioning itself as the "compliance leader" and preferred rail for regulated commerce.
  - Circle rebased its cross-chain infrastructure: CCTP V2 became the canonical Cross-Chain Transfer Protocol (V1 deprecation phase-out commencing 31 July 2026), USDC is now natively issued on 35+ blockchains, and a consumer-facing USDC Bridge launched in April 2026; cumulative CCTP volume exceeded $110 billion by November 2025.
  - Circle secured a federal foothold: final OCC approval for the national trust bank Circle National Trust (July 2026) plus a New York DFS limited-purpose trust charter (Circle New York Trust, 31 July 2026), and gained MiCA authorisation via France's ACPR for both USDC and EURC, benefiting from MiCA's enforcement delisting non-compliant USDT from EU venues.
  - Institutional adoption deepened via BNY (direct mint/redeem custody), Standard Chartered, Nium, JCB and Visa settlement rails, plus Meta creator payouts in USDC (Solana/Polygon) and CFTC no-action relief allowing USDC as regulated derivatives margin; Circle's Arc blockchain (validators including BlackRock, DTCC, Visa, Mastercard) is slated to launch 16 September 2026.
  - Open challenges as of 2026: competition from tokenised money-market funds (now GENIUS-eligible reserves), shared-governance rivals such as Open USD, margin compression on Treasury-yield-dependent revenue (Morgan Stanley cut Circle to underweight, target $38, on 3 August 2026), and concentration/FDIC-limit questions over reserve bank deposits.

- ### References
  - 1. Circle (2026). Circle Reports Second Quarter 2026 Results. https://www.circle.com/pressroom/circle-reports-second-quarter-2026-results
  - 2. Federal Reserve (2026). Stablecoins in 2025: Developments and Financial Stability Implications (FEDS Notes). https://www.federalreserve.gov/econres/notes/feds-notes/stablecoins-in-2025-developments-and-financial-stability-implications-20260408.html
  - 3. Circle (2025). CCTP V1 deprecation: CCTP V2 is now the canonical CCTP. https://www.circle.com/blog/cctp-version-updates
  - 4. The Block (2026). Circle rolls out USDC Bridge for native cross-chain stablecoin transfers. https://www.theblock.co/news/business/2026-04-17-circle-rolls-out-usdc-bridge-for-native-cross-chain-stablecoin-transfers-397907
  - 5. Crypto Briefing (2026). Circle's USDC adds $8B in market cap over the past year. https://cryptobriefing.com/circle-usdc-adds-8b-market-cap-year/
  - 6. crypto.news (2026). Morgan Stanley downgrades Circle amid the USDC stablecoin war. https://crypto.news/morgan-stanley-downgrades-circle-usdc-stablecoin-war/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
