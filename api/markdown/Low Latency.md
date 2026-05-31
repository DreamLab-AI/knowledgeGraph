public:: true
alias:: low-latency

# Low Latency
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:low-latency",
  "@type": "Page",
  "vc:slug": "low-latency",
  "title": "Low Latency",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:low-latency",
  "@type": "Class",
  "label": "Low Latency",
  "definition": "Low latency is an engineering design property characterising systems in which the time delay between an input event and the corresponding system response is minimised to a degree that satisfies real-time interaction requirements. Depending on context, low latency spans a range from sub-millisecond (high-frequency trading, industrial control) to tens of milliseconds (interactive video, XR presence), and is achieved through architectural choices including edge computing, hardware acceleration, optimised network protocols, and co-location.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:latency", "label": "Latency"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:real-time", "label": "Real Time"},
      {"@id": "urn:ngm:class:real-time-ai-inference", "label": "Real-Time AI Inference"},
      {"@id": "urn:ngm:class:extended-reality-xr", "label": "Extended Reality (XR)"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:network-latency", "label": "Network Latency"},
      {"@id": "urn:ngm:class:quality-of-service", "label": "Quality Of Service"},
      {"@id": "urn:ngm:class:low-latency-computing", "label": "Low-Latency Computing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Low Latency]] refers to the design goal and engineering discipline of minimising the elapsed time between an event (user action, sensor reading, network message) and the system's response. Latency thresholds that qualify as "low" are domain-dependent: sub-100µs in high-frequency trading systems, under 20ms for vestibulo-ocular reflex alignment in [[Extended Reality (XR)]] headsets, and under 150ms for acceptable interactive video. Achieving low latency requires holistic optimisation spanning network topology, compute placement, operating system scheduling, memory access patterns, and hardware design — making it a cross-cutting concern across [[Infrastructure|infrastructure]] stacks.

- ### Relationships
  - Low latency is a prerequisite for [[Real Time|real-time]] operation and specifically enables [[Real-Time AI Inference]] and immersive [[Extended Reality (XR)]] experiences where motion-to-photon delay must remain below perceptual thresholds. It is achieved through [[Edge Computing]] (reducing propagation distance) and [[Hardware Acceleration]] (reducing compute time). [[Network Latency]] is the primary network contributor, managed through [[Quality Of Service]] policies, and the broader field of [[Low-Latency Computing]] encompasses the full stack of optimisation techniques.

- ### Content
  - Low latency engineering emerged as a formal discipline from telecommunications and real-time control systems, where response-time guarantees were embedded in engineering standards for industrial automation and avionics. The Internet's packet-switched architecture introduced variable latency that required explicit management; the development of QoS standards (DiffServ, IntServ) and MPLS traffic engineering in the late 1990s gave network operators tools to prioritise latency-sensitive traffic. Financial markets accelerated low-latency engineering through the high-frequency trading arms race of the 2000s, driving co-location services, kernel-bypass networking (DPDK, RDMA), and FPGA-based order matching engines.

  - Technically, latency is the sum of propagation delay (physical distance / speed of light), transmission delay (packet size / link bandwidth), processing delay (compute time), and queuing delay (congestion). Each component must be addressed separately. Propagation delay is minimised by moving compute to the network edge; transmission delay by reducing payload size and using efficient serialisation formats; processing delay by hardware acceleration (GPUs, FPGAs, ASICs) and lock-free data structures; queuing delay by traffic shaping and priority scheduling. Operating systems introduce jitter through preemptive scheduling, addressed by real-time kernels (PREEMPT_RT) or busy-polling approaches that trade CPU efficiency for determinism.

  - In cloud and distributed computing, low latency is pursued through multi-access edge computing (MEC) nodes deployed within mobile network infrastructure, content delivery networks (CDNs) caching data close to users, and anycast routing that directs requests to the nearest server. WebRTC established sub-200ms end-to-end latency for browser-to-browser communications as a web standard. 5G network slicing with ultra-reliable low-latency communication (URLLC) mode targets 1ms air-interface latency for industrial and XR applications. The combination of 5G URLLC and [[Edge AI]] enables offloading compute-heavy tasks from thin XR clients to nearby servers without perceptible delay.

  - In 2024–2025 low latency is central to the feasibility of XR spatial computing and AI inference at scale. Apple Vision Pro's motion-to-photon requirement of under 12ms drove significant custom silicon investment in the R1 processor. Real-time AI inference for generative models in interactive applications is pushing inference optimisation (speculative decoding, quantisation, continuous batching) to achieve token generation rates compatible with conversational interaction. In financial markets, the frontier has moved to photonic interconnects and proximity-based regulatory arbitrage, whilst in robotics, sub-millisecond sensorimotor loops are enabling dexterous manipulation tasks previously beyond autonomous systems.

