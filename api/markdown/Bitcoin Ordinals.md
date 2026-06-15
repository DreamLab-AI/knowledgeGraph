public:: true
alias:: Bitcoin-Ordinals

# Bitcoin Ordinals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-ordinals",
  "@type": "Page",
  "vc:slug": "bitcoin-ordinals",
  "title": "Bitcoin Ordinals",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-ordinals",
  "@type": "Class",
  "label": "Bitcoin Ordinals",
  "definition": "Bitcoin Ordinals is a numbering scheme and inscription protocol that assigns a unique serial number to every individual satoshi on the Bitcoin network based on the order of its mining, enabling arbitrary content — text, images, code — to be embedded directly into Bitcoin transactions via the witness data introduced by SegWit and Taproot. Each inscription is permanently stored on-chain without requiring a separate token contract, making it a native non-fungible artefact within the Bitcoin base layer. The protocol was introduced by Casey Rodarmor in January 2023.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
      "label": "Bitcoin Network"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-script",
        "label": "Bitcoin Script"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:taproot",
        "label": "Taproot"
      },
      {
        "@id": "urn:ngm:class:seg-wit",
        "label": "SegWit"
      },
      {
        "@id": "urn:ngm:class:utxo",
        "label": "UTXO"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-core",
        "label": "Bitcoin Core"
      },
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof of Work"
      },
      {
        "@id": "urn:ngm:class:witness-data",
        "label": "Witness Data"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:inscription",
        "label": "Inscription"
      },
      {
        "@id": "urn:ngm:class:brc-20",
        "label": "BRC-20"
      },
      {
        "@id": "urn:ngm:class:satoshi",
        "label": "Satoshi"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:on-chain-storage",
        "label": "On-Chain Storage"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:erc-721",
        "label": "ERC-721"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-art",
        "label": "Digital Art"
      },
      {
        "@id": "urn:ngm:class:digital-asset",
        "label": "Digital Asset"
      },
      {
        "@id": "urn:ngm:class:transaction-fee",
        "label": "Transaction Fee"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Mining"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:digital-collectible",
        "label": "Digital Collectible"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:ordinal-inscription",
      "label": "Ordinal Inscription"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Bitcoin Ordinals]] provides a deterministic ordering of all satoshis ever mined, using the sequence of coinbase transactions and outputs to assign a monotonically increasing integer to each satoshi from genesis. On top of this ordering, the inscription protocol allows content up to 400 kB to be embedded in the witness field of a Taproot [[Blockchain Transaction]], making that satoshi's ordinal number the unique identifier of a non-fungible artefact. Unlike [[NFT]] standards on Ethereum, ordinal inscriptions require no smart contract; the data and its ownership live entirely within the [[Bitcoin Network]] UTXO set.

- ### Relationships
  - [[Bitcoin Ordinals]] depends on [[Bitcoin Script]] to construct valid Taproot reveal transactions and on [[Bitcoin Core]] for node support. It competes and coexists with [[NFT]] paradigms on other chains, drawing [[Digital Art]] and collectibles communities to Bitcoin for the first time at scale. The protocol has driven significant growth in [[Blockchain Transaction]] volume and [[Transaction Fee]] revenues for miners.

- ### Content
  - The Ordinals theory was formalised by Casey Rodarmor and published in January 2023, drawing on prior academic work on coloured coins and leveraging the expanded witness capacity unlocked by the 2021 Taproot upgrade. The key insight was that satoshis, as the atomic unit of Bitcoin, could be given permanent identity through their mining order without modifying Bitcoin's consensus rules — inscriptions are valid transactions from the perspective of every existing node.

  - Technically, an inscription is created in two transactions: a commit transaction that locks funds to a Taproot output, and a reveal transaction that spends it and embeds data in the witness script using a series of `OP_FALSE OP_IF ... OP_ENDIF` opcodes. Content is MIME-typed and stored verbatim, so images, HTML, JavaScript, and even small applications can be inscribed. The ordinal number of the first input satoshi is conventionally treated as the inscription's ID.

  - The ecosystem around Ordinals developed rapidly through 2023 with marketplaces such as Magic Eden and Gamma, indexing services including the `ord` command-line tool, and wallets adding sat-control features to avoid accidentally spending inscribed satoshis. BRC-20, an experimental token standard layered on Ordinals using JSON inscriptions, further increased transaction volume and generated significant controversy over Bitcoin's purpose.

  - By 2024–2025 Ordinals had generated over 60 million inscriptions and produced transaction fee spikes that temporarily exceeded block subsidy — a phenomenon Bitcoin advocates had long theorised but not witnessed. Debate continues within the Bitcoin community about whether on-chain data storage is an appropriate use of block space, whilst artists and developers continue to explore Bitcoin as a permanent, censorship-resistant inscription medium.