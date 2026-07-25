public:: true

# Ground Truth

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ground-truth", "@type":"Page", "title":"Ground Truth", "vc:slug":"ground-truth", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ground-truth",
  "@type":"Class",
  "label":"Ground Truth",
  "definition":"Ground truth is the set of verified, correct labels or measurements against which a model's predictions are compared to assess accuracy. It is typically produced by expert annotation, direct measurement, or a trusted reference process, and underpins benchmark datasets used for training and evaluation. The reliability of any accuracy or error metric is bounded by the quality of the ground truth it is measured against.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:dataset","label":"Dataset"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:dataset","label":"Dataset"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Ground truth is the set of verified, correct labels or measurements against which a model's predictions are compared to assess accuracy. It is typically produced by expert annotation, direct measurement, or a trusted reference process, and underpins benchmark datasets used for training and evaluation. The reliability of any accuracy or error metric is bounded by the quality of the ground truth it is measured against.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
