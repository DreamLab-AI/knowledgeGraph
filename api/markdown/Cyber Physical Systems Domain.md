public:: true

# Cyber Physical Systems Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:99a6e40d39cd44eca5cb7cd6f68c8a5ca838f6eaf3958ea2c4d511c74f2143f9",
  "@type": "Page",
  "vc:slug": "cyber-physical-systems-domain",
  "title": "Cyber Physical Systems Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:embedded-control-system",
      "vc:label": "Embedded Control System"
    },
    {
      "@id": "urn:visionflow:linked:sensor-network",
      "vc:label": "Sensor Network"
    },
    {
      "@id": "urn:visionflow:linked:actuator-system",
      "vc:label": "Actuator System"
    },
    {
      "@id": "urn:visionflow:linked:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:linked:real-time-control-loop",
      "vc:label": "Real-Time Control Loop"
    },
    {
      "@id": "urn:visionflow:linked:sensing-infrastructure",
      "vc:label": "Sensing Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:real-time-computing",
      "vc:label": "Real-Time Computing"
    },
    {
      "@id": "urn:visionflow:linked:networking-domain",
      "vc:label": "Networking Domain"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-control",
      "vc:label": "Autonomous Control"
    },
    {
      "@id": "urn:visionflow:linked:industrial-automation",
      "vc:label": "Industrial Automation"
    },
    {
      "@id": "urn:visionflow:linked:condition-monitoring",
      "vc:label": "Condition Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:information-security-domain",
      "vc:label": "Information Security Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    },
    {
      "@id": "urn:visionflow:linked:robotics-domain",
      "vc:label": "Robotics Domain"
    },
    {
      "@id": "urn:visionflow:linked:iec-61131",
      "vc:label": "IEC 61131"
    },
    {
      "@id": "urn:visionflow:linked:nist-sp-1500-201",
      "vc:label": "NIST SP 1500-201"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Cyber Physical Systems Domain"
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
  "@id": "urn:ngm:class:cyber-physical-systems-domain",
  "@type": "Class",
  "label": "Cyber Physical Systems Domain",
  "definition": "The Cyber Physical Systems Domain classifies concepts for engineered systems in which computation and networking are tightly coupled with physical processes through sensing and actuation. It covers control loops, embedded computing, and the integration of digital models with physical behaviour. As a subject classification under the Robotics Domain, it scopes the joint design of the computational and physical elements rather than the mechanical platform alone.",
  "domain": "cyber-physical-systems",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics-domain",
      "label": "Robotics Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:embedded-control-system",
        "label": "Embedded Control System"
      },
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      },
      {
        "@id": "urn:ngm:class:actuator-system",
        "label": "Actuator System"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:real-time-control-loop",
        "label": "Real-Time Control Loop"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensing-infrastructure",
        "label": "Sensing Infrastructure"
      },
      {
        "@id": "urn:ngm:class:real-time-computing",
        "label": "Real-Time Computing"
      },
      {
        "@id": "urn:ngm:class:networking-domain",
        "label": "Networking Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-control",
        "label": "Autonomous Control"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "Industrial Automation"
      },
      {
        "@id": "urn:ngm:class:condition-monitoring",
        "label": "Condition Monitoring"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:cyber-physical-systems-domain:d98848324852",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:99a6e40d39cd44eca5cb7cd6f68c8a5ca838f6eaf3958ea2c4d511c74f2143f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Embedded Control System]]",
      "resolved": "urn:visionflow:linked:embedded-control-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Network]]",
      "resolved": "urn:visionflow:linked:sensor-network",
      "kind": "StubLink"
    },
    {
      "raw": "[[Actuator System]]",
      "resolved": "urn:visionflow:linked:actuator-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:linked:digital-twin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Control Loop]]",
      "resolved": "urn:visionflow:linked:real-time-control-loop",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensing Infrastructure]]",
      "resolved": "urn:visionflow:linked:sensing-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-Time Computing]]",
      "resolved": "urn:visionflow:linked:real-time-computing",
      "kind": "StubLink"
    },
    {
      "raw": "[[Networking Domain]]",
      "resolved": "urn:visionflow:linked:networking-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Control]]",
      "resolved": "urn:visionflow:linked:autonomous-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Industrial Automation]]",
      "resolved": "urn:visionflow:linked:industrial-automation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Condition Monitoring]]",
      "resolved": "urn:visionflow:linked:condition-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Information Security Domain]]",
      "resolved": "urn:visionflow:linked:information-security-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[IEC 61131]]",
      "resolved": "urn:visionflow:linked:iec-61131",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST SP 1500-201]]",
      "resolved": "urn:visionflow:linked:nist-sp-1500-201",
      "kind": "StubLink"
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
  - The Cyber Physical Systems Domain classifies concepts for engineered systems in which computation and networking are tightly coupled with physical processes through sensing and actuation. It covers control loops, embedded computing, and the integration of digital models with physical behaviour. As a subject classification under the Robotics Domain, it scopes the joint design of the computational and physical elements rather than the mechanical platform alone.

- ### Semantic Classification
  - owl-class:: cps:CyberPhysicalSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Networking Domain]], [[Information Security Domain]], [[Artificial Intelligence Domain]]
  - has-part:: [[Embedded Control System]], [[Sensor Network]], [[Actuator System]], [[Digital Twin]], [[Real-Time Control Loop]]
  - requires:: [[Sensing Infrastructure]], [[Real-Time Computing]], [[Networking Domain]]
  - enables:: [[Autonomous Control]], [[Industrial Automation]], [[Condition Monitoring]]

- ### Content
  - The Cyber Physical Systems Domain organises systems where software directly governs physical action. Sensors observe the environment, embedded controllers compute responses, and actuators effect change, all within timing constraints that the physical process imposes. Digital twins maintain a synchronised model of the physical asset to support prediction and supervision.
  - Correctness in these systems is as much about timing as about logic, so real-time computing and deterministic networking are central requirements. A late control signal can be as harmful as a wrong one, which makes scheduling, jitter, and fault tolerance first-class concerns. Security is critical because a compromised controller can cause physical harm, not merely data loss.
  - Beneath the Robotics Domain, cyber physical systems bridge to networking for communication, to information security for protection, and to artificial intelligence for perception and planning. Treating the coupling of computation and physical process as its own classification keeps control and integration concerns distinct from the mechanical and actuation hardware.

- ### Provenance
  - sources:: [[IEC 61131]], [[NIST SP 1500-201]]
  - migration-date:: 2026-05-29T00:00:00Z
