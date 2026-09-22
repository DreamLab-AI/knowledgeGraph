public:: true

# Causal Loop Diagram
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:causal-loop-diagram",
  "@type": "Page",
  "vc:slug": "causal-loop-diagram",
  "title": "Causal Loop Diagram",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:causal-loop-diagram",
  "@type": "Class",
  "label": "Causal Loop Diagram",
  "definition": "A causal loop diagram (CLD) is a system-dynamics visualisation tool that maps variables as nodes connected by directed causal links, each marked with a positive or negative polarity. Closed chains of links form reinforcing or balancing feedback loops that reveal the structural drivers of a system's behaviour over time. CLDs matter because they expose feedback structure and delays that linear cause-effect thinking misses, supporting qualitative analysis before quantitative simulation.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:system-architecture", "label": "System Architecture"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Causal Loop Diagram represents system variables and their polarised causal links to surface reinforcing and balancing structures, making it the primary notation for reasoning about a [[Feedback Loop]].
- ### Content
  - In a CLD, reinforcing loops drive exponential growth or collapse while balancing loops seek equilibrium, and delays on links explain oscillation and overshoot. Analysts use CLDs as the conceptual stage that precedes building stock-and-flow models for quantitative system-dynamics simulation.
