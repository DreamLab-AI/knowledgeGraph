public:: true

# Advanced Metering Infrastructure

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:advanced-metering-infrastructure", "@type":"Page", "title":"Advanced Metering Infrastructure", "vc:slug":"advanced-metering-infrastructure", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:advanced-metering-infrastructure",
  "@type": "Class",
  "label": "Advanced Metering Infrastructure",
  "definition": "Advanced metering infrastructure (AMI) is the integrated system of smart meters, two-way communication networks and data management software that enables utilities to remotely collect detailed, time-stamped consumption data and to send control signals back to meters and connected devices. It extends earlier automated meter reading by providing bidirectional communication, enabling near-real-time usage data, remote connect/disconnect and dynamic pricing. AMI is a foundational enabler of demand response programmes and smart grid operations, since it supplies the granular consumption data those systems depend on.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:smart-metering",
      "label": "Smart Metering"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:smart-metering",
        "label": "Smart Metering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:smart-metering",
        "label": "Smart Metering"
      },
      {
        "@id": "urn:ngm:class:demand-response",
        "label": "Demand Response"
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
	- Advanced metering infrastructure (AMI) is the integrated system of smart meters, two-way communication networks and data management software that enables utilities to remotely collect detailed, time-stamped consumption data and to send control signals back to meters and connected devices. It extends earlier automated meter reading by providing bidirectional communication, enabling near-real-time usage data, remote connect/disconnect and dynamic pricing. AMI is a foundational enabler of demand response programmes and smart grid operations, since it supplies the granular consumption data those systems depend on.
- ### Relationships
	- partOf:: [[Smart Metering]]
	- relatedTo:: [[Smart Metering]]
	- relatedTo:: [[Demand Response]]
