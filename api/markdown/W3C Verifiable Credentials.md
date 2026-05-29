public:: true

# W3C Verifiable Credentials
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:w3-c-verifiable-credentials",
  "@type": "Page",
  "vc:slug": "w3-c-verifiable-credentials",
  "title": "W3C Verifiable Credentials",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:w3-c-verifiable-credentials",
  "@type": "Class",
  "label": "W3C Verifiable Credentials",
  "definition": "W3C Verifiable Credentials (VCs) are a standardised data model and serialisation format published by the World Wide Web Consortium that enables the cryptographic expression of credentials — such as educational qualifications, identity attributes, or professional licences — in a tamper-evident, machine-verifiable form. The standard defines three roles: issuer (creates and signs the credential), holder (stores and presents credentials), and verifier (validates the signature and claims), forming a trust triangle that operates without requiring a centralised credential registry. VCs are designed to work with Decentralised Identifiers (DIDs) to create self-sovereign identity systems.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:verifiable-credential-vc", "label": "Verifiable Credential (VC)"},
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"},
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"},
      {"@id": "urn:ngm:class:decentralized-identity-did", "label": "Decentralized Identity (DID)"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:did-document", "label": "DID Document"},
      {"@id": "urn:ngm:class:cryptographic-security", "label": "Cryptographic Security"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:privacy-preserving-identity", "label": "Privacy-Preserving Identity"},
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"},
      {"@id": "urn:ngm:class:federated-credential-exchange", "label": "Federated Credential Exchange"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[W3C Verifiable Credentials]] is a W3C recommendation standard that defines a cryptographically verifiable data model for digital credentials, enabling issuer-signed claims about a [[Self Sovereign Identity]] holder to be presented to and verified by any relying party without contacting the [[Decentralized Identity (DID)]] issuer.

- ### Relationships
  - W3C Verifiable Credentials are the standardised expression of the broader [[Verifiable Credentials]] concept, formalised as a [[Credential Format Standard]]. The standard depends on [[DID Document]] for issuer key resolution, relies on [[Cryptographic Security]] for signature verification, and enables [[Privacy-Preserving Identity]] through selective disclosure and zero-knowledge proof presentations. It directly enables [[Credential Verification]] workflows and [[Federated Credential Exchange]] across organisational boundaries, supporting [[Self Sovereign Identity]] architectures.

- ### Content
  - The W3C Credentials Community Group, which later became the Verifiable Credentials Working Group, began work in 2014 inspired by Manu Sporny's work on JSON-LD and the emerging self-sovereign identity movement. The Verifiable Claims Task Force was established in 2016 and the first Verifiable Credentials Data Model 1.0 became a W3C Recommendation in November 2019. The standard built on JSON-LD for semantic interoperability and defined JWT as an alternative serialisation for systems preferring compact representations, with the vc+jwt media type formalised in VC Data Model 2.0 (2024).

  - A Verifiable Credential is a JSON-LD document containing a credentialSubject claim set (the statements being made about the holder), an issuer DID, issuance and expiration dates, and a cryptographic proof — typically a linked data proof using Ed25519 or secp256k1 signatures, or a JWT signature. Verifiers resolve the issuer's DID to retrieve the public key from the DID Document, then verify the signature over the credential's canonical form. Selective disclosure extensions (SD-JWT, BBS+ signatures) allow holders to present only the specific claims required by a verifier, without exposing the full credential and without the issuer learning about individual presentations.

  - The EU Digital Identity Wallet (eIDAS 2.0), specified in 2024, mandates Verifiable Credentials as the data format for European digital identity documents: national ID cards, driving licences, and educational diplomas will be issued as VCs and stored in citizen-controlled wallet applications. The Open Badges 3.0 standard adopted VC format for educational achievement records. Healthcare use cases include vaccination certificates (tested during COVID-19 via SMART Health Cards), clinical trial consent records, and prescription management. Supply chain applications use VCs to attest product provenance and certification status.

  - By 2024-2025, the VC ecosystem has matured into a production-ready infrastructure layer: major browsers and operating systems are beginning to support the Credential Handler API (CHAPI) for wallet-browser integration. The Verifiable Credentials Data Model 2.0 became a W3C Recommendation in 2024, adding SD-JWT and JSON Schema support. Interoperability testing via the DIF Interoperability Working Group has validated multi-vendor credential exchange. The convergence of VCs with AI agent identity — where AI systems carry verifiable credentials attesting their capabilities and governance provenance — is an emerging frontier in trustworthy AI deployment.

