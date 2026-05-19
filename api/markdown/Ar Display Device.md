schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#ArDisplayDevice
legacy_uri:: urn:visionclaw:concept:spatial-computing:ar-display-device
public:: true

# Ar Display Device
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9d97c22fcb5899dd7ecfcce514acc3190c278910cf7420e25582ec1b44a8b7e9",
  "@type": "Page",
  "vc:slug": "ar-display-device",
  "title": "Ar Display Device",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:augmented-reality-experiences",
      "vc:label": "Augmented Reality Experiences"
    },
    {
      "@id": "urn:visionflow:linked:display-technology",
      "vc:label": "Display Technology"
    },
    {
      "@id": "urn:visionflow:linked:mixed-reality-interaction",
      "vc:label": "Mixed Reality Interaction"
    },
    {
      "@id": "urn:visionflow:linked:optical-systems",
      "vc:label": "Optical Systems"
    },
    {
      "@id": "urn:visionflow:linked:pose-tracking",
      "vc:label": "Pose Tracking"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:owl:class:display-hardware",
      "vc:label": "Display Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:spatial-computing",
      "vc:label": "Spatial Computing"
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
      "vc:value": "sha256-12-1184dcfafc62"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#ArDisplayDevice"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9769"
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
      "vc:value": "Ar Display Device"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:ar-display-device"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:ar-display-device"
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
    "@id": "urn:visionflow:page:9d97c22fcb5899dd7ecfcce514acc3190c278910cf7420e25582ec1b44a8b7e9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:ar-display-device",
  "@type": "Class",
  "label": "Ar Display Device",
  "definition": "AR Display Device encompasses hardware systems including smart glasses, headsets, and head-mounted displays that superimpose computer-generated imagery onto the user's view of the real world through optical technologies such as waveguides, birdbath optics, holographic displays, and metasurfaces.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:display-hardware",
      "label": "Display Hardware"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:display-technology",
        "label": "Display Technology"
      },
      {
        "@id": "urn:ngm:class:optical-systems",
        "label": "Optical Systems"
      },
      {
        "@id": "urn:ngm:class:pose-tracking",
        "label": "Pose Tracking"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:augmented-reality-experiences",
        "label": "Augmented Reality Experiences"
      },
      {
        "@id": "urn:ngm:class:mixed-reality-interaction",
        "label": "Mixed Reality Interaction"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ar-display-device:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9d97c22fcb5899dd7ecfcce514acc3190c278910cf7420e25582ec1b44a8b7e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Augmented Reality Experiences]]",
      "resolved": "urn:visionflow:linked:augmented-reality-experiences",
      "kind": "StubLink"
    },
    {
      "raw": "[[Display Technology]]",
      "resolved": "urn:visionflow:linked:display-technology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mixed Reality Interaction]]",
      "resolved": "urn:visionflow:linked:mixed-reality-interaction",
      "kind": "StubLink"
    },
    {
      "raw": "[[Optical Systems]]",
      "resolved": "urn:visionflow:linked:optical-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Pose Tracking]]",
      "resolved": "urn:visionflow:linked:pose-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Input]]",
      "resolved": "urn:visionflow:linked:sensor-input",
      "kind": "StubLink"
    },
    {
      "raw": "[[Display Hardware]]",
      "resolved": "urn:visionflow:owl:class:display-hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Spatial Computing]]",
      "resolved": "urn:visionflow:owl:class:spatial-computing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9d97c22fcb5899dd7ecfcce514acc3190c278910cf7420e25582ec1b44a8b7e9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AR Display Device encompasses hardware systems including smart glasses, headsets, and head-mounted displays that superimpose computer-generated imagery onto the user's view of the real world through optical technologies such as waveguides, birdbath optics, holographic displays, and metasurfaces.

- ### Semantic Classification
  - owl-class:: spatial-computing:ArDisplayDevice
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Display Hardware]]
  - requires:: [[Optical Systems]], [[Pose Tracking]], [[Display Technology]]
  - enables:: [[Augmented Reality Experiences]], [[Mixed Reality Interaction]], [[Spatial Computing]]
  - bridges-to:: [[Sensor Input]] (rb)

- ### Content

  ### Technical Details
  Key components include:
  - **Waveguide Displays**: Nanometer-scale patterns etched on lenses bouncing light to the eye
  - **Birdbath Optics**: Downward-positioned displays reflecting visuals near the eye with micro OLED
  - **Metasurfaces**: Nanophotonics bending light to enable holographic AR without bulky optics
  - **Pose Tracking**: Sensors determining device position for accurate digital overlay alignment

  ### 2024 Developments
  - **Meta Orion**: Largest field of view in smallest AR glasses form factor with transparent lenses
  - **Stanford Holographic AR**: Full-color 3D moving images in ordinary glasses form factor
  - **Snap Spectacles 5**: Fifth generation with digital graphics overlaid on physical world

  ### Market Outlook
  AR market expected to cross $97 billion by 2028, with AR glasses becoming commonplace within 5-10 years.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
