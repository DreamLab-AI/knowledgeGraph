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
      "@id": "urn:visionflow:owl:class:robotics-domain",
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
  "definition": "Indirect coordination mechanism in swarm robotics where agents communicate through environmental modifications, enabling emergent collective behavior without direct communication.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:swarm-robotics",
      "label": "Swarm Robotics"
    }
  ],
  "quality": 0.35,
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
      "resolved": "urn:visionflow:owl:class:robotics-domain",
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
  Stigmergy — content pending enrichment.

- ### Provenance
  - sources:: [[Swarm Intelligence]], [[Robotics Research]]
  - migration-date:: 2026-04-26T00:00:00Z
