public:: true

# Low-Latency Interaction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:low-latency-interaction",
  "@type": "Page",
  "vc:slug": "low-latency-interaction",
  "title": "Low-Latency Interaction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:low-latency-interaction",
  "@type": "Class",
  "label": "Low-Latency Interaction",
  "definition": "Low-latency interaction is the design property of a system in which the delay between a user action and the corresponding system response is minimised to preserve a sense of immediacy. In immersive and real-time contexts such as the metaverse, latency below roughly 20 milliseconds is critical to avoid perceptual disconnect and motion sickness. Achieving it requires optimised networking, predictive rendering, and edge computation.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-interaction", "label": "Metaverse Interaction"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:networking-layer", "label": "Networking Layer"}, {"@id": "urn:ngm:class:latency-management-protocol", "label": "Latency Management Protocol"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Low-latency interaction minimises the delay between user input and system response so experiences feel immediate. It depends on an optimised [[Networking Layer]] and is governed by a [[Latency Management Protocol]].
- ### Content
  - Techniques include edge placement of compute, client-side prediction, motion-to-photon optimisation, and prioritised QoS networking. In XR and cloud gaming, exceeding latency budgets degrades presence and can induce discomfort, making latency a hard design constraint rather than a tunable nicety.
