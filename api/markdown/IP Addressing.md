public:: true

# IP Addressing
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ip-addressing", "@type":"Page", "title":"IP Addressing", "vc:slug":"ip-addressing", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ip-addressing",
  "@type":"Class",
  "label":"IP Addressing",
  "definition":"IP addressing is the scheme by which every host and interface on an Internet Protocol network is assigned a numeric identifier used to locate and route datagrams to it. It encompasses the structure of IPv4 and IPv6 address spaces, the partition of addresses into network and host portions via subnet masks and prefixes, and the assignment mechanisms that allocate addresses to devices. Correct addressing is the precondition for routing decisions and end-to-end delivery across interconnected networks.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:internet-protocol","label":"Internet Protocol"},{"@id":"urn:ngm:class:network-infrastructure","label":"Network Infrastructure"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:internet-protocol","label":"Internet Protocol"},
      {"@id":"urn:ngm:class:tcp-ip","label":"TCP/IP"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:subnet-mask","label":"Subnet Mask"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:routing","label":"Routing"},
      {"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:dns","label":"DNS"}
    ],
    "hasPart":[
      {"@id":"urn:ngm:class:ipv4","label":"IPv4"},
      {"@id":"urn:ngm:class:ipv6","label":"IPv6"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:domain-name-system","label":"Domain Name System"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:ietf-rfc","label":"IETF RFC"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:osi-model","label":"OSI Model"},
      {"@id":"urn:ngm:class:network-communication","label":"Network Communication"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:domain-name-system","label":"Domain Name System"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:routing","label":"Routing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - IP addressing assigns numeric identifiers to interfaces on an [[Internet Protocol]] network so that [[Packet Switching]] and [[Routing]] can deliver datagrams end-to-end.
  - The scheme spans the [[IPv4]] and [[IPv6]] address spaces and partitions each address into network and host portions using a [[Subnet Mask]].
  - Addresses underpin every higher-layer service, including the [[Domain Name System]].
- ### Overview
  - An IP address is a fixed-length binary value: 32 bits in IPv4 (written as dotted decimal) and 128 bits in IPv6 (written as colon-separated hexadecimal groups).
  - The leading bits identify the network or subnet; the remaining bits identify the host within that network. The split is described by a subnet mask or a CIDR prefix length.
  - Classless Inter-Domain Routing (CIDR) replaced the legacy classful model, allowing arbitrary prefix lengths and more efficient allocation of the finite address space.
  - Addresses may be assigned statically by an administrator or dynamically via DHCP; IPv6 additionally supports stateless address autoconfiguration.
- ### Key aspects
  - Address space: IPv4 exhaustion drove adoption of network address translation and the much larger IPv6 space.
  - Hierarchy: prefix-based aggregation keeps routing tables compact across the global Internet.
  - Special ranges: private, loopback, link-local, and multicast ranges have reserved semantics.
  - Mapping: the address layer is decoupled from human-readable names resolved by the Domain Name System.
- ### Applications
  - Routing decisions at every hop are made by matching destination addresses against forwarding tables.
  - Host configuration, firewalling, and access control are expressed in terms of addresses and prefixes.
  - Service discovery and load balancing rely on stable, well-known address assignments.
- ### Relationships
  - partOf:: [[Internet Protocol]]
  - partOf:: [[TCP/IP]]
  - requires:: [[Subnet Mask]]
  - enables:: [[Routing]]
  - enables:: [[Packet Switching]]
  - dependsOn:: [[Network Protocol]]
  - uses:: [[DNS]]
  - hasPart:: [[IPv4]]
  - hasPart:: [[IPv6]]
  - supports:: [[Domain Name System]]
  - standardizedBy:: [[IETF RFC]]
  - relatedTo:: [[OSI Model]]
  - relatedTo:: [[Network Communication]]
  - contrastsWith:: [[Domain Name System]]
  - bridgesTo:: [[Routing]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
