public:: true

# Positive Feedback
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:positive-feedback",
  "@type": "Page",
  "vc:slug": "positive-feedback",
  "title": "Positive Feedback",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:positive-feedback",
  "@type": "Class",
  "label": "Positive Feedback",
  "definition": "Positive feedback is a control and systems mechanism in which the output of a process amplifies the input that produced it, reinforcing change rather than damping it. While destabilising in control systems, it underlies self-reinforcing dynamics such as network effects, exponential growth, and adoption cascades. Its behaviour contrasts with negative feedback, which seeks equilibrium.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"},
      {"@id": "urn:ngm:class:network-effects", "label": "Network Effects"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Positive feedback amplifies a system's output back into its input, reinforcing rather than correcting change. It is a specific implementation of a [[Feedback Loop]] and is the mechanistic basis of [[Network Effects]].
- ### Content
  - In engineered control systems positive feedback can drive instability, oscillation, or saturation and is generally avoided unless intentionally used for switching (e.g. latches, Schmitt triggers). In economic and social systems it produces self-reinforcing growth such as adoption cascades, winner-take-all markets, and viral spread, where each new participant increases the value or pressure that attracts the next.
