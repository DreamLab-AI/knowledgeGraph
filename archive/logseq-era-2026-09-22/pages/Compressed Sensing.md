public:: true

# Compressed Sensing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:compressed-sensing", "@type":"Page", "title":"Compressed Sensing", "vc:slug":"compressed-sensing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:compressed-sensing",
  "@type":"Class",
  "label":"Compressed Sensing",
  "definition":"Compressed sensing is a signal processing technique that reconstructs a signal from far fewer samples than classical sampling theory requires, exploiting the fact that many real-world signals are sparse in some basis. Reconstruction is typically posed as a convex optimisation problem that recovers the sparsest signal consistent with the observed measurements. It has applications in medical imaging, wireless communications and any domain where sampling is costly or constrained.",
  "domain":"machine-learning",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:sparse-representation","label":"Sparse Representation"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:convex-optimisation","label":"Convex Optimisation"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Compressed Sensing]] Compressed sensing is a signal processing technique that reconstructs a signal from far fewer samples than classical sampling theory requires, exploiting the fact that many real-world signals are sparse in some basis. Reconstruction is typically posed as a convex optimisation problem that recovers the sparsest signal consistent with the observed measurements. It has applications in medical imaging, wireless communications and any domain where sampling is costly or constrained.
- ### Relationships
	- subClassOf:: [[Sparse Representation]]
	- requires:: [[Convex Optimisation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
