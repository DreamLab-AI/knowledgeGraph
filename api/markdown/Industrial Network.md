public:: true

# Industrial Network

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:industrial-network", "@type":"Page", "title":"Industrial Network", "vc:slug":"industrial-network", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:industrial-network",
  "@type": "Class",
  "label": "Industrial Network",
  "definition": "An industrial network is a communications network designed to connect sensors, controllers, actuators and machines on a factory floor or industrial site, prioritising deterministic timing, reliability and safety over the general-purpose flexibility of enterprise IT networks. It typically uses fieldbus or industrial Ethernet protocols such as Profinet or EtherCAT to meet the real-time control requirements of robots and process equipment, and forms a core part of operational technology infrastructure. Industrial networks are increasingly connected to enterprise IT systems as part of Industry 4.0 initiatives, raising distinct security and segmentation requirements.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:operational-technology",
      "label": "Operational Technology"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:operational-technology",
        "label": "Operational Technology"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:operational-technology",
        "label": "Operational Technology"
      },
      {
        "@id": "urn:ngm:class:industrial-robot",
        "label": "Industrial Robot"
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
	- An industrial network is a communications network designed to connect sensors, controllers, actuators and machines on a factory floor or industrial site, prioritising deterministic timing, reliability and safety over the general-purpose flexibility of enterprise IT networks. It typically uses fieldbus or industrial Ethernet protocols such as Profinet or EtherCAT to meet the real-time control requirements of robots and process equipment, and forms a core part of operational technology infrastructure. Industrial networks are increasingly connected to enterprise IT systems as part of Industry 4.0 initiatives, raising distinct security and segmentation requirements.
- ### Relationships
	- partOf:: [[Operational Technology]]
	- relatedTo:: [[Operational Technology]]
	- relatedTo:: [[Industrial Robot]]
