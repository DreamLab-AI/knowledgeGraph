public:: true

# DNS
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f0c1ddf454d53616d915ac7f901802a039a9045e62f0d6a17bed5b6afd2a7aaa",
  "@type": "Page",
  "vc:slug": "dns",
  "title": "DNS",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:network-protocol",
      "vc:label": "Network Protocol"
    },
    {
      "@id": "urn:visionflow:linked:http",
      "vc:label": "HTTP"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:application-layer",
      "vc:label": "Application Layer"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "DNS"
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
  "@id": "urn:ngm:class:dns",
  "@type": "Class",
  "label": "DNS",
  "definition": "The Domain Name System (DNS) is a hierarchical, distributed naming system and directory service that translates human-readable domain names into IP addresses and other resource records required for locating internet services. Operating as a global, federated database partitioned into zones, DNS uses a delegation tree rooted at thirteen authoritative root-server clusters and propagates queries recursively through top-level domain, second-level domain, and sub-domain name servers. It is defined in RFC 1034 and RFC 1035 and extended by DNSSEC (RFC 4033-4035) to provide cryptographic integrity verification of responses, mitigating cache poisoning, spoofing, and man-in-the-middle attacks against the resolution chain.",
  "domain": "infrastructure",
  "maturity": "mature",
  "qualityScore": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:application-layer",
      "label": "Application Layer"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:domain-name-system",
      "label": "Domain Name System"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:network-protocol",
        "label": "Network Protocol"
      },
      {
        "@id": "urn:ngm:class:udp",
        "label": "UDP"
      },
      {
        "@id": "urn:ngm:class:tcp",
        "label": "TCP"
      },
      {
        "@id": "urn:ngm:class:ip-addressing",
        "label": "IP Addressing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:http",
        "label": "HTTP"
      },
      {
        "@id": "urn:ngm:class:email-delivery",
        "label": "Email Delivery"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      },
      {
        "@id": "urn:ngm:class:content-delivery-network",
        "label": "Content Delivery Network"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:dns-resolver",
        "label": "DNS Resolver"
      },
      {
        "@id": "urn:ngm:class:authoritative-name-server",
        "label": "Authoritative Name Server"
      },
      {
        "@id": "urn:ngm:class:dns-zone",
        "label": "DNS Zone"
      },
      {
        "@id": "urn:ngm:class:dns-record",
        "label": "DNS Record"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:dnssec",
        "label": "DNSSEC"
      },
      {
        "@id": "urn:ngm:class:dns-over-https",
        "label": "DNS over HTTPS"
      },
      {
        "@id": "urn:ngm:class:dns-over-tls",
        "label": "DNS over TLS"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:ietf",
        "label": "IETF"
      },
      {
        "@id": "urn:ngm:class:icann",
        "label": "ICANN"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralised-naming",
        "label": "Decentralised Naming"
      },
      {
        "@id": "urn:ngm:class:blockchain-naming",
        "label": "Blockchain Naming"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      },
      {
        "@id": "urn:ngm:class:anycast-routing",
        "label": "Anycast Routing"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      },
      {
        "@id": "urn:ngm:class:caching",
        "label": "Caching"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      },
      {
        "@id": "urn:ngm:class:distributed-systems",
        "label": "Distributed Systems"
      }
    ]
  },
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:dns:dd75a9d6fb30",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f0c1ddf454d53616d915ac7f901802a039a9045e62f0d6a17bed5b6afd2a7aaa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Protocol]]",
      "resolved": "urn:visionflow:linked:network-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HTTP]]",
      "resolved": "urn:visionflow:linked:http",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "StubLink"
    },
    {
      "raw": "[[Application Layer]]",
      "resolved": "urn:visionflow:linked:application-layer",
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
  - The Domain Name System (DNS) is the internet's primary directory service: a globally distributed, hierarchically delegated database that translates human-readable names (such as `example.com`) into machine-usable [[IP Addressing]] records — A, AAAA, MX, CNAME, TXT, SRV, and others. It operates at the [[Application Layer]] of the [[TCP/IP]] stack, transmitting queries over [[UDP]] (port 53) for speed and falling back to [[TCP]] for larger responses. Originally specified in RFC 1034 and RFC 1035 (1987), DNS underpins virtually every internet transaction, acting as the "phone book" that allows humans and applications to reference services by memorable names rather than raw numeric addresses. Its distributed, federated architecture — delegating authority zone-by-zone from the root downwards — gives the system global scale, resilience, and administrative autonomy for domain owners.

- ### Overview
  - DNS solves a fundamental naming problem: computers communicate using numeric [[IP Addressing]] but humans need memorable, hierarchical names. DNS creates a mapping between the two that is:
    - **Hierarchical** — authority is delegated in a tree: root → TLD (.com, .uk) → second-level domain (example.com) → sub-domains (api.example.com).
    - **Distributed** — no single server holds all records; each zone is authoritative only for its own portion of the namespace.
    - **Cached** — resolvers store responses for the duration of the record's Time-To-Live (TTL), reducing latency and query load on authoritative servers.
    - **Extensible** — new resource record types (SRV, TXT, CAA, TLSA, HTTPS, SVCB) and extensions (EDNS0, DNSSEC, DoH, DoT) have been layered over the original design without breaking backward compatibility.
  - Without DNS, users would have to memorise IP addresses, [[TLS]] certificate validation would require different naming semantics, and [[Email Delivery]] routing (via MX records) would not exist in its current form. DNS is therefore a foundational dependency of the modern internet and enterprise networks alike.

- ### Key Components
  - **DNS Namespace** — the hierarchical tree of labels separated by dots, read right-to-left from root to leaf (e.g. `www` → `example` → `com` → `.`).
  - **[[DNS Zone]]** — an administratively managed contiguous portion of the namespace stored in a zone file and served by authoritative name servers.
  - **[[DNS Record]]** — the atomic unit of DNS data. Common types:
    - `A` / `AAAA` — IPv4 / IPv6 address mapping.
    - `CNAME` — canonical name alias pointing one name to another.
    - `MX` — mail exchange record directing [[Email Delivery]].
    - `TXT` — free-form text, used for SPF, DKIM, domain verification, CAA.
    - `NS` — delegation record specifying authoritative servers for a zone.
    - `SOA` — Start of Authority; zone metadata including serial number and TTL policy.
    - `SRV` — service location record used in [[Service Discovery]].
    - `PTR` — reverse DNS, mapping IP to name (used for spam filtering and logging).
    - `TLSA` — DANE record associating a TLS certificate with a domain.
    - `CAA` — Certification Authority Authorisation, restricting which CAs may issue certificates.
  - **[[DNS Resolver]]** (Recursive Resolver) — a client-side or ISP-side service that performs the full resolution process on behalf of the querying application. It walks the delegation tree from root to authoritative server, caches results, and returns the final answer.
  - **[[Authoritative Name Server]]** — holds the definitive zone data for a domain and answers queries for records within its zone without further recursion.
  - **Root Servers** — thirteen logical root server addresses (A–M), operated by twelve independent organisations, served via [[Anycast Routing]] from hundreds of physical locations. They answer queries for TLD delegations.
  - **[[Caching]]** — both resolvers and operating-system stub resolvers cache answers for the record TTL, balancing freshness against query volume.
  - **Time-To-Live (TTL)** — each record carries a TTL in seconds. Low TTLs enable rapid failover; high TTLs reduce resolver load and improve perceived latency.

- ### Mechanisms
  - **Resolution Process**
    - Stub resolver (in the OS or browser) queries the configured recursive resolver.
    - If the recursive resolver has a cached answer, it returns immediately.
    - Otherwise the resolver starts at a root server, obtains a referral to the appropriate TLD name server, then queries that TLD server for a referral to the authoritative server, then queries the authoritative server for the record.
    - The full answer is returned to the stub resolver and cached.
    - This iterative process typically completes in tens of milliseconds for uncached queries.
  - **DNSSEC** — defined in RFC 4033–4035, DNSSEC adds digital signatures (RRSIG records) to zone data and a chain of trust (DS + DNSKEY records) from parent zone to child. Resolvers that validate DNSSEC detect tampered or forged responses. DNSSEC does not encrypt queries; it authenticates them.
  - **DNS over HTTPS (DoH)** — RFC 8484 wraps DNS queries in HTTPS, providing confidentiality and integrity against network-level observers. Used by browsers (Firefox, Chrome) and operating systems.
  - **DNS over TLS (DoT)** — RFC 7858 provides similar confidentiality using a dedicated TLS channel on port 853, preferred by network administrators who can still monitor DNS at the resolver.
  - **EDNS0** — RFC 6891 extension that allows larger UDP payloads (enabling DNSSEC responses), signals resolver capabilities, and carries additional options (e.g. ECS for geolocation-aware [[Content Delivery Network]] routing).
  - **Split-Horizon / Split-Brain DNS** — a deployment pattern where internal and external resolvers return different answers for the same name, enabling [[Network Security]] isolation of internal services.
  - **Dynamic DNS (DDNS)** — RFC 2136 defines a mechanism for clients or DHCP servers to update DNS records automatically, critical in elastic cloud and [[Distributed Systems]] environments.

- ### Applications and Use Cases
  - **Web Browsing** — every HTTP/HTTPS request begins with a DNS query to resolve the hostname to an IP address, then establishes a TCP connection to that address.
  - **[[Email Delivery]]** — MX records route outgoing mail to the correct mail server; TXT records carry SPF and DKIM policies that authenticate sender identity.
  - **[[Content Delivery Network]] (CDN) Routing** — CDNs use low-TTL CNAME chains and EDNS Client Subnet (ECS) data in DNS to direct users to the nearest edge node.
  - **[[Load Balancing]]** — DNS round-robin and weighted responses distribute traffic across multiple server instances. Global Server Load Balancing (GSLB) products use DNS to route across data centres.
  - **[[Service Discovery]]** — SRV records and DNS-SD (RFC 6763) allow services in a network to advertise themselves and be discovered by clients, underpinning mDNS / Bonjour and Kubernetes CoreDNS.
  - **[[TLS]] Certificate Validation** — CAs use DNS-01 ACME challenges to verify domain ownership; CAA records restrict which CAs may issue certificates; TLSA records enable DANE certificate pinning.
  - **Anti-Spam and Email Authentication** — SPF (TXT records), DKIM (TXT records), and DMARC policies are all published via DNS, allowing receiving mail servers to verify sender legitimacy.
  - **Cloud and Microservices** — Kubernetes uses an internal DNS server (typically CoreDNS) to resolve service names within the cluster, enabling loose coupling between [[Distributed Systems]] components.
  - **Zero-Trust Security** — DNS filtering (DNS sinkholes, RPZ — Response Policy Zones) is a layer-one defence in many [[Network Security]] architectures, blocking connections to known-malicious domains at resolution time.
  - **Decentralised and Web3 Naming** — [[Blockchain Naming]] systems (ENS, Handshake) seek to replace or supplement traditional DNS with trustless, censorship-resistant alternatives, though wide adoption remains nascent.

- ### Relationships
  - subClassOf:: [[Application Layer]]
  - requires:: [[Network Protocol]]
  - requires:: [[UDP]]
  - requires:: [[TCP]]
  - requires:: [[IP Addressing]]
  - enables:: [[HTTP]]
  - enables:: [[Email Delivery]]
  - enables:: [[TLS]]
  - enables:: [[Content Delivery Network]]
  - enables:: [[Service Discovery]]
  - hasPart:: [[DNS Resolver]]
  - hasPart:: [[Authoritative Name Server]]
  - hasPart:: [[DNS Zone]]
  - hasPart:: [[DNS Record]]
  - implements:: [[DNSSEC]]
  - implements:: [[DNS over HTTPS]]
  - implements:: [[DNS over TLS]]
  - standardizedBy:: [[IETF]]
  - standardizedBy:: [[ICANN]]
  - contrastsWith:: [[Decentralised Naming]]
  - contrastsWith:: [[Blockchain Naming]]
  - relatedTo:: [[Load Balancing]]
  - relatedTo:: [[Anycast Routing]]
  - relatedTo:: [[Network Security]]
  - relatedTo:: [[Caching]]
  - bridges-to:: [[Zero-Knowledge Proof]]
  - bridges-to:: [[Distributed Systems]]

- ### Standards and Governance
  - **RFC 1034 / RFC 1035** (1987, Mockapetris) — foundational specification of the DNS protocol and data formats; still the normative core.
  - **RFC 4033–4035** — DNSSEC: DNS Security Extensions, adding authenticated denial of existence (NSEC / NSEC3) and cryptographic signing.
  - **RFC 7858** — DNS over TLS (DoT).
  - **RFC 8484** — DNS over HTTPS (DoH).
  - **RFC 6891** — Extension Mechanisms for DNS (EDNS0).
  - **RFC 8499** — DNS Terminology (normative vocabulary).
  - **[[IETF]]** — maintains the DNS protocol standards through the DNSOP and DPRIVE working groups.
  - **[[ICANN]]** — coordinates the global DNS root zone, manages TLD delegation, and accredits registrars. The root zone is technically operated by Verisign under ICANN oversight.
  - **IANA** — maintains the DNS parameter registries (record types, opcodes, RCODEs) and allocates TLD assignments.
  - **RIPE NCC, ARIN, APNIC, LACNIC, AFRINIC** — Regional Internet Registries (RIRs) whose IP allocation data feeds reverse DNS zones.
  - **Regulatory Considerations** — DNS filtering is used by governments and ISPs for content regulation. Encrypted DNS (DoH/DoT) creates tension between privacy and [[Network Security]] monitoring requirements.

- ### Security Considerations
  - **Cache Poisoning** — attackers inject false records into a resolver cache, redirecting users; mitigated by source port randomisation (RFC 5452) and DNSSEC.
  - **DNS Hijacking** — malicious or coerced DNS providers return false answers; DoH/DoT and DNSSEC both address this.
  - **DNS Amplification DDoS** — attackers spoof source IPs to use open resolvers to amplify traffic toward victims; mitigated by BCP38 ingress filtering and rate limiting.
  - **Typosquatting and Homoglyph Attacks** — exploit human error in domain name entry; addressed by UDRP policy and browser UI safeguards.
  - **NXDOMAIN Hijacking** — some ISPs return sponsored results for non-existent domains, distorting the DNS namespace.
  - **DNSSEC Operational Complexity** — key management, rollover procedures, and zone signing require careful operational discipline; misconfiguration can cause widespread outage.

- ### Provenance
  - sources:: RFC 1034, RFC 1035, RFC 4033-4035, RFC 7858, RFC 8484, RFC 6891, RFC 8499
  - updated:: 2026-06-13
