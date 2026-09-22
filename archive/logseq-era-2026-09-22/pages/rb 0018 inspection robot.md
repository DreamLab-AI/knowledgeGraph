public:: true

# rb 0018 inspection robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cd51caf4246d16aabaef26f3786c54575ab8c523dbb44075b7a5e5f0c043d304",
  "@type": "Page",
  "vc:slug": "rb-0018-inspection-robot",
  "title": "rb 0018 inspection robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0018"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0018 inspection robot"
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
  "@id": "urn:ngm:class:rb-0018-inspection-robot",
  "@type": "Class",
  "label": "rb 0018 inspection robot",
  "definition": "An inspection robot is a mobile robotic system designed to autonomously or semi-autonomously navigate environments that are hazardous, inaccessible, or inefficient for human workers, in order to assess the structural, mechanical, or operational condition of infrastructure, equipment, or facilities. Equipped with sensor arrays (cameras, LiDAR, ultrasonic, thermal IR), inspection robots collect data for predictive maintenance, safety auditing, and non-destructive testing across industries such as oil and gas pipelines, power-grid infrastructure, bridges, and confined industrial spaces.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    },
    {
      "@id": "urn:ngm:class:mobile-robot",
      "label": "Mobile Robot"
    }
  ],
  "quality": 0.7,
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"},
      {"@id": "urn:ngm:class:rb-0078-infrared-sensor", "label": "rb 0078 infrared sensor"},
      {"@id": "urn:ngm:class:rb-0068-vision-system", "label": "rb 0068 vision system"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rb-0017-rescue-robot", "label": "rb 0017 rescue robot"},
      {"@id": "urn:ngm:class:rb-0012-wheeled-mobile-robot", "label": "rb 0012 wheeled mobile robot"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:rb-0089-risk-assessment", "label": "rb 0089 risk assessment"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0018-inspection-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cd51caf4246d16aabaef26f3786c54575ab8c523dbb44075b7a5e5f0c043d304"
  },
  "vc:resolutions": [
    {
      "raw": "[[RoboticsDomain]]",
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
  - ### Primary Definition
  An inspection robot is a specialised mobile platform whose primary mission is data collection for condition monitoring rather than physical manipulation. Platforms range from wheeled crawlers for pipelines and floor-level inspections, to aerial drones for façade and power-line surveys, to climbing robots for ship hulls and storage tanks. Payloads typically include high-resolution cameras, thermal imagers, ultrasonic thickness gauges, and gas sensors.

  Autonomy levels vary widely: some robots are teleoperated via remote control, while advanced systems use SLAM (simultaneous localisation and mapping) with multi-modal sensor fusion to navigate GPS-denied environments, detect anomalies, and report findings with geospatial tags. Safety certification for inspection robots must address both the robot's own operational safety and the consequences of incomplete or erroneous inspection data.

- ### Semantic Classification
  - owl-class:: robotics:rb0018inspectionrobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Subclass of mobile robot; uses LiDAR (RB-0069), infrared sensor (RB-0078), and vision system (RB-0068) for environmental perception.
  - Related to rescue robot (RB-0017) and wheeled mobile robot (RB-0012) as sibling mobile platform types; supports risk assessment (RB-0089) workflows.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
