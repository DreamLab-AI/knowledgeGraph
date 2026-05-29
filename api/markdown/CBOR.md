public:: true

# CBOR
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbor",
  "@type": "Page",
  "vc:slug": "cbor",
  "title": "CBOR",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cbor",
  "@type": "Class",
  "label": "CBOR",
  "definition": "Concise Binary Object Representation (CBOR) is a binary data serialisation format specified in RFC 7049 (superseded by RFC 8949) designed to enable extremely compact encoding of structured data with a data model that is a superset of JSON. CBOR encodes values using a type-length-value scheme, eliminating the overhead of textual delimiters and key quotation, which makes it particularly well-suited for constrained environments such as IoT devices, embedded systems, and low-bandwidth protocols where minimising message size and parsing complexity is critical.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:data-serialization", "label": "Data Serialization"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:json", "label": "json"},
      {"@id": "urn:ngm:class:protocol-buffer", "label": "Protocol Buffer"},
      {"@id": "urn:ngm:class:data-format-standard", "label": "Data Format Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:binary-encoding", "label": "Binary Encoding"},
      {"@id": "urn:ngm:class:internet-of-things", "label": "Internet of Things"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:credential-format-standard", "label": "Credential Format Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[CBOR]] (Concise Binary Object Representation) is a standardised [[Data Serialization]] format that encodes [[json]]-compatible data models in a compact binary form, making it the preferred wire format for [[Internet of Things]] protocols and [[Embedded Systems]] where every byte matters.

- ### Relationships
  - CBOR is a specialised form of [[Data Serialization]] that occupies a position between [[json]] (human-readable, verbose) and [[Protocol Buffer]] (schema-required, highly optimised). It relies on [[Binary Encoding]] to eliminate textual overhead and aligns with the [[Data Format Standard]] landscape established by IETF. Its compactness directly benefits [[Internet of Things]] deployments on resource-constrained hardware and [[Embedded Systems]], and it serves as the canonical encoding for W3C Verifiable Credentials and ISO mDL (mobile driver's licence) specifications, cementing its role in [[Credential Format Standard]] ecosystems.

- ### Content
  - CBOR emerged from the IETF Constrained RESTful Environments (CoRE) working group's recognition that JSON, while excellent for web APIs, was too verbose for constrained devices communicating over lossy, low-bandwidth links such as 802.15.4 radio. Carsten Bormann and Paul Hoffman authored RFC 7049, published in 2013, synthesising lessons from MessagePack, BSON, and ASN.1 BER into a format that prioritises simplicity of both implementation and specification — the CBOR spec is deliberately kept short and unambiguous to enable single-developer implementations on microcontrollers with kilobytes of RAM.

  - The encoding uses a major-type system: each data item begins with a single byte whose upper three bits identify the type (unsigned integer, negative integer, byte string, text string, array, map, tagged value, or simple/float) and whose lower five bits encode a small immediate value or indicate that additional bytes carry the length or value. This design allows integers and short strings to be encoded in as little as one byte. CBOR tags extend the type system with semantic annotations — tag 0 for datetime strings, tag 1 for epoch-based timestamps, tag 37 for UUIDs — enabling rich semantic typing without abandoning the compact base encoding.

  - CBOR's significance has grown well beyond IoT. The COSE (CBOR Object Signing and Encryption) framework, specified in RFC 8152, provides CBOR-native equivalents of JSON Web Signature (JWS) and JSON Web Encryption (JWE), enabling efficient cryptographic operations on CBOR payloads. The W3C Verifiable Credentials Data Model specifies CBOR-LD as a compact binary Linked Data serialisation for credentials on constrained channels. ISO 18013-5 for mDL, IETF RATS (Remote ATtestation procedureS), and 5G network slicing protocols all depend on CBOR for efficient data exchange in latency- and bandwidth-sensitive paths.

  - RFC 8949, published in 2020, superseded RFC 7049 with clarifications, improved deterministic encoding rules (CDE), and a more rigorous treatment of floating-point NaN handling. In 2024-2025, CBOR continues to solidify its position as the binary serialisation layer for decentralised identity ecosystems: OpenID4VCI and ISO-compliant credential wallets on mobile devices universally adopt CBOR for credential storage and presentation. Its role in attestation protocols for trusted computing and hardware security modules further cements its status as a foundational infrastructure primitive.

