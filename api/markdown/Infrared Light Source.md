public:: true

# Infrared Light Source
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:130773aa1a85b926eaeaa93cf51cc4b93e0f149d01f5489ae4f91621a9613166",
  "@type": "Page",
  "vc:slug": "infrared-light-source",
  "title": "Infrared Light Source",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:foveated-rendering",
      "vc:label": "Foveated Rendering"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:tracking-hardware",
      "vc:label": "Tracking Hardware"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9931"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Infrared Light Source"
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
  "@id": "urn:ngm:class:infrared-light-source",
  "@type": "Class",
  "label": "Infrared Light Source",
  "definition": "Emission devices providing infrared wavelength light for VR/AR tracking applications, encompassing LEDs, illuminators, and integrated headset components that enable eye tracking, position detection, and hand gesture recognition in extended reality systems.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    },
    {
      "@id": "urn:ngm:class:tracking-hardware",
      "label": "Tracking Hardware"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:foveated-rendering",
        "label": "Foveated Rendering"
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
  "@id": "urn:visionflow:annotation:link-resolutions:infrared-light-source:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:130773aa1a85b926eaeaa93cf51cc4b93e0f149d01f5489ae4f91621a9613166"
  },
  "vc:resolutions": [
    {
      "raw": "[[Foveated Rendering]]",
      "resolved": "urn:visionflow:linked:foveated-rendering",
      "kind": "StubLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tracking Hardware]]",
      "resolved": "urn:visionflow:owl:class:tracking-hardware",
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
  - Emission devices providing infrared wavelength light for VR/AR tracking applications, encompassing LEDs, illuminators, and integrated headset components that enable eye tracking, position detection, and hand gesture recognition in extended reality systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:InfraredLightSource
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Tracking Hardware]]
  - enables:: [[Foveated Rendering]]

- ### Content

  ## Eye Tracking Technology

  ### Infrared LED Requirements
  - Wavelengths around 850nm targeted
  - Multiple LEDs illuminate user eyes
  - Light reflection captured by sensors
  - Pupil position computation
  - Gaze direction determination

  ### Component Miniaturisation
  - Osram Firefly dimensions
  - 1.0 x 0.325 x 0.55 millimetres
  - Fits around eyepieces
  - Glasses-compatible form factor
  - Compact headset integration

  ## ams OSRAM FIREFLY (2025)

  ### New Generation IREDs
  - SFH 4030B model
  - SFH 4060B model
  - New standards for AR/VR
  - Compact and energy-efficient
  - Biometric feature support

  ### Industry Drivers
  - Lighter headset demand
  - Wireless operation priority
  - Eye tracking standardisation
  - Intuitive interface enablement
  - Advanced analytics capability

  ## Foveated Rendering Benefits

  ### Computing Efficiency
  - Significantly reduced GPU demands
  - Lower graphic card requirements
  - User gaze point tracking
  - High resolution in direct vision
  - Lower resolution in periphery

  ### Technology Implementation
  - Point of gaze information
  - Dynamic resolution adjustment
  - Real-time rendering optimisation
  - Extended battery life benefit
  - Improved thermal management

  ## Position Tracking Systems

  ### Osram SFH 4253 TOPLEDs
  - Multiple LEDs on headset
  - IR light dot pattern creation
  - Camera registration and tracking
  - User movement determination
  - 850nm emission wavelength

  ### Spectral Sensitivity
  - Matches photo sensor sensitivity
  - Optimised detection accuracy
  - Consistent tracking performance
  - Environmental interference reduction
  - Camera compatibility assured

  ## Consumer Applications

  ### VR Headset Enhancement
  - Quest 3, Quest 2, Quest support
  - Vision Pro compatibility
  - PSVR2 integration
  - Hand/body tracking elevation
  - Tracking glitch elimination

  ### Environment Adaptation
  - Dimly-lit environment operation
  - Dark room VR capability
  - Tracking precision enhancement
  - Play area flexibility
  - Night-time gaming support

  ## Research Applications

  ### Large-Scale Environments
  - CAVE immersive systems
  - User head position tracking
  - Retro-reflective marker arrays
  - 3D structure tracking
  - Real-time 25Hz operation

  ### 6DoF Tracking
  - Six degrees of freedom
  - Position and orientation
  - AR/VR environment support
  - Research-grade accuracy
  - Multi-marker capability

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
