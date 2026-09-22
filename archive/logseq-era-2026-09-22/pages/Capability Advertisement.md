public:: true

# Capability Advertisement

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:capability-advertisement", "@type": "Page", "title": "Capability Advertisement", "vc:slug": "capability-advertisement", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:capability-advertisement",
  "@type": "Class",
  "label": "Capability Advertisement",
  "definition": "Capability Advertisement is the mechanism by which an autonomous agent publishes machine-readable metadata describing the skills, tools and interfaces it exposes, allowing other agents or an orchestrator to discover what it can do without prior hard-coded knowledge. It typically takes the form of a structured manifest, such as an agent card, exchanged during a discovery or handshake phase. It underpins dynamic task routing in multi-agent systems built on protocols such as the Agent Communication Protocol and Agent-to-Agent Protocol.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:service-discovery",
      "label": "Service Discovery"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [
      {
        "@id": "urn:ngm:class:agent-orchestrator",
        "label": "Agent Orchestrator"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      }
    ],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:agent-communication-protocol",
        "label": "Agent Communication Protocol"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:agent-to-agent-protocol",
        "label": "Agent-to-Agent Protocol"
      }
    ],
    "supports": []
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
	- Capability Advertisement is the mechanism by which an autonomous agent publishes machine-readable metadata describing the skills, tools and interfaces it exposes, allowing other agents or an orchestrator to discover what it can do without prior hard-coded knowledge. It typically takes the form of a structured manifest, such as an agent card, exchanged during a discovery or handshake phase. It underpins dynamic task routing in multi-agent systems built on protocols such as the Agent Communication Protocol and Agent-to-Agent Protocol.
- ### Relationships
	- enables:: [[Agent Orchestrator]]
	- requires:: [[Service Discovery]]
	- partOf:: [[Agent Communication Protocol]]
	- relatedTo:: [[Agent-to-Agent Protocol]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
