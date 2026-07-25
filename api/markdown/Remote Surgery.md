public:: true

# Remote Surgery

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:remote-surgery", "@type": "Page", "title": "Remote Surgery", "vc:slug": "remote-surgery", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:remote-surgery",
  "@type": "Class",
  "label": "Remote Surgery",
  "definition": "Remote surgery, or telesurgery, is the performance of a surgical procedure by a surgeon operating a robotic system from a location physically separate from the patient, with instrument motion relayed over a network connection. It depends on low-latency, high-reliability telepresence links and haptic feedback to preserve the surgeon's sense of touch and precision. It extends specialist surgical care to remote or underserved locations.",
  "domain": "robotics",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:surgical-robotics",
      "label": "Surgical Robotics"
    }
  ],
  "relations": {
    "uses": [],
    "enables": [],
    "requires": [
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
      }
    ],
    "implements": [],
    "partOf": [
      {
        "@id": "urn:ngm:class:surgical-robotics",
        "label": "Surgical Robotics"
      }
    ],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:medical-robotics",
        "label": "Medical Robotics"
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
	- Remote surgery, or telesurgery, is the performance of a surgical procedure by a surgeon operating a robotic system from a location physically separate from the patient, with instrument motion relayed over a network connection. It depends on low-latency, high-reliability telepresence links and haptic feedback to preserve the surgeon's sense of touch and precision. It extends specialist surgical care to remote or underserved locations.
- ### Relationships
	- requires:: [[Telepresence]]
	- partOf:: [[Surgical Robotics]]
	- relatedTo:: [[Medical Robotics]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
