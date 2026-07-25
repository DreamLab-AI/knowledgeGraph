public:: true

# Bitstring Status List
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bitstring-status-list",
  "@type": "Page",
  "vc:slug": "bitstring-status-list",
  "title": "Bitstring Status List",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitstring-status-list",
  "@type": "Class",
  "label": "Bitstring Status List",
  "definition": "Bitstring Status List is a W3C specification for expressing the revocation or suspension status of Verifiable Credentials through a compressed, publicly-hosted bitstring in which each credential is assigned a position index; setting that bit to 1 indicates revocation without disclosing which specific credential holder triggered the change. The mechanism is privacy-preserving because verifiers observe only a large compressed list, not individual credential identifiers. It supersedes the earlier Credential Status List 2021 specification and is designed to be bandwidth-efficient and herd-privacy-compatible.",
  "domain": "governance",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:revocation-mechanism", "label": "Revocation Mechanism"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:verifiable-credentials", "label": "Verifiable Credentials"},
      {"@id": "urn:ngm:class:cryptographic-hash", "label": "Cryptographic Hash"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:credential-verification", "label": "Credential Verification"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralised-identity", "label": "Decentralised Identity"},
      {"@id": "urn:ngm:class:revocation-registry", "label": "Revocation Registry"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:verifiable-credential-standard", "label": "Verifiable Credential Standard"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Bitstring Status List]] defines a compact representation of [[Verifiable Credentials]] status information encoded as a GZIP-compressed bitstring of at minimum 131,072 bits (16 kB uncompressed). Each credential issued by an issuer references a specific bit position within a named status list resource. Verifiers fetch the list, decompress it, and check the bit at the credential's declared index. Because the list contains thousands of credential slots, a verifier cannot determine from the list fetch alone which credential is being checked, providing herd privacy analogous to certificate revocation lists but optimised for the verifiable credentials ecosystem.

- ### Relationships
  - [[Bitstring Status List]] is a specialisation of [[Revocation Mechanism]] that works within the [[Verifiable Credentials]] framework. It complements [[Decentralised Identity]] architectures by providing a revocation signal that issuers can publish without identifying individual holders. The [[Revocation Registry]] concept from AnonCreds and other systems provides an alternative approach, whilst [[Credential Verification]] is the consumer process that queries the list.

- ### Content
  - The need for a credential revocation mechanism without individual identifier exposure was recognised early in the Verifiable Credentials Working Group's deliberations. Initial approaches used hosted lists keyed by credential ID, which trivially allowed correlation between verifiers and issuers. The StatusList2021 specification introduced a bitstring approach, and the current Bitstring Status List specification at the W3C Credentials Community Group generalised and hardened the design, adding support for suspension (a reversible state) alongside permanent revocation.

  - Technically, the status list is a JSON-LD document hosted at a dereferenceable URL, containing a `encodedList` property that holds the Base64url-encoded GZIP payload. The credential issued to a holder includes a `credentialStatus` object specifying the `statusListIndex` and the URL of the status list. Verifiers perform an HTTP GET on the URL, cache the result according to HTTP caching headers, and bitwise-index into the decompressed array. Multiple status purpose values — revocation, suspension, and message — allow issuers to encode more than one bit per credential slot.

  - The specification is implemented across major Verifiable Credential stacks, including Spruce Systems' DIDKit, Transmute's VC libraries, and Veramo. It is referenced in the EU EUDI Wallet Architecture Reference Framework as a compliant revocation mechanism, and several national digital identity programmes have adopted it. The approach fits naturally with [[Decentralised Identifier]] based issuance because the status list URL can be published independently by the issuer without requiring a central registry operator.

  - As of 2024–2025, the Bitstring Status List 1.0 specification advanced towards W3C Recommendation status. Open questions include appropriate cache lifetime to balance freshness against privacy, handling of very high-revocation-rate issuers where the bitstring becomes sparse, and integration with selective-disclosure credential formats such as SD-JWT and BBS+ signatures that must not inadvertently enable status correlation through proof metadata.