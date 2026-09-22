public:: true

# Infrared Illuminator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b280446456eca6be1ce52efdd88503608173fd401c6b5d43ccc0963addea690f",
  "@type": "Page",
  "vc:slug": "infrared-illuminator",
  "title": "Infrared Illuminator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:dark-environment-vr",
      "vc:label": "Dark Environment VR"
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
      "vc:value": "MV-9929"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Infrared Illuminator"
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
  "@id": "urn:ngm:class:infrared-illuminator",
  "@type": "Class",
  "label": "Infrared Illuminator",
  "definition": "Light-emitting devices that project infrared wavelengths to enable VR/AR tracking sensors to function in low-light or dark environments, enhancing hand tracking accuracy, controller detection, and spatial awareness for immersive experiences.",
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
  "relations": {},
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
  "@id": "urn:visionflow:annotation:link-resolutions:infrared-illuminator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b280446456eca6be1ce52efdd88503608173fd401c6b5d43ccc0963addea690f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Dark Environment VR]]",
      "resolved": "urn:visionflow:linked:dark-environment-vr",
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
  - Light-emitting devices that project infrared wavelengths to enable VR/AR tracking sensors to function in low-light or dark environments, enhancing hand tracking accuracy, controller detection, and spatial awareness for immersive experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:InfraredIlluminator
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Tracking Hardware]]
  - enables:: [[Dark Environment VR]]

- ### Content

  ## Technology Overview

  ### Purpose
  - Provides illumination for tracking sensors
  - Enables VR in low-light conditions
  - Improves hand tracking consistency
  - Enhances controller sensitivity
  - Expands play area capabilities

  ### How IR Technology Works
  - Infrared light invisible to human eye
  - VR sensors detect IR wavelengths
  - Illuminates tracking markers and hands
  - Enables accurate movement detection
  - 850nm or 940nm wavelength options

  ## Consumer Products

  ### ZyberVR 3W U-Shaped IR Light
  - Two brightness levels available
  - 1.5W for 210-430 ft² rooms
  - 3W for 430-540 ft² rooms
  - Compatible with Quest 3, Quest 2
  - Pico 4 and other headsets supported

  ### KKCOBVR I2 IR Illuminator
  - Weighs only 6 grams
  - 120° field of view coverage
  - Non-destructive contact design
  - Quest 3/3s dedicated adapter
  - Minimal weight balance impact

  ### NVNV VR IR Light
  - 120° field of view
  - Independent power source
  - 2,000mAh battery capacity
  - Type-C charging port
  - 4 hours operation per charge

  ## Apple Vision Pro Integration

  ### Vrvana Technology Heritage
  - IR illuminators built into device
  - Infrared cameras for spatial tracking
  - Hand tracking enhancement
  - Optic ID iris scanner basis
  - LED-based eye tracking system

  ## Key Benefits

  ### Tracking Enhancement
  - Accurate movement translation
  - Smoother hand tracking
  - Consistent gesture recognition
  - Reduced tracking glitches
  - Dark environment compatibility

  ### Play Area Expansion
  - Clear object visibility in dark
  - Larger play area enablement
  - No room lighting dependency
  - Flexible gaming environments
  - Night-time VR capability

  ## Technical Specifications

  ### Wavelength Options
  - 850nm semi-covert IR
  - 940nm fully covert IR
  - Matches sensor spectral sensitivity
  - Invisible to naked eye
  - Camera sensor optimised

  ### Coverage Considerations
  - Field of view angles
  - Room size compatibility
  - Power output requirements
  - Mounting options available
  - Battery vs wired operation

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
