public:: true

# Time-Sensitive Networking
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:time-sensitive-networking",
  "@type": "Page",
  "vc:slug": "time-sensitive-networking",
  "title": "Time-Sensitive Networking",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:time-sensitive-networking",
  "@type": "Class",
  "label": "Time-Sensitive Networking",
  "definition": "Time-Sensitive Networking (TSN) is a set of IEEE 802.1 standards that add deterministic, bounded-latency delivery to standard Ethernet, enabling time-critical and best-effort traffic to share the same network. TSN provides precise time synchronisation, traffic scheduling, frame preemption, and reservation mechanisms so that control-loop and audio-video data arrive within guaranteed time windows. It is foundational to industrial automation, automotive in-vehicle networks, and professional media, replacing proprietary fieldbuses with converged standard Ethernet.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:clock-synchronization", "label": "Clock Synchronization"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:interoperability", "label": "Interoperability"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:networking-standard", "label": "Networking Standard"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Time-Sensitive Networking is a suite of IEEE 802.1 standards that give standard Ethernet deterministic, bounded-latency delivery, letting time-critical control traffic coexist with best-effort data on one network.

- ### Relationships
  - Time-Sensitive Networking is a subclass of [[Network Protocol]] and uses precise [[Clock Synchronization]] as the basis for coordinated scheduling. It enables [[Interoperability]] by converging diverse traffic onto standard Ethernet, and relates to the [[Networking Standard]] and [[Communication Protocol]] families it extends.

- ### Content
  - Standard Ethernet is non-deterministic: frames are delivered as fast as possible but with no guarantee on worst-case latency, because congestion and queueing can delay any packet unpredictably. For office traffic this is fine, but control systems — a robot arm, an engine, a power inverter — require that command and feedback frames arrive within a hard, bounded time. Historically this forced industries to use separate proprietary fieldbuses alongside Ethernet, raising cost and integration complexity.

  - TSN closes the determinism gap with a coordinated set of mechanisms. Precise time synchronisation (IEEE 802.1AS, a profile of PTP) gives every device a shared, sub-microsecond clock. Time-aware scheduling (802.1Qbv) opens and closes transmission gates on that shared clock so time-critical frames traverse the network in pre-allocated windows free of contention. Frame preemption (802.1Qbu) lets an urgent frame interrupt a long best-effort frame already in transit, and stream reservation guarantees bandwidth for registered flows.

  - The strategic value is convergence. By making one standard Ethernet fabric carry deterministic control traffic, ordinary IT traffic, and high-bandwidth media simultaneously, TSN eliminates parallel networks and unlocks the economics and tooling of commodity Ethernet for operational technology. This convergence is a precondition for tightly integrating shop-floor control systems with higher-level analytics and cloud connectivity in industrial digitalisation.

  - TSN underpins several demanding domains. In factory automation it carries motion-control and safety traffic; in vehicles it forms the backbone connecting cameras, sensors, and control units for advanced driver assistance; and in professional audio-video it synchronises media across many devices. Because it is a standards-based, vendor-neutral approach building on ubiquitous Ethernet, TSN is increasingly the default choice wherever deterministic timing and high bandwidth must coexist with broad interoperability.
