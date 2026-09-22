public:: true

# Infrared Led Illuminator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:017c7f1c76ec1e3c3c686b0a14e5a39cb472f5cb0e118c5561b1b7954f95b79f",
  "@type": "Page",
  "vc:slug": "infrared-led-illuminator",
  "title": "Infrared Led Illuminator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hand-tracking-enhancement",
      "vc:label": "Hand Tracking Enhancement"
    },
    {
      "@id": "urn:visionflow:owl:class:infrared-illuminator",
      "vc:label": "Infrared Illuminator"
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
      "vc:value": "MV-9930"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Infrared Led Illuminator"
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
  "@id": "urn:ngm:class:infrared-led-illuminator",
  "@type": "Class",
  "label": "Infrared Led Illuminator",
  "definition": "LED-based infrared light sources integrated into or used alongside VR/AR headsets to provide illumination for tracking systems, featuring compact form factors, low power consumption, and wavelengths optimised for camera sensor detection.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-interaction",
      "label": "Interaction Technology"
    },
    {
      "@id": "urn:ngm:class:infrared-illuminator",
      "label": "Infrared Illuminator"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:hand-tracking-enhancement",
        "label": "Hand Tracking Enhancement"
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
  "@id": "urn:visionflow:annotation:link-resolutions:infrared-led-illuminator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:017c7f1c76ec1e3c3c686b0a14e5a39cb472f5cb0e118c5561b1b7954f95b79f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hand Tracking Enhancement]]",
      "resolved": "urn:visionflow:linked:hand-tracking-enhancement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Infrared Illuminator]]",
      "resolved": "urn:visionflow:owl:class:infrared-illuminator",
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
  - LED-based infrared light sources integrated into or used alongside VR/AR headsets to provide illumination for tracking systems, featuring compact form factors, low power consumption, and wavelengths optimised for camera sensor detection.

- ### Semantic Classification
  - owl-class:: spatial-computing:InfraredLedIlluminator
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Infrared Illuminator]]
  - enables:: [[Hand Tracking Enhancement]]

- ### Content

  ## XR Headset Integration

  ### Built-In Hardware
  - Apple Vision Pro: 2 IR illuminators
  - Meta Quest 3S: 2 IR illuminators
  - Six monochromatic IR-sensitive cameras
  - Boost hand tracking in low light
  - Integrated system design

  ### Power Considerations
  - Active IR illumination power expensive
  - Optimised systems: one LED active at time
  - Mean power draw: 0.9W for illumination
  - Meta Quest 3 total draw: ~8.6W
  - Battery life impact management

  ## Consumer Accessories

  ### PDClnyck Upgraded IR Light
  - Quest 3s, Quest 3, Quest 2 compatible
  - Quest and PSVR2 support
  - Desktop IR fill illuminator
  - Enhanced hand tracking
  - Improved handle sensitivity

  ### Orzero IR Illuminator
  - Quest 3 compatible
  - Quest, Quest 2, PSVR2 support
  - No-light disturbance design
  - Increased tracking sensitivity
  - Power adapter included

  ## Technical Specifications

  ### Wavelength Options
  - 850nm semi-covert operation
  - 940nm fully covert operation
  - Matches sensor spectral sensitivity
  - LED vs lamp style devices
  - Infrared-sensitive camera optimised

  ### Research Applications
  - Touch detection on surfaces
  - AR glasses corner integration
  - Ray-Ban Meta AI Glasses potential
  - Software update enabled features
  - Single camera + LED configurations

  ## Future Developments

  ### Commercial Systems
  - Power optimisation advances
  - Smaller form factor LEDs
  - Higher efficiency components
  - Integrated headset designs
  - Extended battery operation

  ### Advanced Touch Detection
  - Ad-hoc surface interaction
  - Shadow casting techniques
  - Worn infrared devices
  - Segmentation algorithms
  - XR headset hardware leverage

  ## Product Categories

  ### Desktop Illuminators
  - Room-wide coverage
  - Multiple power options
  - Adjustable brightness
  - Mounting flexibility
  - Wired or battery powered

  ### Headset-Mounted
  - Minimal weight addition
  - Direct illumination
  - Portable operation
  - Battery integrated
  - USB-C charging

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
