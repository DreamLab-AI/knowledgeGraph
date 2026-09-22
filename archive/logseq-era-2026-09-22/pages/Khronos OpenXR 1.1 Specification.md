public:: true

# Khronos OpenXR 1.1 Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86dddd9df8bf919253374897c845b503d40b67c9f9b8c2d58f39e3fa206d6183",
  "@type": "Page",
  "vc:slug": "khronos-open-xr-1-1-specification",
  "title": "Khronos OpenXR 1.1 Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:khronos-open-xr",
      "vc:label": "Khronos OpenXR"
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
      "@id": "urn:visionflow:linked:open-xr",
      "vc:label": "OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:open-standards",
      "vc:label": "Open Standards"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Khronos OpenXR 1.1 Specification"
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
  "@id": "urn:ngm:class:khronos-open-xr-1-1-specification",
  "@type": "Class",
  "label": "Khronos OpenXR 1.1 Specification",
  "definition": "The OpenXR 1.1 specification is a revision of the OpenXR standard that consolidates widely adopted extensions into the core and refines the cross-vendor XR application interface.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:khronos-open-xr",
      "label": "Khronos OpenXR"
    },
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:khronos-open-xr",
        "label": "Khronos OpenXR"
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
  "@id": "urn:visionflow:annotation:link-resolutions:khronos-open-xr-1-1-specification:d9713f4c85f7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86dddd9df8bf919253374897c845b503d40b67c9f9b8c2d58f39e3fa206d6183"
  },
  "vc:resolutions": [
    {
      "raw": "[[Khronos OpenXR]]",
      "resolved": "urn:visionflow:linked:khronos-open-xr",
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
      "raw": "[[OpenXR]]",
      "resolved": "urn:visionflow:linked:open-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Standards]]",
      "resolved": "urn:visionflow:linked:open-standards",
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
  - The OpenXR 1.1 specification is a revision of the OpenXR standard that consolidates widely adopted extensions into the core and refines the cross-vendor XR application interface.

- ### Semantic Classification
  - owl-class:: metaverse:KhronosOpenXR11Specification
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Khronos OpenXR]]
  - bridges-to:: [[OpenXR]], [[Open Standards]]
  - requires:: [[Khronos OpenXR]]
  - enables:: [[Virtual Reality]], [[Augmented Reality]]

- ### Content
  - OpenXR 1.1 folds several mature extensions, such as local floor reference spaces and improved interaction profiles, into the core specification, reducing the extension handling applications must implement. It maintains compatibility while raising the baseline feature set.
  - The revision reflects maturation of the standard as runtimes and engines converge on common behaviour. It builds directly on the OpenXR core and the open standards process at the Khronos Group.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
