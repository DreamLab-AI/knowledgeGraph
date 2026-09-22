public:: true

# Redemption Mechanism
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:redemption-mechanism",
  "@type": "Page",
  "title": "Redemption Mechanism",
  "vc:slug": "redemption-mechanism",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:redemption-mechanism",
  "@type": "Class",
  "label": "Redemption Mechanism",
  "definition": "A redemption mechanism is the process by which a token holder can exchange a stablecoin or wrapped asset back into the underlying reserve asset it represents, such as fiat currency or collateral. It is the structural counterpart of minting and is central to maintaining a stablecoin's peg: credible redeemability allows arbitrageurs to profit from deviations between market price and par value, pulling the price back to the peg. Redemption mechanisms vary from direct par redemption with the issuer to on-chain burn-and-release contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:stablecoin",
      "label": "Stablecoin"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:burning",
        "label": "Burning"
      },
      {
        "@id": "urn:ngm:class:proof-of-reserve",
        "label": "Proof of Reserve"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:collateral",
        "label": "Collateral"
      },
      {
        "@id": "urn:ngm:class:reserve",
        "label": "Reserve"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:peg",
        "label": "Peg"
      },
      {
        "@id": "urn:ngm:class:arbitrage",
        "label": "Arbitrage"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:minting",
        "label": "Minting"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:usdc",
        "label": "USDC"
      },
      {
        "@id": "urn:ngm:class:tether",
        "label": "Tether"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralized Finance"
      },
      {
        "@id": "urn:ngm:class:liquidity-pool",
        "label": "Liquidity Pool"
      },
      {
        "@id": "urn:ngm:class:algorithmic-stablecoin",
        "label": "Algorithmic Stablecoin"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-reserve",
        "label": "Proof of Reserve"
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
  - A redemption mechanism is the process by which a token holder can exchange a stablecoin or wrapped asset back into the underlying reserve asset it represents, such as fiat currency or collateral. It is the structural counterpart of minting and is central to maintaining a stablecoin's peg: credible redeemability allows arbitrageurs to profit from deviations between market price and par value, pulling the price back to the peg. Redemption mechanisms vary from direct par redemption with the issuer to on-chain burn-and-release contracts.
  - Core related concepts: [[Stablecoin]], [[Burning]], [[Collateral]], [[Peg]], [[Minting]].

- ### Overview
  - Redemption is the mechanism that ties a token's market value to its backing. For fiat-collateralised stablecoins, an authorised participant returns tokens to the issuer and receives the equivalent fiat, with the tokens burned. For crypto-collateralised or wrapped assets, an on-chain contract burns the wrapped token and releases the locked underlying. The credibility, speed, and cost of redemption determine how tightly the peg holds under stress.

- ### Mechanisms
  - Burn-and-release: redeeming tokens are burned and the corresponding reserve is released or transferred, keeping circulating supply matched to backing.
  - Arbitrage incentive: if the token trades below par, redeemers profit by buying cheap and redeeming at par, which removes supply and lifts the price toward the peg.
  - Access tiers: some issuers restrict direct redemption to vetted institutional participants, relying on secondary-market liquidity for retail holders.
  - Proof of reserves: transparent attestation of backing assets underpins confidence that redemptions will be honoured at par.

- ### Applications
  - Fiat-backed stablecoins such as USDC and Tether, which support par redemption for authorised participants.
  - Wrapped assets where redemption releases the bridged or custodied underlying token.
  - Crypto-collateralised stablecoins where redemption interacts with collateral vaults and liquidation logic.
  - DeFi protocols that rely on credible redemption to keep pegged assets usable as settlement media.

- ### Relationships
  - subClassOf:: [[Stablecoin]]
  - partOf:: [[Stablecoin]]
  - hasPart:: [[Burning]]
  - hasPart:: [[Proof of Reserve]]
  - requires:: [[Collateral]]
  - requires:: [[Reserve]]
  - enables:: [[Peg]]
  - enables:: [[Arbitrage]]
  - contrastsWith:: [[Minting]]
  - uses:: [[Smart Contract]]
  - supports:: [[USDC]]
  - supports:: [[Tether]]
  - relatedTo:: [[Decentralized Finance]]
  - relatedTo:: [[Liquidity Pool]]
  - relatedTo:: [[Algorithmic Stablecoin]]
  - dependsOn:: [[Proof of Reserve]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
