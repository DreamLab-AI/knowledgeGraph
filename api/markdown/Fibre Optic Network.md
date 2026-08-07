public:: true

# Fibre Optic Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6d58db72e87a53c042cca683fad850e75f05ce4323671131e2d2f0a0c23754e2",
  "@type": "Page",
  "vc:slug": "fibre-optic-network",
  "title": "Fibre Optic Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:network-infrastructure", "vc:label": "Network Infrastructure"},
    {"@id": "urn:visionflow:linked:telecommunications-infrastructure", "vc:label": "Telecommunications Infrastructure"},
    {"@id": "urn:visionflow:linked:satellite-communication", "vc:label": "Satellite Communication"},
    {"@id": "urn:visionflow:linked:data-centre", "vc:label": "Data Centre"},
    {"@id": "urn:visionflow:linked:bandwidth", "vc:label": "Bandwidth"},
    {"@id": "urn:visionflow:linked:latency", "vc:label": "Latency"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fibre-optic-network",
  "@type": "Class",
  "label": "Fibre Optic Network",
  "definition": "A communications network that transmits data as pulses of light through strands of ultra-pure glass or plastic fibre, achieving terabit-class bandwidth, low attenuation over tens of kilometres, and immunity to electromagnetic interference. Fibre optic networks form the backbone of global telecommunications — submarine cables, metro rings, data-centre interconnects, and fibre-to-the-premises access — and set the bandwidth and latency envelope within which cloud, streaming, and real-time immersive applications operate.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:network-infrastructure",
    "label": "Network Infrastructure"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:telecommunications-infrastructure", "label": "Telecommunications Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:data-centre", "label": "Data Centre"},
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:satellite-communication", "label": "Satellite Communication"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bandwidth", "label": "Bandwidth"},
      {"@id": "urn:ngm:class:latency", "label": "Latency"}
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
  - "A communications network that transmits data as pulses of light through strands of ultra-pure glass or plastic fibre, achieving terabit-class bandwidth, low attenuation over tens of kilometres, and immunity to electromagnetic interference. Fibre optic networks form the backbone of global telecommunications — submarine cables, metro rings, data-centre interconnects, and fibre-to-the-premises access — and set the bandwidth and latency envelope within which cloud, streaming, and real-time immersive applications operate."

- ### Semantic Classification
  - owl-class:: infrastructure:FibreOpticNetwork
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Network Infrastructure]]
  - part-of:: [[Telecommunications Infrastructure]]
  - enables:: [[Data Centre]]
  - contrasts-with:: [[Satellite Communication]]

- ### Content

  ## Definition

  A **fibre optic network** carries information as modulated light guided by total internal reflection along hair-thin strands of glass. Because optical carriers oscillate at hundreds of terahertz, a single fibre pair can carry tens of terabits per second when dense wavelength-division multiplexing (DWDM) stacks scores of independent wavelengths onto it; because silica attenuates light by only ~0.2 dB/km at 1550 nm, spans of 80-100 km need no amplification, and erbium-doped fibre amplifiers (EDFAs) extend reach across oceans. These physics give fibre its decisive advantages over copper and radio: vastly higher [[Bandwidth]], lower loss, and complete immunity to electromagnetic interference.

  Structurally, fibre networks form the layered core of [[Telecommunications Infrastructure]]. Roughly 500 submarine cable systems carry the overwhelming majority of intercontinental traffic; terrestrial long-haul and metro rings connect cities; dedicated dark-fibre routes interconnect [[Data Centre]] campuses, where hyperscalers run their own optical backbones; and access networks bring fibre to the premises (FTTP) through passive optical network (PON) architectures that split one feeder fibre among dozens of homes. Inside facilities, the same technology scales down to metre-length transceiver links at 400 and 800 Gb/s between switches and GPU clusters.

  The contrast with [[Satellite Communication]] is complementary rather than adversarial: fibre wins overwhelmingly on capacity, cost per bit, and [[Latency]] where it can be laid (light in fibre travels at about two-thirds of c, giving London-New York round trips near 60 ms), while satellites cover the maritime, rural, and disaster-recovery cases where trenching is impossible or uneconomic. For the real-time immersive workloads in this graph — cloud rendering, volumetric video, telepresence — fibre's combination of throughput and stable low latency is what makes the application classes feasible at all.

  ## Technical Details

  - **Fibre types**: single-mode (ITU-T G.652/G.654, 9 µm core) for long haul and access; multimode (OM3-OM5, 50 µm core) for short intra-facility links.
  - **Multiplexing**: DWDM with up to ~96 channels at 50 GHz spacing in the C-band; coherent transceivers (QPSK to 64-QAM with DSP) deliver 400 Gb/s-1.2 Tb/s per wavelength.
  - **Amplification and reach**: EDFA and Raman amplification; submarine repeaters every ~60-80 km; record hollow-core fibres cut both loss and propagation delay.
  - **Access architectures**: GPON (2.5G/1.25G), XGS-PON (10G symmetric), and emerging 25G/50G-PON; point-to-point Ethernet for business services.
  - **UK context**: Openreach's FTTP build passed roughly 18 million premises by 2025 alongside altnet deployments; Project Gigabit subsidises rural coverage towards national gigabit-capable targets.
  - **Resilience**: route diversity, ring protection, and rapid optical restoration matter because a single cable cut — anchor drag on a submarine span, a dug-up duct — can sever regional connectivity.
