public:: true

# Photogrammetry
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22b5ca98a11bb12ff919060add88a87684d2239032266802b12c7ff908c7b34c",
  "@type": "Page",
  "vc:slug": "photogrammetry",
  "title": "Photogrammetry",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-model-creation",
      "vc:label": "3D Model Creation"
    },
    {
      "@id": "urn:visionflow:linked:3-d-reconstruction-pipeline",
      "vc:label": "3D Reconstruction Pipeline"
    },
    {
      "@id": "urn:visionflow:linked:asset-digitization",
      "vc:label": "Asset Digitization"
    },
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:camera-models",
      "vc:label": "Camera Models"
    },
    {
      "@id": "urn:visionflow:linked:computational-resources",
      "vc:label": "Computational Resources"
    },
    {
      "@id": "urn:visionflow:linked:computer-vision-algorithms",
      "vc:label": "Computer Vision Algorithms"
    },
    {
      "@id": "urn:visionflow:linked:feature-detection",
      "vc:label": "Feature Detection"
    },
    {
      "@id": "urn:visionflow:linked:image-matching",
      "vc:label": "Image Matching"
    },
    {
      "@id": "urn:visionflow:linked:mesh-reconstruction",
      "vc:label": "Mesh Reconstruction"
    },
    {
      "@id": "urn:visionflow:linked:multi-view-geometry",
      "vc:label": "Multi-View Geometry"
    },
    {
      "@id": "urn:visionflow:linked:multiple-images",
      "vc:label": "Multiple Images"
    },
    {
      "@id": "urn:visionflow:linked:overlapping-coverage",
      "vc:label": "Overlapping Coverage"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud-generation",
      "vc:label": "Point Cloud Generation"
    },
    {
      "@id": "urn:visionflow:linked:reality-capture-domain",
      "vc:label": "RealityCaptureDomain"
    },
    {
      "@id": "urn:visionflow:linked:reality-capture-workflow",
      "vc:label": "Reality Capture Workflow"
    },
    {
      "@id": "urn:visionflow:linked:siemens-acm",
      "vc:label": "Siemens + ACM"
    },
    {
      "@id": "urn:visionflow:linked:structure-from-motion",
      "vc:label": "Structure from Motion"
    },
    {
      "@id": "urn:visionflow:linked:terrain-mapping",
      "vc:label": "Terrain Mapping"
    },
    {
      "@id": "urn:visionflow:linked:triangulation",
      "vc:label": "Triangulation"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "Application Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:camera",
      "vc:label": "Camera"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "CreativeMediaDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin-construction",
      "vc:label": "Digital Twin Construction"
    },
    {
      "@id": "urn:visionflow:owl:class:image-processing-software",
      "vc:label": "Image Processing Software"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-measurement",
      "vc:label": "Spatial Measurement"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20073"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Photogrammetry"
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
  "@id": "urn:ngm:class:photogrammetry",
  "@type": "Class",
  "label": "Photogrammetry",
  "definition": "A computational technique for reconstructing 3D geometry from overlapping photographic images through mathematical analysis of correspondences, camera poses, and geometric transformations to extract spatial information from 2D image data.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:camera-calibration",
        "label": "Camera Calibration"
      },
      {
        "@id": "urn:ngm:class:feature-detection",
        "label": "Feature Detection"
      },
      {
        "@id": "urn:ngm:class:image-matching",
        "label": "Image Matching"
      },
      {
        "@id": "urn:ngm:class:mesh-reconstruction",
        "label": "Mesh Reconstruction"
      },
      {
        "@id": "urn:ngm:class:point-cloud-generation",
        "label": "Point Cloud Generation"
      },
      {
        "@id": "urn:ngm:class:triangulation",
        "label": "Triangulation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:computational-resources",
        "label": "Computational Resources"
      },
      {
        "@id": "urn:ngm:class:multiple-images",
        "label": "Multiple Images"
      },
      {
        "@id": "urn:ngm:class:overlapping-coverage",
        "label": "Overlapping Coverage"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      },
      {
        "@id": "urn:ngm:class:image-processing-software",
        "label": "Image Processing Software"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:3-d-model-creation",
        "label": "3D Model Creation"
      },
      {
        "@id": "urn:ngm:class:asset-digitization",
        "label": "Asset Digitization"
      },
      {
        "@id": "urn:ngm:class:terrain-mapping",
        "label": "Terrain Mapping"
      },
      {
        "@id": "urn:ngm:class:digital-twin-construction",
        "label": "Digital Twin Construction"
      },
      {
        "@id": "urn:ngm:class:spatial-measurement",
        "label": "Spatial Measurement"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-reconstruction-pipeline",
        "label": "3D Reconstruction Pipeline"
      },
      {
        "@id": "urn:ngm:class:reality-capture-workflow",
        "label": "Reality Capture Workflow"
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
  "@id": "urn:visionflow:annotation:link-resolutions:photogrammetry:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:22b5ca98a11bb12ff919060add88a87684d2239032266802b12c7ff908c7b34c"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Model Creation]]",
      "resolved": "urn:visionflow:linked:3-d-model-creation",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Reconstruction Pipeline]]",
      "resolved": "urn:visionflow:linked:3-d-reconstruction-pipeline",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asset Digitization]]",
      "resolved": "urn:visionflow:linked:asset-digitization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera Calibration]]",
      "resolved": "urn:visionflow:linked:camera-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Camera Models]]",
      "resolved": "urn:visionflow:linked:camera-models",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computational Resources]]",
      "resolved": "urn:visionflow:linked:computational-resources",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision Algorithms]]",
      "resolved": "urn:visionflow:linked:computer-vision-algorithms",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feature Detection]]",
      "resolved": "urn:visionflow:linked:feature-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Image Matching]]",
      "resolved": "urn:visionflow:linked:image-matching",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mesh Reconstruction]]",
      "resolved": "urn:visionflow:linked:mesh-reconstruction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-View Geometry]]",
      "resolved": "urn:visionflow:linked:multi-view-geometry",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multiple Images]]",
      "resolved": "urn:visionflow:linked:multiple-images",
      "kind": "StubLink"
    },
    {
      "raw": "[[Overlapping Coverage]]",
      "resolved": "urn:visionflow:linked:overlapping-coverage",
      "kind": "StubLink"
    },
    {
      "raw": "[[Point Cloud Generation]]",
      "resolved": "urn:visionflow:linked:point-cloud-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[RealityCaptureDomain]]",
      "resolved": "urn:visionflow:linked:reality-capture-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reality Capture Workflow]]",
      "resolved": "urn:visionflow:linked:reality-capture-workflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[Siemens + ACM]]",
      "resolved": "urn:visionflow:linked:siemens-acm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Structure from Motion]]",
      "resolved": "urn:visionflow:linked:structure-from-motion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Terrain Mapping]]",
      "resolved": "urn:visionflow:linked:terrain-mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Triangulation]]",
      "resolved": "urn:visionflow:linked:triangulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Camera]]",
      "resolved": "urn:visionflow:owl:class:camera",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CreativeMediaDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin Construction]]",
      "resolved": "urn:visionflow:owl:class:digital-twin-construction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Image Processing Software]]",
      "resolved": "urn:visionflow:owl:class:image-processing-software",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Measurement]]",
      "resolved": "urn:visionflow:owl:class:spatial-measurement",
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
  - A computational technique for reconstructing 3D geometry from overlapping photographic images through mathematical analysis of correspondences, camera poses, and geometric transformations to extract spatial information from 2D image data.
- ### Semantic Classification
  - owl-class:: spatial-computing:Photogrammetry
  - owl-role:: Process
  - owl-inferred:: spatial-computing:VirtualProcess
  - belongs-to-domain:: [[CreativeMediaDomain]], [[RealityCaptureDomain]]
  - implemented-in-layer:: [[Application Layer]]
- ### Relationships
  - has-part:: [[Feature Detection]], [[Camera Calibration]], [[Image Matching]], [[Triangulation]], [[Point Cloud Generation]], [[Mesh Reconstruction]]
  - is-part-of:: [[3D Reconstruction Pipeline]], [[Reality Capture Workflow]]
  - requires:: [[Camera]], [[Multiple Images]], [[Overlapping Coverage]], [[Image Processing Software]], [[Computational Resources]]
  - enables:: [[3D Model Creation]], [[Digital Twin Construction]], [[Terrain Mapping]], [[Asset Digitization]], [[Spatial Measurement]]
  - depends-on:: [[Computer Vision Algorithms]], [[Structure from Motion]], [[Multi-View Geometry]], [[Camera Models]]
- ### Content
  Photogrammetry — content pending enrichment.
- ### Provenance
  - sources:: [[Siemens + ACM]]
  - migration-date:: 2026-04-26T00:00:00Z
