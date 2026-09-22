public:: true

# Uri Scheme
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:uri-scheme", "@type":"Page", "title":"Uri Scheme", "vc:slug":"uri-scheme", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:uri-scheme",
  "@type":"Class",
  "label":"Uri Scheme",
  "definition":"A URI scheme is the leading component of a Uniform Resource Identifier that names the namespace, protocol, or resolution mechanism by which the remainder of the identifier is to be interpreted, appearing before the colon delimiter (for example http, https, mailto, did, urn, or ipfs). Schemes are registered with IANA under provisional or permanent status and define the syntax and semantics of the scheme-specific part. Custom and decentralised schemes such as did: and ipfs: extend the URI model to identity and content-addressed systems, making the scheme a foundational element of how distributed resources are addressed and trusted.",
  "domain":"security",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:protocol","label":"Protocol"}],
  "relations":{
    "partOf":[
      {"@id":"urn:ngm:class:decentralised-identifiers","label":"Decentralised Identifiers"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:naming-scheme","label":"Naming Scheme"},
      {"@id":"urn:ngm:class:protocol","label":"Protocol"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:identifier","label":"Identifier"},
      {"@id":"urn:ngm:class:standards","label":"Standards"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:decentralised-identifiers","label":"Decentralised Identifiers"},
      {"@id":"urn:ngm:class:verifiable-credentials","label":"Verifiable Credentials"},
      {"@id":"urn:ngm:class:authentication","label":"Authentication"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:did","label":"DID"}
    ],
    "standardizedBy":[
      {"@id":"urn:ngm:class:standards","label":"Standards"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:web","label":"Web"},
      {"@id":"urn:ngm:class:naming-scheme","label":"Naming Scheme"}
    ],
    "bridgesTo":[
      {"@id":"urn:ngm:class:decentralised-identifiers","label":"Decentralised Identifiers"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A [[Uri Scheme]] is the leading component of a Uniform Resource Identifier that names the [[Protocol]] or namespace under which the rest of the identifier is interpreted.
	- It appears before the colon delimiter and governs the syntax and semantics of the scheme-specific part, acting as a [[Naming Scheme]] registered with a registry authority.
	- Decentralised schemes such as did: and ipfs: extend the URI model into [[Decentralised Identifiers]] and content-addressed systems.
	- Schemes underpin how distributed resources are addressed, resolved, and trusted across the [[Web]].
- ### Overview
	- The URI scheme is defined in RFC 3986 as the first and most significant element of any URI. It establishes the interpretive context: a parser reads the scheme first, then applies scheme-specific rules to the authority, path, query, and fragment.
	- Schemes are catalogued by the Internet Assigned Numbers Authority (IANA) under permanent, provisional, and historical status registers. Permanent schemes such as http, https, ftp, mailto, and urn have stable specifications, while provisional schemes may be experimental.
	- In decentralised identity and Web3 systems, the scheme carries particular weight. The did: scheme signals that the identifier is a Decentralised Identifier whose method-specific suffix (e.g. did:key, did:web, did:ion) determines how the identifier resolves to a DID document.
	- Custom schemes also drive deep linking in mobile applications and inter-application messaging, where the scheme routes a request to a registered handler.
- ### Mechanisms
	- Registration: schemes are submitted to IANA with a specification describing syntax, operations, and security considerations.
	- Resolution: a client maps a scheme to a handler or resolver capable of dereferencing the identifier.
	- Delegation: hierarchical schemes (urn:, did:) delegate further interpretation to a namespace or method identifier.
	- Security scoping: the scheme constrains which protocols and trust assumptions apply, so origin and same-scheme policies depend on it.
- ### Applications
	- Web addressing via http and https.
	- Decentralised identity via the did: scheme resolving to [[Decentralised Identifiers]].
	- Content addressing via ipfs: and content-hash schemes.
	- Application deep linking and custom protocol handlers.
	- Credential exchange flows that embed scheme-typed identifiers into [[Verifiable Credentials]].
- ### Relationships
	- partOf:: [[Decentralised Identifiers]]
	- implements:: [[Naming Scheme]]
	- implements:: [[Protocol]]
	- uses:: [[Identifier]]
	- uses:: [[Standards]]
	- enables:: [[Decentralised Identifiers]]
	- enables:: [[Verifiable Credentials]]
	- enables:: [[Authentication]]
	- supports:: [[DID]]
	- standardizedBy:: [[Standards]]
	- relatedTo:: [[Web]]
	- relatedTo:: [[Naming Scheme]]
	- bridgesTo:: [[Decentralised Identifiers]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
