public:: true

elevatedFrom:: [[collaborative]]
# Collaborative Systems Modality
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:428b8c2492ddf10af2895951ac2aad0d608fa15c49128a400b4a27b8c3736795",
  "@type": "Page",
  "vc:slug": "collaborative-systems-modality",
  "title": "Collaborative Systems Modality",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "collaborative"
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
  "@id": "urn:ngm:class:collaborative-systems-modality",
  "@type": "Class",
  "label": "Collaborative Systems Modality",
  "definition": "Collaborative describes systems, processes, or modalities in which multiple agents—human or robotic—work together toward shared goals, actively coordinating actions, sharing information, and adapting to one another's contributions. In robotics, 'collaborative' is most precisely applied to human–robot collaboration (HRC) per ISO/TS 15066, where robot and human share a workspace without fixed barriers. In knowledge work and software, it describes tools and practices enabling co-creation, distributed editing, and collective decision-making across asynchronous or real-time channels.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2SemanticLabelMatch"
  },
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:collaboration", "label": "Collaboration"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-operation", "label": "Collaborative Operation"},
      {"@id": "urn:ngm:class:collaborative-systems-modality-learning", "label": "Collaborative Learning"},
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collaborative-systems-modality-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collective-intelligence-system", "label": "Collective Intelligence System"},
      {"@id": "urn:ngm:class:realtime-collaboration", "label": "Realtime Collaboration"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:collaborative:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:428b8c2492ddf10af2895951ac2aad0d608fa15c49128a400b4a27b8c3736795"
  },
  "vc:resolutions": [],
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
  - Collaborative describes the property of a system, tool, or process that is specifically designed for coordinated participation by multiple agents. In robotics this has a precise technical meaning: a collaborative robot (cobot) is one certified to operate in direct proximity with humans under the provisions of ISO/TS 15066, using speed-and-separation monitoring, power-and-force limiting, or hand-guiding modes rather than fixed perimeter guarding. In software and knowledge work, collaborative tools support concurrent editing, shared state, version control, and communication overlays.

- ### Semantic Classification
  - owl-class:: infrastructure:Collaborative
  - owl-role:: Concept

- ### Relationships
  - The collaborative concept bridges robotics (collaborative robots, human-robot interaction) and knowledge infrastructure (collaborative learning, asynchronous and realtime collaboration, distributed collaboration). In both domains, collaboration requires mechanisms for conflict resolution, shared situational awareness, and trust. Multi-agent systems and collective intelligence architectures formalise these mechanisms computationally.

- ### Content
  - The term "collaborative" appears in several distinct but related technical contexts within this knowledge graph. In the robotics cluster it specifically denotes ISO/TS 15066-compliant human–robot coexistence; in the digital infrastructure cluster it describes tools and workflows enabling joint knowledge creation. Both uses share the core idea of coordinated contribution toward a common objective.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
