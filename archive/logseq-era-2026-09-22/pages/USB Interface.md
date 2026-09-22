public:: true

# USB Interface

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:usb-interface", "@type":"Page", "title":"USB Interface", "vc:slug":"usb-interface", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:usb-interface",
  "@type":"Class",
  "label":"USB Interface",
  "definition":"A USB interface is a standardised serial connection point implementing the Universal Serial Bus specification for data transfer and power delivery between a host and a peripheral device. It provides a common physical and protocol layer that hardware wallets, storage devices, and countless other peripherals use to communicate with host computers. USB interfaces are widely chosen for security-sensitive devices because they require a physical connection, limiting remote attack surface compared with wireless alternatives.",
  "domain":"infrastructure",
  "maturity":"draft",
  "subClassOf":[{"@id":"urn:ngm:class:communication-interface","label":"Communication Interface"}],
  "relations":{},
  "sameAs":[],
  "quality":0.55,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A USB interface is a standardised serial connection point implementing the Universal Serial Bus specification for data transfer and power delivery between a host and a peripheral device. It provides a common physical and protocol layer that hardware wallets, storage devices, and countless other peripherals use to communicate with host computers. USB interfaces are widely chosen for security-sensitive devices because they require a physical connection, limiting remote attack surface compared with wireless alternatives.
- ### Relationships
	- subClassOf:: [[Communication Interface]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
