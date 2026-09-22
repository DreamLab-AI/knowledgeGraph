public:: true

# Interbank Settlement

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:interbank-settlement", "@type":"Page", "title":"Interbank Settlement", "vc:slug":"interbank-settlement", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:interbank-settlement",
  "@type":"Class",
  "label":"Interbank Settlement",
  "definition":"Interbank settlement is the process by which banks finalise the transfer of funds between each other to discharge obligations arising from customer payments, trades, or other transactions. It relies on messaging networks such as SWIFT to communicate payment instructions and on settlement systems, often operated or overseen by central banks, to move the underlying value. Traditional banking depends on reliable interbank settlement to make cross-institution payments final and irrevocable.",
  "domain":"finance",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:payment-system","label":"Payment System"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Interbank settlement is the process by which banks finalise the transfer of funds between each other to discharge obligations arising from customer payments, trades, or other transactions. It relies on messaging networks such as SWIFT to communicate payment instructions and on settlement systems, often operated or overseen by central banks, to move the underlying value. Traditional banking depends on reliable interbank settlement to make cross-institution payments final and irrevocable.
- ### Relationships
	- subClassOf:: [[Payment System]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
