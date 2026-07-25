public:: true

# Quadcopter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:435750509c95bec998c0bfc45ee42edba69e03ecc77d5b27f900a2ef33311d82",
  "@type": "Page",
  "vc:slug": "quadcopter",
  "title": "Quadcopter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:multirotor-uav",
      "vc:label": "Multirotor UAV"
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
      "vc:value": "RB-0122"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Quadcopter"
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
  "@id": "urn:ngm:class:quadcopter",
  "@type": "Class",
  "label": "Quadcopter",
  "definition": "A vertical take-off and landing (VTOL) aerial robot with four fixed-pitch rotors arranged symmetrically around a central frame, achieving attitude control and thrust modulation by differentially varying rotor speeds. Quadcopters are mechanically simple (no swashplate), highly manoeuvrable, and statically stable in hover, making them the dominant platform for consumer UAVs, autonomous aerial robotics research, and inspection applications.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:multirotor-uav",
      "label": "Multirotor UAV"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:pid-controller", "label": "Pid Controller"},
      {"@id": "urn:ngm:class:imu", "label": "IMU"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:aerial-robot", "label": "Aerial Robot"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:quadcopter:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:435750509c95bec998c0bfc45ee42edba69e03ecc77d5b27f900a2ef33311d82"
  },
  "vc:resolutions": [
    {
      "raw": "[[Multirotor UAV]]",
      "resolved": "urn:visionflow:owl:class:multirotor-uav",
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
  A VTOL aerial robot with four fixed-pitch rotors arranged symmetrically around a central frame, controlling attitude and thrust by differentially varying rotor speeds. Mechanically simple, highly manoeuvrable, and statically stable in hover — the dominant platform for consumer UAVs, autonomous aerial research, and inspection.

- ### Relationships
  A quadcopter **has part** a PID Controller (for attitude stabilisation), an IMU and Inertial Measurement Unit (for attitude sensing). It **uses** Sensor Fusion to combine IMU, barometer, and GPS/visual odometry data and Embedded Systems as its flight computer substrate. It **enables** Autonomous Navigation (including GPS-denied flight) and Swarm Robotics coordination. It is **related to** Computer Vision (for obstacle avoidance and landing), SLAM (for mapping without GPS), Aerial Robot (its parent category), and Lidar (for 3D mapping payloads).

- ### Content

  The quadcopter's mechanical elegance lies in its simplicity: four brushless motors each drive a fixed-pitch propeller. Roll and pitch are achieved by increasing thrust on one side and decreasing it on the opposite side; yaw is controlled by exploiting the reaction torque difference between clockwise and counter-clockwise rotating propellers (typically arranged alternately). This eliminates the mechanical complexity of variable-pitch rotors, reducing cost and maintenance burden.

  The flight controller — typically running firmware such as ArduPilot, PX4, or Betaflight — executes PID control loops at hundreds of hertz, maintaining attitude stability using IMU feedback. The inner loop stabilises angular velocity (gyroscope); the outer loop controls attitude angle (accelerometer/gyroscope fusion). Position hold integrates GPS, barometer, and optical flow.

  Autonomous quadcopter operation requires sensor fusion pipelines that merge heterogeneous sensor streams into a consistent state estimate. SLAM algorithms enable operation in GPS-denied environments by simultaneously building maps and localising within them using lidar or visual sensors. Computer vision enables obstacle detection, target following, and precision landing.

  Research applications include swarm robotics (coordinated multi-vehicle flight), search and rescue payload delivery, infrastructure inspection (bridges, wind turbines), and agricultural monitoring. Commercial applications span photography, survey mapping, and last-mile delivery. Regulatory frameworks (notably FAA Part 107 in the US and CAA rules in the UK) govern operational altitude, BVLOS restrictions, and remote ID requirements.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
