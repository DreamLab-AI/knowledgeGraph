public:: true

# Voice of Customer

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:voice-of-customer", "@type": "Page", "title": "Voice of Customer", "vc:slug": "voice-of-customer", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:voice-of-customer",
  "@type": "Class",
  "label": "Voice of Customer",
  "definition": "Voice of Customer (VoC) is the systematic capture and analysis of customer feedback, from surveys, support transcripts, reviews and social channels, to surface expressed needs, preferences and pain points that inform product and service decisions. Modern VoC programmes increasingly use natural language processing to extract sentiment and themes from unstructured feedback at scale. It is a core input to customer experience management processes.",
  "domain": "ai",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:customer-experience",
      "label": "Customer Experience"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [
      {
        "@id": "urn:ngm:class:customer-experience-management",
        "label": "Customer Experience Management"
      }
    ],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:customer-experience",
        "label": "Customer Experience"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [],
    "supports": []
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
	- Voice of Customer (VoC) is the systematic capture and analysis of customer feedback, from surveys, support transcripts, reviews and social channels, to surface expressed needs, preferences and pain points that inform product and service decisions. Modern VoC programmes increasingly use natural language processing to extract sentiment and themes from unstructured feedback at scale. It is a core input to customer experience management processes.
- ### Relationships
	- requires:: [[Customer Experience Management]]
	- partOf:: [[Customer Experience]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
