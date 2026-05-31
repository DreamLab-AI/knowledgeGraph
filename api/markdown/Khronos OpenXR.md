public:: true

# Khronos OpenXR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6837385f8a4d8e39c2ccfa26b12631d735d9865a46771ed81fa87235f51bcec8",
  "@type": "Page",
  "vc:slug": "khronos-open-xr",
  "title": "Khronos OpenXR",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:open-xr",
      "vc:label": "OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:virtual-reality",
      "vc:label": "Virtual Reality"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:web-xr",
      "vc:label": "WebXR"
    },
    {
      "@id": "urn:visionflow:linked:khronos-group",
      "vc:label": "Khronos Group"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing-domain",
      "vc:label": "Spatial Computing Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Khronos OpenXR"
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
  "@id": "urn:ngm:class:khronos-open-xr",
  "@type": "Class",
  "label": "Khronos OpenXR",
  "definition": "Khronos OpenXR is an open, royalty-free standard that defines a common application interface for virtual and augmented reality devices, decoupling XR applications from specific runtimes and hardware.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing-domain",
      "label": "Spatial Computing Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
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
  "@id": "urn:visionflow:annotation:link-resolutions:khronos-open-xr:40b8bbd1bab5",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6837385f8a4d8e39c2ccfa26b12631d735d9865a46771ed81fa87235f51bcec8"
  },
  "vc:resolutions": [
    {
      "raw": "[[OpenXR]]",
      "resolved": "urn:visionflow:linked:open-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Reality]]",
      "resolved": "urn:visionflow:linked:virtual-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[WebXR]]",
      "resolved": "urn:visionflow:linked:web-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Khronos Group]]",
      "resolved": "urn:visionflow:linked:khronos-group",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing Domain]]",
      "resolved": "urn:visionflow:linked:spatial-computing-domain",
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
  - Khronos OpenXR is an open, royalty-free standard that defines a common application interface for virtual and augmented reality devices, decoupling XR applications from specific runtimes and hardware.

- ### Semantic Classification
  - owl-class:: metaverse:KhronosOpenXR
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Spatial Computing Domain]]
  - bridges-to:: [[WebXR]], [[Khronos Group]]
  - requires:: [[OpenXR]]
  - enables:: [[Virtual Reality]], [[Augmented Reality]]

- ### Content
  - OpenXR specifies how an application queries device capabilities, creates sessions, reads tracked poses and submits rendered frames, so a single binary can run across conformant headsets and runtimes. It reduces the per-device porting cost that previously fragmented XR development.
  - Maintained by the Khronos Group, the standard is implemented by major headset runtimes and integrated into engines such as Unity and Unreal. It complements WebXR, which brings comparable abstractions to the browser.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
