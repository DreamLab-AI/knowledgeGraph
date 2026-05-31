public:: true
alias:: SelectiveDisclosure

# selective disclosure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:13838da731eed02bc2c79e6bfa9c83f7e0f06afee50fda8bdf4036080832e4cd",
  "@type": "Page",
  "vc:slug": "selective-disclosure",
  "title": "selective disclosure",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:selective-disclosure",
  "@type": "Class",
  "label": "Selective Disclosure",
  "definition": "Selective disclosure is a cryptographic capability that allows the holder of a verifiable credential to present only a chosen subset of the credential's claims to a verifier, without the verifier being able to learn anything about the undisclosed fields and without requiring re-issuance of a new credential by the issuer. It is implemented through cryptographic mechanisms such as BBS+ signatures, SD-JWT, and zero-knowledge proofs, and is a core design goal of the W3C Verifiable Credentials standard and decentralised identity architectures that aim to minimise unnecessary personal data exposure.",
  "domain": "blockchain",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-cryptographic-primitive",
      "label": "BC Cryptographic Primitive"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-technology", "label": "Privacy Preserving Technology"},
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Selective disclosure is a cryptographic capability that allows the holder of a verifiable credential to present only a chosen subset of the credential's claims to a verifier, without the verifier being able to learn anything about the undisclosed fields and without requiring re-issuance of a new credential by the issuer. It is implemented through cryptographic mechanisms such as BBS+ signatures, SD-JWT, and zero-knowledge proofs, and is a core design goal of the W3C Verifiable Credentials standard and decentralised identity architectures that aim to minimise unnecessary personal data exposure.

- ### Semantic Classification
  - owl-class:: selective-disclosure:Selective Disclosure
  - owl-role:: Concept

- ### Relationships
  - requires [[Zero-Knowledge Proof]]
  - requires [[Verifiable Credentials]]
  - enables [[Privacy Preserving Technology]]
  - enables [[Decentralised Identity]]
  - relatedTo [[Credential Format Standard]]

- ### Content
  Selective disclosure addresses the data minimisation principle: a verifier should receive only the claims necessary for a given interaction, not the full credential. Classical digital signatures bind a signature to the entire signed message, making partial disclosure of a signed credential cryptographically unsafe without a dedicated construction. Selective disclosure schemes resolve this by allowing the holder to derive a proof that certain fields are present and correctly signed while others remain hidden.

  BBS+ signatures, standardised by the Decentralised Identity Foundation and the W3C, enable multi-message signing where the holder can selectively derive a zero-knowledge proof of any subset of signed messages. SD-JWT, specified by the IETF, takes a simpler approach using hash commitments: the issuer signs a document containing hash digests of each disclosable claim, and the holder reveals only the preimages of chosen hashes. Zero-knowledge proof systems such as zk-SNARKs can additionally prove derived predicates (e.g. "age > 18") without revealing the underlying field value.

  Selective disclosure is essential in eIDAS 2.0 and related national digital identity wallet architectures, where citizens present only the minimum attributes needed for a transaction. It also underpins privacy-preserving authentication for access control systems, enabling attribute-based access without tracking individual users across interactions. The W3C Verifiable Credentials Data Model and W3C DID Core specifications provide the framework within which selective disclosure credential formats operate.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
