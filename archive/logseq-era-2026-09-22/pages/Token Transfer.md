public:: true

# Token Transfer

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:token-transfer",
  "@type": "Page",
  "title": "Token Transfer",
  "vc:slug": "token-transfer",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-transfer",
  "@type": "Class",
  "label": "Token Transfer",
  "definition": "A token transfer is the operation of moving ownership of a fungible or non-fungible blockchain token from one account to another, recorded as a state change on a distributed ledger. On smart-contract platforms it is typically realised by invoking a transfer function defined by a token standard such as ERC-20, which debits the sender's balance, credits the recipient, and emits an event. Token transfers are the elementary settlement primitive underlying payments, trading, and decentralised finance.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:transaction",
      "label": "Transaction"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:smart-contract-execution",
        "label": "Smart Contract Execution"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:gas",
        "label": "Gas"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:cryptocurrency",
        "label": "Cryptocurrency"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:consensus",
        "label": "Consensus"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:token",
        "label": "Token"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Ledger"
      },
      {
        "@id": "urn:ngm:class:fungible-token",
        "label": "Fungible Token"
      },
      {
        "@id": "urn:ngm:class:event-log",
        "label": "Event Log"
      },
      {
        "@id": "urn:ngm:class:non-fungible-token",
        "label": "Non-Fungible Token"
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
  - [[Token]]
  - [[Smart Contract]]
  - [[Transaction]]
  - [[ERC-20]]
  - [[Ledger]]
- ### Overview
  - Expresses value movement as a deterministic, atomic state transition on the ledger.
  - Inherits the security and finality guarantees of the underlying consensus mechanism.
  - Standardised interfaces make transfers composable across wallets, exchanges, and protocols.
- ### Mechanisms
  - Balance bookkeeping: a contract decrements the sender and increments the recipient.
  - Allowance and approval flows enabling third-party transfers on a holder's behalf.
  - Event emission so off-chain indexers and applications can observe transfers.
  - Gas accounting that meters and prices the computation and storage involved.
  - Atomicity ensuring a transfer either fully succeeds or reverts with no partial state.
- ### Applications
  - Peer-to-peer payments and remittances in cryptocurrency.
  - Order settlement on decentralised exchanges and automated market makers.
  - Collateral movement and liquidations in DeFi lending protocols.
  - Distribution of governance and reward tokens to participants.
- ### Relationships
  - partOf:: [[Smart Contract Execution]]
  - dependsOn:: [[Smart Contract]]
  - dependsOn:: [[Gas]]
  - uses:: [[Token Standard]]
  - uses:: [[ERC-20]]
  - uses:: [[Wallet]]
  - enables:: [[Decentralised Finance]]
  - enables:: [[Tokenisation]]
  - supports:: [[Token Economics]]
  - supports:: [[Cryptocurrency]]
  - requires:: [[Consensus]]
  - implements:: [[Token]]
  - relatedTo:: [[Ledger]]
  - relatedTo:: [[Fungible Token]]
  - relatedTo:: [[Event Log]]
  - relatedTo:: [[Non-Fungible Token]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
