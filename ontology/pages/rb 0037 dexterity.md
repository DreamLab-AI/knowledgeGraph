public:: true

# rb 0037 dexterity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f09d047713550d18e52b94f9042de5a832d3ff102183f52f06d56326d3ed9820",
  "@type": "Page",
  "vc:slug": "rb-0037-dexterity",
  "title": "rb 0037 dexterity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0037"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0037 dexterity"
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
  "@id": "urn:ngm:class:rb-0037-dexterity",
  "@type": "Class",
  "label": "rb 0037 dexterity",
  "definition": "Dexterity, in robotics, is the ability of a manipulator to achieve a broad range of end-effector orientations and positions within its workspace, particularly in the vicinity of a given point, without encountering kinematic singularities. It is quantified by measures such as the Jacobian condition number, manipulability ellipsoid volume, or isotropy index. High dexterity enables a robot arm to approach objects from many angles, reconfigure during a task, and avoid joint limits — properties critical for assembly, surgery, and unstructured manipulation tasks.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0032-manipulability", "label": "rb 0032 manipulability"},
      {"@id": "urn:ngm:class:rb-0031-singularity", "label": "rb 0031 singularity"},
      {"@id": "urn:ngm:class:rb-0023-degrees-of-freedom", "label": "rb 0023 degrees of freedom"},
      {"@id": "urn:ngm:class:rb-0024-workspace", "label": "rb 0024 workspace"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"},
      {"@id": "urn:ngm:class:rb-0029-inverse-kinematics", "label": "rb 0029 inverse kinematics"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:manipulation", "label": "Manipulation"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0037-dexterity:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f09d047713550d18e52b94f9042de5a832d3ff102183f52f06d56326d3ed9820"
  },
  "vc:resolutions": [
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
  - Dexterity is a measure of a manipulator's ability to achieve a wide variety of end-effector poses — both positions and orientations — at or near a given point in space, without encountering singular configurations that lock out certain directions of motion. It is formally quantified through the Jacobian matrix: metrics such as the manipulability ellipsoid, condition number, and minimum singular value all express how isotropically the robot can move in task space. High dexterity is particularly important for fine manipulation tasks where the approach direction may be tightly constrained by the geometry of the object or the surrounding environment.
  - Dexterity is closely coupled with the workspace volume of a robot: a large workspace does not guarantee dexterity at every interior point, since near-singular configurations reduce the effective reachable velocity in certain directions. Redundant manipulators (more than 6 degrees of freedom) can use the extra joints to reconfigure and maintain high dexterity across a wider region.

- ### Semantic Classification
  - owl-class:: robotics:Dexterity
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to manipulability (rb 0032), workspace (rb 0024), and degrees of freedom (rb 0023); computed via the Jacobian matrix (rb 0030) and inverse kinematics (rb 0029).

- ### Content
  - **Dexterity** - Ability to achieve arbitrary end-effector poses

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
