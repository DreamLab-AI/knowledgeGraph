public:: true

# Transmission Delay
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a0e349366f501109572b83efb9c7bc3d21c8efc16c1be24e8a4ba5499e4b236a",
  "@type": "Page",
  "vc:slug": "transmission-delay",
  "title": "Transmission Delay",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-latency",
      "vc:label": "Network Latency"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    },
    {
      "@id": "urn:visionflow:linked:propagation-delay",
      "vc:label": "Propagation Delay"
    },
    {
      "@id": "urn:visionflow:linked:bandwidth",
      "vc:label": "Bandwidth"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:transmission-delay",
  "@type": "Class",
  "label": "Transmission Delay",
  "definition": "The time required to push all of a packet's bits onto the transmission medium, calculated as packet size divided by the link's transmission rate. It is one of the four canonical components of network latency alongside propagation, processing, and queueing delay, dominates end-to-end delay on low-bandwidth links, and shrinks proportionally as link capacity increases, which is why upgrading link speed reduces this component but leaves propagation delay unchanged.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:network-latency",
    "label": "Network Latency"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:network-latency",
        "label": "Network Latency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:propagation-delay",
        "label": "Propagation Delay"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:packet-switching",
        "label": "Packet Switching"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The time required to push all of a packet's bits onto the transmission medium, calculated as packet size divided by the link's transmission rate. It is one of the four canonical components of network latency alongside propagation, processing, and queueing delay, dominates end-to-end delay on low-bandwidth links, and shrinks proportionally as link capacity increases, which is why upgrading link speed reduces this component but leaves propagation delay unchanged."

- ### Semantic Classification
  - owl-class:: infrastructure:TransmissionDelay
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Network Latency]]
  - part-of:: [[Latency]]
  - contrasts-with:: [[Propagation Delay]]
  - depends-on:: [[Bandwidth]]

- ### Content

  ## Definition

  **Transmission delay** (also called serialisation delay or store-and-forward delay) is the time a network interface takes to place an entire packet onto the physical link. For a packet of L bits sent over a link of rate R bits per second, the transmission delay is simply L/R. A 1,500-byte Ethernet frame takes 12 milliseconds to serialise onto a 1 Mbps link, 120 microseconds at 100 Mbps, and 1.2 microseconds at 10 Gbps — the delay falls linearly as capacity rises.

  It is important to distinguish transmission delay from [[Propagation Delay]], with which it is often confused. Transmission delay depends on packet size and link rate — how quickly bits can be clocked onto the wire. Propagation delay depends on distance and the signal velocity in the medium — how long a single bit takes to travel from sender to receiver. A transcontinental fibre path may have tens of milliseconds of propagation delay but negligible transmission delay per hop, whereas a congested low-rate access link exhibits the reverse. Together with processing delay at each router and variable queueing delay, these components sum to the total nodal delay that accumulates hop by hop into end-to-end [[Network Latency]].

  Because store-and-forward [[Packet Switching]] requires each router to receive a complete packet before forwarding it, transmission delay is incurred afresh at every hop along the path. This makes packet size a genuine engineering trade-off: larger packets amortise header overhead but increase per-hop serialisation time and hold-up of competing traffic.

  ## Technical Details

  - **Formula**: d_trans = L / R, where L is packet length in bits and R is link transmission rate in bits per second.
  - **Total nodal delay**: d_nodal = d_proc + d_queue + d_trans + d_prop, summed across every hop on the path.
  - **Scaling behaviour**: doubling link rate halves transmission delay; it has no effect on propagation delay, which is bounded by the speed of light in the medium (~2 × 10⁸ m/s in fibre).
  - **Where it matters**: last-mile access links, serial WAN circuits, LPWAN and satellite uplinks with modest bit rates, and real-time systems where per-hop serialisation of large frames adds jitter. On modern data-centre links at 100–800 Gbps, transmission delay of ordinary frames is measured in nanoseconds and queueing dominates instead.
  - **Mitigations**: higher link rates, smaller frames for latency-critical flows, cut-through switching (which begins forwarding after reading the header rather than the whole frame), and fragmentation-and-interleaving schemes historically used on slow serial links to stop bulk transfers delaying voice packets.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
