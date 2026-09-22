public:: true

# Harm Taxonomy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:harm-taxonomy",
  "@type": "Page",
  "vc:slug": "harm-taxonomy",
  "title": "Harm Taxonomy",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:harm-taxonomy",
  "@type": "Class",
  "label": "Harm Taxonomy",
  "definition": "A harm taxonomy is a structured classification of the potential negative impacts arising from a technology, used to organise risk assessment and mitigation. In AI it categorises harms such as misinformation, discrimination, privacy violation, manipulation, and physical or economic damage. A clear taxonomy enables systematic red-teaming, policy mapping, and accountability for deployed systems.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-governance-and-ethics", "label": "AI Governance and Ethics"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-society-harms", "label": "Digital Society Harms"},
      {"@id": "urn:ngm:class:ai-risks", "label": "AI Risks"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A harm taxonomy is a structured classification of risks that underpins analysis of [[Digital Society Harms]] and organises the broader space of [[AI Risks]].
- ### Content
  - Taxonomies typically separate harms by affected party, severity, and causal mechanism, distinguishing representational from allocative harms and individual from societal effects. They give governance teams a shared vocabulary to map mitigations, regulatory obligations, and evaluation tests onto concrete categories.
