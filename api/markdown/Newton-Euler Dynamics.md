public:: true

# Newton-Euler Dynamics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fa373ffae9755d4e741886068ba80cf20d45e8c061ca3e1b3deda7447484bbd1",
  "@type": "Page",
  "vc:slug": "newton-euler-dynamics",
  "title": "Newton-Euler Dynamics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robot-dynamics",
      "vc:label": "Robot Dynamics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0184"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Newton-Euler Dynamics"
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
  "@id": "urn:ngm:class:newton-euler-dynamics",
  "@type": "Class",
  "label": "Newton-Euler Dynamics",
  "definition": "Newton-Euler mod applies F=ma and τ=Iα to each link recursively.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robot-dynamics",
      "label": "Robot Dynamics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:newton-euler-dynamics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fa373ffae9755d4e741886068ba80cf20d45e8c061ca3e1b3deda7447484bbd1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robot Dynamics]]",
      "resolved": "urn:visionflow:owl:class:robot-dynamics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
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
  - Newton-Euler method applies F=ma and τ=Iα to each link recursively.

- ### Semantic Classification
  - owl-class:: robotics:NewtonEulerDynamics
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - is-subclass-of:: [[Robot Dynamics]]

- ### Content
  Newton-Euler Dynamics — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
