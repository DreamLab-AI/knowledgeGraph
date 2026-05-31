public:: true

# Social Choice Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:social-choice-theory",
  "@type": "Page",
  "vc:slug": "social-choice-theory",
  "title": "Social Choice Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:social-choice-theory",
  "@type": "Class",
  "label": "Social Choice Theory",
  "definition": "Social choice theory is the formal study of how individual preferences can be aggregated into a collective decision, examining the properties, fairness, and impossibility constraints of voting rules and welfare functions. Foundational results such as Arrow's impossibility theorem show that no rank-aggregation rule can simultaneously satisfy a small set of seemingly reasonable fairness axioms. It provides the theoretical underpinning for voting mechanism design in both political and digital governance systems.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:economics", "label": "Economics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:economics", "label": "Economics"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Social choice theory is a branch of [[Economics]] that formalises how individual preferences aggregate into collective decisions, characterising the fairness and impossibility limits of voting and welfare aggregation rules.
- ### Content
  - Landmark results such as Arrow's impossibility theorem and the Gibbard-Satterthwaite theorem demonstrate fundamental trade-offs in any rank-based aggregation rule. The discipline directly informs [[Governance]] mechanism design, supplying the analytical framework used to evaluate quadratic voting, ranked-choice ballots, and token-weighted on-chain governance for desirable properties and manipulation resistance.
