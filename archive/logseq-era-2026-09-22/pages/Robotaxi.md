public:: true

# Robotaxi

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:robotaxi", "@type":"Page", "title":"Robotaxi", "vc:slug":"robotaxi", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:robotaxi",
  "@type":"Class",
  "label":"Robotaxi",
  "definition":"A robotaxi is a self-driving vehicle operated as an on-demand ride-hailing service without a human safety driver, combining autonomous vehicle technology with fleet dispatch, mapping, and remote-assistance infrastructure. Passengers summon a robotaxi through a mobile application in the same manner as a conventional ride-hailing service, but the vehicle navigates, avoids obstacles, and completes the trip using onboard perception and planning systems. Commercial robotaxi deployments require regulatory approval and typically operate within geofenced service areas where the vehicle's autonomy stack has been extensively validated.",
  "domain":"robotics",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:autonomous-vehicle","label":"Autonomous Vehicle"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:autonomous-vehicle","label":"Autonomous Vehicle"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A robotaxi is a self-driving vehicle operated as an on-demand ride-hailing service without a human safety driver, combining autonomous vehicle technology with fleet dispatch, mapping, and remote-assistance infrastructure. Passengers summon a robotaxi through a mobile application in the same manner as a conventional ride-hailing service, but the vehicle navigates, avoids obstacles, and completes the trip using onboard perception and planning systems. Commercial robotaxi deployments require regulatory approval and typically operate within geofenced service areas where the vehicle's autonomy stack has been extensively validated.
- ### Relationships
	- subClassOf:: [[Autonomous Vehicle]]
	- requires:: [[Autonomous Vehicle]]
