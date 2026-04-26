iri:: http://narrativegoldmine.com/infrastructure#SolidPod
uri:: urn:visionclaw:concept:infrastructure:solid-pod
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:solid-pod
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Solid Pod
content-hash:: sha256-12-2a4c8f1e6b7d
status:: complete
maturity:: established
quality-score:: 0.65
authority-score:: 0.78
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A Solid Pod (Personal Online Data store) is a W3C Linked Data Platform-compliant personal data vault that gives individuals and organisations sovereign control over their own data by hosting it at a user-chosen location and exposing it through a standards-based access control layer (WAC or ACP), so that authorised applications can read and write data without the data ever leaving the owner's pod or being locked into any single application silo. In the [[VisionClaw Agentic Container]] architecture, Solid Pods serve as the personal context store for agent preference profiles, credential histories, and verifiable presentation caches, consumed via the [[Model Context Protocol]] tool surface.

- ### Semantic Classification
  - owl-class:: infrastructure:SolidPod
  - owl-role:: Object
  - owl-inferred:: infrastructure:PersonalDataStore
  - belongs-to-domain:: [[NGM Domain]], [[AI Domain]]
  - implemented-in-layer:: [[DataLayer]], [[IdentityLayer]]

- ### Relationships
  - is-subclass-of:: [[Personal Data Store]], [[Linked Data Platform Resource]]
  - has-part:: [[WebID Profile]], [[WAC Access Control List]], [[ACP Access Control Policy]], [[LDP Container]], [[RDF Resource]]
  - is-part-of:: [[Solid Ecosystem]], [[Decentralised Web Stack]]
  - requires:: [[WebID]], [[HTTP Protocol]], [[RDF Data Model]], [[Turtle Serialisation]]
  - enables:: [[Data Sovereignty]], [[Interoperable Personal Data]], [[Decentralised Identity]], [[Agent Personalisation]]
  - implements:: [[W3C Linked Data Platform]], [[W3C Solid Protocol]], [[W3C Web Access Control]]
  - bridges-to:: [[DID Nostr Identity]] (domain: ngm), [[Verifiable Credential Surface]] (domain: ngm), [[Nostr Protocol]] (domain: bc)
  - depends-on:: [[CSS Community Solid Server]], [[Node Solid Server]], [[Inrupt Pod Spaces]]

- ### Content

  The Solid project was initiated by Sir Tim Berners-Lee at MIT in 2016 as a corrective to the data-silo model of the commercial web, where user data is hosted, owned, and monetised by application providers. The core insight is simple: if data is stored in a standardised personal vault (the Pod) rather than inside individual applications, then applications become thin clients that request access to the data they need. Users grant and revoke access at granular resource level — sharing a health profile with a GP application without exposing financial records, for instance — and can switch applications without losing their data.

  #### Key Characteristics

  - **Linked Data Platform Compliance**: Every Solid Pod exposes an HTTP interface following the [[W3C Linked Data Platform]] specification; resources are RDF documents (Turtle, JSON-LD, or RDF/XML), and containers behave like directories with `ldp:contains` membership triples.
  - **WebID Identity**: Pod owners are identified by a [[WebID]] — a dereferenceable HTTP URI pointing to an RDF profile document listing their public key, display name, and preferred contact channels.
  - **Fine-Grained Access Control**: The [[Web Access Control]] (WAC) standard uses ACL resources (`.acl` files) to express read/write/append/control permissions per agent, per authenticated group, or for the public. The newer [[Access Control Policy]] (ACP) standard offers attribute-based access control with more expressive policy composition.
  - **Application Interoperability**: Because all apps read from and write to the same RDF schemas (schema.org, vCard, FOAF, Solid Application Interoperability Spec panels), data created by one app is reusable by any other without ETL pipelines.
  - **Self-Hosted or Managed**: Users can host a Pod on their own server (Community Solid Server, Node Solid Server) or use managed pod providers (Inrupt, solidcommunity.net), retaining the ability to migrate by copying files.

  #### How It Works

  A Pod interaction follows standard HTTP semantics augmented with Linked Data conventions. An agent wishing to read a user's contact list sends a GET request to `https://pod.example/contacts/` with a [[DPoP]] (Demonstration of Proof of Possession) access token obtained via [[Solid-OIDC]] (an OpenID Connect profile). The server validates the token, checks the ACL for the contacts container, and returns the RDF document. To write a new contact, the agent sends a POST or PUT request with the new RDF resource as the body; the server validates access and stores the triple. All interactions produce standard HTTP responses with Link headers advertising the type and access control URI.

  Within [[VisionClaw Agentic Container]], a bootstrapping agent skill reads the user's Solid Pod to populate the `personal-context` namespace in the [[RuVector Memory]] store. Subsequent agents access this cached context via the [[Model Context Protocol]] memory tool rather than making live HTTP requests to the Pod on every invocation, reducing latency and Pod request volume. When the agent creates a new [[Verifiable Credential Surface|verifiable credential]] on behalf of the user, it optionally writes a copy to the user's Pod in the `credentials/` container, giving the user portable access to their credential history independent of the [[VisionClaw Agentic Container]] instance.

  #### Current Landscape

  The Solid ecosystem has grown considerably since the initial proof of concept. Inrupt's Pod Spaces, launched in 2023, provides enterprise-grade pod hosting with SLA guarantees. Flanders (Belgium) launched a government-wide Solid initiative in 2022–2024, storing citizen health and mobility data in municipal Solid Pods accessible by authorised government applications — the largest government deployment of Solid to date. The Solid Application Interoperability (SAI) specification, reaching Candidate Recommendation in 2025, standardises how applications discover, request, and manage access grants to pods, addressing the bootstrapping problem (how does an app know what's in a pod?). Integration with [[W3C DID Core]] and [[Verifiable Credentials]] is progressing through the Solid-VC Task Force, aligning pod-based data management with the broader decentralised identity stack.

  #### Cross-Domain Applications

  In the [[AI Domain]], Solid Pods enable privacy-preserving personalisation: an [[LangChain]] or [[Model Context Protocol]] agent reads preference profiles from the user's pod without ingesting that data into a centralised training pipeline. In the [[Blockchain Domain]], Solid Pods can store [[Verifiable Credential Surface|verifiable credentials]] issued on-chain, making them accessible via standard HTTP without requiring blockchain lookups. In the [[Telecollaboration Domain]], shared workspaces can be implemented as shared Solid containers where collaborators are granted write access, providing a decentralised alternative to Google Drive or SharePoint. In the [[Metaverse Domain]], avatar asset profiles and spatial preference data can reside in Solid Pods, travelling with the user across virtual world platforms.

  #### Standards and References

  - Mansour, E., et al. (2016). "A Demonstration of the Solid Platform for Social Web Applications." *WWW 2016 Companion*.
  - W3C. (2022). *Solid Protocol*. https://solidproject.org/TR/protocol
  - W3C. (2013). *Linked Data Platform 1.0*. https://www.w3.org/TR/ldp/
  - Sambra, A., et al. (2016). *Solid: A Platform for Decentralised Social Applications Based on Linked Data*. MIT CSAIL Technical Report.
  - Solid Application Interoperability Panel. (2025). *Solid Application Interoperability Specification*. https://solid.github.io/data-interoperability-panel/

- ### Provenance
  - sources:: [[W3C Solid Protocol]], [[W3C Linked Data Platform]], [[Solid Application Interoperability Specification]], [[Inrupt Pod Spaces]]
  - migration-date:: 2026-04-26T00:00:00Z
