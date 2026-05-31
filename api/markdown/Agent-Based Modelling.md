public:: true

# Agent-Based Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9c31a8b7c1310d72810b758ce9008b46d461d79166dcf458ce805467a02176eb",
  "@type": "Page",
  "vc:slug": "agent-based-modelling",
  "title": "Agent-Based Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:simulation",
      "vc:label": "Simulation"
    },
    {
      "@id": "urn:visionflow:linked:innovation-diffusion",
      "vc:label": "Innovation Diffusion"
    },
    {
      "@id": "urn:visionflow:linked:economic-model",
      "vc:label": "Economic Model"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-systems",
      "vc:label": "Multi-Agent Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agent-Based Modelling"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:agent-based-modelling",
  "@type": "Class",
  "label": "Agent-Based Modelling",
  "definition": "Agent-based modelling is a simulation method in which many autonomous agents follow local rules and their interactions produce system-level behaviour. It is used to study emergent phenomena that are hard to capture with aggregate equations.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:simulation",
      "label": "Simulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:innovation-diffusion",
        "label": "Innovation Diffusion"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:agent-based-modelling:65e478a94f98",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9c31a8b7c1310d72810b758ce9008b46d461d79166dcf458ce805467a02176eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Simulation]]",
      "resolved": "urn:visionflow:linked:simulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Innovation Diffusion]]",
      "resolved": "urn:visionflow:linked:innovation-diffusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Economic Model]]",
      "resolved": "urn:visionflow:linked:economic-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent Systems]]",
      "resolved": "urn:visionflow:linked:multi-agent-systems",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Agent-based modelling is a simulation method in which many autonomous agents follow local rules and their interactions produce system-level behaviour. It is used to study emergent phenomena that are hard to capture with aggregate equations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentBasedModelling
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Simulation]]
  - bridges-to:: [[Economic Model]], [[Multi-Agent Systems]]
  - requires:: [[Simulation]]
  - enables:: [[Innovation Diffusion]]

- ### Content
  - Agent-based modelling represents a system as a collection of individual agents, each with its own state and decision rules, situated in an environment in which they interact. Repeated interaction gives rise to aggregate patterns such as segregation, adoption waves or market prices that are not specified directly.
  - The method is applied across economics, ecology, epidemiology and social science to explore scenarios and test policies. It complements equation-based models by capturing heterogeneity and local interaction among participants.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
