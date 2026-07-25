public:: true

# Performance Capture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3dd38d59393cf290d84274054aa1c1f1b320ad80754cc5927d95513bc00bab9b",
  "@type": "Page",
  "vc:slug": "performance-capture",
  "title": "Performance Capture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:motion-capture",
      "vc:label": "Motion Capture"
    },
    {
      "@id": "urn:visionflow:linked:avatar",
      "vc:label": "Avatar"
    },
    {
      "@id": "urn:visionflow:linked:skeletal-animation",
      "vc:label": "Skeletal Animation"
    },
    {
      "@id": "urn:visionflow:linked:volumetric-video",
      "vc:label": "Volumetric Video"
    },
    {
      "@id": "urn:visionflow:linked:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Performance Capture"
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
  "@id": "urn:ngm:class:performance-capture",
  "@type": "Class",
  "label": "Performance Capture",
  "definition": "Performance capture records an actor's full body, facial and sometimes finger movement simultaneously so that a single performance drives a digital character's motion and expression.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computer-graphics",
      "label": "Computer Graphics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:motion-capture",
        "label": "Motion Capture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:avatar",
        "label": "Avatar"
      },
      {
        "@id": "urn:ngm:class:skeletal-animation",
        "label": "Skeletal Animation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:performance-capture:641557258a6e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3dd38d59393cf290d84274054aa1c1f1b320ad80754cc5927d95513bc00bab9b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Motion Capture]]",
      "resolved": "urn:visionflow:linked:motion-capture",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Avatar]]",
      "resolved": "urn:visionflow:linked:avatar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Skeletal Animation]]",
      "resolved": "urn:visionflow:linked:skeletal-animation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Volumetric Video]]",
      "resolved": "urn:visionflow:linked:volumetric-video",
      "kind": "StubLink"
    },
    {
      "raw": "[[Photogrammetry]]",
      "resolved": "urn:visionflow:linked:photogrammetry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
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
  - Performance capture records an actor's full body, facial and sometimes finger movement simultaneously so that a single performance drives a digital character's motion and expression.

- ### Semantic Classification
  - owl-class:: metaverse:PerformanceCapture
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Computer Graphics]]
  - bridges-to:: [[Volumetric Video]], [[Photogrammetry]]
  - requires:: [[Motion Capture]]
  - enables:: [[Avatar]], [[Skeletal Animation]]

- ### Content
  - Performance capture extends body motion capture by recording facial deformation and hand articulation in the same take, preserving the timing relationships between gesture, expression and speech. Captured data is retargeted onto a rigged character through skeletal and blendshape solving.
  - In metaverse and virtual production contexts performance capture supplies realistic, expressive avatar motion that cannot be hand-animated economically. It feeds the same character pipelines that consume motion capture and skeletal animation data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
