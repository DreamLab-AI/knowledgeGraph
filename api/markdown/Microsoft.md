public:: true

# Microsoft
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:26e247010d21c6931c115463dc50c55963433dfb5ca23bb643b67741594a7923",
  "@type": "Page",
  "vc:slug": "microsoft",
  "title": "Microsoft",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:spatial-computing",
      "vc:label": "Spatial Computing"
    },
    {
      "@id": "urn:visionflow:linked:augmented-reality",
      "vc:label": "Augmented Reality"
    },
    {
      "@id": "urn:visionflow:linked:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:standards-organization",
      "vc:label": "Standards Organization"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Microsoft"
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
  "@id": "urn:ngm:class:microsoft",
  "@type": "Class",
  "label": "Microsoft",
  "definition": "Microsoft is a multinational technology company that produces operating systems, productivity software, cloud services and mixed reality hardware and platforms.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-organization",
      "label": "Standards Organization"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-computing-paradigm",
        "label": "Spatial Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:microsoft:9fbf261b62c1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:26e247010d21c6931c115463dc50c55963433dfb5ca23bb643b67741594a7923"
  },
  "vc:resolutions": [
    {
      "raw": "[[Spatial Computing Paradigm]]",
      "resolved": "urn:visionflow:linked:spatial-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Augmented Reality]]",
      "resolved": "urn:visionflow:linked:augmented-reality",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:linked:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standards Organization]]",
      "resolved": "urn:visionflow:linked:standards-organization",
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
  - Microsoft is a multinational technology company that produces operating systems, productivity software, cloud services and mixed reality hardware and platforms.

- ### Semantic Classification
  - owl-class:: general:Microsoft
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Standards Organization]]
  - bridges-to:: [[Graphics API]], [[Distributed Systems]]
  - enables:: [[Spatial Computing Paradigm]], [[Augmented Reality]]

- ### Content
  - Microsoft develops the Windows operating system, the Azure cloud platform and a broad portfolio of developer tools and productivity applications. It also produces mixed reality hardware and the associated spatial computing software stack.
  - The company participates in graphics and interoperability standards and contributes to the wider ecosystem of APIs and runtimes used in immersive computing. Its platforms are widely used across enterprise and consumer software.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
