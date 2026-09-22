public:: true

# Net Zero Target Setting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:net-zero-target-setting",
  "@type": "Page",
  "vc:slug": "net-zero-target-setting",
  "title": "Net Zero Target Setting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:net-zero-target-setting",
  "@type": "Class",
  "label": "Net Zero Target Setting",
  "definition": "Net zero target setting is the structured process by which an organisation or jurisdiction defines, scopes, and commits to balancing its greenhouse-gas emissions with removals by a stated date. It involves establishing a baseline, defining the emission scopes covered, setting interim milestones, and aligning the trajectory with a science-based decarbonisation pathway. Credible targets specify boundaries and the role of offsets to avoid greenwashing.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sustainability", "label": "Sustainability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:net-zero-targets", "label": "Net Zero Targets"},
      {"@id": "urn:ngm:class:carbon-footprint-measurement", "label": "Carbon Footprint Measurement"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Net zero target setting is the process of defining and committing to a dated emissions-balancing goal. It produces concrete [[Net Zero Targets]] and is enabled by reliable [[Carbon Footprint Measurement]].
- ### Content
  - Robust target setting follows recognised frameworks (for example the Science Based Targets initiative) that require coverage of Scopes 1 to 3, near-term milestones, and limits on the use of carbon credits. Without an accurate emissions inventory the target lacks a baseline, so measurement and target setting are tightly coupled in practice.
