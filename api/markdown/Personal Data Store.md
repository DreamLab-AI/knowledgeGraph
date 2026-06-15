public:: true

# Personal Data Store
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:161b6fdb3fe1beccf8016bd942f46b9a589b69a39aa1c74de31881441fe54d44",
  "@type": "Page",
  "vc:slug": "personal-data-store",
  "title": "Personal Data Store",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9184"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Personal Data Store"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:personal-data-store",
  "@type": "Class",
  "label": "Personal Data Store",
  "definition": "A Personal Data Store (PDS) is a user-controlled software system or vault that aggregates, stores, and selectively discloses an individual's personal data — including identity attributes, health records, behavioural logs, and transaction histories — under the direct control of the data subject. It enforces consent-based access through verifiable credentials and cryptographic authorisation mechanisms, enabling fine-grained, revocable sharing with third-party services. PDSs embody the principles of data sovereignty and privacy-by-design, decoupling data custody from service providers and restoring ownership to individuals. They serve as a foundational layer for interoperable digital identity ecosystems, federated personal AI assistants, and regulatory compliance with frameworks such as GDPR and CCPA.",
  "domain": "data",
  "maturity": "emerging",
  "qualityScore": 0.74,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:data-management",
      "label": "Data Management"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:personal-data-vault",
      "label": "Personal Data Vault"
    },
    {
      "@id": "urn:ngm:class:personal-information-management-system",
      "label": "Personal Information Management System"
    },
    {
      "@id": "urn:ngm:class:solid-pod",
      "label": "Solid Pod"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
      },
      {
        "@id": "urn:ngm:class:end-to-end-encryption",
        "label": "End-to-End Encryption"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:privacy-by-design",
        "label": "Privacy By Design"
      },
      {
        "@id": "urn:ngm:class:self-sovereign-identity",
        "label": "Self Sovereign Identity"
      },
      {
        "@id": "urn:ngm:class:consent-management",
        "label": "Consent Management"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:authorisation",
        "label": "Authorisation"
      },
      {
        "@id": "urn:ngm:class:data-portability",
        "label": "Data Portability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:data-marketplace",
        "label": "Data Marketplace"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      },
      {
        "@id": "urn:ngm:class:personal-data",
        "label": "Personal Data"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-database",
        "label": "Centralised Data Silo"
      },
      {
        "@id": "urn:ngm:class:data-broker",
        "label": "Data Broker"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:solid",
        "label": "W3C Solid"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      },
      {
        "@id": "urn:ngm:class:w3-c-did-core",
        "label": "W3C DID Core"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Machine Learning"
      },
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      }
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:personal-data-store:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:161b6fdb3fe1beccf8016bd942f46b9a589b69a39aa1c74de31881441fe54d44"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A Personal Data Store (PDS) is a user-controlled software system or vault that aggregates, stores, and selectively discloses an individual's personal data under the direct authority of the data subject. It enforces [[Consent Management]] through [[Verifiable Credentials]] and cryptographic [[Access Control]], enabling revocable, fine-grained sharing with third-party applications. PDSs embody [[Data Sovereignty]] and [[Privacy By Design]], decoupling data custody from service providers and restoring control to individuals. They underpin interoperable [[Digital Identity]] ecosystems, personalised [[Personal AI Assistant]] deployments, and compliance with regulatory frameworks such as [[GDPR]] and CCPA.

- ### Overview
  - The Personal Data Store concept emerged from the recognition that the dominant model of platform-controlled data silos — in which user data is harvested, processed, and monetised by service providers without meaningful user control — is both privacy-damaging and economically inefficient.
  - A PDS inverts this model: instead of data flowing to and residing inside each application's private database, it remains in a single user-controlled location and applications are granted time-limited, revocable read or write access.
  - This paradigm shift is sometimes described as moving from "data as a byproduct of service use" to "data as a personal asset under individual stewardship."
  - The concept intersects with [[Self-Sovereign Identity]] (SSI), where individuals hold cryptographic keys that prove ownership of identity attributes without relying on central directories.
  - Architecturally, a PDS typically consists of:
    - A secure storage layer (local device, personal cloud, or federated server)
    - An [[Authentication]] and [[Authorisation]] framework (OAuth-2-style grants, DID-based auth)
    - A data schema layer (often [[Linked Data]] vocabularies such as schema.org, FHIR for health, vCard for contacts)
    - A consent dashboard that surfaces what data exists, who can access it, and how to revoke access
    - APIs or protocol adapters (Solid, ActivityPub, OIDC, DIDComm) for application interoperability
  - Maturity is currently rated "emerging": several implementations are production-grade but mass-market adoption remains limited pending ecosystem coordination.

- ### Key Components
  - **Storage backend**: encrypted object store or graph database hosting the individual's data under user-controlled keys; may be self-hosted, hosted by a trusted provider, or distributed across edge devices.
  - **[[Decentralized Identifiers]] (DIDs)**: provide globally unique, cryptographically verifiable identifiers for the data subject that are not dependent on any central registry.
  - **[[Verifiable Credentials]]**: W3C-standardised data structures enabling third parties to issue attestations (age, qualifications, health status) that the PDS holder can selectively present without revealing the underlying raw data.
  - **[[Access Control]] policies**: fine-grained rules specifying which agents, for which purposes, for which time windows, may read or write which data subsets; implemented as Web Access Control (WAC) in the Solid ecosystem or as ZCAP-LD capability tokens.
  - **[[Consent Management]] layer**: user-facing interface and machine-readable policy store tracking consent receipts as defined by ISO/IEC 29184 and the Kantara Consent Receipt specification.
  - **[[End-to-End Encryption]]**: data at rest and in transit is encrypted using keys held only by the data subject, preventing even the PDS hosting provider from accessing content in plaintext.
  - **[[Data Portability]] APIs**: standards-compliant export and import interfaces (e.g., GDPR Article 20 mandated machine-readable export, DTP formats) ensuring the user can migrate without lock-in.
  - **[[Linked Data]] schemas**: RDF-based vocabularies that make stored data semantically interoperable across applications without requiring bespoke integration work per data pair.
  - **Audit log**: immutable, append-only record of all data access events, allowing the owner to retrospectively verify whether access terms were honoured.
  - **Agent interface**: programmatic APIs enabling trusted [[Personal AI Assistant]] agents to query the PDS on behalf of the user, e.g., to provide personalised recommendations without exporting data to cloud AI services.

- ### Applications and Use Cases
  - **Healthcare data control**: a patient's PDS aggregates EHR records from multiple providers; the patient grants a specialist temporary read access to relevant records only, revoking it after the consultation. Compatible with [[FHIR]] data standards.
  - **Financial data aggregation**: under Open Banking (PSD2 in the EU, CDR in Australia), a PDS acts as a consent broker, pulling transaction history from banks and selectively sharing it with budgeting apps or mortgage lenders without intermediary data brokers.
  - **Personalised advertising on user terms**: instead of tracking cookies and third-party data brokers, advertisers query a user's PDS for declared preferences; the user is compensated or simply retains control over what is shared via a [[Data Marketplace]] model.
  - **Education credential wallet**: academic certificates issued as [[Verifiable Credentials]] are held in the PDS; the holder presents cryptographic proofs of qualification to employers without revealing other transcript details.
  - **Metaverse identity portability**: avatars, reputations, and in-world asset ownership are anchored to a PDS-held DID, allowing the user to carry their digital identity and social graph across virtual environments without platform re-registration. Connects to [[Federated Identity]] patterns in the metaverse.
  - **Federated machine learning**: a research consortium's [[Federated Machine Learning]] pipeline queries consented data subsets from participant PDSs; raw data never leaves the individual's store, enabling population-level insights with individual privacy preservation.
  - **Smart-city services**: municipal apps (transit, waste collection, local alerts) read only the attributes a citizen has explicitly shared from their PDS, avoiding the surveillance model of centralised city data lakes.
  - **Decentralised social networking**: ActivityPub-connected PDSs let users host their own social graph data, enabling cross-platform following and posting without dependence on a centralised platform's terms of service.

- ### Relationships
  - uses:: [[Decentralized Identifiers]]
  - uses:: [[Access Control]]
  - uses:: [[Verifiable Credentials]]
  - uses:: [[End-to-End Encryption]]
  - uses:: [[Linked Data]]
  - supports:: [[Data Sovereignty]]
  - supports:: [[Privacy By Design]]
  - supports:: [[Self-Sovereign Identity]]
  - supports:: [[Consent Management]]
  - requires:: [[Authentication]]
  - requires:: [[Authorisation]]
  - requires:: [[Data Portability]]
  - enables:: [[Personal AI Assistant]]
  - enables:: [[Federated Identity]]
  - enables:: [[Data Marketplace]]
  - enables:: [[Selective Disclosure]]
  - relatedTo:: [[Digital Identity]]
  - relatedTo:: [[Data Governance]]
  - relatedTo:: [[Personal Data]]
  - relatedTo:: [[Zero-Knowledge Proof]]
  - contrastsWith:: [[Centralised Data Silo]]
  - contrastsWith:: [[Data Broker]]
  - standardizedBy:: [[W3C Solid]]
  - standardizedBy:: [[GDPR]]
  - standardizedBy:: [[W3C DID Core]]
  - bridges-to:: [[Federated Machine Learning]]
  - bridges-to:: [[Decentralised Autonomous Organisation]]

- ### Standards and Context
  - **W3C Solid**: Tim Berners-Lee's open standard (originally developed at MIT, now at Inrupt and standardised at W3C) that specifies a protocol for personal online datastores (Pods) using Linked Data principles. Solid Pods are the most mature open-standard PDS implementation available today.
  - **W3C DID Core**: defines [[Decentralized Identifiers]], the identity anchor mechanism for most PDS architectures, allowing authentication without centralised registries.
  - **W3C Verifiable Credentials Data Model**: specifies the credential format for attestations issued to and stored within a PDS.
  - **GDPR (General Data Protection Regulation, EU 2016/679)**: Articles 15–20 (rights of access, rectification, erasure, restriction, portability, and objection) create a regulatory mandate for PDS-like capabilities, driving adoption in European markets.
  - **CCPA / CPRA (California Consumer Privacy Act / Privacy Rights Act)**: analogous US state-level regulation driving similar data rights in the American market.
  - **ISO/IEC 29184**: international standard for online privacy notices and consent, relevant to PDS consent-receipt design.
  - **Kantara Consent Receipt**: community specification for a machine-readable JSON consent receipt, commonly referenced in PDS consent layers.
  - **MyData Global**: non-profit coalition promoting human-centric data management; the MyData Operator certification scheme provides a governance framework for PDS hosting services.
  - **OpenID Connect (OIDC) and OAuth 2.0**: widely used protocol layer for delegated authorisation flows between PDS and third-party applications.
  - **DIDComm**: DIF (Decentralised Identity Foundation) messaging protocol enabling secure, private communication between DIDs; used in PDS-to-agent and PDS-to-PDS protocols.
  - **ActivityPub (W3C)**: federated social networking protocol increasingly paired with PDS architectures to enable decentralised social graphs.
  - Regulatory tailwinds (GDPR, DSA, Data Act in the EU; CDR in Australia; emerging US federal privacy bills) are accelerating PDS adoption by mandating data portability and right-to-erasure capabilities that central silos struggle to implement cleanly.

- ### Contrasting Concepts
  - **[[Centralised Data Silo]]**: the dominant alternative, where each service platform holds user data in its own proprietary database with limited user visibility or control.
  - **[[Data Broker]]**: commercial entities that aggregate personal data from many sources and sell it; PDSs disintermediate this model by returning data ownership to the individual.
  - **Cloud storage services (Google Drive, iCloud)**: offer user-accessible storage but do not implement consent-based third-party access controls or semantic interoperability at the PDS level.

- ### Provenance
  - sources:: W3C Solid specification; W3C DID Core; W3C Verifiable Credentials Data Model; GDPR (EU 2016/679); MyData Global operator framework; Kantara Initiative Consent Receipt; ISO/IEC 29184; DIF DIDComm specification
  - updated:: 2026-06-13
