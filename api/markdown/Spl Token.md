public:: true

# Spl Token

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:spl-token",
  "@type": "Page",
  "title": "Spl Token",
  "vc:slug": "spl-token",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:spl-token",
  "@type": "Class",
  "label": "Spl Token",
  "definition": "SPL Token is the token standard of the Solana Program Library, defining how fungible and non-fungible tokens are created and managed on the Solana blockchain through a shared on-chain program. Rather than deploying a separate contract per token as in ERC-20, all SPL tokens share a single canonical program and store balances in token accounts associated with each owner and mint. This account-model design enables high-throughput, low-cost token operations native to Solana's runtime.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
    },
    "implements": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:brc-20",
        "label": "BRC-20"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:solana",
        "label": "Solana"
      }
    ],
    "dependsOn": {
      "@id": "urn:ngm:class:solana",
      "label": "Solana"
    },
    "uses": {
      "@id": "urn:ngm:class:solana-program-library",
      "label": "Solana Program Library"
    },
    "enables": [
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
      }
    ],
    "supports": {
      "@id": "urn:ngm:class:token",
      "label": "Token"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "bridgesTo": {
      "@id": "urn:ngm:class:blockchain",
      "label": "Blockchain"
    }
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
  - [[Spl Token]] is the [[Fungible Token]] standard of the [[Solana Program Library]].
  - It implements a [[Token Standard]] using a single shared [[Smart Contract]] on [[Solana]].
  - It contrasts with per-contract standards like [[ERC-20]] and [[BRC-20]].
- ### Overview
  - SPL Token defines a canonical on-chain program that all tokens on Solana invoke, rather than each token deploying its own contract.
  - A mint account describes a token's supply and decimals; token accounts hold balances for a specific owner and mint.
  - The associated-token-account convention deterministically derives a user's account for any mint.
  - This design leverages Solana's account model and parallel runtime for high throughput and low fees.
- ### Mechanisms
  - Shared program — one canonical SPL Token program serves all tokens.
  - Mint accounts — define total supply, decimals, and mint/freeze authorities.
  - Token accounts — per-owner, per-mint balance holders.
  - Associated token accounts — deterministic derivation of a user's account for a mint.
  - Both fungible and non-fungible tokens supported under the same standard.
- ### Applications
  - Stablecoins and utility tokens issued on Solana.
  - Decentralised exchange liquidity and trading pairs.
  - NFT collections using SPL with metadata extensions.
  - Wallet and payment integrations across the Solana ecosystem.
- ### Relationships
  - SPL Token is a fungible-token standard rooted in the Solana ecosystem and contrasts with ERC-20.
  - partOf:: [[Fungible Token]]
  - implements:: [[Token Standard]]
  - implements:: [[Fungible Token]]
  - contrastsWith:: [[ERC-20]]
  - contrastsWith:: [[BRC-20]]
  - requires:: [[Smart Contract]]
  - requires:: [[Solana]]
  - dependsOn:: [[Solana]]
  - uses:: [[Solana Program Library]]
  - enables:: [[Non-Fungible Token]]
  - supports:: [[Token]]
  - relatedTo:: [[Token]]
  - relatedTo:: [[Token Standard]]
  - bridgesTo:: [[Blockchain]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
