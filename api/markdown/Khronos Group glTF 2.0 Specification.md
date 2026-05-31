public:: true

# Khronos Group glTF 2.0 Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:919011fe5396dff660dab48499986fed39f9b9010e6c7b6aed4f9ee3109d87eb",
  "@type": "Page",
  "vc:slug": "khronos-group-gl-tf-2-0-specification",
  "title": "Khronos Group glTF 2.0 Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-asset",
      "vc:label": "3D Asset"
    },
    {
      "@id": "urn:visionflow:linked:computer-graphics",
      "vc:label": "Computer Graphics"
    },
    {
      "@id": "urn:visionflow:linked:gl-tf",
      "vc:label": "glTF"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Khronos Group glTF 2.0 Specification"
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
  "@id": "urn:ngm:class:khronos-group-gl-tf-2-0-specification",
  "@type": "Class",
  "label": "Khronos Group glTF 2.0 Specification",
  "definition": "The glTF 2.0 specification is the Khronos Group standard defining the GL Transmission Format for efficient transmission and loading of 3D scenes and models. It uses JSON for structure with binary buffers for geometry and a physically based material model.",
  "domain": "computer-graphics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:gl-tf",
      "label": "glTF"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-asset",
        "label": "3D Asset"
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
  "@id": "urn:visionflow:annotation:link-resolutions:khronos-group-gl-tf-2-0-specification:a11a665e5c02",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:919011fe5396dff660dab48499986fed39f9b9010e6c7b6aed4f9ee3109d87eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Asset]]",
      "resolved": "urn:visionflow:linked:3-d-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Graphics]]",
      "resolved": "urn:visionflow:linked:computer-graphics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[glTF]]",
      "resolved": "urn:visionflow:linked:gl-tf",
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
  - The glTF 2.0 specification is the Khronos Group standard defining the GL Transmission Format for efficient transmission and loading of 3D scenes and models. It uses JSON for structure with binary buffers for geometry and a physically based material model.

- ### Semantic Classification
  - owl-class:: computer-graphics:KhronosGroupglTF20Specification
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[glTF]]
  - bridges-to:: [[Computer Graphics]]
  - enables:: [[3D Asset]]

- ### Content
  - The glTF 2.0 specification, maintained by the Khronos Group, defines a runtime asset format for 3D scenes and models intended for efficient delivery and loading by engines and viewers. It describes scene structure in JSON and stores mesh, animation and skinning data in binary buffers, with a physically based rendering material model.
  - Version 2.0 added metallic-roughness materials and removed dependence on a particular graphics technique, making it a portable interchange format. It is widely supported across game engines, web viewers and 3D tools as a standard for delivering ready-to-render assets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
