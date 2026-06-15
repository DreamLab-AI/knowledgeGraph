public:: true

# Anonymity

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:anonymity",
  "@type": "Page",
  "title": "Anonymity",
  "vc:slug": "anonymity",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:anonymity",
  "@type": "Class",
  "label": "Anonymity",
  "definition": "Anonymity is the property of an actor being unidentifiable within a set of potential actors, so that actions cannot be linked to a real-world identity. It is a core privacy goal achieved through techniques that obscure identifying attributes, network paths and metadata. Anonymity contrasts with pseudonymity, where a persistent but non-identifying handle is retained.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy",
      "label": "Privacy"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:pseudonymity",
        "label": "Pseudonymity"
      },
      {
        "@id": "urn:ngm:class:identity",
        "label": "Identity"
      },
      {
        "@id": "urn:ngm:class:surveillance",
        "label": "Surveillance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:data-protection",
        "label": "Data Protection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:onion-routing",
        "label": "Onion Routing"
      },
      {
        "@id": "urn:ngm:class:anonymisation",
        "label": "Anonymisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:tor",
        "label": "Tor"
      },
      {
        "@id": "urn:ngm:class:vpn",
        "label": "VPN"
      },
      {
        "@id": "urn:ngm:class:metadata",
        "label": "Metadata"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security",
        "label": "Security"
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
  - Anonymity is the property of an actor being unidentifiable within a set of potential actors, so that actions cannot be linked to a real-world identity. It is a core privacy goal achieved through techniques that obscure identifying attributes, network paths and metadata. Anonymity contrasts with pseudonymity, where a persistent but non-identifying handle is retained.
  - Related: [[Privacy]] [[Pseudonymity]] [[Encryption]] [[Onion Routing]]
- ### Overview
  - Anonymity depends on an anonymity set: the larger the set of indistinguishable actors, the stronger the protection. Systems such as Tor and mix networks achieve it by routing and re-encrypting traffic so that no single observer can correlate sender and receiver.
- ### Key aspects
  - Anonymity set size as a measure of protection strength
  - Unlinkability of actions to a persistent identity
  - Metadata minimisation alongside content protection
  - Trade-offs with accountability and abuse prevention
  - Distinction from pseudonymity and confidentiality
- ### Applications
  - Privacy-preserving communication and browsing
  - Whistleblowing and journalistic source protection
  - Anonymous credentials and zero-knowledge authentication
  - De-identified data publishing under differential privacy
- ### Relationships
  - subClassOf:: [[Privacy]]
  - contrastsWith:: [[Pseudonymity]]
  - contrastsWith:: [[Identity]]
  - contrastsWith:: [[Surveillance]]
  - enables:: [[Privacy]]
  - enables:: [[Data Protection]]
  - uses:: [[Encryption]]
  - uses:: [[Onion Routing]]
  - uses:: [[Anonymisation]]
  - requires:: [[Cryptography]]
  - partOf:: [[Privacy]]
  - supports:: [[Zero-Knowledge Proof]]
  - implements:: [[Differential Privacy]]
  - relatedTo:: [[Tor]]
  - relatedTo:: [[VPN]]
  - relatedTo:: [[Metadata]]
  - relatedTo:: [[Authentication]]
  - bridgesTo:: [[Security]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
