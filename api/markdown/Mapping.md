public:: true

# Mapping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mapping",
  "@type": "Page",
  "vc:slug": "mapping",
  "title": "Mapping",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mapping",
  "@type": "Class",
  "label": "Mapping",
  "definition": "Mapping is the process of creating structured correspondences between two or more domains, spaces, or data representations — including cartographic, semantic, and data-schema contexts. In spatial computing it denotes the construction of environment models; in knowledge engineering it describes the alignment of ontologies, schemas, or concept hierarchies; in AI it encompasses learned transformations between input and output spaces. Mapping is foundational to navigation, data integration, and cross-domain reasoning.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:knowledge-graph",
      "label": "Knowledge Graph"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:spatial-mapping",
        "label": "Spatial Mapping"
      },
      {
        "@id": "urn:ngm:class:geospatial-technology",
        "label": "Geospatial Technology"
      },
      {
        "@id": "urn:ngm:class:ontology-alignment",
        "label": "Ontology Alignment"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "Coordinate System"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-integration",
        "label": "Data Integration"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-construction",
        "label": "Knowledge Graph Construction"
      },
      {
        "@id": "urn:ngm:class:semantic-interoperability",
        "label": "Semantic Interoperability"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:scene-understanding",
        "label": "Scene Understanding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:localization",
        "label": "Localization"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "LiDAR"
      },
      {
        "@id": "urn:ngm:class:depth-camera",
        "label": "Depth Camera"
      },
      {
        "@id": "urn:ngm:class:point-cloud",
        "label": "Point Cloud"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:semantic-mapping",
        "label": "Semantic Mapping"
      },
      {
        "@id": "urn:ngm:class:metric-map",
        "label": "Metric Map"
      },
      {
        "@id": "urn:ngm:class:topological-map",
        "label": "Topological Map"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:localization",
        "label": "Localization"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:environment-modelling",
      "label": "Environment Modelling"
    },
    {
      "@id": "urn:ngm:class:cartography",
      "label": "Cartography"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Mapping is the construction of structured correspondences between domains — whether [[Simultaneous Localisation and Mapping]] for spatial environments, [[Data Integration]] schemas, or [[Knowledge Graph Construction]] ontologies — enabling systematic translation, navigation, and reasoning across heterogeneous representations.

- ### Relationships
  - Mapping underpins [[Simultaneous Localisation and Mapping]] and broader [[Spatial Mapping]] tasks used in robotics and AR/VR, while also driving [[Data Integration]] and [[Knowledge Graph Construction]] in information systems. It relies on [[SLAM]] algorithms and [[Localization]] techniques at the perception layer, and enables [[Autonomous Navigation]] in embodied systems. [[Geospatial Technology]] applies mapping to geographic information, and the concept threads through every layer of the knowledge graph.

- ### Content
  - The concept of mapping spans millennia of cartographic tradition — from hand-drawn navigation charts to satellite-derived geodatabases — but has expanded dramatically with digital computing into any process that defines correspondences between two structured spaces. In computer science the term covers data mappings between schemas, ontology alignment, and learned feature transformations in neural networks, reflecting a unifying principle of structured correspondence.

  - At a technical level, mapping constructs a function or graph that relates elements of a source domain to elements of a target domain, preserving relevant structure. Spatial mapping typically involves accumulating sensor observations (LiDAR, depth cameras, IMUs) and fusing them into a consistent environment model. Semantic mapping adds categorical labels and object identities. Schema and ontology mapping uses logical inference or learned embeddings to identify equivalent or related concepts across different knowledge representations.

  - Mapping is significant across robotics (environment reconstruction), autonomous vehicles (HD map creation), AR/VR (spatial anchor placement), enterprise data integration (ETL schema alignment), and AI interpretability (latent-space topology). In spatial AI systems the quality of the underlying map directly governs the reliability of downstream perception, planning, and decision-making. In knowledge engineering, accurate mapping enables interoperability between heterogeneous data sources.

  - Through 2024-2025, neural implicit representations such as NeRF and 3D Gaussian Splatting have begun to supplant classical voxel or point-cloud maps for photorealistic environment modelling. Foundation models are increasingly used to perform zero-shot semantic mapping, annotating reconstructed scenes with open-vocabulary labels. Federated and privacy-preserving mapping protocols are emerging to allow collaborative map-building without centralising raw sensor data, a trend that will intensify as robotics fleets scale.

