public:: true

# BBS+ Signature
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bbs-signature",
  "@type": "Page",
  "vc:slug": "bbs-signature",
  "title": "BBS+ Signature",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bbs-signature",
  "@type": "Class",
  "label": "BBS+ Signature",
  "definition": "BBS+ Signature is a pairing-based digital signature scheme that signs a vector of messages simultaneously and supports the generation of zero-knowledge proofs that reveal only a chosen subset of those messages — a property known as selective disclosure — without revealing the full signed message set or enabling linkage of multiple presentations to the same credential. It is a cornerstone primitive for privacy-preserving verifiable credentials.",
  "domain": "security",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-signature", "label": "Cryptographic Signature"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:selective-disclosure", "label": "Selective Disclosure"},
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:privacy-preserving-identity", "label": "Privacy-Preserving Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"},
      {"@id": "urn:ngm:class:cryptographic-primitive", "label": "Cryptographic Primitive"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:bls-signature", "label": "BLS Signature"},
      {"@id": "urn:ngm:class:decentralized-identifiers", "label": "Decentralized Identifiers"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - BBS+ Signature is a pairing-based cryptographic signature scheme built on bilinear groups that allows an issuer to sign a vector of messages — such as the attributes in a [[Verifiable Credentials]] document — with a single compact signature. A holder can subsequently produce a derived proof that cryptographically demonstrates the original issuer's signature over any chosen subset of attributes, without revealing unselected attributes or allowing the verifier to link separate presentations. This combination of multi-message signing, [[Selective Disclosure]], and unlinkability makes BBS+ the preferred primitive for privacy-preserving digital identity systems.

- ### Relationships
  - BBS+ Signature is a specialised [[Cryptographic Signature]] scheme that makes use of [[Cryptographic Primitive]]s from pairing-friendly elliptic curves (typically BLS12-381). It is closely related to [[BLS Signature]] — sharing the underlying curve — but extends it with the multi-message signing and proof-of-knowledge capability needed for [[Selective Disclosure]]. BBS+ is the primary building block for privacy-preserving [[Verifiable Credentials]] and [[Privacy-Preserving Identity]] systems. It integrates with [[Decentralized Identifiers]] as the signing method, enabling holder-controlled presentation of identity attributes. [[Cryptographic Proof]] derivation is the mechanism through which selective disclosure proofs are generated.

- ### Content
  - The BBS signature scheme was originally proposed by Dan Boneh, Xavier Boyen, and Hovav Shacham in 2004 (the "BBS" acronym). The "+" extension — adding support for multiple messages and zero-knowledge proof of knowledge of the signature — was developed through subsequent academic work and formalised by Jan Camenisch, Manu Sporny, and collaborators. The Decentralized Identity Foundation (DIF) and W3C Credentials Community Group began drafting an interoperable specification in 2019, leading to the BBS Signature draft specification that is now under IETF standardisation.

  - Technically, BBS+ operates over a pairing-friendly elliptic curve (most commonly BLS12-381, which provides 128-bit security). Signing generates a single group element that is a function of all signed messages and the issuer's private key. Proof generation — a zero-knowledge proof of knowledge of the signature — uses a modified Fiat-Shamir transform to commit to the full set of signed messages, then selectively open commitments only for the attributes the holder chooses to disclose. The resulting proof is unlinkable across presentations because new randomness is introduced at each proof generation step.

  - The primary application domain is self-sovereign identity (SSI): credentials issued by governments, universities, or employers can be selectively presented to verifiers with only the required attributes revealed. For example, a driving licence credential might disclose the "over 18" flag for age verification without revealing name, address, or exact date of birth. This is a major advance over simple credential presentation where the full document is shared.

  - By 2024–2025, BBS+ Signature has been incorporated into the W3C Verifiable Credentials Data Model via the BBS cryptosuite specification, the EU EUDI Wallet architecture (as an optional cryptographic suite), and commercial SSI platforms including Hyperledger AnonCreds v2. IETF draft RFC specification work continues, with interoperability testing events identifying edge cases in multi-message proof generation. Post-quantum variants of BBS+ are under active research, given that pairing-based schemes are vulnerable to future quantum attacks.

