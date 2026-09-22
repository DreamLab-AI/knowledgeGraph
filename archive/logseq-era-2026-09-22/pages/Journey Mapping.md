public:: true

# Journey Mapping

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:journey-mapping", "@type":"Page", "title":"Journey Mapping", "vc:slug":"journey-mapping", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:journey-mapping",
  "@type":"Class",
  "label":"Journey Mapping",
  "definition":"Journey mapping is a design research technique that visually documents the sequence of steps, touchpoints, and emotional states a person experiences while interacting with a product, service, or organisation over time. It surfaces pain points, moments of friction, and opportunities for improvement by combining qualitative research with a structured visual timeline. Journey mapping is a core input to customer experience management and user experience design programmes.",
  "domain":"ai",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:customer-experience","label":"Customer Experience"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:user-experience","label":"User Experience"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:customer-experience","label":"Customer Experience"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Journey mapping is a design research technique that visually documents the sequence of steps, touchpoints, and emotional states a person experiences while interacting with a product, service, or organisation over time. It surfaces pain points, moments of friction, and opportunities for improvement by combining qualitative research with a structured visual timeline. Journey mapping is a core input to customer experience management and user experience design programmes.
- ### Relationships
	- subClassOf:: [[Customer Experience]]
	- enables:: [[User Experience]]
	- requires:: [[Customer Experience]]
