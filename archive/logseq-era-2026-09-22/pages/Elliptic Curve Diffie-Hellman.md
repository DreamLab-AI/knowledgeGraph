public:: true

# Elliptic Curve Diffie-Hellman

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:elliptic-curve-diffie-hellman", "@type": "Page", "title": "Elliptic Curve Diffie-Hellman", "vc:slug": "elliptic-curve-diffie-hellman", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:elliptic-curve-diffie-hellman",
  "@type": "Class",
  "label": "Elliptic Curve Diffie-Hellman",
  "definition": "Elliptic Curve Diffie-Hellman (ECDH) is a key-agreement protocol in which two parties each combine their own private elliptic-curve key with the other party's public key to derive an identical shared secret, without transmitting that secret over the network. It provides the same forward-secrecy properties as classical Diffie-Hellman key exchange but with much smaller key sizes for equivalent security, because it relies on the elliptic curve discrete logarithm problem. It is the key-exchange mechanism used in TLS 1.3 and other modern TLS-based encryption to establish ephemeral session keys.",
  "domain": "security",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:elliptic-curve-cryptography",
      "label": "Elliptic Curve Cryptography"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:elliptic-curve-cryptography",
        "label": "Elliptic Curve Cryptography"
      }
    ],
    "enables": [],
    "requires": [],
    "implements": [],
    "partOf": [],
    "contrastsWith": [],
    "dependsOn": [],
    "bridgesTo": [],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:diffie-hellman-key-exchange",
        "label": "Diffie-Hellman Key Exchange"
      }
    ],
    "supports": []
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- Elliptic Curve Diffie-Hellman (ECDH) is a key-agreement protocol in which two parties each combine their own private elliptic-curve key with the other party's public key to derive an identical shared secret, without transmitting that secret over the network. It provides the same forward-secrecy properties as classical Diffie-Hellman key exchange but with much smaller key sizes for equivalent security, because it relies on the elliptic curve discrete logarithm problem. It is the key-exchange mechanism used in TLS 1.3 and other modern TLS-based encryption to establish ephemeral session keys.
- ### Relationships
	- uses:: [[Elliptic Curve Cryptography]]
	- relatedTo:: [[Diffie-Hellman Key Exchange]]
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
