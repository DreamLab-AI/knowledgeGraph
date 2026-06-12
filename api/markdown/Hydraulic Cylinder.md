public:: true

# Hydraulic Cylinder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:474fdb3a3859c0042e827e13b5b043da9518f060e6916e94b238405d51bf1aab",
  "@type": "Page",
  "vc:slug": "hydraulic-cylinder",
  "title": "Hydraulic Cylinder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:hydraulic-actuator",
      "vc:label": "Hydraulic Actuator"
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
      "vc:value": "RB-0179"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Hydraulic Cylinder"
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
  "@id": "urn:ngm:class:hydraulic-cylinder",
  "@type": "Class",
  "label": "Hydraulic Cylinder",
  "definition": "A hydraulic cylinder is a mechanical actuator that converts hydraulic pressure and fluid flow into unidirectional linear force and motion. It consists of a cylindrical barrel, piston, piston rod, end caps, and seals; pressurised fluid acts on the piston face to extend or retract the rod, generating forces from tens of newtons to several meganewtons depending on bore diameter and system pressure. Hydraulic cylinders are foundational components in industrial robots, heavy machinery, manufacturing automation, and construction equipment where high force density and precise position control are required.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:hydraulic-actuator",
      "label": "Hydraulic Actuator"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:chinese-seal-art-ai-classification-pipeline", "label": "Seals"},
      {"@id": "urn:ngm:class:pressure-sensor", "label": "Pressure Sensor"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:hydraulic-motor", "label": "Hydraulic Motor"},
      {"@id": "urn:ngm:class:feedback-control", "label": "Feedback Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:pid-control", "label": "PID Control"},
      {"@id": "urn:ngm:class:position-control", "label": "PositionControl"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:pneumatic-cylinder", "label": "Pneumatic Cylinder"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:industrial-automation", "label": "IndustrialAutomation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:hydraulic-cylinder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:474fdb3a3859c0042e827e13b5b043da9518f060e6916e94b238405d51bf1aab"
  },
  "vc:resolutions": [
    {
      "raw": "[[Hydraulic Actuator]]",
      "resolved": "urn:visionflow:owl:class:hydraulic-actuator",
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


### Definition

A hydraulic cylinder is a mechanical actuator that converts hydraulic pressure and fluid flow into unidirectional linear force and motion. It consists of a cylindrical barrel, piston, piston rod, end caps, and seals; pressurised fluid acts on the piston face to extend or retract the rod, generating forces from tens of newtons to several meganewtons depending on bore diameter and system pressure. Hydraulic cylinders are foundational components in industrial robots, heavy machinery, manufacturing automation, and construction equipment where high force density and precise position control are required.

### Relationships

A hydraulic cylinder is a subclass of Hydraulic Actuator and belongs to the broader Actuation and Control taxonomy. It requires a Hydraulic Motor to supply pressurised fluid, and integrates with Feedback Control and PID Control loops to achieve accurate positioning. Its hasPart relationships include Seals (which prevent fluid leakage across the piston and rod) and Pressure Sensors that provide closed-loop feedback. The cylinder enables Force Control and Motion Control applications and is a key component inside Industrial Robot arms. It contrasts with the Pneumatic Cylinder (which uses compressed gas and is lighter but lower-force) and with the Servo Motor (which provides rotary rather than linear output). It is closely related to Robot Joint design and to IndustrialAutomation systems more broadly.

### Content

Hydraulic cylinders operate on Pascal's law: pressure applied uniformly to an enclosed fluid is transmitted equally in all directions. A pump delivers flow at high pressure; a directional-control valve routes that flow to the cap-end or rod-end of the cylinder, extending or retracting the piston rod respectively. Output force equals pressure multiplied by effective piston area, and velocity is determined by flow rate divided by area. Bore sizes range from 12 mm in miniature cylinders to over 1 metre in heavy civil-engineering rams, with working pressures typically between 70 bar and 350 bar.

In industrial robotics and automation, hydraulic cylinders drive linear slides, clamping fixtures, stamping presses, and heavy-lift arms. They offer the highest force density of any actuation technology — far exceeding pneumatic or electric alternatives at comparable actuator size — making them indispensable in applications such as die-casting, forging, and large-scale assembly. The trade-off is a hydraulic power unit, associated pipework, and the need to manage fluid cleanliness, temperature, and leakage.

Closed-loop control of a hydraulic cylinder typically uses a servo valve or proportional valve coupled with a linear position encoder. The controller (commonly PID or model-predictive) adjusts valve spool position to minimise position error. Force control adds a load cell or pressure transducer in the feedback path. Modern electro-hydraulic systems achieve positioning repeatability below 10 micrometres. Predictive-maintenance strategies monitor seal condition via pressure-decay tests and servo-valve response curves.

Environmental and efficiency considerations increasingly favour electric actuation for lighter-duty cycles. However, hybrid electro-hydraulic architectures — using an electric motor-driven pump per actuator — are re-establishing hydraulic cylinders in energy-efficient form factors for applications where shock-load absorption and passive force retention (load-holding without continuous power) remain critical advantages.

### Provenance

- sources:: Chimera Prime Research
- migration-date:: 2026-04-26T00:00:00Z
