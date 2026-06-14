public:: true

# Real-Time Control Loop
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:real-time-control-loop",
  "@type": "Page",
  "vc:slug": "real-time-control-loop",
  "title": "Real-Time Control Loop",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:real-time-control-loop",
  "@type": "Class",
  "label": "Real-Time Control Loop",
  "definition": "A real-time control loop is a cyclic sense-compute-actuate process that runs at a fixed, deterministic frequency to regulate a physical or cyber-physical system within strict timing deadlines. Missing a deadline can cause instability or unsafe behaviour, so loops require real-time scheduling and bounded computation. They are the operational core of robotics, motion control, and industrial automation.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:control-system", "label": "Control System"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:cyber-physical-systems", "label": "Cyber-Physical Systems Domain"},
      {"@id": "urn:ngm:class:admittance-control", "label": "Admittance Control"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A real-time control loop executes sense-compute-actuate cycles at a fixed deterministic rate with hard deadlines. It is a constituent part of the [[Cyber-Physical Systems Domain]] and is required by [[Admittance Control]] for stable force regulation.
- ### Content
  - Loop rates range from hundreds of hertz for joint control to kilohertz for current and force loops. Determinism is achieved with real-time operating systems, priority scheduling, and bounded-latency I/O. Jitter and missed deadlines degrade stability, so worst-case execution time analysis and isolation from non-real-time tasks are essential.
