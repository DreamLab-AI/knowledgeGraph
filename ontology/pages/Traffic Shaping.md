public:: true

# Traffic Shaping
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5d600d60a8bf4c6230a6129af554400685b84dae4910228c10a581a9d153e124",
  "@type": "Page",
  "vc:slug": "traffic-shaping",
  "title": "Traffic Shaping",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:traffic-management",
      "vc:label": "Traffic Management"
    },
    {
      "@id": "urn:visionflow:linked:quality-of-service",
      "vc:label": "Quality Of Service"
    },
    {
      "@id": "urn:visionflow:linked:congestion-control",
      "vc:label": "Congestion Control"
    },
    {
      "@id": "urn:visionflow:linked:rate-limiting",
      "vc:label": "Rate Limiting"
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
  "@id": "urn:ngm:class:traffic-shaping",
  "@type": "Class",
  "label": "Traffic Shaping",
  "definition": "A network traffic management technique that regulates the rate and burstiness of outgoing packet flows by buffering packets and releasing them according to a configured profile, classically implemented with token bucket or leaky bucket algorithms. By smoothing bursts and holding flows to contracted rates, shaping delays rather than drops excess traffic, enforcing bandwidth allocations and protecting latency-sensitive classes as a core mechanism of quality-of-service policy at network edges.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:traffic-management",
    "label": "Traffic Management"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:congestion-control",
        "label": "Congestion Control"
      },
      {
        "@id": "urn:ngm:class:rate-limiting",
        "label": "Rate Limiting"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      }
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
  - "A network traffic management technique that regulates the rate and burstiness of outgoing packet flows by buffering packets and releasing them according to a configured profile, classically implemented with token bucket or leaky bucket algorithms. By smoothing bursts and holding flows to contracted rates, shaping delays rather than drops excess traffic, enforcing bandwidth allocations and protecting latency-sensitive classes as a core mechanism of quality-of-service policy at network edges."

- ### Semantic Classification
  - owl-class:: infrastructure:TrafficShaping
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Traffic Management]]
  - enables:: [[Quality Of Service]]
  - contrasts-with:: [[Congestion Control]], [[Rate Limiting]]
  - related-to:: [[Bandwidth]]

- ### Content

  ## Definition

  **Traffic shaping** controls when packets leave an interface. Traffic that arrives faster than a configured profile allows is queued and released on schedule rather than forwarded immediately, converting a bursty arrival pattern into a smooth departure pattern that conforms to a target rate. The canonical mechanisms are the **token bucket** — tokens accumulate at the committed rate up to a burst budget, and each departing packet spends tokens, allowing short bursts while bounding the long-term average — and the **leaky bucket**, which drains the queue at a strictly constant rate.

  The essential contrast is with **policing**, the other half of [[Rate Limiting]]: a policer drops or re-marks non-conformant packets on the spot, while a shaper delays them, trading added latency and buffer memory for far fewer losses and much friendlier interaction with TCP, which reacts badly to bursts of drops. Shaping is likewise distinct from [[Congestion Control]]: shaping is *imposed by the network operator* at an interface according to policy, whereas congestion control is the *end hosts'* distributed adaptation to whatever capacity the path currently offers — the two interact, since a shaper's queue is exactly the signal that host algorithms such as Cubic or BBR probe against.

  Operationally, shaping is where [[Quality Of Service]] policy meets the wire. Classified traffic is fed into per-class shapers inside hierarchical schedulers, so a site's contracted [[Bandwidth]] can be subdivided — voice protected, bulk backup capped — and so an enterprise egress can be shaped just below a carrier's policed committed information rate, keeping drops at the provider's edge near zero.

  ## Technical Details

  - **Algorithms and disciplines**: token bucket (RFC 2697 single-rate and RFC 2698 two-rate three-colour markers define conformance), leaky bucket (ATM's GCRA ancestry), and hierarchical schedulers — Linux tc's HTB, HFSC, and CBQ — that nest per-class shapers under an interface-level rate.
  - **Modern queue management**: naive deep shaping buffers cause bufferbloat; contemporary practice pairs shaping with AQM and flow queuing — fq_codel and CAKE shape to just under link rate while keeping induced latency in single-digit milliseconds, standard in OpenWrt-class SQM.
  - **Deployment points**: enterprise WAN edges (shaping to sub-line-rate MPLS/DIA contracts), ISP broadband aggregation, mobile cores (per-subscriber shaping via PCRF/PCF policy), datacentre hypervisors and NIC hardware shapers for tenant isolation, and SD-WAN appliances doing per-application shaping.
  - **Traffic engineering context**: shaping conditions traffic to match contracts (SLA conformance) and is often combined with marking (DSCP), policing at trust boundaries, and scheduling; in carrier ATM/Frame Relay heritage this is "traffic conditioning" per the DiffServ architecture (RFC 2475).
  - **Controversies**: application-level shaping by ISPs (throttling peer-to-peer or video) sits at the centre of net-neutrality regulation, which typically permits application-agnostic congestion management while restricting discriminatory shaping.

  ## Current Landscape

  - **CAKE is the modern all-in-one shaper**: Common Applications Kept Enhanced folds shaping, active queue management, DiffServ handling and flow/host fairness (dual-dsthost, triple-isolate) into a single qdisc — the rollup of years of htb+fq_codel SQM-script experience — and now has official Ubuntu Server documentation and is standard in OpenWrt-class SQM.
  - **fq_codel is the default**: most modern Linux distributions set `net.core.default_qdisc = fq_codel`; `systemd-networkd` exposes declarative `[CAKE]` configuration, removing fragile `tc` post-up scripts.
  - **The "95% rule" fixes bufferbloat**: shaping egress (and ingress via an IFB redirect) to roughly 90-95% of the provisioned link rate moves the bottleneck queue under your own AQM control, holding induced latency to single-digit milliseconds under load — verified via bufferbloat grading tests.
  - **Naive deep shaping is the anti-pattern**: large FIFO shaper buffers cause bufferbloat, so contemporary practice always pairs the shaper with flow-queuing AQM rather than buffering alone.

  **Sources**:
  - https://ubuntu.com/server/docs/how-to/networking/traffic-shaping-tc-cake/
  - https://www.bufferbloat.net/projects/codel/wiki/Cake/
  - https://www.bufferbloat.net/projects/codel/wiki/CakeTechnical/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
