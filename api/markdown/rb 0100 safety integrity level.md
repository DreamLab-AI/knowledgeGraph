public:: true

# rb 0100 safety integrity level
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:88c0c2c9b99e5ed7984bd09c196eadd4175bd20f08552b20482a8169485fab50",
  "@type": "Page",
  "vc:slug": "rb-0100-safety-integrity-level",
  "title": "rb 0100 safety integrity level",
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
      "vc:value": "RB-0100"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0100 safety integrity level"
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
  "@id": "urn:ngm:class:rb-0100-safety-integrity-level",
  "@type": "Class",
  "label": "rb 0100 safety integrity level",
  "definition": "Safety Integrity Level (SIL) is a discrete measure of the reliability required for a safety function in a robotic or automated system, defined by IEC 61508 on a four-level scale (SIL 1–4). A higher SIL demands greater hardware fault tolerance, stricter software development processes, and more comprehensive validation to ensure the safety function reduces risk to a tolerable level. SIL is assigned during risk assessment and drives the entire safety lifecycle of a system.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    },
    {
      "@id": "urn:ngm:class:cobot-safety-levels",
      "label": "Cobot Safety Levels"
    }
  ],
  "quality": 0.7,
  "relations": {
    "standardizedBy": [
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"},
      {"@id": "urn:ngm:class:rb-0087-safety-standard", "label": "rb 0087 safety standard"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0090-emergency-stop", "label": "rb 0090 emergency stop"},
      {"@id": "urn:ngm:class:rb-0091-safety-rated-monitored-stop", "label": "rb 0091 safety rated monitored stop"},
      {"@id": "urn:ngm:class:rb-0096-safeguarding", "label": "rb 0096 safeguarding"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0092-protective-stop", "label": "rb 0092 protective stop"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0100-safety-integrity-level:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:88c0c2c9b99e5ed7984bd09c196eadd4175bd20f08552b20482a8169485fab50"
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
  - Safety Integrity Level (SIL) is a four-tier classification (SIL 1 = lowest, SIL 4 = highest) specifying the required probability of failure on demand for a safety-instrumented function. It is the foundational metric used in IEC 61508 and derived sector standards (IEC 62061 for machinery, ISO 13849 Performance Level) to specify, design, and verify safety functions in robotic and automated systems.

  SIL allocation results from a quantitative or qualitative risk assessment that considers the severity of the hazard, the frequency of exposure, and the likelihood of avoiding harm. A SIL 2 safety function, for example, requires a probability of dangerous failure on demand between 10⁻³ and 10⁻². Achieving the required SIL involves a combination of hardware fault tolerance, diagnostic coverage, and systematic process rigour across the entire safety lifecycle.

- ### Semantic Classification
  - owl-class:: robotics:rb0100safetyintegritylevel
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Standardised by IEC 61508 and underpins Functional Safety practices for collaborative robots and industrial automation.
  - Closely coupled with risk assessment (RB-0089), safety standards (RB-0087), and safety stop mechanisms (RB-0090, RB-0091, RB-0092).

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
