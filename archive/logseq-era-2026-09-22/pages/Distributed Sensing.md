public:: true

# Distributed Sensing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:distributed-sensing",
  "@type": "Page",
  "vc:slug": "distributed-sensing",
  "title": "Distributed Sensing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-07-25T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:distributed-sensing",
  "@type": "Class",
  "label": "Distributed Sensing",
  "definition": "Distributed sensing is the collection and fusion of environmental information from multiple spatially separated sensing agents, such as the robots in a multi-robot system or swarm, rather than from a single centralised sensor. It exploits the combined spatial coverage and redundancy of many sensors to build a more complete, robust picture of the environment than any single agent could obtain alone. Distributed sensing is central to swarm robotics applications such as environmental monitoring, search and rescue, and cooperative mapping.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.5,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-robot-systems",
      "label": "Multi-Robot Systems"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "DanglingRelationFix-batch6-2026-07-25"
  }
}
```

- ### Definition
  - Distributed sensing is the collection and fusion of environmental information from multiple spatially separated sensing agents, such as the robots in a multi-robot system or swarm, rather than from a single centralised sensor. It exploits the combined spatial coverage and redundancy of many sensors to build a more complete, robust picture of the environment than any single agent could obtain alone. Distributed sensing is central to swarm robotics applications such as environmental monitoring, search and rescue, and cooperative mapping.
