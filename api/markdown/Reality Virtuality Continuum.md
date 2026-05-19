public:: true

# Reality Virtuality Continuum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:79e120356a5c86174c4a2db4b7513761129e86e03edfc81eafa88806f1f5e13c",
  "@type": "Page",
  "vc:slug": "reality-virtuality-continuum",
  "title": "Reality Virtuality Continuum",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cross-reality-experiences",
      "vc:label": "Cross Reality Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-framework",
      "vc:label": "XR Framework"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10018"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Reality Virtuality Continuum"
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
  "@id": "urn:ngm:class:reality-virtuality-continuum",
  "@type": "Class",
  "label": "Reality Virtuality Continuum",
  "definition": "A theoretical framework introduced by Milgram and Kishino describing the continuous spectrum between purely physical reality and fully virtual environments, with augmented reality and augmented virtuality as intermediate mixed reality states along this scale.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:xr-framework",
      "label": "XR Framework"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:cross-reality-experiences",
        "label": "Cross Reality Experiences"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:reality-virtuality-continuum:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:79e120356a5c86174c4a2db4b7513761129e86e03edfc81eafa88806f1f5e13c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cross Reality Experiences]]",
      "resolved": "urn:visionflow:linked:cross-reality-experiences",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Framework]]",
      "resolved": "urn:visionflow:owl:class:xr-framework",
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
  - A theoretical framework introduced by Milgram and Kishino in 1994 describing the continuous spectrum between purely physical reality and fully virtual environments, with augmented reality and augmented virtuality as intermediate mixed reality states along this scale.

- ### Semantic Classification
  - owl-class:: spatial-computing:RealityVirtualityContinuum
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[XR Framework]]
  - enables:: [[Cross Reality Experiences]]

- ### Content

  - #### Continuum Stages
		- Real Environment at one extreme
		- Augmented Reality adding digital overlays
		- Augmented Virtuality with real elements in virtual
		- Virtual Reality at the other extreme
		- Cross-reality (CR) transitions between stages
  - #### 2024 Context
		- Video passthrough HMDs enable full continuum
		- Meta Quest, Apple Vision Pro, Varjo devices
		- Extended Reality (XR) encompasses full spectrum
		- Military training primary application area

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
