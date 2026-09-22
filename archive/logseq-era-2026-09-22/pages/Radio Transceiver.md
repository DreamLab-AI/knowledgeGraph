public:: true

# Radio Transceiver
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:radio-transceiver",
  "@type": "Page",
  "vc:slug": "radio-transceiver",
  "title": "Radio Transceiver",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:radio-transceiver",
  "@type": "Class",
  "label": "Radio Transceiver",
  "definition": "A radio transceiver is a hardware device that combines a transmitter and receiver in a single unit to send and receive radio-frequency signals over a shared channel. It performs modulation, demodulation, amplification, and frequency conversion, forming the physical link layer of wireless devices. Transceivers underpin IoT nodes, mobile devices, and short-range wireless links.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"},
      {"@id": "urn:ngm:class:wireless-radio", "label": "Wireless Radio"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A radio transceiver integrates transmit and receive RF functions into one device. It is required by an [[IoT Sensor Network]] for connectivity and is used by [[Wireless Radio]] systems as their core hardware element.
- ### Content
  - Transceivers handle modulation schemes (FSK, OFDM, LoRa), channel access, and power management, with low-power variants critical for battery-operated IoT endpoints. Integrated system-on-chip transceivers combine RF front-ends with microcontrollers and protocol stacks (BLE, Zigbee, Wi-Fi), reducing board complexity and cost.
