public:: true

# Wide Area Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3daf054f171a351ec0b402052a726de47b38bc6902630e7ccd3d6cedc56e0d4d",
  "@type": "Page",
  "vc:slug": "wide-area-network",
  "title": "Wide Area Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:networking-infrastructure", "vc:label": "Networking Infrastructure"},
    {"@id": "urn:visionflow:linked:local-area-network", "vc:label": "Local Area Network"},
    {"@id": "urn:visionflow:linked:software-defined-networking", "vc:label": "Software-Defined Networking"},
    {"@id": "urn:visionflow:linked:virtual-private-network", "vc:label": "Virtual Private Network"},
    {"@id": "urn:visionflow:linked:telecommunications", "vc:label": "Telecommunications"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wide-area-network",
  "@type": "Class",
  "label": "Wide Area Network",
  "definition": "A wide area network (WAN) is a telecommunications network that interconnects sites across large geographic distances — cities, countries, or continents — typically by carrying traffic over links leased from or operated by carriers rather than infrastructure the user owns end to end. WANs join local area networks into a single reachable whole using technologies ranging from leased lines, MPLS, and carrier Ethernet to broadband internet, cellular, and satellite, with the internet itself the largest example, and they trade the high bandwidth and low latency of the LAN for reach, at recurring circuit cost.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:networking-infrastructure",
    "label": "Networking Infrastructure"
  },
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:local-area-network", "label": "Local Area Network"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:local-area-network", "label": "Local Area Network"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:virtual-private-network", "label": "Virtual Private Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:software-defined-networking", "label": "Software-Defined Networking"},
      {"@id": "urn:ngm:class:telecommunications", "label": "Telecommunications"}
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
  - "A wide area network (WAN) is a telecommunications network that interconnects sites across large geographic distances — cities, countries, or continents — typically by carrying traffic over links leased from or operated by carriers rather than infrastructure the user owns end to end. WANs join local area networks into a single reachable whole using technologies ranging from leased lines, MPLS, and carrier Ethernet to broadband internet, cellular, and satellite, with the internet itself the largest example, and they trade the high bandwidth and low latency of the LAN for reach, at recurring circuit cost."

- ### Semantic Classification
  - owl-class:: infrastructure:WideAreaNetwork
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Networking Infrastructure]]
  - has-part:: [[Local Area Network]]
  - uses:: [[Virtual Private Network]]
  - related-to:: [[Software-Defined Networking]]

- ### Content

  ## Definition

  A **wide area network** spans the distances a [[Local Area Network]] cannot: between buildings in different cities, national branch estates, continental data-centre pairs, and ultimately the whole planet. The defining boundary is administrative and economic as much as geographic — within the LAN an organisation owns its cabling and switches outright, but to cross public rights of way it must ride infrastructure operated by carriers, so WAN capacity is leased by the month and priced by bandwidth and distance. The internet is the WAN of WANs: tens of thousands of autonomous systems stitched together by BGP peering and transit into a single global reachability fabric, and every enterprise WAN today either supplements or rides upon it.

  The technology stack has turned over repeatedly. Point-to-point leased lines (T1/E1) and circuit technologies (X.25, Frame Relay, ATM) gave way in the 2000s to MPLS VPN services, in which a carrier's label-switched core presents each customer with a private any-to-any routed network with contractual latency, loss, and availability SLAs — still the benchmark for predictable enterprise connectivity. Alongside sit carrier Ethernet (metro E-Line/E-LAN services), dark fibre and DWDM waves for those who want to run their own optics, and, at the access edge, broadband, DOCSIS, 4G/5G fixed wireless, and LEO satellite (Starlink) — the last two having made usable WAN access nearly location-independent. Site-to-site [[Virtual Private Network]] tunnels (IPsec, WireGuard) overlay private address space and encryption on any of these substrates.

  Physics disciplines every WAN design: [[Telecommunications]] links are constrained by the speed of light in fibre (~5 µs per kilometre, so ~60–70 ms round-trip London–New York before queueing), making latency — not bandwidth — the binding constraint at distance. This drives content delivery networks, regional application replicas, TCP congestion-control evolution (BBR), and the general principle of moving computation towards users rather than data across oceans.

  ## Current Landscape

  The enterprise WAN has been remade twice in a decade. SD-WAN — [[Software-Defined Networking]] applied to the branch edge — replaces static routing over a single MPLS circuit with centrally orchestrated overlays that measure loss, latency, and jitter across multiple underlays (MPLS, broadband, 5G) per application and steer traffic accordingly, cutting cost and lifting cloud-application performance; it is now the default branch architecture. The second remake is SASE/SSE, which fuses SD-WAN with cloud-delivered security (secure web gateway, CASB, zero-trust network access) so that the security perimeter follows users and workloads rather than sites. Meanwhile hyperscalers operate private global backbones that increasingly carry enterprise inter-region traffic (cloud WAN offerings), and 400G/800G coherent optics keep the underlying carrier economics on their long deflationary curve. The WAN's centre of gravity has shifted accordingly: from connecting branches to a head office, to connecting everyone to the cloud.

  Recent market data underlines the pace of this shift. Dell'Oro Group reported the SASE market up 22% year-on-year in Q2 2025 to $2.7bn — a third consecutive quarter of accelerating growth — driven by enterprises upgrading to "AI-ready" branch architectures; within that, SD-WAN rose 27% and SSE 19%, and vendors offering both now generate 84% of SASE revenue. Gartner projected that by 2026 around 60% of new SD-WAN purchases would be part of a single-vendor SASE offering, up from 15% in 2022, and the SSE (security) half of SASE is growing at roughly twice the rate of the SD-WAN half. Consolidation continues via acquisition — Broadcom (VeloCloud), Cisco, Fortinet, Palo Alto Networks, and Zscaler lead the field — while the legacy access-router market fell ~15% as traffic migrated to SD-WAN. Analyst forecasts put the SASE market at $16–25bn by 2027–2029.

  **Sources**:
  - https://www.delloro.com/news/ai-ready-sase-branch-architectures-push-2q-2025-revenue-up-22-percent-to-2-7-b/
  - https://www.fierce-network.com/cloud/gartner-analysis-forces-reshaping-sd-wan-landscape
  - https://www.analysysmason.com/research/content/short-reports/sdwan-vendor-partnerships-ren01/
