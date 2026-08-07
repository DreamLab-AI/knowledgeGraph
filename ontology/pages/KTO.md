public:: true

# KTO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:kto",
  "@type": "Page",
  "vc:slug": "kto",
  "title": "KTO",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:kto",
  "@type": "Class",
  "label": "KTO",
  "definition": "KTO (Kahneman-Tversky Optimization) is a method for aligning language models that learns from binary good or bad feedback on individual outputs rather than paired preference comparisons. Drawing on prospect theory, it defines a utility-based loss that down-weights losses relative to gains, simplifying data collection compared with preference-pair methods. It is an alternative to direct preference optimization in the post-training alignment toolkit.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:direct-preference-optimisation", "label": "Direct Preference Optimization"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - KTO is a prospect-theory-inspired alignment objective that, unlike [[Direct Preference Optimisation]], learns from unpaired binary feedback, making it a practical component of the [[Model Training]] alignment stage.
- ### Content
  - Because KTO needs only a desirable/undesirable label per sample, it avoids the costly construction of preference pairs while remaining competitive in alignment quality. Its loss asymmetrically penalises degradations more than it rewards improvements, mirroring human loss aversion and producing models that are conservative about regressions.
