public:: true

# ADAS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9",
  "@type": "Page",
  "vc:slug": "adas",
  "title": "ADAS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-26262",
      "vc:label": "ISO 26262"
    },
    {
      "@id": "urn:visionflow:linked:sae-j3016",
      "vc:label": "SAE J3016"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-vehicle",
      "vc:label": "Autonomous Vehicle"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:perception-system",
      "vc:label": "Perception System"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "Sensor Fusion"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0348"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ADAS"
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
  "@id": "urn:ngm:class:adas",
  "@type": "Class",
  "label": "ADAS",
  "definition": "Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS operates at SAE Level 1–2 automation, augmenting rather than replacing the driver, and relies on sensor fusion across cameras, radar, and ultrasonic systems to perceive the vehicle's environment.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:risk",
        "label": "Risk"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:adas:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3cdb5aed544443d8300ee00e1cc07da27cef70df54c460c4e74ec55513d300f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 26262]]",
      "resolved": "urn:visionflow:linked:iso-26262",
      "kind": "StubLink"
    },
    {
      "raw": "[[SAE J3016]]",
      "resolved": "urn:visionflow:linked:sae-j3016",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Vehicle]]",
      "resolved": "urn:visionflow:owl:class:autonomous-vehicle",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:owl:class:perception-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
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
  - Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS represents SAE Level 1-2 automation, providing driver support whilst requiring continuous driver supervision and intervention capability.

- ### Semantic Classification
  - owl-class:: robotics:ADAS
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **requires** [[Sensor Fusion]] — multi-sensor data fusion is essential for ADAS perception
  - **requires** [[Perception System]] — environment understanding drives all assistance functions
  - **uses** [[Computer Vision]] — camera-based lane, sign, and obstacle detection
  - **uses** [[Camera]] — primary imaging sensor for ADAS
  - **uses** [[Lidar]] — depth sensing for obstacle detection in advanced variants
  - **contrastsWith** [[Autonomous Vehicle]] — ADAS augments the driver; AV replaces the driver
  - **relatedTo** [[Risk]] — ADAS directly addresses collision and operational risk
  - bridges-to:: [[Autonomous Robot]]

- ### Content
  - Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS represents SAE Level 1-2 automation, providing driver support whilst requiring continuous driver supervision and intervention capability.

  ## Core Characteristics

  - **Driver Assistance**: Augments rather than replaces driver
  - **Safety Features**: Collision avoidance and mitigation
  - **Sensor-Based**: Camera, radar, ultrasonic sensor integration
  - **Incremental Automation**: Specific function automation
  - **Driver Monitoring**: Ensures driver attention and readiness

  ## Relationships

  - **Subclass**: Driver Assistance Technology
  - **Related**: Autonomous Vehicle, Self-Driving Car, Sensor Fusion
  - **Standards**: ISO 26262, Euro NCAP, NHTSA ratings

  ## Key Literature

  1. Bengler, K., et al. (2014). "Three decades of driver assistance systems: Review and future perspectives." *IEEE Intelligent Transportation Systems Magazine*, 6(4), 6-22.

  2. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems." SAE J3016.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[Perception System]]
  - [[Sensor Fusion]]

  ## Core Characteristics

  - **Driver Assistance**: Augments rather than replaces driver
  - **Safety Features**: Collision avoidance and mitigation
  - **Sensor-Based**: Camera, radar, ultrasonic sensor integration
  - **Incremental Automation**: Specific function automation
  - **Driver Monitoring**: Ensures driver attention and readiness

  ## Relationships

  - **Subclass**: Driver Assistance Technology
  - **Related**: Autonomous Vehicle, Self-Driving Car, Sensor Fusion
  - **Standards**: ISO 26262, Euro NCAP, NHTSA ratings

  ## Key Literature

  1. Bengler, K., et al. (2014). "Three decades of driver assistance systems: Review and future perspectives." *IEEE Intelligent Transportation Systems Magazine*, 6(4), 6-22.

  2. SAE International (2021). "Taxonomy and Definitions for Terms Related to Driving Automation Systems." SAE J3016.

  ## See Also

  - [[Autonomous Vehicle]]
  - [[Perception System]]
  - [[Sensor Fusion]]

- ### Provenance
  - sources:: [[ISO 26262]], [[SAE J3016]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
