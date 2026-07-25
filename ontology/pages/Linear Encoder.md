public:: true

# Linear Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:944ee1ed0248e99352025b624634ec01852548554a804016b225b231188f3c43",
  "@type": "Page",
  "vc:slug": "linear-encoder",
  "title": "Linear Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:encoder",
      "vc:label": "Encoder"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0158"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Linear Encoder"
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
  "@id": "urn:ngm:class:linear-encoder",
  "@type": "Class",
  "label": "Linear Encoder",
  "definition": "A Linear Encoder is a position sensing device that measures linear (translational) displacement along a single axis by converting physical motion into an electrical signal — typically a series of digital pulses or an analogue waveform — that a controller can interpret as position, velocity, or acceleration data. Linear encoders may be optical (using a diffraction grating or glass scale), magnetic (using a magnetised tape), or capacitive, with resolution ranging from micrometres to nanometres in precision metrology applications. They are essential feedback elements in CNC machine tools, semiconductor lithography stages, and high-precision robotic manipulators where closed-loop positional accuracy is required.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:sensor-technology", "label": "Sensor Technology"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robot-hardware", "label": "Robot Hardware"},
      {"@id": "urn:ngm:class:control-system", "label": "Control System"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"},
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"},
      {"@id": "urn:ngm:class:servo-control", "label": "Servo Control"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:feedback-loop", "label": "Feedback Loop"},
      {"@id": "urn:ngm:class:feedback-mechanism", "label": "Feedback Mechanism"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-sensor", "label": "Robot Sensor"},
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:encoder", "label": "Encoder"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:linear-encoder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:944ee1ed0248e99352025b624634ec01852548554a804016b225b231188f3c43"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encoder]]",
      "resolved": "urn:visionflow:owl:class:encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  A Linear Encoder is a position sensing device that measures linear (translational) displacement along a single axis by converting physical motion into an electrical signal — typically a series of digital pulses or an analogue waveform — that a controller can interpret as position, velocity, or acceleration data. Linear encoders may be optical (using a diffraction grating or glass scale), magnetic (using a magnetised tape), or capacitive, with resolution ranging from micrometres to nanometres in precision metrology applications. They are essential feedback elements in CNC machine tools, semiconductor lithography stages, and high-precision robotic manipulators where closed-loop positional accuracy is required.

- ### Relationships
  - hasPart:: [[Sensor]], [[Sensor Technology]]
  - partOf:: [[Robot Hardware]], [[Control System]]
  - requires:: [[Feedback Control]], [[Calibration]]
  - enables:: [[Motion Control]], [[PositionControl]], [[Servo Control]]
  - uses:: [[Feedback Loop]], [[Feedback Mechanism]]
  - relatedTo:: [[Robot Sensor]], [[Robot Joint]], [[Servo Motor]], [[Industrial Robot]], [[Kinematics]]

- ### Content
  Linear encoders produce position feedback through two primary operating principles: incremental encoders output a periodic signal (typically quadrature A/B pulses with an optional index Z channel) whose edge count accumulates to track position relative to a reference home position; absolute encoders output a unique binary code for every position along their travel range, retaining position knowledge across power cycles without requiring a homing sequence.

  In robotic and machine tool applications, a linear encoder is mounted so that its reading head traverses a fixed graduated scale. The scale's pitch and the interpolation factor of the signal processor determine the achievable resolution. Sub-nanometre resolution encoders are used in electron-beam lithography and atomic force microscopy stages, while micrometre-resolution encoders are common in industrial coordinate measuring machines.

  The interface between a linear encoder and a motion controller uses standardised protocols such as EnDat, BiSS-C, or SSI for absolute position data, and differential line-driver signals (RS-422) for incremental quadrature. The controller samples encoder position within a servo loop running at frequencies from 1 kHz to 20 kHz, computing velocity via differentiation and feeding error signals to current amplifiers driving linear or rotary motors.

  Error sources in linear encoders include thermal expansion of the scale material, contamination of the reading gap, and signal interpolation nonlinearity. Temperature-compensated glass ceramic scales (Zerodur, Invar) are used in metrology applications to minimise thermal drift, and cleanroom or sealed encoder designs prevent particulate intrusion in semiconductor manufacturing environments.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
