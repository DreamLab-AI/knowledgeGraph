schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SpatialAudio
legacy_uri:: urn:visionclaw:concept:spatial-computing:spatial-audio
public:: true

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
      "vc:value": "sha256-12-5853c2c9f2ab"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SpatialAudio"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10054"
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
      "vc:value": "Spatial Audio"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-audio"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:spatial-audio"
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
    "@id": "urn:visionflow:page:dd2e5ef1f1bb719b2f158bc8267a21bb5f471765f9c1d7fe7cbe905664ef8c72@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "subClassOf": [
    {
      "@id": "urn:ngm:class:audio-technology",
      "label": "Audio Technology"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:immersive-experiences",
        "label": "Immersive Experiences"
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:dd2e5ef1f1bb719b2f158bc8267a21bb5f471765f9c1d7fe7cbe905664ef8c72@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
