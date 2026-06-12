public:: true

# Bitcoin Core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitcoin-core",
  "@type": "Page",
  "vc:slug": "bitcoin-core",
  "title": "Bitcoin Core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-core",
  "@type": "Class",
  "label": "Bitcoin Core",
  "definition": "Bitcoin Core is the reference implementation of the Bitcoin protocol, providing the canonical software stack that full nodes run to validate transactions, enforce consensus rules, and maintain a complete copy of the blockchain. First released by Satoshi Nakamoto in 2009 and since maintained by an open-source community, it defines the authoritative behaviour of the Bitcoin network through its codebase. Bitcoin Core includes a wallet, a peer-to-peer networking layer, a scripting engine, and the mining interface used to produce new blocks. Consensus-critical changes are introduced through Bitcoin Improvement Proposals, ensuring backward compatibility and broad community review before deployment.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-hash-function", "label": "Cryptographic Hash Function"},
      {"@id": "urn:ngm:class:peer-to-peer-network", "label": "Peer-to-Peer Network"},
      {"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network", "label": "Bitcoin Network"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-mining", "label": "Bitcoin Mining"},
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-improvement-proposals", "label": "Bitcoin Improvement Proposals"},
      {"@id": "urn:ngm:class:distributed-ledger", "label": "Distributed Ledger"},
      {"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Bitcoin Core is the reference software implementation of the [[Bitcoin Network]] protocol, enforcing [[Nakamoto Consensus]] rules and maintaining the full [[Distributed Ledger]] on nodes that choose to run it.
- ### Relationships
  - Bitcoin Core implements [[Proof Of Work]] mining and validates every transaction against the [[Consensus Mechanism]] rules encoded in its C++ codebase. It communicates over a [[Peer-to-Peer Network]] using the Bitcoin protocol and processes blocks secured by [[Cryptographic Hash Function]] algorithms. Proposed changes to the protocol are formalised through [[Bitcoin Improvement Proposals]], and miners participate via [[Bitcoin Mining]] infrastructure. The software underpins the entire [[Blockchain Protocol]] stack relied upon by other Bitcoin applications.
- ### Content
  - Bitcoin Core operates as a full node, downloading and independently verifying every block since the genesis block. This trustless validation model ensures that no central authority can alter the history or inflate the supply beyond the 21-million-coin schedule enforced in code. The node synchronises with peers on the [[Bitcoin Network]] using the gossip protocol, sharing transactions and block headers.

  - The [[Proof Of Work]] consensus engine, first described in the original Nakamoto whitepaper, requires miners to find a nonce that produces a block hash below a difficulty target. The [[Nakamoto Consensus]] rule is simple: the chain with the most accumulated proof-of-work is valid. This rule resolves forks deterministically without requiring a coordinator.

  - Bitcoin Core's scripting language enables basic programmable conditions on spending, including multi-signature requirements and timelocked outputs. Upgrades such as Segregated Witness and Taproot, introduced through [[Bitcoin Improvement Proposals]], extended scripting capabilities whilst preserving backward compatibility through soft-fork activation mechanisms.

  - The wallet component manages private keys, constructs transactions, and tracks UTXO balances. Users can run Bitcoin Core in pruned mode to reduce storage requirements, retaining only recent blocks whilst still enforcing all consensus rules. The JSON-RPC interface exposes Bitcoin Core functionality to higher-level applications and exchange systems.
