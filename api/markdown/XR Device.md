schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#XRDevice
legacy_uri:: urn:visionclaw:concept:spatial-computing:xr-device
public:: true

# XR Device
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5",
  "@type": "Page",
  "vc:slug": "xr-device",
  "title": "XR Device",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:xr-hardware",
      "vc:label": "XR Hardware"
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
      "vc:value": "sha256-12-c29021a59c72"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#XRDevice"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10169"
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
      "vc:value": "XR Device"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:xr-device"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:xr-device"
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
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:xr-device",
  "@type": "OntologyClass",
  "label": "XR Device",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:xr-hardware",
      "vc:label": "XR Hardware"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "active",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Hardware equipment designed to create or enhance extended reality experiences, encompassing virtual reality headsets, augmented reality glasses, mixed reality displays, haptic feedback systems, and motion tracking sensors that enable immersive interaction with digital content.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:xr-device:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5"
  },
  "vc:resolutions": [
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[XR Hardware]]",
      "resolved": "urn:visionflow:owl:class:xr-hardware",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:99bb71f66007ec69819e3e9d86ac5320e673778a6aef2318aa4264d65d5f66b5@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Hardware equipment designed to create or enhance extended reality experiences, encompassing virtual reality headsets, augmented reality glasses, mixed reality displays, haptic feedback systems, and motion tracking sensors that enable immersive interaction with digital content.

- ### Semantic Classification
  - owl-class:: spatial-computing:XrDevice
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[XR Hardware]]

- ### Content

  - ## Overview
  - XR devices span the reality-virtuality continuum from fully immersive VR headsets to see-through AR glasses. XR headset shipments increased by 3.9 million units in 2024 with high double-digit year-over-year growth. Meta Quest holds 64% market share, Apple Vision Pro captured 16% in Q1 2024, and PICO has 7%. The market includes consumer entertainment, enterprise training, and industrial applications.
  - ## Technical Details
  - ### Device Categories
		- **VR Headsets**: Fully immersive displays (Meta Quest 3, PlayStation VR2)
		- **AR Glasses**: See-through displays overlaying digital content
		- **MR Headsets**: Spatial computing with passthrough (Apple Vision Pro)
		- **Haptic Devices**: Controllers, gloves, and body suits
  - ### Key Specifications
		- **Display Resolution**: Up to 4K per eye (Vision Pro)
		- **Refresh Rate**: 90-120Hz for comfort
		- **Field of View**: 90-120 degrees typical
		- **Tracking**: 6DoF inside-out or external sensors
  - ### Major Platforms (2024)
		- **Meta Quest 3**: $499, Snapdragon XR2 Gen 2, mixed reality
		- **Meta Quest 3S**: $299, entry-level mixed reality
		- **Apple Vision Pro**: $3,499, M2+R1 chips, micro-OLED displays
		- **PSVR2**: PlayStation 5 tethered VR system
  - ## Applications
  - Consumer VR gaming and entertainment
  - Enterprise training and simulation
  - Metaverse access and social presence
  - Industrial AR maintenance guidance
  - Medical and therapeutic applications

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
