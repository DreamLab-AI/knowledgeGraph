public:: true

# Specification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:83ae2f5a38db4ea1ec02e0210a84469fdc50dafe1b6a08a6d0904027baf6f32e",
  "@type": "Page",
  "vc:slug": "specification",
  "title": "Specification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    },
    {
      "@id": "urn:visionflow:linked:open-standards",
      "vc:label": "Open Standards"
    },
    {
      "@id": "urn:visionflow:linked:interoperability",
      "vc:label": "Interoperability"
    },
    {
      "@id": "urn:visionflow:linked:standardisation",
      "vc:label": "Standardisation"
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
  "@id": "urn:ngm:class:specification",
  "@type": "Class",
  "label": "Specification",
  "definition": "A precise, documented statement of the requirements, behaviour, interfaces, or characteristics that a system, product, or process must satisfy, written so that independent parties can implement against it and verify conformance to it. Specifications range from engineering requirements documents and CAD tolerances to protocol and file-format definitions published by standards bodies, and they are the normative core of every technical standard: the testable text that separates what conforms from what does not.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:technical-standard",
    "label": "Technical Standard"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:open-standards",
        "label": "Open Standards"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:standardisation",
        "label": "Standardisation"
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
  - "A precise, documented statement of the requirements, behaviour, interfaces, or characteristics that a system, product, or process must satisfy, written so that independent parties can implement against it and verify conformance to it. Specifications range from engineering requirements documents and CAD tolerances to protocol and file-format definitions published by standards bodies, and they are the normative core of every technical standard: the testable text that separates what conforms from what does not."

- ### Semantic Classification
  - owl-class:: standards:Specification
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - part-of:: [[Open Standards]]
  - enables:: [[Interoperability]]
  - related-to:: [[Standardisation]]

- ### Content

  ## Definition

  A **specification** is the document that says, exactly and checkably, what something must be or do. Its defining property is precision sufficient for two independent parties who have never met: one implements from the text alone, the other tests against the text alone, and if both did their jobs the implementation conforms. This is what distinguishes a specification from a description or a design sketch — every requirement is stated so that conformance is decidable, conventionally signalled with normative keywords (MUST, SHOULD, MAY as defined in RFC 2119/8174) and accompanied by conformance clauses and test criteria.

  Specifications appear at every level of engineering. Requirements specifications capture what a system must achieve; interface and protocol specifications (TCP in RFC 9293, HTTP, USB, Bluetooth) define the messages and state machines by which independent implementations interoperate; file-format and language specifications (PDF, C++, ECMAScript) pin down meaning so that documents and programs outlive any single implementation; and in mechanical and product engineering, drawings and CAD models carry dimensional and tolerance specifications (GD&T under ISO 1101 or ASME Y14.5) that manufacturing and inspection are contractually held to. Formal methods push precision to its limit, writing specifications in mathematical languages (TLA+, Alloy, Z) that machines can check implementations against.

  In this graph the specification is the normative heart of a [[Technical Standard]]: [[Standardisation]] is the process by which a community negotiates a specification into an agreed, published standard, an [[Open Standards]] regime is one in which those specifications are publicly available and implementable without discrimination, and [[Interoperability]] is what conforming implementations of a shared specification buy — vendors compete on quality while their products still work together.

  ## Technical Details

  - **Anatomy**: scope, normative references, terms and definitions, conformance clauses, normative requirements, and informative annexes; good practice separates normative text (binding) from informative text (explanatory) unambiguously.
  - **Quality attributes**: completeness, consistency (no two requirements conflict), unambiguity, verifiability (each requirement maps to a test), and traceability from requirement to implementation to test case — the concerns codified in ISO/IEC/IEEE 29148 for requirements engineering.
  - **Lifecycle**: draft, review, ratification, publication, errata, and versioned revision; standards bodies (ISO, IEC, IETF, W3C, ETSI) each define maturity ladders such as the IETF's Internet-Draft → Proposed Standard → Internet Standard track.
  - **Conformance infrastructure**: reference implementations, test suites, and certification programmes (e.g. Khronos conformance tests, USB-IF certification) close the loop between specification text and shipping products; specification ambiguity discovered by divergent implementations is fed back as errata.
  - **Executable specifications**: modern practice increasingly makes the specification machine-readable — OpenAPI for HTTP interfaces, JSON Schema and SHACL for data, IDL for binary protocols — so that validators, code generators, and contract tests are derived from the specification rather than written beside it.

  ## Current Landscape

  - **Normative-keyword conformance**: the RFC 2119 / RFC 8174 keyword set (MUST, SHOULD, MAY, published as BCP 14) remains the standard grammar of conformance; RFC 8174 (May 2017) clarified that only UPPERCASE usage carries the defined normative meaning, resolving a long-standing ambiguity that persists across IETF, W3C, and OASIS documents.
  - **Machine-readable HTTP specs**: OpenAPI 3.1 (2021) realigned its Schema Object with JSON Schema Draft 2020-12, and the OpenAPI Initiative has since published the 3.2.0 line (2025), continuing the shift towards specifications that are directly consumable by validators, code generators, and contract-testing tools.
  - **Standards-body keyword guidance**: OASIS's keyword guidelines (updated 2022) formally fold RFC 8174 into BCP 14 and align it with the ISO/IEC Directives, underscoring that changing a lowercase "must" to UPPERCASE "MUST" materially changes a specification's conformance requirements.
  - **Executable and contract-first practice**: JSON Schema, SHACL, and OpenAPI increasingly serve as the single normative artefact from which servers, clients, and tests are derived, tightening the loop between specification text and shipping software.

  **Sources**:
  - https://datatracker.ietf.org/doc/html/rfc8174
  - https://swagger.io/specification/
  - https://spec.openapis.org/oas/
  - https://www.oasis-open.org/policies-guidelines/keyword-guidelines-for-oasis-specifications-and-standards/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
