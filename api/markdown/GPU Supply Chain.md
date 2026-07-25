public:: true

# GPU Supply Chain

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:gpu-supply-chain",
  "@type": "Page",
  "title": "GPU Supply Chain",
  "vc:slug": "gpu-supply-chain",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gpu-supply-chain",
  "@type": "Class",
  "label": "GPU Supply Chain",
  "definition": "The GPU supply chain is the network of design, fabrication, packaging and distribution processes that produce graphics processing units used for AI training and inference, spanning fabless designers, foundries such as TSMC, memory suppliers and system integrators. Its capacity constraints and export controls directly shape which organisations can access the compute needed for frontier model development. It is a specific, compute-focused segment of the broader semiconductor supply chain.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:semiconductor-supply-chain",
      "label": "Semiconductor Supply Chain"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- The GPU supply chain is the network of design, fabrication, packaging and distribution processes that produce graphics processing units used for AI training and inference, spanning fabless designers, foundries such as TSMC, memory suppliers and system integrators. Its capacity constraints and export controls directly shape which organisations can access the compute needed for frontier model development. It is a specific, compute-focused segment of the broader semiconductor supply chain.
	- It is a [[Semiconductor Supply Chain]] concept.
- ### Relationships
	- subClassOf:: [[Semiconductor Supply Chain]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
