public:: true

# rb 0065 visual servoing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6433494d70801555a905144d7801960a893cc275a91e9bfb99cc2762e31ebb88",
  "@type": "Page",
  "vc:slug": "rb-0065-visual-servoing",
  "title": "rb 0065 visual servoing",
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
      "vc:value": "RB-0065"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0065 visual servoing"
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
  "@id": "urn:ngm:class:rb-0065-visual-servoing",
  "@type": "Class",
  "label": "rb 0065 visual servoing",
  "definition": "Visual servoing is a robot control technique that uses real-time visual feedback from a camera to regulate the motion of a robot toward a goal configuration. Image-based visual servoing (IBVS) minimises an image-feature error directly, while position-based visual servoing (PBVS) reconstructs 3-D pose from vision before computing Cartesian control signals. The approach is widely used in manipulation, assembly, and tracking tasks where precise end-effector placement relative to a visually perceived target is required.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    },
    {
      "@id": "urn:ngm:class:feedback-control",
      "label": "Feedback Control"
    }
  ],
  "qualityScore": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:rb-0068-vision-system", "label": "rb 0068 vision system"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0047-feedback-control", "label": "rb 0047 feedback control"},
      {"@id": "urn:ngm:class:rb-0030-jacobian-matrix", "label": "rb 0030 jacobian matrix"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0064-computed-torque-control", "label": "rb 0064 computed torque control"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:pose-estimation", "label": "Pose Estimation"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticCategoryInference"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0065-visual-servoing:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6433494d70801555a905144d7801960a893cc275a91e9bfb99cc2762e31ebb88"
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
  - **Visual Servoing** is a robot control technique that closes the feedback loop using real-time camera imagery. Image-based visual servoing (IBVS) drives image-feature errors to zero directly, while position-based visual servoing (PBVS) estimates 3-D target pose from vision before computing Cartesian control signals. The Jacobian image matrix maps camera-space errors to joint velocities, enabling precise end-effector placement relative to visually perceived targets in manipulation, assembly, and tracking.

- ### Semantic Classification
  - owl-class:: robotics:rb0065visualservoing
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - uses:: rb 0068 vision system, Computer Vision, Feature Extraction
  - requires:: rb 0047 feedback control, rb 0030 jacobian matrix
  - relatedTo:: rb 0064 computed torque control, Object Detection, Pose Estimation

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
