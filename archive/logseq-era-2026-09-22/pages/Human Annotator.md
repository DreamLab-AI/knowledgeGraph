public:: true

# Human Annotator

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:human-annotator", "@type":"Page", "title":"Human Annotator", "vc:slug":"human-annotator", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:human-annotator",
  "@type": "Class",
  "label": "Human Annotator",
  "definition": "A human annotator is a person who labels, categorises or reviews raw data samples \u2014 text, images, audio or model outputs \u2014 to produce the ground-truth or preference signals used to train and evaluate machine learning models. Annotators follow labelling guidelines and, for subjective tasks, their agreement is measured via inter-annotator agreement to assess label quality. Human annotators are central to supervised data annotation pipelines and to collecting human feedback for reinforcement learning from human feedback.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-annotation",
      "label": "Data Annotation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:data-annotation",
        "label": "Data Annotation"
      }
    ]
  },
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
  - A human annotator is a person who labels, categorises or reviews raw data samples — text, images, audio or model outputs — to produce the ground-truth or preference signals used to train and evaluate machine learning models. Annotators follow labelling guidelines and, for subjective tasks, their agreement is measured via inter-annotator agreement to assess label quality. Human annotators are central to supervised data annotation pipelines and to collecting human feedback for reinforcement learning from human feedback.
