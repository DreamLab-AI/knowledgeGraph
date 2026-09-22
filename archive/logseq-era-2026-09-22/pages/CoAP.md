public:: true

# CoAP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:co-ap",
  "@type": "Page",
  "vc:slug": "co-ap",
  "title": "CoAP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:co-ap",
  "@type": "Class",
  "label": "CoAP",
  "definition": "The Constrained Application Protocol (CoAP) is a specialised web transfer protocol defined in RFC 7252 (IETF, 2014) designed for use with constrained nodes and networks in the Internet of Things ecosystem. Modelled on HTTP's request-response semantics and RESTful resource model but optimised for low-power, lossy networks, CoAP uses UDP as its transport layer, features a compact binary header, supports observe (pub/sub) extensions, and includes built-in mechanisms for reliability, multicast, and asynchronous communication. CoAP is a cornerstone protocol for IoT device management and machine-to-machine communication.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:building-automation", "label": "Building Automation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:rest-api", "label": "REST API"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:http-protocol", "label": "HTTP Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - CoAP (Constrained Application Protocol) is a lightweight RESTful protocol designed for [[Embedded Systems]] and resource-constrained devices participating in the [[Internet of Things]]. It maps HTTP-style methods (GET, PUT, POST, DELETE) and response codes to a compact binary format suitable for microcontrollers with kilobytes of RAM and multi-hop, lossy wireless links (IEEE 802.15.4, 6LoWPAN). CoAP supports confirmable and non-confirmable message types, observe subscriptions for resource state monitoring, and DTLS for security over UDP.

- ### Relationships
  - CoAP serves as the application-layer protocol enabling [[Internet of Things]] deployments where [[HTTP Protocol]] overhead is prohibitive. It contrasts with [[MQTT]] in its RESTful resource model versus MQTT's topic-based publish-subscribe approach; the two protocols are often used together or selected based on communication patterns. CoAP-enabled devices feed into [[Edge Computing]] gateways that translate between CoAP and HTTP/MQTT for upstream cloud integration. [[Building Automation]] systems using standards such as BACnet/IP increasingly incorporate CoAP for smart sensor communication.

- ### Content
  - CoAP emerged from the IETF's Constrained RESTful Environments (CoRE) working group, which began work around 2010 to address the need for a web protocol suitable for the smallest classes of networked devices. RFC 7252, published in June 2014, defined the core protocol. Subsequent RFCs extended it with Observe (RFC 7641, persistent subscriptions), Block-Wise Transfers (RFC 7959, large payload fragmentation), Group Communication (RFC 7390, multicast), TCP transport (RFC 8323, for firewalled environments), and OSCORE (RFC 8613, object-level end-to-end encryption without relying on DTLS hop-by-hop security).

  - Technically, CoAP messages are 4-byte header binary structures transported over UDP, with an optional token (0–8 bytes) for request-response correlation, option fields (Uri-Path, Content-Format, Max-Age, ETag, etc.), and a payload. Confirmable (CON) messages require an acknowledgement, implementing a simple stop-and-wait reliability mechanism. Non-confirmable (NON) messages are fire-and-forget. The observe mechanism allows a CoAP client to register interest in a resource and receive asynchronous notifications on state changes without polling, significantly reducing traffic on constrained networks. DTLS 1.2/1.3 provides transport security, and OSCORE provides application-level end-to-end security across intermediaries.

  - CoAP is widely implemented in firmware libraries including libcoap (C), Californium (Java), Copper (Firefox extension for testing), and is natively supported in ARM Mbed OS, Contiki-NG, RIOT OS, and Zephyr RTOS. It is referenced by the OCF (Open Connectivity Foundation) specification, the LwM2M (Lightweight Machine to Machine) device management protocol, and the Matter protocol (which uses it internally for cloud connectivity). Real-world deployments include smart metres, HVAC sensors, industrial condition monitoring, and precision agriculture sensor nodes.

  - By 2024–2025, CoAP remains a primary IoT application protocol alongside [[MQTT]] v5, HTTP/2, and emerging candidates such as QUIC-based transports. The Matter smart home standard has brought CoAP (via Thread/IPv6 networks) into residential IoT at scale. OSCORE adoption improves security without DTLS session overhead, important for extremely constrained class-1 devices. CoAP-over-TCP and WebSocket transport bridges allow integration with cloud platforms that do not natively support UDP. Research continues on CoAP for Low-Orbit satellite IoT links (LEO constellations) where propagation delays and intermittent connectivity make its lightweight asynchronous model advantageous.

