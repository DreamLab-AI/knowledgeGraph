public:: true

# Predictive Processing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:predictive-processing",
  "@type": "Page",
  "vc:slug": "predictive-processing",
  "title": "Predictive Processing",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:predictive-processing",
  "@type": "Class",
  "label": "Predictive Processing",
  "definition": "Predictive processing is a theoretical framework in cognitive science and AI in which the brain or agent continuously generates predictions about sensory input and updates internal models to minimise prediction error. Perception, action, and learning are unified as processes of reducing the mismatch between expected and actual signals. It motivates active inference and free-energy approaches to embodied, cognitive systems.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-research-area", "label": "AI Research Area"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:embodied-minds", "label": "Embodied Minds"},
      {"@id": "urn:ngm:class:cognitive-ai", "label": "Cognitive AI"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Predictive processing frames cognition as the continual minimisation of prediction error between an internal generative model and sensory input. It is implemented in models of [[Embodied Minds]] and is closely related to [[Cognitive AI]].
- ### Content
  - Under this view, top-down predictions flow down a hierarchy while only the residual prediction errors flow upward, making inference efficient. Active inference extends the idea so that agents also act to make their predictions come true, framing perception and control as two routes to reducing surprise. It offers a unifying account linking neuroscience, Bayesian inference, and embodied agency.
