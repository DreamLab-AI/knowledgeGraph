public:: true

# Open Bridge Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:open-bridge-standard",
  "@type": "Page",
  "vc:slug": "open-bridge-standard",
  "title": "Open Bridge Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-bridge-standard",
  "@type": "Class",
  "label": "Open Bridge Standard",
  "definition": "An Open Bridge Standard is a publicly specified protocol for transferring assets and messages between independent blockchains in an interoperable, vendor-neutral way. It defines common formats for lock/mint, burn/release, and message-passing operations so that distinct bridge implementations can interoperate and be audited against shared security assumptions. Such standards aim to reduce fragmentation and the systemic risk associated with bespoke cross-chain bridges.",
  "domain": "blockchain",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:sc-standards-and-interop", "label": "Standards and Interoperability"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:blockchain-interoperability", "label": "Blockchain Interoperability"},
      {"@id": "urn:ngm:class:cross-chain-bridge", "label": "Cross-Chain Bridge"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Open Bridge Standard is a vendor-neutral specification for moving assets and messages across chains, providing the shared formats that underpin [[Blockchain Interoperability]] and reduce risk in any [[Cross-Chain Bridge]].
- ### Content
  - By codifying lock/mint and message-passing semantics, the standard lets independent bridge implementations interoperate and be audited against common security assumptions. This counters the fragmentation and exploit history of bespoke bridges by aligning them to a published, reviewable specification.
