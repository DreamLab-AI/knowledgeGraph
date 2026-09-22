public:: true

# Vehicle to Grid

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:vehicle-to-grid", "@type":"Page", "title":"Vehicle to Grid", "vc:slug":"vehicle-to-grid", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:vehicle-to-grid",
  "@type":"Class",
  "label":"Vehicle to Grid",
  "definition":"Vehicle-to-grid (V2G) is a technology and operating model that allows an electric vehicle's battery to discharge stored energy back into the electricity grid, turning parked EVs into a distributed, dispatchable energy resource. It requires bidirectional charging hardware and grid-integration software that coordinates charge and discharge cycles with grid operator signals and electricity prices. V2G is a key enabling technology for demand response programmes and for smoothing the intermittency of renewable generation on the grid.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:smart-grid","label":"Smart Grid"}],
  "relations":{
    "uses":[],
    "enables":[
      {"@id":"urn:ngm:class:demand-response","label":"Demand Response"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:electric-vehicle","label":"Electric Vehicle"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Vehicle-to-grid (V2G) is a technology and operating model that allows an electric vehicle's battery to discharge stored energy back into the electricity grid, turning parked EVs into a distributed, dispatchable energy resource. It requires bidirectional charging hardware and grid-integration software that coordinates charge and discharge cycles with grid operator signals and electricity prices. V2G is a key enabling technology for demand response programmes and for smoothing the intermittency of renewable generation on the grid.
- ### Relationships
	- subClassOf:: [[Smart Grid]]
	- enables:: [[Demand Response]]
	- requires:: [[Electric Vehicle]]
