public:: true

# Z-Wave JS UI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:z-wave-js-ui",
  "@type": "Page",
  "vc:slug": "z-wave-js-ui",
  "title": "Z-Wave JS UI",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:z-wave-js-ui",
  "@type": "Class",
  "label": "Z-Wave JS UI",
  "definition": "Z-Wave JS UI is an open-source application that wraps the Z-Wave JS driver to manage a Z-Wave mesh network of smart-home devices through a web interface and to bridge it to home-automation platforms via MQTT. It handles device inclusion, configuration, firmware updates, and network healing, exposing Z-Wave nodes as controllable entities. It matters as a primary integration path between Z-Wave hardware and Home Assistant.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-software-engineering", "label": "Infrastructure Software Engineering"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:home-assistant", "label": "Home Assistant"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - Z-Wave JS UI is an open-source control application that manages Z-Wave mesh networks and bridges them via MQTT, commonly deployed as part of [[Home Assistant]].
- ### Content
  - Built on the Z-Wave JS driver, it provides a web UI for including and configuring devices, monitoring network topology, applying firmware updates, and healing the mesh. It can run as a Home Assistant add-on or standalone container, publishing device state and accepting commands over MQTT or a WebSocket server consumed by the Z-Wave JS integration.
