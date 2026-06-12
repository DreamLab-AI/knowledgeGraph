public:: true

# Collaborative Robots
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c9ef3cc643fad069192124aee5b1affdc894716ab9cfff5535bc6d8a6f2c2b51",
  "@type": "Page",
  "vc:slug": "collaborative-robots",
  "title": "Collaborative Robots",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:actuators",
      "vc:label": "Actuators"
    },
    {
      "@id": "urn:visionflow:linked:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:linked:industrial-robotics",
      "vc:label": "Industrial Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-www-iso-org-standard-62996-html",
      "vc:label": "https://www.iso.org/standard/62996.html"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cobot",
      "vc:label": "https://en.wikipedia.org/wiki/Cobot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Collaborative Robots"
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
  "@id": "urn:ngm:class:collaborative-systems-modality-robots",
  "@type": "Class",
  "label": "Collaborative Robots",
  "definition": "Collaborative robots, or cobots, are robots designed to work safely alongside humans within a shared workspace.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:industrial-robotics",
      "label": "Industrial Robotics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensors",
        "label": "Sensors"
      },
      {
        "@id": "urn:ngm:class:actuators",
        "label": "Actuators"
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
  "@id": "urn:visionflow:annotation:link-resolutions:collaborative-robots:0e60ccbd3217",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c9ef3cc643fad069192124aee5b1affdc894716ab9cfff5535bc6d8a6f2c2b51"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sensors]]",
      "resolved": "urn:visionflow:linked:sensors",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Actuators]]",
      "resolved": "urn:visionflow:linked:actuators",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:linked:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Industrial Robotics]]",
      "resolved": "urn:visionflow:linked:industrial-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.iso.org/standard/62996.html]]",
      "resolved": "urn:visionflow:linked:https-www-iso-org-standard-62996-html",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Cobot]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-cobot",
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
  - Collaborative robots, or cobots, are robots designed to work safely alongside humans within a shared workspace.

- ### Semantic Classification
  - owl-class:: robotics:CollaborativeRobots
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Industrial Robotics]]
  - bridges-to:: [[Control Theory]]
  - requires:: [[Sensors]], [[Actuators]]

- ### Content
  - Collaborative robots are built to operate near people without conventional safety cages. They use force limiting, sensing and speed control so that contact with a person does not cause injury.
  - Cobots are commonly used for tasks such as machine tending, assembly assistance and pick-and-place operations. Safety standards define requirements for collaborative operation, including power and force limiting.

- ### Provenance
  - sources:: [[https://www.iso.org/standard/62996.html]], [[https://en.wikipedia.org/wiki/Cobot]]
  - migration-date:: 2026-05-29T00:00:00Z
