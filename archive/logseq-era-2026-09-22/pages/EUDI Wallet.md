public:: true

# EUDI Wallet

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:eudi-wallet",
  "@type": "Page",
  "title": "EUDI Wallet",
  "vc:slug": "eudi-wallet",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:eudi-wallet",
  "@type": "Class",
  "label": "EUDI Wallet",
  "definition": "The EUDI Wallet (European Digital Identity Wallet) is a mobile application framework mandated under the revised eIDAS regulation, enabling European citizens and residents to store, present, and selectively disclose identity attributes and credentials across member states. It allows holders to prove identity, sign documents, and share verifiable attestations with public and private services while retaining control over what data is revealed. The wallet is the user-facing instrument of the EU's interoperable cross-border identity scheme.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:digital-identity",
      "label": "Digital Identity"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-identity-wallet",
        "label": "Digital Identity Wallet"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:identity-verification",
        "label": "Identity Verification"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      },
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:privacy",
        "label": "Privacy"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:e-idas",
        "label": "eIDAS"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-identifier",
        "label": "Decentralized Identifier"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-wallet",
        "label": "Digital Wallet"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:e-idas",
        "label": "eIDAS"
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
- The [[EUDI Wallet]] is the EU's regulated mobile identity wallet, standardised by [[eIDAS]], that lets holders store and selectively present [[Verifiable Credentials]]. It is a concrete [[Digital Identity Wallet]] supporting cross-border [[Identity Verification]] and strong [[Privacy]] guarantees.
- ### Overview
- Under the revised eIDAS framework, each member state must offer at least one wallet conforming to a common technical specification, ensuring credentials issued in one country are accepted in another.
- The wallet holds attestations such as identity documents, diplomas, and entitlements, and presents them to relying parties on the holder's terms. Citizens decide which attributes to share for any given interaction.
- Privacy by design is central: [[Selective Disclosure]] and [[Zero-Knowledge Proof]] techniques let a holder prove a fact, such as being over eighteen, without revealing the underlying data, aligning with [[GDPR]].
- ### Mechanisms
- Credential storage: signed attestations are held securely on the holder's device.
- Selective disclosure: only the attributes required for a transaction are revealed.
- Strong authentication: cryptographic binding to the holder enables high-assurance [[Authentication]].
- Trust infrastructure: a common [[Trust Framework]] and registries of issuers and relying parties anchor verification.
- ### Applications
- Accessing public services and signing documents across EU member states.
- Proving age or qualifications to private services with minimal data exposure.
- Strong customer authentication for banking and regulated onboarding.
- Cross-border interoperability built on [[Decentralized Identifier]] and credential standards.
- ### Relationships
- partOf:: [[Digital Identity]]
- bridgesTo:: [[Digital Identity Wallet]]
- bridgesTo:: [[Verifiable Credentials]]
- enables:: [[Identity Verification]]
- enables:: [[Selective Disclosure]]
- enables:: [[Authentication]]
- supports:: [[Privacy]]
- supports:: [[Digital Identity]]
- standardizedBy:: [[eIDAS]]
- uses:: [[Decentralized Identifier]]
- uses:: [[Zero-Knowledge Proof]]
- requires:: [[Trust Framework]]
- relatedTo:: [[Digital Wallet]]
- relatedTo:: [[GDPR]]
- implements:: [[Verifiable Credentials]]
- dependsOn:: [[eIDAS]]
- ### Provenance
- updated:: 2026-06-15
