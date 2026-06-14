public:: true

# rb 0077 depth camera
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1c608ea635168a14dbbf35725cf853db08ff3bd641e53c8f1821bbfe02671c19",
  "@type": "Page",
  "vc:slug": "rb-0077-depth-camera",
  "title": "rb 0077 depth camera",
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
      "vc:value": "RB-0077"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "rb 0077 depth camera"
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
  "@id": "urn:ngm:class:rb-0077-depth-camera",
  "@type": "Class",
  "label": "rb 0077 depth camera",
  "definition": "A depth camera is a sensor that captures per-pixel distance information alongside a conventional intensity image, producing a registered RGB-D data stream or raw point cloud. In robotics, depth cameras are used for 3D scene reconstruction, obstacle avoidance, object recognition, and SLAM. Common operating principles include structured light projection (e.g. Intel RealSense), time-of-flight measurement, and stereo triangulation; each involves different trade-offs in range, resolution, and outdoor usability.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-perception",
      "label": "Perception and Sensing"
    }
  ],
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R3SemanticRefinement"
  },
  "relations": {
    "bridgesTo": [
      {"@id": "urn:ngm:class:camera", "label": "Camera"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:slam", "label": "SLAM"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"},
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:depth-sensing", "label": "Depth Sensing"},
      {"@id": "urn:ngm:class:depth-estimation", "label": "Depth Estimation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stereo-camera", "label": "Stereo Camera"},
      {"@id": "urn:ngm:class:rb-0068-vision-system", "label": "rb 0068 vision system"},
      {"@id": "urn:ngm:class:rb-0069-lidar", "label": "rb 0069 lidar"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:rb-0066-robot-sensor", "label": "rb 0066 robot sensor"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:visual-odometry", "label": "Visual Odometry"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"}
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rb-0077-depth-camera:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1c608ea635168a14dbbf35725cf853db08ff3bd641e53c8f1821bbfe02671c19"
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
  - A depth camera captures per-pixel distance data and produces RGB-D imagery or point clouds used for 3D scene understanding in robotics. The three dominant technologies are structured light (projects a known infrared pattern and measures its deformation), time-of-flight (measures photon round-trip time), and stereo triangulation (computes disparity between two offset cameras). Depth cameras are central to indoor navigation, manipulation, and human-presence detection in collaborative robot cells.

- ### Semantic Classification
  - owl-class:: robotics:rb0077depthcamera
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Depth cameras feed point clouds to SLAM pipelines for simultaneous localisation and mapping, and serve as the primary sensing modality for real-time obstacle avoidance. They complement LiDAR (RB-0069) at close range and are closely related to stereo cameras and vision systems (RB-0068). Visual odometry algorithms typically consume the depth stream alongside the RGB image to estimate robot ego-motion without wheel encoders.

- ### Content
  - ### Primary Definition
  **Depth Camera** - Depth Camera in robotics systems
  - ### Original Content
		- ```
  # RB-0077: Depth Camera

  #### Key Characteristics
  1. Core property of robotics systems
		  2. Standardised definition across implementations
		  3. Measurable and verifiable attributes
		  4. Essential for safety and performance
		  5. Industry-wide recognition and adoption

		  ## Formal Ontology (OWL Functional Syntax)


		  ## Relationships

		  ### Parent Classes
		  - `Robot`: Primary classification

  #### Future Directions
  ### Emerging Trends
		  1. AI and machine learning integration
		  2. Advanced sensing capabilities
		  3. Improved safety systems
		  4. Enhanced human-robot collaboration
		  5. Standardisation advancements

		  ---

		  **Version History**
		  - 1.0.0 (2025-10-28): Initial foundational definition

		  **Contributors**: Robotics Ontology Working Group
		  **License**: CC BY 4.0
		  **Namespace**: `https://metaverse-ontology.org/robotics/RB-0077`

		  ```

  #### Standards and References
  ### Primary Standards
		  1. **ISO 8373:2021**: Primary reference standard
		  2. **ISO 8373:2021**: Robotics vocabulary
		  3. **Related IEEE standards**: Implementation guidelines

		  ## Validation Criteria

		  ### Conformance Requirements
		  1. ✓ Meets ISO 8373:2021 requirements
		  2. ✓ Documented implementation
		  3. ✓ Verifiable performance metrics
		  4. ✓ Safety compliance demonstrated
		  5. ✓ Industry best practices followed

		  ## Implementation Notes

		  ### Design Considerations
		  - System integration requirements
		  - Performance specifications
		  - Safety considerations
		  - Maintenance procedures

		  ### Common Patterns
		  ```yaml
		  implementation:
		    standards_compliance: true
		    verification_method: standardised_testing
		    documentation_level: comprehensive
		  ```

  #### Related Concepts
  - Related robotics concepts and systems
		  - Cross-references to other ontology terms
		  - Integration with metaverse ontology

		  ## Use Cases

		  ### Industrial Applications
		  1. Manufacturing automation
		  2. Quality control systems
		  3. Process optimization

		  ### Service Applications
		  1. Healthcare robotics
		  2. Logistics and warehousing
		  3. Consumer robotics

		  ### Research Applications
		  1. Academic research platforms
		  2. Algorithm development
		  3. System integration studies

  #### References
  ### Metaverse Ontology Integration
		  - Virtual representation systems
		  - Digital twin integration
		  - Simulation environments

		  ### Domain Ontologies
		  - Manufacturing systems
		  - Control systems
		  - Safety systems

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
