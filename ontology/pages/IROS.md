public:: true

# IROS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:890403e29bb3e4b04d0630ba050dfe9fe043be26faeeb173f7fa720004e94452",
  "@type": "Page",
  "vc:slug": "iros",
  "title": "IROS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:icra",
      "vc:label": "ICRA"
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
      "vc:value": "IROS"
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
  "@id": "urn:ngm:class:iros",
  "@type": "Class",
  "label": "IROS",
  "definition": "IROS, the International Conference on Intelligent Robots and Systems, is an annual academic robotics conference co-sponsored by the IEEE and the Robotics Society of Japan.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:iros:0981ed336053",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:890403e29bb3e4b04d0630ba050dfe9fe043be26faeeb173f7fa720004e94452"
  },
  "vc:resolutions": [
    {
      "raw": "[[ICRA]]",
      "resolved": "urn:visionflow:linked:icra",
      "kind": "ResolvedLink"
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
  - IROS, the International Conference on Intelligent Robots and Systems, is an annual academic robotics conference co-sponsored by the IEEE and the Robotics Society of Japan.

- ### Semantic Classification
  - owl-class:: robotics:IROS
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[ICRA]], [[Mobile Manipulation]]

- ### Content
  - IROS has been held annually since 1988 and is a leading venue for research on robot perception, planning, manipulation, and human robot interaction. It rotates its host location each year.
  - Together with ICRA, IROS forms one of the two principal annual conferences where the international robotics research community presents new work.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
