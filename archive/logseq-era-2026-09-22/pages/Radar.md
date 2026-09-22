public:: true

# Radar
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:341860a3132d4e6cb474e02c5713288b476677b89f788b0a9055909c8952df2a",
  "@type": "Page",
  "vc:slug": "radar",
  "title": "Radar",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:signal-processing",
      "vc:label": "Signal Processing"
    },
    {
      "@id": "urn:visionflow:linked:perception-system",
      "vc:label": "Perception System"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:lidar",
      "vc:label": "Lidar"
    },
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:sensor",
      "vc:label": "Sensor"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Radar"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:radar",
  "@type": "Class",
  "label": "Radar",
  "definition": "Radar is a sensing technology that transmits radio waves and measures their reflections to determine the range, velocity, and angle of objects; it is used in robotics, autonomous vehicles, aviation, and defence for reliable perception under all weather and lighting conditions.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:sensor",
    "label": "Sensor"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:antenna-array",
        "label": "Antenna Array"
      },
      {
        "@id": "urn:ngm:class:transmitter",
        "label": "Transmitter"
      },
      {
        "@id": "urn:ngm:class:receiver",
        "label": "Receiver"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:perception-system",
        "label": "Perception System"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:radio-frequency-spectrum",
        "label": "Radio Frequency Spectrum"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:collision-avoidance",
        "label": "Collision Avoidance"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:doppler-effect",
        "label": "Doppler Effect"
      },
      {
        "@id": "urn:ngm:class:time-of-flight",
        "label": "Time of Flight"
      },
      {
        "@id": "urn:ngm:class:beamforming",
        "label": "Beamforming"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:camera",
        "label": "Camera"
      },
      {
        "@id": "urn:ngm:class:ultrasonic-sensor",
        "label": "Ultrasonic Sensor"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ieee-802-11",
        "label": "IEEE 802.11ad"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:environmental-sensing",
        "label": "Weather Sensing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:electromagnetic-wave",
        "label": "Electromagnetic Wave"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:radio-detection-and-ranging",
      "label": "Radio Detection and Ranging"
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
  "@id": "urn:visionflow:annotation:link-resolutions:radar:ff2e963ff6d0",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:341860a3132d4e6cb474e02c5713288b476677b89f788b0a9055909c8952df2a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Signal Processing]]",
      "resolved": "urn:visionflow:linked:signal-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Perception System]]",
      "resolved": "urn:visionflow:linked:perception-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lidar]]",
      "resolved": "urn:visionflow:linked:lidar",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensors]]",
      "resolved": "urn:visionflow:linked:sensors",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor]]",
      "resolved": "urn:visionflow:linked:sensor",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Radar is a sensing technology that transmits radio waves and measures their reflections to determine the range, velocity and angle of objects, used in robotics and autonomous systems for reliable perception.

- ### Semantic Classification
  - owl-class:: robotics:Radar
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sensor]]
  - bridges-to:: [[Lidar]], [[Sensors]], [[Air Traffic Control]], [[Weather Sensing]]
  - requires:: [[Signal Processing]], [[Radio Frequency Spectrum]]
  - enables:: [[Perception System]], [[Sensor Fusion]], [[Object Detection]], [[Simultaneous Localisation and Mapping]], [[Collision Avoidance]]
  - hasPart:: [[Antenna Array]], [[Transmitter]], [[Receiver]]
  - partOf:: [[Autonomous Vehicle]]
  - uses:: [[Doppler Effect]], [[Time of Flight]], [[Beamforming]]
  - contrastsWith:: [[Camera]], [[Ultrasonic Sensor]]
  - relatedTo:: [[Electromagnetic Wave]], [[Point Cloud]]
  - sameAs:: [[Radio Detection and Ranging]]

- ### Content
  - Radar measures the time of flight and Doppler shift of reflected radio waves to estimate the distance and relative velocity of targets, and antenna arrays allow angular resolution. It performs reliably in poor visibility conditions such as fog, rain and darkness where optical sensors degrade.
  - In autonomous vehicles and robots, radar is frequently fused with lidar and cameras to combine its velocity sensitivity and weather robustness with the higher spatial resolution of other modalities. Signal processing extracts detections and tracks from raw returns.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
