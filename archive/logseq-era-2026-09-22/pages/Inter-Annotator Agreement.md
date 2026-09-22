public:: true

# Inter-Annotator Agreement

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inter-annotator-agreement", "@type":"Page", "title":"Inter-Annotator Agreement", "vc:slug":"inter-annotator-agreement", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:inter-annotator-agreement",
  "@type":"Class",
  "label":"Inter-Annotator Agreement",
  "definition":"Inter-annotator agreement is a measure of the degree to which independent human annotators assign consistent labels to the same data, commonly quantified using statistics such as Cohen's kappa or Krippendorff's alpha. It is used to assess the reliability of human evaluation and human feedback used to train or benchmark AI systems, since low agreement signals ambiguous guidelines or task definitions. High inter-annotator agreement is generally treated as a precondition for trusting labelled data as ground truth.",
  "domain":"ai",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:human-evaluation","label":"Human Evaluation"}],
  "relations":{
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Inter-Annotator Agreement]] Inter-annotator agreement is a measure of the degree to which independent human annotators assign consistent labels to the same data, commonly quantified using statistics such as Cohen's kappa or Krippendorff's alpha. It is used to assess the reliability of human evaluation and human feedback used to train or benchmark AI systems, since low agreement signals ambiguous guidelines or task definitions. High inter-annotator agreement is generally treated as a precondition for trusting labelled data as ground truth.
- ### Relationships
	- subClassOf:: [[Human Evaluation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
