public:: true

# Wi-Fi
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9ba0d1a085ae9880becd566963054b3c29eabfd023d07fa93358a613f34295b6",
  "@type": "Page",
  "vc:slug": "wi-fi",
  "title": "Wi-Fi",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:internet-of-things",
      "vc:label": "Internet of Things"
    },
    {
      "@id": "urn:visionflow:linked:network-communication",
      "vc:label": "Network Communication"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocol",
      "vc:label": "Communication Protocol"
    },
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:https-www-wi-fi-org",
      "vc:label": "https://www.wi-fi.org"
    },
    {
      "@id": "urn:visionflow:linked:https-standards-ieee-org-ieee-802-11",
      "vc:label": "https://standards.ieee.org/ieee/802.11/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Wi-Fi"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wi-fi",
  "@type": "Class",
  "label": "Wi-Fi",
  "definition": "Wi-Fi is a family of wireless networking technologies based on the IEEE 802.11 standards that allow devices to connect to a local area network and the internet without physical cabling. It is governed and certified by the Wi-Fi Alliance and operates primarily in the 2.4 GHz, 5 GHz, and 6 GHz radio bands.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:network-communication",
        "label": "Network Communication"
      },
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Local Area Network"
      },
      {
        "@id": "urn:ngm:class:mobile-broadband",
        "label": "Mobile Broadband"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:wireless-connectivity",
        "label": "Wireless Access Point"
      },
      {
        "@id": "urn:ngm:class:radio-frequency-spectrum",
        "label": "Radio Frequency Spectrum"
      },
      {
        "@id": "urn:ngm:class:network-interface-card",
        "label": "Network Interface Controller"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ieee-802-11",
        "label": "IEEE 802.11"
      },
      {
        "@id": "urn:ngm:class:wpa3",
        "label": "WPA3"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:wi-fi-alliance",
        "label": "Wi-Fi Alliance"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:orthogonal-frequency-division-multiplexing",
        "label": "Orthogonal Frequency-Division Multiplexing"
      },
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:smart-home",
        "label": "Smart Home"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bluetooth",
        "label": "Bluetooth"
      },
      {
        "@id": "urn:ngm:class:5-g",
        "label": "5G"
      },
      {
        "@id": "urn:ngm:class:ethernet",
        "label": "Ethernet"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:mesh-network",
        "label": "Mesh Network"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:wireless-fidelity",
      "label": "Wireless Fidelity"
    },
    {
      "@id": "urn:ngm:class:ieee-802-11-wireless-networking",
      "label": "IEEE 802.11 Wireless Networking"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:wi-fi:f1ea8dbd316e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9ba0d1a085ae9880becd566963054b3c29eabfd023d07fa93358a613f34295b6"
  },
  "vc:resolutions": [
    {
      "raw": "[[Internet of Things]]",
      "resolved": "urn:visionflow:linked:internet-of-things",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Communication]]",
      "resolved": "urn:visionflow:linked:network-communication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocol]]",
      "resolved": "urn:visionflow:linked:communication-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.wi-fi.org]]",
      "resolved": "urn:visionflow:linked:https-www-wi-fi-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://standards.ieee.org/ieee/802.11/]]",
      "resolved": "urn:visionflow:linked:https-standards-ieee-org-ieee-802-11",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Wi-Fi is a family of wireless networking technologies based on the IEEE 802.11 standards that allow devices to connect to a local area network and the internet. It is managed by the Wi-Fi Alliance.

- ### Semantic Classification
  - owl-class:: general:WiFi
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Protocol]]
  - bridges-to:: [[Communication Protocol]]
  - enables:: [[Internet of Things]], [[Network Communication]]

- ### Content
  - Wi-Fi uses radio frequencies to connect devices to a wireless access point, which in turn links them to a wired network. The IEEE 802.11 standards define the physical and data-link behaviour, and successive versions have increased speed and capacity.
  - Wi-Fi is used in homes, offices, and public spaces to provide network access without cabling. Security protocols protect traffic over the air, and the Wi-Fi Alliance certifies devices for interoperability.

- ### Provenance
  - sources:: [[https://www.wi-fi.org]], [[https://standards.ieee.org/ieee/802.11/]]
  - migration-date:: 2026-05-29T00:00:00Z
