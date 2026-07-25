public:: true

# Fault-Tolerant Control

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:fault-tolerant-control",
  "@type": "Page",
  "title": "Fault-Tolerant Control",
  "vc:slug": "fault-tolerant-control",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fault-tolerant-control",
  "@type": "Class",
  "label": "Fault-Tolerant Control",
  "definition": "Fault-tolerant control is a control-system design approach that maintains acceptable performance, or degrades gracefully, in the presence of sensor, actuator or component failures. It combines fault detection and isolation with reconfiguration mechanisms, such as switching to redundant actuators or re-tuning controller gains, so that a system continues operating safely rather than failing outright. It is widely applied in autonomous robots, aircraft and industrial process control where uninterrupted operation is safety-critical.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:control-algorithm",
      "label": "Control Algorithm"
    }
  ],
  "relations": {},
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Fault-tolerant control is a control-system design approach that maintains acceptable performance, or degrades gracefully, in the presence of sensor, actuator or component failures. It combines fault detection and isolation with reconfiguration mechanisms, such as switching to redundant actuators or re-tuning controller gains, so that a system continues operating safely rather than failing outright. It is widely applied in autonomous robots, aircraft and industrial process control where uninterrupted operation is safety-critical.
- ### Relationships
	- subClassOf:: [[Control Algorithm]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
