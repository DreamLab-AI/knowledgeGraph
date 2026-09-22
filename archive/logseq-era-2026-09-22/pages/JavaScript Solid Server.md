public:: true
alias:: javascriptsolidserver, JavaScriptSolidServer, JSS, JS Solid Server

# JavaScript Solid Server
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:javascript-solid-server",
  "@type": "Page",
  "title": "JavaScript Solid Server",
  "vc:slug": "javascript-solid-server",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:javascript-solid-server",
  "@type": "Class",
  "label": "JavaScript Solid Server",
  "definition": "JavaScript Solid Server (JSS) is a Solid-protocol personal-data-server implementation that extends standard Solid with Nostr-native identity, positioning it as a practical superset of Solid. Alongside conventional Solid Pod storage and Linked Data Platform semantics, it adds did:nostr resolution for login, NIP-07/NIP-98 Nostr authentication, and WebAuthn PRF key management, so a single secp256k1 keypair serves both as a Nostr identity and as the credential controlling a Solid Pod. In the DreamLab single-sign-on stack it is realised by the JavaScriptSolidServer organisation's components: the PodKey browser extension (window.nostr / NIP-98 headers), an SSO redirect service that resolves did:nostr, and a Rust pod backend (solid-pod-rs); it fronts services such as the Nostr BBS forum and the VisionClaw knowledge-graph governance layer.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:solid",
      "label": "Solid"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:solid-pod-server",
      "label": "Solid Pod Server"
    }
  ],
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:solid",
        "label": "Solid"
      },
      {
        "@id": "urn:ngm:class:solid-oidc",
        "label": "Solid-OIDC"
      },
      {
        "@id": "urn:ngm:class:solid-pod",
        "label": "Solid Pod"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:did-nostr",
        "label": "did:nostr"
      },
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:web-id",
        "label": "WebID"
      },
      {
        "@id": "urn:ngm:class:rdf",
        "label": "RDF"
      },
      {
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      },
      {
        "@id": "urn:ngm:class:web-authn",
        "label": "WebAuthn"
      },
      {
        "@id": "urn:ngm:class:rust-systems-programming-language",
        "label": "Rust"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-sovereignty",
        "label": "Data Sovereignty"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      },
      {
        "@id": "urn:ngm:class:personal-data-store",
        "label": "Personal Data Store"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:nostr",
        "label": "Nostr"
      },
      {
        "@id": "urn:ngm:class:did-nostr",
        "label": "did:nostr"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:at-protocol",
        "label": "AT Protocol"
      },
      {
        "@id": "urn:ngm:class:activity-pub",
        "label": "ActivityPub"
      },
      {
        "@id": "urn:ngm:class:decentralised-web",
        "label": "Decentralised Web"
      },
      {
        "@id": "urn:ngm:class:web-contracts",
        "label": "Web Contracts"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "ResearchAuthored"
  }
}
```

- ### Definition
  - JavaScript Solid Server (JSS) is a [[Solid]] personal-data-server that is a *superset of Solid*: it speaks the standard Solid Pod and [[Linked Data]] protocols, and adds [[Nostr]]-native identity via [[did:nostr]], so a user's secp256k1 key both signs Nostr events and authenticates to their [[Solid Pod]].

- ### Overview
  - Standard Solid authenticates with [[Solid-OIDC]] and [[WebID]]. JSS keeps those and layers Nostr on top: login resolves a `did:nostr:<pubkey>` to a [[WebID]]/Pod, and requests are authorised with NIP-98 signed HTTP events rather than (or in addition to) bearer tokens. This removes the registrar/identity-provider dependency that ordinary Solid deployments carry.

- ### Architecture (DreamLab SSO stack)
  - **PodKey** — browser extension providing `window.nostr` (NIP-07) and automatic NIP-98 `Authorization` headers; the key-management boundary between users and backends. Maintained by the JavaScriptSolidServer organisation.
  - **SSO service** — handles the Solid Pod login redirect flow via [[did:nostr]] resolution.
  - **solid-pod-rs** — the [[Rust]] Pod storage backend.
  - JSS fronts the Nostr BBS forum and the VisionClaw knowledge-graph governance layer, and interoperates with [[WebAuthn]] PRF for hardware-backed keys.

- ### Why a superset
  - Conventional Solid: pods + WebID + Solid-OIDC.
  - JSS adds: [[did:nostr]] identity, NIP-07/NIP-98 auth, [[WebAuthn]] PRF, Rust storage, and a path to anchor pod documents to Bitcoin via [[Block Trails]] and [[Web Contracts]] — making the same key a unit of identity, authorisation, and provenance.

- ### Relationships
  - is-subclass-of:: [[Solid]]
  - implements:: [[Solid-OIDC]]
  - implements:: [[Solid Pod]]
  - uses:: [[did:nostr]]
  - uses:: [[Nostr]]
  - uses:: [[WebID]]
  - uses:: [[Rust]]
  - has-part:: [[PodKey]]
  - enables:: [[Data Sovereignty]]
  - enables:: [[Personal Data Store]]
  - bridges-to:: [[Nostr]]
  - related-to:: [[Web Contracts]]
  - related-to:: [[AT Protocol]]

- ### Provenance
  - sources:: github.com/JavaScriptSolidServer (PodKey, sso, solid-pod-rs); Solid Protocol specification
  - updated:: 2026-06-14
