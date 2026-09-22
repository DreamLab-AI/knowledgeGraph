public:: true

# Identifier
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:285437db8c5e1541aa49708b4abd51642a065b66e4bac0901e75b44ce2d0cebe",
  "@type": "Page",
  "vc:slug": "identifier",
  "title": "Identifier",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:identification", "vc:label": "Identification"},
    {"@id": "urn:visionflow:linked:uri", "vc:label": "URI"},
    {"@id": "urn:visionflow:linked:namespace", "vc:label": "Namespace"},
    {"@id": "urn:visionflow:linked:decentralised-identifier", "vc:label": "Decentralised Identifier"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:identifier",
  "@type": "Class",
  "label": "Identifier",
  "definition": "A symbol, string, or token that unambiguously denotes an entity — a resource, person, organisation, device, dataset, or concept — within a defined scope, enabling that entity to be referenced, located, compared, and linked independently of its descriptive attributes. Identifiers are the foundational primitive of naming systems: their guarantees of uniqueness, persistence, and resolvability within a namespace determine what URIs, UUIDs, DIDs, and registry codes can be trusted to do.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:identification",
    "label": "Identification"
  },
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:uri", "label": "URI"},
      {"@id": "urn:ngm:class:namespace", "label": "Namespace"},
      {"@id": "urn:ngm:class:unique-identifier", "label": "Unique Identifier"},
      {"@id": "urn:ngm:class:decentralised-identifier", "label": "Decentralised Identifier"}
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
  - "A symbol, string, or token that unambiguously denotes an entity — a resource, person, organisation, device, dataset, or concept — within a defined scope, enabling that entity to be referenced, located, compared, and linked independently of its descriptive attributes. Identifiers are the foundational primitive of naming systems: their guarantees of uniqueness, persistence, and resolvability within a namespace determine what URIs, UUIDs, DIDs, and registry codes can be trusted to do."

- ### Semantic Classification
  - owl-class:: standards:Identifier
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Identification]]
  - enables:: [[Digital Identity]]
  - related-to:: [[URI]]
  - related-to:: [[Namespace]]

- ### Content

  ## Definition

  An **identifier** is a name whose job is denotation: it picks out exactly one entity within a stated scope so that systems and people can refer to that entity reliably. Unlike a description, an identifier carries no obligation to say anything true about what it names — "urn:isbn:0451450523" identifies a book whether or not you know its title. This separation of reference from description is what makes identifiers composable: records, links, indexes, and protocols can all be built on the stable string while the entity's attributes change.

  Identifier schemes vary along a small set of design axes. *Scope* defines where uniqueness holds — locally (a database primary key), organisationally (an employee number), or globally (a [[URI]], a UUID). *Assignment* may be centralised through a registry, hierarchical through delegated [[Namespace]] authority (DNS, ISBN), or decentralised through cryptographic self-generation, as in content hashes and [[Decentralised Identifier]] methods. *Persistence* governs whether an identifier may ever be reassigned; *resolvability* determines whether it can be dereferenced to reach the entity or its description; and *opacity* distinguishes meaningless surrogate keys from semantically loaded codes that embed classification and risk breaking when the world changes.

  In this graph, the identifier class anchors a family of specialisations and mechanisms: centralised identifiers issued by registries, self-sovereign decentralised identifiers, URI schemes that syntactically partition the global identifier space, and encoding conventions such as Multicodec that make an identifier's format self-describing. Reliable identifiers are in turn the substrate on which [[Digital Identity]], linked data, and interoperable registries are built.

  ## Technical Details

  - **Global schemes**: URI/IRI (RFC 3986/3987) for web-scale naming; URN namespaces for location-independent names; UUID (RFC 9562) for coordination-free 128-bit uniqueness.
  - **Sector registries**: ISBN and DOI for publications, ORCID for researchers, LEI for legal entities, GTIN for trade items — centralised or federated authorities guaranteeing uniqueness and metadata.
  - **Cryptographic identifiers**: content-addressed hashes (Git commits, IPFS CIDs) and DID methods derive the identifier from key material or content, making integrity verifiable without a registry.
  - **Persistence practice**: "cool URIs don't change" — persistent-identifier infrastructure (DOI, ARK, PURL) separates the stable name from mutable locations via resolution services.
  - **Design pitfalls**: reusing identifiers, embedding mutable semantics (smart keys), and scope collisions when local identifiers leak into global contexts are the classic failure modes.

  ## Current Landscape

  - The UUID standard was fully modernised by **RFC 9562** (Proposed Standard, May 2024), which obsoletes RFC 4122 and adds sortable, timestamp-ordered UUIDv7 plus the reordered UUIDv6 and free-form UUIDv8 — a direct response to database and distributed-systems needs where random UUIDv4 keys fragment index locality.
  - **W3C Decentralized Identifiers (DID) Core v1.0** became a W3C Recommendation in July 2022, defining a cryptographically verifiable, registry-independent identifier that (unlike a UUID) is both resolvable and provable; DID methods and the accompanying Verifiable Credentials work remain the fastest-moving area of new identifier design.
  - The URI/IRI family (RFC 3986/3987) still underpins web-scale naming, while ISO/IEC 9834 / ITU-T X.667 keep the OID and UUID registries technically aligned across ISO and the IETF.
  - Persistent-identifier infrastructure (DOI, ORCID, ROR, ARK) continues to expand in research and cultural-heritage settings, reinforcing the "cool URIs don't change" separation of stable name from mutable location.

  **Sources**:
  - https://www.rfc-editor.org/info/rfc9562/
  - https://www.w3.org/TR/did-core/
  - https://en.wikipedia.org/wiki/Universally_unique_identifier

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
