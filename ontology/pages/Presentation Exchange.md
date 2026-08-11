public:: true

# Presentation Exchange
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8afd7ab1df2b0a63a40bce9a8e50f6eba7f0d22646da3af915a8cb72ff6565a8",
  "@type": "Page",
  "vc:slug": "presentation-exchange",
  "title": "Presentation Exchange",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:technical-standard", "vc:label": "Technical Standard"},
    {"@id": "urn:visionflow:linked:decentralized-identity-foundation", "vc:label": "Decentralized Identity Foundation"},
    {"@id": "urn:visionflow:linked:verifiable-credentials", "vc:label": "Verifiable Credentials"},
    {"@id": "urn:visionflow:linked:self-sovereign-identity", "vc:label": "Self Sovereign Identity"},
    {"@id": "urn:visionflow:linked:digital-identity", "vc:label": "Digital Identity"},
    {"@id": "urn:visionflow:linked:decentralized-identifier", "vc:label": "Decentralized Identifier"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:presentation-exchange",
  "@type": "Class",
  "label": "Presentation Exchange",
  "definition": "A Decentralized Identity Foundation specification defining a data format by which verifiers articulate proof requirements (presentation definitions) and holders describe how submitted credentials satisfy them (presentation submissions). Presentation Exchange is transport-agnostic and credential-format-agnostic, and is the requirement language embedded in protocols such as OpenID for Verifiable Presentations to negotiate selective disclosure of verifiable credentials.",
  "domain": "standards",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:technical-standard",
    "label": "Technical Standard"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:decentralized-identity-foundation", "label": "Decentralized Identity Foundation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:self-sovereign-identity", "label": "Self Sovereign Identity"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:decentralized-identifier", "label": "Decentralized Identifier"}
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
  - "A Decentralized Identity Foundation specification defining a data format by which verifiers articulate proof requirements (presentation definitions) and holders describe how submitted credentials satisfy them (presentation submissions). Presentation Exchange is transport-agnostic and credential-format-agnostic, and is the requirement language embedded in protocols such as OpenID for Verifiable Presentations to negotiate selective disclosure of verifiable credentials."

- ### Semantic Classification
  - owl-class:: standards:PresentationExchange
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - part-of:: [[Decentralized Identity Foundation]]
  - depends-on:: [[Verifiable Credentials]]
  - enables:: [[Self Sovereign Identity]]

- ### Content

  ## Definition

  **Presentation Exchange** (PE) is a specification published by the [[Decentralized Identity Foundation]] (DIF) that standardises the negotiation step at the heart of credential-based interactions: a verifier must be able to say precisely what evidence it needs, and a holder's wallet must be able to say precisely how the credentials it presents satisfy that request. PE defines two JSON structures for this purpose — the **Presentation Definition**, in which the verifier declares input descriptors, constraints (JSONPath field filters, formats, issuer restrictions), and submission requirements (e.g. "two of the following three"), and the **Presentation Submission**, in which the holder maps each supplied credential to the descriptor it fulfils.

  The specification is deliberately agnostic about both transport and credential format. The same presentation definition can be conveyed over OpenID for Verifiable Presentations (OpenID4VP), DIDComm, or CHAPI, and can constrain W3C [[Verifiable Credentials]] (JSON-LD or JWT), AnonCreds, or ISO mDL/mdoc credentials. This decoupling lets ecosystems mix wallets, issuers, and verifiers without bilateral integration work, which is why PE became the de facto requirement language of the [[Self Sovereign Identity]] stack.

  In practice, PE is the machinery behind selective disclosure: rather than handing over a whole credential, a wallet evaluates the definition, identifies the minimal fields that satisfy the constraints, and constructs a presentation revealing only those. European Digital Identity (EUDI) wallet pilots and the OpenID4VP profile used them extensively, although later drafts of OpenID4VP introduce a simplified successor query language (DCQL), reflecting implementer feedback that full PE is expressive but complex.

  ## Technical Details

  - **Core objects**: `presentation_definition` (id, `input_descriptors[]`, optional `submission_requirements[]`, `format`) and `presentation_submission` (id, `definition_id`, `descriptor_map[]` with JSONPath locations).
  - **Constraint language**: per-field JSONPath selectors with JSON Schema filters; `limit_disclosure` signals that only requested fields may be revealed.
  - **Submission requirements**: rule-based combinators (`all`, `pick` with count/min/max) over descriptor groups, enabling policies such as "one government ID and one proof of address".
  - **Format negotiation**: declared per definition or per descriptor (`jwt_vc`, `ldp_vc`, `ac_vc`, `mso_mdoc`), letting a verifier accept multiple credential technologies in one request.
  - **Versions**: DIF has ratified PE v1.0.0, v2.0.0, v2.1.0 and v2.1.1; the working spec remains a pre-draft that continues to be refined from real-world wallet feedback. Widely implemented in wallet SDKs (Sphereon, walt.id, Credo).

  ## Current Landscape

  - OpenID4VP reached its 1.0 release in 2025 (draft 24 was published on 27 January 2025, draft 25 in April 2025), and it now defines a new query language — the Digital Credentials Query Language (DCQL) — alongside the older `presentation_definition` (Presentation Exchange) parameter.
  - DCQL was introduced into OpenID4VP at draft 22 (31 October 2024) and is explicitly designed to reduce the ambiguity and complexity of full PE; it uses a simpler explicit map keyed by identifiers instead of PE's JSONPath `descriptor_map`.
  - For EU-grade interoperability the balance has tipped: DCQL is the query format "preferred for new EUDI wallet deployments", and in the latest High Assurance Interoperability Profile (HAIP) DCQL is already the only mandated query language, positioning PE as the legacy path.
  - OpenWallet Foundation incubated dedicated TypeScript projects for OpenID4VP and DCQL in early 2025, signalling the shift of tooling investment toward DCQL while both formats remain supported in parallel.
  - PE nonetheless remains widely deployed in existing OpenID4VP implementations and continues to be accepted as an alternative to DCQL in current EUDI verification APIs, so the two coexist during the migration window.

  - **Sources**:
    - https://identity.foundation/presentation-exchange/
    - https://openid.net/specs/openid-4-verifiable-presentations-1_0-25.html
    - https://openwallet.foundation/2025/02/25/openid4vc-dcql-and-openid-federation-three-new-fundamental-typescript-projects-incubated-at-openwallet-foundation/
    - https://trustid-solutions.eu/en/articles/openid4vp-changes
