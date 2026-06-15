public:: true

# IETF
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ietf",
  "@type": "Page",
  "vc:slug": "ietf",
  "title": "IETF",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ietf",
  "@type": "Class",
  "label": "IETF",
  "definition": "The Internet Engineering Task Force (IETF) is the principal international open-standards organisation responsible for developing and promoting voluntary Internet standards, particularly those comprising the Internet protocol suite (TCP/IP). It operates through volunteer working groups organised into technical areas, publishing specifications as Requests for Comments (RFCs) — the canonical technical definitions of protocols such as HTTP, TLS, QUIC, SMTP, and DNS. The IETF is a bottom-up, consensus-driven body with no formal membership; participation is open to any technically engaged individual. Its decision ethos of 'rough consensus and running code' has made it the dominant model for pragmatic, implementation-first standards development.",
  "domain": "standards",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:standards-body",
      "label": "Standards Body"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:request-for-comments",
        "label": "Request for Comments"
      },
      {
        "@id": "urn:ngm:class:working-group",
        "label": "Working Group"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interoperability",
        "label": "Interoperability"
      },
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:api-standard",
        "label": "API Standard"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:oauth-2-0",
        "label": "OAuth 2.0"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:quic",
        "label": "QUIC"
      },
      {
        "@id": "urn:ngm:class:dns",
        "label": "DNS"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:rough-consensus",
        "label": "Rough Consensus"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
      },
      {
        "@id": "urn:ngm:class:supply-chain-integrity",
        "label": "Supply Chain Integrity"
      },
      {
        "@id": "urn:ngm:class:remote-attestation",
        "label": "Remote Attestation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
      },
      {
        "@id": "urn:ngm:class:w3c",
        "label": "W3C"
      },
      {
        "@id": "urn:ngm:class:ieee",
        "label": "IEEE"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-standards",
        "label": "Network Standards"
      },
      {
        "@id": "urn:ngm:class:internet-governance",
        "label": "Internet Governance"
      },
      {
        "@id": "urn:ngm:class:open-source",
        "label": "Open Source"
      },
      {
        "@id": "urn:ngm:class:security-protocol",
        "label": "Security Protocol"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-infrastructure",
        "label": "AI Infrastructure"
      },
      {
        "@id": "urn:ngm:class:decentralised-identity",
        "label": "Decentralised Identity"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:internet-engineering-task-force",
      "label": "Internet Engineering Task Force"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - The **Internet Engineering Task Force (IETF)** is the principal open [[Standards Body]] responsible for developing and maintaining the voluntary technical standards that underpin the global [[Internet Governance]] infrastructure. Working through volunteer [[Working Group]]s organised into technical areas, it publishes specifications as [[Request for Comments]] (RFC) documents — the canonical definitions of protocols including [[HTTP]], [[TLS]], [[QUIC]], [[SMTP]], [[DNS]], and [[OAuth 2.0]]. Its foundational governance ethos of "rough consensus and running code" prioritises demonstrated [[Interoperability]] over formal ballot processes, distinguishing it sharply from bodies such as [[ISO]] or [[IEEE]].

- ### Overview
  - The IETF was established in 1986 as an informal volunteer body of engineers working under the [[Internet Architecture Board]] (IAB). Unlike national standards bodies with country-based voting, the IETF has no formal membership, fees, or geographic representation requirements. Anyone can attend its three annual face-to-face meetings or participate in mailing lists, making it one of the most genuinely open technical governance institutions in existence.
  - Decision-making operates on "rough consensus and running code" — a pragmatic heuristic that demands implementation experience, not merely theoretical agreement, before specifications advance. This approach has produced remarkably stable, long-lived standards adopted across the entire internet stack.
  - The IETF sits alongside but is distinct from the [[W3C]] (which standardises web application layers: HTML, CSS, WebAssembly) and the [[IEEE]] (which standardises physical and data-link layers: Ethernet, Wi-Fi). The IETF focuses primarily on network-layer through application-layer protocols.
  - Administratively, the IETF is supported by the Internet Society (ISOC), which provides legal and financial infrastructure. The [[Internet Engineering Steering Group]] (IESG), composed of Area Directors, oversees working group activity and approves specifications for publication.

- ### Key Components
  - #### Structural Bodies
    - **Internet Architecture Board (IAB)** — provides architectural oversight, manages RFC Editor function, and appoints IRTF chair
    - **Internet Engineering Steering Group (IESG)** — composed of Area Directors; reviews and approves working group outputs
    - **Internet Research Task Force (IRTF)** — long-horizon research complement to the IETF's nearer-term engineering focus
    - **Working Groups** — time-bounded groups chartered around specific protocol problems; the primary locus of technical work
    - **RFC Editor** — independent function that publishes, archives, and assigns numbers to RFC documents
  - #### Technical Areas
    - **Applications and Real-Time (ART)** — covers [[HTTP]], [[SMTP]], SIP, WebRTC, and application-layer protocols
    - **Internet (INT)** — addresses IPv4/IPv6, [[DNS]], DHCP, and network-layer concerns
    - **Operations and Management (OPS)** — focuses on network operations, SNMP, NETCONF/YANG
    - **Routing (RTG)** — BGP, OSPF, IS-IS, segment routing
    - **Security (SEC)** — [[TLS]], [[OAuth 2.0]], [[Remote Attestation]], RATS working group
    - **Transport (TSV)** — TCP, UDP, SCTP, [[QUIC]], DCCP
  - #### RFC Maturity Levels
    - **Proposed Standard** — initial publication after working group consensus
    - **Internet Standard** — advanced status requiring demonstrated interoperability implementations
    - **Informational / Experimental / Best Current Practice** — non-normative categories for guidance, experimental work, and operational recommendations
    - **Historic** — retired specifications that have been superseded

- ### Applications and Use Cases
  - #### Foundational Protocol Infrastructure
    - Every internet-connected device relies on IETF-standardised protocols: TCP/IP for packet routing and reliable transport, [[DNS]] for name resolution, [[SMTP]] for email, [[HTTP]] for web communication
    - [[TLS]] (standardised as RFC 8446 for TLS 1.3) secures the majority of internet traffic; its development by the IETF TLS working group is a canonical example of open security protocol development
    - [[QUIC]] (RFC 9000) and HTTP/3 (RFC 9114) represent the IETF's modernisation of the transport and application layers, reducing latency for web and API traffic globally
  - #### Identity and Authorisation
    - [[OAuth 2.0]] (RFC 6749) and its successors define the authorisation delegation framework used by virtually every major web API and identity provider
    - The IETF's work on JOSE (JSON Object Signing and Encryption), JWT, and PKIX underpins modern [[Authentication Standards]] and [[Decentralised Identity]] infrastructure including W3C DID methods
  - #### AI and Emerging Technology Infrastructure
    - **SCITT** (Supply Chain Integrity, Transparency, and Trust) working group — developing attestation and transparency log formats for software [[Supply Chain Integrity]], directly applicable to AI model provenance and deployment pipelines
    - **RATS** (Remote ATtestation procedureS) working group — providing standards for verifying hardware and software integrity of compute nodes, enabling trustworthy [[AI Infrastructure]] deployment where attestation of the execution environment is required
    - **MASQUE** working group — extending HTTP proxying and tunnelling for new use cases including privacy-preserving network access
    - **OAuth and Token Binding** — evolving token-based authorisation patterns directly used by AI API services and [[Agentic AI]] frameworks calling external tools
  - #### Regulatory and Contractual Baseline
    - IETF RFCs serve as the technical baseline for internet infrastructure contracts, regulatory compliance frameworks (GDPR data transfer, NIS2 network security), and interoperability assessments worldwide
    - Many national and international regulations reference IETF standards by RFC number as the normative technical definition of conforming implementations

- ### Relationships
  - hasPart:: [[Request for Comments]]
  - hasPart:: [[Working Group]]
  - hasPart:: [[Internet Engineering Steering Group]]
  - hasPart:: [[Internet Architecture Board]]
  - enables:: [[Interoperability]]
  - enables:: [[Network Protocol]]
  - enables:: [[Communication Protocol]]
  - enables:: [[API Standard]]
  - standardizedBy:: [[OAuth 2.0]]
  - standardizedBy:: [[TLS]]
  - standardizedBy:: [[HTTP]]
  - standardizedBy:: [[QUIC]]
  - standardizedBy:: [[DNS]]
  - standardizedBy:: [[SMTP]]
  - supports:: [[AI Governance]]
  - supports:: [[Authentication Standards]]
  - supports:: [[Supply Chain Integrity]]
  - supports:: [[Remote Attestation]]
  - contrastsWith:: [[ISO]]
  - contrastsWith:: [[W3C]]
  - contrastsWith:: [[IEEE]]
  - relatedTo:: [[Internet Governance]]
  - relatedTo:: [[Security Protocol]]
  - relatedTo:: [[Open Source]]
  - bridges-to:: [[AI Infrastructure]]
  - bridges-to:: [[Decentralised Identity]]
  - bridges-to:: [[Software Attestation]]

- ### Standards and Context
  - The IETF publishes standards exclusively as RFCs, a series that began in 1969 with RFC 1 (authored by Steve Crocker). The series is permanent and immutable: RFCs are never edited after publication; corrections require new RFC numbers with explicit "Obsoletes" or "Updates" headers.
  - Key RFCs of broad significance:
    - RFC 791 / RFC 793 — IP and TCP (foundation of the internet)
    - RFC 2616 → RFC 7230-35 → RFC 9110-14 — HTTP/1.1 through HTTP/3 evolution
    - RFC 5321 — SMTP (email transmission)
    - RFC 1034/1035 — DNS
    - RFC 8446 — TLS 1.3
    - RFC 6749/6750 — OAuth 2.0
    - RFC 9000 / RFC 9114 — QUIC and HTTP/3
  - The IETF works alongside but remains institutionally separate from:
    - **[[W3C]]** — web application standards (HTML5, CSS, WebAssembly, Semantic Web, DID Core)
    - **[[IEEE]]** — physical/data-link layer standards (802.11 Wi-Fi, 802.3 Ethernet)
    - **[[ISO]] / IEC** — formal national-body voting standards, often incorporating IETF work by reference
    - **ETSI / 3GPP** — telecommunications standards that build upon IETF protocols
    - **[[ICANN]]** — coordinates the DNS root zone and IP address allocation policy (complementary to IETF's protocol standardisation role)
  - The IETF's open model has influenced governance approaches in other communities, including open-source foundations (Apache, Linux Foundation) and emerging [[AI Governance]] bodies debating how to standardise model evaluation, safety disclosure, and interoperability for AI systems.

- ### Provenance
  - sources:: IETF official documentation (ietf.org), RFC Editor archive (rfc-editor.org), IAB statements, established knowledge of internet protocol history
  - updated:: 2026-06-13
