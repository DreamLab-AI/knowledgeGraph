public:: true

# Mobile Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b71fd351624f65ef012536729f721eb5437500843f585ac8002cd5ebfd7c7de",
  "@type": "Page",
  "vc:slug": "mobile-manipulation",
  "title": "Mobile Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:manipulator",
      "vc:label": "Manipulator"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robot",
      "vc:label": "Mobile Robot"
    },
    {
      "@id": "urn:visionflow:linked:joint-configuration",
      "vc:label": "Joint Configuration"
    },
    {
      "@id": "urn:visionflow:linked:manipulation",
      "vc:label": "Manipulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mobile Manipulation"
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
  "@id": "urn:ngm:class:mobile-manipulation",
  "@type": "Class",
  "label": "Mobile Manipulation",
  "definition": "Mobile manipulation is the field of robotics that combines a mobile base with one or more manipulator arms so a robot can move through an environment and physically interact with objects.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:manipulation",
      "label": "Manipulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:manipulator",
        "label": "Manipulator"
      },
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
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
  "@id": "urn:visionflow:annotation:link-resolutions:mobile-manipulation:18cc8b0112e7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b71fd351624f65ef012536729f721eb5437500843f585ac8002cd5ebfd7c7de"
  },
  "vc:resolutions": [
    {
      "raw": "[[Manipulator]]",
      "resolved": "urn:visionflow:linked:manipulator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mobile Robot]]",
      "resolved": "urn:visionflow:linked:mobile-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Joint Configuration]]",
      "resolved": "urn:visionflow:linked:joint-configuration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Manipulation]]",
      "resolved": "urn:visionflow:linked:manipulation",
      "kind": "ResolvedLink"
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
  - Mobile manipulation is the field of robotics that combines a mobile base with one or more manipulator arms so a robot can move through an environment and physically interact with objects.

- ### Semantic Classification
  - owl-class:: robotics:MobileManipulation
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Manipulation]]
  - bridges-to:: [[Joint Configuration]]
  - requires:: [[Manipulator]], [[Mobile Robot]]

- ### Content
  - Mobile manipulation couples navigation and manipulation so that a robot can reposition its base to reach objects beyond the fixed workspace of a stationary arm. This raises planning problems because base motion and arm motion can be coordinated together.
  - Applications include warehouse picking, domestic assistance, and service robots that must fetch and place items in unstructured spaces. Research is reported at robotics venues such as ICRA and IROS.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
