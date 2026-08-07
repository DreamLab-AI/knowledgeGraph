public:: true

# Authoring Tool
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:24d326ab34c4983b60ae8d87c2adb24c1e389c1cbbdeacd03fc2da8d029ea67a",
  "@type": "Page",
  "vc:slug": "authoring-tool",
  "title": "Authoring Tool",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:asset-pipeline",
      "vc:label": "Asset Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:content-creation",
      "vc:label": "Content Creation"
    },
    {
      "@id": "urn:visionflow:linked:editor-interface",
      "vc:label": "Editor Interface"
    },
    {
      "@id": "urn:visionflow:linked:etsi-gr-arf-010",
      "vc:label": "ETSI GR ARF 010"
    },
    {
      "@id": "urn:visionflow:linked:interactive-experience-development",
      "vc:label": "Interactive Experience Development"
    },
    {
      "@id": "urn:visionflow:linked:msf-taxonomy",
      "vc:label": "MSF Taxonomy"
    },
    {
      "@id": "urn:visionflow:linked:preview-system",
      "vc:label": "Preview System"
    },
    {
      "@id": "urn:visionflow:linked:scene-design",
      "vc:label": "Scene Design"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-pipeline-wg",
      "vc:label": "SIGGRAPH Pipeline WG"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-modeling",
      "vc:label": "3D Modeling"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-infrastructure",
      "vc:label": "Compute Infrastructure"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "ComputeLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:generative-design-tool",
      "vc:label": "Generative Design Tool"
    },
    {
      "@id": "urn:visionflow:owl:class:graphics-api",
      "vc:label": "Graphics API"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "InteractionDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20101"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Authoring Tool"
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
  "@id": "urn:ngm:class:authoring-tool",
  "@type": "Class",
  "label": "Authoring Tool",
  "definition": "Software application for creating or editing immersive content, including 3D models, environments, interactions, and multimedia assets for metaverse experiences.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:digital-content-creation",
      "label": "Digital Content Creation"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:asset-pipeline",
        "label": "Asset Pipeline"
      },
      {
        "@id": "urn:ngm:class:generative-design-tool",
        "label": "Generative Design Tool"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      },
      {
        "@id": "urn:ngm:class:graphics-api",
        "label": "Graphics API"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      },
      {
        "@id": "urn:ngm:class:scene-design",
        "label": "Scene Design"
      },
      {
        "@id": "urn:ngm:class:3d-modelling",
        "label": "3D Modeling"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:authoring-tool:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:24d326ab34c4983b60ae8d87c2adb24c1e389c1cbbdeacd03fc2da8d029ea67a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Asset Pipeline]]",
      "resolved": "urn:visionflow:linked:asset-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Creation]]",
      "resolved": "urn:visionflow:linked:content-creation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Editor Interface]]",
      "resolved": "urn:visionflow:linked:editor-interface",
      "kind": "StubLink"
    },
    {
      "raw": "[[ETSI GR ARF 010]]",
      "resolved": "urn:visionflow:linked:etsi-gr-arf-010",
      "kind": "StubLink"
    },
    {
      "raw": "[[Interactive Experience Development]]",
      "resolved": "urn:visionflow:linked:interactive-experience-development",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Taxonomy]]",
      "resolved": "urn:visionflow:linked:msf-taxonomy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Preview System]]",
      "resolved": "urn:visionflow:linked:preview-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Scene Design]]",
      "resolved": "urn:visionflow:linked:scene-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[SIGGRAPH Pipeline WG]]",
      "resolved": "urn:visionflow:linked:siggraph-pipeline-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Modelling]]",
      "resolved": "urn:visionflow:owl:class:3-d-modeling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Compute Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:compute-infrastructure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputeLayer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Generative Design Tool]]",
      "resolved": "urn:visionflow:owl:class:generative-design-tool",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics API]]",
      "resolved": "urn:visionflow:owl:class:graphics-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[InteractionDomain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
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
  - Software application for creating or editing immersive content, including 3D models, environments, interactions, and multimedia assets for metaverse experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:AuthoringTool
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[CreativeMediaDomain]], [[InteractionDomain]]
  - implemented-in-layer:: [[ComputeLayer]]

- ### Relationships
  - bridges-to:: [[Computer Vision]] (ai)
  - has-part:: [[Editor Interface]], [[Asset Pipeline]], [[Preview System]], [[Generative Design Tool]]
  - requires:: [[Compute Infrastructure]], [[Graphics API]]
  - enables:: [[Content Creation]], [[3D Modelling]], [[Scene Design]], [[Interactive Experience Development]]

- ### Content
  Authoring Tool — content pending enrichment.

- ### Provenance
  - sources:: [[ETSI GR ARF 010]], [[MSF Taxonomy]], [[SIGGRAPH Pipeline WG]]
  - migration-date:: 2026-04-26T00:00:00Z
