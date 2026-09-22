public:: true

# Timestamp Authority
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:timestamp-authority",
  "@type": "Page",
  "vc:slug": "timestamp-authority",
  "title": "Timestamp Authority",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:timestamp-authority",
  "@type": "Class",
  "label": "Timestamp Authority",
  "definition": "A Timestamp Authority (TSA) is a trusted third party that issues cryptographically signed timestamps attesting that a particular piece of data existed at or before a specified point in time, in accordance with the RFC 3161 Internet X.509 Public Key Infrastructure Time-Stamp Protocol. The TSA receives a hash of the document or data, signs it together with the current time using its private key, and returns a TimeStampToken that can be independently verified by any party holding the TSA's public key certificate. Timestamp tokens are widely used in digital signature workflows to prove long-term validity—establishing that signatures were made before certificate revocation or expiry. Under eIDAS regulation in Europe, qualified TSAs form part of trust service infrastructure with legal standing equivalent to notarisation.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:certificate-authority",
      "label": "Certificate Authority"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:timestamp",
        "label": "Timestamp"
      },
      {
        "@id": "urn:ngm:class:digital-certificate",
        "label": "Digital Certificate"
      },
      {
        "@id": "urn:ngm:class:digital-signature",
        "label": "Digital Signature"
      },
      {
        "@id": "urn:ngm:class:public-key-infrastructure",
        "label": "Public Key Infrastructure"
      },
      {
        "@id": "urn:ngm:class:non-repudiation",
        "label": "Non-Repudiation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:audit-trail",
        "label": "Audit Trail"
      },
      {
        "@id": "urn:ngm:class:compliance-audit-trail",
        "label": "Compliance Audit Trail"
      },
      {
        "@id": "urn:ngm:class:virtual-notary-service",
        "label": "Virtual Notary Service"
      },
      {
        "@id": "urn:ngm:class:long-term-archival",
        "label": "Long-Term Archival"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      },
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:x-509-certificate",
        "label": "X.509 Certificate"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:digital-signature-verification",
        "label": "Digital Signature Verification"
      },
      {
        "@id": "urn:ngm:class:archival-standards",
        "label": "Archival Standards"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:trust-service-provider",
        "label": "Trust Service Provider"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:eidas-regulation",
        "label": "eIDAS Regulation"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
      },
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tsa",
      "label": "TSA"
    },
    {
      "@id": "urn:ngm:class:trusted-timestamp-authority",
      "label": "Trusted Timestamp Authority"
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
  - A [[Timestamp Authority]] is a trusted third party that issues RFC 3161 [[Cryptographic Signature]]-backed [[Timestamp]] tokens proving data existence at a verifiable point in time, underpinning long-term [[Digital Signature]] validity and forming part of [[Certificate Authority]] trust service infrastructure.
- ### Relationships
  - A Timestamp Authority sits within the broader [[Certificate Authority]] public key infrastructure, issuing [[Digital Certificate]]-backed time attestations. It relies on [[Cryptographic Hash Function]] operations to bind the timestamp to document content without revealing the document itself, and uses [[Cryptographic Signature]] to make tokens verifiable. The resulting tokens form immutable [[Audit Trail]] evidence for compliance and legal purposes, directly supporting [[Compliance Audit Trail]] requirements. [[Virtual Notary Service]] offerings typically bundle TSA tokens with electronic seals. [[Digital Signature Verification]] workflows use TSA tokens to establish that signatures predate certificate revocation, a critical requirement for long-term archived document validity under [[Archival Standards]] such as PAdES and XAdES.
- ### Content
  - The RFC 3161 protocol operates as a simple request-response exchange: the client computes a cryptographic hash of the data to be timestamped (SHA-256 is typical), sends a TimeStampRequest containing the hash and a policy OID to the TSA, and receives a TimeStampResponse containing the signed TimeStampToken. The token embeds the hash, the time of signing (in UTC), the TSA's certificate chain, and a sequence number for non-repudiation. The token can be stored alongside the document and verified independently without communicating with the TSA again.

  - Under the eIDAS Regulation (EU 910/2014) and its successor eIDAS 2.0, qualified electronic timestamps issued by Qualified Trust Service Providers (QTSPs) carry a legal presumption of accuracy of the time and integrity of the data to which they refer. This gives them legal equivalence to notarised timestamps in many EU member states and enables their use in regulated workflows including electronic contracting, customs declarations, and healthcare record archiving. ETSI TS 119 421 provides technical requirements for qualified TSA operation.

  - Blockchain-based timestamping represents an alternative to traditional TSA infrastructure, using the immutability and decentralisation of distributed ledgers to anchor document hashes in publicly verifiable block data. Bitcoin's OpenTimestamps protocol uses Bitcoin block headers as timestamp proofs, providing censorship-resistant, trust-minimised timestamping without reliance on a central TSA. However, blockchain timestamps lack the legal standing of qualified eIDAS timestamps and have confirmation latency determined by block times.

  - Long-term archival scenarios require careful management of TSA certificate expiry. As TSA certificates approach their end of life, archived timestamp tokens must be re-timestamped before expiry to preserve verifiability—a process called timestamp renewal or re-timestamping. Standards-based document formats including PDF/A-3 with PAdES baseline signatures and XML-based XAdES integrate TSA tokens natively and define long-term validation data structures that embed the entire certificate chain and revocation evidence needed for future verification without online lookups.
