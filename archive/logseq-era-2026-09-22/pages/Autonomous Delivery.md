public:: true

# Autonomous Delivery

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autonomous-delivery", "@type":"Page", "title":"Autonomous Delivery", "vc:slug":"autonomous-delivery", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-delivery",
  "@type": "Class",
  "label": "Autonomous Delivery",
  "definition": "Autonomous delivery is the use of self-navigating ground or aerial robots to transport goods from an origin to a destination without a human driver or operator. Delivery robots combine mapping, obstacle avoidance and route planning capabilities from autonomous mobile robotics with payload handling and secure drop-off mechanisms. It is deployed for last-mile parcel delivery, food delivery and campus or warehouse logistics, where it reduces labour cost and enables continuous operation.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-mobile-robots",
      "label": "Autonomous Mobile Robots"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:autonomous-mobile-robots",
        "label": "Autonomous Mobile Robots"
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
  - Autonomous delivery is the use of self-navigating ground or aerial robots to transport goods from an origin to a destination without a human driver or operator. Delivery robots combine mapping, obstacle avoidance and route planning capabilities from autonomous mobile robotics with payload handling and secure drop-off mechanisms. It is deployed for last-mile parcel delivery, food delivery and campus or warehouse logistics, where it reduces labour cost and enables continuous operation.
