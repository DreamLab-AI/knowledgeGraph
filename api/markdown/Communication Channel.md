public:: true

# Communication Channel

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:communication-channel", "@type": "Page", "title": "Communication Channel", "vc:slug": "communication-channel", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:communication-channel",
  "@type": "Class",
  "label": "Communication Channel",
  "definition": "A communication channel is the medium or pathway, physical or logical, through which information is transmitted from a sender to a receiver, characterised by properties such as bandwidth, latency, noise and capacity. The concept originates in information theory, where channel capacity bounds the rate at which information can be transmitted reliably. It is a prerequisite for any feedback loop or social interaction that depends on exchanging signals between agents.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:information-theory",
      "label": "Information Theory"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      }
    ],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:social-interaction",
        "label": "Social Interaction"
      }
    ],
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
	- A communication channel is the medium or pathway, physical or logical, through which information is transmitted from a sender to a receiver, characterised by properties such as bandwidth, latency, noise and capacity. The concept originates in information theory, where channel capacity bounds the rate at which information can be transmitted reliably. It is a prerequisite for any feedback loop or social interaction that depends on exchanging signals between agents.
- ### Relationships
	- enables:: [[Feedback Loop]]
	- requires:: [[Information Theory]]
	- relatedTo:: [[Social Interaction]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
