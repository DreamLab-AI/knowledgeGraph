public:: true

# Stigmergy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419",
  "@type": "Page",
  "vc:slug": "stigmergy",
  "title": "Stigmergy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:robotics-research",
      "vc:label": "Robotics Research"
    },
    {
      "@id": "urn:visionflow:linked:swarm-intelligence",
      "vc:label": "Swarm Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Stigmergy"
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
  "@id": "urn:ngm:class:stigmergy",
  "@type": "Class",
  "label": "Stigmergy",
  "definition": "An indirect coordination mechanism in which agents interact through modifications to a shared environment rather than through direct peer-to-peer communication. Originating in the study of social insects, stigmergy underlies emergent collective behaviour in swarm robotics and multi-agent systems: individual agents leave environmental signals (analogous to pheromone trails) that guide subsequent agents, producing globally coordinated outcomes from purely local rules.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:swarm-robotics",
      "label": "Swarm Robotics"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics Domain"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collective-intelligence-system", "label": "Collective Intelligence System"},
      {"@id": "urn:ngm:class:swarm-robot", "label": "Swarm Robot"},
      {"@id": "urn:ngm:class:autonomous-system", "label": "Autonomous System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:decentralization", "label": "Decentralization"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:stigmergy:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Research]]",
      "resolved": "urn:visionflow:linked:robotics-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Swarm Intelligence]]",
      "resolved": "urn:visionflow:linked:swarm-intelligence",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Indirect coordination mechanism in swarm robotics where agents communicate through environmental modifications, enabling emergent collective behavior without direct communication.

- ### Semantic Classification
  - owl-class:: robotics:Stigmergy
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Stigmergy is a foundational principle in the study of self-organising systems. The term was coined by entomologist Pierre-Paul Grassé in the 1950s to describe how termites coordinate nest construction without any central planner: each deposit of material changes the local environment in a way that probabilistically attracts further deposits, leading to the formation of intricate structures. The concept was later formalised and applied to ant-colony optimisation algorithms, which use virtual pheromone trails to solve combinatorial problems such as vehicle routing and task scheduling.

  In robotics, stigmergic coordination is attractive precisely because it requires no explicit inter-robot communication channel. A robot modifies the world (marks a visited location, places a physical marker, or updates a shared memory structure), and other robots perceive those modifications when they encounter the same location. This decoupling of action from communication makes swarm systems robust to individual robot failures and highly scalable, since coordination complexity does not grow with swarm size.

- ### Provenance
  - sources:: [[Swarm Intelligence]], [[Robotics Research]]
  - migration-date:: 2026-04-26T00:00:00Z
