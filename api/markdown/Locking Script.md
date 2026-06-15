public:: true

# Locking Script

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:locking-script",
  "@type": "Page",
  "title": "Locking Script",
  "vc:slug": "locking-script",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:locking-script",
  "@type": "Class",
  "label": "Locking Script",
  "definition": "A locking script (also called scriptPubKey or an output script) is the predicate attached to a transaction output in UTXO-based blockchains that specifies the conditions under which that output may later be spent. To redeem the output, a spending transaction must supply an unlocking script whose combination with the locking script evaluates to true. Locking scripts encode spending policies ranging from a single signature to multi-signature, time locks and arbitrary smart-contract logic.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:utxo-model",
      "label": "UTXO Model"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:utxo-model",
        "label": "UTXO Model"
      },
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transaction-validation",
        "label": "Transaction Validation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:wallet",
        "label": "Wallet"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  - [[UTXO Model]]
  - [[Bitcoin Script]]
  - [[Digital Signature]]
  - [[Transaction Validation]]
  - Locking Script is defined within the [[UTXO Model]] area of the blockchain domain.
- ### Overview
  - In the UTXO model every coin is held in an unspent output guarded by a locking script. When a wallet wishes to spend it, the new transaction references that output and provides an unlocking script; the network concatenates the two and runs them on a stack-based virtual machine. If evaluation leaves a true value on the stack and no failure occurs, the spend is authorised. Locking scripts thereby decouple the conditions of ownership from the act of spending, enabling everything from simple pay-to-public-key-hash to escrow and conditional payments.
- ### Mechanisms
  - Predicate semantics: the script defines a boolean condition over the supplied unlocking data.
  - Standard templates such as pay-to-public-key-hash and pay-to-script-hash for common spending policies.
  - Multi-signature and threshold conditions requiring several keys to authorise a spend.
  - Time locks and hash locks enabling conditional and atomic-swap style payments.
  - Stack-based evaluation against a deliberately constrained, non-Turing-complete scripting language.
- ### Applications
  - Securing bitcoin outputs with single- and multi-signature ownership.
  - Escrow and dispute-resolution arrangements via multi-party scripts.
  - Payment channels and atomic swaps built on hash-time-locked contracts.
  - Constraining custody policies for institutional wallets and treasuries.
- ### Relationships
  - subClassOf:: [[UTXO Model]]
  - partOf:: [[UTXO Model]]
  - partOf:: [[Transaction Validation]]
  - requires:: [[Digital Signature]]
  - requires:: [[Public Key Cryptography]]
  - hasPart:: [[Hash Function]]
  - implements:: [[Access Control]]
  - enables:: [[Smart Contract]]
  - enables:: [[Transaction Validation]]
  - uses:: [[Bitcoin Script]]
  - uses:: [[Digital Signature]]
  - dependsOn:: [[Public Key Cryptography]]
  - supports:: [[Transaction Validation]]
  - relatedTo:: [[Wallet]]
  - relatedTo:: [[Key Management]]
  - contrastsWith:: [[Smart Contract]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
