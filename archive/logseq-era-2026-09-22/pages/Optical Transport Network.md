public:: true

# Optical Transport Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:optical-transport-network",
  "@type": "Page",
  "vc:slug": "optical-transport-network",
  "title": "Optical Transport Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optical-transport-network",
  "@type": "Class",
  "label": "Optical Transport Network",
  "definition": "An Optical Transport Network (OTN) is a standardized framework, defined by ITU-T G.709, for carrying client signals over wavelength-division-multiplexed optical fiber with framing, error correction, and management overhead. It provides high-capacity, long-haul transport with operations and maintenance features that legacy SONET/SDH lacked. OTN forms a core layer of carrier and backbone networks beneath higher-layer packet and service traffic.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - An Optical Transport Network is an ITU-T G.709 framework for carrying client signals over WDM fiber with forward error correction and management overhead, operating closely with the [[Physical Layer]].
- ### Content
  - OTN wraps client traffic in standardized frames that add monitoring and error correction for long-haul, high-capacity transport. It underpins carrier backbones, multiplexing many wavelengths onto a single fiber while exposing operations and maintenance capabilities absent from earlier transport technologies.
