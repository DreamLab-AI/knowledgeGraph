public:: true

# Bitcoin Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-network",
  "@type": "Page",
  "vc:slug": "bitcoin-network",
  "title": "Bitcoin Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network",
  "@type": "Class",
  "label": "Bitcoin Network",
  "definition": "The Bitcoin Network is the global, permissionless peer-to-peer infrastructure underpinning the Bitcoin cryptocurrency, comprising nodes, miners, and the communication protocol that propagates transactions and blocks. It operates without a central authority, using the Nakamoto consensus mechanism—proof-of-work—to achieve agreement on a shared transaction ledger. The network enforces monetary policy through its protocol rules, capping total supply and adjusting mining difficulty automatically. It has operated continuously since January 2009, making it the longest-running blockchain network.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:mempool", "label": "Mempool"},
      {"@id": "urn:ngm:class:utxo-model", "label": "UTXO Model"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:bc-cryptographic-primitive", "label": "Cryptographic Primitive"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-technical-overview", "label": "Bitcoin Technical Overview"},
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Bitcoin Network]] is the decentralised [[Peer-to-Peer Network]] of nodes and miners that maintains the Bitcoin blockchain, using [[Proof Of Work]] and [[Nakamoto Consensus]] to reach trustless agreement on a global transaction ledger.
- ### Relationships
  - The [[Bitcoin Network]] contains [[Bitcoin Mining]] nodes that compete to append blocks, a [[Mempool]] holding unconfirmed transactions, and the [[UTXO Model]] as its accounting primitive. It relies on [[Cryptographic Primitive]] operations for digital signatures and block hashing. The network enables higher-layer systems such as the [[Lightning Network]] and underpins [[Cryptocurrency]] as an asset class. Its design informs the broader [[Blockchain]] space and is documented in detail within the [[Bitcoin Technical Overview]].
- ### Content
  - The Bitcoin Network launched in January 2009 as the first practical realisation of Satoshi Nakamoto's 2008 whitepaper. It consists of tens of thousands of full nodes worldwide that independently validate every transaction against the protocol rules, refusing to propagate or accept invalid transactions regardless of miner behaviour. This decentralised validation is the primary defence against protocol corruption.

  - Mining nodes bundle valid transactions from the mempool into candidate blocks and compete to find a hash below the difficulty target by iterating a nonce. The difficulty adjusts every 2,016 blocks (roughly two weeks) to maintain an average ten-minute block interval regardless of total hash-rate fluctuations. Block rewards follow a halving schedule, reducing miner subsidy by half approximately every four years, with a hard cap of 21 million BTC.

  - The UTXO model structures the ledger as a set of unspent outputs rather than account balances, enabling parallel validation and simplifying lightweight (SPV) verification by mobile clients. Transactions consume existing UTXOs and create new ones, with the signature script satisfying the prior locking script.

  - Scalability limitations—approximately seven on-chain transactions per second—have driven layer-2 development, most notably the Lightning Network, which settles payment channels on-chain while routing millions of micro-payments off-chain. Ongoing Bitcoin Improvement Proposals continue to extend scripting capabilities and privacy without altering the core consensus rules.
