public:: true

# ICRA
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6cf6c99bf345be02d2934500fda6c4f74ecfcb2d800d0792f6a6b2b5fdda8a28",
  "@type": "Page",
  "vc:slug": "icra",
  "title": "ICRA",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iros",
      "vc:label": "IROS"
    },
    {
      "@id": "urn:visionflow:linked:mobile-manipulation",
      "vc:label": "Mobile Manipulation"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ICRA"
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
  "@id": "urn:ngm:class:icra",
  "@type": "Class",
  "label": "ICRA",
  "definition": "ICRA, the International Conference on Robotics and Automation, is an annual academic conference organised by the IEEE Robotics and Automation Society.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:academic-conference",
      "label": "Academic Conference"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:icra:e4aac87637f4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6cf6c99bf345be02d2934500fda6c4f74ecfcb2d800d0792f6a6b2b5fdda8a28"
  },
  "vc:resolutions": [
    {
      "raw": "[[IROS]]",
      "resolved": "urn:visionflow:linked:iros",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mobile Manipulation]]",
      "resolved": "urn:visionflow:linked:mobile-manipulation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
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
  - ICRA, the International Conference on Robotics and Automation, is an annual academic conference organised by the IEEE Robotics and Automation Society.

- ### Semantic Classification
  - owl-class:: robotics:ICRA
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[IROS]], [[Mobile Manipulation]]

- ### Content
  - ICRA is one of the largest and most cited venues for robotics research, covering topics including manipulation, locomotion, perception, planning, and control. It has been held annually since 1984.
  - It is organised by the IEEE Robotics and Automation Society and, together with IROS, forms one of the primary annual gatherings for the international robotics research community.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
