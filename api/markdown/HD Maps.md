public:: true

# HD Maps

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:hd-maps", "@type":"Page", "title":"HD Maps", "vc:slug":"hd-maps", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:hd-maps",
  "@type": "Class",
  "label": "HD Maps",
  "definition": "HD maps (high-definition maps) are centimetre-accurate digital representations of road infrastructure \u2014 including lane geometry, traffic signs, signal positions and road markings \u2014 used by autonomous vehicles to localise themselves precisely and to anticipate road features beyond the range of onboard sensors. They are built from surveyed lidar and camera data and are typically fused with real-time perception output to cross-check and supplement what the vehicle currently observes. HD maps trade off high localisation accuracy against the cost and staleness risk of maintaining a pre-built map as road conditions change.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-driving",
      "label": "Autonomous Driving"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:autonomous-driving",
        "label": "Autonomous Driving"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:autonomous-driving-perception",
        "label": "Autonomous Driving Perception"
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
	- HD maps (high-definition maps) are centimetre-accurate digital representations of road infrastructure — including lane geometry, traffic signs, signal positions and road markings — used by autonomous vehicles to localise themselves precisely and to anticipate road features beyond the range of onboard sensors. They are built from surveyed lidar and camera data and are typically fused with real-time perception output to cross-check and supplement what the vehicle currently observes. HD maps trade off high localisation accuracy against the cost and staleness risk of maintaining a pre-built map as road conditions change.
- ### Relationships
	- partOf:: [[Autonomous Driving]]
	- relatedTo:: [[Autonomous Driving Perception]]
