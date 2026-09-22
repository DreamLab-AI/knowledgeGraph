public:: true

# User Behaviour Data

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:user-behaviour-data",
  "@type": "Page",
  "title": "User Behaviour Data",
  "vc:slug": "user-behaviour-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-behaviour-data",
  "@type": "Class",
  "label": "User Behaviour Data",
  "definition": "User behaviour data is the record of actions a user takes while interacting with a system, such as clicks, views, purchases, dwell time and navigation paths. It is collected through logging and instrumentation and forms the primary training signal for collaborative filtering, recommendation and personalisation systems. Its quality and volume directly determine how accurately downstream models can infer user preferences and predict future actions.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dataset",
      "label": "Dataset"
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
	- User behaviour data is the record of actions a user takes while interacting with a system, such as clicks, views, purchases, dwell time and navigation paths. It is collected through logging and instrumentation and forms the primary training signal for collaborative filtering, recommendation and personalisation systems. Its quality and volume directly determine how accurately downstream models can infer user preferences and predict future actions.
- ### Relationships
	- subClassOf:: [[Dataset]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
