public:: true

# At Protocol

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:at-protocol",
  "@type": "Page",
  "title": "At Protocol",
  "vc:slug": "at-protocol",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:at-protocol",
  "@type": "Class",
  "label": "At Protocol",
  "definition": "The AT Protocol (Authenticated Transfer Protocol) is an open, federated networking protocol for decentralised social applications, originally developed for Bluesky, that combines portable accounts, signed data repositories, and account migration with a separation between data hosting and algorithmic curation. It uses decentralised identifiers and content-addressed records so users own their identity and data independently of any single provider. The protocol aims to deliver large-scale interoperable social networking with user choice over feeds and moderation.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-standards",
      "label": "Open Standards"
    }
  ],
  "relations": {
    "partOf": {
      "@id": "urn:ngm:class:open-standards",
      "label": "Open Standards"
    },
    "implements": {
      "@id": "urn:ngm:class:protocol",
      "label": "Open Standards"
    },
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:activity-pub",
        "label": "ActivityPub"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:did",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:did",
        "label": "Decentralised Identifiers"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:federation",
        "label": "Federation"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ],
    "supports": {
      "@id": "urn:ngm:class:federation",
      "label": "Federation"
    },
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cross-platform-identity",
        "label": "Cross-Platform Identity"
      },
      {
        "@id": "urn:ngm:class:activity-pub",
        "label": "ActivityPub"
      }
    ],
    "dependsOn": {
      "@id": "urn:ngm:class:did",
      "label": "Decentralised Identifiers"
    },
    "bridgesTo": {
      "@id": "urn:ngm:class:infrastructure",
      "label": "Infrastructure"
    },
    "hasPart": {
      "@id": "urn:ngm:class:content-addressing",
      "label": "Content Addressing"
    }
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
  - The [[At Protocol]] is an [[Open Standards]] networking protocol for decentralised social apps.
  - It builds on [[Decentralised Identifiers]] and [[Content Addressing]] for portable identity and data.
  - It is an alternative to [[ActivityPub]] and supports [[Federation]] with user-chosen curation.
- ### Overview
  - The AT Protocol gives each user a portable account anchored by a decentralised identifier, separable from any hosting provider.
  - Personal data repositories are signed, content-addressed collections that can be migrated between hosts.
  - A separation of layers distinguishes data hosting from indexing and algorithmic feed generation.
  - This architecture targets web-scale social networking while preserving user ownership and choice of moderation.
- ### Mechanisms
  - Decentralised identifiers — stable, portable account identity independent of hosts.
  - Signed data repositories — content-addressed, verifiable per-user record stores.
  - Account portability — migration of identity and data between providers.
  - Lexicon schemas — typed, interoperable record and method definitions.
  - Composable feeds — open algorithmic curation and stackable moderation services.
- ### Applications
  - Decentralised microblogging and social networks such as Bluesky.
  - Portable identity across competing client and feed providers.
  - User-selected algorithmic feeds and labelling services.
  - Interoperable third-party applications over shared repositories.
- ### Relationships
  - The AT Protocol is an open standard for decentralised social networking and contrasts with ActivityPub.
  - partOf:: [[Open Standards]]
  - implements:: [[Open Standards]]
  - contrastsWith:: [[ActivityPub]]
  - requires:: [[Decentralised Identifiers]]
  - requires:: [[Content Addressing]]
  - uses:: [[Decentralised Identifiers]]
  - uses:: [[Content Addressing]]
  - enables:: [[Federation]]
  - enables:: [[Decentralised Identity]]
  - supports:: [[Federation]]
  - relatedTo:: [[Cross-Platform Identity]]
  - relatedTo:: [[ActivityPub]]
  - dependsOn:: [[Decentralised Identifiers]]
  - bridgesTo:: [[Infrastructure]]
  - hasPart:: [[Content Addressing]]
- ### Provenance
  - updated:: 2026-06-15
  - source:: GapMaterialisation inference over the narrativegoldmine ontology mesh
  - attributedTo:: did:nostr:ontology-mesh
