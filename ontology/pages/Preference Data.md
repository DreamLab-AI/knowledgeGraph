public:: true

# Preference Data
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:preference-data",
  "@type": "Page",
  "title": "Preference Data",
  "vc:slug": "preference-data",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:preference-data",
  "@type": "Class",
  "label": "Preference Data",
  "definition": "Preference data is a dataset of paired or ranked comparisons in which human annotators indicate which of two or more model outputs they prefer, rather than providing an absolute quality score. It is the primary training signal for reward models used in reinforcement learning from human feedback, since relative judgements are typically easier and more consistent for annotators to produce than calibrated absolute ratings. The quality and diversity of preference data materially shape the behaviour that RLHF instils in a model.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:human-preference",
      "label": "Human Preference"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:human-preference",
        "label": "Human Preference"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Preference data is a dataset of paired or ranked comparisons in which human annotators indicate which of two or more model outputs they prefer, rather than providing an absolute quality score.
  - It is a subclass of [[Human Preference]].
- ### Content
  - Preference data is a dataset of paired or ranked comparisons in which human annotators indicate which of two or more model outputs they prefer, rather than providing an absolute quality score. It is the primary training signal for reward models used in reinforcement learning from human feedback, since relative judgements are typically easier and more consistent for annotators to produce than calibrated absolute ratings. The quality and diversity of preference data materially shape the behaviour that RLHF instils in a model.
