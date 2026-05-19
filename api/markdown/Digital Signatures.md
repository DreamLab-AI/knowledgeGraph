schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#DigitalSignatures
legacy_uri:: urn:visionclaw:concept:spatial-computing:digital-signatures
public:: true

# Digital Signatures
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7",
  "@type": "Page",
  "vc:slug": "digital-signatures",
  "title": "Digital Signatures",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:data-integrity",
      "vc:label": "Data Integrity"
    },
    {
      "@id": "urn:visionflow:linked:signature-algorithm",
      "vc:label": "Signature Algorithm"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:owl:class:hash-function",
      "vc:label": "Hash Function"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:non-repudiation",
      "vc:label": "Non-Repudiation"
    },
    {
      "@id": "urn:visionflow:owl:class:private-key",
      "vc:label": "Private Key"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-d0019c189e8b"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#DigitalSignatures"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9872"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Signatures"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-signatures"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:digital-signatures"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-signatures",
  "@type": "Class",
  "label": "Digital Signatures",
  "definition": "Digital Signatures is a type of Cryptography in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptography",
      "label": "Cryptography"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:signature-algorithm",
        "label": "Signature Algorithm"
      },
      {
        "@id": "urn:ngm:class:hash-function",
        "label": "Hash Function"
      },
      {
        "@id": "urn:ngm:class:private-key",
        "label": "Private Key"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:data-integrity",
        "label": "Data Integrity"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-signature",
      "label": "Digital Signature"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:digital-signatures:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Data Integrity]]",
      "resolved": "urn:visionflow:linked:data-integrity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Signature Algorithm]]",
      "resolved": "urn:visionflow:linked:signature-algorithm",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:owl:class:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Hash Function]]",
      "resolved": "urn:visionflow:owl:class:hash-function",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Repudiation]]",
      "resolved": "urn:visionflow:owl:class:non-repudiation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Private Key]]",
      "resolved": "urn:visionflow:owl:class:private-key",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0f99d9842bf3e1b2ae535ee90c11cd8001decddb34c0e9c2ff609838433e2fa7@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Cryptographic seals that confirm the authenticity and integrity of digital data using public-key cryptography, enabling transaction authorisation on blockchain networks, document authentication, and non-repudiation in metaverse and decentralised systems.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalSignatures
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Cryptography]]
  - requires:: [[Private Key]], [[Hash Function]], [[Signature Algorithm]]
  - enables:: [[Authentication]], [[Data Integrity]], [[Non-Repudiation]]

- ### Content

  - ## Technical Details
  - **Core Components**:
		- Private key: Creates signature (kept secret)
		- Public key: Verifies signature (shared openly)
		- Hash function: Produces message digest
		- Signature algorithm: Generates cryptographic proof
  - **Signature Algorithms**:
		- ECDSA: Bitcoin, Ethereum standard
		- EdDSA: Fast, constant-time signatures
		- BLS: 50% smaller, aggregatable
		- Schnorr: Native multi-signature support
  - **Blockchain Role**:
		- Transaction authorization
		- Wallet ownership proof
		- Smart contract execution
		- Consensus participation
  - **2024 Developments**: Post-quantum algorithms (ML-DSA, Mayo), AI-enhanced fraud detection, blockchain-anchored document signing
  - ## Applications
  - Cryptocurrency transaction signing
  - Document authentication
  - Code signing and software verification
  - Email security (S/MIME, PGP)
  - Metaverse identity verification

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
