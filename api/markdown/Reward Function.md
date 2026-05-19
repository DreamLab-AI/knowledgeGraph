schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#RewardFunction
legacy_uri:: urn:visionclaw:concept:spatial-computing:reward-function
public:: true

# Reward Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1",
  "@type": "Page",
  "vc:slug": "reward-function",
  "title": "Reward Function",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-agent-learning",
      "vc:label": "Autonomous Agent Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8674cb0e995d"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#RewardFunction"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10024"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reward Function"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:reward-function"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:reward-function"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:reward-function",
  "@type": "OntologyClass",
  "label": "Reward Function",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:reinforcement-learning",
      "vc:label": "Reinforcement Learning"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes in game environments, virtual worlds, and autonomous systems through feedback signals.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:autonomous-agent-learning",
      "vc:label": "Autonomous Agent Learning"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:reward-function:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Agent Learning]]",
      "resolved": "urn:visionflow:linked:autonomous-agent-learning",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reinforcement Learning]]",
      "resolved": "urn:visionflow:owl:class:reinforcement-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:01e31db3bfe151505d7e98bd5bb912de874ca4cd164dc403ea50d58d536d3de1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A mathematical formulation in reinforcement learning that maps state-action pairs to scalar values, guiding AI agent behaviour toward desired outcomes in game environments, virtual worlds, and autonomous systems through feedback signals.

- ### Semantic Classification
  - owl-class:: spatial-computing:RewardFunction
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Reinforcement Learning]]
  - enables:: [[Autonomous Agent Learning]]

- ### Content

  - #### Key Concepts
		- Sparse vs dense reward signals
		- Reward shaping for faster convergence
		- Inverse reinforcement learning
		- Multi-objective reward functions
		- Credit assignment problem
  - #### Applications
		- Game NPC behaviour optimization
		- Virtual character training
		- Autonomous vehicle navigation
		- Robotic control systems
		- Player engagement optimization

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
