public:: true

# Stability
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:stability",
  "@type": "Page",
  "vc:slug": "stability",
  "title": "Stability",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:stability",
  "@type": "Class",
  "label": "Stability",
  "definition": "Stability is the property of a dynamical or control system whereby its state remains bounded and returns toward an equilibrium following a disturbance, rather than diverging. Formalised through notions such as Lyapunov stability and bounded-input bounded-output stability, it is a primary design objective for any feedback controller. Ensuring stability is prerequisite to performance, since an unstable system cannot be made to track references reliably.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"},
      {"@id": "urn:ngm:class:robo-actuation-and-control", "label": "Control Systems Domain"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Stability is the [[Control Theory]] property whereby a system's state stays bounded and converges back toward equilibrium after a perturbation rather than diverging, formalised via Lyapunov and bounded-input bounded-output criteria.
- ### Content
  - It is the foundational requirement of controller design, since performance objectives such as tracking and disturbance rejection are meaningless for a divergent system. A correctly tuned [[Feedback Loop]] is the principal means of achieving stability, adjusting actuation in response to measured error, and stability analysis sits at the centre of the [[Control Systems Domain]] alongside controllability and robustness.
