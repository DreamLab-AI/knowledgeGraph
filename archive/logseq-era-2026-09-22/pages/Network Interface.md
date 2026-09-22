public:: true

# Network Interface
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:network-interface", "@type":"Page", "title":"Network Interface", "vc:slug":"network-interface", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:network-interface",
  "@type":"Class",
  "label":"Network Interface",
  "definition":"A network interface is the hardware or software point at which a computing device connects to a network, mediating the transmission and reception of data frames. In hardware it is realised as a network interface controller bearing a unique MAC address; in software it appears as a named, addressable endpoint that the operating system binds to a protocol stack. The interface bridges the physical and data-link layers to the network layer, allowing higher-level protocols to send and receive packets without managing the underlying medium.",
  "domain":"infrastructure",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:hardware-component","label":"Hardware Component"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:hardware-component","label":"Hardware Component"}],
    "hasPart":[{"@id":"urn:ngm:class:network-layer","label":"Network Layer"}],
    "requires":[{"@id":"urn:ngm:class:operating-system","label":"Operating System"},{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "uses":[{"@id":"urn:ngm:class:ethernet","label":"Ethernet"},{"@id":"urn:ngm:class:tcp","label":"TCP"}],
    "enables":[{"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}],
    "supports":[{"@id":"urn:ngm:class:network-protocol","label":"Network Protocol"}],
    "implements":[{"@id":"urn:ngm:class:osi-model","label":"OSI Model"}],
    "dependsOn":[{"@id":"urn:ngm:class:operating-system","label":"Operating System"}],
    "relatedTo":[{"@id":"urn:ngm:class:osi-model","label":"OSI Model"},{"@id":"urn:ngm:class:ethernet","label":"Ethernet"},{"@id":"urn:ngm:class:packet-switching","label":"Packet Switching"}],
    "bridgesTo":[{"@id":"urn:ngm:class:network-layer","label":"Network Layer"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
  - A [[Network Interface]] is the connection point between a device and a network, implemented as a [[Hardware Component]] or as a software endpoint.
  - It mediates frame transmission and reception, carrying a unique address and binding to the [[Network Protocol]] stack.
  - It bridges the physical and data-link layers up to the [[Network Layer]] in the [[OSI Model]].
- ### Overview
  - In hardware the interface is a network interface controller, with a burned-in MAC address identifying it on a local segment.
  - The operating system exposes each interface as a named, configurable object that protocols bind to.
  - The interface abstracts the transmission medium, so higher layers send packets without knowing whether the link is Ethernet, wireless or virtual.
  - Virtual interfaces extend the concept to containers, virtual machines and overlay networks.
- ### Key aspects
  - Addressing: a hardware MAC address at the link layer and one or more IP addresses at the network layer.
  - Driver mediation: the operating system driver translates between the controller and the protocol stack.
  - Layering: the interface sits across physical, data-link and network layers, presenting a uniform send/receive abstraction.
  - Configuration: speed, duplex, MTU and addressing parameters govern its behaviour.
- ### Applications
  - Connecting servers, workstations and embedded devices to wired and wireless networks.
  - Virtual networking for containers and virtual machines via software interfaces.
  - High-throughput data-centre links and network function virtualisation.
  - Multi-homing and link aggregation for redundancy and bandwidth.
- ### Relationships
  - partOf:: [[Hardware Component]]
  - hasPart:: [[Network Layer]]
  - requires:: [[Operating System]]
  - requires:: [[Network Protocol]]
  - uses:: [[Ethernet]]
  - uses:: [[TCP]]
  - enables:: [[Packet Switching]]
  - implements:: [[OSI Model]]
  - dependsOn:: [[Operating System]]
  - relatedTo:: [[Ethernet]]
  - bridgesTo:: [[Network Layer]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
