public:: true

# Kerberos
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:134a336c965c6f9a3040d4020a4b88a325535b8abcf7026b1ed99940e295fa6b",
  "@type": "Page",
  "vc:slug": "kerberos",
  "title": "Kerberos",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:encryption",
      "vc:label": "Encryption"
    },
    {
      "@id": "urn:visionflow:linked:single-sign-on",
      "vc:label": "Single Sign-On"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-protocols",
      "vc:label": "Cryptographic Protocols"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:https-web-mit-edu-kerberos",
      "vc:label": "https://web.mit.edu/kerberos/"
    },
    {
      "@id": "urn:visionflow:linked:https-datatracker-ietf-org-doc-html-rfc-4120",
      "vc:label": "https://datatracker.ietf.org/doc/html/rfc4120"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Kerberos"
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
  "@id": "urn:ngm:class:kerberos",
  "@type": "Class",
  "label": "Kerberos",
  "definition": "Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove their identity over an untrusted network, relying on a trusted Key Distribution Centre to issue time-limited session tickets without transmitting long-term credentials.",
  "domain": "security",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:authentication",
      "label": "Authentication"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:symmetric-encryption",
        "label": "Symmetric Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:trusted-third-party",
        "label": "Trusted Third Party"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      },
      {
        "@id": "urn:ngm:class:mutual-authentication",
        "label": "Mutual Authentication"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cryptographic-protocols",
        "label": "Cryptographic Protocols"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:aes-encryption",
        "label": "AES Encryption"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:active-directory",
        "label": "Active Directory"
      },
      {
        "@id": "urn:ngm:class:ldap",
        "label": "LDAP"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:infrastructure",
        "label": "Infrastructure"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Security"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Services"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:kerberos-authentication-protocol",
      "label": "Kerberos Authentication Protocol"
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
  "@id": "urn:visionflow:annotation:link-resolutions:kerberos:d6f845779b5f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:134a336c965c6f9a3040d4020a4b88a325535b8abcf7026b1ed99940e295fa6b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Encryption]]",
      "resolved": "urn:visionflow:linked:encryption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Single Sign-On]]",
      "resolved": "urn:visionflow:linked:single-sign-on",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptographic Protocols]]",
      "resolved": "urn:visionflow:linked:cryptographic-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://web.mit.edu/kerberos/]]",
      "resolved": "urn:visionflow:linked:https-web-mit-edu-kerberos",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://datatracker.ietf.org/doc/html/rfc4120]]",
      "resolved": "urn:visionflow:linked:https-datatracker-ietf-org-doc-html-rfc-4120",
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
  - Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove identity over an untrusted network.

- ### Semantic Classification
  - owl-class:: distributed-systems:Kerberos
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authentication]]
  - bridges-to:: [[Cryptographic Protocols]]
  - requires:: [[Encryption]]
  - enables:: [[Single Sign-On]]

- ### Content
  - Kerberos was developed at the Massachusetts Institute of Technology and relies on a trusted third party, the Key Distribution Centre, to issue time-limited tickets. Clients present these tickets to services rather than transmitting passwords over the network.
  - The protocol is widely deployed in enterprise environments and underpins Windows domain authentication. It supports mutual authentication between client and server and reduces exposure of long-term credentials.

- ### Provenance
  - sources:: [[https://web.mit.edu/kerberos/]], [[https://datatracker.ietf.org/doc/html/rfc4120]]
  - migration-date:: 2026-05-29T00:00:00Z
