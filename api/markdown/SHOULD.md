public:: true

# SHOULD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:09a43a5bbcef12d5e3fce0ed0f42d387663fe70792d769c11f7b6f0dbba39a25",
  "@type": "Page",
  "vc:slug": "should",
  "title": "SHOULD",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SHOULD"
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
  "@id": "urn:ngm:class:should",
  "@type": "Class",
  "label": "SHOULD",
  "definition": "SHOULD is an RFC 2119 normative keyword indicating that a particular behaviour or implementation choice is strongly recommended but not absolutely required. In specification and standards documents, SHOULD implies that valid reasons may exist in particular circumstances to deviate from the stated guidance, but the implementer must understand the implications and weigh the trade-offs carefully before choosing a different course. It contrasts with MUST (mandatory) and MAY (optional).",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"},
      {"@id": "urn:ngm:class:standards-conformance", "label": "Standards Conformance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:compliance-standards", "label": "Compliance Standards"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:standards-conformance-testing", "label": "Standards Conformance Testing"}
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:should:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:09a43a5bbcef12d5e3fce0ed0f42d387663fe70792d769c11f7b6f0dbba39a25"
  },
  "vc:resolutions": [],
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
  - SHOULD is an RFC 2119 normative keyword indicating that a particular behaviour or implementation choice is strongly recommended but not absolutely required. Valid reasons may exist in particular circumstances to deviate from the guidance, but the implementer must understand the implications and weigh trade-offs carefully. It contrasts with MUST (mandatory) and MAY (optional), and is essential vocabulary in specifications governing interoperability, security, and conformance.

- ### Semantic Classification
  - owl-class:: infrastructure:SHOULD
  - owl-role:: Concept

- ### Relationships
  - **relatedTo**: Interoperability Standard, Standards Conformance
  - **uses**: Compliance Standards
  - **contrastsWith**: Standards Conformance Testing

- ### Content
  SHOULD is the RFC 2119 recommendation-level normative keyword used in IETF, W3C, and related technical specifications to signal that an implementation ought to follow guidance unless specific circumstances justify deviation.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
