public:: true

# Human Annotation Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:human-annotation",
  "@type": "Page",
  "vc:slug": "human-annotation",
  "title": "Human Annotation Data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:human-annotation",
  "@type": "Class",
  "label": "Human Annotation Data",
  "definition": "Human annotation data is the output of people labelling, ranking, or judging raw content, such as text, images, audio, or model responses, to create ground-truth signals for training and evaluating machine learning systems. It is produced through structured annotation workflows involving guidelines, multiple annotators, and inter-annotator agreement checks such as Cohen's kappa. Human annotation data underpins supervised learning, evaluation metrics such as COMET, and reinforcement learning from human feedback, where annotators' preference judgements directly shape model behaviour.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-annotation",
      "label": "Data Annotation"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Human annotation data is the output of people labelling, ranking, or judging raw content, such as text, images, audio, or model responses, to create ground-truth signals for training and evaluating machine learning systems. It is produced through structured annotation workflows involving guidelines, multiple annotators, and inter-annotator agreement checks such as Cohen's kappa. Human annotation data underpins supervised learning, evaluation metrics such as COMET, and reinforcement learning from human feedback, where annotators' preference judgements directly shape model behaviour.
