public:: true

# Initial Coin Offering
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:initial-coin-offering", "@type":"Page", "title":"Initial Coin Offering", "vc:slug":"initial-coin-offering", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:initial-coin-offering",
  "@type": "Class",
  "label": "Initial Coin Offering",
  "definition": "An initial coin offering (ICO) is a blockchain-based fundraising mechanism in which a project issues and sells newly created cryptographic tokens to early backers, typically in exchange for established cryptocurrencies such as Bitcoin or Ether. Tokens are usually distributed via smart contracts and may grant utility within a planned protocol, governance rights, or speculative value. Pioneered around 2013–2017, ICOs enabled permissionless global capital formation but attracted intense regulatory scrutiny over investor protection and securities classification, prompting more structured successors such as security token offerings and initial exchange offerings.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    { "@id": "urn:ngm:class:cryptocurrency-token", "label": "Cryptocurrency Token" }
  ],
  "relations": {
    "hasPart": [
      { "@id": "urn:ngm:class:token-sale", "label": "Token Sale" },
      { "@id": "urn:ngm:class:whitepaper", "label": "Whitepaper" }
    ],
    "partOf": [
      { "@id": "urn:ngm:class:token-economics", "label": "Token Economics" }
    ],
    "uses": [
      { "@id": "urn:ngm:class:smart-contract", "label": "Smart Contract" },
      { "@id": "urn:ngm:class:erc-20", "label": "ERC-20" }
    ],
    "enables": [
      { "@id": "urn:ngm:class:decentralised-fundraising", "label": "Decentralised Fundraising" },
      { "@id": "urn:ngm:class:capital-formation", "label": "Capital Formation" }
    ],
    "supports": [
      { "@id": "urn:ngm:class:utility-token", "label": "Utility Token" },
      { "@id": "urn:ngm:class:protocol-bootstrapping", "label": "Protocol Bootstrapping" }
    ],
    "dependsOn": [
      { "@id": "urn:ngm:class:ethereum", "label": "Ethereum" }
    ],
    "requires": [
      { "@id": "urn:ngm:class:cryptocurrency-wallet", "label": "Cryptocurrency Wallet" }
    ],
    "contrastsWith": [
      { "@id": "urn:ngm:class:initial-public-offering", "label": "Initial Public Offering" },
      { "@id": "urn:ngm:class:security-token-offering", "label": "Security Token Offering" }
    ],
    "bridgesTo": [
      { "@id": "urn:ngm:class:initial-exchange-offering", "label": "Initial Exchange Offering" },
      { "@id": "urn:ngm:class:initial-dex-offering", "label": "Initial DEX Offering" }
    ],
    "relatedTo": [
      { "@id": "urn:ngm:class:crowdfunding", "label": "Crowdfunding" },
      { "@id": "urn:ngm:class:securities-regulation", "label": "Securities Regulation" }
    ]
  },
  "sameAs": [
    { "@id": "urn:ngm:class:ico", "label": "ICO" }
  ],
  "quality": 0.62,
  "provenance": { "attributedTo": "did:nostr:ontology-mesh", "generatedAt": "2026-06-15T00:00:00Z", "inferenceRule": "GapMaterialisation" }
}
```

- ### Definition
  - An [[Initial Coin Offering]] is a [[Cryptocurrency Token]] fundraising event in which a project sells newly minted tokens through a [[Smart Contract]] in exchange for established cryptocurrencies. It enables [[Decentralised Fundraising]] and contrasts with the traditional [[Initial Public Offering]].

- ### Overview
  - In an ICO a project publishes a whitepaper describing its protocol, token distribution, and use of proceeds, then opens a sale period during which contributors send cryptocurrency to a smart contract that mints and allocates tokens in return. Because anyone with a wallet can participate, ICOs lowered barriers to global, permissionless capital formation.
  - The 2017 boom demonstrated both the speed of blockchain-native fundraising and its risks: many offerings lacked working products, disclosure standards, or accountability, and several jurisdictions later classified certain tokens as unregistered securities. This drove the market toward more regulated and curated successors.

- ### Mechanisms
  - Token issuance via standardised contracts such as ERC-20 on Ethereum.
  - Sale structures including capped, uncapped, Dutch-auction, and tiered pricing.
  - Vesting schedules and lock-ups for team and advisor allocations.

- ### Applications
  - Bootstrapping the native token and treasury of a new protocol.
  - Community distribution to align incentives among early users.
  - Historical funding of layer-1 networks, dApps, and DeFi primitives.

- ### Relationships
  - subClassOf:: [[Cryptocurrency Token]]
  - hasPart:: [[Token Sale]]
  - partOf:: [[Token Economics]]
  - uses:: [[Smart Contract]]
  - uses:: [[ERC-20]]
  - enables:: [[Decentralised Fundraising]]
  - supports:: [[Utility Token]]
  - dependsOn:: [[Ethereum]]
  - contrastsWith:: [[Initial Public Offering]]
  - contrastsWith:: [[Security Token Offering]]
  - bridgesTo:: [[Initial Exchange Offering]]
  - relatedTo:: [[Securities Regulation]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
