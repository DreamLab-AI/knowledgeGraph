- ### Definition
  - Kerberos is a network authentication protocol that uses tickets and symmetric key cryptography to allow nodes to prove identity over an untrusted network.

- ### Semantic Classification
  - owl-class:: distributed-systems:Kerberos
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Authentication]]
  - bridges-to:: [[Cryptographic Protocols]]
  - requires:: [[Encryption]]
  - enables:: [[Single Sign-On]]

- ### Content
  - Kerberos was developed at the Massachusetts Institute of Technology and relies on a trusted third party, the Key Distribution Centre, to issue time-limited tickets. Clients present these tickets to services rather than transmitting passwords over the network.
  - The protocol is widely deployed in enterprise environments and underpins Windows domain authentication. It supports mutual authentication between client and server and reduces exposure of long-term credentials.

- ### Provenance
  - sources:: [[https://web.mit.edu/kerberos/]], [[https://datatracker.ietf.org/doc/html/rfc4120]]
  - migration-date:: 2026-05-29T00:00:00Z