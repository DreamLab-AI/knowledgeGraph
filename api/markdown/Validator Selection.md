public:: true

# Validator Selection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:validator-selection",
  "@type": "Page",
  "vc:slug": "validator-selection",
  "title": "Validator Selection",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:validator-selection",
  "@type": "Class",
  "label": "Validator Selection",
  "definition": "Validator selection is the consensus mechanism by which a proof-of-stake blockchain chooses which staked participants are eligible to propose and attest to blocks in a given slot or epoch. It typically uses stake-weighted, often pseudo-randomised sampling to assign block production while preserving security and decentralisation. The design directly affects fairness, finality, energy efficiency and resistance to manipulation.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:testnet", "label": "Testnet"}, {"@id": "urn:ngm:class:proof-of-stake-sustainability", "label": "Proof of Stake Sustainability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Validator selection is the stake-weighted process for choosing block proposers in proof-of-stake networks, tested on a [[Testnet]] and central to [[Proof of Stake Sustainability]].
- ### Content
  - Mechanisms use verifiable random functions or committee sampling weighted by stake to assign duties unpredictably yet fairly. Good selection design balances liveness, finality and decentralisation while limiting the influence of large stakeholders and minimising energy use relative to proof-of-work.
