public:: true

# Directory Service
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:directory-service",
  "@type": "Page",
  "vc:slug": "directory-service",
  "title": "Directory Service",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:directory-service",
  "@type": "Class",
  "label": "Directory Service",
  "definition": "A directory service is a specialised database that stores, organises, and provides access to information about the entities of a network — users, groups, devices, and services — optimised for high-volume reads and hierarchical lookup. Accessed through protocols such as LDAP, it underpins authentication, authorisation, and resource discovery in enterprise environments, with implementations including Active Directory and OpenLDAP. Directory services centralise identity data so that credentials and access policies can be managed once and enforced consistently across many systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:identity-provider", "label": "Identity Provider"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:federated-identity", "label": "Federated Identity"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:decentralized-identity", "label": "Decentralized Identity"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A directory service is a read-optimised hierarchical database of network entities — users, groups, devices, services — accessed via protocols like LDAP to centralise identity data for authentication, authorisation, and resource discovery.

- ### Relationships
  - Directory Service is a subclass of [[Identity Provider]] and uses a [[Network Protocol]] such as LDAP for queries and updates. It enables [[Federated Identity]] by serving as an authoritative identity source for trust federations, and relates to [[Decentralized Identity]] models that aim to distribute the centralised authority it embodies.

- ### Content
  - A directory service is purpose-built for a specific access pattern: many readers querying relatively stable, structured information about who and what exists on a network. Unlike a transactional database optimised for frequent writes, a directory is optimised for fast, high-volume lookups and replication, organising entries in a hierarchical tree — the Directory Information Tree — that mirrors organisational structure, with entries identified by distinguished names and described by typed attributes.

  - The Lightweight Directory Access Protocol standardises how clients search, read, and modify directory entries, and it became the lingua franca of enterprise identity. Microsoft's Active Directory built a dominant ecosystem around it, integrating directory services with authentication (Kerberos), group policy, and resource management so that a single user account governs access to email, file shares, applications, and machines across an organisation.

  - Centralisation is the directory's chief value and chief risk. Managing identities and access policies in one authoritative place delivers consistency, single sign-on, rapid deprovisioning, and auditable control — when an employee leaves, disabling one account revokes access everywhere. But that same centralisation makes the directory a high-value target and a single point of failure, which is why directory deployments emphasise replication, hardening, and tight protection of the privileged accounts that administer them.

  - Directory services remain foundational even as identity architectures evolve. They commonly sit behind federated-identity and single-sign-on systems, acting as the authoritative attribute source that identity providers consult when issuing tokens, and cloud directory services extend the model to hybrid and SaaS environments. Decentralised-identity approaches challenge the centralised directory paradigm by distributing identity control to individuals, but for the foreseeable future the enterprise directory continues to be the backbone of organisational access management.
