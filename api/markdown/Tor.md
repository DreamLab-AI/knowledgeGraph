public:: true

# Tor
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d55a3f1ba4850f712fccc97fdfb14c1ffa461d8568388786a15f454d68751992",
  "@type": "Page",
  "vc:slug": "tor",
  "title": "Tor",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:onion-routing",
      "vc:label": "Onion Routing"
    },
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    },
    {
      "@id": "urn:visionflow:linked:network-security",
      "vc:label": "Network Security"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Tor"
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
  "@id": "urn:ngm:class:tor",
  "@type": "Class",
  "label": "Tor",
  "definition": "A free overlay network and software that provides anonymous communication by routing traffic through a series of volunteer-operated relays using layered encryption, enabling censorship resistance, traffic-analysis resistance, and onion service hosting.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:onion-routing",
      "label": "Onion Routing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:relay-network",
        "label": "Relay Network"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:anonymity",
        "label": "Anonymity"
      },
      {
        "@id": "urn:ngm:class:censorship-resistance",
        "label": "Censorship Resistance"
      },
      {
        "@id": "urn:ngm:class:traffic-analysis-resistance",
        "label": "Traffic Analysis Resistance"
      },
      {
        "@id": "urn:ngm:class:onion-services",
        "label": "Onion Services"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:transport-layer-security",
        "label": "Transport Layer Security"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      },
      {
        "@id": "urn:ngm:class:i2p",
        "label": "I2P"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:dark-web",
        "label": "Dark Web"
      },
      {
        "@id": "urn:ngm:class:surveillance",
        "label": "Surveillance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      },
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:the-onion-router",
      "label": "The Onion Router"
    }
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:tor:bd144d4b9250",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d55a3f1ba4850f712fccc97fdfb14c1ffa461d8568388786a15f454d68751992"
  },
  "vc:resolutions": [
    {
      "raw": "[[Onion Routing]]",
      "resolved": "urn:visionflow:linked:onion-routing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Network Security]]",
      "resolved": "urn:visionflow:linked:network-security",
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
  - A free overlay network and software that provides anonymous communication by routing traffic through a series of volunteer-operated relays using layered encryption.

- ### Semantic Classification
  - owl-class:: cryptographic:Tor
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Onion Routing]]
  - bridges-to:: [[Network Security]]
  - requires:: [[Onion Routing]], [[Encryption]]
  - enables:: [[Privacy]]

- ### Content
  - Tor implements onion routing, wrapping a message in successive layers of encryption and forwarding it through a circuit of relays so that no single relay knows both the origin and the destination. This conceals a user's network location and protects against traffic analysis.
  - The network also hosts onion services, which allow servers to be reached anonymously without revealing their address. Tor is used to protect privacy, circumvent censorship and support confidential communication, while remaining a subject of study in network security.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
