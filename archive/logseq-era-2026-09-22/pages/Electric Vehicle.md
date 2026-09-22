public:: true

# Electric Vehicle

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:electric-vehicle", "@type":"Page", "title":"Electric Vehicle", "vc:slug":"electric-vehicle", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:electric-vehicle",
  "@type":"Class",
  "label":"Electric Vehicle",
  "definition":"An electric vehicle (EV) is a road vehicle propelled wholly or partly by one or more electric motors, drawing energy from an onboard rechargeable battery pack rather than, or in addition to, an internal combustion engine. Its core subsystems include the battery pack, a battery management system that monitors cell health and state of charge, a power electronics inverter, and one or more electric traction motors. Electric vehicles are a central pillar of transport decarbonisation and increasingly participate in the wider electricity grid as flexible, distributed energy storage.",
  "domain":"infrastructure",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:energy-storage","label":"Energy Storage"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An electric vehicle (EV) is a road vehicle propelled wholly or partly by one or more electric motors, drawing energy from an onboard rechargeable battery pack rather than, or in addition to, an internal combustion engine. Its core subsystems include the battery pack, a battery management system that monitors cell health and state of charge, a power electronics inverter, and one or more electric traction motors. Electric vehicles are a central pillar of transport decarbonisation and increasingly participate in the wider electricity grid as flexible, distributed energy storage.
- ### Relationships
	- subClassOf:: [[Infrastructure]]
	- requires:: [[Energy Storage]]
