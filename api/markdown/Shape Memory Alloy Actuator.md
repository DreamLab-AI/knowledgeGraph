public:: true

# Shape Memory Alloy Actuator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:08e0ad201e95f918d025fc55091de1f197b7ae82237fbeec49dbc39ade422836",
  "@type": "Page",
  "vc:slug": "shape-memory-alloy-actuator",
  "title": "Shape Memory Alloy Actuator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:materials-science",
      "vc:label": "Materials Science"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:soft-robotics",
      "vc:label": "Soft Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Shape Memory Alloy Actuator"
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
  "@id": "urn:ngm:class:shape-memory-alloy-actuator",
  "@type": "Class",
  "label": "Shape Memory Alloy Actuator",
  "definition": "A shape memory alloy (SMA) actuator exploits the thermoelastic phase transformation of nickel-titanium (Nitinol) or similar alloys, which contract and generate force when thermally activated, then return to their original shape on cooling. SMA actuators are valued for their high force-to-weight ratio, silent operation, and inherent compliance, making them well-suited to soft robotics, minimally invasive surgical tools, and wearable exoskeletons. Control bandwidth is limited by thermal cycle times, which remains a key engineering challenge.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:soft-robotics", "label": "Soft Robotics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:pneumatic-actuator", "label": "Pneumatic Actuator"},
      {"@id": "urn:ngm:class:hydraulic-actuator", "label": "Hydraulic Actuator"},
      {"@id": "urn:ngm:class:robot-actuator", "label": "Robot Actuator"},
      {"@id": "urn:ngm:class:manipulation", "label": "Manipulation"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:surgical-robot", "label": "Surgical Robot"},
      {"@id": "urn:ngm:class:exoskeleton-robot", "label": "Exoskeleton Robot"},
      {"@id": "urn:ngm:class:haptic-feedback", "label": "Haptic Feedback"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:tactile-sensor", "label": "Tactile Sensor"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:shape-memory-alloy-actuator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:08e0ad201e95f918d025fc55091de1f197b7ae82237fbeec49dbc39ade422836"
  },
  "vc:resolutions": [
    {
      "raw": "[[Materials Science]]",
      "resolved": "urn:visionflow:linked:materials-science",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Soft Robotics]]",
      "resolved": "urn:visionflow:owl:class:soft-robotics",
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
  - Soft robotics actuator using shape memory alloys that change shape when heated, enabling lightweight and compact actuation for compliant robots.

- ### Semantic Classification
  - owl-class:: robotics:ShapeMemoryAlloyActuator
  - owl-role:: Object
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Shape memory alloy actuators operate by exploiting a reversible solid-state phase transition between martensite (cool, deformable) and austenite (hot, rigid) crystal structures. Nitinol wire heated above its transformation temperature (~70-100 °C) shortens by 4-8% and can exert contractile forces exceeding 150 MPa, far exceeding equivalent-mass electric motors for linear actuation.

  In soft-robotic applications, SMA wires or coils are embedded in elastomeric matrices to produce bending and twisting motions that replicate biological muscle groups. Medical devices — including endoscopes, catheter steerers, and minimally invasive grippers — exploit SMA compliance to navigate tortuous anatomy without rigid linkages. Active cooling strategies (forced convection, Peltier junctions) are used to reduce the thermal lag that limits repetition frequency.

- ### Provenance
  - sources:: [[Soft Robotics]], [[Materials Science]]
  - migration-date:: 2026-04-26T00:00:00Z
