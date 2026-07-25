public:: true

# Influence Maximisation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:influence-maximisation",
  "@type": "Page",
  "title": "Influence Maximisation",
  "vc:slug": "influence-maximisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:influence-maximisation",
  "@type": "Class",
  "label": "Influence Maximisation",
  "definition": "Influence maximisation is the combinatorial optimisation problem of selecting a small set of seed nodes in a network so as to maximise the expected spread of information, adoption or behaviour under a diffusion model such as independent cascade or linear threshold. It is NP-hard in general, so practical algorithms rely on submodularity-based greedy approximation or scalable heuristics. It is applied in social network analysis for viral marketing, epidemic containment planning and identifying key influencers.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-analysis",
      "label": "Network Analysis"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Influence maximisation is the combinatorial optimisation problem of selecting a small set of seed nodes in a network so as to maximise the expected spread of information, adoption or behaviour under a diffusion model such as independent cascade or linear threshold. It is NP-hard in general, so practical algorithms rely on submodularity-based greedy approximation or scalable heuristics. It is applied in social network analysis for viral marketing, epidemic containment planning and identifying key influencers.
- ### Relationships
	- subClassOf:: [[Network Analysis]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
