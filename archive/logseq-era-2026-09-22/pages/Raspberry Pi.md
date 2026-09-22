public:: true

# Raspberry Pi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:raspberry-pi",
  "@type": "Page",
  "vc:slug": "raspberry-pi",
  "title": "Raspberry Pi",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:raspberry-pi",
  "@type": "Class",
  "label": "Raspberry Pi",
  "definition": "Raspberry Pi is a family of low-cost, credit-card-sized single-board computers built around ARM systems-on-chip, designed originally for education and now ubiquitous in hobbyist, prototyping, and edge-computing deployments. It exposes GPIO pins for hardware interfacing and runs full Linux distributions, making it a versatile platform for home automation, robotics controllers, and small servers. Its affordability and large community make it a default choice for edge experimentation.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:home-assistant", "label": "Home Assistant"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Raspberry Pi is a low-cost ARM-based single-board computer with GPIO interfacing running Linux. It is supported and commonly required as the host hardware for [[Home Assistant]] home-automation installations.
- ### Content
  - With models spanning microcontroller-class (Pico) to multi-core 64-bit boards, the Pi suits edge inference, sensor gateways, and robot controllers. GPIO, I2C, SPI, and camera interfaces enable direct hardware control, while the broad OS and software ecosystem lowers the barrier for self-hosted services and prototyping.
