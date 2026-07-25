public:: true

# Green Hydrogen

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:green-hydrogen", "@type":"Page", "title":"Green Hydrogen", "vc:slug":"green-hydrogen", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:green-hydrogen",
  "@type":"Class",
  "label":"Green Hydrogen",
  "definition":"Green hydrogen is hydrogen gas produced by electrolysing water using electricity drawn entirely from renewable sources such as wind or solar, in contrast to grey hydrogen produced from fossil natural gas via steam methane reforming. It is used as a zero-carbon fuel and chemical feedstock for sectors that are difficult to electrify directly, including heavy industry, long-haul transport, and seasonal energy storage. Green hydrogen production scales with, and helps absorb curtailed output from, renewable energy generation.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:renewable-energy","label":"Renewable Energy"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Green hydrogen is hydrogen gas produced by electrolysing water using electricity drawn entirely from renewable sources such as wind or solar, in contrast to grey hydrogen produced from fossil natural gas via steam methane reforming. It is used as a zero-carbon fuel and chemical feedstock for sectors that are difficult to electrify directly, including heavy industry, long-haul transport, and seasonal energy storage. Green hydrogen production scales with, and helps absorb curtailed output from, renewable energy generation.
- ### Relationships
	- subClassOf:: [[Renewable Energy]]
	- requires:: [[Renewable Energy]]
