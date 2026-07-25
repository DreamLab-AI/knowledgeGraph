public:: true

# Anonymous Communication

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:anonymous-communication", "@type":"Page", "title":"Anonymous Communication", "vc:slug":"anonymous-communication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:anonymous-communication",
  "@type":"Class",
  "label":"Anonymous Communication",
  "definition":"Anonymous Communication is a set of network techniques that let parties exchange messages without revealing their identities or the link between sender and recipient to observers, typically by routing traffic through multiple relays with layered encryption. It protects against traffic analysis as well as content interception, and is a building block for privacy-preserving applications from whistleblowing platforms to private blockchain transactions. Onion routing is the most widely deployed implementation.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:cryptography-security-and-privacy","label":"Cryptography Security and Privacy"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Anonymous Communication is a set of network techniques that let parties exchange messages without revealing their identities or the link between sender and recipient to observers, typically by routing traffic through multiple relays with layered encryption. It protects against traffic analysis as well as content interception, and is a building block for privacy-preserving applications from whistleblowing platforms to private blockchain transactions. Onion routing is the most widely deployed implementation.
- ### Relationships
	- subClassOf:: [[Cryptography Security and Privacy]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
