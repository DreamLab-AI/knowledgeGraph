public:: true

# Personalisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:personalisation",
  "@type": "Page",
  "title": "Personalisation",
  "vc:slug": "personalisation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:personalisation",
  "@type": "Class",
  "label": "Personalisation",
  "definition": "Personalisation is the practice of tailoring content, recommendations, services and user experiences to the characteristics, behaviour and preferences of individual users or narrowly defined segments. It draws on collected and inferred data — profiles, interaction histories and contextual signals — to deliver differentiated outputs rather than a single uniform experience. Personalisation underpins recommendation systems, targeted marketing and adaptive interfaces, and raises associated privacy, consent and fairness considerations.",
  "domain": "data",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-marketing",
      "label": "Digital Marketing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:customer-data-platform",
        "label": "Customer Data Platform"
      },
      {
        "@id": "urn:ngm:class:identity-resolution",
        "label": "Identity Resolution"
      },
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      },
      {
        "@id": "urn:ngm:class:recommendation-engine",
        "label": "Recommendation Engine"
      },
      {
        "@id": "urn:ngm:class:behavioural-analytics",
        "label": "Behavioral Analytics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:e-commerce",
        "label": "E-Commerce"
      },
      {
        "@id": "urn:ngm:class:digital-marketing",
        "label": "Digital Marketing"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:customer-data-platform",
        "label": "Customer Data Platform"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:data-management",
        "label": "Data Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:identity-resolution",
        "label": "Identity Resolution"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:data-standards",
        "label": "Data Standards"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Personalisation is the practice of tailoring content, recommendations, services and user experiences to the characteristics, behaviour and preferences of individual users or narrowly defined segments. It draws on collected and inferred data — profiles, interaction histories and contextual signals — to deliver differentiated outputs rather than a single uniform experience. Personalisation underpins recommendation systems, targeted marketing and adaptive interfaces, and raises associated privacy, consent and fairness considerations.
  - Related: [[Customer Data Platform]] [[Recommendation System]] [[Behavioural Analytics]] [[Digital Marketing]]
- ### Overview
  - Personalisation systems combine explicit data (preferences a user states) with implicit data (observed behaviour) to model intent and predict relevant content. Modern implementations rely heavily on machine learning, where collaborative filtering, content-based models and contextual bandits select items likely to satisfy a given user. The discipline spans data collection, feature engineering, model serving and continuous evaluation against engagement and satisfaction metrics.
- ### Key aspects
  - Explicit versus implicit preference signals
  - Real-time versus batch personalisation
  - Cold-start problem for new users and items
  - Privacy, consent and data-minimisation constraints
  - Segmentation versus one-to-one targeting
  - Feedback loops and filter-bubble risks
- ### Applications
  - Product and content recommendations in e-commerce
  - Personalised marketing campaigns and messaging
  - Adaptive user interfaces and onboarding flows
  - Search ranking tuned to individual intent
  - Conversational agents that retain user context
- ### Relationships
  - subClassOf:: [[Digital Marketing]]
  - requires:: [[Customer Data Platform]]
  - requires:: [[Identity Resolution]]
  - requires:: [[Data Quality]]
  - uses:: [[Recommendation System]]
  - uses:: [[Recommendation Engine]]
  - uses:: [[Behavioural Analytics]]
  - enables:: [[E-Commerce]]
  - enables:: [[Digital Marketing]]
  - supports:: [[Customer Data Platform]]
  - dependsOn:: [[Data Governance]]
  - dependsOn:: [[Data Management]]
  - relatedTo:: [[Machine Learning]]
  - relatedTo:: [[Identity Resolution]]
  - bridgesTo:: [[Artificial Intelligence]]
  - contrastsWith:: [[Data Standards]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
