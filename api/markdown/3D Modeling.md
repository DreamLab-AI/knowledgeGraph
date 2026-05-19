public:: true

# 3D Modeling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:80b7420df8cc6c901a243f9e2191cff2e4e81d2caafd791fac2d3c18629f359b",
  "@type": "Page",
  "vc:slug": "3-d-modeling",
  "title": "3D Modeling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:anatomical-knowledge",
      "vc:label": "Anatomical Knowledge"
    },
    {
      "@id": "urn:visionflow:linked:asset-creation",
      "vc:label": "Asset Creation"
    },
    {
      "@id": "urn:visionflow:linked:character-animation",
      "vc:label": "Character Animation"
    },
    {
      "@id": "urn:visionflow:linked:digital-art",
      "vc:label": "Digital Art"
    },
    {
      "@id": "urn:visionflow:linked:material-definition",
      "vc:label": "Material Definition"
    },
    {
      "@id": "urn:visionflow:linked:material-understanding",
      "vc:label": "Material Understanding"
    },
    {
      "@id": "urn:visionflow:linked:modelling-software",
      "vc:label": "Modelling Software"
    },
    {
      "@id": "urn:visionflow:linked:rigging",
      "vc:label": "Rigging"
    },
    {
      "@id": "urn:visionflow:linked:sculpting",
      "vc:label": "Sculpting"
    },
    {
      "@id": "urn:visionflow:linked:texturing",
      "vc:label": "Texturing"
    },
    {
      "@id": "urn:visionflow:linked:virtual-environment-design",
      "vc:label": "Virtual Environment Design"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-development",
      "vc:label": "3D Development"
    },
    {
      "@id": "urn:visionflow:owl:class:3-d-model",
      "vc:label": "3D Model"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9505"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "3D Modeling"
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
  "@id": "urn:ngm:class:3-d-modeling",
  "@type": "Class",
  "label": "3D Modeling",
  "definition": "3D Modeling is the artistic and technical discipline of creating three-dimensional digital forms using specialised software tools.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:digital-art",
      "label": "Digital Art"
    },
    {
      "@id": "urn:ngm:class:3-d-development",
      "label": "3D Development"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:anatomical-knowledge",
        "label": "Anatomical Knowledge"
      },
      {
        "@id": "urn:ngm:class:material-understanding",
        "label": "Material Understanding"
      },
      {
        "@id": "urn:ngm:class:modelling-software",
        "label": "Modelling Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:asset-creation",
        "label": "Asset Creation"
      },
      {
        "@id": "urn:ngm:class:character-animation",
        "label": "Character Animation"
      },
      {
        "@id": "urn:ngm:class:virtual-environment-design",
        "label": "Virtual Environment Design"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:3-d-modeling:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:80b7420df8cc6c901a243f9e2191cff2e4e81d2caafd791fac2d3c18629f359b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Anatomical Knowledge]]",
      "resolved": "urn:visionflow:linked:anatomical-knowledge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Creation]]",
      "resolved": "urn:visionflow:linked:asset-creation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Character Animation]]",
      "resolved": "urn:visionflow:linked:character-animation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Art]]",
      "resolved": "urn:visionflow:linked:digital-art",
      "kind": "StubLink"
    },
    {
      "raw": "[[Material Definition]]",
      "resolved": "urn:visionflow:linked:material-definition",
      "kind": "StubLink"
    },
    {
      "raw": "[[Material Understanding]]",
      "resolved": "urn:visionflow:linked:material-understanding",
      "kind": "StubLink"
    },
    {
      "raw": "[[Modelling Software]]",
      "resolved": "urn:visionflow:linked:modelling-software",
      "kind": "StubLink"
    },
    {
      "raw": "[[Rigging]]",
      "resolved": "urn:visionflow:linked:rigging",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sculpting]]",
      "resolved": "urn:visionflow:linked:sculpting",
      "kind": "StubLink"
    },
    {
      "raw": "[[Texturing]]",
      "resolved": "urn:visionflow:linked:texturing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Virtual Environment Design]]",
      "resolved": "urn:visionflow:linked:virtual-environment-design",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Development]]",
      "resolved": "urn:visionflow:owl:class:3-d-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[3D Model]]",
      "resolved": "urn:visionflow:owl:class:3-d-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
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
  - 3D Modeling is the artistic and technical discipline of creating three-dimensional digital forms using specialised software tools. It encompasses organic modelling (characters, creatures), hard-surface modelling (architecture, vehicles), texture development, and material definition, producing [[3D Model]]s suitable for animation, rendering, and real-time applications in games and immersive environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:3DModeling
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: [[Digital Art]], [[3D Development]]
  - bridges-to:: [[Computer Vision]], [[Sculpting]], [[Texturing]]
  - requires:: [[Modelling Software]], [[Anatomical Knowledge]], [[Material Understanding]]
  - enables:: [[Character Animation]], [[Asset Creation]], [[Virtual Environment Design]]

- ### Content

  ## Overview

  3D Modeling transforms concept art into interactive digital geometry. Artists use software like Blender, Maya, or ZBrush to sculpt, block out forms, define detail, and prepare assets for animation and rendering pipelines.

  ## Modelling Approaches
  - **Polygonal Modeling**: Creating shapes from vertices and faces for games and real-time graphics
  - **Digital Sculpting**: Using brushes to add fine detail similar to clay sculpting
  - **Procedural Modeling**: Algorithmic generation using node-based systems
  - **CAD Modelling**: Precision-based creation for architectural and technical visualisation

  ## Workflow Stages
  1. Concept and planning from visual references
  2. Rough blocking establishing proportions and silhouette
  3. Detail sculpting and refinement
  4. Topology optimisation for animation capability
  5. Unwrapping for texture application

  #### Related Concepts
  - [[3D Model]], [[Sculpting]], [[Texturing]], [[Rigging]], [[Material Definition]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
