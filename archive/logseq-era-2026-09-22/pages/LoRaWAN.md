public:: true

# LoRaWAN
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:lo-ra-wan",
  "@type": "Page",
  "vc:slug": "lo-ra-wan",
  "title": "LoRaWAN",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lo-ra-wan",
  "@type": "Class",
  "label": "LoRaWAN",
  "definition": "LoRaWAN is a media-access-control protocol and network architecture for low-power wide-area networks, built on the LoRa physical layer's chirp spread-spectrum modulation. It connects battery-powered devices to gateways over distances of several kilometres at low data rates, with end-to-end encryption and adaptive data-rate management. LoRaWAN is widely used for long-range, low-throughput IoT telemetry such as cold-chain and environmental monitoring.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"}, {"@id": "urn:ngm:class:cold-chain-monitoring", "label": "Cold Chain Monitoring"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - LoRaWAN is a low-power wide-area MAC protocol over the LoRa physical layer; it is implemented by an [[IoT Sensor Network]] and used by applications such as [[Cold Chain Monitoring]] for long-range telemetry.
- ### Content
  - Devices operate in classes A, B, and C that trade downlink latency against power consumption, and an adaptive data-rate scheme balances range, airtime, and battery life. Star-of-stars topology routes traffic through gateways to a network server that handles deduplication, security, and application delivery.
