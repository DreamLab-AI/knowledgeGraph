public:: true

# Inner Product

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:inner-product", "@type":"Page", "title":"Inner Product", "vc:slug":"inner-product", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:inner-product",
  "@type":"Class",
  "label":"Inner Product",
  "definition":"An inner product is a bilinear operation on a vector space that combines two vectors to produce a scalar, generalising the geometric notion of a dot product to abstract vector spaces. It defines notions of length and angle, and its normalised form underlies cosine similarity, a standard measure of semantic closeness between embeddings. Inner products are computed extensively in semantic search systems to rank candidate vectors against a query vector.",
  "domain":"machine-learning",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:linear-algebra","label":"Linear Algebra"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An inner product is a bilinear operation on a vector space that combines two vectors to produce a scalar, generalising the geometric notion of a dot product to abstract vector spaces. It defines notions of length and angle, and its normalised form underlies cosine similarity, a standard measure of semantic closeness between embeddings. Inner products are computed extensively in semantic search systems to rank candidate vectors against a query vector.
- ### Relationships
	- subClassOf:: [[Linear Algebra]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
