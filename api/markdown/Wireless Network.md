public:: true

# Wireless Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ac593f237a4f64c485c2f9a73f96799a1cdd3ebf7d5b068ffdccce99861fa094",
  "@type": "Page",
  "vc:slug": "wireless-network",
  "title": "Wireless Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:networking", "vc:label": "Networking"},
    {"@id": "urn:visionflow:linked:mesh-network", "vc:label": "Mesh Network"},
    {"@id": "urn:visionflow:linked:spectrum-allocation", "vc:label": "Spectrum Allocation"},
    {"@id": "urn:visionflow:linked:smart-home", "vc:label": "Smart Home"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wireless-network",
  "@type": "Class",
  "label": "Wireless Network",
  "definition": "A communication network in which nodes exchange data over radio, infrared, or other electromagnetic links rather than physical cabling, spanning technologies from short-range personal-area protocols such as Bluetooth and Zigbee, through Wi-Fi local-area networks, to cellular and satellite systems covering entire regions. Wireless networks depend on regulated spectrum allocation to avoid interference, employ modulation, coding, and medium-access schemes to share the channel, and trade bandwidth, range, power consumption, and mobility against one another. They are the connective substrate for mobile computing, smart-home devices, mesh deployments, and the Internet of Things.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:networking", "label": "Networking"},
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:mesh-network", "label": "Mesh Network"},
      {"@id": "urn:ngm:class:smart-home", "label": "Smart Home"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:spectrum-allocation", "label": "Spectrum Allocation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:wireless-communication", "label": "Wireless Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:wi-fi", "label": "Wi-Fi"},
      {"@id": "urn:ngm:class:5-g", "label": "5G"},
      {"@id": "urn:ngm:class:satellite-communication", "label": "Satellite Communication"}
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
  - "A communication network in which nodes exchange data over radio, infrared, or other electromagnetic links rather than physical cabling, spanning technologies from short-range personal-area protocols such as Bluetooth and Zigbee, through Wi-Fi local-area networks, to cellular and satellite systems covering entire regions. Wireless networks depend on regulated spectrum allocation to avoid interference, employ modulation, coding, and medium-access schemes to share the channel, and trade bandwidth, range, power consumption, and mobility against one another. They are the connective substrate for mobile computing, smart-home devices, mesh deployments, and the Internet of Things."

- ### Semantic Classification
  - owl-class:: infrastructure:WirelessNetwork
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Networking]]
  - enables:: [[Mesh Network]]
  - depends-on:: [[Spectrum Allocation]]
  - related-to:: [[Wi-Fi]]

- ### Content

  ## Definition

  A **wireless network** replaces the copper and fibre of wired infrastructure with electromagnetic propagation, letting nodes join, move, and leave without physical reconfiguration. The family is usually classified by range: wireless personal-area networks (Bluetooth, Zigbee, Thread) span metres; wireless local-area networks (Wi-Fi, IEEE 802.11) span buildings; cellular networks (4G, [[5G]]) span cities and countries; and [[Satellite Communication]] extends coverage to oceans, aircraft, and remote regions beyond terrestrial reach.

  Because the radio channel is a shared, noisy, and finite medium, wireless networking is as much a regulatory discipline as an engineering one. [[Spectrum Allocation]] by national regulators and the ITU determines which bands a technology may occupy and at what power; within those bands, medium-access control schemes (CSMA/CA, OFDMA, TDMA) arbitrate between competing transmitters, while modulation and error-correction coding squeeze capacity from the available bandwidth under fading and interference. Every design trades throughput, latency, range, power draw, and device cost — the reason low-power protocols like Zigbee coexist with gigabit Wi-Fi rather than being displaced by it.

  Wireless links are the enabling substrate for topologies and applications throughout this graph: [[Mesh Network]] deployments rely on multi-hop radio links to self-organise and self-heal, and the [[Smart Home]] stitches together sensors, actuators, and hubs almost entirely over wireless protocols.

  ## Technical Details

  - **Layered structure**: wireless standards mostly redefine the physical and data-link layers (PHY/MAC) and reuse the upper layers of the Internet stack; IP runs unchanged over Wi-Fi, cellular, or satellite bearers.
  - **Key impairments**: path loss, multipath fading, shadowing, co-channel interference, and the hidden-terminal problem — countered with MIMO antennas, beamforming, adaptive modulation, and retransmission schemes.
  - **Contemporary direction**: Wi-Fi 7 (802.11be) brings multi-link operation and 4096-QAM; 5G-Advanced and early 6G research push into millimetre-wave and sub-terahertz bands; low-Earth-orbit constellations blur the line between cellular and satellite service. Unlicensed-band IoT protocols (LoRaWAN, Thread/Matter) continue to expand the low-power end of the spectrum.

  ## Current Landscape

  - **Wi-Fi 7 formally published**: IEEE published the 802.11be (Extremely High Throughput) amendment on 22 July 2025, completing the normative definition phase; the Wi-Fi Alliance had run certification from early 2024 on draft specs. Its headline features are Multi-Link Operation (aggregating 2.4/5/6 GHz), 320 MHz channels in 6 GHz, 4096-QAM, and enhanced OFDMA.
  - **Adoption still early but accelerating**: global Speedtest data (Ookla, Q1 2026) shows Wi-Fi 7 at under 2% of samples worldwide, though US adoption reached ~7.2%, up roughly 300% year-on-year; Singapore leads globally at ~25% of users. AP shipments are projected to rise from 26.3m units (2024) to 66.5m (2025) and ~118m (2026).
  - **6 GHz band going mainstream**: unlicensed 6 GHz usage in the US jumped 62% year-on-year to 13.8% of Wi-Fi samples by Q1 2026, though 5 GHz remains the global workhorse at ~60% of connections.
  - **Wi-Fi 8 (802.11bn, Ultra High Reliability)** consolidated its first complete draft (D1.0) in 2025 with comment resolution under way; final publication is projected around 2028, with first chipsets already announced and prototype APs expected at MWC 2026.
  - **6G**: 3GPP Release 19 reached functional freeze while Release 20 initiated 6G study items (ISAC, AI/ML-native design, FR3 7–24 GHz spectrum); normative 6G work is expected to begin in Release 21, targeting the IMT-2030 submission window.

  **Sources**:
  - https://ofinno.com/standards-readout/2025-retrospective-on-cellular-wi-fi-and-video-compression-standards-and-what-were-watching-in-2026/
  - https://techblog.comsoc.org/2026/08/05/ookla-u-s-dominates-global-wifi-7-while-adoption-grew-300-by-q1-2026/
  - https://www.advanced-television.com/2026/06/08/report-wi-fi-7-remains-nascent-in-most-markets/

- ### Provenance
  - sources:: https://ofinno.com/standards-readout/2025-retrospective-on-cellular-wi-fi-and-video-compression-standards-and-what-were-watching-in-2026/
  - migration-date:: 2026-08-06T00:00:00Z
  - research-augmented:: 2026-08-07T00:00:00Z
