public:: true

# autonomous driving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b42cd20f13fa64c023551dec2737e38a50cd8d02cf21561853aa97c371fd161f",
  "@type": "Page",
  "vc:slug": "autonomous-driving",
  "title": "autonomous driving",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-driving",
  "@type": "Class",
  "label": "Autonomous Driving",
  "definition": "Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of other agents, plan a safe trajectory, and execute actuator commands — all without direct human intervention. The system architecture typically decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (motion modelling of surrounding agents), planning (route, behaviour, and motion planning), and control (longitudinal and lateral actuation). SAE International's J3016 taxonomy defines six automation levels from Level 0 (no automation) to Level 5 (full automation), providing the dominant industry reference framework.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of other agents, plan a safe trajectory, and execute actuator commands — all without direct human intervention. The system architecture typically decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (motion modelling of surrounding agents), planning (route, behaviour, and motion planning), and control (longitudinal and lateral actuation). SAE International's J3016 taxonomy defines six automation levels from Level 0 (no automation) to Level 5 (full automation), providing the dominant industry reference framework.

- ### Semantic Classification
  - owl-class:: autonomous-driving:Autonomous Driving
  - owl-role:: Concept

- ### Relationships
  - requires [[Computer Vision]]
  - requires [[Sensor Fusion]]
  - requires [[Lidar]]
  - uses [[Path Planning]]
  - uses [[Object Detection]]
  - relatedTo [[Autonomous Vehicle]]

- ### Content
  - Autonomous driving systems integrate a diverse sensor suite — typically including monocular and stereo cameras, 3D Lidar scanners, millimetre-wave radar, and ultrasonic sensors — whose outputs are fused to build a real-time model of the vehicle's surroundings. Computer Vision techniques including Object Detection and Tracking, semantic segmentation, and optical flow extract structured representations from raw sensor data. Sensor Fusion algorithms combine these modalities, compensating for the limitations of each (e.g., camera sensitivity to lighting, Lidar sparsity at range, radar angular resolution).
  - Localisation and mapping are achieved through a combination of GNSS, HD map matching, and SLAM (Simultaneous Localisation and Mapping). Prediction modules model the likely future trajectories of pedestrians, cyclists, and vehicles using probabilistic motion models or learned neural approaches. Path Planning then generates a drivable trajectory satisfying kinematic constraints, speed limits, traffic rules, and passenger comfort criteria, often decomposed into a route planner (graph search over road network) and a local motion planner (optimisation over a short planning horizon).
  - The control layer translates planned trajectories into throttle, brake, and steering commands via a Controller, often implemented as a PID Controller or Model Predictive Controller. Safety assurance in autonomous driving invokes formal verification, simulation-based testing, and extensive real-world validation mileage. Regulatory frameworks vary by jurisdiction; key standards bodies include SAE International, ISO (TC22/SC32), and the UN ECE Working Party 29.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
