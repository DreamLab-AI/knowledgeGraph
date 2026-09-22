public:: true

# TCP/IP

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:tcp-ip", "@type":"Page", "title":"TCP/IP", "vc:slug":"tcp-ip", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:tcp-ip",
  "@type":"Class",
  "label":"TCP/IP",
  "definition":"TCP/IP is the layered suite of communication protocols that underpins the Internet, named after its two core members: the Transmission Control Protocol and the Internet Protocol. It organises networking into link, internet, transport, and application layers, providing addressing, routing, and reliable end-to-end byte streams over heterogeneous physical networks. Its packet-switched, best-effort design with end-to-end reliability above the network layer enabled global interoperability.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "hasPart":[{"@id":"urn:ngm:class:transport-layer","label":"Transport Layer"},{"@id":"urn:ngm:class:network-layer","label":"Network Layer"},{"@id":"urn:ngm:class:application-layer","label":"Application Layer"}],
    "implements":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "requires":[{"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"}],
    "supports":[{"@id":"urn:ngm:class:http","label":"HTTP"},{"@id":"urn:ngm:class:dns","label":"DNS"},{"@id":"urn:ngm:class:rest-api","label":"REST API"}],
    "uses":[{"@id":"urn:ngm:class:application-layer","label":"Application Layer"}],
    "dependsOn":[{"@id":"urn:ngm:class:network-layer","label":"Network Layer"}],
    "contrastsWith":[{"@id":"urn:ngm:class:osi-model","label":"OSI Model"}],
    "relatedTo":[{"@id":"urn:ngm:class:latency","label":"Latency"},{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- TCP/IP is the layered [[Network Protocol]] suite that defines how the Internet addresses, routes, and reliably delivers data. It comprises a [[Transport Layer]], a [[Network Layer]], and an [[Application Layer]], and it is contrasted with the reference [[OSI Model]].
- ### Overview
- The suite splits networking responsibilities into layers so that each can evolve independently while presenting stable interfaces to its neighbours.
- The Internet Protocol provides connectionless, best-effort packet delivery and global addressing, while the Transmission Control Protocol adds reliability, ordering, and flow control on top.
- This division of labour, with intelligence pushed to the endpoints, is what made the Internet scalable and interoperable across diverse physical media.
- ### Mechanisms
- IP fragments data into packets, assigns source and destination addresses, and routes them hop-by-hop across the [[Network Layer]].
- TCP establishes connections, retransmits lost segments, and adapts sending rate via congestion control, exposing a reliable byte stream to applications.
- UDP offers a lightweight alternative without reliability, favoured by latency-sensitive traffic.
- Application protocols such as [[HTTP]] and [[DNS]] run atop the transport layer, while link-layer technologies carry packets over the wire.
- ### Applications
- Carrying virtually all Internet traffic, including web, email, streaming, and APIs.
- Underpinning [[REST API]] communication and service meshes.
- Enabling [[Edge Computing]] and distributed systems that span data centres.
- Network diagnostics and performance work centred on [[Latency]] and [[Bandwidth]].
- ### Relationships
- partOf:: [[Network Protocol]]
- hasPart:: [[Transport Layer]]
- hasPart:: [[Network Layer]]
- hasPart:: [[Application Layer]]
- implements:: [[Network Protocol]]
- requires:: [[Bandwidth]]
- supports:: [[HTTP]]
- supports:: [[DNS]]
- supports:: [[REST API]]
- uses:: [[Application Layer]]
- dependsOn:: [[Network Layer]]
- contrastsWith:: [[OSI Model]]
- relatedTo:: [[Latency]]
- relatedTo:: [[Edge Computing]]
- ### Provenance
- updated:: 2026-06-15
