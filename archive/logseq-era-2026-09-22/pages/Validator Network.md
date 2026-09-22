public:: true

# Validator Network

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:validator-network", "@type":"Page", "title":"Validator Network", "vc:slug":"validator-network", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:validator-network",
  "@type":"Class",
  "label":"Validator Network",
  "definition":"A validator network is the collective set of nodes in a proof-of-stake or similar blockchain that are responsible for proposing blocks, attesting to their validity, and participating in the consensus process that finalises the chain's state. Individual validators stake capital as a bond against misbehaviour and are rewarded or penalised according to their participation and honesty. The size, geographic distribution, and stake concentration of a validator network are key determinants of a blockchain's decentralisation and censorship resistance.",
  "domain":"blockchain",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:validator","label":"Validator"}],
  "relations":{
    "uses":[],
    "enables":[],
    "requires":[
      {"@id":"urn:ngm:class:validator","label":"Validator"}
    ],
    "partOf":[]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A validator network is the collective set of nodes in a proof-of-stake or similar blockchain that are responsible for proposing blocks, attesting to their validity, and participating in the consensus process that finalises the chain's state. Individual validators stake capital as a bond against misbehaviour and are rewarded or penalised according to their participation and honesty. The size, geographic distribution, and stake concentration of a validator network are key determinants of a blockchain's decentralisation and censorship resistance.
- ### Relationships
	- subClassOf:: [[Validator]]
	- requires:: [[Validator]]
