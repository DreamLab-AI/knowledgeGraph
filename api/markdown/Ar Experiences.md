schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ArExperiences
legacy_uri:: urn:visionclaw:concept:spatial-computing:ar-experiences
public:: true

# Ar Experiences
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d8d3bdc61f3d8c7e3a9ae010e7072b79e254d9c4621ee4e7a0bd12752750f58b",
  "@type": "Page",
  "vc:slug": "ar-experiences",
  "title": "Ar Experiences",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ar-display-devices",
      "vc:label": "AR Display Devices"
    },
    {
      "@id": "urn:visionflow:linked:contextual-information",
      "vc:label": "Contextual Information"
    },
    {
      "@id": "urn:visionflow:linked:enhanced-visualization",
      "vc:label": "Enhanced Visualization"
    },
    {
      "@id": "urn:visionflow:linked:immersive-technology-applications",
      "vc:label": "Immersive Technology Applications"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:interactive-learning",
      "vc:label": "Interactive Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-mapping",
      "vc:label": "Spatial Mapping"
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
      "vc:value": "sha256-12-edf218af0bce"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ArExperiences"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9770"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Ar Experiences"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:ar-experiences"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:ar-experiences"
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
    "@id": "urn:visionflow:page:d8d3bdc61f3d8c7e3a9ae010e7072b79e254d9c4621ee4e7a0bd12752750f58b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:ar-experiences",
  "@type": "Class",
  "label": "Ar Experiences",
  "definition": "AR Experiences are interactive augmented reality applications that overlay digital content onto the physical world in real-time through smartphones, tablets, or AR headsets, enabling enhanced visualization, contextual information display, and immersive interaction with virtual objects anchored in...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:immersive-technology-applications",
      "label": "Immersive Technology Applications"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ar-display-devices",
        "label": "AR Display Devices"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:contextual-information",
        "label": "Contextual Information"
      },
      {
        "@id": "urn:ngm:class:enhanced-visualization",
        "label": "Enhanced Visualization"
      },
      {
        "@id": "urn:ngm:class:interactive-learning",
        "label": "Interactive Learning"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:ar-experiences:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d8d3bdc61f3d8c7e3a9ae010e7072b79e254d9c4621ee4e7a0bd12752750f58b"
  },
  "vc:resolutions": [
    {
      "raw": "[[AR Display Devices]]",
      "resolved": "urn:visionflow:linked:ar-display-devices",
      "kind": "StubLink"
    },
    {
      "raw": "[[Contextual Information]]",
      "resolved": "urn:visionflow:linked:contextual-information",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enhanced Visualization]]",
      "resolved": "urn:visionflow:linked:enhanced-visualization",
      "kind": "StubLink"
    },
    {
      "raw": "[[Immersive Technology Applications]]",
      "resolved": "urn:visionflow:linked:immersive-technology-applications",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interactive Learning]]",
      "resolved": "urn:visionflow:owl:class:interactive-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Mapping]]",
      "resolved": "urn:visionflow:owl:class:spatial-mapping",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:d8d3bdc61f3d8c7e3a9ae010e7072b79e254d9c4621ee4e7a0bd12752750f58b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AR Experiences are interactive augmented reality applications that overlay digital content onto the physical world in real-time through smartphones, tablets, or AR headsets, enabling enhanced visualization, contextual information display, and immersive interaction with virtual objects anchored in real environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:ArExperiences
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Immersive Technology Applications]]
  - requires:: [[AR Display Devices]], [[Computer Vision]], [[Spatial Mapping]]
  - enables:: [[Enhanced Visualization]], [[Contextual Information]], [[Interactive Learning]]
  - bridges-to:: [[Sensor Input]] (rb)

- ### Content

  ### Technical Details
  Key components include:
  - **Environment Capture**: Cameras and sensors compiling real-world surrounding data
  - **Computer Vision**: AI analyzing captured data to understand physical space and position
  - **Object Recognition**: Identifying physical triggers like QR codes or image markers
  - **Content Overlay**: Rendering images and video onto real-world view via device screen or headset

  ### Experience Types
  - **Marker-Based AR**: Digital content triggered by physical markers (QR codes, images)
  - **Marker-less AR**: Using GPS, accelerometers, and cameras for spontaneous experiences
  - **Hand/Eye Tracking**: Natural gesture and gaze-based interaction (HoloLens 2)

  ### Market Context
  AR user penetration reached 81% in 2024, expected to rise to 83.3% by 2029.

  ### Industry Applications
  Manufacturing visualization, healthcare training, retail product preview, navigation, and Industry 4.0 interactive environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
