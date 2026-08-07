public:: true

# DID Controller
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb47410033f168c2d3a74bdb74d5718592859cf14953a70ae8bce1f83567865f",
  "@type": "Page",
  "vc:slug": "did-controller",
  "title": "DID Controller",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralized-identifiers",
      "vc:label": "Decentralized Identifiers"
    },
    {
      "@id": "urn:visionflow:linked:did-document",
      "vc:label": "DID Document"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-key",
      "vc:label": "Cryptographic Key"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:did-controller",
  "@type": "Class",
  "label": "DID Controller",
  "definition": "The entity—person, organisation, or autonomous system—authorised to make changes to a DID document, as defined by the W3C DID Core specification. The DID controller proves its authority by controlling the cryptographic keys or verification methods designated in the DID document, and may be the DID subject itself (self-sovereign control), a guardian acting for a subject such as a child or an IoT device, or a set of parties sharing control. It is unrelated to the PID controller of control engineering, with which it shares only a surface string.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:entity",
    "label": "Entity"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:decentralized-identifiers",
        "label": "Decentralized Identifiers"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-key",
        "label": "Cryptographic Key"
      },
      {
        "@id": "urn:ngm:class:key-management",
        "label": "Key Management"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:did-document",
        "label": "DID Document"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The entity—person, organisation, or autonomous system—authorised to make changes to a DID document, as defined by the W3C DID Core specification. The DID controller proves its authority by controlling the cryptographic keys or verification methods designated in the DID document, and may be the DID subject itself (self-sovereign control), a guardian acting for a subject such as a child or an IoT device, or a set of parties sharing control. It is unrelated to the PID controller of control engineering, with which it shares only a surface string."

- ### Semantic Classification
  - owl-class:: security:DIDController
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Entity]]
  - part-of:: [[Decentralized Identifiers]]
  - requires:: [[Cryptographic Key]]
  - related-to:: [[DID Document]]

- ### Content

  ## Definition

  The **DID controller** is the answer to the question every identifier system must settle: who is allowed to change what this identifier means? In the W3C DID Core architecture behind [[Decentralized Identifiers]], each DID resolves to a [[DID Document]] listing verification methods (public keys) and service endpoints. The controller is the entity with authority to update or deactivate that document—rotating keys, adding endpoints, delegating capabilities—and it demonstrates that authority cryptographically, by producing signatures with keys the current document (or the DID method's rules) designates as controlling.

  The specification deliberately separates three roles that casual usage conflates. The DID *subject* is what the identifier refers to; the DID *controller* is who governs its document; the *verification method* is the key material used to prove things. In the common self-sovereign case, subject and controller coincide—a person controls their own DID. But the separation enables guardianship (a parent controls a child's DID, a manufacturer controls a device's DID until handover), organisational control (a company controls DIDs for its departments), and shared or threshold control, where a DID document names multiple controllers or requires several signatures for changes.

  Controllership is therefore where decentralised identity's promises are actually cashed out—or broken. Whoever holds the controlling keys *is*, operationally, the controller; robust [[Key Management]]—secure storage, rotation, and recovery—is not an implementation detail but the substance of control. Lose the keys and control is lost; leak them and it is stolen. This also disambiguates the term completely from the PID controller of control engineering: the proportional-integral-derivative device regulates dynamic systems, while the DID controller is a governance role in an identity architecture. Only the letters coincide.

  ## Technical Details

  In a DID document the `controller` property names one or more DIDs authorised to make changes; authority to *use* the DID for specific purposes is expressed through verification relationships—`authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, and `capabilityDelegation`—each pointing at verification methods. How a controller actually effects an update is method-specific: `did:web` controllers edit a file on a domain they administer, `did:key` documents are immutable derivations of a single key, ledger-based methods require signed transactions accepted by the network, and `did:peer` updates propagate directly between relationship parties.

  Practical deployments (EU eIDAS 2.0 wallets, mobile driving licences, supply-chain credentials) concentrate on the hard edges of controllership: recovery when a sole controller loses keys (social recovery, custodial fallback), succession when an organisational controller dissolves, and the privacy risk that controller relationships—one DID naming another as controller—create correlatable graphs. Guardianship transitions, such as a device DID passing from manufacturer to owner, remain an active design area in the W3C and Decentralized Identity Foundation communities.

  ## Current Landscape

  - **DID Core moving to v1.1**: the W3C Decentralized Identifier Working Group published the First Public Working Draft of DIDs v1.1 in January 2025 and continued Recommendation-track work through 2026; the controller model — an entity proving authority over a DID document via cryptographic verification methods, without permission from any central party — is carried forward unchanged from DID Core 1.0.
  - **Resolution split out**: DID Resolution is now specified separately (DID Resolution v0.3), so how a controller's update is discovered and dereferenced is handled outside the core data model.
  - **eIDAS 2.0 / EUDIW**: the EU's European Digital Identity Wallet Architecture and Reference Framework (ARF) drives real-world controllership requirements — self-representation, recovery, and wallet-secure-cryptographic-application (WSCA) key custody — analysed in the EDPS TechDispatch #3/2025 on digital identity wallets (December 2025).
  - **Key management is the substance of control**: guardianship handover, social/custodial recovery, and threshold or multi-controller schemes remain the active engineering frontier, since whoever holds the controlling keys is operationally the controller.

  **Sources**:
  - https://www.w3.org/TR/did-1.1/
  - https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-12-15-techdispatch-32025-digital-identity-wallets_en
