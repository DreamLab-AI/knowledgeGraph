public:: true

# rb 0038 compliance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:18c5eff2d77b539728d895e9e3bdec1b013cf042bf000307e4c56fe6885426c9",
  "@type": "Page",
  "vc:slug": "rb-0038-compliance",
  "title": "rb 0038 compliance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:open-source",
      "vc:label": "Open Source"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0038"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0038 compliance"
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
  "@id": "urn:ngm:class:rb-0038-compliance",
  "@type": "Class",
  "label": "rb 0038 compliance",
  "definition": "In robotics, compliance is the mechanical property of a robot joint or end-effector describing its tendency to yield under applied forces or torques, quantified as the inverse of stiffness. Compliant behaviour is essential for safe human-robot interaction, allowing robots to absorb contact forces without rigid collision, and is actively exploited in impedance and admittance control strategies to achieve gentle, force-sensitive manipulation.",
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
    "contrastsWith": [
      {"@id": "urn:ngm:class:rb-0039-stiffness", "label": "rb 0039 stiffness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0056-impedance-control", "label": "rb 0056 impedance control"},
      {"@id": "urn:ngm:class:rb-0057-admittance-control", "label": "rb 0057 admittance control"},
      {"@id": "urn:ngm:class:rb-0041-inertia", "label": "rb 0041 inertia"},
      {"@id": "urn:ngm:class:rb-0026-robot-joint", "label": "rb 0026 robot joint"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:rb-0053-force-control", "label": "rb 0053 force control"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0038-compliance:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:18c5eff2d77b539728d895e9e3bdec1b013cf042bf000307e4c56fe6885426c9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Open Source]]",
      "resolved": "urn:visionflow:linked:open-source",
      "kind": "StubLink"
    },
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
  - ### Primary Definition

- ### Semantic Classification
  - owl-class:: robotics:rb0038compliance
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - **Compliance** - Yielding behaviour under applied forces

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
