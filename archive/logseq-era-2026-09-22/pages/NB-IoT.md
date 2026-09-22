public:: true

# NB-IoT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:nb-io-t",
  "@type": "Page",
  "vc:slug": "nb-io-t",
  "title": "NB-IoT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nb-io-t",
  "@type": "Class",
  "label": "NB-IoT",
  "definition": "NB-IoT (Narrowband Internet of Things) is a 3GPP low-power wide-area cellular standard designed to connect large numbers of simple, battery-powered devices over licensed spectrum. It trades bandwidth and latency for deep indoor coverage, long battery life, and low module cost, operating within or alongside existing LTE deployments. It is widely used for metering, asset tracking, and environmental sensing where devices transmit small amounts of data infrequently.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"},
      {"@id": "urn:ngm:class:cold-chain-monitoring", "label": "Cold Chain Monitoring"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - NB-IoT is a 3GPP narrowband cellular standard for low-power, wide-area connectivity. It is implemented within an [[IoT Sensor Network]] and used by applications such as [[Cold Chain Monitoring]].
- ### Content
  - The standard achieves its range and efficiency through narrowband transmission, repetition coding, and extended sleep modes (PSM and eDRX) that let devices run for years on a single battery. It suits stationary or slow-moving sensors but is unsuitable for high-throughput or low-latency workloads, where LTE-M or 5G is preferred.
