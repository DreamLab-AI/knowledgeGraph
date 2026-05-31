public:: true

# Block Snapshot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:block-snapshot",
  "@type": "Page",
  "vc:slug": "block-snapshot",
  "title": "Block Snapshot",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:block-snapshot",
  "@type": "Class",
  "label": "Block Snapshot",
  "definition": "A block snapshot is a record of on-chain state, typically token balances or governance weights, captured at a specific block height. In decentralised governance it freezes voting power at a chosen block so that token holdings used to weight votes cannot be manipulated by transfers during the voting window. Snapshots underpin gasless off-chain voting systems and fair airdrop distributions by providing a tamper-evident, reproducible baseline state.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-governance-and-regulation", "label": "Blockchain Governance and Regulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:on-chain-voting", "label": "On-Chain Voting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A block snapshot freezes on-chain balances or voting weights at a given block height, providing the tamper-evident baseline that [[On-Chain Voting]] requires for fair vote weighting.
- ### Content
  - By fixing eligibility and voting power at a pre-announced block, snapshots prevent vote-buying via last-minute token transfers. The same mechanism supports reproducible airdrop eligibility and any process that must reference a deterministic past state of the ledger.
