A URI scheme is the leading component of a Uniform Resource Identifier that names the namespace, protocol, or resolution mechanism by which the remainder of the identifier is to be interpreted, appearing before the colon delimiter (for example http, https, mailto, did, urn, or ipfs). Schemes are registered with IANA under provisional or permanent status and define the syntax and semantics of the scheme-specific part. Custom and decentralised schemes such as did: and ipfs: extend the URI model to identity and content-addressed systems, making the scheme a foundational element of how distributed resources are addressed and trusted.

### Overview

- The URI scheme is defined in RFC 3986 as the first and most significant element of any URI. It establishes the interpretive context: a parser reads the scheme first, then applies scheme-specific rules to the authority, path, query, and fragment.
- Schemes are catalogued by the Internet Assigned Numbers Authority (IANA) under permanent, provisional, and historical status registers. Permanent schemes such as http, https, ftp, mailto, and urn have stable specifications, while provisional schemes may be experimental.
- In decentralised identity and Web3 systems, the scheme carries particular weight. The did: scheme signals that the identifier is a Decentralised Identifier whose method-specific suffix (e.g. did:key, did:web, did:ion) determines how the identifier resolves to a DID document.
- Custom schemes also drive deep linking in mobile applications and inter-application messaging, where the scheme routes a request to a registered handler.

### Mechanisms

- Registration: schemes are submitted to IANA with a specification describing syntax, operations, and security considerations.
- Resolution: a client maps a scheme to a handler or resolver capable of dereferencing the identifier.
- Delegation: hierarchical schemes (urn:, did:) delegate further interpretation to a namespace or method identifier.
- Security scoping: the scheme constrains which protocols and trust assumptions apply, so origin and same-scheme policies depend on it.

### Applications

- Web addressing via http and https.
- Decentralised identity via the did: scheme resolving to [[Decentralised Identifiers]].
- Content addressing via ipfs: and content-hash schemes.
- Application deep linking and custom protocol handlers.
- Credential exchange flows that embed scheme-typed identifiers into [[Verifiable Credentials]].

### Provenance

