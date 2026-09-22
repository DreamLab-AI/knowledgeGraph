public:: true

# Pairwise QF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:pairwise-qf",
  "@type": "Page",
  "vc:slug": "pairwise-qf",
  "title": "Pairwise QF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pairwise-qf",
  "@type": "Class",
  "label": "Pairwise QF",
  "definition": "Pairwise QF (Pairwise-bounded Quadratic Funding) is a variant of quadratic funding that limits the matching subsidy attributable to coordinating groups of contributors by discounting the influence of pairs who repeatedly co-fund. It mitigates collusion and Sybil attacks that plague naive quadratic funding by capping the matching any pair of donors can jointly unlock. The mechanism preserves quadratic funding's democratic weighting of many small contributions while resisting manipulation.",
  "domain": "blockchain",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:economic-mechanism", "label": "Economic Mechanism"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:quadratic-voting", "label": "Quadratic Voting"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Pairwise QF is a collusion-resistant variant of quadratic funding that caps the matching any coordinating pair can unlock, refining the quadratic-weighting logic shared with [[Quadratic Voting]].
- ### Content
  - By discounting the influence of donors who repeatedly co-fund the same projects, the mechanism blunts Sybil and collusion attacks against standard quadratic funding. It retains the property that many small, independent contributions attract proportionally more matching than a few large ones.
