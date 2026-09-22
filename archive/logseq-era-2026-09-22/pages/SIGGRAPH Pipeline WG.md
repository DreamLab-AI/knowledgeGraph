public:: true

# SIGGRAPH Pipeline WG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:880c4036305a94d434d8f78d6b16ae9ba0fa7e81c592a67564b50acffdcdb062",
  "@type": "Page",
  "vc:slug": "siggraph-pipeline-wg",
  "title": "SIGGRAPH Pipeline WG",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-asset-standard",
      "vc:label": "3D Asset Standard"
    },
    {
      "@id": "urn:visionflow:linked:asset-interoperability",
      "vc:label": "Asset Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:3-d-content-pipeline",
      "vc:label": "3D Content Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:material-x",
      "vc:label": "MaterialX"
    },
    {
      "@id": "urn:visionflow:linked:siggraph",
      "vc:label": "SIGGRAPH"
    },
    {
      "@id": "urn:visionflow:linked:standards-body",
      "vc:label": "Standards Body"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SIGGRAPH Pipeline WG"
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
  "@id": "urn:ngm:class:siggraph-pipeline-wg",
  "@type": "Class",
  "label": "SIGGRAPH Pipeline WG",
  "definition": "The SIGGRAPH Pipeline Working Group is an industry effort associated with the SIGGRAPH community that addresses interoperability and best practice across the stages of 3D content production pipelines.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-asset-standard",
        "label": "3D Asset Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-interoperability",
        "label": "Asset Interoperability"
      },
      {
        "@id": "urn:ngm:class:3-d-content-pipeline",
        "label": "3D Content Pipeline"
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
  "@id": "urn:visionflow:annotation:link-resolutions:siggraph-pipeline-wg:ce61531f806e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:880c4036305a94d434d8f78d6b16ae9ba0fa7e81c592a67564b50acffdcdb062"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Asset Standard]]",
      "resolved": "urn:visionflow:linked:3-d-asset-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Asset Interoperability]]",
      "resolved": "urn:visionflow:linked:asset-interoperability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Content Pipeline]]",
      "resolved": "urn:visionflow:linked:3-d-content-pipeline",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MaterialX]]",
      "resolved": "urn:visionflow:linked:material-x",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SIGGRAPH]]",
      "resolved": "urn:visionflow:linked:siggraph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Body]]",
      "resolved": "urn:visionflow:linked:standards-body",
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
  - The SIGGRAPH Pipeline Working Group is an industry effort associated with the SIGGRAPH community that addresses interoperability and best practice across the stages of 3D content production pipelines.

- ### Semantic Classification
  - owl-class:: metaverse:SIGGRAPHPipelineWG
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Body]]
  - bridges-to:: [[MaterialX]], [[SIGGRAPH]]
  - requires:: [[3D Asset Standard]]
  - enables:: [[Asset Interoperability]], [[3D Content Pipeline]]

- ### Content
  - The working group brings together practitioners and tool vendors to align conventions for moving assets, materials and scene data between the applications used across a production pipeline. Its focus is reducing friction and loss of fidelity at the boundaries between tools.
  - Outputs of such groups typically inform open standards and recommended practices that feed into formats like MaterialX and glTF. Aligning with the SIGGRAPH community gives the work visibility across graphics research and industry.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
