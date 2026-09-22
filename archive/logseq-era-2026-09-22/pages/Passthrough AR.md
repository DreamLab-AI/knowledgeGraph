public:: true

# Passthrough AR

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:passthrough-ar", "@type":"Page", "title":"Passthrough AR", "vc:slug":"passthrough-ar", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:passthrough-ar",
  "@type": "Class",
  "label": "Passthrough AR",
  "definition": "Passthrough AR is a form of augmented reality in which a headset captures the physical environment through external cameras and re-renders that video feed on internal displays, composited with virtual content, rather than allowing direct optical see-through of the real world. It allows headsets originally built for virtual reality to support mixed and augmented reality experiences using the same opaque display hardware, at the cost of added latency and reduced fidelity compared with optical see-through approaches. Passthrough AR is supported by runtime standards such as OpenXR, which expose camera passthrough as a standard feature that applications can request.",
  "domain": "spatial-computing",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:augmented-reality",
      "label": "Augmented Reality"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:display-hardware",
        "label": "Display Hardware"
      },
      {
        "@id": "urn:ngm:class:open-xr",
        "label": "OpenXR"
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
	- Passthrough AR is a form of augmented reality in which a headset captures the physical environment through external cameras and re-renders that video feed on internal displays, composited with virtual content, rather than allowing direct optical see-through of the real world. It allows headsets originally built for virtual reality to support mixed and augmented reality experiences using the same opaque display hardware, at the cost of added latency and reduced fidelity compared with optical see-through approaches. Passthrough AR is supported by runtime standards such as OpenXR, which expose camera passthrough as a standard feature that applications can request.
- ### Relationships
	- partOf:: [[Augmented Reality]]
	- relatedTo:: [[Display Hardware]]
	- relatedTo:: [[OpenXR]]
