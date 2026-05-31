public:: true

# Antenna Array
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:antenna-array",
  "@type": "Page",
  "vc:slug": "antenna-array",
  "title": "Antenna Array",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:antenna-array",
  "@type": "Class",
  "label": "Antenna Array",
  "definition": "An Antenna Array is a set of multiple antenna elements arranged and phased together so that their combined radiation pattern can be electronically steered and shaped. By controlling the relative phase and amplitude of each element, the array forms directional beams, increases gain, and supports spatial multiplexing in techniques such as MIMO and beamforming. Arrays are foundational to modern wireless radio, 5G, radar, and precise satellite positioning receivers.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Infrastructure Network and Communications"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:wireless-radio", "label": "Wireless Radio"},
      {"@id": "urn:ngm:class:gps", "label": "GPS"}
    ]
  },
  "quality": 0.72
}
```
- ### Definition
  - An Antenna Array combines multiple phased elements to steer and shape radio beams electronically. It is core to [[Wireless Radio]] systems and improves the multipath rejection and accuracy of [[GPS]] receivers.
- ### Content
  - Adjusting per-element phase and amplitude lets the array beamform toward a target while nulling interferers, raising effective gain and spectral efficiency without moving parts. The same principle enables MIMO spatial streams in 5G and Wi-Fi and underpins phased-array radar and high-precision GNSS antennas.
