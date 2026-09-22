public:: true

# Jitter
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:16c7dc721bc2a15a1c933bd9aad8edd44a36d2bb20a3391337e268eb5895cea0",
  "@type": "Page",
  "vc:slug": "jitter",
  "title": "Jitter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:network-performance-metrics", "vc:label": "Network Performance Metrics"},
    {"@id": "urn:visionflow:linked:latency", "vc:label": "Latency"},
    {"@id": "urn:visionflow:linked:propagation-delay", "vc:label": "Propagation Delay"},
    {"@id": "urn:visionflow:linked:quality-of-service", "vc:label": "Quality Of Service"},
    {"@id": "urn:visionflow:linked:real-time-communication", "vc:label": "Real-Time Communication"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:jitter",
  "@type": "Class",
  "label": "Jitter",
  "definition": "Jitter is the variation in a signal's timing from its ideal or expected schedule — in packet networks, the variability of one-way delay between successive packets of a flow (packet delay variation, RFC 3393/5481), and in digital electronics, the deviation of clock edges from their nominal instants. Where latency measures how late data arrives, jitter measures how inconsistently it arrives; it is caused by queueing, scheduling, and route changes, degrades real-time audio, video, and control traffic, and is absorbed at receivers by de-jitter buffers at the price of added delay.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:network-performance-metrics",
    "label": "Network Performance Metrics"
  },
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:latency", "label": "Latency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:propagation-delay", "label": "Propagation Delay"},
      {"@id": "urn:ngm:class:quality-of-service", "label": "Quality of Service"},
      {"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "Jitter is the variation in a signal's timing from its ideal or expected schedule — in packet networks, the variability of one-way delay between successive packets of a flow (packet delay variation, RFC 3393/5481), and in digital electronics, the deviation of clock edges from their nominal instants. Where latency measures how late data arrives, jitter measures how inconsistently it arrives; it is caused by queueing, scheduling, and route changes, degrades real-time audio, video, and control traffic, and is absorbed at receivers by de-jitter buffers at the price of added delay."

- ### Semantic Classification
  - owl-class:: infrastructure:Jitter
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Network Performance Metrics]]
  - contrasts-with:: [[Latency]]
  - related-to:: [[Propagation Delay]]
  - related-to:: [[Quality Of Service]]

- ### Content

  ## Definition

  **Jitter** is timing inconsistency. A network path or a clock that delivered every packet or edge exactly on schedule would have zero jitter regardless of how large its fixed delay was; jitter is the *second-order* statistic — the spread of delays around their expectation — and this is exactly what distinguishes it from [[Latency]]. A satellite link may have 600 ms of latency and almost no jitter (fine for a file transfer, workable for conversation with discipline), while a congested Wi-Fi link may average 20 ms but swing between 5 ms and 200 ms, which is far more destructive to interactive traffic. The fixed components of delay — [[Propagation Delay]], serialisation, minimal processing — set the latency floor; jitter arises almost entirely from the variable components: queue depth fluctuating with cross-traffic, scheduler behaviour, route flaps, retransmissions, and wireless medium contention.

  In IP networks the measured quantity is formally *packet delay variation*. RFC 3393 defines the IP Delay Variation metric (differences in one-way delay between selected packet pairs) and RFC 5481 compares the two practical formulations: inter-packet delay variation (delta between consecutive packets) and packet delay variation relative to the minimum-delay packet. RTP receivers estimate jitter continuously with the RFC 3550 exponentially smoothed mean-deviation formula, which is what appears in RTCP reports and VoIP monitoring dashboards. Typical engineering targets treat under 20–30 ms jitter as acceptable for voice; VoIP, video conferencing, cloud gaming, and other [[Real-Time Communication]] degrade audibly and visibly beyond that.

  The universal remedy is buffering: a de-jitter buffer at the receiver holds packets briefly and releases them at a steady cadence, converting delay variation into a small amount of extra fixed delay (and discarding packets that arrive too late). Adaptive jitter buffers resize themselves against measured variation, trading lateness loss against added latency. On the network side, [[Quality Of Service]] mechanisms attack the cause rather than the symptom: priority queueing and DiffServ expedited forwarding keep real-time packets out of deep queues, traffic shaping smooths bursts, and modern queue management (fq_codel, CAKE) suppresses the bufferbloat that is the dominant jitter source on consumer links. Where bounded jitter must be guaranteed rather than statistically encouraged — motion control, audio-video bridging, fronthaul — Time-Sensitive Networking schedules transmission slots so that delay variation is bounded by design.

  ## Technical Details

  The same concept, at nanosecond scale, governs digital electronics: clock jitter is the deviation of clock edges from ideal instants, decomposed into random jitter (Gaussian, thermal in origin, quoted as RMS) and deterministic jitter (bounded — periodic coupling, inter-symbol interference, duty-cycle distortion), combined in eye-diagram and bathtub-curve analysis to predict bit-error rates in serial links such as PCIe and SerDes; phase noise is its frequency-domain expression. In sampling systems, aperture jitter limits the achievable SNR of ADCs (SNR ≤ −20·log₁₀(2π·f·σⱼ)), and in synchronisation hierarchies (SyncE, PTP) jitter and wander budgets are allocated per ITU-T G.810x recommendations. Across all these domains the invariant holds: average timing tells you throughput and responsiveness; timing *variation* tells you whether real-time behaviour is possible at all.

  ## Current Landscape

  - The foundational IETF definitions remain stable: **RFC 3393** (November 2002) defines the IP Packet Delay Variation (Type-P-One-way-ipdv) metric, and **RFC 5481** (March 2009) is the applicability statement distinguishing Inter-Packet Delay Variation (IPDV, relative to the previous packet, as used by RTP) from Packet Delay Variation (PDV, relative to the minimum-delay packet, always non-negative). RFC 3393 deliberately avoids the ambiguous word "jitter".
  - **RTP/RTCP interarrival jitter** is still computed with the smoothed mean-deviation estimator of **RFC 3550** §6.4.1, `J(i) = J(i-1) + (|D(i-1,i)| - J(i-1))/16`, which is what appears in RTCP receiver reports and VoIP/video monitoring dashboards.
  - The dominant jitter source on consumer links — bufferbloat — is attacked by modern active-queue-management schemes (fq_codel, CAKE), while **Time-Sensitive Networking** (IEEE 802.1 TSN) and 5G fronthaul provide bounded-by-design delay variation where statistical smoothing is insufficient (motion control, audio-video bridging).
  - ITU-T Y.1540 continues to standardise the PDV parameter for IP transfer performance, keeping IETF and ITU-T terminology aligned.

  **Sources**:
  - https://www.rfc-editor.org/info/rfc3393/
  - https://www.rfc-editor.org/info/rfc5481/
  - https://www.ietf.org/rfc/rfc3550.txt
  - https://en.wikipedia.org/wiki/Packet_delay_variation
