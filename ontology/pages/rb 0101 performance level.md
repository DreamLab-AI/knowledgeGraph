public:: true

# rb 0101 performance level
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e7480b0292a741283bf7ce99f00bcf103828f70325cda623a7a63912732f169",
  "@type": "Page",
  "vc:slug": "rb-0101-performance-level",
  "title": "rb 0101 performance level",
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
      "vc:value": "RB-0101"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0101 performance level"
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
  "@id": "urn:ngm:class:rb-0101-performance-level",
  "@type": "Class",
  "label": "rb 0101 performance level",
  "definition": "Performance Level (PL) is a discrete safety metric defined in ISO 13849-1 that quantifies the ability of a safety-related control system to perform a safety function under foreseeable conditions. Levels range from PLa (lowest) to PLe (highest), each corresponding to a target probability of dangerous failure per hour. PL is determined through risk assessment and verified against the required PL (PLr) derived from the hazard and risk analysis of the application.",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0100-safety-integrity-level", "label": "rb 0100 safety integrity level"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"},
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-10218", "label": "ISO 10218"},
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0101-performance-level:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e7480b0292a741283bf7ce99f00bcf103828f70325cda623a7a63912732f169"
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
  - Performance Level (PL) is a discrete safety metric defined in ISO 13849-1 that quantifies the ability of a safety-related control system to perform a safety function under foreseeable conditions. Levels range from PLa (lowest) to PLe (highest), each corresponding to a target probability of dangerous failure per hour (PFHd). PL is determined through a structured risk assessment and verified against the required PL (PLr) derived from hazard analysis, considering parameters such as category, mean time to dangerous failure (MTTFd), diagnostic coverage (DC), and common-cause failure (CCF).

- ### Semantic Classification
  - owl-class:: robotics:rb0101performancelevel
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Performance Level is closely related to Safety Integrity Level (SIL) from IEC 61508, sharing the same goal of characterising safety-related system reliability but using a different methodology and scale. PL maps approximately to SIL: PLc ≈ SIL 1, PLd ≈ SIL 2, PLe ≈ SIL 3. In collaborative robotics, PLd or PLe is typically required for functions that prevent hazardous robot motion in human-occupied workspaces.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
