public:: true

# ICO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ico",
  "@type": "Page",
  "vc:slug": "ico",
  "title": "ICO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ico",
  "@type": "Class",
  "label": "ICO",
  "definition": "An Initial Coin Offering (ICO) is a blockchain-based fundraising mechanism in which a project or organisation sells newly issued cryptographic tokens to investors in exchange for established cryptocurrencies (typically ETH or BTC) or fiat currency, with the tokens granting access to a future service, governance rights, or speculative value appreciation. ICOs gained widespread use in 2017–2018 as an alternative to traditional venture capital and IPO processes, raising billions of dollars before facing significant regulatory scrutiny from securities authorities worldwide. They differ from traditional securities offerings in being permissionless, globally accessible, and typically not subject to investor accreditation requirements.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:crypto-token",
    "label": "Crypto Token"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:kyc-aml",
        "label": "KYC/AML"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:token-distribution",
        "label": "Token Distribution"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contracts",
        "label": "Smart Contracts"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      },
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
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
        "@id": "urn:ngm:class:mi-ca-regulation",
        "label": "MiCA Regulation"
      },
      {
        "@id": "urn:ngm:class:initial-public-offering",
        "label": "Initial Public Offering"
      },
      {
        "@id": "urn:ngm:class:venture-capital",
        "label": "Venture Capital"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:securities-and-exchange-commission",
        "label": "Securities and Exchange Commission"
      },
      {
        "@id": "urn:ngm:class:financial-conduct-authority",
        "label": "Financial Conduct Authority"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-token-offering",
        "label": "Security Token Offering"
      },
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      },
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:initial-dex-offering",
        "label": "Initial DEX Offering"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:crowdfunding",
        "label": "Crowdfunding"
      },
      {
        "@id": "urn:ngm:class:securities-law",
        "label": "Securities Law"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:initial-coin-offering",
      "label": "Initial Coin Offering"
    },
    {
      "@id": "urn:ngm:class:token-crowdsale",
      "label": "Token Crowdsale"
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

- ### Definition
  - An ICO is a [[Blockchain]]-based public token sale that issues [[Cryptocurrency]] tokens via [[Smart Contracts]] to raise project capital, operating in a regulatory grey zone that eventually prompted structured alternatives like the [[Security Token Offering]].

- ### Relationships
  - ICOs operate on [[Blockchain]] infrastructure, distributing tokens through automated [[Smart Contracts]] that accept [[Cryptocurrency]] contributions and allocate tokens according to a defined schedule. They created the initial market conditions for [[Blockchain Economics]] centred on token speculation and project financing. [[Security Token Offering]] emerged as a compliant successor for tokens deemed securities by regulators. [[Financial Regulation]] frameworks globally—SEC in the US, FCA in the UK, and the EU's [[MiCA Regulation]]—have progressively addressed ICOs by asserting jurisdiction over tokens that pass the Howey test or equivalent local investment contract tests.

- ### Content
  - The first widely recognised ICO was Mastercoin in 2013, which raised approximately 5,000 BTC by selling tokens representing access to a Bitcoin overlay network. Ethereum's own crowdsale in 2014 raised approximately $18 million in BTC, establishing the template of selling utility tokens in advance of platform development. The model remained niche until 2017, when the combination of rising ETH prices, ERC-20 standardisation making token issuance trivially easy, and media attention triggered a speculative boom: over 400 ICOs in 2017 collectively raised approximately $5.6 billion, with projects like EOS, Tezos, and Bancor raising hundreds of millions each.

  - The mechanics of a typical ICO involved publishing a whitepaper describing the project and tokenomics, deploying an ERC-20 smart contract on Ethereum that accepted ETH contributions and issued tokens at a fixed or variable rate, and conducting a public sale period (often with pre-sale discounts for early participants). Token vesting schedules, hard caps, soft caps, and KYC/AML gating were implemented to varying degrees across projects. Many ICOs used multi-signature wallets and time-locked contracts to manage raised funds, though these technical safeguards were frequently bypassed or rendered moot by insider activity.

  - The 2017–2018 ICO boom had profound consequences for the blockchain industry. On the positive side, it provided genuine early-stage funding for projects that became significant infrastructure (Chainlink, Aave, Uniswap's predecessor Bancor). On the negative side, an estimated 80% of 2017 ICOs were scams or failed projects, costing retail investors billions and prompting the SEC's 2018 DAO Report and subsequent enforcement actions classifying many ICO tokens as unregistered securities. The speculative collapse of 2018–2019 permanently changed the fundraising landscape, with ICOs largely replaced by more structured alternatives.

  - By 2024–2025 the ICO format has been substantially replaced by IEOs (Initial Exchange Offerings, launced through exchange platforms), IDOs (Initial DEX Offerings, launched through decentralised exchange liquidity pools), and regulated STOs. The EU's MiCA regulation (applicable from 2024) creates a legal framework for crypto-asset issuance in Europe that provides clarity ICOs lacked. Token launches continue, but with greater emphasis on community fairness (fair launches with no pre-mine), regulatory compliance, and product-market fit before token issuance—a significant maturation from the 2017 whitepaper-only model.