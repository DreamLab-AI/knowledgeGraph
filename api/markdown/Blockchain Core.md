public:: true

# Blockchain Core
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:blockchain-core",
  "@type": "Page",
  "vc:slug": "blockchain-core",
  "title": "Blockchain Core",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blockchain-core",
  "@type": "Class",
  "label": "Blockchain Core",
  "definition": "Blockchain core denotes the foundational base-layer components of a blockchain system: the consensus protocol, the append-only ledger data structure, the peer-to-peer network, and the validation rules that together produce a shared, tamper-resistant state. It is the substrate on which higher-level constructs such as tokens, wallets, and smart contracts are built. As the trust anchor of a chain, its design dictates the network's security, decentralisation, and throughput.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:blockchain", "label": "Blockchain"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:digital-wallet", "label": "Digital Wallet"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Blockchain core is the base-layer machinery — consensus, ledger, networking, and validation — on which higher-level constructs such as [[Token Economics]] and the [[Digital Wallet]] depend.
- ### Content
  - The core enforces the rules that make state shared and tamper-resistant: nodes validate blocks against protocol rules, reach consensus on canonical history, and gossip data over the P2P network. Its parameters determine the security and decentralisation guarantees inherited by every application layered on top.
