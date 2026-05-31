public:: true

# Ethernet
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3348aa25d7ae89156c155921636ae9a423fde58e059d739d0766b3e36e8679f2",
  "@type": "Page",
  "vc:slug": "ethernet",
  "title": "Ethernet",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:distributed-systems",
      "vc:label": "Distributed Systems"
    },
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Ethernet"
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
  "@id": "urn:ngm:class:ethernet",
  "@type": "Class",
  "label": "Ethernet",
  "definition": "Ethernet is a family of wired networking technologies, standardised as IEEE 802.3, used to connect devices in local area networks.",
  "domain": "networking",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:ethernet:35482bcf5685",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3348aa25d7ae89156c155921636ae9a423fde58e059d739d0766b3e36e8679f2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Distributed Systems]]",
      "resolved": "urn:visionflow:linked:distributed-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
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
  - Ethernet is a family of wired networking technologies, standardised as IEEE 802.3, used to connect devices in local area networks.

- ### Semantic Classification
  - owl-class:: networking:Ethernet
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Network Protocol]]
  - bridges-to:: [[Distributed Systems]]

- ### Content
  - Ethernet defines the physical and data link layer methods for framing and transmitting data over twisted pair and fibre cabling. It has evolved from early 10 Mbit/s versions to 100 Gbit/s and higher rates while keeping a common frame format.
  - It is the dominant wired local area network technology in offices, data centres, and industrial settings, and variants such as Time-Sensitive Networking add deterministic timing for control applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
