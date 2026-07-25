public:: true

# Slashing Condition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:slashing-condition",
  "@type": "Page",
  "vc:slug": "slashing-condition",
  "title": "Slashing Condition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:slashing-condition",
  "@type": "Class",
  "label": "Slashing Condition",
  "definition": "A slashing condition is a rule in a proof-of-stake protocol that defines provable validator misbehaviour, such as double-signing or equivocation, and triggers the forfeiture of part of the offender's staked collateral. It makes attacks economically costly by penalising actions that threaten consensus safety, aligning validator incentives with honest participation. It is a core economic-security primitive of staking-based consensus.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:sustainable-consensus", "label": "Sustainable Consensus"}, {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A slashing condition is a proof-of-stake rule that defines provable validator faults and burns part of the staked collateral when they occur. It is a structural part of a [[Consensus Mechanism]] and of [[Sustainable Consensus]] designs.
- ### Content
  - Typical conditions penalise double-signing two conflicting blocks or surround votes that violate finality rules; severe correlated faults attract proportionally larger penalties. By bonding economic value to honest behaviour, slashing replaces the energy expenditure of proof-of-work as the deterrent against consensus attacks.
