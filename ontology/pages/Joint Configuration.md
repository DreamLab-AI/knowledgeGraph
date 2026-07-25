public:: true

# Joint Configuration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:42f4757160a6ea99da58930aebd977bdb784212388f4124100febb9d8f5b4332",
  "@type": "Page",
  "vc:slug": "joint-configuration",
  "title": "Joint Configuration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:forward-kinematics",
      "vc:label": "Forward Kinematics"
    },
    {
      "@id": "urn:visionflow:linked:mobile-manipulation",
      "vc:label": "Mobile Manipulation"
    },
    {
      "@id": "urn:visionflow:linked:manipulator",
      "vc:label": "Manipulator"
    },
    {
      "@id": "urn:visionflow:linked:kinematics",
      "vc:label": "Kinematics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Joint Configuration"
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
  "@id": "urn:ngm:class:joint-configuration",
  "@type": "Class",
  "label": "Joint Configuration",
  "definition": "Joint configuration is the complete set of joint positions of a robot manipulator that together determine the pose of its links and end effector.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:kinematics",
      "label": "Kinematics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:mobile-manipulation",
        "label": "Mobile Manipulation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:joint-configuration:d3c78ed98717",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:42f4757160a6ea99da58930aebd977bdb784212388f4124100febb9d8f5b4332"
  },
  "vc:resolutions": [
    {
      "raw": "[[Forward Kinematics]]",
      "resolved": "urn:visionflow:linked:forward-kinematics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mobile Manipulation]]",
      "resolved": "urn:visionflow:linked:mobile-manipulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Manipulator]]",
      "resolved": "urn:visionflow:linked:manipulator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Kinematics]]",
      "resolved": "urn:visionflow:linked:kinematics",
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
  - Joint configuration is the complete set of joint positions of a robot manipulator that together determine the pose of its links and end effector.

- ### Semantic Classification
  - owl-class:: robotics:JointConfiguration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Kinematics]]
  - bridges-to:: [[Manipulator]]
  - requires:: [[Forward Kinematics]]
  - enables:: [[Mobile Manipulation]]

- ### Content
  - A joint configuration is represented as a vector of joint variables, one per degree of freedom, often called the configuration space or joint space of the robot. Each point in this space maps to a specific arrangement of the links.
  - Forward kinematics computes the end effector pose from a joint configuration, while inverse kinematics solves for joint configurations that achieve a desired pose, which may have several or no solutions.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
