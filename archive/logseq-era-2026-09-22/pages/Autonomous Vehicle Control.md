public:: true

# Autonomous Vehicle Control

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autonomous-vehicle-control", "@type":"Page", "title":"Autonomous Vehicle Control", "vc:slug":"autonomous-vehicle-control", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:autonomous-vehicle-control",
  "@type":"Class",
  "label":"Autonomous Vehicle Control",
  "definition":"Autonomous vehicle control is the set of algorithms and systems that compute steering, acceleration and braking commands for a self-driving vehicle in order to safely follow a planned trajectory. It draws on model-based control, which uses an explicit dynamics model to compute corrective actions, and on optimal control, which formulates control as minimising a cost function subject to the vehicle's dynamics and constraints. It must operate reliably under uncertainty from sensing, actuation and the surrounding environment.",
  "domain":"robotics",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:autonomous-vehicle","label":"Autonomous Vehicle"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:optimal-control","label":"Optimal Control"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Autonomous Vehicle Control]] Autonomous vehicle control is the set of algorithms and systems that compute steering, acceleration and braking commands for a self-driving vehicle in order to safely follow a planned trajectory. It draws on model-based control, which uses an explicit dynamics model to compute corrective actions, and on optimal control, which formulates control as minimising a cost function subject to the vehicle's dynamics and constraints. It must operate reliably under uncertainty from sensing, actuation and the surrounding environment.
- ### Relationships
	- subClassOf:: [[Autonomous Vehicle]]
	- requires:: [[Optimal Control]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
