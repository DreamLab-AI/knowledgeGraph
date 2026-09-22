public:: true

# L402 Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a16c91c62ec0b12a0a3629ba5c16a6515647353cf5584d0b39d98a0157516560",
  "@type": "Page",
  "vc:slug": "l-402-protocol",
  "title": "L402 Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:micropayment",
      "vc:label": "Micropayment"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:l-402",
      "vc:label": "L402"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "L402 Protocol"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:l-402-protocol",
  "@type": "Class",
  "label": "L402 Protocol",
  "definition": "L402 Protocol is a web-native payment authentication specification that combines HTTP 402 status responses, [[Lightning Network]] BOLT11 invoices, and cryptographic macaroon tokens to enable pay-per-request access control for APIs and web resources. A server responding with 402 embeds a Lightning invoice and a partially-constructed macaroon; the client pays the invoice, receives the payment preimage, and embeds that preimage as a macaroon caveat to form a valid bearer credential. The protocol enables metered, machine-to-machine micropayments without requiring user accounts, subscriptions, or traditional payment rails, making it well-suited to AI agent infrastructure, streaming data services, and censorship-resistant content monetisation.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:l-402",
      "label": "L402"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      },
      {
        "@id": "urn:ngm:class:payment-preimage",
        "label": "Payment Preimage"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
      },
      {
        "@id": "urn:ngm:class:pay-per-request",
        "label": "Pay-Per-Request"
      },
      {
        "@id": "urn:ngm:class:api",
        "label": "Metered API"
      },
      {
        "@id": "urn:ngm:class:machine-to-machine-payments",
        "label": "Machine-to-Machine Payment"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP 402"
      },
      {
        "@id": "urn:ngm:class:bearer-token",
        "label": "Bearer Token"
      },
      {
        "@id": "urn:ngm:class:hash-time-locked-contract",
        "label": "Hash Time-Locked Contract"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP Authentication Scheme"
      },
      {
        "@id": "urn:ngm:class:payment-channel",
        "label": "Payment Channel Protocol"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:api-monetisation",
        "label": "API Monetisation"
      },
      {
        "@id": "urn:ngm:class:content-monetisation",
        "label": "Content Monetisation"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Decentralised Access Control"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bitcoin",
        "label": "Bitcoin"
      },
      {
        "@id": "urn:ngm:class:cryptographic-hash-function",
        "label": "Cryptographic Hash Function"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:oauth",
        "label": "OAuth"
      },
      {
        "@id": "urn:ngm:class:api-key-authentication",
        "label": "API Key Authentication"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent Economy"
      },
      {
        "@id": "urn:ngm:class:web-of-trust",
        "label": "Web of Trust"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:web-monetisation",
        "label": "Web Monetisation"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightning-http402",
      "label": "Lightning HTTP402"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:l-402-protocol:bfd0f8fe1fc3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a16c91c62ec0b12a0a3629ba5c16a6515647353cf5584d0b39d98a0157516560"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Micropayment]]",
      "resolved": "urn:visionflow:linked:micropayment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[L402]]",
      "resolved": "urn:visionflow:linked:l-402",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - The L402 Protocol is a web-native [[HTTP]] authentication specification that unifies the long-reserved [[HTTP 402]] "Payment Required" status code with [[Lightning Network]] BOLT11 invoices and cryptographic [[Macaroon Token]] bearer credentials, creating an end-to-end standard for authorising paid access to web resources without traditional account infrastructure.
  - The name "L402" references both the Lightning layer and the HTTP response code, reflecting the protocol's dual role as a [[Payment Protocol]] and an [[Authentication]] framework. It was pioneered by Lightning Labs as part of the [[LSATS]] (Lightning Service Authentication Tokens) work, and later formalised as an open specification.

- ### Overview
  - **Why it matters**
    - [[Web Monetisation]] has historically required subscription accounts, credit cards, or centralised payment rails, creating friction that excludes machine clients and micro-scale consumers. L402 Protocol addresses this by making payment an intrinsic part of the HTTP request-response cycle, removing account creation from the critical path and enabling sub-second, sub-cent transactions.
    - For [[AI Agent]] infrastructure — where autonomous software must purchase computation, data, or API calls programmatically — L402 provides a protocol-native way to monetise services without requiring agents to hold conventional payment credentials.
  - **How it works — the exchange**
    - A client sends a standard HTTP GET or POST to a protected endpoint.
    - The server returns `HTTP 402 Payment Required` with two headers: a [[BOLT11 Invoice]] (a [[Lightning Network]] payment request encoding amount, expiry, and destination) and a partially-formed [[Macaroon Token]] that identifies the session but lacks a valid [[Payment Preimage]] caveat.
    - The client pays the invoice over the Lightning Network, receiving the 32-byte payment preimage (the cryptographic secret proving settlement).
    - The client appends the preimage as a macaroon caveat, constructing a complete bearer credential, and retransmits the original request with an `Authorization: L402 <macaroon>:<preimage>` header.
    - The server verifies the macaroon's HMAC chain and checks that the preimage matches the invoice's payment hash, then grants access.
  - **Settlement guarantees**
    - Settlement is atomic via the [[Hash Time-Locked Contract]] (HTLC) mechanism of the [[Lightning Network]]: the preimage is only revealed upon successful payment, so a forged or replayed preimage cannot pass verification without an actual on-chain-anchored payment commitment.

- ### Key Components
  - **HTTP 402 Response**
    - The long-defined but rarely used [[HTTP 402]] status ("Payment Required") becomes the machine-readable signal that a resource costs money. The response includes `WWW-Authenticate: L402` headers carrying the invoice and incomplete token.
  - **BOLT11 Invoice**
    - The [[BOLT11 Invoice]] encodes the payment amount (in millisatoshis), the [[Payment Hash]] (SHA-256 of the preimage), expiry time, destination pubkey, and optional routing hints. Clients parse it with any standard [[Lightning Network]] wallet or library.
  - **Macaroon Token**
    - [[Macaroon Token]] credentials are HMACed bearer tokens that support attenuation: each caveat added to a macaroon further restricts its scope without requiring re-issuance. In L402, the server issues a "root" macaroon bound to a service identifier; the client adds a caveat containing the payment preimage, which the server verifies as proof of payment.
    - Caveats can additionally restrict: IP address ranges, expiry timestamps, usage quotas, and specific resource paths — enabling fine-grained [[Access Control]] without server-side session state.
  - **Payment Preimage**
    - The [[Payment Preimage]] is the 32-byte secret whose SHA-256 hash equals the BOLT11 invoice's payment hash. It is revealed only when the Lightning payment settles, making it a cryptographic proof of payment. Embedding it in the macaroon ties the credential irreversibly to a settled transaction.
  - **L402 Authorization Header**
    - The completed credential is transmitted as: `Authorization: L402 <base64-macaroon>:<hex-preimage>`. This follows [[HTTP Authentication]] conventions, making it compatible with standard HTTP middleware.

- ### Mechanisms
  - **Token Attenuation**
    - Because [[Macaroon Token]] caveats are additive and one-way (you can restrict but not expand a token), L402 supports delegation: a service can issue a broad token to a proxy, which further restricts it before handing it to end clients, all without re-contacting the issuer.
  - **Stateless Verification**
    - The server can verify a presented L402 credential without database lookups: it recomputes the HMAC chain from its root secret, then checks that the preimage hashes to the payment hash encoded in the macaroon. This supports [[Horizontal Scaling]] and [[Serverless Architecture]] deployments.
  - **Expiry and Quotas**
    - Time-bound access (e.g., 24-hour streaming API access for one Lightning payment) is encoded as a macaroon caveat. Rate limits and request quotas are similarly caveat-expressible without requiring server state.
  - **Multi-Hop Routing Compatibility**
    - The [[Lightning Network]] payment itself may route through multiple intermediate nodes via [[Onion Routing]], but L402 is agnostic to routing: it only cares that the preimage was revealed, which only happens when the full payment path clears.

- ### Applications / Use Cases
  - **AI Agent Tooling and Autonomous Agents**
    - [[AI Agent]] frameworks (such as those built on the [[Model Context Protocol]] or similar tool-calling stacks) use L402 as a payment rail so agents can autonomously purchase API calls, dataset access, GPU compute, or specialised tools. No human needs to pre-authorise each micro-transaction; the agent budget is enforced by the Lightning payment channel capacity.
  - **Paid API Access**
    - [[Metered API]] providers (image generation, LLM inference, satellite imagery, financial data) offer pay-per-call pricing without requiring signup. Developers query, pay inline, and access — dramatically reducing onboarding friction and enabling serverless, per-call billing models.
  - **Content Monetisation**
    - Publishers and content platforms use L402 to implement [[Paywalled Content]] with per-article, per-chapter, or per-second granularity. Unlike subscription models, readers pay only for what they consume; unlike [[Ad-Supported Content]], no personal data is required.
  - **Machine-to-Machine Payments**
    - In [[Internet of Things]] and edge-computing scenarios, devices pay each other for sensor readings, compute offloading, or network relay services using L402 without requiring human-held payment accounts.
  - **Streaming Data and Real-Time Feeds**
    - Financial tick data, geospatial feeds, and telemetry streams can be gated per-update, with the client maintaining a Lightning payment channel that funds ongoing access. [[Streaming Payments]] via [[Lightning Network]] Keysend complement L402 for continuous-flow billing.
  - **Decentralised CDN and Storage**
    - Distributed storage networks (such as those inspired by [[IPFS]] or Filecoin-adjacent models) use L402 to pay storage nodes for retrieval bandwidth without centralised accounts.

- ### Relationships
  - requires:: [[Lightning Network]]
  - requires:: [[Macaroon Token]]
  - requires:: [[Payment Preimage]]
  - enables:: [[Micropayment]]
  - enables:: [[Pay-Per-Request]]
  - enables:: [[Metered API]]
  - enables:: [[Machine-to-Machine Payment]]
  - uses:: [[HTTP 402]]
  - uses:: [[BOLT11 Invoice]]
  - uses:: [[Bearer Token]]
  - uses:: [[Hash Time-Locked Contract]]
  - implements:: [[HTTP Authentication Scheme]]
  - implements:: [[Payment Channel Protocol]]
  - supports:: [[API Monetisation]]
  - supports:: [[Content Monetisation]]
  - supports:: [[Decentralised Access Control]]
  - dependsOn:: [[Bitcoin]]
  - dependsOn:: [[Cryptographic Hash Function]]
  - contrastsWith:: [[OAuth]]
  - contrastsWith:: [[API Key Authentication]]
  - contrastsWith:: [[Subscription Model]]
  - bridges-to:: [[AI Agent]]
  - bridges-to:: [[Autonomous Agent Economy]]
  - bridges-to:: [[Web of Trust]]
  - relatedTo:: [[Web Monetisation]]
  - relatedTo:: [[Decentralised Identity]]
  - is-subclass-of:: [[L402]]

- ### Standards & Context
  - **Origin and Specification**
    - L402 was introduced by Lightning Labs (the company behind the lnd Lightning Network implementation) as part of their LSATS (Lightning Service Authentication Tokens) initiative. The specification defines the HTTP header formats, macaroon serialisation, and handshake flow. It is published as an open standard intended for adoption across any HTTP server and Lightning-compatible client.
  - **Relationship to BOLT Standards**
    - The [[Lightning Network]] payment layer relies on the [[BOLT]] (Basis of Lightning Technology) specification suite, particularly BOLT11 for invoice encoding and BOLT4 for onion routing. L402 Protocol sits above these as an application-layer standard, consuming Lightning as a settlement primitive.
  - **HTTP Standards Alignment**
    - L402 aligns with [[RFC 7235]] (HTTP/1.1 Authentication) and the `WWW-Authenticate` / `Authorization` header conventions, ensuring compatibility with standard [[HTTP Client]] libraries, reverse proxies, and [[CDN]] infrastructure without requiring custom transport.
  - **Macaroon Specification**
    - Macaroons were originally specified in the 2014 Google Research paper "Macaroons: Cookies with Contextual Caveats for Decentralised Authorization." L402 adopts their serialisation format (v1 and v2 binary encoding) and HMAC-SHA256 construction unchanged.
  - **Competitive Landscape**
    - Alternative HTTP monetisation proposals include the [[W3C Web Monetisation API]] (using Interledger Protocol streaming micropayments) and [[OpenNode]] webhooks (centralised Lightning custodian). L402 is distinguished by its cryptographic, non-custodial, stateless design and native Lightning settlement.
  - **Tooling Ecosystem**
    - Reference implementations exist in Go (lnd's `aperture` proxy), Node.js (`l402` npm package), and Python. The `aperture` reverse proxy by Lightning Labs acts as a drop-in L402 gateway for any backend service, handling invoice generation, macaroon issuance, and verification.

- ### Provenance
  - sources:: Lightning Labs LSATS documentation; BOLT11 specification; Macaroons paper (Birgisson et al., 2014); L402 open specification
  - updated:: 2026-06-13
