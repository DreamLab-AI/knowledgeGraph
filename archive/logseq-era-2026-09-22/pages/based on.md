public:: true

# based on
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c9972aefe906bb4bb949e8b8cdc6ffa54bbb9fa375abc708f58e3fe0380d159",
  "@type": "Page",
  "vc:slug": "based-on",
  "title": "based on",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:safety-standard",
      "vc:label": "Safety Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0107"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "based on"
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
  "@id": "urn:ngm:class:based-on",
  "@type": "Class",
  "label": "based on",
  "definition": "\"Based on\" is a provenance and derivation relation used in robotics standards and quality management frameworks to indicate that a system, design, or specification is derived from or conforms to an authoritative reference standard such as ISO 9001 or functional-safety norms. Within the robotics domain it records the normative lineage of robot software architectures, safety certifications, and performance benchmarks relative to their governing standards.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-safety-and-standards",
      "label": "Safety and Standards"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:quality-standard", "label": "Quality Standard"},
      {"@id": "urn:ngm:class:iso-standards", "label": "Iso Standards"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:standards-conformance", "label": "Standards Conformance"},
      {"@id": "urn:ngm:class:compliance-standards", "label": "Compliance Standards"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"},
      {"@id": "urn:ngm:class:robotics-systems", "label": "Robotics Systems"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:standardization-bodies", "label": "Standardization Bodies"},
      {"@id": "urn:ngm:class:standards-documentation", "label": "Standards Documentation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:robotics-platform", "label": "Robotics Platform"},
      {"@id": "urn:ngm:class:safety-standard", "label": "Safety Standard"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:based-on:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6c9972aefe906bb4bb949e8b8cdc6ffa54bbb9fa375abc708f58e3fe0380d159"
  },
  "vc:resolutions": [
    {
      "raw": "[[Safety Standard]]",
      "resolved": "urn:visionflow:linked:safety-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
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
  "Based on" is a provenance and derivation relation used in robotics standards and quality management frameworks to indicate that a system, design, or specification is derived from or conforms to an authoritative reference standard. Within the robotics domain it records the normative lineage of robot software architectures, safety certifications, and performance benchmarks relative to their governing standards such as ISO 9001 or IEC 61508.

- ### Relationships
  - relatedTo:: [[Robotics]], [[Functional Safety]], [[Quality Standard]], [[Iso Standards]]
  - uses:: [[Standards Conformance]], [[Compliance Standards]]
  - supports:: [[Robot Safety]], [[Robotics Systems]]
  - requires:: [[Standardization Bodies]], [[Standards Documentation]]
  - bridgesTo:: [[Robotics Platform]]

- ### Content
  In robotics engineering and certification contexts, the "based on" relation serves as a formal traceability link between a concrete artefact—a robot control system, a safety validation report, a performance test suite—and the standard or specification from which its requirements are derived. This traceability is required by functional safety standards (IEC 61508, ISO 10218 for industrial robots, ISO/TS 15066 for collaborative robots) which mandate that every safety requirement be traceable to its normative source.

  Quality management systems in robotics manufacturing, typically certified against ISO 9001, use "based on" relations extensively in their document hierarchies: procedures reference the clauses that mandate them, work instructions reference the procedures that instantiate them, and calibration records reference the measurement standards that define acceptance criteria. This hierarchical derivation chain enables auditors to verify that the quality management system comprehensively addresses all applicable standard requirements.

  The semantic significance of "based on" distinguishes it from weaker relations such as "references" or "mentions." A system that is based on a standard has adopted that standard's requirements as binding constraints on its design or operation, whereas a document that merely references a standard may do so informatively. This distinction matters for conformity assessment: regulatory bodies evaluating robot deployments under the EU Machinery Directive or the proposed AI Act require evidence that safety-critical systems are based on—not merely aware of—applicable harmonised standards.

  In ontological modelling, "based on" functions as a derivation or instantiation relation bridging abstract standards to concrete implementations, enabling reasoning about compliance coverage and gap analysis across complex robotics systems composed of components certified against different standards.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
