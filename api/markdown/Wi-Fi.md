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
  "definition": "Wi-Fi is a family of wireless networking technologies based on the IEEE 802.11 standards that allow devices to connect to a local area network and the internet. It is managed by the Wi-Fi Alliance.",
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
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
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
