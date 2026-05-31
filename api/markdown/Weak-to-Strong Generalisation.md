public:: true

# Weak-to-Strong Generalisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:weak-to-strong-generalisation",
  "@type": "Page",
  "vc:slug": "weak-to-strong-generalisation",
  "title": "Weak-to-Strong Generalisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:weak-to-strong-generalisation",
  "@type": "Class",
  "label": "Weak-to-Strong Generalisation",
  "definition": "Weak-to-strong generalisation is an AI-alignment research paradigm investigating whether a more capable model can be reliably supervised and improved using labels or feedback from a weaker supervisor. It serves as an empirical analogue for the superalignment problem, in which humans must oversee superhuman systems they cannot fully evaluate. Findings explore how strong students recover latent capabilities beyond the noisy weak teacher's own performance.",
  "domain": "ai",
  "maturity": "experimental",
  "subClassOf": [{"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and Alignment"}, {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Weak-to-strong generalisation studies whether weak supervisors can elicit reliable behaviour from stronger models, a core line of [[Safety and Alignment]] research relevant to [[AI Governance]] of superhuman systems.
- ### Content
  - Experiments fine-tune a strong pretrained model on labels produced by a weaker model and measure how much of the strong model's potential is recovered, often boosted by auxiliary confidence-based or bootstrapping techniques. The paradigm is a proxy for future scenarios where human oversight is the "weak" signal, informing scalable-oversight and elicitation methods.
