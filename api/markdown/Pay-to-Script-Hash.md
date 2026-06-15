public:: true

# Pay-to-Script-Hash

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:pay-to-script-hash",
  "@type": "Page",
  "title": "Pay-to-Script-Hash",
  "vc:slug": "pay-to-script-hash",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pay-to-script-hash",
  "@type": "Class",
  "label": "Pay-to-Script-Hash",
  "definition": "Pay-to-Script-Hash (P2SH) is a Bitcoin transaction type, introduced in BIP 16, that locks funds to the hash of a redeem script rather than to a public key or full script. The spender must later provide both the original redeem script, whose hash matches the locking output, and the data that satisfies it. P2SH shifts the burden and storage cost of complex spending conditions from the sender to the recipient and underpins multi-signature and other advanced locking schemes.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-script",
      "label": "Bitcoin Script"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:bip-16",
        "label": "BIP 16"
      },
      {
        "@id": "urn:ngm:class:multi-signature-wallet",
        "label": "Multi-Signature Wallet"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:script",
        "label": "Script"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transaction",
        "label": "Transaction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pay-to-public-key-hash",
        "label": "Pay-to-Public-Key-Hash"
      },
      {
        "@id": "urn:ngm:class:segregated-witness",
        "label": "Segregated Witness"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:address",
        "label": "Address"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:script",
        "label": "Script"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:bip-16",
        "label": "BIP 16"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Bitcoin Script]] locking template
  - Part of [[Bitcoin]]
  - Specified by [[BIP 16]]
  - Underpins [[Multi-Signature Wallet]] designs
- ### Overview
  - P2SH locks an output to the 20-byte hash of a redeem script encoded as a special script address.
  - Spending requires revealing the redeem script and its satisfying inputs at redemption time.
  - It enables compact, standardised addresses for arbitrarily complex spending policies.
- ### Mechanisms
  - Redeem script hashing and locking output
  - Address encoding (Base58Check, prefix 3)
  - Two-phase reveal-and-satisfy spending
  - Backward-compatible soft-fork activation
  - Composition with multisig redeem scripts
- ### Applications
  - Multi-signature custody and escrow
  - Conditional and time-locked payments
  - Wrapped SegWit (P2SH-P2WPKH) addresses
  - Atomic swaps and payment channels
- ### Relationships
  - partOf:: [[Bitcoin]]
  - implements:: [[BIP 16]]
  - implements:: [[Multi-Signature Wallet]]
  - uses:: [[Bitcoin Script]]
  - uses:: [[Script]]
  - dependsOn:: [[Transaction]]
  - enables:: [[Smart Contract]]
  - contrastsWith:: [[Pay-to-Public-Key-Hash]]
  - contrastsWith:: [[Segregated Witness]]
  - relatedTo:: [[Address]]
  - supports:: [[Blockchain]]
  - requires:: [[Script]]
  - standardizedBy:: [[BIP 16]]
- ### Provenance
  - updated:: 2026-06-15
