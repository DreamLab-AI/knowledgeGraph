public:: true

# UTXO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0088f03f87629715253ec839e6d0257f7ce06e52cd2c2a1e777517843c70b7e3",
  "@type": "Page",
  "vc:slug": "utxo",
  "title": "UTXO",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-hash-function",
      "vc:label": "Cryptographic Hash Function"
    },
    {
      "@id": "urn:visionflow:linked:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:linked:bitcoin",
      "vc:label": "Bitcoin"
    },
    {
      "@id": "urn:visionflow:linked:cardano",
      "vc:label": "Cardano"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "UTXO"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:utxo",
  "@type": "Class",
  "label": "UTXO",
  "definition": "UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.",
  "domain": "utxo",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-domain",
      "label": "Blockchain Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol",
        "label": "Bitcoin"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:utxo:17f95e3b95d2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0088f03f87629715253ec839e6d0257f7ce06e52cd2c2a1e777517843c70b7e3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Hash Function]]",
      "resolved": "urn:visionflow:linked:cryptographic-hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Signature]]",
      "resolved": "urn:visionflow:linked:digital-signature",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Proof-of-Work Protocol]]",
      "resolved": "urn:visionflow:linked:bitcoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cardano]]",
      "resolved": "urn:visionflow:linked:cardano",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - UTXO (Unspent Transaction Output) is an accounting model used by Bitcoin and several other blockchains in which the ledger state consists of discrete unspent outputs rather than account balances. Each transaction consumes one or more existing unspent outputs as inputs and creates new outputs, and a coin is simply an output that has not yet been spent. Ownership is established by satisfying the locking script attached to an output, typically by providing a valid signature. The model contrasts with the account-based approach used by Ethereum and supports straightforward parallel validation and privacy techniques.

- ### Semantic Classification
  - owl-class:: bc:UTXO
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Cardano]]
  - requires:: [[Cryptographic Hash Function]], [[Digital Signature]]
  - enables:: [[Bitcoin Proof-of-Work Protocol]]

- ### Content
  - In the UTXO model the global state is the set of all outputs that have been created but not yet spent. A wallet's balance is not stored directly; it is the sum of the unspent outputs that the wallet can unlock. Spending consumes whole outputs as inputs and produces new outputs, with any difference returned as change to the spender.
  - Each output carries a locking condition, often a script requiring a signature from a particular key, and an input must supply data that satisfies it. Because outputs are independent, transactions that touch disjoint sets of outputs can be validated in parallel, and the model avoids certain ordering issues present in account-based systems.
  - The UTXO approach originates with Bitcoin and is also used, in extended forms, by chains such as Cardano, whose EUTXO model attaches arbitrary data and scripts to outputs. It contrasts with the account and balance model of Ethereum, and the two designs imply different trade-offs in programmability, concurrency and privacy.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
