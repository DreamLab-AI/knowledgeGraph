public:: true

# Anycast Routing

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:anycast-routing", "@type":"Page", "title":"Anycast Routing", "vc:slug":"anycast-routing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:anycast-routing",
  "@type":"Class",
  "label":"Anycast Routing",
  "definition":"Anycast routing is a network addressing and routing technique in which a single IP address is advertised from multiple geographically distributed locations, and packets are delivered to whichever instance is nearest by the routing metric. It uses standard internet routing to steer each client to the closest available node, reducing latency and distributing load without client awareness. Anycast underpins resilient DNS, content delivery, and DDoS mitigation by enabling automatic failover and traffic absorption across many sites.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:routing","label":"Routing"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:ip-addressing","label":"IP Addressing"},{"@id":"urn:ngm:class:routing","label":"Routing"}],
    "requires":[{"@id":"urn:ngm:class:geographic-distribution","label":"Geographic Distribution"}],
    "supports":[{"@id":"urn:ngm:class:cdn","label":"Content Delivery Network"},{"@id":"urn:ngm:class:dns","label":"DNS"}],
    "enables":[{"@id":"urn:ngm:class:failover","label":"Failover"},{"@id":"urn:ngm:class:high-availability","label":"High Availability"}],
    "dependsOn":[{"@id":"urn:ngm:class:load-balancing","label":"Load Balancing"}],
    "bridgesTo":[{"@id":"urn:ngm:class:edge-computing","label":"Edge Computing"}],
    "relatedTo":[{"@id":"urn:ngm:class:latency","label":"Latency"},{"@id":"urn:ngm:class:load-balancer","label":"Load Balancer"},{"@id":"urn:ngm:class:infrastructure","label":"Infrastructure"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- Anycast routing advertises a single IP address from many distributed locations so packets reach the nearest instance by the [[Routing]] metric.
- It uses standard internet [[Network Routing]] and [[IP Addressing]] to steer each client to the closest node, cutting [[Latency]] without client awareness.
- It underpins resilient [[DNS]], content delivery, and DDoS mitigation through automatic failover and traffic absorption.
- ### Overview
- With anycast, the network itself selects the destination, so the same service appears at one address yet is served from wherever is closest.
- This contrasts with unicast, where an address maps to a single host, and removes the need for clients to know about replication.
- The technique relies on geographic distribution of identical nodes and consistent route advertisement across them.
- Because traffic is dispersed across many sites, anycast naturally improves resilience and absorbs volumetric attacks.
- ### Mechanisms
- Route advertisement: the same prefix is announced from multiple points of presence.
- Nearest-node selection: routers deliver packets to the topologically closest instance.
- Health-aware withdrawal: failing nodes stop advertising so traffic reroutes automatically.
- Load distribution: clients are spread across sites according to routing topology.
- Attack absorption: distributed capacity dilutes denial-of-service traffic.
- ### Applications
- Authoritative and recursive DNS deployed at global scale.
- Content delivery networks serving users from the nearest edge.
- DDoS mitigation and scrubbing services absorbing distributed traffic.
- High-availability internet services requiring transparent failover.
- ### Relationships
- uses:: [[IP Addressing]]
- uses:: [[Network Routing]]
- requires:: [[Geographic Distribution]]
- supports:: [[Content Delivery Network]]
- supports:: [[DNS]]
- enables:: [[Failover]]
- enables:: [[High Availability]]
- dependsOn:: [[Load Balancing]]
- bridgesTo:: [[Edge Computing]]
- relatedTo:: [[Latency]]
- relatedTo:: [[Load Balancer]]
- relatedTo:: [[Infrastructure]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
