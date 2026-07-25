public:: true

# Reference Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:reference-model",
  "@type": "Page",
  "vc:slug": "reference-model",
  "title": "Reference Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:reference-model",
  "@type": "Class",
  "label": "Reference Model",
  "definition": "A reference model is an abstract, authoritative description of the desired behaviour or structure of a system, used as the standard against which an actual implementation is measured or controlled. In control theory it specifies the ideal closed-loop response that a model-reference adaptive controller drives the plant to follow. In evaluation it serves as the baseline whose outputs define the expected target.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:control-algorithm", "label": "Control Algorithm"},
      {"@id": "urn:ngm:class:evaluation-benchmarks-and-leaderboards", "label": "Evaluation benchmarks and leaderboards"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A reference model defines the ideal target behaviour a system should exhibit, providing the baseline that a [[Control Algorithm]] tracks and that [[Evaluation Benchmarks and Leaderboards]] compare against.
- ### Content
  - In model-reference adaptive control, the controller adjusts its parameters so the plant output converges to the reference model's response despite uncertainty. More broadly, reference models give designers a precise specification of correct behaviour, separating what the system should do from how it is realised.
