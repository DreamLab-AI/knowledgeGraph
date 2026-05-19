schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#HardwareResources
legacy_uri:: urn:visionclaw:concept:spatial-computing:hardware-resources
public:: true

# Hardware Resources
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:755c0cac59671cb871ebd772c92284c2558adf88c3f0612d35e8a89e36191508",
  "@type": "Page",
  "vc:slug": "hardware-resources",
  "title": "Hardware Resources",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:metaverse-access",
      "vc:label": "Metaverse Access"
    },
    {
      "@id": "urn:visionflow:owl:class:computing-infrastructure",
      "vc:label": "Computing Infrastructure"
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
      "vc:value": "sha256-12-5dd5dd0df489"
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
      "vc:value": "http://narrativegoldmine.com/spatial-computing#HardwareResources"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9915"
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
      "vc:value": "Hardware Resources"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:hardware-resources"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:hardware-resources"
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
    "@id": "urn:visionflow:page:755c0cac59671cb871ebd772c92284c2558adf88c3f0612d35e8a89e36191508@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:hardware-resources",
  "@type": "Class",
  "label": "Hardware Resources",
  "definition": "The physical computing infrastructure required for metaverse access and operation, encompassing VR/AR headsets, computing devices, display technologies, tracking sensors, and connectivity hardware that collectively enable immersive virtual experiences.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:computing-infrastructure",
      "label": "Computing Infrastructure"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:metaverse-access",
        "label": "Metaverse Access"
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
  "@id": "urn:visionflow:annotation:link-resolutions:hardware-resources:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:755c0cac59671cb871ebd772c92284c2558adf88c3f0612d35e8a89e36191508"
  },
  "vc:resolutions": [
    {
      "raw": "[[Metaverse Access]]",
      "resolved": "urn:visionflow:linked:metaverse-access",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computing Infrastructure]]",
      "resolved": "urn:visionflow:owl:class:computing-infrastructure",
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
    "@id": "urn:visionflow:page:755c0cac59671cb871ebd772c92284c2558adf88c3f0612d35e8a89e36191508@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The physical computing infrastructure required for metaverse access and operation, encompassing VR/AR headsets, computing devices, display technologies, tracking sensors, and connectivity hardware that collectively enable immersive virtual experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:HardwareResources
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Computing Infrastructure]]
  - enables:: [[Metaverse Access]]

- ### Content

  ## PC Requirements

  ### Minimum Specifications
  - GPU: Minimum 4GB VRAM
  - CPU: At least 3.5GHz processor
  - RAM: 16GB recommended
  - Storage: SSD for asset loading
  - Strong internet connection

  ### Recommended Configurations
  - Intel Core i5/i7 or AMD Ryzen 5 equivalent
  - High-speed USB ports for data/tracking
  - DisplayPort or HDMI for video
  - 5G or high-speed broadband connectivity

  ## VR Headset Categories

  ### PC-Tethered Headsets
  - Highest resolution textures
  - Most detailed environments
  - Stable framerates
  - Advanced physics simulations
  - Cable connection to high-performance PC

  ### Standalone Headsets
  - All-in-one mobile processor
  - Integrated battery and sensors
  - No external computer required
  - Most accessible entry point
  - Trade-off: Lower graphical fidelity

  ## 2024 Market Overview

  ### Shipment Statistics
  - Global AR/VR headset shipments: 9.6 million units
  - Year-over-year growth: 8.8-10%
  - Meta Platforms: 74.6% market share
  - AR & VR market revenue: USD 38.6 billion (2024)

  ### Major Products
  - Meta Quest 3: Pancake lenses, Snapdragon XR2 Gen 2
  - Apple Vision Pro: Spatial computing (February 2024)
  - HP Reverb G2: 2160x2160 per-eye resolution
  - Various standalone and PC-tethered options

  ## Technical Specifications

  ### Display Features
  - High resolution per-eye displays
  - Wide field of view
  - Low persistence screens
  - High refresh rates (90Hz+)
  - Improved ergonomics

  ### Sensor Arrays
  - Accelerometers
  - Gyroscopes
  - Magnetometers
  - Inside-out tracking cameras
  - Hand tracking sensors

  ## Connectivity Requirements

  ### Ports and Cables
  - USB 3.0+ for data transfer
  - DisplayPort 1.4 or HDMI 2.0
  - USB-C for modern headsets
  - Wireless options for some devices

  ### Network Requirements
  - Low-latency connections
  - High bandwidth for streaming
  - 5G support for mobile XR
  - Wi-Fi 6/6E for wireless PCVR

  ## Enterprise Integration

  ### Microsoft Office Integration
  - Office 365 on Meta Quest
  - Spatial computing workspace
  - Word, Excel, PowerPoint in VR
  - Free on all Quest models

  ### Graphics Demands
  - Current metaverse: Cartoon-style rendering
  - Lower hardware resource requirements
  - Photo-realistic demands increasing
  - Enterprise simulation needs higher specs

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
