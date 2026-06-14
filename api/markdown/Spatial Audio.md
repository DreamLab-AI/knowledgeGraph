public:: true
alias:: SpatialAudio

# Spatial Audio
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd2e5ef1f1bb719b2f158bc8267a21bb5f471765f9c1d7fe7cbe905664ef8c72",
  "@type": "Page",
  "vc:slug": "spatial-audio",
  "title": "Spatial Audio",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:audio-technology",
      "vc:label": "Audio Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:immersive-experiences",
      "vc:label": "Immersive Experiences"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10054"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Spatial Audio"
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
  "@id": "urn:ngm:class:spatial-audio",
  "@type": "Class",
  "label": "Spatial Audio",
  "definition": "Three-dimensional sound technology that uses head-related transfer functions (HRTF) and object-based mixing to position audio sources in 3D space around the listener, creating immersive auditory experiences that replicate natural sound perception.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": {
    "@id": "urn:ngm:class:audio-technology",
    "label": "Audio Technology"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:head-related-transfer-function",
        "label": "Head-Related Transfer Function"
      },
      {
        "@id": "urn:ngm:class:binaural-audio",
        "label": "Binaural Audio"
      },
      {
        "@id": "urn:ngm:class:ambisonics",
        "label": "Ambisonics"
      },
      {
        "@id": "urn:ngm:class:object-based-audio",
        "label": "Object-Based Audio"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:immersive-media",
        "label": "Immersive Media"
      },
      {
        "@id": "urn:ngm:class:extended-reality",
        "label": "Extended Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:psychoacoustics",
        "label": "Psychoacoustics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experiences",
        "label": "Immersive Experiences"
      },
      {
        "@id": "urn:ngm:class:virtual-presence",
        "label": "Virtual Presence"
      },
      {
        "@id": "urn:ngm:class:audio-augmented-reality",
        "label": "Audio Augmented Reality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:audio-codec",
        "label": "Audio Codec"
      },
      {
        "@id": "urn:ngm:class:speaker-system",
        "label": "Speaker System"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dolby-atmos",
        "label": "Dolby Atmos"
      },
      {
        "@id": "urn:ngm:class:dts-x",
        "label": "DTS:X"
      },
      {
        "@id": "urn:ngm:class:mpeg-h-audio",
        "label": "MPEG-H Audio"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:room-acoustics-modelling",
        "label": "Room Acoustics Modelling"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:gaming",
        "label": "gaming"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:3gpp",
        "label": "3GPP"
      },
      {
        "@id": "urn:ngm:class:mpeg",
        "label": "MPEG"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:stereo-audio",
        "label": "Stereo Audio"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:metaverse",
        "label": "Metaverse"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:surround-sound",
        "label": "Surround Sound"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:3d-audio",
      "label": "3D Audio"
    },
    {
      "@id": "urn:ngm:class:immersive-audio",
      "label": "Immersive Audio"
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
  "@id": "urn:visionflow:annotation:link-resolutions:spatial-audio:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd2e5ef1f1bb719b2f158bc8267a21bb5f471765f9c1d7fe7cbe905664ef8c72"
  },
  "vc:resolutions": [
    {
      "raw": "[[Audio Technology]]",
      "resolved": "urn:visionflow:owl:class:audio-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Immersive Experiences]]",
      "resolved": "urn:visionflow:owl:class:immersive-experiences",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - Three-dimensional sound technology that uses head-related transfer functions (HRTF) and object-based mixing to position audio sources in 3D space around the listener, creating immersive auditory experiences that replicate natural sound perception.

- ### Semantic Classification
  - owl-class:: spatial-computing:SpatialAudio
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Audio Technology]]
  - enables:: [[Immersive Experiences]]

- ### Content

  - #### Formats and Standards
		- Dolby Atmos for cinema and music
		- DTS:X for surround sound
		- Sony 360 Reality Audio
		- MPEG-H audio standard
		- IVAS codec launched June 2024 by 3GPP
  - #### Applications
		- Music production with 3D instrument placement
		- Film and cinema immersive sound design
		- Gaming for enemy location and atmosphere
		- Virtual reality presence enhancement
		- Integration with Logic Pro and Ableton Live

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
