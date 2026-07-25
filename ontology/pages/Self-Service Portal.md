public:: true

# Self-Service Portal

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:self-service-portal", "@type": "Page", "title": "Self-Service Portal", "vc:slug": "self-service-portal", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:self-service-portal",
  "@type": "Class",
  "label": "Self-Service Portal",
  "definition": "A self-service portal is a customer-facing software interface that lets users resolve requests -- account changes, order tracking, troubleshooting -- without contacting a human agent, often backed by AI-driven search, chatbots or workflow automation. It reduces support-team load by handling routine, well-defined requests automatically while escalating complex cases to human agents. Self-service portals are a common deliverable of customer service and customer support automation initiatives.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:user-interface",
      "label": "User Interface"
    }
  ],
  "relations": {
    "uses": [],
    "requires": [],
    "enables": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:user-interface",
        "label": "User Interface"
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
	- A self-service portal is a customer-facing software interface that lets users resolve requests -- account changes, order tracking, troubleshooting -- without contacting a human agent, often backed by AI-driven search, chatbots or workflow automation. It reduces support-team load by handling routine, well-defined requests automatically while escalating complex cases to human agents. Self-service portals are a common deliverable of customer service and customer support automation initiatives.
- ### Relationships
	- partOf:: [[User Interface]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
