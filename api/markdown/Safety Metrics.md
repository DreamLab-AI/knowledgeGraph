public:: true

# Safety Metrics

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:safety-metrics", "@type":"Page", "title":"Safety Metrics", "vc:slug":"safety-metrics", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:safety-metrics",
  "@type":"Class",
  "label":"Safety Metrics",
  "definition":"Safety Metrics are quantitative measures used to assess how safely a robotic or autonomous system behaves around humans, such as minimum separation distance, collision frequency, time-to-contact, and force limits during physical contact. They provide an objective basis for comparing systems, setting regulatory thresholds, and validating that a human-robot interaction design meets acceptable risk levels. They are typically measured through instrumented testing rather than self-reported system logs alone.",
  "domain":"robotics",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:robot-safety","label":"Robot Safety"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Safety Metrics are quantitative measures used to assess how safely a robotic or autonomous system behaves around humans, such as minimum separation distance, collision frequency, time-to-contact, and force limits during physical contact. They provide an objective basis for comparing systems, setting regulatory thresholds, and validating that a human-robot interaction design meets acceptable risk levels. They are typically measured through instrumented testing rather than self-reported system logs alone.
- ### Relationships
	- subClassOf:: [[Robot Safety]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
