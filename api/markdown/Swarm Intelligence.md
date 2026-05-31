public:: true

# Swarm Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:809468c60386881965c790340a6ead7b8f7761409bac036c53d0d0d75f6448c9",
  "@type": "Page",
  "vc:slug": "swarm-intelligence",
  "title": "Swarm Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:swarm-robotics",
      "vc:label": "Swarm Robotics"
    },
    {
      "@id": "urn:visionflow:linked:multi-robot-systems",
      "vc:label": "Multi-Robot Systems"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-swarm-control",
      "vc:label": "Decentralized Swarm Control"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-systems-domain",
      "vc:label": "Autonomous Systems Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Swarm Intelligence"
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
  "@id": "urn:ngm:class:swarm-intelligence",
  "@type": "Class",
  "label": "Swarm Intelligence",
  "definition": "Swarm intelligence is the collective behaviour that emerges from many simple agents following local rules and interactions, producing coordinated global behaviour without central control.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-systems-domain",
      "label": "Autonomous Systems Domain"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:swarm-robotics",
        "label": "Swarm Robotics"
      },
      {
        "@id": "urn:ngm:class:multi-robot-systems",
        "label": "Multi-Robot Systems"
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
  "@id": "urn:visionflow:annotation:link-resolutions:swarm-intelligence:cd956acf960d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:809468c60386881965c790340a6ead7b8f7761409bac036c53d0d0d75f6448c9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Swarm Robotics]]",
      "resolved": "urn:visionflow:linked:swarm-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Robot Systems]]",
      "resolved": "urn:visionflow:linked:multi-robot-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Swarm Control]]",
      "resolved": "urn:visionflow:linked:decentralized-swarm-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Systems Domain]]",
      "resolved": "urn:visionflow:linked:autonomous-systems-domain",
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
  - Swarm intelligence is the collective behaviour that emerges from many simple agents following local rules and interactions, producing coordinated global behaviour without central control.

- ### Semantic Classification
  - owl-class:: robotics:SwarmIntelligence
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Autonomous Systems Domain]]
  - bridges-to:: [[Decentralized Swarm Control]], [[Distributed Systems]]
  - enables:: [[Swarm Robotics]], [[Multi-Robot Systems]]

- ### Content
  - Swarm intelligence studies how decentralised systems of interacting agents, inspired by colonies of insects and flocks of animals, achieve reliable collective behaviour through simple local rules. Global capabilities such as foraging, aggregation and pattern formation arise without any agent having a complete view.
  - In robotics the principles inform swarm robotics and multi-robot coordination, offering scalability and fault tolerance because behaviour does not depend on a single controller. Decentralised control schemes apply these ideas to fleets of cooperating robots.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
