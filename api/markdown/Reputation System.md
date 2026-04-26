iri:: http://narrativegoldmine.com/infrastructure#ReputationSystem
uri:: urn:visionclaw:concept:infrastructure:reputation-system
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:reputation-system
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Reputation System
content-hash:: sha256-stub-012
status:: stub
maturity:: emerging
quality-score:: 0.35
authority-score:: 0.6
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - A [[Reputation System]] is a decentralised mechanism aggregating verified feedback about participant behaviour into quantified trust scores, enabling social coordination in trustless [[Blockchain]] environments where past transaction history and community validation predict future reliability and quality of interactions.

- ### Semantic Classification
  - owl-class:: infrastructure:ReputationSystem
  - owl-role:: Object
  - belongs-to-domain:: [[NarrativeGraphDomain]]
  - implemented-in-layer:: [[SocialLayer]]

- ### Relationships
  - is-subclass-of:: [[Social Trust Mechanism]], [[Feedback System]], [[Decentralised Governance]]
  - requires:: [[Transaction History]], [[Cryptographic Proof]], [[Aggregation Algorithm]]
  - enables:: [[Trust Networks]], [[Risk Assessment]], [[Peer Selection]]
  - bridges-to:: [[Traditional Rating Systems]], [[Credit Scoring]]

- ### Content

  Reputation systems enable trust formation without centralised authorities by aggregating verifiable behaviour signals into transparent, auditable scores. In blockchain contexts, transaction history is immutable and publicly verifiable—every user can examine a participant's complete historical interactions, creating natural accountability. Reputation scores quantify this history, enabling rapid trust assessments for novel interactions.

  Modern reputation systems employ sophisticated aggregation algorithms filtering out sybil attacks (where malicious actors create multiple accounts to artificially inflate reputation) through mechanisms like stake-weighted voting, community consensus, or cryptographic verification of uniqueness. Cross-domain reputation transfer enables reputation from one platform to facilitate trust on another.

  Reputation systems struggle with reset problems—adversaries who damage reputation can simply abandon their address and create fresh accounts with no reputation history. Privacy-reputation trade-offs create tension: perfect privacy prevents reputation formation, whilst complete transparency enables targetted harassment or censorship of minority participants based on their behaviour patterns.

- ### Provenance
  - sources:: [[Blockchain]], [[Social Trust]]
  - migration-date:: 2026-04-26T00:00:00Z
