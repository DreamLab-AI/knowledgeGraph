- ### OntologyBlock
  id:: post-quantum-cryptography-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-0210
	- source-domain:: mv
	- preferred-term:: Post-Quantum Cryptography
	- status:: draft
	- public-access:: true
	- definition:: Cryptographic algorithms and protocols designed to be resistant to attacks from both classical and quantum computers, protecting secure communications in the post-quantum era.
	- source:: [[NIST PQ Standard (2024)]]
	- maturity:: mature
	- owl:class:: mv:PostQuantumCryptography
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: mv:VirtualProcess
	- owl:functional-syntax:: true
	- belongsToDomain:: [[TrustAndGovernanceDomain]], [[DisruptiveTechDomain]]
	- implementedInLayer:: [[Physical Layer]], [[Network Layer]], [[Compute Layer]], [[Data Layer]]
	- #### Relationships
- is-subclass-of:: [[Metaverse]]
	  id:: post-quantum-cryptography-relationships
	  collapsed:: true
		- is-part-of:: [[Security Protocol]]
		- is-part-of:: [[Cryptographic Infrastructure]]
		- has-part:: [[Isogeny-Based Cryptography]]
		- has-part:: [[Hash-Based Signatures]]
		- has-part:: [[Lattice-Based Cryptography]]
		- has-part:: [[Code-Based Cryptography]]
		- has-part:: [[Multivariate Cryptography]]
		- requires:: [[Random Number Generation]]
		- requires:: [[Cryptographic Key Management]]
		- requires:: [[Algorithm Implementation]]
		- enables:: [[Quantum-Resistant Encryption]]
		- enables:: [[Secure Key Exchange]]
		- enables:: [[Long-Term Data Protection]]
		- enables:: [[Digital Signatures]]
		- depends-on:: [[Mathematical Hard Problems]]
		- depends-on:: [[Computational Complexity Theory]]

## Academic Context

- Post-Quantum Cryptography (PQC) encompasses cryptographic algorithms and protocols designed to remain secure against adversaries equipped with both classical and quantum computers.
  - The academic foundation lies in the recognition that quantum computers, exploiting qubits and quantum phenomena such as superposition and entanglement, threaten to break widely used public-key cryptosystems like RSA and ECC.
  - Key developments include the formulation and analysis of quantum-resistant algorithms based on hard mathematical problems such as lattice problems, multivariate equations, and hash-based constructions.
  - The field builds on decades of cryptographic research, integrating quantum computing theory with classical cryptanalysis to anticipate future threats.

## Current Landscape (2025)

- Industry adoption of PQC is accelerating, driven by the imminent threat posed by quantum computing and the need to protect long-term data confidentiality.
  - The National Institute of Standards and Technology (NIST) completed its first round of PQC standardisation in August 2024, endorsing algorithms such as Crystals-KYBER (key encapsulation) and Crystals-DILITHIUM (digital signatures), both lattice-based, alongside stateless hash-based signatures like SPHINCS+.
  - Hybrid cryptographic schemes combining classical and post-quantum algorithms are widely recommended to ensure a smooth transition and mitigate risks from premature adoption.
  - Technical limitations include increased computational overhead and larger key sizes compared to classical algorithms, which impact performance and implementation complexity.
- Notable organisations implementing PQC include major cloud providers and cybersecurity firms globally, with increasing integration into TLS protocols and VPNs.
- In the UK, government bodies and industry are actively preparing for PQC adoption, with a focus on standards compliance and infrastructure readiness.

## Research & Literature

- Key academic papers and sources:
  - Peikert, C. (2016). "A Decade of Lattice Cryptography." Foundations and Trends® in Theoretical Computer Science, 10(4), 283–424. DOI: 10.1561/0400000072
  - Bernstein, D. J., Lange, T., & Peters, C. (2017). "Post-Quantum Cryptography." In Post-Quantum Cryptography (pp. 1–14). Springer. DOI: 10.1007/978-3-319-40049-5_1
  - Alagic, G., et al. (2022). "Status Report on the Second Round of the NIST Post-Quantum Cryptography Standardization Process." NISTIR 8413. DOI: 10.6028/NIST.IR.8413
- Ongoing research focuses on improving algorithm efficiency, reducing key sizes, and developing quantum-resistant signature schemes.
- Studies also explore crypto-agility frameworks and hybrid protocols to facilitate seamless migration.

## UK Context

- The UK government has prioritised PQC within its National Cyber Security Strategy, funding research and pilot projects to prepare critical infrastructure.
- North England hosts several innovation hubs contributing to PQC research and development:
  - Manchester’s Quantum Technology Hub focuses on quantum-safe communications.
  - Leeds and Sheffield universities conduct applied cryptography research with industry partnerships.
  - Newcastle supports cybersecurity startups integrating PQC solutions.
- Regional case studies include collaborative projects between academia and industry to trial PQC in financial services and public sector networks.

## Future Directions

- Emerging trends include:
  - Development of standardised hybrid cryptographic protocols combining classical and post-quantum algorithms.
  - Enhanced focus on implementation security to prevent side-channel and fault attacks on PQC schemes.
  - Integration of PQC into Internet of Things (IoT) devices and constrained environments.
- Anticipated challenges:
  - Balancing security with performance and usability, especially in legacy systems.
  - Managing the complexity of crypto-agility and ensuring rapid response to potential vulnerabilities.
- Research priorities:
  - Refinement of lattice-based and code-based algorithms.
  - Exploration of new mathematical foundations for PQC.
  - Development of comprehensive migration frameworks and tooling.

## References

1. Peikert, C. (2016). A Decade of Lattice Cryptography. *Foundations and Trends® in Theoretical Computer Science*, 10(4), 283–424. https://doi.org/10.1561/0400000072
2. Bernstein, D. J., Lange, T., & Peters, C. (2017). Post-Quantum Cryptography. In *Post-Quantum Cryptography* (pp. 1–14). Springer. https://doi.org/10.1007/978-3-319-40049-5_1
3. Alagic, G., et al. (2022). Status Report on the Second Round of the NIST Post-Quantum Cryptography Standardization Process. *NISTIR 8413*. https://doi.org/10.6028/NIST.IR.8413
4. NIST. (2024). Post-Quantum Cryptography Project. National Institute of Standards and Technology. https://csrc.nist.gov/projects/post-quantum-cryptography
5. Stormshield. (2025). Challenges & Adoption of Post-Quantum Cryptography. Stormshield News.
6. Cloudflare. (2025). State of the Post-Quantum Internet in 2025. Cloudflare Blog.
7. ISACA. (2025). Post Quantum Cryptography: A Call to Action. Industry News.

*If quantum computers ever do break all encryption, at least we'll have a good excuse for forgetting our passwords.*

## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

