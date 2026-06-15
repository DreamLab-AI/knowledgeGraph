public:: true

# Ipsec
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:ipsec",
  "@type": "Page",
  "title": "Ipsec",
  "vc:slug": "ipsec",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ipsec",
  "@type": "Class",
  "label": "Ipsec",
  "definition": "IPsec (Internet Protocol Security) is a suite of protocols that secures IP communications by authenticating and encrypting each packet at the network layer. It provides confidentiality, integrity and origin authentication through the Authentication Header and Encapsulating Security Payload protocols, with keys negotiated via the Internet Key Exchange. IPsec is the foundational technology for site-to-site and remote-access virtual private networks operating transparently beneath application protocols.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-security",
      "label": "Network Security"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public-Key Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:internet-protocol",
        "label": "Internet Protocol"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
  - IPsec (Internet Protocol Security) is a suite of protocols that secures IP communications by authenticating and encrypting each packet at the network layer. It provides confidentiality, integrity and origin authentication through the Authentication Header and Encapsulating Security Payload protocols, with keys negotiated via the Internet Key Exchange. IPsec is the foundational technology for site-to-site and remote-access virtual private networks operating transparently beneath application protocols.
  - Related core concepts: [[Network Security]] [[VPN]] [[Encryption]] [[TLS]] [[Internet Protocol]]
- ### Overview
  - IPsec secures traffic below the transport layer so that any application's packets gain confidentiality and integrity without modification. It can operate in transport mode, protecting payloads between hosts, or tunnel mode, encapsulating entire packets between gateways to form VPNs. Security associations and the IKE negotiation establish the cryptographic parameters protecting each flow.
- ### Mechanisms
  - Authentication Header: integrity and origin authentication without encryption.
  - Encapsulating Security Payload: confidentiality plus optional integrity for packet payloads.
  - Internet Key Exchange: authenticated negotiation of keys and security associations.
  - Transport vs tunnel mode: protecting host-to-host payloads versus full-packet gateway tunnels.
  - Security associations: the directional, parameterised state defining how each flow is protected.
- ### Applications
  - Site-to-site VPNs connecting branch offices over the public internet.
  - Remote-access VPNs securing mobile and home worker connectivity.
  - Securing host-to-host traffic in zero-trust network segments.
  - Protecting routing and control-plane communications between network devices.
- ### Relationships
  - subClassOf:: [[Network Security]]
  - contrastsWith:: [[TLS]]
  - hasPart:: [[Encryption]]
  - hasPart:: [[Authentication]]
  - supports:: [[VPN]]
  - supports:: [[Network Security]]
  - uses:: [[Encryption]]
  - uses:: [[Public-Key Cryptography]]
  - uses:: [[Key Management]]
  - enables:: [[VPN]]
  - requires:: [[Internet Protocol]]
  - requires:: [[Key Management]]
  - dependsOn:: [[Internet Protocol]]
  - partOf:: [[Network Security]]
  - implements:: [[Authentication]]
  - relatedTo:: [[VPN]]
  - relatedTo:: [[Cryptography]]
  - relatedTo:: [[Public-Key Cryptography]]
  - bridgesTo:: [[VPN]]
  - standardizedBy:: [[Internet Protocol]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
