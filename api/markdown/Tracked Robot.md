public:: true

# Tracked Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:097d4ec46e75d6b91a8b70eeb0dfc01829a154456fdd31cb9b3f891304539a0a",
  "@type": "Page",
  "vc:slug": "tracked-robot",
  "title": "Tracked Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ground-robot",
      "vc:label": "Ground Robot"
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
      "vc:value": "RB-0113"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tracked Robot"
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
  "@id": "urn:ngm:class:tracked-robot",
  "@type": "Class",
  "label": "Tracked Robot",
  "definition": "A Tracked Robot is a ground mobile robot that uses continuous loop tracks—analogous to those on military tanks—rather than wheels to achieve locomotion. The large contact surface area of the track distributes the robot's weight, providing superior traction and stability on uneven, soft, or obstacle-dense terrain such as rubble, mud, stairs, and gravel. Tracked robots are widely deployed in search-and-rescue, military reconnaissance, inspection, and agricultural automation where wheeled platforms would lose grip or become immobilised.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ground-robot",
      "label": "Ground Robot"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:wheeled-robot", "label": "Wheeled Robot"},
      {"@id": "urn:ngm:class:legged-robot", "label": "Legged Robot"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:rescue-robot", "label": "Rescue Robot"},
      {"@id": "urn:ngm:class:inspection-robot", "label": "Inspection Robot"},
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:perception-system", "label": "Perception System"},
      {"@id": "urn:ngm:class:slam", "label": "SLAM"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"}
    ],
    "hasPart": [
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
  "@id": "urn:visionflow:annotation:link-resolutions:tracked-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:097d4ec46e75d6b91a8b70eeb0dfc01829a154456fdd31cb9b3f891304539a0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ground Robot]]",
      "resolved": "urn:visionflow:owl:class:ground-robot",
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
  A Tracked Robot is a ground mobile robot that uses continuous loop tracks rather than wheels for locomotion, providing superior traction on uneven, soft, or obstacle-dense terrain such as rubble, mud, stairs, and gravel.

- ### Relationships
  Tracked Robots contrast with Wheeled Robots, which offer higher speed and energy efficiency on flat surfaces, and Legged Robots, which achieve greater mobility over extreme obstacles at the cost of mechanical complexity. They are specialised variants of Mobile Robots and are closely associated with Rescue Robots and Inspection Robots, the most common deployment domains. Tracked Robots use Motion Planning and SLAM to navigate complex environments, rely on Perception Systems for situational awareness, and require Path Planning to traverse cluttered terrain. Lidar is a typical hasPart sensor suite component. They are part of the broader Robotics domain.

- ### Content

  The track system in a tracked robot consists of a series of interlocked links forming a belt that is driven by a sprocket at one end and guided by idler wheels or rollers distributed along the vehicle's undercarriage. The large ground contact area, typically five to ten times that of equivalent wheeled systems, reduces ground pressure and prevents sinking on soft substrates. Grousers or cleats moulded into the track surface bite into loose material, providing the grip necessary for climbing steep inclines and crossing debris fields.

  Tracked robots are particularly prevalent in search-and-rescue operations following earthquakes, building collapses, or industrial accidents, where rubble fields and narrow passages require robust all-terrain mobility. Military reconnaissance robots such as iRobot's PackBot and the Talon system use tracked locomotion to traverse hostile terrain while keeping personnel safe. In the nuclear industry, tracked robots perform inspection and decontamination tasks in radioactive environments with high step heights and wet, slippery floors that would challenge wheeled alternatives.

  The primary engineering challenges include higher power consumption compared to wheeled systems—track friction losses can account for 20–40% of drive energy—and complexity of turning, which is accomplished by differential speed between the two tracks (skid steering) rather than dedicated steering geometry. Skid steering creates lateral scrubbing forces that increase wear and reduce turning precision on hard surfaces. Hybrid designs address this by adding passive or active flipper tracks at the front and rear to improve staircase climbing and self-righting capability.

  Navigation planning for tracked robots must account for the robot's inability to execute in-place rotation on loose or sloped terrain without risk of track disengagement, requiring planners to model track–surface interaction dynamics not typically needed for wheeled platforms.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
