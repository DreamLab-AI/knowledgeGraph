public:: true

# Wireless Radio
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wireless-radio",
  "@type": "Page",
  "vc:slug": "wireless-radio",
  "title": "Wireless Radio",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wireless-radio",
  "@type": "Class",
  "label": "Wireless Radio",
  "definition": "Wireless radio refers to the technology and systems that transmit and receive information using electromagnetic waves propagated through free space without physical conductors, encompassing the hardware, protocols, modulation schemes, and spectrum management practices that enable wireless communication across a range of frequencies from kilohertz to millimetre-wave bands. It is the physical-layer foundation of all wireless networking standards including cellular, Wi-Fi, Bluetooth, and satellite communications.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:telecommunications", "label": "Telecommunications"}
  ],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:radio-access-network", "label": "Radio Access Network"},
      {"@id": "urn:ngm:class:wireless-connectivity", "label": "Wireless Connectivity"},
      {"@id": "urn:ngm:class:antenna-array", "label": "Antenna Array"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:telecommunications-infrastructure", "label": "Telecommunications Infrastructure"},
      {"@id": "urn:ngm:class:wi-fi", "label": "Wi-Fi"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:radio-transceiver", "label": "Radio Transceiver"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  Wireless radio technology uses modulated electromagnetic waves to transmit information across free space, encompassing the transceivers, antennas, modulation schemes, and spectrum management frameworks that underpin all wireless [[Telecommunications]] from cellular networks to satellite links.

- ### Relationships
  Wireless radio is a specialisation of [[Telecommunications]] and provides the physical-layer substrate for [[Radio Access Network]] systems that connect user devices to network infrastructure. It relies on [[Radio Transceiver]] hardware for signal generation and reception, uses [[Antenna Array]] designs for beamforming and MIMO, and enables both [[Telecommunications Infrastructure]] at scale and short-range standards such as [[Wi-Fi]]. [[Wireless Connectivity]] is the system-level capability enabled by wireless radio technology.

- ### Content
  - Wireless radio communication began with Hertz's laboratory demonstrations of electromagnetic wave propagation in 1887-1888, building on Maxwell's theoretical predictions. Marconi's transatlantic transmission in 1901 established its practical potential, and commercial radio broadcasting began in the 1920s. Military requirements during the Second World War drove rapid advances in radar, frequency hopping, and spread-spectrum modulation. The post-war decades saw the development of microwave links, satellite communication, and eventually the cellular networks that began commercial operation in the 1980s. Each generation of mobile standards (1G through 5G) represented advances in spectrum efficiency, capacity, and latency.
  - Wireless radio systems operate by modulating a carrier signal—varying its amplitude, frequency, or phase—to encode information, then transmitting it as an electromagnetic wave from an antenna. Receivers detect the wave and demodulate it to recover the information. Modern systems use sophisticated techniques including orthogonal frequency-division multiplexing (OFDM) to divide spectrum into many narrowband subcarriers for resilience to multipath fading, multiple-input multiple-output (MIMO) antenna configurations to multiply channel capacity through spatial multiplexing, and adaptive beamforming to concentrate radiated power towards intended receivers. Software-defined radio (SDR) platforms implement radio functions in software on programmable hardware, enabling flexible protocol support and rapid prototyping.
  - Wireless radio is the enabling technology for mobile communications, Wi-Fi networking, IoT sensor networks, GPS positioning, radar sensing, and satellite broadband. In industrial IoT contexts, low-power wide-area radio protocols (LoRa, Sigfox, NB-IoT) connect billions of sensors across kilometres with years of battery life. In robotics, wireless radio links are the telemetry and control channels for UAVs, autonomous vehicles, and collaborative robot fleets. Emergency services rely on dedicated wireless radio networks (TETRA, P25) for mission-critical communications.
  - The 2024-2025 state of wireless radio is shaped by 5G densification and the early development of 6G standards. 5G millimetre-wave (mmWave) deployments in urban areas offer multi-gigabit peak speeds but require dense small-cell infrastructure due to limited propagation range. Open RAN (O-RAN) architectures are disaggregating the radio access network, enabling multi-vendor deployments and AI-driven radio resource management. AI and machine learning are increasingly applied to beam management, interference coordination, and spectrum sensing. The World Radiocommunication Conference 2023 (WRC-23) allocated new spectrum bands for IMT (5G/6G) above 10 GHz, and industry groups are researching terahertz communications and reconfigurable intelligent surfaces (RIS) as candidate 6G technologies.
