public:: true

# Forward Error Correction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:forward-error-correction",
  "@type": "Page",
  "vc:slug": "forward-error-correction",
  "title": "Forward Error Correction",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:forward-error-correction",
  "@type": "Class",
  "label": "Forward Error Correction",
  "definition": "Forward error correction (FEC) is a channel-coding technique in which redundant information is added to a transmitted data stream so that the receiver can detect and correct errors introduced by the channel without requesting retransmission. FEC codes trade bandwidth or storage overhead for improved reliability over noisy or lossy channels, eliminating the round-trip latency penalty of automatic repeat request (ARQ) schemes.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:channel-coding",
    "label": "Channel Coding"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:reed-solomon-codes",
        "label": "Reed-Solomon Codes"
      },
      {
        "@id": "urn:ngm:class:ldpc-codes",
        "label": "LDPC Codes"
      },
      {
        "@id": "urn:ngm:class:hamming-codes",
        "label": "Hamming Codes"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-redundancy",
        "label": "Data Redundancy"
      },
      {
        "@id": "urn:ngm:class:channel-capacity",
        "label": "Channel Capacity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:packet-loss-recovery",
        "label": "Packet Loss Recovery"
      },
      {
        "@id": "urn:ngm:class:real-time-streaming",
        "label": "Real-Time Media Streaming"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Shannon Information Theory"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:error-correction",
        "label": "Error Control Coding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:belief-propagation",
        "label": "Belief Propagation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      },
      {
        "@id": "urn:ngm:class:satellite-communications",
        "label": "Satellite Communications"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:quantum-error-correction",
        "label": "Quantum Error Correction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:erasure-coding",
        "label": "Erasure Coding"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:fec",
      "label": "FEC"
    },
    {
      "@id": "urn:ngm:class:channel-error-correction",
      "label": "Channel Error Correction"
    }
  ],
  "quality": 0.85,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - Forward error correction adds structured redundancy to transmitted data so the receiver can reconstruct the original message from a corrupted or incomplete received stream — without any reverse channel. As a class of [[Channel Coding]], FEC encompasses block codes such as [[Reed-Solomon Codes]] and capacity-approaching [[LDPC Codes]], each suited to different error models and latency requirements in [[Telecommunications]] systems.

- ### Relationships
  - FEC is the transmission-time implementation of [[Data Redundancy]]: rather than storing redundant copies, it spreads coded redundancy across the channel. [[Reed-Solomon Codes]] handle burst errors and are used in storage (CDs, SSDs) and deep-space communications. [[LDPC Codes]] approach the Shannon limit and dominate modern wireless standards. [[Packet Loss Recovery]] in internet streaming (QUIC, WebRTC) uses FEC to recover lost UDP packets without retransmission delay. All of these contribute to reliable [[Telecommunications]] infrastructure.

- ### Content
  - The theoretical foundation for FEC is Claude Shannon's 1948 channel-capacity theorem, which proved that reliable transmission at any rate below the channel capacity is possible using appropriate coding. Early practical FEC codes were Hamming codes (1950), which could correct single-bit errors in small blocks. Richard Wesley Hamming's work was motivated by the unreliable relay computers at Bell Labs. Reed-Solomon codes, invented in 1960, became ubiquitous in storage (audio CDs, DVDs, RAID) and satellite communications due to their strength against burst errors.
  - FEC codes add k symbols of redundancy to a block of n-k information symbols, producing a codeword of length n. The code rate R = (n-k)/n determines the overhead. A receiver uses the algebraic structure of the code — minimum distance, parity-check matrix, or factor graph — to identify and correct errors up to the code's correction capacity. Modern capacity-approaching codes include turbo codes (used in 3G/LTE), LDPC codes (used in 5G NR, Wi-Fi 6, DOCSIS 3.1, and DVB-S2), and polar codes (used in 5G control channels). Soft-decision decoding, which uses probabilistic reliability information from the channel, dramatically improves performance over hard-decision decoding.
  - FEC is essential wherever retransmission is impractical: deep-space links with multi-minute round-trip times, broadcast media (DVB, DAB) where the channel is unidirectional, real-time audio/video streaming where retransmission adds unacceptable latency, and flash storage where individual cells degrade over write cycles. In quantum computing, quantum error correction codes (a related but distinct field) protect logical qubits from decoherence — an active research frontier with profound implications for fault-tolerant quantum computation.
  - As of 2024–2025, FEC is integral to all modern digital communication standards. 5G NR uses LDPC for data channels and polar codes for control, achieving near-Shannon-limit performance at low complexity. Starlink and other LEO satellite constellations use adaptive FEC to maximise throughput over variable atmospheric links. In data centres, optical transceivers at 400G and 800G employ powerful FEC (KR4, KP4) to relax signal integrity requirements and reduce link costs. AI-accelerated FEC decoding is an active research area: neural network decoders can exceed classical algorithms on specific channel models, though practical deployment remains limited.
