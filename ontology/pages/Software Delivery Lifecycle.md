public:: true

# Software Delivery Lifecycle

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:software-delivery-lifecycle", "@type":"Page", "title":"Software Delivery Lifecycle", "vc:slug":"software-delivery-lifecycle", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:software-delivery-lifecycle",
  "@type": "Class",
  "label": "Software Delivery Lifecycle",
  "definition": "The software delivery lifecycle is the end-to-end sequence of stages a software change passes through, from planning and development through build, test, release, deployment and operation, typically supported by automated pipelines. It extends the traditional software development lifecycle by placing equal emphasis on the operational stages \u2014 continuous integration, continuous delivery, deployment and monitoring \u2014 that determine how reliably and quickly changes reach production. Organising these stages into a repeatable, largely automated lifecycle is a core practice of DevOps and underpins metrics such as deployment frequency and lead time for changes.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:devops",
      "label": "DevOps"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:devops",
        "label": "DevOps"
      },
      {
        "@id": "urn:ngm:class:continuous-integration",
        "label": "Continuous Integration"
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
	- The software delivery lifecycle is the end-to-end sequence of stages a software change passes through, from planning and development through build, test, release, deployment and operation, typically supported by automated pipelines. It extends the traditional software development lifecycle by placing equal emphasis on the operational stages — continuous integration, continuous delivery, deployment and monitoring — that determine how reliably and quickly changes reach production. Organising these stages into a repeatable, largely automated lifecycle is a core practice of DevOps and underpins metrics such as deployment frequency and lead time for changes.
- ### Relationships
	- partOf:: [[DevOps]]
	- relatedTo:: [[DevOps]]
	- relatedTo:: [[Continuous Integration]]
