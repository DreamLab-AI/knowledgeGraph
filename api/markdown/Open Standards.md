public:: true

# Open Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:89ce50e028d25527833466d993a9498c12986b31b27e1675137b6e9b8112caff",
  "@type": "Page",
  "vc:slug": "open-standards",
  "title": "Open Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:standards",
      "vc:label": "Standards"
    },
    {
      "@id": "urn:visionflow:linked:khronos-open-xr",
      "vc:label": "Khronos OpenXR"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    },
    {
      "@id": "urn:visionflow:linked:onnx-standard",
      "vc:label": "ONNX Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Open Standards"
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
  "@id": "urn:ngm:class:open-standards",
  "@type": "Class",
  "label": "Open Standards",
  "definition": "Open standards are publicly available, openly developed specifications that any party may implement, promoting interoperability and reducing dependence on a single vendor.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards",
      "label": "Standards"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:standards",
        "label": "Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:khronos-open-xr",
        "label": "Khronos OpenXR"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-standards:4769e69a9cfd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:89ce50e028d25527833466d993a9498c12986b31b27e1675137b6e9b8112caff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Standards]]",
      "resolved": "urn:visionflow:linked:standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Khronos OpenXR]]",
      "resolved": "urn:visionflow:linked:khronos-open-xr",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ONNX Standard]]",
      "resolved": "urn:visionflow:linked:onnx-standard",
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
  - Open standards are publicly available, openly developed specifications that any party may implement, promoting interoperability and reducing dependence on a single vendor.

- ### Semantic Classification
  - owl-class:: metaverse:OpenStandards
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards]]
  - bridges-to:: [[glTF]], [[ONNX Standard]]
  - requires:: [[Standards]]
  - enables:: [[Khronos OpenXR]]

- ### Content
  - Open standards are produced through accessible processes, documented publicly and implementable without restrictive licensing, which lets independent implementations interoperate. They underpin much of the web, graphics and XR ecosystems.
  - In immersive computing open standards such as OpenXR and glTF reduce fragmentation across devices and tools, while ONNX plays the same role for model exchange. They connect the standards process to concrete interoperability outcomes.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
