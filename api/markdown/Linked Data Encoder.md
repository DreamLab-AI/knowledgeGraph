iri:: http://narrativegoldmine.com/infrastructure#LinkedDataEncoder
uri:: urn:visionclaw:concept:infrastructure:linked-data-encoder
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:linked-data-encoder
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Linked Data Encoder
content-hash:: sha256-12-f6a7b8c9dae0
status:: complete
maturity:: established
quality-score:: 0.87
authority-score:: 0.91
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

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
  - bridges-to:: [[Knowledge Graph]] (domain: ngm), [[Semantic Web]] (domain: ngm), [[RDF Store]] (domain: ngm)

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
