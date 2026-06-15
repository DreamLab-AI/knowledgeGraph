public:: true
alias:: BlindSignatures

# Blind Signatures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:blind-signatures",
  "@type": "Page",
  "vc:slug": "blind-signatures",
  "title": "Blind Signatures",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:blind-signatures",
  "@type": "Class",
  "label": "Blind Signatures",
  "definition": "Blind Signatures are a cryptographic primitive invented by David Chaum in 1982 that allow a signer to sign a message without being able to see its content, enabling the message author to later unblind the signature and present a valid signature from the signer without the signer being able to link the signing event to the subsequent presentation. The scheme preserves the unlinkability property — the signer cannot correlate a signing request with a later use of that signature — making it foundational for privacy-preserving payment systems and anonymous credential issuance.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-primitive",
      "label": "Cryptographic Primitive"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:blinding-factor",
        "label": "Blinding Factor"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-cryptography",
        "label": "Public Key Cryptography"
      },
      {
        "@id": "urn:ngm:class:rsa-cryptosystem",
        "label": "RSA Cryptosystem"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:ecash",
        "label": "ecash"
      },
      {
        "@id": "urn:ngm:class:privacy-enhancing-technologies",
        "label": "Privacy Enhancing Technologies"
      },
      {
        "@id": "urn:ngm:class:anonymous-credential",
        "label": "Anonymous Credential"
      },
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:cryptographic-algorithm",
        "label": "Cryptographic Algorithm"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:unlinkability",
        "label": "Unlinkability"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf-rfc",
        "label": "IETF RFC"
      },
      {
        "@id": "urn:ngm:class:w3-c-verifiable-credentials",
        "label": "W3C Verifiable Credentials"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ring-signature",
        "label": "Ring Signature"
      },
      {
        "@id": "urn:ngm:class:threshold-signature-scheme",
        "label": "Threshold Signature"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:post-quantum-cryptography",
        "label": "Post-Quantum Cryptography"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:finance",
        "label": "Finance"
      },
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:blind-digital-signature",
      "label": "Blind Digital Signature"
    },
    {
      "@id": "urn:ngm:class:chaum-blind-signature",
      "label": "Chaum Blind Signature"
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

- ### Definition
  - [[Blind Signatures]] enable a recipient to have a message signed by an authority without the authority learning the message content. The protocol involves the requester applying a blinding factor to the message before submitting it for signature, the signer producing a signature on the blinded message, and the requester removing the blinding factor to yield a valid signature on the original message. Crucially, this unblinded signature is computationally indistinguishable from any other signature by that key, so the signer cannot identify which signed token corresponds to which signing session — providing unconditional unlinkability. The canonical construction uses RSA with a random blinding factor, though elliptic-curve variants and lattice-based constructions have been developed subsequently.

- ### Relationships
  - [[Blind Signatures]] are a specialised [[Cryptographic Primitive]] that underpins [[ecash]] (Chaum's DigiCash system being the first practical deployment). They interact with [[Digital Signature]] infrastructure and leverage [[Cryptographic Algorithm]] security assumptions. The unlinkability property they provide overlaps conceptually with [[Zero-Knowledge Proof]] systems, and they have found renewed interest in [[Verifiable Credentials]] issuance scenarios requiring issuer-unlinkable presentations.

- ### Content
  - David Chaum published the blind signature concept in 1982 and commercialised it through DigiCash, which launched eCash trials with several banks in the early 1990s. The system allowed users to withdraw blinded digital tokens from a bank, unblind them, and spend them at merchants; the bank could verify signature validity without identifying the user. Despite technical success, DigiCash filed for bankruptcy in 1998, primarily due to commercial and adoption challenges rather than cryptographic failures — a cautionary tale for privacy technology ventures.

  - Technically, RSA blind signatures work as follows: the requester generates a random blinding factor r, computes the blinded message m' = m·r^e mod N where (e, N) is the signer's public key, sends m' for signing to receive s' = (m')^d mod N, and then unblinds to obtain s = s'/r mod N, which equals m^d mod N — a valid RSA signature on m. The scheme's security reduces to RSA unforgeability. Schnorr blind signatures and BLS blind signatures extend the principle to other algebraic settings, with some requiring interaction and some being non-interactive.

  - The ecosystem of blind signatures expanded significantly with the introduction of Privacy Pass (IETF RFC 9576), a protocol used by Cloudflare and others to allow clients to prove humanity without tracking. Apple's Private Access Tokens adopt the RSA Blind Signature scheme from RFC 9474 for iCloud Private Relay. The Zcash cryptocurrency uses a related technique in its Sapling and Orchard shielded transaction protocols, though implemented via zk-SNARKs rather than classical blind signatures.

  - As of 2024–2025, blind signatures see active deployment in privacy-preserving credential systems under the W3C Verifiable Credentials umbrella, particularly in selective-disclosure schemes. The IETF Oblivious HTTP and Privacy Pass standards incorporate blind signatures to decouple authentication from tracking. Post-quantum variants using lattice assumptions (e.g., based on Module-LWE) are under active research to prepare these privacy tools for the anticipated transition away from RSA and elliptic-curve cryptography.