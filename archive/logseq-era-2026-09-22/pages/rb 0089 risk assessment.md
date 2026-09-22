public:: true

# rb 0089 risk assessment
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dbb208130a56e8ea5680cac893a8a04be4014102a51ba8f14276bc3db85d7dcb",
  "@type": "Page",
  "vc:slug": "rb-0089-risk-assessment",
  "title": "rb 0089 risk assessment",
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
      "vc:value": "RB-0089"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0089 risk assessment"
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
  "@id": "urn:ngm:class:rb-0089-risk-assessment",
  "@type": "Class",
  "label": "rb 0089 risk assessment",
  "definition": "Risk Assessment in robotics is the systematic process of identifying hazards associated with a robot system, estimating the severity and probability of potential harm, and determining whether risks are acceptable or require mitigation. It is mandated by ISO 10218-1/-2 for industrial robots and ISO 13482 for personal care robots, and forms the foundation for selecting appropriate safeguarding measures and collaborative operation modes.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "quality": 0.7,
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"},
      {"@id": "urn:ngm:class:rb-0103-collaborative-operation", "label": "rb 0103 collaborative operation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:rb-0088-iso-13482-compliance", "label": "rb 0088 iso 13482 compliance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"},
      {"@id": "urn:ngm:class:rb-0095-safety-zone", "label": "rb 0095 safety zone"},
      {"@id": "urn:ngm:class:rb-0100-safety-integrity-level", "label": "rb 0100 safety integrity level"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0089-risk-assessment:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dbb208130a56e8ea5680cac893a8a04be4014102a51ba8f14276bc3db85d7dcb"
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
  - Risk Assessment in robotics is the mandatory iterative process — specified in ISO 10218-1/-2 for industrial robots and ISO 13482 for personal care robots — of identifying hazards throughout the robot life cycle, estimating the severity and probability of associated harm, and determining whether risk is acceptable or requires reduction. The process informs all downstream safety design decisions including the selection of safeguarding devices, the specification of safety integrity or performance levels, and the choice of collaborative operation mode.

  A robot risk assessment typically produces a formal risk-reduction record covering: task and hazard identification, initial risk estimation (harm severity × exposure frequency × avoidance probability), identification of risk-reduction measures, and residual-risk evaluation after measures are applied. The output drives the entire safety architecture of the robot cell and must be documented for regulatory and liability purposes.

- ### Semantic Classification
  - owl-class:: robotics:RiskAssessment
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires: rb 0087 safety standard
  - Enables: rb 0096 safeguarding, rb 0103 collaborative operation
  - Depends on: rb 0088 iso 13482 compliance
  - Related to: rb 0090 emergency stop, rb 0095 safety zone, rb 0100 safety integrity level, Risk Assessment, Functional Safety

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
