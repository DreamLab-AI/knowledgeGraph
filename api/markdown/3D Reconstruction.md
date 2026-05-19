schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#3dReconstruction
legacy_uri:: urn:visionclaw:concept:spatial-computing:3d-reconstruction
public:: true

# 3D Reconstruction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86",
  "@type": "Page",
  "vc:slug": "3-d-reconstruction",
  "title": "3D Reconstruction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:environmental-mapping",
      "vc:label": "Environmental Mapping"
    },
    {
      "@id": "urn:visionflow:linked:feature-matching",
      "vc:label": "Feature Matching"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud-generation",
      "vc:label": "Point Cloud Generation"
    },
    {
      "@id": "urn:visionflow:linked:real-world-digitisation",
      "vc:label": "Real-world Digitisation"
    },
    {
      "@id": "urn:visionflow:linked:structure-from-motion",
      "vc:label": "Structure-from-Motion"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:owl:class:photogrammetry",
      "vc:label": "Photogrammetry"
    },
    {
      "@id": "urn:visionflow:owl:class:point-cloud",
      "vc:label": "Point Cloud"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-9a4e9fa565fc"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#3dReconstruction"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9506"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T20:30:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "3D Reconstruction"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:3d-reconstruction"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:3d-reconstruction"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:3-d-reconstruction",
  "@type": "OntologyClass",
  "label": "3D Reconstruction",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "3D Reconstruction is the computational process of recovering three-dimensional geometric and structural information from multiple 2D images or sensor data (such as LiDAR or depth cameras) using techniques including [[Computer Vision]], photogrammetry, and Structure-from-Motion (SfM). This technology enables digital capture of real-world objects and environments for [[Digital Twin]] creation and immersive environment mapping.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:requires": [
    {
      "@id": "urn:visionflow:linked:camera-calibration",
      "vc:label": "Camera Calibration"
    },
    {
      "@id": "urn:visionflow:linked:feature-matching",
      "vc:label": "Feature Matching"
    },
    {
      "@id": "urn:visionflow:linked:image-processing",
      "vc:label": "Image Processing"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:environmental-mapping",
      "vc:label": "Environmental Mapping"
    },
    {
      "@id": "urn:visionflow:linked:point-cloud-generation",
      "vc:label": "Point Cloud Generation"
    },
    {
      "@id": "urn:visionflow:linked:real-world-digitisation",
      "vc:label": "Real-world Digitisation"
    }
  ],
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:owl:class:photogrammetry",
      "vc:label": "Photogrammetry"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:3-d-reconstruction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86"
  },
  "vc:resolutions": [
    {
      "raw": "[[Camera Calibration]]",
      "resolved": "urn:visionflow:linked:camera-calibration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Environmental Mapping]]",
      "resolved": "urn:visionflow:linked:environmental-mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[Feature Matching]]",
      "resolved": "urn:visionflow:linked:feature-matching",
      "kind": "StubLink"
    },
    {
      "raw": "[[Image Processing]]",
      "resolved": "urn:visionflow:linked:image-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Point Cloud Generation]]",
      "resolved": "urn:visionflow:linked:point-cloud-generation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-world Digitisation]]",
      "resolved": "urn:visionflow:linked:real-world-digitisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Structure-from-Motion]]",
      "resolved": "urn:visionflow:linked:structure-from-motion",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Photogrammetry]]",
      "resolved": "urn:visionflow:owl:class:photogrammetry",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Point Cloud]]",
      "resolved": "urn:visionflow:owl:class:point-cloud",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:45c99e53e3a503b2c170936a5b97d46f4c73c5007d0b6eb74d4a0e7a7513bd86@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - 3D Reconstruction is the computational process of recovering three-dimensional geometric and structural information from multiple 2D images or sensor data (such as LiDAR or depth cameras) using techniques including [[Computer Vision]], photogrammetry, and Structure-from-Motion (SfM). This technology enables digital capture of real-world objects and environments for [[Digital Twin]] creation and immersive environment mapping.

- ### Semantic Classification
  - owl-class:: spatial-computing:3DReconstruction
  - owl-role:: concept

- ### Relationships
  - is-subclass-of:: [[Computer Vision]]
  - bridges-to:: [[Computer Vision]], [[Photogrammetry]], [[Digital Twin]]
  - requires:: [[Image Processing]], [[Camera Calibration]], [[Feature Matching]]
  - enables:: [[Real-world Digitisation]], [[Environmental Mapping]], [[Point Cloud Generation]]

- ### Content

  ## Overview

  3D Reconstruction bridges the physical and digital worlds by algorithmically deriving 3D structure from 2D observations. Key methodologies include Structure-from-Motion (recovering both structure and camera motion from video), multi-view stereo (dense depth estimation), and sensor fusion combining multiple data streams.

  ## Primary Techniques
  - **Structure-from-Motion**: Extracting 3D geometry from overlapping photographs and calculating camera trajectories
  - **Multi-View Stereo (MVS)**: Dense depth estimation by analysing matching pixels across multiple images
  - **Photogrammetry**: Professional 3D capture using calibrated imaging workflows
  - **LiDAR Scanning**: Direct depth measurement using laser time-of-flight sensors
  - **Depth Sensors**: Real-time 3D acquisition via structured light or time-of-flight cameras

  ## Applications
  - **Heritage Digitisation**: Preserving cultural artefacts and archaeological sites
  - **Architectural Scanning**: Creating as-built models of buildings
  - **Industrial Inspection**: Quality control through precise dimensional analysis
  - **Real Estate**: Virtual property tours via captured environments

  #### Related Concepts
  - [[Computer Vision]], [[Photogrammetry]], [[Point Cloud]], [[Digital Twin]], [[Structure-from-Motion]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
