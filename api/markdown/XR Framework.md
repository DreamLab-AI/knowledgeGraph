public:: true

# XR Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e79acbcf5fe4d0927ef3f8fb15d448db295f58f80902cb6cddabf2324ea2f5c9",
  "@type": "Page",
  "vc:slug": "xr-framework",
  "title": "XR Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9729"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "XR Framework"
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
  "@id": "urn:ngm:class:xr-framework",
  "@type": "Class",
  "label": "XR Framework",
  "definition": "An XR Framework is a software architecture or SDK that provides unified runtime support, device abstraction, and application programming interfaces for extended reality experiences spanning augmented, virtual, and mixed reality. Frameworks such as OpenXR standardise access to headsets and input devices, whilst game engine integrations enable developers to target multiple XR platforms from a single codebase.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:mixed-reality", "label": "Mixed Reality"},
      {"@id": "urn:ngm:class:immersive-experience", "label": "Immersive Experience"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:extended-reality", "label": "Extended Reality"},
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:spatial-computing-paradigm", "label": "Spatial Computing"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:xr-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e79acbcf5fe4d0927ef3f8fb15d448db295f58f80902cb6cddabf2324ea2f5c9"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - An XR Framework is a software architecture or SDK that provides unified runtime support, device abstraction, and application programming interfaces for extended reality experiences spanning augmented, virtual, and mixed reality. Frameworks such as OpenXR standardise access to headsets and input devices, whilst game engine integrations enable developers to target multiple XR platforms from a single codebase.

- ### Semantic Classification
  - owl-class:: spatial-computing:XRFramework
  - owl-role:: concept

- ### Relationships
  - enables:: [[Augmented Reality]], [[Virtual Reality]], [[Mixed Reality]], [[Immersive Experience]]
  - uses:: [[Extended Reality]], [[Game Engine]]
  - partOf:: [[Spatial Computing Paradigm]]

- ### Content

  ## Overview

  X R Framework represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
