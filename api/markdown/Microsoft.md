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
  "definition": "Microsoft is a multinational technology corporation that develops and distributes operating systems, enterprise productivity software, cloud computing services, artificial intelligence platforms, developer tools, and mixed-reality hardware; its Azure cloud, Windows OS, Office 365, GitHub, and HoloLens product lines make it a foundational infrastructure and AI provider across enterprise and consumer markets.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": {
    "@id": "urn:ngm:class:distributed-systems",
    "label": "Distributed Systems"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:azure",
        "label": "Azure"
      },
      {
        "@id": "urn:ngm:class:operating-system",
        "label": "Windows Operating System"
      },
      {
        "@id": "urn:ngm:class:github",
        "label": "GitHub"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:enterprise-software-platform",
        "label": "Enterprise Software"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      },
      {
        "@id": "urn:ngm:class:openai-research-organisation",
        "label": "OpenAI"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:amazon-web-services",
        "label": "Amazon Web Services"
      },
      {
        "@id": "urn:ngm:class:google-ai-technology-corporation-cloud",
        "label": "Google Cloud"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:standards-organization",
        "label": "Standards Organization"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:directx",
        "label": "DirectX"
      },
      {
        "@id": "urn:ngm:class:tele-025-microsoft-hololens",
        "label": "HoloLens"
      },
      {
        "@id": "urn:ngm:class:microsoft-copilot",
        "label": "Copilot"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:msft",
      "label": "MSFT"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
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
