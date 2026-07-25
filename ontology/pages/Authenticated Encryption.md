public:: true

# Authenticated Encryption
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:authenticated-encryption", "@type":"Page", "title":"Authenticated Encryption", "vc:slug":"authenticated-encryption", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:authenticated-encryption",
  "@type":"Class",
  "label":"Authenticated Encryption",
  "definition":"Authenticated encryption is a class of symmetric cryptographic schemes that simultaneously provide confidentiality, integrity and authenticity of a message in a single operation. Authenticated encryption with associated data (AEAD) additionally binds unencrypted header data to the ciphertext, so any tampering with the message or its context is detected on decryption. Modern AEAD constructions such as AES-GCM and ChaCha20-Poly1305 are the recommended default for secure communication because they avoid the pitfalls of composing encryption and authentication separately.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:encryption","label":"Encryption"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:symmetric-encryption","label":"Symmetric Encryption"},
      {"@id":"urn:ngm:class:message-authentication-code","label":"Message Authentication Code"},
      {"@id":"urn:ngm:class:nonce","label":"Nonce"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:secure-communication","label":"Secure Communication"},
      {"@id":"urn:ngm:class:data-confidentiality","label":"Data Confidentiality"},
      {"@id":"urn:ngm:class:data-integrity","label":"Data Integrity"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:aes-gcm","label":"AES-GCM"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:tls-1-3","label":"TLS 1.3"},
      {"@id":"urn:ngm:class:tls","label":"TLS"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:cryptographic-protocol","label":"Cryptographic Protocol"},
      {"@id":"urn:ngm:class:key-management","label":"Key Management"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:cryptography","label":"Cryptography"},
      {"@id":"urn:ngm:class:hash-function","label":"Hash Function"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Authenticated encryption is an [[Encryption]] scheme that delivers confidentiality, integrity and authenticity together.
	- It combines a cipher with a [[Message Authentication Code]] so tampering is detected, not just hidden.
	- The AEAD variant binds associated header data, and it underpins [[Secure Communication]] across the modern internet.
- ### Overview
	- Naively composing encryption and a MAC is error-prone; authenticated encryption packages the correct construction.
	- AEAD modes take a key, a unique [[Nonce]], plaintext and optional associated data, and return ciphertext plus an authentication tag.
	- Decryption verifies the tag before releasing plaintext, so forged or modified messages are rejected.
	- It is the default in protocols such as [[TLS 1.3]], SSH and disk and message encryption systems.
- ### Mechanisms
	- Encrypt-then-MAC and dedicated AEAD constructions guarantee that authentication covers the ciphertext.
	- Nonce uniqueness per key is mandatory; reuse can catastrophically break confidentiality and integrity.
	- Galois/Counter Mode pairs counter-mode encryption with a polynomial authenticator for high throughput.
	- Poly1305-based modes provide a fast, side-channel-resistant alternative on platforms without AES acceleration.
- ### Applications
	- Transport security in [[TLS 1.3]] cipher suites and QUIC packet protection.
	- At-rest encryption of files, databases and backups with integrity guarantees.
	- Secure messaging and VPN tunnels that must detect any in-transit modification.
	- Token and session protection where forgery resistance is as important as secrecy.
- ### Relationships
	- subClassOf:: [[Encryption]]
	- partOf:: [[Cryptography]]
	- uses:: [[Symmetric Encryption]]
	- uses:: [[Message Authentication Code]]
	- uses:: [[Nonce]]
	- enables:: [[Secure Communication]]
	- enables:: [[Data Confidentiality]]
	- enables:: [[Data Integrity]]
	- implements:: [[AES-GCM]]
	- supports:: [[TLS 1.3]]
	- supports:: [[TLS]]
	- requires:: [[Cryptographic Protocol]]
	- requires:: [[Key Management]]
	- relatedTo:: [[Cryptography]]
	- relatedTo:: [[Hash Function]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
