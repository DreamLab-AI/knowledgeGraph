public:: true

# User Experience Layer
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f4b344b016b0b733d3705a32add86bae2e92f73c318aec5f03df2e936ae2092",
  "@type": "Page",
  "vc:slug": "user-experience-layer",
  "title": "User Experience Layer",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:presentation-layer",
      "vc:label": "Presentation Layer"
    },
    {
      "@id": "urn:visionflow:linked:social-layer",
      "vc:label": "Social Layer"
    },
    {
      "@id": "urn:visionflow:linked:usability",
      "vc:label": "Usability"
    },
    {
      "@id": "urn:visionflow:linked:accessibility",
      "vc:label": "Accessibility"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "vc:label": "ISO (International Organization for Standardization)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "User Experience Layer"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:user-experience-layer",
  "@type": "Class",
  "label": "User Experience Layer",
  "definition": "The User Experience Layer is the topmost human-facing stratum concerned with how effective, accessible, and satisfying interaction with a system is. It sits above the Presentation Layer that renders the interface and has no technical layer above it. It contains interaction design, usability criteria, accessibility requirements, and user research findings.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:presentation-layer",
        "label": "Presentation Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:social-layer",
        "label": "Social Layer"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:user-experience-layer:734cbaf86b96",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0f4b344b016b0b733d3705a32add86bae2e92f73c318aec5f03df2e936ae2092"
  },
  "vc:resolutions": [
    {
      "raw": "[[Presentation Layer]]",
      "resolved": "urn:visionflow:linked:presentation-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Layer]]",
      "resolved": "urn:visionflow:linked:social-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Usability]]",
      "resolved": "urn:visionflow:linked:usability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accessibility]]",
      "resolved": "urn:visionflow:linked:accessibility",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO (International Organization for Standardization)]]",
      "resolved": "urn:visionflow:linked:iso-international-organization-for-standardization",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The User Experience Layer is the topmost human-facing stratum concerned with how effective, accessible, and satisfying interaction with a system is. It sits above the Presentation Layer that renders the interface and has no technical layer above it. It contains interaction design, usability criteria, accessibility requirements, and user research findings.

- ### Semantic Classification
  - owl-class:: ux:UserExperienceLayer
  - owl-role:: Layer

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Usability]], [[Accessibility]]
  - requires:: [[Presentation Layer]]
  - enables:: [[Social Layer]]

- ### Content
  - The User Experience Layer concerns the quality of a person's whole interaction with a system, beyond mere rendering. Typical members include interaction and information design, usability heuristics and testing, accessibility standards, and the research that grounds design in real user needs. It judges whether the system is usable and worthwhile, not just functional.
  - It requires the Presentation Layer to render the interface it shapes, and it enables the Social Layer, since adoption and community depend on a positive experience. Decisions here translate underlying capability into perceived value.
  - The layer bridges to usability and accessibility, disciplines that define how to measure and ensure inclusive, effective interaction. Standards applied here determine who can use the system and how well they succeed.

- ### Provenance
  - sources:: [[ISO (International Organization for Standardization)]]
  - migration-date:: 2026-05-29T00:00:00Z
