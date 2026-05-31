public:: true

# Tessera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:tessera",
  "@type": "Page",
  "vc:slug": "tessera",
  "title": "Tessera",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:tessera",
  "@type": "Class",
  "label": "Tessera",
  "definition": "Tessera is a private-transaction manager used with the Quorum enterprise Ethereum client to store and exchange encrypted payloads between authorised parties off the main chain. It enables confidential smart-contract state by keeping private data outside public blocks while anchoring only encrypted hashes on-chain. Tessera is a key component for enterprises that need permissioned, privacy-preserving distributed-ledger deployments.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bc-network-component", "label": "Blockchain Network Component"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:quorum-blockchain", "label": "Quorum Blockchain"},
      {"@id": "urn:ngm:class:enterprise-smart-contracts", "label": "Enterprise Smart Contracts"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Tessera is the private-transaction manager for the [[Quorum Blockchain]], handling encrypted payload exchange that gives confidentiality to [[Enterprise Smart Contracts]].
- ### Content
  - Each Quorum node pairs with a Tessera instance that encrypts private transaction payloads, distributes them only to the relevant participants, and stores them off-chain, while the public ledger records just a hash. This separation lets a consortium share a common chain yet keep sensitive contract data visible only to authorised members. Tessera supports pluggable key vaults and enclave-based encryption, succeeding the earlier Constellation manager in production permissioned networks.
