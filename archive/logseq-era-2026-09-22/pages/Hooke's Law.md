public:: true

# Hooke's Law

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hookes-law", "@type":"Page", "title":"Hooke's Law", "vc:slug":"hookes-law", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hookes-law",
  "@type": "Class",
  "label": "Hooke's Law",
  "definition": "Hooke's law states that the restoring force exerted by an ideal spring is directly proportional to its displacement from equilibrium, expressed as F = -kx, where k is the spring's stiffness constant. It is the foundational physical relationship behind compliant and series elastic actuation in robotics, where a spring element is deliberately placed in the drivetrain so that measuring its deflection yields an accurate estimate of applied force or torque. The law holds only within a spring's elastic limit, beyond which deformation becomes non-linear or permanent.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:series-elastic-actuation",
        "label": "Series Elastic Actuation"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Hooke's law states that the restoring force exerted by an ideal spring is directly proportional to its displacement from equilibrium, expressed as F = -kx, where k is the spring's stiffness constant. It is the foundational physical relationship behind compliant and series elastic actuation in robotics, where a spring element is deliberately placed in the drivetrain so that measuring its deflection yields an accurate estimate of applied force or torque. The law holds only within a spring's elastic limit, beyond which deformation becomes non-linear or permanent.
