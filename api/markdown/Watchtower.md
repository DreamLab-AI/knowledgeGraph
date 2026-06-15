public:: true

# Watchtower

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:watchtower",
  "@type": "Page",
  "title": "Watchtower",
  "vc:slug": "watchtower",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:watchtower",
  "@type": "Class",
  "label": "Watchtower",
  "definition": "A watchtower is a third-party service in payment-channel networks such as the Lightning Network that monitors the blockchain on a client's behalf and reacts to fraudulent channel-closure attempts. When a counterparty broadcasts a revoked, outdated channel state, the watchtower submits a penalty (justice) transaction that claims the cheater's funds, allowing the honest party to remain offline safely. Watchtowers store encrypted justice transactions indexed by transaction hints so they learn nothing about channel contents.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:lightning-network",
      "label": "Lightning Network"
    },
    "hasPart": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel"
      },
      {
        "@id": "urn:ngm:class:lightning",
        "label": "Lightning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lnd",
        "label": "LND"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:nonce",
        "label": "Nonce"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:liquidity",
        "label": "Liquidity"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:consensus-mechanism",
        "label": "Consensus Mechanism"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-finance",
        "label": "Centralised Finance"
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
  - A watchtower is a monitoring service within the [[Lightning Network]] protecting a [[Payment Channel]].
  - It depends on the [[Blockchain]] to detect and penalise revoked states.
  - Implementations such as [[LND]] integrate watchtower clients and servers using [[Encryption]].
- ### Overview
  - Lightning channels are secured by penalty transactions that punish broadcasting an old state; a watchtower enforces this even when the user is offline.
  - Clients hand the tower an encrypted blob and a transaction hint; the tower can only decrypt and act once the matching breach appears on chain.
  - This off-line safety property is essential for mobile and intermittently connected nodes.
- ### Mechanisms
  - Continuous scanning of the chain for revoked commitment transactions.
  - Encrypted storage of pre-signed justice transactions.
  - Hint-based lookup that preserves channel privacy from the tower.
  - Automatic broadcast of penalty transactions on detected fraud.
- ### Applications
  - Protecting mobile Lightning wallets that cannot stay online.
  - Outsourced channel monitoring for routing nodes.
  - Reducing the liveness assumptions of layer-two payment systems.
- ### Trust model
  - Towers are minimally trusted and learn nothing about balances.
  - Multiple towers can be used for redundancy.
  - Reward schemes can incentivise reliable monitoring.
- ### Relationships
  - partOf:: [[Lightning Network]]
  - hasPart:: [[Hash Function]]
  - supports:: [[Payment Channel]]
  - supports:: [[Lightning]]
  - uses:: [[LND]]
  - uses:: [[Encryption]]
  - dependsOn:: [[Blockchain]]
  - dependsOn:: [[Nonce]]
  - enables:: [[Liquidity]]
  - relatedTo:: [[Smart Contract]]
  - relatedTo:: [[Consensus Mechanism]]
  - contrastsWith:: [[Centralised Finance]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation
  - quality:: 0.62
