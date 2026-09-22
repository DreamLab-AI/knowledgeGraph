public:: true

# Reactive Systems

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reactive-systems", "@type":"Page", "title":"Reactive Systems", "vc:slug":"reactive-systems", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:reactive-systems",
  "@type":"Class",
  "label":"Reactive Systems",
  "definition":"Reactive systems are software systems designed around asynchronous message passing and event propagation, responding to events as they occur rather than following a fixed, sequential control flow. They are commonly built using an event-driven architecture, in which discrete events drive computation, and the publish-subscribe pattern, which decouples event producers from consumers. This design supports responsiveness, resilience and elasticity under variable load.",
  "domain":"distributed-systems",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:event-driven-architecture","label":"Event Driven Architecture"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:publish-subscribe-pattern","label":"Publish-Subscribe Pattern"}]
  },
  "sameAs":[],
  "quality":0.5,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Reactive Systems]] Reactive systems are software systems designed around asynchronous message passing and event propagation, responding to events as they occur rather than following a fixed, sequential control flow. They are commonly built using an event-driven architecture, in which discrete events drive computation, and the publish-subscribe pattern, which decouples event producers from consumers. This design supports responsiveness, resilience and elasticity under variable load.
- ### Relationships
	- subClassOf:: [[Event Driven Architecture]]
	- requires:: [[Publish-Subscribe Pattern]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
