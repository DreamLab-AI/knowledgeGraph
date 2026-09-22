public:: true

# Stablecoin Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:69e6811453016f693ceec33fae41e28f3aca86b1547c67360e935927d1fe5141",
  "@type": "Page",
  "vc:slug": "stablecoin-token",
  "title": "Stablecoin Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:fungible-token",
      "vc:label": "Fungible Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0514"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stablecoin Token"
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
  "@id": "urn:ngm:class:stablecoin-token",
  "@type": "Class",
  "label": "Stablecoin Token",
  "definition": "A Stablecoin Token is a blockchain-native fungible token engineered to maintain a stable value, typically pegged to a fiat currency, commodity, or basket of assets, through one of three principal mechanisms: fiat-collateralised reserves held by a custodian (e.g. USDC, USDT), crypto-collateralised over-collateralisation enforced by smart contracts (e.g. DAI), or algorithmic supply adjustment that mints and burns tokens to defend the peg without direct collateral. Stablecoins serve as the primary medium of exchange, unit of account, and store of value within decentralised finance ecosystems, enabling lending, borrowing, and trading without exposure to cryptocurrency price volatility.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"},
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:price-oracle", "label": "Price Oracle"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:inflationary-token", "label": "Inflationary Token"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:digital-currency", "label": "Digital Currency"},
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:erc20-token", "label": "ERC20 Token"}
    ]
  },
  "qualityScore": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:stablecoin-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:69e6811453016f693ceec33fae41e28f3aca86b1547c67360e935927d1fe5141"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:fungible-token",
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
  - A token designed to maintain stable value by pegging to external assets like fiat currencies, commodities, or using algorithmic mechanisms.

- ### Semantic Classification
  - owl-class:: blockchain:StablecoinToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  A Stablecoin Token requires an underlying **Blockchain** infrastructure and **Smart Contract** logic for issuance, collateral management, and redemption mechanics. It enables **Transaction** settlement in decentralised protocols and **Interoperability** across DeFi ecosystems. The token uses **Tokenomics** design principles and **Price Oracle** feeds to maintain its peg through on-chain collateralisation or algorithmic supply adjustments. It contrasts with **Inflationary Token** (expanding-supply incentive tokens) and **Deflationary Token** (burn-driven value-accrual tokens). Related concepts include **Token Economics**, **Digital Currency**, **Central Bank Digital Currency** (the government-issued analogue), **Cryptocurrency** (the broader category), and **ERC20 Token** (the dominant implementation standard).

- ### Content
  Stablecoins occupy a pivotal role in the cryptocurrency ecosystem by providing the price stability that volatile crypto-assets lack, making them suitable as a medium of exchange and unit of account within DeFi protocols. The design space divides into three primary architectures distinguished by their collateralisation model.

  Fiat-collateralised stablecoins (e.g. USDC, USDT, BUSD) maintain 1:1 reserves of fiat currency or short-term government securities held by a regulated custodian. Users trust the issuer to maintain full reserves and provide on-demand redemption. Regulatory scrutiny focuses on reserve attestation, with jurisdictions including the EU (MiCA regulation), New York (BitLicense), and Singapore (Payment Services Act) requiring periodic audits. The centralisation introduces single-point-of-failure risk—USDC briefly depegged in March 2023 when $3.3 billion of its reserves were trapped in the failing Silicon Valley Bank.

  Crypto-collateralised stablecoins (e.g. DAI from MakerDAO) use over-collateralisation enforced by smart contracts: borrowers deposit more than $1 of crypto assets (typically ETH) as collateral to mint $1 of stablecoin, with automated liquidation triggered if the collateral ratio drops below a minimum threshold. This architecture is decentralised and transparent but capital-inefficient and vulnerable to collateral price cascades.

  Algorithmic stablecoins attempt to maintain the peg through programmatic supply expansion (minting) and contraction (burning) driven by market signals or dual-token seigniorage models. The catastrophic collapse of Terra/LUNA in May 2022, which destroyed approximately $40 billion in value within days, exposed the fundamental fragility of unbacked algorithmic mechanisms under reflexive selling pressure, prompting widespread regulatory proposals to restrict or ban purely algorithmic designs.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
