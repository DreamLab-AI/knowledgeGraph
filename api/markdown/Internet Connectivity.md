public:: true

# Internet Connectivity

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:internet-connectivity", "@type":"Page", "title":"Internet Connectivity", "vc:slug":"internet-connectivity", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:internet-connectivity",
  "@type":"Class",
  "label":"Internet Connectivity",
  "definition":"Internet connectivity is the capability of a device or network to exchange data with the global Internet, established through physical or wireless access links and the protocol stack that routes packets between endpoints. It depends on addressing, name resolution, and routing infrastructure provided by access and transit providers. Connectivity is characterised by attributes such as bandwidth, latency, reliability, and reachability, all of which shape the performance of applications that rely on it.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:network-connectivity","label":"Network Connectivity"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"},{"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}],
    "enables":[{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}],
    "dependsOn":[{"@id":"urn:ngm:class:network-infrastructure","label":"Network Infrastructure"},{"@id":"urn:ngm:class:dns","label":"DNS"}],
    "uses":[{"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}],
    "implements":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "supports":[{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}],
    "hasPart":[{"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},{"@id":"urn:ngm:class:latency","label":"Latency"}],
    "bridgesTo":[{"@id":"urn:ngm:class:network-infrastructure","label":"Network Infrastructure"}],
    "relatedTo":[{"@id":"urn:ngm:class:bandwidth","label":"Bandwidth"},{"@id":"urn:ngm:class:latency","label":"Latency"},{"@id":"urn:ngm:class:dns","label":"DNS"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Internet connectivity is the ability to reach the global Internet via an access link and the [[TCP/IP]] protocol stack. It rests on [[Network Infrastructure]], [[DNS]] name resolution, and a [[Network Protocol]] suite, and is measured by [[Bandwidth]], [[Latency]], and reliability.
- ### Overview
- Connectivity begins with a physical or wireless access link that attaches a device to a provider's network, which in turn interconnects with the wider Internet through transit and peering.
- Reaching arbitrary endpoints requires globally routable addressing, name resolution to translate human-readable names to addresses, and routing to forward packets along a viable path.
- The quality of connectivity is described by throughput, round-trip delay, jitter, packet loss, and availability, each of which bounds what applications can do.
- ### Key aspects
- Access links span wired technologies and wireless and mobile radio links, each with distinct capacity and reliability profiles.
- Addressing and name resolution allow endpoints to be identified and located across administrative boundaries.
- Routing infrastructure operated by access and transit providers forwards traffic and adapts to topology changes and failures.
- Performance metrics such as bandwidth and latency determine the feasibility of latency-sensitive and high-throughput workloads.
- ### Applications
- Delivering web, streaming, and cloud services to end users.
- Enabling edge and distributed computing that offloads work between devices and remote infrastructure.
- Supporting machine-to-machine and Internet-of-things telemetry at scale.
- Underpinning remote work, collaboration, and real-time communication.
- ### Relationships
- requires:: [[Network Protocol]]
- requires:: [[TCP/IP]]
- enables:: [[Edge Computing]]
- dependsOn:: [[Network Infrastructure]]
- dependsOn:: [[DNS]]
- uses:: [[TCP/IP]]
- implements:: [[Network Protocol]]
- supports:: [[Edge Computing]]
- hasPart:: [[Bandwidth]]
- hasPart:: [[Latency]]
- bridgesTo:: [[Network Infrastructure]]
- relatedTo:: [[Bandwidth]]
- relatedTo:: [[Latency]]
- relatedTo:: [[DNS]]
- ### Provenance
- updated:: 2026-06-15
