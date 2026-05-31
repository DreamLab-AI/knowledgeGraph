public:: true

# WirelessHART
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wireless-hart",
  "@type": "Page",
  "vc:slug": "wireless-hart",
  "title": "WirelessHART",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wireless-hart",
  "@type": "Class",
  "label": "WirelessHART",
  "definition": "WirelessHART is an open wireless communication standard for industrial process automation, built on the IEEE 802.15.4 physical layer and using time-synchronised, self-organising mesh networking with channel hopping for reliability. It extends the HART field-device protocol to wireless sensor networks in plants, providing deterministic, secure, low-power monitoring and control. Centrally managed by a network manager, it prioritises robustness against interference in harsh RF environments.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:io-t-sensor-network", "label": "IoT Sensor Network"}, {"@id": "urn:ngm:class:ieee-802-15-4", "label": "IEEE 802.15.4"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - WirelessHART is an industrial mesh networking standard, layered on [[IEEE 802.15.4]] and implemented by an [[IoT Sensor Network]] for reliable plant monitoring and control.
- ### Content
  - The protocol uses TDMA scheduling, per-transmission channel hopping across the 2.4 GHz band, and graph/source routing through a redundant mesh managed by a central network manager. Built-in AES-128 encryption, deterministic latency, and self-healing topology make it suited to safety- and availability-critical process applications where Wi-Fi-class networks are too unreliable.
