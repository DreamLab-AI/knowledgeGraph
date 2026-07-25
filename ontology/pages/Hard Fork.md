public:: true

# Hard Fork

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:visionflow:page:ngm-hard-fork",
  "@type": "Page",
  "vc:slug": "hard-fork",
  "title": "Hard Fork",
  "vc:public": true,
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hard-fork",
  "@type": "Class",
  "label": "Hard Fork",
  "definition": "A Hard Fork is a backward-incompatible change to a blockchain protocol's consensus rules that permanently diverges the chain into two distinct networks if not universally adopted by all nodes. Because old software versions reject blocks produced under the new rules, a hard fork requires coordinated network-wide consensus to proceed without a chain split. Historical hard forks include the Ethereum/Ethereum Classic split in 2016 and the Bitcoin/Bitcoin Cash split in 2017.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:bc-protocol-and-consensus", "label": "Protocol and Consensus"}
  ],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:cryptocurrency-mining", "label": "Cryptocurrency Mining"}]
  },
  "quality": 0.7
}
```

- ### Definition
  - A backward-incompatible blockchain protocol upgrade that permanently splits the chain into two networks if not universally adopted, requiring coordinated consensus to avoid a chain split.
