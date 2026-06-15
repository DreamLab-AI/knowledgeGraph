public:: true

# Bitcoin Transaction

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:bitcoin-transaction",
  "@type": "Page",
  "title": "Bitcoin Transaction",
  "vc:slug": "bitcoin-transaction",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-transaction",
  "@type": "Class",
  "label": "Bitcoin Transaction",
  "definition": "A Bitcoin transaction is a signed data structure that transfers value on the Bitcoin network by consuming unspent transaction outputs (UTXOs) and creating new ones. Each transaction references prior outputs, provides cryptographic signatures satisfying their spending conditions, and specifies new outputs locked to recipient scripts. Validated transactions are broadcast to the mempool and ultimately confirmed when included in a mined block.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-transaction",
      "label": "Blockchain Transaction"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:mempool",
        "label": "Mempool"
      },
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:rgb-protocol",
        "label": "RGB Protocol"
      },
      {
        "@id": "urn:ngm:class:runes-protocol",
        "label": "Runes Protocol"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
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
  - A Bitcoin transaction is a signed data structure that transfers value on the Bitcoin network by consuming unspent transaction outputs (UTXOs) and creating new ones. Each transaction references prior outputs, provides cryptographic signatures satisfying their spending conditions, and specifies new outputs locked to recipient scripts. Validated transactions are broadcast to the mempool and ultimately confirmed when included in a mined block.
  - Related concepts: [[Bitcoin]] [[UTXO]] [[Bitcoin Script]] [[Digital Signature]] [[Lightning Network]]
- ### Overview
  - A Bitcoin transaction expresses value transfer through the UTXO model rather than account balances. Inputs reference and unlock previous outputs using script-satisfying signatures, and outputs encumber funds with new locking scripts that future spenders must satisfy. Fees are the difference between input and output value and incentivise miners to include the transaction. Once confirmed in a block and buried under further blocks, the transfer becomes economically irreversible.
- ### Key aspects
  - UTXO model of inputs consuming and outputs creating spendable value
  - Locking and unlocking scripts enforcing spending conditions
  - Digital signatures proving ownership of referenced outputs
  - Transaction fees prioritising mempool inclusion
  - Confirmation and finality through proof-of-work mining
- ### Applications
  - Peer-to-peer value transfer and payments
  - Layer-2 channel funding for the Lightning Network
  - Asset issuance via protocols such as RGB and Runes
  - Multisignature custody and treasury operations
  - Timestamping and data anchoring
- ### Relationships
  - subClassOf:: [[Blockchain Transaction]]
  - partOf:: [[Bitcoin]]
  - hasPart:: [[UTXO]]
  - hasPart:: [[Transaction Fee]]
  - requires:: [[Digital Signature]]
  - requires:: [[Bitcoin Script]]
  - uses:: [[Mempool]]
  - uses:: [[Wallet]]
  - enables:: [[Lightning Network]]
  - enables:: [[RGB Protocol]]
  - enables:: [[Runes Protocol]]
  - dependsOn:: [[Proof of Work]]
  - dependsOn:: [[Mining]]
  - relatedTo:: [[Blockchain Transaction]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
