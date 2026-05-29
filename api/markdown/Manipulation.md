public:: true

# Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2",
  "@type": "Page",
  "vc:slug": "manipulation",
  "title": "Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0602"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Manipulation"
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
  "@id": "urn:ngm:class:manipulation",
  "@type": "Class",
  "label": "Manipulation",
  "definition": "Manipulation in robotics refers to the ability of robotic systems to physically interact with and control objects in their environment.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:robotics-systems",
      "label": "Robotics Systems"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:manipulation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
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
  - Manipulation in robotics refers to the ability of robotic systems to physically interact with and control objects in their environment. This encompasses grasping, object handling, dexterous manipulation, and the end effectors and planning algorithms that enable robots to perform precise physical tasks.

- ### Semantic Classification
  - owl-class:: robotics:Manipulation
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics Systems]]

- ### Relationships
  - is-subclass-of:: [[Robotics Systems]]
  - requires [[Motion Planning]]
  - requires [[Inverse Kinematics]]
  - uses [[Force Control]]
  - uses [[End Effector]]
  - relatedTo [[Haptics]]

- ### Content
  Manipulation — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
