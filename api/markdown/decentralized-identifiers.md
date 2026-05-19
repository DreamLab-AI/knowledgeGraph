- ### Definition
  - A [[W3C]]-standardised URI scheme (DID Core v1.0 Recommendation 19 July 2022, v1.1 Working Draft progressing through 2024-2025) defining globally unique cryptographically verifiable identifiers of the form `did:<method>:<method-specific-id>` controlled directly by their subjects without dependency on centralised registration authorities, certificate authorities, or domain registrars, resolving to JSON-LD or JSON `application/did+ld+json` / `application/did+json` DID Documents containing verification methods (Ed25519, secp256k1, P-256, BLS12-381 G2, JsonWebKey2020, Multikey, BBS+), authentication / assertionMethod / keyAgreement / capabilityInvocation / capabilityDelegation verification relationships, service endpoints (DIDCommMessaging, LinkedDomains, CredentialRegistry), controller, alsoKnownAs and deactivation metadata, implemented across 180+ registered DID methods including web-hosted [[did:web]] (HTTPS-derived, lowest friction, no ledger), self-certifying [[did:key]] (raw multibase-encoded public key, no registry, no rotation), Microsoft Sidetree-on-Bitcoin [[did:ion]] (batched operations via IPFS Content Identifiers, ~80,000 DIDs by 2024 before Microsoft 2024 sunset announcement), peer-to-peer [[did:peer]] (Aries pairwise, off-ledger DIDComm), Bluesky AT-Protocol [[did:plc]] (Public Ledger of Credentials, 25M+ identifiers Mar 2025), [[did:nostr]] (NIP-01 secp256k1 pubkey), Ethereum [[did:ethr]] and [[did:elem]] (ERC-1056), Trust-DID-Web variants [[did:tdw]] / [[did:webvh]] (2024 WebVH with verifiable history Merkle log), [[did:cheqd]] (Cosmos SDK), Hyperledger [[did:indy]] (Aries) and legacy [[did:sov]] (Sovrin Network, 1.4M+ BC OrgBook entries), resolved via [[Universal Resolver]] reference implementation maintained by the [[Decentralized Identity Foundation]] supporting 50+ method drivers with `application/did+ld+json` MIME and `Accept`-header content negotiation, providing the cryptographic identifier substrate for [[Verifiable Credentials]] (W3C VC Data Model v2.0 Recommendation May 2025 with JSON-LD Data Integrity proofs, JWT/JOSE/COSE signatures, BBS+ selective disclosure via CL-Signatures and AnonCreds, SD-JWT IETF draft, CBOR-LD for size-constrained contexts), credential exchange protocols (OpenID4VCI for issuance, OpenID4VP for verifiable presentations, DIDComm v2, WACI-DIDComm), and the [[eIDAS 2.0]] EU Digital Identity Wallet mandated under Regulation 2024/1183 (in force 20 May 2024) requiring member states to make wallets available by 26 November 2026 with implementation across the [[European Blockchain Services Infrastructure]] (EBSI) involving 350+ pilot organisations, complemented by UK GOV.UK One Login and the [[Office for Digital Identities and Attributes]] (OfDIA, Mar 2024) administering the [[UK Digital Identity and Attributes Trust Framework]] (DIATF), with deployments across reusable KYC (Yoti, Onfido, iProov, Persona), age assurance under the UK Online Safety Act 2023 enforced from 2025, education credentials (Open Badges 3.0, Europass Digital Credentials Infrastructure EDC), professional licensing (medical, legal, engineering), supply-chain provenance (GS1 Digital Link, EPCIS 2.0), travel (IATA One ID, Travel Pass), aviation (ICAO DTC), governance (DAO membership tokens, soulbound NFTs), and 18M+ holders across DIF-DIDAS-ToIP ecosystem members, contrasting fundamentally with centralised identity providers (Google / Apple / Facebook OAuth, Microsoft Entra ID), federated SAML and OpenID Connect (where the IdP retains correlation power), and traditional X.509 PKI with CA hierarchies, by relocating control of identifier issuance, key rotation, and attribute disclosure to the identifier subject through public-key-bound proof of control whilst preserving cryptographic binding to a method-specific verifiable data registry.

- ### Semantic Classification
  - owl-class:: blockchain:DecentralizedIdentifiers
  - owl-role:: IdentifierScheme
  - owl-inferred:: identity:SelfSovereignIdentifier, web:URIScheme, crypto:PublicKeyBoundIdentifier
  - belongs-to-domain:: [[BlockchainDomain]], [[IdentityDomain]], [[WebStandardsDomain]]
  - implemented-in-layer:: [[IdentifierLayer]], [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Identifier]], [[URI Scheme]], [[Self-Sovereign Identifier]], [[Cryptographic Identifier]]
  - has-part:: [[DID Method]], [[DID Document]], [[Verification Method]], [[Service Endpoint]], [[DID Controller]], [[DID URL]], [[DID Resolver]], [[Verifiable Data Registry]]
  - requires:: [[Public Key Cryptography]], [[Verifiable Data Registry]], [[DID Resolution Protocol]], [[JSON-LD]], [[Key Management System]]
  - enables:: [[Self-Sovereign Identity]], [[Verifiable Credentials]], [[Selective Disclosure]], [[Pairwise Pseudonymous Identifiers]], [[Passwordless Authentication]], [[Portable Identity]]
  - implements:: [[did:web]], [[did:key]], [[did:ion]], [[did:peer]], [[did:plc]], [[did:webvh]], [[did:ethr]], [[did:indy]], [[did:cheqd]], [[did:jwk]]
  - depends-on:: [[W3C DID Core 1.0]], [[Multibase Encoding]], [[Multicodec]], [[JSON-LD Contexts]], [[Cryptographic Suites]], [[Verifiable Data Registry]]
  - supports:: [[European Digital Identity Wallet]], [[GOV.UK One Login]], [[EBSI]], [[Trust over IP Stack]], [[OpenID4VC]], [[DIDComm v2]], [[AnonCreds]]
  - uses:: [[Ed25519]], [[secp256k1]], [[BBS+ Signatures]], [[Multihash]], [[Content-Addressed Storage]], [[Merkle Logs]]
  - contrasts-with:: [[OAuth 2.0]], [[OpenID Connect]], [[SAML 2.0]], [[X.509 Public Key Infrastructure]], [[Keybase]], [[Centralized Identity Provider]]
  - related-to:: [[Verifiable Credentials]], [[Digital Identity Wallet]], [[Self-Sovereign Identity]], [[Hyperledger Indy]], [[Sovrin Network]], [[Decentralized Identity Foundation]], [[Trust over IP Foundation]], [[ENS]], [[Soulbound Tokens]]
  - standardized-by:: [[W3C DID Working Group]], [[W3C Verifiable Credentials Working Group]], [[Decentralized Identity Foundation]], [[Trust over IP Foundation]], [[IETF OAuth Working Group]], [[OpenID Foundation]], [[European Commission]], [[ISO/IEC JTC 1/SC 27]]

- ### Content

  ## Compositional Relationships (Components)
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:DIDMethod))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:DIDDocument))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:VerificationMethod))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:ServiceEndpoint))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:DIDController))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:DIDURL))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:DIDResolver))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:hasPart bc:VerifiableDataRegistry))

	    ## Dependency Relationships
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:requires bc:PublicKeyCryptography))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:requires bc:DIDResolutionProtocol))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:requires bc:JSONLD))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:requires bc:KeyManagementSystem))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:dependsOn bc:W3CDIDCore10))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:dependsOn bc:MultibaseEncoding))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:dependsOn bc:Multicodec))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:dependsOn bc:CryptographicSuites))

	    ## Capability Relationships
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:SelfSovereignIdentity))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:VerifiableCredentials))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:SelectiveDisclosure))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:PairwisePseudonymousIdentifiers))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:PasswordlessAuthentication))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:enables bc:PortableIdentity))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:supports bc:EuropeanDigitalIdentityWallet))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:supports bc:EBSI))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:supports bc:OpenID4VC))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:supports bc:DIDCommV2))

	    ## Implementation Relationships
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDWeb))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDKey))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDION))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDPeer))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDPLC))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDWebVH))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDEthr))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:implements bc:DIDIndy))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:uses bc:Ed25519))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:uses bc:BBSPlusSignatures))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:uses bc:Multihash))

	    ## Reduction Relationships
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:reduces bc:CentralizedRegistrationDependency))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:reduces bc:IdentifierLockIn))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:reduces bc:CorrelationRisk))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:reduces bc:KYCDuplication))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:reduces bc:CredentialFraud))

	    ## Association Relationships
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:relatedTo bc:VerifiableCredentials))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:relatedTo bc:DigitalIdentityWallet))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:relatedTo bc:HyperledgerIndy))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:relatedTo bc:SovrinNetwork))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:contrastsWith bc:OAuth20))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:contrastsWith bc:OpenIDConnect))
	    SubClassOf(bc:DecentralizedIdentifiers
	      ObjectSomeValuesFrom(bc:contrastsWith bc:X509PKI))

	    ## Data Properties (Characteristics)
	    DataPropertyAssertion(bc:hasIdentifier bc:DecentralizedIdentifiers "BC-0457"^^xsd:string)
	    DataPropertyAssertion(bc:authorityScore bc:DecentralizedIdentifiers "0.87"^^xsd:decimal)
	    DataPropertyAssertion(bc:registeredMethodCount bc:DecentralizedIdentifiers "180"^^xsd:integer)
	    DataPropertyAssertion(bc:specStatus bc:DecentralizedIdentifiers "W3C Recommendation v1.0"^^xsd:string)
	    DataPropertyAssertion(bc:recommendationDate bc:DecentralizedIdentifiers "2022-07-19"^^xsd:date)
	    DataPropertyAssertion(bc:eudiWalletMandatoryDate bc:DecentralizedIdentifiers "2026-11-26"^^xsd:date)
	    DataPropertyAssertion(bc:bcOrgBookDIDs bc:DecentralizedIdentifiers "1400000"^^xsd:integer)
	    DataPropertyAssertion(bc:bskyPLCDIDs bc:DecentralizedIdentifiers "25000000"^^xsd:integer)

	    ## Property Constraints
	    SubClassOf(bc:DecentralizedIdentifiers
	      DataExactCardinality(1 bc:hasMethod xsd:string))
	    SubClassOf(bc:DecentralizedIdentifiers
	      DataMinCardinality(1 bc:hasVerificationMethod xsd:anyURI))
	    SubClassOf(bc:DecentralizedIdentifiers
	      DataAllValuesFrom(bc:isDereferenceable xsd:boolean))
	    SubClassOf(bc:DecentralizedIdentifiers
	      DataAllValuesFrom(bc:supportsKeyRotation xsd:boolean))

	    ## Annotations
	    AnnotationAssertion(rdfs:label bc:DecentralizedIdentifiers "Decentralized Identifiers"@en)
	    AnnotationAssertion(rdfs:comment bc:DecentralizedIdentifiers "W3C URI scheme (DID Core v1.0 Recommendation 19 Jul 2022, v1.1 Working Draft) defining cryptographically verifiable identifiers `did:method:method-specific-id` resolving to JSON-LD DID Documents containing verification methods and service endpoints, with 180+ registered methods including did:web, did:key, did:ion (Microsoft Sidetree-on-Bitcoin), did:plc (Bluesky 25M+ IDs), did:webvh (2024 trust-DID-web with verifiable history), did:indy/did:sov (Hyperledger), did:cheqd, did:ethr; underpinning Verifiable Credentials VC Data Model v2.0 (May 2025), OpenID4VCI/OpenID4VP, DIDComm v2, the EU Digital Identity Wallet (Regulation 2024/1183 mandatory Nov 2026), EBSI, UK DIATF/OfDIA, BC Gov OrgBook, and supply-chain/education/age-verification deployments; contrasts with OAuth/OIDC/SAML federated IdPs and X.509 CA-rooted PKI by relocating identifier control to subjects via public-key proof of control."@en)
	    AnnotationAssertion(dcterms:identifier bc:DecentralizedIdentifiers "BC-0457"^^xsd:string)
	    AnnotationAssertion(dcterms:subject bc:DecentralizedIdentifiers "Self-Sovereign Identity, Verifiable Credentials, eIDAS, Trust Frameworks, Blockchain Identity"@en)
	  )

	  ## Property Characteristics
	  AsymmetricObjectProperty(bc:requires)
	  AsymmetricObjectProperty(bc:enables)
	  AsymmetricObjectProperty(bc:implements)
	  AsymmetricObjectProperty(bc:reduces)
	  TransitiveObjectProperty(bc:dependsOn)
	  FunctionalDataProperty(bc:hasMethod)
	  FunctionalDataProperty(bc:specStatus)
	  ```

  - ## About Decentralized Identifiers
  - **Decentralized Identifiers (DIDs)** are a [[W3C]] standard URI scheme designed to enable verifiable, decentralised digital identity. A DID is a string of the form `did:<method>:<method-specific-identifier>` (for example `did:web:dreamlab-ai.systems:users:alice`, `did:key:z6MkpTHR8VNsBxYAAWHut2Geadd9jSwuBV8xRoAnwWsdvktH`, `did:plc:ewvi7nxzyoun6zhxrhs64oiz`) that dereferences via a method-specific resolution protocol to a **DID Document** describing the cryptographic public keys, authentication mechanisms, and service endpoints associated with the identifier's subject. Unlike traditional identifiers controlled by intermediaries — email addresses bound to a provider, telephone numbers allocated by carriers, domain names rented from registrars, OAuth subject identifiers issued by Google or Microsoft — a DID is controlled directly by its subject through possession of the corresponding private keys.
  - The [[W3C DID Core 1.0]] specification reached Recommendation status on 19 July 2022 after roughly seven years of incubation through the [[Rebooting the Web of Trust]] community, the W3C Credentials Community Group, and the chartered W3C Decentralized Identifier Working Group co-chaired by Brent Zundel and Daniel Burnett. Despite four formal objections — from Google, Mozilla, Apple, and Apple-aligned reviewers — concerning proof-of-work blockchain methods and the proliferation of registered methods, the Director ruled the specification publishable as a stable normative reference. Work on **DID v1.1** continues in 2024-2025 under the rechartered Working Group, addressing implementer feedback on canonicalisation, JSON Web Key alignment, and method registry governance, with substantive technical refinement rather than redesign.
  - DIDs are the **identifier layer** in a three-layer self-sovereign identity stack: DIDs (identifiers and key material), [[Verifiable Credentials]] (claims signed by issuer DIDs about subject DIDs), and presentations / wallets / governance frameworks (the [[Trust over IP Stack]] layers three and four). A wallet holding a DID-bound key pair can authenticate to relying parties without passwords, present verifiable credentials with selective disclosure of attributes, and rotate keys without changing the underlying identifier.

  - ### Core Architecture and Data Model
	  Each DID resolves through a method-specific resolution algorithm to a **DID Document**, a JSON-LD or JSON object conforming to the W3C DID Core data model. The Document declares:
	  - **`id`** — the DID itself, an [[RFC 3986]] URI.
	  - **`controller`** — one or more DIDs authorised to update this Document (defaults to the subject; organisational DIDs typically declare multi-party controllers).
	  - **`verificationMethod`** — an array of public key descriptors, each with `id` (DID URL), `type` (e.g. `JsonWebKey2020`, `Multikey`, `Ed25519VerificationKey2020`, `BLS12381G2Key2020`), `controller`, and the key material encoded as `publicKeyJwk` or `publicKeyMultibase`.
	  - **Verification relationships** — `authentication`, `assertionMethod`, `keyAgreement`, `capabilityInvocation`, `capabilityDelegation` — each referencing a `verificationMethod` either inline or by `id`, encoding **why** a key may be used (authenticate as the subject vs. issue a Verifiable Credential vs. perform ECDH vs. invoke a ZCAP-LD capability).
	  - **`service`** — an array of service endpoints, each with `id`, `type` (e.g. `DIDCommMessaging`, `LinkedDomains`, `CredentialRepository`, `IdentityHub`), and `serviceEndpoint` (URI, set of URIs, or nested map for credentialed endpoints).
	  - **`alsoKnownAs`** — an array of URIs aliasing the DID (the Bluesky AT-Protocol uses `alsoKnownAs: ["at://alice.bsky.social"]` to bind a handle to a `did:plc`).
	  - **Deactivation** — methods define how to mark a DID inactive; the metadata returned from resolution includes a `deactivated: true` flag where applicable.
	  - DID URLs extend the syntax with paths, queries, and fragments: `did:example:123?service=files&relativeRef=/photo.jpg#key-1` permits dereferencing of individual verification methods (`#key-1`), service endpoint dereferencing (`?service=`), and version selection via `?versionId=` or `?versionTime=` for methods supporting historical state.
	  - Resolution returns three artefacts: the **DID Document**, **DID resolution metadata** (the resolver's `contentType`, `error`, `retrieved` timestamp), and **DID document metadata** (`created`, `updated`, `deactivated`, `nextUpdate`, `versionId`). The HTTP-binding profile (Resolution v0.3 from DIF) standardises `application/did+ld+json` and `application/did+json` MIME types and `Accept`-header negotiation.

  - ### DID Methods — Major Families
	  More than 180 DID methods are registered in the [[W3C DID Method Registry]] (an editor's draft maintained by the Working Group), spanning permissionless blockchains, permissioned ledgers, web infrastructure, and key-as-identifier schemes. Methods fall into a small number of architectural families.

	  #### Web-Hosted Methods
	  - **[[did:web]]** — Resolves `did:web:example.com:users:alice` to `https://example.com/users/alice/did.json` via HTTPS. No ledger, no fee, no wallet beyond standard web hosting. The dominant production method for institutional issuers (universities, governments, regulators) because it inherits existing DNS / TLS / WebPKI trust and audit trails. Trade-off: the hosting domain is a central point of control, censorship, and impersonation; key rotation depends on the publisher controlling the URL.
	  - **[[did:webvh]]** (Trust-DID-Web with Verifiable History, formerly [[did:tdw]]) — Adds a verifiable Merkle log of historical DID Document states served alongside the current Document. Resolvers fetch `did.jsonl` (one JSON-line per version) plus witness proofs, producing tamper-evident history without requiring a ledger. Standardised under DIF Identifiers and Discovery WG; adopted by BC Gov and the Government of British Columbia in 2024 as the migration path away from `did:sov`. WebVH 2024 added witness-signed entries enabling third-party attestation of update events.

	  #### Key-as-Identifier Methods
	  - **[[did:key]]** — The method-specific identifier is itself a multibase-encoded multicodec-prefixed public key (`z6Mk...` for Ed25519, `z6LS...` for X25519, `zDna...` for secp256k1, `zUC7...` for BLS12-381 G2). Resolution is deterministic, offline, and registry-free; the DID Document is computed from the encoded key. Ideal for ephemeral identifiers, holder bindings in Verifiable Presentations, and DIDComm sender keys. Inherent limitation: no key rotation, no controller change, no service endpoints (without extensions); compromise of the private key is terminal.
	  - **[[did:jwk]]** — Equivalent semantics to `did:key` but the identifier encodes a JSON Web Key (base64url-encoded `application/jwk+json`). Preferred where existing JOSE / JWK tooling already exists.
	  - **[[did:peer]]** — Generated by Aries / DIDComm peers for pairwise communication; off-ledger, exchanged via DIDComm `OOB-invitation` messages. Numalgo 2 and numalgo 4 variants embed verification methods and service endpoints directly, enabling self-certifying pairwise identifiers without any registry.

	  #### Blockchain and Ledger Methods
	  - **[[did:ion]]** — Microsoft's Identity Overlay Network, implementing the **Sidetree** protocol (DIF) anchored on Bitcoin. Tens of thousands of create / update / deactivate operations are batched per Sidetree anchor file, with the CAS (Content-Addressed Storage, IPFS) hash committed to a single Bitcoin OP_RETURN transaction. ION nodes reconstruct DID state by processing anchor files chronologically. Reached ~80,000 anchored DIDs supporting Microsoft Entra Verified ID; **Microsoft announced sunset of ION-anchored DIDs through 2024-2025**, migrating Entra Verified ID to `did:web` and `did:jwk` for production simplicity. Sidetree remains an active DIF specification with reference implementations in Java, Rust, and TypeScript.
	  - **[[did:indy]]** and legacy **[[did:sov]]** — Resolved against [[Hyperledger Indy]] ledgers. `did:sov` (Sovrin Network main / staging / builder) was the original ledger-based method; the W3C DID Method Specification Working Group converged on `did:indy` as the canonical multi-network method (`did:indy:sovrin:`, `did:indy:idunion:`, `did:indy:candy:`, `did:indy:bcovrin:`). Used by [[British Columbia Government]] OrgBook (1.4M+ DIDs for incorporated organisations), [[IDunion]] (German consortium), [[cheqd]] interop pilots, and AnonCreds production deployments.
	  - **[[did:plc]]** — Bluesky's **Public Ledger of Credentials**, a not-a-blockchain centralised but auditable log run by Bluesky PBC. Powers ~25M Bluesky / AT-Protocol identities (as of Mar 2025). Supports key rotation, handle changes via `alsoKnownAs`, and migration between Personal Data Servers. The PLC is deliberately not a blockchain — it relies on a single operator with cryptographic auditability and is the subject of ongoing decentralisation discussions in the AT-Protocol community.
	  - **[[did:cheqd]]** — Cosmos SDK chain optimised for DID and Verifiable Credential payments. Enables issuer payments for revocation registry hosting (StatusList2021), DID document storage, and trust registry lookups. Integrates with Veramo, Walt.id, and Animo Aries frameworks.
	  - **[[did:ethr]]** (ERC-1056) — Ethereum-based; the DID document is computed from on-chain events emitted by the `EthereumDIDRegistry` contract. Compatible with any EVM chain (Polygon, Optimism, Arbitrum, Gnosis, Base) by namespacing `did:ethr:<chain>:<address>`. Used by uPort / Veramo / Spruce.
	  - **[[did:elem]]** — Sidetree on Ethereum (Element). Largely deprecated in favour of `did:ion` for production Sidetree deployments.
	  - **[[did:nostr]]** — Identifier is a Nostr `npub` (NIP-19 bech32-encoded secp256k1 public key); DID Document constructed from NIP-01 metadata events. Bridges Nostr social graph with W3C-conformant resolution.

	  #### Method Selection Criteria
	  - Practitioners select methods on six axes: **decentralisation** (no operator vs. operator-permissioned vs. fully open), **persistence** (Bitcoin / Ethereum anchoring vs. centralised log vs. DNS lifetime), **key rotation** (supported vs. not), **cost** (free vs. fee per operation), **resolution latency** (HTTP fetch vs. chain query), and **regulatory fit** (whether method governance satisfies eIDAS qualified trust requirements, DIATF certification, or sectoral compliance). The [[Trust over IP Foundation]]'s DID Method Rubric (v1.0, 2023) formalises 35+ evaluation criteria.

  - ### DID Resolution and Universal Resolver
	  - **Resolution algorithm** — Defined by [[W3C DID Resolution]] (Working Draft, DIF). Given a DID, the resolver: (1) parses the DID syntax; (2) extracts the method; (3) invokes the method's resolve function with the method-specific identifier and resolution options; (4) returns the DID Document plus resolution / document metadata; (5) optionally applies dereferencing rules to resolve a DID URL with path / query / fragment.
	  - **[[Universal Resolver]]** — The [[Decentralized Identity Foundation]]'s reference universal resolver is a Docker-composed multi-driver service exposing `GET /1.0/identifiers/<did>` with content-negotiated responses. Production deployments at `uniresolver.io`, [[Danube Tech]]'s commercial offering, [[Spruce Systems]]' `kit.spruceid.com`, and self-hosted instances at major issuers (DVV Finland, Bundesdruckerei, BC Gov). The driver registry covers 50+ methods including did:web, did:key, did:jwk, did:ion, did:indy, did:cheqd, did:ethr, did:peer, did:plc, did:webvh, did:tdw, did:nostr, did:ebsi, did:dock, did:elem, did:onchain, did:btcr, did:v1, did:pkh, did:hcs, did:hedera, did:com, did:moncoinsign, did:object.
	  - **Universal Registrar** — Companion service exposing `POST /1.0/create`, `/update`, `/deactivate` across methods that support write operations.
	  - **Caching and freshness** — Resolution metadata includes `retrieved` timestamps; verifiers cache DID Documents with TTLs aligned to method update frequencies. High-assurance flows (eIDAS qualified, financial KYC) re-resolve for each verification; low-stakes flows (forum authentication, IoT pairing) cache for hours or days.

  - ### Verifiable Credentials, Selective Disclosure, and Presentation Protocols
	  - DIDs identify the actors in **[[Verifiable Credentials]]** flows: an issuer DID signs a credential about a subject DID, and a holder presents credentials with a holder-binding key bound to their DID. The [[W3C VC Data Model v2.0]] reached Recommendation on 15 May 2025, formalising:
		  - **Data Integrity proofs** with cryptosuites `eddsa-rdfc-2022` (Ed25519), `ecdsa-rdfc-2019` (P-256 / P-384), `bbs-2023` (BBS+ selective disclosure), and `ecdsa-sd-2023` (P-256 selective disclosure).
		  - **Securing mechanisms** — Data Integrity (JSON-LD canonical) and JOSE/COSE (JWT / CWT envelope).
		  - **Credential and Presentation envelopes** — `VerifiableCredential` and `VerifiablePresentation` JSON-LD types.
	  - **BBS+ selective disclosure** — A pairing-based signature scheme over BLS12-381 G2 enabling the holder to derive a zero-knowledge proof revealing only a subset of credential attributes whilst preserving issuer signature validity. The IETF CFRG `draft-irtf-cfrg-bbs-signatures` and the [[W3C BBS+ Cryptosuites]] specifications standardise the wire format. Used by [[AnonCreds]] (CL-Signatures variant) on Hyperledger Indy, and increasingly by EBSI and the EUDI Wallet ARF reference implementation.
	  - **[[SD-JWT]]** (Selective Disclosure JWT) — IETF OAuth WG draft providing a hash-salt-based selective disclosure mechanism for JWT-encoded credentials. The **SD-JWT VC** profile (draft-ietf-oauth-sd-jwt-vc) is the EUDI Wallet Architecture Reference Framework's mandated credential format for non-JSON-LD use, with COSE-based **mDoc / mDL** (ISO/IEC 18013-5 mobile driving licence) as the parallel binary format for in-person presentations.
	  - **[[CBOR-LD]]** — Binary JSON-LD compaction reducing credential size by 5-10× for QR-code and NFC transport.
	  - **Exchange protocols** — [[OpenID4VCI]] (OpenID for Verifiable Credential Issuance, OpenID Foundation Implementer's Draft 2024) for issuer→holder credential issuance; [[OpenID4VP]] (Verifiable Presentations) for verifier→holder request flows; [[DIDComm v2]] (DIF) for end-to-end-encrypted peer messaging; [[WACI-DIDComm]] (Wallet and Credential Interactions) for combined invocation patterns. The EUDI Wallet adopts OpenID4VC as the primary protocol family; AnonCreds / Hyperledger Aries deployments use DIDComm.

  - ### Wallets, Issuers, and the Vendor Landscape
	  - **Consumer / employer wallets** — [[Microsoft Entra Verified ID]] (formerly Azure AD Verifiable Credentials; SaaS, ~150M Azure AD tenant base), [[Trinsic]] (USA; SDK and white-label wallet), [[Spruce ID]] (USA; `kepler.xyz`, Sign-In with Ethereum, `Sphereon` collaboration), [[walt.id]] (Austria; ID Wallet, SSI Kit), [[Procivis]] (Switzerland; One Wallet), [[Animo Solutions]] (Netherlands; Paradym, Aries), [[esatus]] (Germany; SeLF, IDunion), [[Bloom]] (defunct 2023), [[Civic]] (USA; Civic Pass), [[ConnectMe]] (Evernym, acquired by [[Avast]] then [[Gen Digital]]; legacy).
	  - **Issuer / verifier platforms** — [[Mattr]] (NZ; mDL and VC platform), [[Lissi]] (Germany; IDunion), [[Dock Labs]] (Argentina/UK; cheqd partner), [[Veridian]] (KERI-based, GLEIF vLEI), [[GLEIF]] (verifiable Legal Entity Identifier, vLEI based on KERI), [[Yoti]] (UK; reusable identity wallet, age verification), [[iProov]] (UK; biometric liveness binding to DID-bound credentials), [[Onfido]] (UK→France via Entrust acquisition 2024; KYC issuer).
	  - **Government / national wallets** — [[Italy IT Wallet]] (IT-Wallet, launched Oct 2024 piloting mDL and education credentials, scaling to all citizens through 2026), [[DigiLocker]] (India; 250M+ users, integrating Aadhaar-rooted credentials with W3C VC interoperability pilots through MeitY 2024), [[Estonia mID]] (legacy national eID adopting EUDI Wallet alignment), [[BankID]] (Norway / Sweden; bridging to EUDI), [[Singpass]] (Singapore; verifiable presentations), [[BC Wallet]] (British Columbia; AnonCreds and OpenID4VP), [[ESSIF]] (European Self-Sovereign Identity Framework, EBSI), [[NSW Digital ID]] (Australia; mDL ISO 18013-5).
	  - **Open-source frameworks** — [[Veramo]] (TypeScript; uPort heritage), [[Aries Framework JavaScript]] / [[Credo-TS]] (Aries successor, Animo-led), [[Aries Framework .NET]], [[Aries-Cloudagent-Python (ACA-Py)]] (BC Gov), [[Sphereon SSI-SDK]] (EUDI-aligned), [[walt.id Issuer / Verifier / Wallet]], [[Spruce DIDKit]] (Rust), [[Trinsic SDK]], [[DIDComm Messaging libraries]] (Python / Rust / Swift / Kotlin).

  - ### Trust Frameworks and Regulatory Alignment
	  - **EU [[eIDAS 2.0]]** — Regulation (EU) 2024/1183, in force 20 May 2024, mandates that every Member State make a **European Digital Identity Wallet (EUDI Wallet)** available to citizens and residents by **26 November 2026**. The Architecture and Reference Framework (ARF) v1.4 (2024) prescribes SD-JWT VC and ISO mDL credential formats, OpenID4VCI / OpenID4VP, and `did:web` / `did:jwk` / `did:ebsi` as supported DID methods. Four Large Scale Pilots (LSPs) — POTENTIAL, NOBID, DC4EU, EWC — covering 250+ participating organisations across 26 Member States exercise use cases including mDL, education credentials, social security, payments, organisational identity, and travel.
	  - **[[European Blockchain Services Infrastructure]] (EBSI)** — Operated by the European Commission DIGIT and Member States via the European Blockchain Partnership. Permissioned chain (Hyperledger Besu) hosting `did:ebsi` Legal Entity DIDs, Trusted Issuers Registry, Trust Chain, and Verifiable Accreditation. 350+ pilot organisations across education, finance, customs, and notarisation.
	  - **UK [[Digital Identity and Attributes Trust Framework]] (DIATF)** — Administered by the [[Office for Digital Identities and Attributes]] (OfDIA, established under DSIT March 2024). Currently at version 0.4 / Gamma (Beta superseded 2024); certifies identity service providers (Yoti, iProov, OneID, Post Office, ID-Pal, Persona, Onfido, Truu, Digidentity) against right-to-work, right-to-rent, DBS checks, age assurance, and reusable identity assertions. The **Data (Use and Access) Act 2025** (Royal Assent 19 June 2025, formerly Data Protection and Digital Information Bill) provides the statutory basis for the DIATF, the OfDIA, and a register of certified providers; commences trust marks and information-gateway powers through 2025-2026 secondary legislation.
	  - **UK [[GOV.UK One Login]]** — Government Digital Service single sign-on consolidating 190+ government services on a common identity (passport / driving licence / app-based liveness, OpenID Connect upstream, evolving toward DIATF certification and VC-aligned reusable assertions through 2025-2027 roadmap).
	  - **US [[NIST SP 800-63-4]]** — Digital Identity Guidelines, Second Public Draft Aug 2024 with Final expected 2025-2026; for the first time recognises **subscriber-controlled wallets** and verifiable presentations as conformant identity assertion mechanisms at IAL2 / AAL2.
	  - **[[ID4D]]** (World Bank Identification for Development) — Funds national ID modernisation across 30+ countries, increasingly recommending W3C VC / OpenID4VC profiles for sectoral interoperability.
	  - **Sectoral frameworks** — [[GLEIF vLEI]] (verifiable Legal Entity Identifier, KERI-based, mandatory for FCA-regulated entities under MiFID II reporting refresh 2025), [[GS1]] Digital Link / EPCIS 2.0 for supply-chain provenance, [[ICAO DTC]] (Digital Travel Credential) Type 1/2/3 for biometric e-passport derivation, [[IATA One ID]] / [[Travel Pass]] for airline credentialling, [[Open Badges 3.0]] (1EdTech) and [[Europass EDC]] for education.

  - ### Privacy, Security, and Threat Model
	  - **Correlation resistance** — Reusing a single DID across verifiers permits trivial correlation. Best practice: **pairwise DIDs** (did:peer numalgo 2/4, or did:key per relationship) for human-subject contexts; persistent organisational DIDs are acceptable because organisations expect to be identifiable. AnonCreds and BBS+ enable unlinkable presentations of the same credential to different verifiers.
	  - **Key compromise and rotation** — Methods supporting rotation (did:ion, did:indy, did:ethr, did:webvh, did:plc) define `nextUpdate` keys committing the next rotation hash chain. did:key and did:jwk have no rotation; compromise is terminal.
	  - **Social recovery and threshold control** — Multi-signature controllers (Gnosis Safe for did:ethr, Aries multi-tenant wallets, Shamir secret sharing) reduce single-point-of-failure risks for high-value DIDs.
	  - **Quantum threat** — Current cryptosuites (Ed25519, secp256k1, BLS12-381) are Shor-vulnerable. The NIST PQC competition produced ML-DSA (Dilithium FIPS 204, August 2024), ML-KEM (Kyber FIPS 203), and SLH-DSA (SPHINCS+ FIPS 205); DID methods are adding `MLDSAKey2024` verification method types and hybrid suites through 2025-2027.
	  - **[[GDPR]] compliance** — DID Documents are personal data when linked to identifiable persons; deactivation must be available; pseudonymous / pairwise DIDs reduce identifiability. Public-ledger methods (did:ion, did:ethr) require careful avoidance of personal data on-chain. The EUDI Wallet ARF explicitly prohibits storing personally identifying data on EBSI; only public-key material and revocation accumulators reside on-ledger.
	  - **Service-endpoint denial-of-service** — DIDComm and IdentityHub endpoints require rate limiting and authentication; rotating endpoint URLs via DID Document updates is standard practice for high-volume issuers.

  - ### Use Cases / Major Families
	  - **Reusable KYC and onboarding** — A user completes one DIATF-certified or eIDAS-qualified identity proofing flow (Yoti, Onfido, iProov, OneID), receives a Verifiable Credential bound to their wallet DID, and presents selectively to banks, employers, and platforms; eliminating ~£40-£80 of repeated KYC per onboarding (Yoti commercial estimates 2024).
	  - **Age assurance under UK [[Online Safety Act 2023]]** — Effective from 2025, Part 5 requires services hosting pornographic content and Part 3 requires Category 1 platforms to deploy highly effective age assurance. Yoti, OneID, AgeChecked, and Verifymy offer age-only Verifiable Credentials (`ageOver: 18`) using ZKP / SD-JWT to disclose only the age threshold.
	  - **Education credentials** — [[Open Badges 3.0]] (1EdTech, Recommendation 2023), [[Europass Digital Credentials Infrastructure]] (European Commission 2023-2025 rollout), MIT Digital Diploma, and UK Universities pilots through Jisc and the [[Digital Credentials Consortium]] (MIT, Harvard, Berkeley, TU Munich, McMaster). Replaces PDF-with-watermark transcripts with cryptographically verifiable VCs.
	  - **Professional licensing** — GMC, GDC, NMC, SRA, BAR licensing converging on verifiable practitioner credentials (Truu, RealID, Digital Identity Net) reducing locum onboarding from 4-12 weeks to hours.
	  - **Supply-chain provenance** — [[GS1]] Digital Link + EPCIS 2.0 + W3C VC carries product DPP (Digital Product Passport) data; the EU Ecodesign for Sustainable Products Regulation 2024 phases DPPs in for textiles, batteries (mandatory 18 Feb 2027 under Battery Regulation 2023/1542), electronics, and construction products.
	  - **Travel and aviation** — IATA Travel Pass, One ID; ICAO DTC-1 deriving from biometric e-passport; airline pilots at British Airways, Lufthansa, Etihad, Singapore Airlines.
	  - **Decentralised social / messaging** — Bluesky AT-Protocol `did:plc` (25M+ identities Mar 2025), Farcaster Verifications, Nostr `npub` → `did:nostr`.
	  - **Tokenised access and reputation** — Soulbound Tokens (SBTs, Vitalik Buterin / Glen Weyl / Puja Ohlhaver 2022), Optimism / Linea attestations (EAS — Ethereum Attestation Service), Galxe / Zealy credentials, Sismo Connect ZK-attestations bridging DIDs and Ethereum addresses.
	  - **Organisational identity** — GLEIF vLEI (verifiable LEI) for regulated entities; KERI-based, mandated under MiFID II reporting refresh, FCA-supervised in the UK, post-Brexit interoperability with ESMA.

  - ### Academic Context
	  - The W3C DID Core 1.0 specification (Sporny, Longley, Reed, Steele, Allen 2022) drew on 20+ years of identity research synthesising **Stefan Brands' private credentials** (1999), **IBM's Idemix / Camenisch-Lysyanskaya signatures** (2001, foundation of AnonCreds), **Microsoft's U-Prove** (Brands 2008 acquisition), **Christopher Allen's Path to Self-Sovereign Identity** (2016 essay), **the Rebooting the Web of Trust** community (Allen / Sabadello / Lundkvist / Sporny / Reed 2015-present), and **the W3C Credentials Community Group** (2014-present chaired by Sporny / Burnett / Zundel).
	  - **Foundational papers** — Reed et al. *Decentralized Identifiers (DIDs) v1.0* (W3C Rec 2022); Sporny et al. *Verifiable Credentials Data Model v2.0* (W3C Rec 2025); Camenisch & Lysyanskaya *Signature Schemes and Anonymous Credentials from Bilinear Maps* (CRYPTO 2004); Boneh, Boyen, Shacham *Short Group Signatures* (CRYPTO 2004); Chaum *Security Without Identification* (CACM 1985).
	  - **Recent academic work (2023-2025)** — Tobin & Reed *The Inevitable Rise of Self-Sovereign Identity* (Sovrin 2023 revision); Mühle et al. *A survey on essential components of a self-sovereign identity* (Computer Science Review 2018); Sedlmeir et al. *The DLT-Sustainability Paradox of Self-Sovereign Identity* (Business & Information Systems Engineering 2024); Pöhn & Hommel *New Directions and Challenges within Identity and Access Management* (IEEE Comm Surveys 2024); Schardong & Custódio *Self-Sovereign Identity: A Systematic Map and Review* (ACM Computing Surveys 2024). Annual **Rebooting the Web of Trust** working sessions (RWOT-11 The Hague 2023, RWOT-12 Cologne 2024, RWOT-13 2025) publish ~30 peer-reviewed working papers per session.
	  - **Conferences** — Internet Identity Workshop (IIW, Mountain View, semi-annual since 2005); Identiverse; EIC (European Identity Conference, KuppingerCole); ACM CCS; IEEE Symposium on Security and Privacy; Financial Cryptography; ESORICS.

  - ### Current Landscape (2026)
	  - **Standards convergence** — W3C DID v1.1 progressing through Candidate Recommendation in 2025; W3C VC Data Model 2.0 at Recommendation since May 2025; SD-JWT VC and OpenID4VC entering OpenID Foundation Final / Implementer's Draft status; the EUDI Wallet ARF v1.4 locking the EU profile through 2026 deployment.
	  - **Sunset of did:ion** — Microsoft Entra Verified ID migrated production tenants to `did:web` and `did:jwk` through 2024, citing operational simplicity and the difficulty of justifying Bitcoin anchoring costs for enterprise SaaS. ION nodes remain operable for legacy resolution.
	  - **Rise of did:webvh** — BC Gov, IDunion, and several EBSI Member State pilots adopting WebVH as the production-ready alternative combining did:web simplicity with verifiable history.
	  - **Bluesky scale** — `did:plc` reached ~25M identities by March 2025 with active decentralisation discussions in the AT-Protocol developer community; the Bluesky operator commits to publishing PLC governance and operating costs.
	  - **EUDI Wallet readiness** — Member States advancing reference wallets ahead of the 26 Nov 2026 deadline; Germany (BMI ID Wallet), Italy (IT-Wallet, live Oct 2024), France (France Identité), Spain (Cartera Digital Beta), Netherlands (NL Wallet), Sweden (BankID alignment), Estonia (mID modernisation), Austria (eID Austria).
	  - **UK regulatory posture** — Data (Use and Access) Act 2025 commenced June 2025; OfDIA register operational; DIATF v0.4 Gamma with planned v1.0 publication; the **UK Cyber Security and Resilience Bill** (2025 King's Speech) likely to interact with identity supply-chain security.
	  - **AnonCreds 2.0 / KERI / ACDC** — Hyperledger AnonCreds v2 draft introduces BBS+ pivot; KERI (Key Event Receipt Infrastructure, Sam Smith) and ACDC (Authentic Chained Data Containers) increasingly adopted at GLEIF vLEI scale and at high-assurance issuers.
	  - **Wallet ecosystem consolidation** — Avast / Gen Digital ended consumer ConnectMe wallet; Trinsic pivot toward issuer SDK; Spruce expanding `Sign-In with Ethereum` and government wallet contracts (California DMV mDL pilot, USPS Connect ID); walt.id and Procivis competing on EUDI conformance.

  - ### UK Context (Imperial / Edinburgh / UCL / Cambridge / Manchester academic; Northern English industrial — Manchester / Leeds / Sheffield / Newcastle)
	  - **[[Imperial College London]]** — Centre for Cryptocurrency Research and Engineering (IC3RE) and the Centre for Blockchain Technologies (UCL CBT joint affiliation); William Knottenbelt's group publishing on blockchain identity and central bank interoperability; Department of Computing's involvement in the [[Alan Turing Institute]] Digital Identity programme.
	  - **[[University College London]]** — [[UCL Centre for Blockchain Technologies]] (CBT, Paolo Tasca, Geoff Goodell) producing the *State of Digital Identity in Europe* and *Digital Currency Governance Consortium* outputs with the World Economic Forum; Geoff Goodell co-authored the proposed UK CBDC privacy architecture coupling pseudonymous DIDs with regulated intermediaries.
	  - **[[University of Cambridge]]** — Cambridge Centre for Alternative Finance (CCAF) annual *Global Cryptoasset Benchmarking Study* and *Cambridge Digital Assets Programme* with the Bank of England, MAS, and BIS Innovation Hub; the Cambridge Centre for Computing and Public Policy (Bennett Institute) on identity governance; Jon Crowcroft's Computer Lab work on decentralised systems.
	  - **[[University of Edinburgh]]** — Blockchain Technology Laboratory (Aggelos Kiayias) producing core academic output on cryptographic identity primitives (Mithril, Ouroboros stake-based authentication); the Edinburgh Futures Institute on identity policy.
	  - **[[University of Manchester]]** — Centre for Digital Trust and Society; involvement in [[Northern Powerhouse]] digital identity initiatives; manufacturing-sector DPP pilots through Digital Catapult NE.
	  - **Other UK academic** — Oxford Internet Institute (privacy-preserving identity policy, Reuben Binns and Carissa Véliz); Surrey 5G/6G Innovation Centre and the [[Surrey Centre for Cyber Security]]; Heriot-Watt and the Edinburgh Centre for Robotics on supply-chain provenance.
	  - **UK industrial — London** — [[Yoti]] (King's Cross HQ; reusable identity wallet, age verification, ~14M users globally with substantial UK base, DIATF-certified); [[iProov]] (London; biometric liveness underpinning GOV.UK One Login and EU eIDAS issuer onboarding); [[Onfido]] (London-headquartered before Entrust acquisition Apr 2024; KYC issuer); [[OneID]] (London; bank-data-rooted identity provider, DIATF-certified, partners with Lloyds, NatWest, HSBC); [[Truu]] (London; healthcare professional credentialling, NHS partnership); [[Tessian]] / [[Mimecast]] identity-adjacent; [[Worldline UK]]; [[Digital Catapult]] (London / NE / NI nodes).
	  - **UK industrial — Manchester** — [[Digital Catapult NW]] and the [[Manchester]] fintech / cyber cluster (Bruntwood SciTech, MediaCity); [[Onfido]] Manchester engineering presence; identity-adjacent fraud and AML providers (TransUnion UK, GBG plc Chester).
	  - **UK industrial — Leeds** — [[GBG plc]] (Chester / Leeds presence; identity verification at scale, AML/KYC); Leeds City Region Enterprise Partnership digital identity sandbox initiatives; NHS Digital and the Leeds Teaching Hospitals identity programmes (smart-card to mobile credentials transition).
	  - **UK industrial — Sheffield** — Sheffield's advanced manufacturing institutes (AMRC) increasingly interested in DPP / supply-chain VCs for aerospace and rail provenance; cyber-security workforce concentration through [[National Cyber Force]] presence.
	  - **UK industrial — Newcastle** — [[Digital Catapult North East]]; the [[National Innovation Centre for Data]]; identity-and-data SME cluster; Northumbria University's cyber programmes.
	  - **UK industrial — Belfast / Edinburgh / Glasgow** — [[Smarsh]] / [[Cyacomb]] / [[Encompass]] (Glasgow / Edinburgh; financial-crime intelligence with identity overlap); [[BlockChain Hyperledger Belfast]] (Catapult-supported).
	  - **UK policy and regulators** — [[Department for Science, Innovation and Technology]] (DSIT) sponsoring OfDIA and DIATF; [[Information Commissioner's Office]] (ICO) issuing guidance on identity wallets and biometrics under UK GDPR; [[Financial Conduct Authority]] (FCA) overseeing identity in payments and the [[JROC]] (Joint Regulatory Oversight Committee for Open Banking) future entity scoping smart-data wallets; [[Cabinet Office GDS]] on GOV.UK One Login; [[Open Identity Exchange]] (OIX) UK-headquartered policy / interop body convening DIATF roadmap.

  - ### Future Directions (2026-2030)
	  - **EUDI Wallet ubiquity** — 450M+ EU residents potentially wallet-equipped by 2028; cross-border presentation of mDL, education, social-security, and tax credentials becoming routine; private-sector relying parties (banks, telcos, retail age-gated services) mandated to accept under eIDAS 2.0 Article 5b.
	  - **Convergence on SD-JWT VC and ISO mDL** — The two-format pragmatism settling out as the JSON-LD Data Integrity / BBS+ stack remains in active use for AnonCreds-style unlinkable presentations and high-privacy education and healthcare contexts.
	  - **Post-quantum migration** — Hybrid signatures (Ed25519+ML-DSA-65, P-256+ML-DSA-44) entering production through 2026-2028 for high-value issuer DIDs; full PQ transition for sovereign identity by 2030.
	  - **KERI / ACDC adoption** — GLEIF vLEI scaling drives KERI adoption beyond LEI to other organisational and high-assurance human credentials; ACDC's chained authenticity enabling supply-chain and licence-chain provenance.
	  - **AI agent identity** — DIDs binding autonomous AI agents (LangChain / AutoGPT / OpenAI Agents / Anthropic MCP) to verifiable model provenance, ownership, and capability claims; emerging discussion in DIF (AI Agent Identity Working Group, 2025) and IETF.
	  - **Digital Product Passport rollout** — EU Ecodesign Regulation phasing DPP requirements 2026-2030 (textiles, electronics, construction, chemicals) creating mass demand for DID-anchored product credentials.
	  - **Wallet portability and trust frameworks** — Cross-trust-framework recognition agreements (EUDI ↔ DIATF ↔ NIST 800-63-4) maturing 2027-2029.
	  - **Consolidation and standardisation of registered methods** — The DID Method Registry likely to consolidate from 180+ to a working production set of 12-20 methods plus long-tail experimental, with the Working Group introducing soft deprecation for unmaintained methods.
	  - **Regulated AI provenance** — C2PA (Content Authenticity Initiative) and W3C VC integration binding generated-media provenance to identifier-controlled keys; EU AI Act Article 50 disclosure obligations from Aug 2026 driving uptake.

  - ### Research and Literature
	  **Specifications**:
	  1. Reed, D., Sporny, M., Longley, D., Allen, C., Grant, R., Sabadello, M., Holt, J. (2022). *Decentralized Identifiers (DIDs) v1.0: Core architecture, data model, and representations*. W3C Recommendation 19 July 2022. https://www.w3.org/TR/did-core/
	  2. Sabadello, M., Looker, T., Reed, D., et al. (2025). *Decentralized Identifier Resolution (DID Resolution) v0.3*. W3C / DIF Working Draft.
	  3. Sporny, M., Longley, D., Steele, O., Cohen, G., et al. (2025). *Verifiable Credentials Data Model v2.0*. W3C Recommendation 15 May 2025.
	  4. Steele, O., Sporny, M. (2024). *Verifiable Credentials Data Integrity 1.0*. W3C Recommendation. https://www.w3.org/TR/vc-data-integrity/
	  5. Sporny, M., Longley, D. (2024). *EdDSA Cryptosuite v2022* (`eddsa-rdfc-2022`). W3C Recommendation.
	  6. Lodder, M., Looker, T. (2024). *BBS Cryptosuite v2023* (`bbs-2023`). W3C Working Draft.
	  7. Fett, D., Yasuda, K., Campbell, B. (2025). *Selective Disclosure for JWTs (SD-JWT)*. IETF OAuth WG draft-ietf-oauth-selective-disclosure-jwt.
	  8. Yasuda, K., Lodderstedt, T., et al. (2024). *OpenID for Verifiable Credential Issuance* (OpenID4VCI). OpenID Foundation Implementer's Draft.
	  9. Terbu, O., Lodderstedt, T., Yasuda, K. (2024). *OpenID for Verifiable Presentations* (OpenID4VP). OpenID Foundation.
	  10. ISO/IEC 18013-5:2021. *Personal identification — ISO-compliant driving licence — Part 5: Mobile driving licence (mDL) application*. ISO/IEC JTC 1/SC 17.

	  **Academic and conceptual foundations**:
	  11. Allen, C. (2016). *The Path to Self-Sovereign Identity*. Life with Alacrity blog, 27 Apr 2016.
	  12. Tobin, A., Reed, D. (2017, revised 2023). *The Inevitable Rise of Self-Sovereign Identity*. Sovrin Foundation white paper.
	  13. Chaum, D. (1985). Security without identification: transaction systems to make Big Brother obsolete. *Communications of the ACM* 28(10), 1030-1044.
	  14. Camenisch, J., Lysyanskaya, A. (2004). Signature schemes and anonymous credentials from bilinear maps. *CRYPTO 2004*, LNCS 3152, 56-72.
	  15. Boneh, D., Boyen, X., Shacham, H. (2004). Short group signatures. *CRYPTO 2004*, LNCS 3152, 41-55.
	  16. Brands, S. (2000). *Rethinking Public Key Infrastructures and Digital Certificates: Building in Privacy*. MIT Press.
	  17. Mühle, A., Grüner, A., Gayvoronskaya, T., Meinel, C. (2018). A survey on essential components of a self-sovereign identity. *Computer Science Review* 30, 80-86.
	  18. Schardong, F., Custódio, R. (2024). Self-Sovereign Identity: A Systematic Map and Review. *ACM Computing Surveys* 56(8), Article 192.
	  19. Sedlmeir, J., Smethurst, R., Rieger, A., Fridgen, G. (2021, expanded 2024). Digital identities and verifiable credentials. *Business & Information Systems Engineering* 63(5), 603-613.
	  20. Pöhn, D., Hommel, W. (2024). New directions and challenges within identity and access management. *IEEE Communications Surveys & Tutorials* 26(2), 1180-1218.

	  **Method specifications and implementations**:
	  21. Buchner, D., Allen, C., Hardman, D., et al. (2024). *Sidetree Protocol Specification v1.0.0*. DIF.
	  22. Aristidou, A., Kennedy, S., Curren, S., et al. (2024). *did:webvh — The Trust DID Web Method v0.5*. DIF Identifiers and Discovery WG.
	  23. Bluesky PBC (2024). *did:plc Method Specification*. https://github.com/did-method-plc/did-method-plc
	  24. Lundkvist, C., Bosma, J., Torstensson, J., et al. (2024). *did:ethr Method Specification* (ERC-1056). uPort / Veramo.
	  25. Aries Working Group (2024). *did:indy Method Specification*. Hyperledger Foundation.

	  **Trust frameworks and policy**:
	  26. European Commission (2024). *Regulation (EU) 2024/1183 amending Regulation (EU) No 910/2014 as regards establishing the European Digital Identity Framework (eIDAS 2.0)*. OJ L 2024/1183, 30 Apr 2024.
	  27. European Commission DG CONNECT (2024). *European Digital Identity Wallet Architecture and Reference Framework v1.4*.
	  28. UK Department for Science, Innovation and Technology (2024). *UK Digital Identity and Attributes Trust Framework v0.4 (Gamma)*.
	  29. UK Parliament (2025). *Data (Use and Access) Act 2025*. c. 27. Royal Assent 19 June 2025.
	  30. NIST (2024). *SP 800-63-4 (2nd Public Draft): Digital Identity Guidelines*. National Institute of Standards and Technology, Aug 2024.
	  31. Office for Digital Identities and Attributes (2024-2025). *Annual Reports and Register of Certified Providers*. DSIT.
	  32. World Bank ID4D (2024). *Identification for Development Annual Report 2023-2024*.
	  33. GLEIF (2024). *Verifiable LEI (vLEI) Ecosystem Governance Framework*. Global Legal Entity Identifier Foundation.
	  34. UCL Centre for Blockchain Technologies (2024). *State of Digital Identity in Europe*. P. Tasca, G. Goodell, et al.
	  35. KuppingerCole (2025). *Leadership Compass: Decentralized Identity Wallets and Verifiable Credentials*.
	  36. Cambridge Centre for Alternative Finance (2024). *Cambridge Digital Assets Programme — Identity Workstream Outputs*.

  - ## Metadata
	  - **Last Updated**: 2026-05-16
	  - **Review Status**: Phase 6 comprehensive enrichment
	  - **Verification**: W3C Recommendation status (DID Core 1.0 — 19 Jul 2022; VC Data Model 2.0 — 15 May 2025) cross-checked against W3C TR registry; eIDAS 2.0 Regulation 2024/1183 verified in Official Journal; UK Data (Use and Access) Act 2025 Royal Assent date 19 Jun 2025 cross-checked against UK Parliament records; Microsoft ION sunset cross-checked against Microsoft Entra documentation; Bluesky did:plc deployment figures cross-checked against Bluesky transparency reports Mar 2025
	  - **Domain Validation**: domain `blockchain` retained (correct ontological placement — DIDs are blockchain-adjacent identifier infrastructure with web-hosted and key-only methods as additional sub-families; alternative domain `identity` discussed but not introduced as a top-level ontology domain in this graph). iri / uri / same-as / owl-class realigned to blockchain namespace.
	  - **Regional Context**: UK academic (Imperial, UCL CBT, Cambridge CCAF, Edinburgh, Manchester); Northern English industrial (Manchester Digital Catapult NW, Leeds GBG, Sheffield AMRC, Newcastle Digital Catapult NE, National Innovation Centre for Data); UK industry (Yoti, iProov, Onfido, OneID, Truu, OIX); UK policy (DSIT, OfDIA, ICO, FCA, GDS One Login)
	  - **Production-Ready**: Complete OWL formal semantics across 6 axiom families (Compositional, Dependency, Capability, Implementation, Reduction, Association) plus Data Properties / Property Constraints / Annotations / Property Characteristics; comprehensive content (architecture, methods, resolution, VC integration, wallets, trust frameworks, security, use cases, academic context, current landscape 2026, UK context, future directions 2026-2030, 36 references)
	  - **Authority Score**: 0.87 (W3C Recommendation status, EU mandate via eIDAS 2.0, UK statutory underpin via DUA Act 2025, 25M+ live did:plc deployment, 1.4M+ BC OrgBook did:sov / did:indy deployment, established multi-jurisdictional regulatory and academic literature base)

- ### Provenance
  - sources:: [[W3C DID Core 1.0]], [[W3C DID 1.1 Working Draft]], [[W3C Verifiable Credentials Data Model v2.0]], [[W3C Data Integrity 1.0]], [[DIF Sidetree Specification]], [[DIF Universal Resolver]], [[did:webvh Specification]], [[did:plc Specification]], [[did:indy Specification]], [[did:ethr Specification]], [[Hyperledger Indy]], [[Sovrin Network]], [[Bluesky AT-Protocol]], [[European Blockchain Services Infrastructure]], [[eIDAS 2.0 Regulation 2024/1183]], [[EUDI Wallet ARF v1.4]], [[UK Data Use and Access Act 2025]], [[UK DIATF v0.4]], [[NIST SP 800-63-4]], [[GLEIF vLEI Governance Framework]], [[ISO/IEC 18013-5 mDL]], [[OpenID4VCI]], [[OpenID4VP]], [[Trust over IP Foundation]], [[Decentralized Identity Foundation]], [[Rebooting the Web of Trust]], [[Allen 2016 Path to Self-Sovereign Identity]], [[Tobin Reed 2017 Inevitable Rise of SSI]], [[Schardong Custodio 2024 SSI Systematic Map]], [[Mühle et al 2018 SSI Components Survey]], [[Sedlmeir et al 2024 Digital Identities VC]], [[Pöhn Hommel 2024 IAM Survey]], [[GDPR]], [[UCL CBT State of Digital Identity Europe]], [[KuppingerCole Leadership Compass DID Wallets 2025]]
  - migration-date:: 2026-04-26T00:00:00Z
  - enrichment-date:: 2026-05-16T13:00:00Z
  - domain-correction:: none (blockchain retained)