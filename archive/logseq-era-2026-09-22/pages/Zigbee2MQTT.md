public:: true

# Zigbee2MQTT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:zigbee2-mqtt",
  "@type": "Page",
  "vc:slug": "zigbee2-mqtt",
  "title": "Zigbee2MQTT",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zigbee2-mqtt",
  "@type": "Class",
  "label": "Zigbee2MQTT",
  "definition": "Zigbee2MQTT is an open-source bridge that connects Zigbee smart-home devices to MQTT, allowing them to be controlled independently of any proprietary vendor hub or cloud. Using an inexpensive Zigbee coordinator radio, it translates device messages into MQTT topics with a large database of supported devices. It matters as a vendor-neutral, locally controlled integration path for Zigbee hardware into platforms like Home Assistant.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:home-assistant", "label": "Home Assistant"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Zigbee2MQTT bridges Zigbee devices to MQTT for local, vendor-neutral smart-home control, commonly paired with [[Home Assistant]].
- ### Content
  - Running with a supported Zigbee coordinator dongle, it forms its own Zigbee network and exposes each device's state and commands as MQTT topics, drawing on an extensive community-maintained device database. This removes dependence on manufacturer bridges and cloud services, keeping automation entirely on the local network.
