public:: true

# Zero Trust
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6c0e1b737c1cf84634ae7349278fd01cffbb453ad4a56d360fe88aee1316986b",
  "@type": "Page",
  "vc:slug": "zero-trust",
  "title": "Zero Trust",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:security-architecture",
      "vc:label": "Security Architecture"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:least-privilege",
      "vc:label": "Least Privilege"
    },
    {
      "@id": "urn:visionflow:linked:perimeter-security",
      "vc:label": "Perimeter Security"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:zero-trust",
  "@type": "Class",
  "label": "Zero Trust",
  "definition": "A security architecture built on the principle of 'never trust, always verify': no user, device, or workload is trusted by virtue of its network location, and every access request must be continuously authenticated, authorised, and encrypted based on identity, device posture, and context, replacing the traditional perimeter model in which anything inside the corporate network was implicitly trusted.",
  "domain": "security",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:security-architecture",
    "label": "Security Architecture"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:least-privilege",
        "label": "Least Privilege"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:perimeter-security",
        "label": "Perimeter Security"
      },
      {
        "@id": "urn:ngm:class:virtual-private-network",
        "label": "Virtual Private Network"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:network-security",
        "label": "Network Security"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A security architecture built on the principle of 'never trust, always verify': no user, device, or workload is trusted by virtue of its network location, and every access request must be continuously authenticated, authorised, and encrypted based on identity, device posture, and context, replacing the traditional perimeter model in which anything inside the corporate network was implicitly trusted."

- ### Semantic Classification
  - owl-class:: security:ZeroTrust
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Security Architecture]]
  - requires:: [[Authentication]], [[Identity and Access Management]]
  - implements:: [[Least Privilege]]
  - contrasts-with:: [[Perimeter Security]], [[Virtual Private Network]]

- ### Content

  ## Definition

  **Zero Trust** is a security model that removes implicit trust from network architecture. Coined by John Kindervag at Forrester in 2010 and formalised in NIST Special Publication 800-207 (2020), it holds that network location confers no trust: an access request from inside the data centre is treated with the same suspicion as one from a coffee-shop Wi-Fi. Every request is evaluated against identity, device health, and context before a short-lived, narrowly scoped grant is issued, and the evaluation is continuous rather than once-per-session.

  The model directly contrasts with the "castle-and-moat" approach embodied by [[Perimeter Security]] and the corporate [[Virtual Private Network]], where authenticating at the boundary yielded broad access to internal resources. That design failed repeatedly against lateral movement: once an attacker phished a single credential or compromised one host, the flat internal network offered little resistance. Zero Trust counters this with strong [[Authentication]] (typically phishing-resistant MFA), per-resource authorisation, micro-segmentation, and pervasive encryption, enforcing [[Least Privilege]] at every hop.

  In this knowledge graph, Zero Trust also anchors the agentic-security discussion: cryptographic agent identity supports Zero Trust by giving autonomous agents verifiable, per-request credentials rather than ambient authority, which matters as multi-agent systems begin making tool calls and API requests on behalf of users.

  ## Current Landscape

  - **Standards**: NIST SP 800-207 defines the reference architecture (policy engine, policy administrator, policy enforcement points); CISA's Zero Trust Maturity Model and the UK NCSC's zero trust design principles guide public-sector adoption; the US federal government mandated zero trust migration under OMB M-22-09.
  - **Implementations**: Google's BeyondCorp pioneered production zero trust after the 2009 Aurora attacks; commercial platforms include Zscaler, Cloudflare Access, Palo Alto Prisma, and Microsoft Entra conditional access. Service meshes bring the model inside clusters via mutual TLS and workload identity (SPIFFE/SPIRE).
  - **Core pillars**: identity, device, network, application, and data — each with its own verification signals, unified by policy engines making per-request decisions.
  - **Agentic extension**: applying zero trust to AI agents means scoped, auditable, short-lived credentials for every tool call, treating each agent action as an untrusted request to be verified — an active area of practice as autonomous agents proliferate.
  - **Limits**: zero trust is an architecture rather than a product; incremental migration, legacy protocols that cannot present modern identity signals, and policy-engine complexity remain the main adoption obstacles.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
