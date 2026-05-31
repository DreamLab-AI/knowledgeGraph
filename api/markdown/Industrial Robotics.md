public:: true

# Industrial Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:42846248f184215f82ec192cdd6afc41fa2f60e8bfd95ca27d147c705ff9bd0a",
  "@type": "Page",
  "vc:slug": "industrial-robotics",
  "title": "Industrial Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuators",
      "vc:label": "Actuators"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-robots",
      "vc:label": "Collaborative Robots"
    },
    {
      "@id": "urn:visionflow:linked:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-ifr-org",
      "vc:label": "https://ifr.org/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-industrial-robot",
      "vc:label": "https://en.wikipedia.org/wiki/Industrial_robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Industrial Robotics"
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
  "@id": "urn:ngm:class:industrial-robotics",
  "@type": "Class",
  "label": "Industrial Robotics",
  "definition": "Industrial robotics is the application of programmable robots to manufacturing tasks such as assembly, welding, handling and inspection.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:actuators",
        "label": "Actuators"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-robots",
        "label": "Collaborative Robots"
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
  "@id": "urn:visionflow:annotation:link-resolutions:industrial-robotics:5e5a7c87db7c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:42846248f184215f82ec192cdd6afc41fa2f60e8bfd95ca27d147c705ff9bd0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuators]]",
      "resolved": "urn:visionflow:linked:actuators",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaborative Robots]]",
      "resolved": "urn:visionflow:linked:collaborative-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:linked:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ifr.org/]]",
      "resolved": "urn:visionflow:linked:https-ifr-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Industrial_robot]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-industrial-robot",
      "kind": "StubLink"
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
  - Industrial robotics is the application of programmable robots to manufacturing tasks such as assembly, welding, handling and inspection.

- ### Semantic Classification
  - owl-class:: robotics:IndustrialRobotics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[Control Theory]]
  - requires:: [[Actuators]]
  - enables:: [[Collaborative Robots]]

- ### Content
  - Industrial robots are programmable machines used in manufacturing for repetitive, precise or hazardous tasks. Common configurations include articulated arms, SCARA and delta robots, selected according to reach and payload.
  - These robots operate within structured production environments and integrate with conveyors, sensors and control systems. They improve consistency and throughput in tasks such as welding, painting, assembly and material handling.

- ### Provenance
  - sources:: [[https://ifr.org/]], [[https://en.wikipedia.org/wiki/Industrial_robot]]
  - migration-date:: 2026-05-29T00:00:00Z
