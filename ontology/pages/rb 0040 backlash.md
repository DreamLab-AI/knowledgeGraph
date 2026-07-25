public:: true

# rb 0040 backlash
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fb630d81b592f9d7e8e25775841bfad98db95dd8dc8c29f1f435c2ddd35bf39a",
  "@type": "Page",
  "vc:slug": "rb-0040-backlash",
  "title": "rb 0040 backlash",
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
      "vc:value": "RB-0040"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0040 backlash"
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
  "@id": "urn:ngm:class:rb-0040-backlash",
  "@type": "Class",
  "label": "rb 0040 backlash",
  "definition": "Backlash in robotics is the lost motion in a mechanical transmission — the angular or linear displacement of the output element when the input reverses direction without producing corresponding output movement, caused by clearance gaps between mating gear teeth or other drive components. Backlash degrades positional accuracy and repeatability, introduces nonlinearity into the control loop, and can cause oscillation or chattering in feedback control systems. Minimising backlash is critical for precision robot joints, and it is typically reduced through the use of preloaded gear pairs, harmonic drives, or cycloidal transmissions.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:backlash",
      "label": "Backlash"
    }
  ],
  "quality": 0.7,
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0039-stiffness", "label": "rb 0039 stiffness"},
      {"@id": "urn:ngm:class:rb-0038-compliance", "label": "rb 0038 compliance"},
      {"@id": "urn:ngm:class:rb-0026-robot-joint", "label": "rb 0026 robot joint"},
      {"@id": "urn:ngm:class:rb-0043-torque", "label": "rb 0043 torque"},
      {"@id": "urn:ngm:class:rb-0047-feedback-control", "label": "rb 0047 feedback control"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0034-repeatability", "label": "rb 0034 repeatability"},
      {"@id": "urn:ngm:class:rb-0035-accuracy", "label": "rb 0035 accuracy"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R2SemanticMatch"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0040-backlash:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fb630d81b592f9d7e8e25775841bfad98db95dd8dc8c29f1f435c2ddd35bf39a"
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
  - **Backlash** (RB-0040) is the lost angular or linear motion in a robot joint's mechanical transmission when the direction of motion reverses, caused by clearance gaps between gear teeth or drive components. It directly degrades accuracy and repeatability, and introduces nonlinearity that complicates feedback control design. Harmonic drives and cycloidal reducers are widely used in collaborative robots specifically because they have near-zero backlash.

- ### Semantic Classification
  - owl-class:: robotics:rb0040backlash
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0039 stiffness, rb 0038 compliance, rb 0026 robot joint, rb 0043 torque, rb 0047 feedback control
  - contrastsWith:: rb 0034 repeatability, rb 0035 accuracy

- ### Content
  - ### Primary Definition
  **Backlash** (RB-0040) is quantified as the total lost motion measured at the output of a transmission when the input reverses by an amount sufficient to take up all clearances. In robot joint design, backlash is a key performance parameter: a joint with 0.01° of backlash will have that as a hard lower bound on positional error, regardless of encoder resolution or control algorithm quality.

  Backlash causes stick-slip behaviour and limit cycling in position-controlled systems. Modern collaborative robots commonly use strain wave (harmonic) gears which achieve arcminute-level backlash, at the cost of lower peak torque and reduced resistance to shock loads compared to conventional planetary gearboxes.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
