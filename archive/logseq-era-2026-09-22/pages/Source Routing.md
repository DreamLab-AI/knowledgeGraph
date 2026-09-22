public:: true

# Source Routing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:source-routing", "@type":"Page", "title":"Source Routing", "vc:slug":"source-routing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:source-routing",
  "@type":"Class",
  "label":"Source Routing",
  "definition":"Source routing is a packet-forwarding technique in which the sender, rather than intermediate routers, specifies all or part of the path a packet must traverse, embedding the route as a list of hops within the packet itself. By moving path selection to the originator it enables explicit path control, multipath delivery, and privacy-preserving forwarding, at the cost of overhead and forwarding-table-bypass security considerations. It underpins onion-routing anonymity networks and payment-channel networks, where the sender constructs and conceals an end-to-end route across an overlay before any hop sees the full path.",
  "domain":"blockchain",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:routing","label":"Routing"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:network-layer","label":"Network Layer"}],
    "implements":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "uses":[{"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"},{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "enables":[{"@id":"urn:ngm:class:onion-routing","label":"Onion Routing"},{"@id":"urn:ngm:class:overlay-network","label":"Overlay Network"}],
    "supports":[{"@id":"urn:ngm:class:privacy","label":"Privacy"}],
    "requires":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "dependsOn":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "bridgesTo":[{"@id":"urn:ngm:class:tor","label":"Tor"},{"@id":"urn:ngm:class:overlay-network","label":"Overlay Network"}],
    "contrastsWith":[{"@id":"urn:ngm:class:routing-protocol","label":"Routing Protocol"}],
    "relatedTo":[{"@id":"urn:ngm:class:networking","label":"Networking"},{"@id":"urn:ngm:class:onion-routing","label":"Onion Routing"},{"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}]
  },
  "sameAs":[{"@id":"urn:ngm:class:explicit-path-routing","label":"Explicit Path Routing"}],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - [[Source Routing]] is a [[Routing]] technique in which the sender specifies all or part of the path a packet must take, embedding the hop list within the packet rather than relying on per-hop forwarding decisions.
  - It moves path selection to the originator, enabling explicit path control, multipath delivery, and privacy-preserving forwarding over an [[Overlay Network]].
  - It underpins [[Onion Routing]] anonymity systems such as [[Tor]] and payment-channel networks, where the sender builds and conceals an end-to-end route.

- ### Overview
  - In conventional hop-by-hop routing each router consults its own table to choose the next hop; in source routing the path is decided once, at the source, and carried with the packet.
  - Strict source routing fixes every hop; loose source routing names waypoints that must be visited while leaving intermediate routing to the network.
  - On the public internet, IP source-routing options are largely disabled by default because they bypass operator routing policy and enable spoofing and reflection attacks.
  - The technique remains central in overlay and privacy systems, where the sender's control over the full path is precisely the desired property rather than a vulnerability.

- ### Mechanisms
  - #### Path encoding
    - The route is serialised as an ordered list of hop identifiers carried in the packet header or in an encrypted onion structure.
    - Each hop reads only what it needs to forward to the next, optionally peeling a layer of encryption.
  - #### Strict vs loose
    - Strict source routing dictates the complete path; loose source routing constrains a subset of waypoints.
  - #### Privacy via layered encryption
    - In [[Onion Routing]] the source encrypts the route in nested layers so no single relay learns both the origin and the destination.
    - Sphinx-style packet formats give fixed-size, unlinkable source-routed messages used in mix and payment networks.
  - #### Overlay forwarding
    - On an [[Overlay Network]] the source computes routes from a local view of topology and liquidity, embedding them in [[Packet Switching]] units.

- ### Applications
  - #### Anonymity networks
    - [[Tor]] and mixnets use sender-constructed, layered source routes to decouple identity from destination.
  - #### Payment-channel networks
    - Lightning-style networks have the sender build the full route across channels and onion-encrypt it so intermediaries cannot see the endpoints.
  - #### Traffic engineering and overlays
    - Explicit path selection for performance, resilience, and policy across [[Overlay Network]]s and segment-routed transport.

- ### Relationships
  - subClassOf:: [[Routing]]
  - partOf:: [[Network Layer]]
  - implements:: [[Routing Protocol]]
  - uses:: [[Packet Switching]]
  - uses:: [[Network Protocol]]
  - enables:: [[Onion Routing]]
  - enables:: [[Overlay Network]]
  - supports:: [[Privacy]]
  - requires:: [[Network Protocol]]
  - dependsOn:: [[Routing Protocol]]
  - bridgesTo:: [[Tor]]
  - bridgesTo:: [[Overlay Network]]
  - contrastsWith:: [[Routing Protocol]]
  - relatedTo:: [[Networking]]
  - relatedTo:: [[Onion Routing]]
  - relatedTo:: [[Packet Switching]]

- ### Provenance
  - sources::
  - updated:: 2026-06-15
