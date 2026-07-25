public:: true

# Crowd Simulation

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:crowd-simulation", "@type": "Page", "title": "Crowd Simulation", "vc:slug": "crowd-simulation", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:crowd-simulation",
  "@type": "Class",
  "label": "Crowd Simulation",
  "definition": "Crowd simulation models the collective movement and behaviour of large numbers of agents -- pedestrians, vehicles or non-player characters -- navigating shared space while responding to obstacles, goals and one another. It combines agent-based modelling with local avoidance and flocking rules to produce plausible emergent group behaviour at real-time or near-real-time speed. It is used in procedural animation, urban planning tools and game and simulation environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simulation",
      "label": "Simulation"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:procedural-animation",
        "label": "Procedural Animation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ]
  },
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
	- Crowd simulation models the collective movement and behaviour of large numbers of agents -- pedestrians, vehicles or non-player characters -- navigating shared space while responding to obstacles, goals and one another. It combines agent-based modelling with local avoidance and flocking rules to produce plausible emergent group behaviour at real-time or near-real-time speed. It is used in procedural animation, urban planning tools and game and simulation environments.
- ### Relationships
	- requires:: [[Agent-Based Modelling]]
	- enables:: [[Procedural Animation]]
	- partOf:: [[Simulation]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
