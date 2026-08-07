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
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
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
  - **Versions**: PE v1.0 (2021) and v2.0 (2023); v2 tightened the feature set and clarified conformance. Widely implemented in wallet SDKs (Sphereon, walt.id, Credo) and referenced by OpenID4VP drafts up to draft 20+.
