public:: true

# Pay-Per-Request

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:pay-per-request", "@type":"Page", "title":"Pay-Per-Request", "vc:slug":"pay-per-request", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:pay-per-request",
  "@type":"Class",
  "label":"Pay-Per-Request",
  "definition":"Pay-per-request is a pricing and access-control model in which each individual API call or resource request is metered and paid for independently, rather than through a subscription or bulk allocation. It is enabled by protocols such as L402, which gate HTTP responses behind a Lightning Network micropayment, making per-query settlement economically viable for machine-to-machine transactions. It is particularly relevant for AI services that need frictionless, automatable payment for compute-intensive queries.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:l-402","label":"L402"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:l-402","label":"L402"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Pay-per-request is a pricing and access-control model in which each individual API call or resource request is metered and paid for independently, rather than through a subscription or bulk allocation. It is enabled by protocols such as L402, which gate HTTP responses behind a Lightning Network micropayment, making per-query settlement economically viable for machine-to-machine transactions. It is particularly relevant for AI services that need frictionless, automatable payment for compute-intensive queries.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
