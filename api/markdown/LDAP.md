public:: true

# LDAP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ldap",
  "@type": "Page",
  "vc:slug": "ldap",
  "title": "LDAP",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ldap",
  "@type": "Class",
  "label": "LDAP",
  "definition": "The Lightweight Directory Access Protocol (LDAP) is an open, vendor-neutral application protocol for accessing and maintaining distributed directory information services over an IP network, standardised in RFC 4511 (2006) as a simplification of the X.500 Directory Access Protocol. LDAP organises directory entries in a hierarchical tree structure (Directory Information Tree, DIT) where entries contain typed attribute-value pairs conforming to object class schemas, and supports operations for search, add, modify, delete, compare, and bind (authentication). It serves as the foundational protocol for enterprise identity management, enabling centralised authentication, authorisation, and user attribute storage across heterogeneous systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-protocol",
      "label": "Network Protocol"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:authentication",
        "label": "Authentication"
      },
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      },
      {
        "@id": "urn:ngm:class:single-sign-on",
        "label": "Single Sign-On"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:identity-and-access-management",
        "label": "Identity and Access Management"
      },
      {
        "@id": "urn:ngm:class:federated-identity",
        "label": "Federated Identity"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
      },
      {
        "@id": "urn:ngm:class:directory-service",
        "label": "Directory Service"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:enterprise-architecture",
        "label": "Enterprise Architecture"
      },
      {
        "@id": "urn:ngm:class:zero-trust-architecture",
        "label": "Zero Trust Architecture"
      },
      {
        "@id": "urn:ngm:class:multi-factor-authentication",
        "label": "Multi-Factor Authentication"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tcp-ip",
        "label": "TCP/IP"
      },
      {
        "@id": "urn:ngm:class:tls",
        "label": "TLS"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:scim",
        "label": "SCIM"
      },
      {
        "@id": "urn:ngm:class:kerberos",
        "label": "Kerberos"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:active-directory",
        "label": "Active Directory"
      },
      {
        "@id": "urn:ngm:class:saml",
        "label": "SAML"
      },
      {
        "@id": "urn:ngm:class:oauth2",
        "label": "OAuth 2.0"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:lightweight-directory-access-protocol",
      "label": "Lightweight Directory Access Protocol"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.72
}
```

- ### Definition
  - LDAP is the standard network protocol for querying and updating hierarchical directory services, providing the foundational infrastructure for enterprise [[Authentication]], [[Identity Management]], and [[Access Control]] across heterogeneous IT environments.

- ### Relationships
  - LDAP is the protocol backbone of [[Identity and Access Management]] in enterprise environments—Active Directory (Microsoft's LDAP-compliant directory), OpenLDAP, and Oracle Internet Directory all expose LDAP interfaces. It enables [[Authentication]] (the BIND operation validates credentials against stored password hashes or delegates to Kerberos), [[Identity Management]] (user provisioning, attribute management, group membership), and [[Access Control]] (services query group membership or attribute values to make authorisation decisions). It underpins [[Enterprise Architecture]] patterns where a single directory stores user identities consulted by email servers, VPNs, file shares, and web applications. [[Federated Identity]] and modern [[Authentication Standards]] like SAML 2.0 and OAuth 2.0 often use LDAP as the back-end identity store even when federating across organisational boundaries.

- ### Content
  - LDAP was developed at the University of Michigan in 1993 by Tim Howes, Mark Smith, and Gordon Good as a lightweight alternative to the complex OSI-layer X.500 Directory Access Protocol. The original DAP required a full OSI protocol stack that was impractical over TCP/IP networks; LDAP replaced it with a simplified binary protocol (ASN.1 BER encoding) that operated directly over TCP port 389 (or 636 for LDAPS with TLS). LDAP v3, published as RFC 2251 in 1997 and revised to RFC 4511 in 2006, added extensions including StartTLS, SASL authentication, and server-side sorting, becoming the stable standard still in use.

  - The LDAP data model is built on the Directory Information Tree: each entry has a Distinguished Name (DN) that uniquely identifies its position in the hierarchy (e.g., uid=jsmith,ou=users,dc=example,dc=com). Entries are typed by object classes (inetOrgPerson, groupOfNames, organizationalUnit) that define which attributes are required and permitted. Schema definitions are themselves stored in the directory's subschema subentry. Search operations specify a base DN, scope (base, one-level, or subtree), filter expression (using a prefix notation combining attribute tests with AND/OR/NOT), and requested attributes, returning matching entries efficiently through indexed attribute values.

  - LDAP's significance in enterprise IT is difficult to overstate: virtually all corporate environments rely on LDAP-compatible directories (primarily Microsoft Active Directory) for user authentication and authorisation. Email systems, VPNs, file servers, web applications, databases, and network devices all authenticate against LDAP, making it a single point of trust and a high-value attack target. Common attack vectors include LDAP injection (analogous to SQL injection but against LDAP filters), anonymous bind disclosure of directory structure, and credential stuffing attacks against the BIND operation.

  - By 2024–2025 LDAP remains the dominant enterprise directory protocol despite its age, but is increasingly complemented or replaced in cloud-native environments. Azure AD (now Entra ID) provides LDAP-compatible interfaces alongside modern REST APIs and SCIM for provisioning. Zero-trust architectures de-emphasise network perimeter directory integration in favour of device identity and continuous authentication, reducing LDAP's role. However, the billions of on-premises devices and legacy applications that speak only LDAP ensure its continued relevance for many years, driving investment in LDAP-to-modern-IdP gateways and cloud directory synchronisation.