```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:63e57902b8276a285b53d801a7503b411873db814765c0e3ce2941bd32cbaad8",
  "@type": "Page",
  "vc:slug": "autonomous-agent",
  "title": "Autonomous Agent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:action-executor",
      "vc:label": "Action Executor"
    },
    {
      "@id": "urn:visionflow:linked:ai-system",
      "vc:label": "AI System"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-behavior",
      "vc:label": "Autonomous Behavior"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-system",
      "vc:label": "Autonomous System"
    },
    {
      "@id": "urn:visionflow:linked:computational-resources",
      "vc:label": "Computational Resources"
    },
    {
      "@id": "urn:visionflow:linked:data-source",
      "vc:label": "Data Source"
    },
    {
      "@id": "urn:visionflow:linked:decision-engine",
      "vc:label": "Decision Engine"
    },
    {
      "@id": "urn:visionflow:linked:decision-support",
      "vc:label": "Decision Support"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:goal-specification",
      "vc:label": "Goal Specification"
    },
    {
      "@id": "urn:visionflow:linked:goal-system",
      "vc:label": "Goal System"
    },
    {
      "@id": "urn:visionflow:linked:intelligent-environment",
      "vc:label": "Intelligent Environment"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-base",
      "vc:label": "Knowledge Base"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:linked:perception-module",
      "vc:label": "Perception Module"
    },
    {
      "@id": "urn:visionflow:linked:process-automation",
      "vc:label": "Process Automation"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-framework",
      "vc:label": "AI Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-research-area",
      "vc:label": "ComputationAndIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:content-moderation",
      "vc:label": "Content Moderation"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:learning-component",
      "vc:label": "Learning Component"
    },
    {
      "@id": "urn:visionflow:owl:class:npc-interaction",
      "vc:label": "NPC Interaction"
    },
    {
      "@id": "urn:visionflow:owl:class:runtime-environment",
      "vc:label": "Runtime Environment"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20231"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Autonomous Agent"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-agent",
  "@type": "Class",
  "label": "Autonomous Agent",
  "definition": "Software entity capable of acting autonomously to achieve goals within a metaverse, exhibiting goal-directed behavior, decision-making, and adaptive responses without continuous human intervention.",
  "vc:plainGloss": "Software that chases a goal on its own — sensing what is happening, deciding what to do, and adjusting as things change, without someone steering it at every turn.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:action-executor",
        "label": "Action Executor"
      },
      {
        "@id": "urn:ngm:class:decision-engine",
        "label": "Decision Engine"
      },
      {
        "@id": "urn:ngm:class:goal-system",
        "label": "Goal System"
      },
      {
        "@id": "urn:ngm:class:perception-module",
        "label": "Perception Module"
      },
      {
        "@id": "urn:ngm:class:learning-component",
        "label": "Learning Component"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computational-resources",
        "label": "Computational Resources"
      },
      {
        "@id": "urn:ngm:class:goal-specification",
        "label": "Goal Specification"
      },
      {
        "@id": "urn:ngm:class:runtime-environment",
        "label": "Runtime Environment"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-behavior",
        "label": "Autonomous Behavior"
      },
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      },
      {
        "@id": "urn:ngm:class:process-automation",
        "label": "Process Automation"
      },
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:npc-interaction",
        "label": "NPC Interaction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:ai-system",
        "label": "AI System"
      },
      {
        "@id": "urn:ngm:class:autonomous-system",
        "label": "Autonomous System"
      },
      {
        "@id": "urn:ngm:class:intelligent-environment",
        "label": "Intelligent Environment"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - Software entity capable of acting autonomously to achieve goals within a metaverse, exhibiting goal-directed behavior, decision-making, and adaptive responses without continuous human intervention.

- ### In Plain Terms
  - Software that chases a goal on its own — sensing what is happening, deciding what to do, and adjusting as things change, without someone steering it at every turn.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutonomousAgent
  - owl-role:: Agent
  - owl-inferred:: spatial-computing:VirtualAgent
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]]
  - implemented-in-layer:: [[DataLayer]], [[ComputeLayer]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]] (rb)
  - has-part:: [[Decision Engine]], [[Goal System]], [[Perception Module]], [[Action Executor]], [[Learning Component]]
  - is-part-of:: [[AI System]], [[Intelligent Environment]], [[Autonomous System]]
  - requires:: [[Runtime Environment]], [[Computational Resources]], [[Goal Specification]]
  - enables:: [[Autonomous Behavior]], [[Decision Support]], [[Content Moderation]], [[NPC Interaction]], [[Process Automation]]
  - depends-on:: [[AI Framework]], [[Data Source]], [[Knowledge Base]]

- ### Content
  Autonomous Agent — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]], [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
