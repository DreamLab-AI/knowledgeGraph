```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3f7563f310921a4ad216fe5ed5dd4e051bb69f9fc624629ce7337cef24e4e950",
  "@type": "Page",
  "vc:slug": "smart-city",
  "title": "Smart City",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:digital-twin",
      "vc:label": "Digital Twin"
    },
    {
      "@id": "urn:visionflow:linked:edge-computing",
      "vc:label": "Edge Computing"
    },
    {
      "@id": "urn:visionflow:linked:situational-awareness",
      "vc:label": "Situational Awareness"
    },
    {
      "@id": "urn:visionflow:linked:spatial-computing-domain",
      "vc:label": "Spatial Computing Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Smart City"
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
  "@id": "urn:ngm:class:smart-city",
  "@type": "Class",
  "label": "Smart City",
  "definition": "A smart city uses networked sensors, data platforms and analytics to manage urban systems such as transport, energy and public services, often paired with spatial digital twins and governed by open data standards and citizen-centric policies.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:infra-computing-and-cloud",
    "label": "Computing and Cloud"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:network-infrastructure",
        "label": "Network Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:situational-awareness",
        "label": "Situational Awareness"
      },
      {
        "@id": "urn:ngm:class:predictive-maintenance",
        "label": "Predictive Maintenance"
      },
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:smart-grid",
        "label": "Smart Grid"
      },
      {
        "@id": "urn:ngm:class:smart-building",
        "label": "Smart Building"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor-networks",
        "label": "Sensor Network"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:open-data",
        "label": "Open Data"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:5-g-network",
        "label": "5G Network"
      },
      {
        "@id": "urn:ngm:class:cybersecurity",
        "label": "Cybersecurity"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:urban-infrastructure",
        "label": "Urban Infrastructure"
      },
      {
        "@id": "urn:ngm:class:urban-computing",
        "label": "Urban Computing"
      },
      {
        "@id": "urn:ngm:class:citizen-engagement",
        "label": "Citizen Engagement"
      },
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:intelligent-city",
      "label": "Intelligent City"
    },
    {
      "@id": "urn:ngm:class:connected-city",
      "label": "Connected City"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A smart city uses networked sensors, data platforms and analytics to manage urban systems such as transport, energy and public services, often paired with spatial digital twins.

- ### Semantic Classification
  - owl-class:: metaverse:SmartCity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Spatial Computing Domain]]
  - bridges-to:: [[Edge Computing]], [[Situational Awareness]]
  - requires:: [[Internet of Things]]
  - enables:: [[Digital Twin]]

- ### Content
  - Smart cities instrument infrastructure with sensors and connect it to data platforms that support monitoring, optimisation and planning of mobility, utilities and emergency response. Data governance and privacy are recurring concerns given the breadth of collection.
  - Spatial digital twins of urban areas let operators simulate and visualise interventions before deployment, drawing on internet-of-things feeds and edge processing. This links the smart city to digital twin and situational awareness work.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
