public:: true

# Slashing Conditions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:slashing-conditions",
  "@type": "Page",
  "vc:slug": "slashing-conditions",
  "title": "Slashing Conditions",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:slashing-conditions",
  "@type": "Class",
  "label": "Slashing Conditions",
  "definition": "Slashing conditions are the set of cryptographically provable validator violations that a proof-of-stake blockchain protocol enforces by destroying or redistributing staked tokens. Encoded directly in protocol logic, they cover equivocation, surround votes, and prolonged unavailability, and their parameters set the strength of the chain's economic security. They are an implemented enforcement mechanism in modern blockchain protocols.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:blockchain-protocol", "label": "Blockchain Protocol"}, {"@id": "urn:ngm:class:proof-of-stake-sustainability", "label": "Proof-of-Stake Sustainability"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Slashing conditions are the provable validator faults a proof-of-stake chain punishes by burning or redistributing stake, encoded directly in protocol logic. They are implemented by a [[Blockchain Protocol]] and are integral to [[Proof-of-Stake Sustainability]].
- ### Content
  - The conditions and their penalty curves define how expensive it is to attack finality, with correlated faults penalised more heavily to deter coordinated misbehaviour. By substituting bonded capital for energy as the security budget, well-tuned slashing conditions let proof-of-stake match proof-of-work security at a fraction of the energy cost.
