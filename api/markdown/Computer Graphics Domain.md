public:: true

# Computer Graphics Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c20523921f51b22d08c6cccadd0ee044bb7e4d1d43037eba61d0c9c38dca991",
  "@type": "Page",
  "vc:slug": "computer-graphics-domain",
  "title": "Computer Graphics Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:rendering",
      "vc:label": "Rendering"
    },
    {
      "@id": "urn:visionflow:linked:geometric-modelling",
      "vc:label": "Geometric Modelling"
    },
    {
      "@id": "urn:visionflow:linked:animation",
      "vc:label": "Animation"
    },
    {
      "@id": "urn:visionflow:linked:shading",
      "vc:label": "Shading"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:linear-algebra",
      "vc:label": "Linear Algebra"
    },
    {
      "@id": "urn:visionflow:linked:geometry",
      "vc:label": "Geometry"
    },
    {
      "@id": "urn:visionflow:linked:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:linked:visualisation",
      "vc:label": "Visualisation"
    },
    {
      "@id": "urn:visionflow:linked:virtual-environments",
      "vc:label": "Virtual Environments"
    },
    {
      "@id": "urn:visionflow:linked:digital-content-creation",
      "vc:label": "Digital Content Creation"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-domain",
      "vc:label": "Computer Vision Domain"
    },
    {
      "@id": "urn:visionflow:linked:creative-media-domain",
      "vc:label": "Creative Media Domain"
    },
    {
      "@id": "urn:visionflow:linked:metaverse-domain",
      "vc:label": "Metaverse Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Computer Graphics Domain"
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
  "@id": "urn:ngm:class:computer-graphics-domain",
  "@type": "Class",
  "label": "Computer Graphics Domain",
  "definition": "The Computer Graphics Domain covers the synthesis and manipulation of visual content through computation. Its scope includes rendering, geometric modelling, animation and real-time visualisation. It is a top-level subject classification concerned with the generation of imagery. The boundary is the inverse of computer vision, since it produces images from models rather than inferring models from images.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:rendering",
        "label": "Rendering"
      },
      {
        "@id": "urn:ngm:class:geometric-modelling",
        "label": "Geometric Modelling"
      },
      {
        "@id": "urn:ngm:class:animation",
        "label": "Animation"
      },
      {
        "@id": "urn:ngm:class:shading",
        "label": "Shading"
      },
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:geometry",
        "label": "Geometry"
      },
      {
        "@id": "urn:ngm:class:compute-layer",
        "label": "Compute Layer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:visualisation",
        "label": "Visualisation"
      },
      {
        "@id": "urn:ngm:class:virtual-environment",
        "label": "Virtual Environments"
      },
      {
        "@id": "urn:ngm:class:digital-content-creation",
        "label": "Digital Content Creation"
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
  "@id": "urn:visionflow:annotation:link-resolutions:computer-graphics-domain:9e4791cb4154",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c20523921f51b22d08c6cccadd0ee044bb7e4d1d43037eba61d0c9c38dca991"
  },
  "vc:resolutions": [
    {
      "raw": "[[Rendering]]",
      "resolved": "urn:visionflow:linked:rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geometric Modelling]]",
      "resolved": "urn:visionflow:linked:geometric-modelling",
      "kind": "StubLink"
    },
    {
      "raw": "[[Animation]]",
      "resolved": "urn:visionflow:linked:animation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shading]]",
      "resolved": "urn:visionflow:linked:shading",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linear Algebra]]",
      "resolved": "urn:visionflow:linked:linear-algebra",
      "kind": "StubLink"
    },
    {
      "raw": "[[Geometry]]",
      "resolved": "urn:visionflow:linked:geometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:linked:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Visualisation]]",
      "resolved": "urn:visionflow:linked:visualisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Environments]]",
      "resolved": "urn:visionflow:linked:virtual-environments",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Content Creation]]",
      "resolved": "urn:visionflow:linked:digital-content-creation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision Domain]]",
      "resolved": "urn:visionflow:linked:computer-vision-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creative Media Domain]]",
      "resolved": "urn:visionflow:linked:creative-media-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Domain]]",
      "resolved": "urn:visionflow:linked:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
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
  - The Computer Graphics Domain covers the synthesis and manipulation of visual content through computation. Its scope includes rendering, geometric modelling, animation and real-time visualisation. It is a top-level subject classification concerned with the generation of imagery. The boundary is the inverse of computer vision, since it produces images from models rather than inferring models from images.

- ### Semantic Classification
  - owl-class:: cg:ComputerGraphicsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Computer Vision Domain]], [[Creative Media Domain]], [[Metaverse Domain]]
  - has-part:: [[Rendering]], [[Geometric Modelling]], [[Animation]], [[Shading]], [[Real-Time Rendering]]
  - requires:: [[Linear Algebra]], [[Geometry]], [[Compute Layer]]
  - enables:: [[Visualisation]], [[Virtual Environments]], [[Digital Content Creation]]

- ### Content
  - The Computer Graphics Domain concerns the computational production of images and visual scenes from geometric and material descriptions. Its scope spans rendering algorithms that simulate light transport, geometric modelling of shapes, animation of motion over time and the optimisations that make rendering interactive. The boundary is synthesis; the analysis of existing imagery belongs to the Computer Vision Domain.
  - Member concepts include Rendering, Geometric Modelling, Animation, Shading and Real-Time Rendering. These depend on linear algebra for transforms and projections, geometry for surface representation and the Compute Layer for the parallel computation that rendering demands.
  - The domain bridges to the Computer Vision Domain through shared geometric and photometric models, to the Creative Media Domain for content production, and to the Metaverse Domain for immersive environments. It enables visualisation, virtual environments and digital content creation.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
