public:: true
alias:: client-side-validation

# Client-Side Validation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:client-side-validation",
  "@type": "Page",
  "vc:slug": "client-side-validation",
  "title": "Client-Side Validation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:client-side-validation",
  "@type": "Class",
  "label": "Client-Side Validation",
  "definition": "Client-Side Validation is the process of verifying user-supplied data within the browser or client application before that data is transmitted to a server, providing immediate feedback to users and reducing unnecessary network requests. In the context of Bitcoin and RGB Protocol, it refers to a distinct validation paradigm where the full state of off-chain assets is verified locally by the recipient rather than by all network nodes, enabling scalable, private asset transfers. The two usages share the principle of local verification but differ fundamentally in their security models and scope.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-integrity", "label": "Data Integrity"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:rgb-protocol", "label": "RGB Protocol"},
      {"@id": "urn:ngm:class:zero-knowledge-proof", "label": "Zero-Knowledge Proof"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:json-data-interchange-format-schema", "label": "JSON Schema"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bitcoin-proof-of-work-protocol-network", "label": "Bitcoin Network"},
      {"@id": "urn:ngm:class:layer-2-solutions", "label": "Layer 2 Solutions"},
      {"@id": "urn:ngm:class:zero-knowledge", "label": "Zero Knowledge"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Client-Side Validation describes two related but distinct concepts. In web development, it is the enforcement of data-entry rules within the browser using JavaScript or HTML5 constraint attributes, providing rapid user feedback before server round-trips. In the [[RGB Protocol]] and Lero/Peter Todd's paradigm, it is a cryptographic architecture where each asset owner maintains and verifies the full chain of ownership proofs locally — receiving only the relevant history from the sender, without broadcasting it to all network nodes — enabling private, scalable smart contracts on [[Bitcoin Network]].

- ### Relationships
  - The blockchain interpretation of Client-Side Validation is foundational to the [[RGB Protocol]], which builds a smart contract system atop Bitcoin UTXOs using commitments and [[Cryptographic Proof]] chains verified exclusively by the parties involved. This contrasts with Ethereum's global state model. The approach overlaps conceptually with [[Zero-Knowledge Proof]] paradigms, where only the proof (not the full data) need be shared. [[Layer 2 Solutions]] on Bitcoin leverage client-side validation to shift contract state off-chain while anchoring commitments to the [[Bitcoin Network]].

- ### Content
  - The web validation concept has existed since the early browser wars of the 1990s, when Netscape introduced JavaScript form validation. HTML5 formalised constraint validation APIs (required, pattern, min, max attributes) in 2014, reducing the need for custom scripts. The security community's repeated mantra — "never trust client-side validation alone" — emerged from SQL injection and XSS attacks where bypassed browser checks led to server compromise, establishing that [[Data Integrity]] must always be enforced server-side as well.

  - The blockchain paradigm of client-side validation was articulated by Peter Todd in his "Proofmarshal" work around 2014–2016 and subsequently developed into the RGB Protocol by Maxim Orlovsky and the LNP/BP Standards Association. In this model, an asset issuer publishes a contract genesis anchored to a Bitcoin UTXO via a cryptographic commitment. Each state transition (transfer) is a privately constructed message containing a seal definition (pointing to a new UTXO), validated using [[Cryptographic Proof]] chains against the genesis. The recipient verifies the full history independently using only the data transferred to them.

  - In web contexts, [[JSON Schema]] validation libraries (Ajv, Yup, Zod) have standardised client-side validation logic in JavaScript ecosystems. TypeScript's type system provides compile-time contract validation. In blockchain contexts, RGB's client-side approach offers significant privacy advantages — asset quantities, contract state, and ownership history are never broadcast to the network — and scalability, since the global blockchain only sees single-output Bitcoin transactions with opaque commitments.

  - By 2024–2025, RGB v0.10 and v0.11 are in active development, bringing a revised Schema system, AluVM virtual machine for contract logic, and Lightning Network integration. The client-side validation paradigm has influenced designs of other Bitcoin-native smart contract systems, including Taproot Assets (formerly Taro) by Lightning Labs. In web development, server-side validation frameworks increasingly auto-generate client-side rules from shared schemas, unifying the two paradigms under single-source-of-truth data contracts using [[JSON Schema]] and [[Open API Specification]].

