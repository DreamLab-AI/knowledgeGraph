public:: true

# Steganography
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:steganography",
  "@type": "Page",
  "title": "Steganography",
  "vc:slug": "steganography",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:steganography",
  "@type": "Class",
  "label": "Steganography",
  "definition": "Steganography is the practice of concealing the existence of a message by embedding it within an innocuous carrier such as an image, audio file or text, so that only the intended recipient is aware that hidden information is present. Unlike encryption, which scrambles content but leaves it visibly protected, steganography aims to make the very presence of communication undetectable. The two techniques are complementary and are often combined for layered confidentiality.",
  "domain": "security",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-watermarking",
        "label": "Digital Watermarking"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:obfuscation",
        "label": "Obfuscation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:obfuscation",
        "label": "Obfuscation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:encryption",
        "label": "Encryption"
      },
      {
        "@id": "urn:ngm:class:digital-watermarking",
        "label": "Digital Watermarking"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
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
  - Steganography is the practice of concealing the existence of a message by embedding it within an innocuous carrier such as an image, audio file or text, so that only the intended recipient is aware that hidden information is present. Unlike encryption, which scrambles content but leaves it visibly protected, steganography aims to make the very presence of communication undetectable. The two techniques are complementary and are often combined for layered confidentiality.
  - Related concepts: [[Cryptography]] [[Encryption]] [[Obfuscation]] [[Digital Watermarking]] [[Privacy]]
- ### Overview
  - Steganographic methods hide payloads in the redundancy of a cover medium, for example by altering least-significant bits of image pixels or inaudible components of audio. The goal is statistical indistinguishability between cover objects with and without a payload, so that detection (steganalysis) is infeasible. Robustness, capacity and undetectability trade off against one another, and combining steganography with encryption protects the payload even if hiding is discovered.
- ### Mechanisms
  - **Cover medium** — images, audio, video or text that carries the hidden payload.
  - **Embedding** — modifying redundant bits without perceptible change.
  - **Undetectability** — resisting statistical steganalysis is the primary goal.
  - **Capacity and robustness trade-offs** — more payload risks easier detection.
  - **Combination with encryption** — layered protection of the hidden content.
- ### Applications
  - Covert communication and information hiding.
  - Digital watermarking and copyright marking of media.
  - Embedding metadata invisibly in files.
  - Privacy-preserving messaging in adversarial environments.
- ### Relationships
  - subClassOf:: [[Cryptography]]
  - partOf:: [[Cryptography]]
  - contrastsWith:: [[Encryption]]
  - contrastsWith:: [[Digital Watermarking]]
  - uses:: [[Obfuscation]]
  - enables:: [[Privacy]]
  - supports:: [[Privacy]]
  - requires:: [[Obfuscation]]
  - relatedTo:: [[Encryption]]
  - relatedTo:: [[Digital Watermarking]]
  - relatedTo:: [[Cryptography]]
  - bridgesTo:: [[Privacy]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
