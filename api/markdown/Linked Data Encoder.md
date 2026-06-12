public:: true

# Linked Data Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fa8dd2fcb5e4bcdc9e1d3c80144106b8c41732ac02f7a6f320c9bd1b727d0de7",
  "@type": "Page",
  "vc:slug": "linked-data-encoder",
  "title": "Linked Data Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adr-012",
      "vc:label": "ADR-012"
    },
    {
      "@id": "urn:visionflow:linked:agentic-systems-domain",
      "vc:label": "AgenticSystemsDomain"
    },
    {
      "@id": "urn:visionflow:linked:canonical-json",
      "vc:label": "Canonical JSON"
    },
    {
      "@id": "urn:visionflow:linked:context-pinning",
      "vc:label": "Context Pinning"
    },
    {
      "@id": "urn:visionflow:linked:cross-system-querying",
      "vc:label": "Cross-System Querying"
    },
    {
      "@id": "urn:visionflow:linked:data-integration-domain",
      "vc:label": "DataIntegrationDomain"
    },
    {
      "@id": "urn:visionflow:linked:encoding-layer",
      "vc:label": "EncodingLayer"
    },
    {
      "@id": "urn:visionflow:linked:json-ld-1-1",
      "vc:label": "JSON-LD 1.1"
    },
    {
      "@id": "urn:visionflow:linked:json-ld-1-1-spec",
      "vc:label": "JSON-LD 1.1 Spec"
    },
    {
      "@id": "urn:visionflow:linked:json-ld-1-1-standard",
      "vc:label": "JSON-LD 1.1 Standard"
    },
    {
      "@id": "urn:visionflow:linked:json-ld-context",
      "vc:label": "JSON-LD Context"
    },
    {
      "@id": "urn:visionflow:linked:json-ld-context",
      "vc:label": "JSON-LD Context"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph-integration",
      "vc:label": "Knowledge Graph Integration"
    },
    {
      "@id": "urn:visionflow:linked:linked-data-consumption",
      "vc:label": "Linked Data Consumption"
    },
    {
      "@id": "urn:visionflow:linked:rdf-semantics",
      "vc:label": "RDF Semantics"
    },
    {
      "@id": "urn:visionflow:linked:rdf-store",
      "vc:label": "RDF Store"
    },
    {
      "@id": "urn:visionflow:linked:rfc-8785-canonical-json",
      "vc:label": "RFC 8785 Canonical JSON"
    },
    {
      "@id": "urn:visionflow:linked:semantic-federation",
      "vc:label": "Semantic Federation"
    },
    {
      "@id": "urn:visionflow:linked:semantic-mapping",
      "vc:label": "Semantic Mapping"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web-domain",
      "vc:label": "SemanticWebDomain"
    },
    {
      "@id": "urn:visionflow:linked:solid-pod-storage",
      "vc:label": "Solid Pod Storage"
    },
    {
      "@id": "urn:visionflow:linked:uri-resolution",
      "vc:label": "URI Resolution"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-linked-data",
      "vc:label": "W3C Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-linked-data-platform",
      "vc:label": "W3C Linked Data Platform"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-vocabulary",
      "vc:label": "W3C Vocabulary"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:federation-surface",
      "vc:label": "Federation Surface"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:owl:class:uri-canonicaliser",
      "vc:label": "URI Canonicaliser"
    },
    {
      "@id": "urn:visionflow:owl:class:uri-canonicaliser",
      "vc:label": "URI Canonicaliser"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Linked Data Encoder"
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
  "@id": "urn:ngm:class:linked-data-encoder",
  "@type": "Class",
  "label": "Linked Data Encoder",
  "definition": "A semantic encoding pipeline that transforms agent state, credentials, events, and metadata into JSON-LD 1.1 format using pinned, versioned JSON-LD Context|W3C JSON-LD contexts, enabling standardised Federation Surface|federation surfaces (S1–S11) that are queryable, linkable, and mac...",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-data-management",
      "label": "Data Management"
    },
    {
      "@id": "urn:ngm:class:data-layer",
      "label": "Data Layer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:context-pinning",
        "label": "Context Pinning"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld-context",
        "label": "JSON-LD Context"
      },
      {
        "@id": "urn:ngm:class:semantic-mapping",
        "label": "Semantic Mapping"
      },
      {
        "@id": "urn:ngm:class:uri-resolution",
        "label": "URI Resolution"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:canonical-json",
        "label": "Canonical JSON"
      },
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld-1-1-standard",
        "label": "JSON-LD 1.1 Standard"
      },
      {
        "@id": "urn:ngm:class:w-3-c-vocabulary",
        "label": "W3C Vocabulary"
      },
      {
        "@id": "urn:ngm:class:uri-canonicaliser",
        "label": "URI Canonicaliser"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-system-querying",
        "label": "Cross-System Querying"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-integration",
        "label": "Knowledge Graph Integration"
      },
      {
        "@id": "urn:ngm:class:linked-data-consumption",
        "label": "Linked Data Consumption"
      },
      {
        "@id": "urn:ngm:class:semantic-federation",
        "label": "Semantic Federation"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-ld-1-1",
        "label": "JSON-LD 1.1"
      },
      {
        "@id": "urn:ngm:class:rdf-semantics",
        "label": "RDF Semantics"
      },
      {
        "@id": "urn:ngm:class:w3-c-linked-data",
        "label": "W3C Linked Data"
      }
    ]
  },
  "quality": 0.87,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:linked-data-encoder:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fa8dd2fcb5e4bcdc9e1d3c80144106b8c41732ac02f7a6f320c9bd1b727d0de7"
  },
  "vc:resolutions": [
    {
      "raw": "[[ADR-012]]",
      "resolved": "urn:visionflow:linked:adr-012",
      "kind": "StubLink"
    },
    {
      "raw": "[[AgenticSystemsDomain]]",
      "resolved": "urn:visionflow:linked:agentic-systems-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Canonical JSON]]",
      "resolved": "urn:visionflow:linked:canonical-json",
      "kind": "StubLink"
    },
    {
      "raw": "[[Context Pinning]]",
      "resolved": "urn:visionflow:linked:context-pinning",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-System Querying]]",
      "resolved": "urn:visionflow:linked:cross-system-querying",
      "kind": "StubLink"
    },
    {
      "raw": "[[DataIntegrationDomain]]",
      "resolved": "urn:visionflow:linked:data-integration-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[EncodingLayer]]",
      "resolved": "urn:visionflow:linked:encoding-layer",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD 1.1]]",
      "resolved": "urn:visionflow:linked:json-ld-1-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD 1.1 Spec]]",
      "resolved": "urn:visionflow:linked:json-ld-1-1-spec",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD 1.1 Standard]]",
      "resolved": "urn:visionflow:linked:json-ld-1-1-standard",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD Context]]",
      "resolved": "urn:visionflow:linked:json-ld-context",
      "kind": "StubLink"
    },
    {
      "raw": "[[JSON-LD Context|W3C JSON-LD contexts]]",
      "resolved": "urn:visionflow:linked:json-ld-context",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Graph Integration]]",
      "resolved": "urn:visionflow:linked:knowledge-graph-integration",
      "kind": "StubLink"
    },
    {
      "raw": "[[Linked Data Consumption]]",
      "resolved": "urn:visionflow:linked:linked-data-consumption",
      "kind": "StubLink"
    },
    {
      "raw": "[[RDF Semantics]]",
      "resolved": "urn:visionflow:linked:rdf-semantics",
      "kind": "StubLink"
    },
    {
      "raw": "[[RDF Store]]",
      "resolved": "urn:visionflow:linked:rdf-store",
      "kind": "StubLink"
    },
    {
      "raw": "[[RFC 8785 Canonical JSON]]",
      "resolved": "urn:visionflow:linked:rfc-8785-canonical-json",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Federation]]",
      "resolved": "urn:visionflow:linked:semantic-federation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Semantic Mapping]]",
      "resolved": "urn:visionflow:linked:semantic-mapping",
      "kind": "StubLink"
    },
    {
      "raw": "[[SemanticWebDomain]]",
      "resolved": "urn:visionflow:linked:semantic-web-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solid Pod Storage|Solid pods]]",
      "resolved": "urn:visionflow:linked:solid-pod-storage",
      "kind": "StubLink"
    },
    {
      "raw": "[[URI Resolution]]",
      "resolved": "urn:visionflow:linked:uri-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Linked Data]]",
      "resolved": "urn:visionflow:linked:w3-c-linked-data",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Linked Data Platform]]",
      "resolved": "urn:visionflow:linked:w3-c-linked-data-platform",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Vocabulary]]",
      "resolved": "urn:visionflow:linked:w3-c-vocabulary",
      "kind": "StubLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Federation Surface|federation surfaces]]",
      "resolved": "urn:visionflow:owl:class:federation-surface",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:owl:class:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[URI Canonicaliser]]",
      "resolved": "urn:visionflow:owl:class:uri-canonicaliser",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[URI Canonicaliser|URI Canonicaliser]]",
      "resolved": "urn:visionflow:owl:class:uri-canonicaliser",
      "kind": "ResolvedLink"
    }
  ],
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
  - A semantic encoding pipeline that transforms agent state, credentials, events, and metadata into [[JSON-LD 1.1]] format using pinned, versioned [[JSON-LD Context|W3C JSON-LD contexts]], enabling standardised [[Federation Surface|federation surfaces]] (S1–S11) that are queryable, linkable, and machine-readable without agent-specific API adapters.

- ### Semantic Classification
  - owl-class:: infrastructure:LinkedDataEncoder
  - owl-role:: Process
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[SemanticWebDomain]], [[DataIntegrationDomain]]
  - implemented-in-layer:: [[DataLayer]], [[EncodingLayer]]

- ### Relationships
  - has-part:: [[JSON-LD Context]], [[Semantic Mapping]], [[Context Pinning]], [[URI Resolution]]
  - requires:: [[JSON-LD 1.1 Standard]], [[W3C Vocabulary]], [[Canonical JSON]], [[URI Canonicaliser]]
  - enables:: [[Linked Data Consumption]], [[Cross-System Querying]], [[Semantic Federation]], [[Knowledge Graph Integration]]
  - implements:: [[JSON-LD 1.1]], [[W3C Linked Data]], [[RDF Semantics]]
  - bridges-to:: [[Knowledge Graph]] (domain: ngm), [[Semantic Web Linked Data Standard]] (domain: ngm), [[RDF Store]] (domain: ngm)

- ### Content

  The Linked Data Encoder is a separate subsystem that transforms internal agent state into [[JSON-LD 1.1]] documents. It is decoupled from agent logic, allowing agents to operate without semantic knowledge whilst still emitting federated data.

  #### Core Principle: Context Pinning

  [[JSON-LD 1.1]] documents reference a `@context` that defines how properties map to URIs. For example:

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "issuer": "did:nostr:0123...ef",
    "credentialSubject": { ... }
  }
  ```

  The context at `https://visionclaw.dreamlab-ai.systems/ns/v1` defines that `issuer` means `vcw:issuer` (resolving to the VisionClaw namespace), `credentialSubject` means `vc:credentialSubject`, etc.

  **Critical property**: The context is **pinned to a specific version**. If the encoder is updated, the context URL changes (e.g., to `/ns/v2`) so old documents still resolve correctly. Consumers can safely cache the context without worrying about breaking changes.

  #### Surface Emission

  The encoder monitors the agent's internal state and emits five surfaces:

  1. **S1 (Pod Index)**: Snapshot of available [[Solid Pod Storage|Solid pods]].
  2. **S3 (Verifiable Credentials)**: Issued credentials, indexed by issuer DID.
  3. **S6 (Agent Events)**: Real-time events (birth, startup, activity, completion, error, termination).
  4. **S9 (Memory Snapshots)**: Periodic memory state snapshots.
  5. **S11 (Bead Catalogue)**: Index of work units and their status.

  Each surface is a separate JSON-LD document, queryable via a dedicated HTTP endpoint.

  #### Canonical JSON and Determinism

  When encoding, the Linked Data Encoder uses **canonical JSON** (IETF RFC 8785):

  - Keys are sorted alphabetically
  - Numbers are serialised without unnecessary whitespace
  - Strings use UTF-8 without escapes unless required
  - No trailing commas or comments

  This ensures that the same logical data always produces identical bytes, enabling the [[URI Canonicaliser|URI Canonicaliser]] to compute deterministic content hashes.

  #### Context Vocabulary

  The pinned context includes prefixes for multiple namespaces:

  ```json
  {
    "@context": {
      "@version": 1.1,
      "@base": "https://visionclaw.dreamlab-ai.systems/ns/v1#",
      "vcw": "https://visionclaw.dreamlab-ai.systems/ns/v1#",
      "ngm": "http://narrativegoldmine.com/ontology#",
      "ai": "http://narrativegoldmine.com/artificial-intelligence#",
      "bc": "http://narrativegoldmine.com/blockchain#",
      "owl": "http://www.w3.org/2002/07/owl#",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "dcterms": "http://purl.org/dc/terms/",
      "as": "https://www.w3.org/ns/activitystreams#",
      "vc": "https://www.w3.org/ns/credentials/v2",
      "ldp": "http://www.w3.org/ns/ldp#",
      ...
    }
  }
  ```

  This allows documents to use shorthand (e.g., `vcw:requires`) that expands to full IRIs at consumption time.

  #### Property Mapping Rules

  The encoder defines explicit mapping rules for all agent properties:

  ```
  agent.issuer → vc:issuer (@type: @id)
  agent.credentialSubject → vc:credentialSubject (@type: @id)
  agent.timestamp → dcterms:issued (@type: xsd:dateTime)
  agent.proof.signature → vcw:schnorrSignature
  agent.proof.publicKey → vcw:verificationMethod (@type: @id)
  ```

  These mappings are declared once in the context and reused across all documents, ensuring consistency.

  #### RDF and SPARQL Compatibility

  Because JSON-LD documents are valid RDF (each `@id` and property expands to a URI), they can be loaded directly into an RDF triple store:

  ```
  did:nostr:0123...ef vc:issuer did:nostr:0123...ef .
  did:nostr:0123...ef vc:credentialSubject <urn:visionclaw:bead:...> .
  <urn:visionclaw:bead:...> dcterms:issued "2026-04-26T12:34:56Z"^^xsd:dateTime .
  ```

  External systems can then query the triple store using SPARQL to discover, correlate, and analyse agent-emitted data.

  #### Example: Credential Encoding

  Internal agent credential:

  ```python
  {
    "issuer": "0123...ef",
    "subject": "task-99",
    "claim": "taskCompleted",
    "timestamp": 1735286096000,  # milliseconds since epoch
    "signature": "abcd...ef"
  }
  ```

  Encoded as JSON-LD:

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "VerifiableCredential",
    "@id": "urn:visionclaw:credential:0123...ef:sha256-12-deadbeef",
    "issuer": "did:nostr:0123...ef",
    "credentialSubject": {
      "@id": "urn:visionclaw:bead:0123...ef:task-99",
      "claim": "taskCompleted"
    },
    "issued": "2026-04-26T12:34:56Z",
    "proof": {
      "type": "SchnorrSignature2025",
      "verificationMethod": "did:nostr:0123...ef#key-0",
      "signatureValue": "abcd...ef"
    }
  }
  ```

  Notice:

  - Timestamps are converted from milliseconds to ISO 8601 strings
  - Pubkeys are expanded to full DIDs
  - Task IDs are expanded to full URNs
  - A unique @id is minted by the [[URI Canonicaliser]]
  - The proof structure is semantically rich (type, verificationMethod are IRIs)

  #### Evolution and Versioning

  When a new property or relationship is introduced:

  1. A new context version is published (e.g., `/ns/v1.1`).
  2. The new property is added to the context mapping.
  3. Old documents remain valid because they reference the old context.
  4. New documents reference the new context.
  5. Consumers that understand both contexts can process both old and new documents.

  This design eliminates the fragility of "breaking changes"; evolution is additive.

- ### Provenance
  - sources:: [[ADR-012]], [[JSON-LD 1.1 Spec]], [[RFC 8785 Canonical JSON]], [[W3C Linked Data Platform]], [[RDF Semantics]]
  - migration-date:: 2026-04-26T00:00:00Z
