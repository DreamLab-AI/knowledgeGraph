public:: true

# Spatial Audio Scene Description
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a6a88c36de812d0fb797f60b0bd3cc5f446f00861d5f7e6a7d0c1d734f3fbd3",
  "@type": "Page",
  "vc:slug": "spatial-audio-scene-description",
  "title": "Spatial Audio Scene Description",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:3-d-coordinate-system",
      "vc:label": "3D Coordinate System"
    },
    {
      "@id": "urn:visionflow:linked:3-d-scene-graph",
      "vc:label": "3D Scene Graph"
    },
    {
      "@id": "urn:visionflow:linked:acoustic-properties",
      "vc:label": "Acoustic Properties"
    },
    {
      "@id": "urn:visionflow:linked:acoustic-realism",
      "vc:label": "Acoustic Realism"
    },
    {
      "@id": "urn:visionflow:linked:ambisonics-playback",
      "vc:label": "Ambisonics Playback"
    },
    {
      "@id": "urn:visionflow:linked:ambisonics-representation",
      "vc:label": "Ambisonics Representation"
    },
    {
      "@id": "urn:visionflow:linked:audio-codec",
      "vc:label": "Audio Codec"
    },
    {
      "@id": "urn:visionflow:linked:audio-object",
      "vc:label": "Audio Object"
    },
    {
      "@id": "urn:visionflow:linked:audio-streaming-protocol",
      "vc:label": "Audio Streaming Protocol"
    },
    {
      "@id": "urn:visionflow:linked:binaural-rendering",
      "vc:label": "Binaural Rendering"
    },
    {
      "@id": "urn:visionflow:linked:dynamic-audio-mixing",
      "vc:label": "Dynamic Audio Mixing"
    },
    {
      "@id": "urn:visionflow:linked:head-tracking-system",
      "vc:label": "Head Tracking System"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23090-23-mpeg-i-audio",
      "vc:label": "ISO/IEC 23090-23 (MPEG-I Audio)"
    },
    {
      "@id": "urn:visionflow:linked:listener-position",
      "vc:label": "Listener Position"
    },
    {
      "@id": "urn:visionflow:linked:object-based-audio",
      "vc:label": "Object-Based Audio"
    },
    {
      "@id": "urn:visionflow:linked:room-acoustics-model",
      "vc:label": "Room Acoustics Model"
    },
    {
      "@id": "urn:visionflow:linked:siggraph-audio-wg",
      "vc:label": "SIGGRAPH Audio WG"
    },
    {
      "@id": "urn:visionflow:linked:smpte-st-2128",
      "vc:label": "SMPTE ST 2128"
    },
    {
      "@id": "urn:visionflow:linked:sound-source-position",
      "vc:label": "Sound Source Position"
    },
    {
      "@id": "urn:visionflow:owl:class:compute-layer",
      "vc:label": "Compute Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-application",
      "vc:label": "Creative Media Domain"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "Data Layer"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-audio-system",
      "vc:label": "Immersive Audio System"
    },
    {
      "@id": "urn:visionflow:owl:class:sc-interaction",
      "vc:label": "Interaction Domain"
    },
    {
      "@id": "urn:visionflow:owl:class:rendering-engine",
      "vc:label": "Rendering Engine"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-audio-processor",
      "vc:label": "Spatial Audio Processor"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-metadata",
      "vc:label": "Spatial Metadata"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-environment-specification",
      "vc:label": "Virtual Environment Specification"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20115"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Audio Scene Description"
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
  "@id": "urn:ngm:class:spatial-audio-scene-description",
  "@type": "Class",
  "label": "Spatial Audio Scene Description",
  "definition": "A data model for encoding sound sources, listener positions, acoustic environments, and spatial audio metadata in three-dimensional space to enable immersive and realistic audio experiences in virtual environments.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:acoustic-properties",
        "label": "Acoustic Properties"
      },
      {
        "@id": "urn:ngm:class:ambisonics-representation",
        "label": "Ambisonics Representation"
      },
      {
        "@id": "urn:ngm:class:audio-object",
        "label": "Audio Object"
      },
      {
        "@id": "urn:ngm:class:listener-position",
        "label": "Listener Position"
      },
      {
        "@id": "urn:ngm:class:sound-source-position",
        "label": "Sound Source Position"
      },
      {
        "@id": "urn:ngm:class:spatial-metadata",
        "label": "Spatial Metadata"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:3-d-coordinate-system",
        "label": "3D Coordinate System"
      },
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:rendering-engine",
        "label": "Rendering Engine"
      },
      {
        "@id": "urn:ngm:class:spatial-audio-processor",
        "label": "Spatial Audio Processor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:acoustic-realism",
        "label": "Acoustic Realism"
      },
      {
        "@id": "urn:ngm:class:ambisonics-playback",
        "label": "Ambisonics Playback"
      },
      {
        "@id": "urn:ngm:class:binaural-rendering",
        "label": "Binaural Rendering"
      },
      {
        "@id": "urn:ngm:class:dynamic-audio-mixing",
        "label": "Dynamic Audio Mixing"
      },
      {
        "@id": "urn:ngm:class:object-based-audio",
        "label": "Object-Based Audio"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:3-d-scene-graph",
        "label": "3D Scene Graph"
      },
      {
        "@id": "urn:ngm:class:immersive-audio-system",
        "label": "Immersive Audio System"
      },
      {
        "@id": "urn:ngm:class:virtual-environment-specification",
        "label": "Virtual Environment Specification"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-audio-scene-description:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a6a88c36de812d0fb797f60b0bd3cc5f446f00861d5f7e6a7d0c1d734f3fbd3"
  },
  "vc:resolutions": [
    {
      "raw": "[[3D Coordinate System]]",
      "resolved": "urn:visionflow:linked:3-d-coordinate-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[3D Scene Graph]]",
      "resolved": "urn:visionflow:linked:3-d-scene-graph",
      "kind": "StubLink"
    },
    {
      "raw": "[[Acoustic Properties]]",
      "resolved": "urn:visionflow:linked:acoustic-properties",
      "kind": "StubLink"
    },
    {
      "raw": "[[Acoustic Realism]]",
      "resolved": "urn:visionflow:linked:acoustic-realism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ambisonics Playback]]",
      "resolved": "urn:visionflow:linked:ambisonics-playback",
      "kind": "StubLink"
    },
    {
      "raw": "[[Ambisonics Representation]]",
      "resolved": "urn:visionflow:linked:ambisonics-representation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audio Codec]]",
      "resolved": "urn:visionflow:linked:audio-codec",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audio Object]]",
      "resolved": "urn:visionflow:linked:audio-object",
      "kind": "StubLink"
    },
    {
      "raw": "[[Audio Streaming Protocol]]",
      "resolved": "urn:visionflow:linked:audio-streaming-protocol",
      "kind": "StubLink"
    },
    {
      "raw": "[[Binaural Rendering]]",
      "resolved": "urn:visionflow:linked:binaural-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dynamic Audio Mixing]]",
      "resolved": "urn:visionflow:linked:dynamic-audio-mixing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Head Tracking System]]",
      "resolved": "urn:visionflow:linked:head-tracking-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23090-23 (MPEG-I Audio)]]",
      "resolved": "urn:visionflow:linked:iso-iec-23090-23-mpeg-i-audio",
      "kind": "StubLink"
    },
    {
      "raw": "[[Listener Position]]",
      "resolved": "urn:visionflow:linked:listener-position",
      "kind": "StubLink"
    },
    {
      "raw": "[[Object-Based Audio]]",
      "resolved": "urn:visionflow:linked:object-based-audio",
      "kind": "StubLink"
    },
    {
      "raw": "[[Room Acoustics Model]]",
      "resolved": "urn:visionflow:linked:room-acoustics-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[SIGGRAPH Audio WG]]",
      "resolved": "urn:visionflow:linked:siggraph-audio-wg",
      "kind": "StubLink"
    },
    {
      "raw": "[[SMPTE ST 2128]]",
      "resolved": "urn:visionflow:linked:smpte-st-2128",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sound Source Position]]",
      "resolved": "urn:visionflow:linked:sound-source-position",
      "kind": "StubLink"
    },
    {
      "raw": "[[Compute Layer]]",
      "resolved": "urn:visionflow:owl:class:compute-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Creative Media Domain]]",
      "resolved": "urn:visionflow:owl:class:ai-application",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Layer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Audio System]]",
      "resolved": "urn:visionflow:owl:class:immersive-audio-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interaction Domain]]",
      "resolved": "urn:visionflow:owl:class:sc-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rendering Engine]]",
      "resolved": "urn:visionflow:owl:class:rendering-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Audio Processor]]",
      "resolved": "urn:visionflow:owl:class:spatial-audio-processor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Metadata]]",
      "resolved": "urn:visionflow:owl:class:spatial-metadata",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Environment Specification]]",
      "resolved": "urn:visionflow:owl:class:virtual-environment-specification",
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
  - A data model for encoding sound sources, listener positions, acoustic environments, and spatial audio metadata in three-dimensional space to enable immersive and realistic audio experiences in virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAudioSceneDescription
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[Creative Media Domain]], [[Interaction Domain]]
  - implemented-in-layer:: [[Compute Layer]], [[Data Layer]]

- ### Relationships
  - has-part:: [[Audio Object]], [[Sound Source Position]], [[Listener Position]], [[Acoustic Properties]], [[Spatial Metadata]], [[Ambisonics Representation]]
  - is-part-of:: [[Immersive Audio System]], [[3D Scene Graph]], [[Virtual Environment Specification]]
  - requires:: [[3D Coordinate System]], [[Audio Codec]], [[Rendering Engine]], [[Spatial Audio Processor]]
  - enables:: [[Binaural Rendering]], [[Object-Based Audio]], [[Ambisonics Playback]], [[Dynamic Audio Mixing]], [[Acoustic Realism]]
  - depends-on:: [[Head Tracking System]], [[Room Acoustics Model]], [[Audio Streaming Protocol]]

- ### Content
  Spatial Audio Scene Description — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC 23090-23 (MPEG-I Audio)]], [[SMPTE ST 2128]], [[SIGGRAPH Audio WG]]
  - migration-date:: 2026-04-26T00:00:00Z
