public:: true

# Federation Surface
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:50f9c45cee2cedb21d582206eaee30e7c09fc887af9d8217ad54552f020d30e9",
  "@type": "Page",
  "vc:slug": "federation-surface",
  "title": "Federation Surface",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:adr-008",
      "vc:label": "ADR-008"
    },
    {
      "@id": "urn:visionflow:linked:adr-012",
      "vc:label": "ADR-012"
    },
    {
      "@id": "urn:visionflow:linked:agent-bead",
      "vc:label": "Agent Bead"
    },
    {
      "@id": "urn:visionflow:linked:agentic-systems-domain",
      "vc:label": "AgenticSystemsDomain"
    },
    {
      "@id": "urn:visionflow:linked:apilayer",
      "vc:label": "APILayer"
    },
    {
      "@id": "urn:visionflow:linked:automated-monitoring",
      "vc:label": "Automated Monitoring"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-oracle-integration",
      "vc:label": "Blockchain Oracle Integration"
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
      "@id": "urn:visionflow:linked:data-portal",
      "vc:label": "Data Portal"
    },
    {
      "@id": "urn:visionflow:linked:http-endpoint",
      "vc:label": "HTTP Endpoint"
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
      "@id": "urn:visionflow:linked:knowledge-graph-federation",
      "vc:label": "Knowledge Graph Federation"
    },
    {
      "@id": "urn:visionflow:linked:linked-data-consumption",
      "vc:label": "Linked Data Consumption"
    },
    {
      "@id": "urn:visionflow:linked:prd-006",
      "vc:label": "PRD-006"
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
      "@id": "urn:visionflow:linked:w3-c-linked-data-platform",
      "vc:label": "W3C Linked Data Platform"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-vocabulary",
      "vc:label": "W3C Vocabulary"
    },
    {
      "@id": "urn:visionflow:owl:class:content-addressing",
      "vc:label": "Content Addressing"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:owl:class:linked-data-encoder",
      "vc:label": "Linked Data Encoder"
    },
    {
      "@id": "urn:visionflow:owl:class:linked-data-encoder",
      "vc:label": "Linked Data Encoder"
    },
    {
      "@id": "urn:visionflow:owl:class:linked-data-encoder",
      "vc:label": "Linked Data Encoder"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:uri-canonicaliser",
      "vc:label": "URI Canonicaliser"
    },
    {
      "@id": "urn:visionflow:owl:class:uri-canonicaliser",
      "vc:label": "URI Canonicaliser"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credential-surface",
      "vc:label": "Verifiable Credential Surface"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Federation Surface"
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
  "@id": "urn:ngm:class:federation-surface",
  "@type": "Class",
  "label": "Federation Surface",
  "definition": "A standardised JSON-LD 1.1 encoding surface (S1–S11) that exposes agent state, credentials, events, and work metadata in a queryable, linkable format, enabling federated consumption by heterogeneous external systems (monitoring dashboards, compliance audits, blockchain oracles, knowledge grap...",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    },
    {
      "@id": "urn:ngm:class:middleware-layer",
      "label": "Middleware Layer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:json-ld-context",
        "label": "JSON-LD Context"
      },
      {
        "@id": "urn:ngm:class:content-addressing",
        "label": "Content Addressing"
      },
      {
        "@id": "urn:ngm:class:linked-data-encoder",
        "label": "Linked Data Encoder"
      },
      {
        "@id": "urn:ngm:class:uri-canonicaliser",
        "label": "URI Canonicaliser"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:http-endpoint",
        "label": "HTTP Endpoint"
      },
      {
        "@id": "urn:ngm:class:json-ld-1-1-standard",
        "label": "JSON-LD 1.1 Standard"
      },
      {
        "@id": "urn:ngm:class:w-3-c-vocabulary",
        "label": "W3C Vocabulary"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-monitoring",
        "label": "Automated Monitoring"
      },
      {
        "@id": "urn:ngm:class:blockchain-oracle-integration",
        "label": "Blockchain Oracle Integration"
      },
      {
        "@id": "urn:ngm:class:cross-system-querying",
        "label": "Cross-System Querying"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-federation",
        "label": "Knowledge Graph Federation"
      },
      {
        "@id": "urn:ngm:class:linked-data-consumption",
        "label": "Linked Data Consumption"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:json-ld-1-1",
        "label": "JSON-LD 1.1"
      },
      {
        "@id": "urn:ngm:class:w-3-c-linked-data-platform",
        "label": "W3C Linked Data Platform"
      }
    ]
  },
  "quality": 0.86,
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
  "@id": "urn:visionflow:annotation:link-resolutions:federation-surface:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:50f9c45cee2cedb21d582206eaee30e7c09fc887af9d8217ad54552f020d30e9"
  },
  "vc:resolutions": [
    {
      "raw": "[[ADR-008]]",
      "resolved": "urn:visionflow:linked:adr-008",
      "kind": "StubLink"
    },
    {
      "raw": "[[ADR-012]]",
      "resolved": "urn:visionflow:linked:adr-012",
      "kind": "StubLink"
    },
    {
      "raw": "[[Agent Bead|beads]]",
      "resolved": "urn:visionflow:linked:agent-bead",
      "kind": "StubLink"
    },
    {
      "raw": "[[AgenticSystemsDomain]]",
      "resolved": "urn:visionflow:linked:agentic-systems-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[APILayer]]",
      "resolved": "urn:visionflow:linked:apilayer",
      "kind": "StubLink"
    },
    {
      "raw": "[[Automated Monitoring]]",
      "resolved": "urn:visionflow:linked:automated-monitoring",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Oracle Integration]]",
      "resolved": "urn:visionflow:linked:blockchain-oracle-integration",
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
      "raw": "[[Data Portal]]",
      "resolved": "urn:visionflow:linked:data-portal",
      "kind": "StubLink"
    },
    {
      "raw": "[[HTTP Endpoint]]",
      "resolved": "urn:visionflow:linked:http-endpoint",
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
      "raw": "[[JSON-LD Context|JSON-LD contexts]]",
      "resolved": "urn:visionflow:linked:json-ld-context",
      "kind": "StubLink"
    },
    {
      "raw": "[[Knowledge Graph Federation]]",
      "resolved": "urn:visionflow:linked:knowledge-graph-federation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Linked Data Consumption]]",
      "resolved": "urn:visionflow:linked:linked-data-consumption",
      "kind": "StubLink"
    },
    {
      "raw": "[[PRD-006]]",
      "resolved": "urn:visionflow:linked:prd-006",
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
      "raw": "[[Content Addressing]]",
      "resolved": "urn:visionflow:owl:class:content-addressing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity|did:nostr]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linked Data Encoder]]",
      "resolved": "urn:visionflow:owl:class:linked-data-encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linked Data Encoder|JSON-LD]]",
      "resolved": "urn:visionflow:owl:class:linked-data-encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Linked Data Encoder|a separate encoder]]",
      "resolved": "urn:visionflow:owl:class:linked-data-encoder",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract|Smart contracts]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[URI Canonicaliser]]",
      "resolved": "urn:visionflow:owl:class:uri-canonicaliser",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[URI Canonicaliser|urn:visionclaw:...]]",
      "resolved": "urn:visionflow:owl:class:uri-canonicaliser",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credential Surface|W3C VC 2.0 credentials]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credential-surface",
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
  - A standardised [[JSON-LD 1.1]] encoding surface (S1–S11) that exposes agent state, credentials, events, and work metadata in a queryable, linkable format, enabling federated consumption by heterogeneous external systems (monitoring dashboards, compliance audits, blockchain oracles, knowledge graphs) without agent-specific API adapters.

- ### Semantic Classification
  - owl-class:: infrastructure:FederationSurface
  - owl-role:: Object
  - belongs-to-domain:: [[AgenticSystemsDomain]], [[DataIntegrationDomain]], [[SemanticWebDomain]]
  - implemented-in-layer:: [[DataLayer]], [[APILayer]]

- ### Relationships
  - has-part:: [[Linked Data Encoder]], [[JSON-LD Context]], [[URI Canonicaliser]], [[Content Addressing]]
  - requires:: [[JSON-LD 1.1 Standard]], [[HTTP Endpoint]], [[W3C Vocabulary]]
  - enables:: [[Cross-System Querying]], [[Linked Data Consumption]], [[Automated Monitoring]], [[Blockchain Oracle Integration]], [[Knowledge Graph Federation]]
  - implements:: [[JSON-LD 1.1]], [[W3C Linked Data Platform]]
  - bridges-to:: [[Knowledge Graph]] (domain: ngm), [[Smart Contract]] (domain: blockchain), [[Data Portal]] (domain: ngm)

- ### Content

  VisionClaw agents emit state through eleven standardised [[JSON-LD 1.1]] surfaces. Each surface exposes a specific aspect of agent lifecycle and state in a common semantic format. This design allows external systems to integrate agent data without custom API clients.

  #### Surface Inventory

  **S1: Pod Index**
  Enumerates available [[Solid Pod Storage|Solid pods]] and their metadata. An agent may have multiple pods (personal, shared, organisational), each with its own URI, access control rules, and available quota.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "ldp:Container",
    "@id": "urn:visionclaw:pod:0abc...ef:sha256-12-deadbeef",
    "ldp:contains": [
      { "@id": "urn:visionclaw:pod:0abc...ef:sha256-12-aaa111", "label": "Personal" },
      { "@id": "urn:visionclaw:pod:0abc...ef:sha256-12-bbb222", "label": "Shared Team" }
    ]
  }
  ```

  **S3: Verifiable Credentials**
  Issues [[Verifiable Credential Surface|W3C VC 2.0 credentials]] signed by the agent's [[DID Nostr Identity|did:nostr]] DID. Credentials attest to work completed, capabilities claimed, or attestations from other agents.

  ```json
  {
    "@context": ["https://www.w3.org/2018/credentials/v1", "https://visionclaw.dreamlab-ai.systems/ns/v1"],
    "type": ["VerifiableCredential", "vcw:AgentWorkCredential"],
    "issuer": "did:nostr:0abc...ef",
    "credentialSubject": {
      "id": "did:nostr:0123...ab",
      "taskId": "urn:visionclaw:bead:0123...ab:task-42",
      "completionTime": "2026-04-26T12:34:56Z",
      "result": "success"
    },
    "proof": {
      "type": "SchnorrSignature2025",
      "verificationMethod": "did:nostr:0abc...ef#key-0",
      "signatureValue": "<JCS-canonicalised Schnorr sig>"
    }
  }
  ```

  **S6: Agent Events**
  Real-time telemetry stream emitted via WebSocket, recording agent lifecycle events: birth (instantiation), startup, activity (work assignment), completion, errors, and termination. External monitoring systems subscribe to this stream to track fleet health.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "as:Event",
    "@id": "urn:visionclaw:event:0abc...ef:sha256-12-eee333",
    "actor": "did:nostr:0abc...ef",
    "object": "urn:visionclaw:bead:0abc...ef:task-99",
    "eventType": "completion",
    "timestamp": "2026-04-26T12:34:57Z",
    "result": { "status": "success", "duration": 2340 }
  }
  ```

  **S9: Memory Snapshots**
  Periodic snapshots of agent memory state (episodic memories, learned patterns, state vectors) encoded as [[Linked Data Encoder|JSON-LD]]. Enables analysis of how agents' internal state evolves, and allows agents to migrate state to new instances.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "vcw:MemorySnapshot",
    "@id": "urn:visionclaw:activity:0abc...ef:sha256-12-fff444",
    "agent": "did:nostr:0abc...ef",
    "timestamp": "2026-04-26T12:35:00Z",
    "memory": {
      "recentTasks": [
        { "taskId": "task-99", "duration": 2340, "outcome": "success" }
      ],
      "learnedPatterns": [
        { "pattern": "urn:visionclaw:pattern:classify-docs", "confidence": 0.92 }
      ]
    }
  }
  ```

  **S11: Bead Catalogue**
  Index of work units ([[Agent Bead|beads]]) and their status (pending, in-progress, completed, failed). External systems (task schedulers, compliance auditors) query this surface to understand fleet workload.

  ```json
  {
    "@context": "https://visionclaw.dreamlab-ai.systems/ns/v1",
    "@type": "ldp:Container",
    "@id": "urn:visionclaw:bead:0abc...ef:",
    "ldp:contains": [
      {
        "@id": "urn:visionclaw:bead:0abc...ef:task-99",
        "status": "completed",
        "assignedAgent": "did:nostr:0abc...ef",
        "createdTime": "2026-04-26T12:30:00Z",
        "completedTime": "2026-04-26T12:34:57Z"
      }
    ]
  }
  ```

  #### Design Principles

  1. **Content-Addressed URIs**: Every object in every surface has a [[URI Canonicaliser|urn:visionclaw:...]] URI. External systems follow URIs to discover related data without hardcoding paths.

  2. **Immutable Contexts**: Each surface references pinned [[JSON-LD Context|JSON-LD contexts]] (https://visionclaw.dreamlab-ai.systems/ns/v1) that never change. Consumers can safely cache contexts without fear of breaking semantics.

  3. **Queryable**: All surfaces are exposed via HTTP endpoints (`/v1/agent/<agent-id>/surface/<surface-name>`). External systems use SPARQL or link-following to extract insight.

  4. **Linkable**: Cross-references between surfaces use @id links. A credential references a bead by URI; a memory snapshot references patterns by URI. This enables graph traversal.

  5. **Decoupled from Agent Code**: Surfaces are emitted by [[Linked Data Encoder|a separate encoder]], not by agent logic. Agent logic never needs to know about JSON-LD semantics.

  #### Federation in Practice

  A typical federation workflow:

  1. A **compliance audit system** queries `GET /v1/agent/did%3Anostr%3A0abc.../surface/credentials` and receives all credentials issued by the agent, along with Schnorr signatures.
  2. The audit system verifies each credential's signature using the agent's public key.
  3. For any suspicious credential, the audit system follows the `@id` link to retrieve the referenced bead (`urn:visionclaw:bead:...`), discovering what work was actually done.
  4. The audit system then queries the **agent events surface** to confirm the agent was online and active at that time.

  This entire process occurs without the agent needing to expose a custom audit API; the agent's surfaces are generic.

  #### Blockchain Oracle Integration

  [[Smart Contract|Smart contracts]] can also consume federation surfaces:

  1. A smart contract needs attestation that an agent completed a specific task.
  2. The contract's oracle queries the agent's credentials surface for a credential matching that task URI.
  3. The oracle verifies the credential's Schnorr signature against the agent's public key (derived from its [[DID Nostr Identity|did:nostr]]).
  4. If valid, the oracle calls the smart contract with the credential as proof.

  This pattern eliminates the need for centralised oracle operators; anyone can verify agent claims independently.

- ### Provenance
  - sources:: [[ADR-012]], [[ADR-008]], [[JSON-LD 1.1 Spec]], [[W3C Linked Data Platform]], [[PRD-006]]
  - migration-date:: 2026-04-26T00:00:00Z
