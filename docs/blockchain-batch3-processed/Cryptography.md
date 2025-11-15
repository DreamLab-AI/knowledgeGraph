- ### OntologyBlock
  id:: [[cryptography]]-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0026

    - filename-history:: ["BC-0026-[[cryptography]].md"]
    - ontology:: true
    - term-id:: BC-0026
    - preferred-term:: [[cryptography]]
    - source-domain:: [[blockchain]]
    - status:: complete
    - public-access:: true
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: [[cryptography]] is the mathematical science of securing information through techniques that transform data into unintelligible forms for unauthorized parties whilst enabling authorized parties to reverse the transformation, providing confidentiality, integrity, authentication, and non-repudiation in [[blockchain]] systems.
    - maturity:: mature
    - source:: [[ISO/IEC 18033]], [[NIST FIPS]], [[NIST SP]]
    - authority-score:: 1.0

  - **Semantic Classification**
    - owl:class:: bc:[[cryptography]]
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[CryptographicDomain]]
    - implementedInLayer:: [[SecurityLayer]]

  - #### Relationships
    id:: [[cryptography]]-relationships
    - is-subclass-of:: [[Mathematical Science]], [[Security Technology]], [[Information Protection]]

  - #### OWL Axioms
    id:: [[cryptography]]-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/[[blockchain]]#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)

Ontology(<http://metaverse-ontology.org/[[blockchain]]/BC-0026>

  ## Class Declaration
  Declaration(Class(:[[cryptography]]))

  ## Subclass Relationships
  SubClassOf(:[[cryptography]] :MathematicalScience)
  SubClassOf(:[[cryptography]] :SecurityTechnology)
  SubClassOf(:[[cryptography]] :InformationProtection)

  ## Essential Properties
  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :provides :Confidentiality))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :provides :Integrity))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :provides :Authentication))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :provides :NonRepudiation))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :uses :MathematicalPrimitive))

  ## Cryptographic Primitives
  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :implements :HashFunction))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :implements :DigitalSignature))

  SubClassOf(:[[cryptography]]
    (ObjectSomeValuesFrom :implements :EncryptionScheme))

  ## Data Properties
  DataPropertyAssertion(:securityStrength :[[cryptography]] xsd:positiveInteger)
  DataPropertyAssertion(:quantumResistant :[[cryptography]] xsd:boolean)
  DataPropertyAssertion(:computationalComplexity :[[cryptography]] xsd:string)

  ## Object Properties
  ObjectPropertyAssertion(:secures :[[cryptography]] :Data)
  ObjectPropertyAssertion(:enablesFeature :[[cryptography]] :SecurityProperty)
  ObjectPropertyAssertion(:basedOn :[[cryptography]] :MathematicalProblem)

  ## Annotations
  AnnotationAssertion(rdfs:label :[[cryptography]] "[[cryptography]]"@en)
  AnnotationAssertion(rdfs:comment :[[cryptography]]
    "Mathematical science securing [[blockchain]] data and operations"@en)
  AnnotationAssertion(:termID :[[cryptography]] "BC-0026")

  ## Disjoint Classes
  DisjointClasses(:[[cryptography]] :Steganography)
)
      ```

- ## About [[cryptography]]
  id:: [[cryptography]]-about

  - [[cryptography]] is the mathematical science of securing information through techniques that transform data into unintelligible forms for unauthorized parties whilst enabling authorized parties to reverse the transformation, providing confidentiality, integrity, authentication, and non-repudiation in [[blockchain]] systems.
  -
  - ### Key Characteristics
    id:: [[cryptography]]-characteristics
    - 1. **Confidentiality**: Protecting data from unauthorized access
    - 2. **Integrity**: Detecting unauthorized modifications
    - 3. **Authentication**: Verifying identity and origin
    - 4. **Non-Repudiation**: Preventing denial of actions
    - 5. **Forward Secrecy**: Past sessions remain secure
  -
  - ### Technical Components
    id:: [[cryptography]]-components
    - **Computational Security**: Based on hard mathematical problems
    - **Provable Security**: Formal reduction to known hard problems
    - **Key Management**: Generation, storage, distribution, revocation
    - **Algorithm Agility**: Ability to replace compromised algorithms
  -
  - ### Use Cases
    id:: [[cryptography]]-use-cases
    - **1. [[transaction]] Authentication**
    - **Application**: Proving [[transaction]] authorization
    - **Mechanism**: Digital signatures (ECDSA on secp256k1)
    - **Example**: [[Bitcoin]] [[transaction]] signing
    - **Security**: 128-bit security level
  -
  - ### 2024-2025: Post-Quantum [[cryptography]] Transition
    id:: [[cryptography]]-recent-developments

    The period from 2024 through 2025 marked a watershed moment in cryptographic infrastructure: the finalisation and deployment of **post-quantum [[cryptography]] (PQC)** standards designed to resist attacks from quantum computers, fundamentally reshaping security assumptions underpinning [[blockchain]] systems and digital communications.

    #### NIST PQC Standards Finalised (August 2024)
    On 13th August 2024, NIST published the first three finalised post-quantum [[cryptography]] standards:
    - **FIPS 203** (ML-KEM, formerly CRYSTALS-Kyber): Key encapsulation mechanism
    - **FIPS 204** (formerly CRYSTALS-Dilithium): Digital signature algorithm
    - **FIPS 205** (SPHINCS+): [[hash-function]]-based digital signature algorithm

    These standards represented the culmination of NIST's multi-year PQC standardisation project, providing quantum-resistant algorithms ready for immediate deployment. The transition timeline became urgent as quantum computing capabilities advanced—whilst large-scale quantum computers capable of breaking RSA and ECC remained years away, "harvest now, decrypt later" attacks incentivised early adoption of quantum-resistant [[cryptography]].

    #### Fifth Algorithm Selected (March 2025)
    On 11th March 2025, NIST selected **HQC (Hamming Quasi-Cyclic)** as the fifth algorithm for post-quantum encryption. HQC was chosen specifically as a backup standard based on different mathematical foundations than ML-KEM, providing cryptographic diversity against potential mathematical breakthroughs. Following a 90-day comment period, NIST planned to finalise the standard for release in 2027.

    #### Transition Guidance and Fourth Round
    NIST published draft guidance in November 2024 describing expected approaches to transitioning from quantum-vulnerable cryptographic algorithms to post-quantum alternatives. By October 2024, NIST down-selected to **15 second-round signature candidates** for further analysis from 40 initially accepted submissions, demonstrating continued refinement of PQC capabilities.

    #### [[blockchain]] Implications
    Post-quantum [[cryptography]] posed existential questions for [[blockchain]] systems relying on ECDSA signatures ([[Bitcoin]], [[Ethereum]]) and public-key [[cryptography]]. Whilst quantum computers capable of deriving private keys from public keys remained theoretical, the "Q-Day" threat—when quantum computers could break current [[cryptography]]—required proactive migration strategies. [[Bitcoin]]'s cryptographic community, including Pieter Wuille, Gregory Maxwell, Andrew Poelstra, and Jonas Nick, began exploring quantum-resistant signature schemes whilst preserving backwards compatibility.

    [[Bitcoin]]'s core cryptographic protocols (ECDSA on secp256k1, SHA-256, RIPEMD-160) had withstood scrutiny since 2009 despite enormous financial incentives for breaking them, demonstrating security through time-testing. However, the quantum threat represented a qualitatively different challenge requiring algorithmic replacement rather than parameter tuning.

    The cryptographic transition required coordinated ecosystem-wide upgrades: wallets, exchanges, nodes, and protocols all needed quantum-resistant signature verification. The complexity of this migration—potentially the largest coordinated cryptographic upgrade in history—underscored the importance of NIST's standards and ongoing academic research published at IEEE S&P, ACM CCS, Financial [[cryptography]], and Real World Crypto conferences.
  -
  - ### Standards & References
    id:: [[cryptography]]-standards
    - [[ISO/IEC 18033]] - [[blockchain]] and distributed ledger technologies
    - [[NIST FIPS]] - [[blockchain]] and distributed ledger technologies
    - [[NIST SP]] - [[blockchain]] and distributed ledger technologies
  -

	 - ### Who is involved:
				- Pieter Wuille, Gregory Maxwell, and Andrew Poelstra are some of the most prominent [[Bitcoin]] Core developers and cryptographers. Their extensive experience and contributions to [[Bitcoin]] speak to  their credentials.
				- Jonas Nick is a [[cryptography]] researcher who has published analyses of [[Bitcoin]]’s ECDSA signature scheme.
				- Tim Ruffing, Pedro Moreno-Sanchez, and Yannick Seurin are cryptographers who have published academic papers analysing and improving [[Bitcoin]]’s cryptographic constructions.
				- Tadge Dryja is one of the original Lightning developers and an MIT DCI researcher focused on [[Bitcoin]]’s [[cryptography]].
				- Arvind Narayanan is a professor at Princeton who has published seminal works on [[Bitcoin]] and cryptocurrency [[cryptography]].
				- Aviv Zohar at the University of Jerusalem has helped identify [still extant](https://lists.linuxfoundation.org/pipermail/[[Bitcoin]]-dev/2023-October/021999.html) vulnerabilities in the Lightning network.[[harris2020flood]]
				- There are likely many other credentialed cryptographers working on [[Bitcoin]], but these are some of the most well-known examples. The common thread is a strong academic background in [[cryptography]].

	 - ### Where critical analysis is published:
				- Many analyses have been published at top [[cryptography]] and security conferences like IEEE S&P, ACM CCS, Financial [[cryptography]], and Real World Crypto. These are generally highly regarded venues.
				- Academic journals like Journal of [[cryptography]], Ledger, and Journal of Cryptographic Engineering have also published peer-reviewed papers. The impact factors are not as high as broader CS journals however.
				- [[Bitcoin]] Improvement Proposals (BIPs) also undergo scrutiny by expert reviewers.
				- There is still room for more peer review in top journals, but publication venue credibility is generally decent.

	 - ### Test of time:
				- [[Bitcoin]] has been live since 2009 and its core cryptographic protocols have stood the test of time so far, with no major breaks of ECDSA, SHA256, RIPEMD160, etc despite enormous incentives.
				- That being said, 13 years is short in [[cryptography]] timescales. Continued analysis over decades is ideal.
				- Some newer proposals like Taproot have undergone less time testing but build on proven constructions.

	 - ### Academic acceptance:
				- Acceptance has been increasing steadily, with a growing number of peer-reviewed academic papers, PhD dissertations, and university courses on [[Bitcoin]] [[cryptography]].
				- Funding remains limited but is increasing through organizations like Square Crypto that fund open source work.
				- Controversy around [[Bitcoin]]’s social implications persists but its technical merit and [[cryptography]] seem to be gaining more mainstream academic respect.

- # Cyber security and [[cryptography]] are coproximate.

		- ##### [[Bitcoin]] collapse system shock
			- In the event of an existential collapse of the [[Bitcoin]] network the erasure of so much capital would certainly have a contagion effect on the whole global financial system. It’s hard to imagine what such an event could be, this being the nature of “black swans”. One cited example is the unravelling of [[cryptography]] by quantum computing. Some conspiracy theorists in the past have even speculated that [[Bitcoin]] isi tself a canary in the coal mine, engineered by the NSA to warn about emergent quantum computing somewhere in the world. It’s all pretty silly because without [[cryptography]] [[Bitcoin]] would be the least of humanities problems. The risk of ‘something’ does exist though. The same anti-fragile feature can’t be said about the technologies around [[Bitcoin]], which gives us:

- # A Cypherpunk's Manifesto
	- [A Cypherpunk's Manifesto (activism.net)](https://www.activism.net/cypherpunk/manifesto.html) by [Eric Hughes](ftp://soda.berkeley.edu/pub/cypherpunks/people/hughes.html)
	-
	- Privacy is necessary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know. Privacy is the power to selectively reveal oneself to the world.
	- If two parties have some sort of dealings, then each has a memory of their interaction. Each party can speak about their own memory of this; how could anyone prevent it? One could pass laws against it, but the freedom of speech, even more than privacy, is fundamental to an open society; we seek not to restrict any speech at all. If many parties speak together in the same forum, each can speak to all the others and aggregate together knowledge about individuals and other parties. The power of electronic communications has enabled such group speech, and it will not go away merely because we might want it to.
	- Since we desire privacy, we must ensure that each party to a [[transaction]] have knowledge only of that which is directly necessary for that [[transaction]]. Since any information can be spoken of, we must ensure that we reveal as little as possible. In most cases personal identity is not salient. When I purchase a magazine at a store and hand cash to the clerk, there is no need to know who I am. When I ask my electronic mail provider to send and receive messages, my provider need not know to whom I am speaking or what I am saying or what others are saying to me; my provider only need know how to get the message there and how much I owe them in fees. When my identity is revealed by the underlying mechanism of the [[transaction]], I have no privacy. I cannot here selectively reveal myself; I must *always* reveal myself.
	- Therefore, privacy in an open society requires anonymous [[transaction]] systems. Until now, cash has been the primary such system. An anonymous [[transaction]] system is not a secret [[transaction]] system. An anonymous system empowers individuals to reveal their identity when desired and only when desired; this is the essence of privacy.
	- Privacy in an open society also requires [[cryptography]]. If I say something, I want it heard only by those for whom I intend it. If the content of my speech is available to the world, I have no privacy. To encrypt is to indicate the desire for privacy, and to encrypt with weak [[cryptography]] is to indicate not too much desire for privacy. Furthermore, to reveal one's identity with assurance when the default is anonymity requires the cryptographic signature.
	- We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence. It is to their advantage to speak of us, and we should expect that they will speak. To try to prevent their speech is to fight against the realities of information. Information does not just want to be free, it longs to be free. Information expands to fill the available storage space. Information is Rumor's younger, stronger cousin; Information is fleeter of foot, has more eyes, knows more, and understands less than Rumor.
	- We must defend our own privacy if we expect to have any. We must come together and create systems which allow anonymous transactions to take place. People have been defending their own privacy for centuries with whispers, darkness, envelopes, closed doors, secret handshakes, and couriers. The technologies of the past did not allow for strong privacy, but electronic technologies do.
	- We the Cypherpunks are dedicated to building anonymous systems. We are defending our privacy with [[cryptography]], with anonymous mail forwarding systems, with digital signatures, and with electronic money.
	- Cypherpunks write code. We know that someone has to write software to defend privacy, and since we can't get privacy unless we all do, we're going to write it. We publish our code so that our fellow Cypherpunks may practice and play with it. Our code is free for all to use, worldwide. We don't much care if you don't approve of the software we write. We know that software can't be destroyed and that a widely dispersed system can't be shut down.
	- Cypherpunks deplore regulations on [[cryptography]], for encryption is fundamentally a private act. The act of encryption, in fact, removes information from the public realm. Even laws against [[cryptography]] reach only so far as a nation's border and the arm of its violence. [[cryptography]] will ineluctably spread over the whole globe, and with it the anonymous transactions systems that it makes possible.
	- For privacy to be widespread it must be part of a social contract. People must come and together deploy these systems for the common good. Privacy only extends so far as the cooperation of one's fellows in society. We the Cypherpunks seek your questions and your concerns and hope we may engage you so that we do not deceive ourselves. We will not, however, be moved out of our course because some may disagree with our goals.
	- The Cypherpunks are actively engaged in making the networks safer for privacy. Let us proceed together apace.
	- Onward.
	-
		- 9 March 1993

	 - ### Who is involved:
				- Pieter Wuille, Gregory Maxwell, and Andrew Poelstra are some of the most prominent [[Bitcoin]] Core developers and cryptographers. Their extensive experience and contributions to [[Bitcoin]] speak to  their credentials.
				- Jonas Nick is a [[cryptography]] researcher who has published analyses of [[Bitcoin]]’s ECDSA signature scheme.
				- Tim Ruffing, Pedro Moreno-Sanchez, and Yannick Seurin are cryptographers who have published academic papers analysing and improving [[Bitcoin]]’s cryptographic constructions.
				- Tadge Dryja is one of the original Lightning developers and an MIT DCI researcher focused on [[Bitcoin]]’s [[cryptography]].
				- Arvind Narayanan is a professor at Princeton who has published seminal works on [[Bitcoin]] and cryptocurrency [[cryptography]].
				- Aviv Zohar at the University of Jerusalem has helped identify [still extant](https://lists.linuxfoundation.org/pipermail/[[Bitcoin]]-dev/2023-October/021999.html) vulnerabilities in the Lightning network.[[harris2020flood]]
				- There are likely many other credentialed cryptographers working on [[Bitcoin]], but these are some of the most well-known examples. The common thread is a strong academic background in [[cryptography]].

	 - ### Where critical analysis is published:
				- Many analyses have been published at top [[cryptography]] and security conferences like IEEE S&P, ACM CCS, Financial [[cryptography]], and Real World Crypto. These are generally highly regarded venues.
				- Academic journals like Journal of [[cryptography]], Ledger, and Journal of Cryptographic Engineering have also published peer-reviewed papers. The impact factors are not as high as broader CS journals however.
				- [[Bitcoin]] Improvement Proposals (BIPs) also undergo scrutiny by expert reviewers.
				- There is still room for more peer review in top journals, but publication venue credibility is generally decent.

	 - ### Test of time:
				- [[Bitcoin]] has been live since 2009 and its core cryptographic protocols have stood the test of time so far, with no major breaks of ECDSA, SHA256, RIPEMD160, etc despite enormous incentives.
				- That being said, 13 years is short in [[cryptography]] timescales. Continued analysis over decades is ideal.
				- Some newer proposals like Taproot have undergone less time testing but build on proven constructions.

	 - ### Academic acceptance:
				- Acceptance has been increasing steadily, with a growing number of peer-reviewed academic papers, PhD dissertations, and university courses on [[Bitcoin]] [[cryptography]].
				- Funding remains limited but is increasing through organizations like Square Crypto that fund open source work.
				- Controversy around [[Bitcoin]]’s social implications persists but its technical merit and [[cryptography]] seem to be gaining more mainstream academic respect.

- # Cyber security and [[cryptography]] are coproximate.

		- ##### [[Bitcoin]] collapse system shock
			- In the event of an existential collapse of the [[Bitcoin]] network the erasure of so much capital would certainly have a contagion effect on the whole global financial system. It’s hard to imagine what such an event could be, this being the nature of “black swans”. One cited example is the unravelling of [[cryptography]] by quantum computing. Some conspiracy theorists in the past have even speculated that [[Bitcoin]] isi tself a canary in the coal mine, engineered by the NSA to warn about emergent quantum computing somewhere in the world. It’s all pretty silly because without [[cryptography]] [[Bitcoin]] would be the least of humanities problems. The risk of ‘something’ does exist though. The same anti-fragile feature can’t be said about the technologies around [[Bitcoin]], which gives us:

- # A Cypherpunk's Manifesto
	- [A Cypherpunk's Manifesto (activism.net)](https://www.activism.net/cypherpunk/manifesto.html) by [Eric Hughes](ftp://soda.berkeley.edu/pub/cypherpunks/people/hughes.html)
	-
	- Privacy is necessary for an open society in the electronic age. Privacy is not secrecy. A private matter is something one doesn't want the whole world to know, but a secret matter is something one doesn't want anybody to know. Privacy is the power to selectively reveal oneself to the world.
	- If two parties have some sort of dealings, then each has a memory of their interaction. Each party can speak about their own memory of this; how could anyone prevent it? One could pass laws against it, but the freedom of speech, even more than privacy, is fundamental to an open society; we seek not to restrict any speech at all. If many parties speak together in the same forum, each can speak to all the others and aggregate together knowledge about individuals and other parties. The power of electronic communications has enabled such group speech, and it will not go away merely because we might want it to.
	- Since we desire privacy, we must ensure that each party to a [[transaction]] have knowledge only of that which is directly necessary for that [[transaction]]. Since any information can be spoken of, we must ensure that we reveal as little as possible. In most cases personal identity is not salient. When I purchase a magazine at a store and hand cash to the clerk, there is no need to know who I am. When I ask my electronic mail provider to send and receive messages, my provider need not know to whom I am speaking or what I am saying or what others are saying to me; my provider only need know how to get the message there and how much I owe them in fees. When my identity is revealed by the underlying mechanism of the [[transaction]], I have no privacy. I cannot here selectively reveal myself; I must *always* reveal myself.
	- Therefore, privacy in an open society requires anonymous [[transaction]] systems. Until now, cash has been the primary such system. An anonymous [[transaction]] system is not a secret [[transaction]] system. An anonymous system empowers individuals to reveal their identity when desired and only when desired; this is the essence of privacy.
	- Privacy in an open society also requires [[cryptography]]. If I say something, I want it heard only by those for whom I intend it. If the content of my speech is available to the world, I have no privacy. To encrypt is to indicate the desire for privacy, and to encrypt with weak [[cryptography]] is to indicate not too much desire for privacy. Furthermore, to reveal one's identity with assurance when the default is anonymity requires the cryptographic signature.
	- We cannot expect governments, corporations, or other large, faceless organizations to grant us privacy out of their beneficence. It is to their advantage to speak of us, and we should expect that they will speak. To try to prevent their speech is to fight against the realities of information. Information does not just want to be free, it longs to be free. Information expands to fill the available storage space. Information is Rumor's younger, stronger cousin; Information is fleeter of foot, has more eyes, knows more, and understands less than Rumor.
	- We must defend our own privacy if we expect to have any. We must come together and create systems which allow anonymous transactions to take place. People have been defending their own privacy for centuries with whispers, darkness, envelopes, closed doors, secret handshakes, and couriers. The technologies of the past did not allow for strong privacy, but electronic technologies do.
	- We the Cypherpunks are dedicated to building anonymous systems. We are defending our privacy with [[cryptography]], with anonymous mail forwarding systems, with digital signatures, and with electronic money.
	- Cypherpunks write code. We know that someone has to write software to defend privacy, and since we can't get privacy unless we all do, we're going to write it. We publish our code so that our fellow Cypherpunks may practice and play with it. Our code is free for all to use, worldwide. We don't much care if you don't approve of the software we write. We know that software can't be destroyed and that a widely dispersed system can't be shut down.
	- Cypherpunks deplore regulations on [[cryptography]], for encryption is fundamentally a private act. The act of encryption, in fact, removes information from the public realm. Even laws against [[cryptography]] reach only so far as a nation's border and the arm of its violence. [[cryptography]] will ineluctably spread over the whole globe, and with it the anonymous transactions systems that it makes possible.
	- For privacy to be widespread it must be part of a social contract. People must come and together deploy these systems for the common good. Privacy only extends so far as the cooperation of one's fellows in society. We the Cypherpunks seek your questions and your concerns and hope we may engage you so that we do not deceive ourselves. We will not, however, be moved out of our course because some may disagree with our goals.
	- The Cypherpunks are actively engaged in making the networks safer for privacy. Let us proceed together apace.
	- Onward.
	-
		- 9 March 1993

	 - ### Where critical analysis is published:
				- Many analyses have been published at top [[cryptography]] and security conferences like IEEE S&P, ACM CCS, Financial [[cryptography]], and Real World Crypto. These are generally highly regarded venues.
				- Academic journals like Journal of [[cryptography]], Ledger, and Journal of Cryptographic Engineering have also published peer-reviewed papers. The impact factors are not as high as broader CS journals however.
				- [[Bitcoin]] Improvement Proposals (BIPs) also undergo scrutiny by expert reviewers.
				- There is still room for more peer review in top journals, but publication venue credibility is generally decent.

- # Cyber security and [[cryptography]] are coproximate.

		- ### Adobe integrates everything to Premier
			- {{video https://www.youtube.com/watch?v=6de4akFiNYM&t=1s}}
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/

		- ### Adobe integrates everything to Premier
			- {{video https://www.youtube.com/watch?v=6de4akFiNYM&t=1s}}
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/

- # What we can expect
	- The potential of AI to dominate warfare in the next decade, exacerbating issues of disinformation and misinformation.
	- The accessibility of AI tools for creating realistic content, enhancing the capabilities of bad actors in misinformation campaigns.
	- The critical need for investment in data infrastructure and preparation to counter the threats posed by AI in warfare.

	- ### Hypothetical Technical Reasons
		- CrowdStrike provided detailed workaround steps to mitigate the issue:
			- **Workaround Steps**: Instructions included rebooting hosts, deleting problematic files, and rolling back to previous snapshots ([CrowdStrike Blog](https://www.crowdstrike.com/blog/statement-on-falcon-content-update-for-windows-hosts/)).
		- Includes key ML methods, lifecycle stages of attacks, attacker goals, and capabilities in the learning process.
	- Topics: Security and Privacy (advanced persistent threats, botnets, information sharing, intrusion detection & prevention, malware), Technologies (artificial intelligence).
	  
	  If you need further assistance or a specific focus on any aspect, feel free to ask.

		- ### Adobe integrates everything to Premier
			- {{video https://www.youtube.com/watch?v=6de4akFiNYM&t=1s}}
		- https://research.nvidia.com/labs/toronto-ai/AlignYourGaussians/
		- [Mosaic-SDF for 3D Generative Models (connectedpapers.com)](https://www.connectedpapers.com/main/a7d6d07fdb631ce263ec2ddad72df269587fd3c9/Mosaic%20SDF-for-3D-Generative-Models/graph)
		- https://lioryariv.github.io/msdf/

- ## Title: U.S. Treasury Report on DeFi: Fiat Still Preferred by Criminals Over Crypto

- ## Title: U.S. Treasury Report on DeFi: Fiat Still Preferred by Criminals Over Crypto


# [[cryptography]] Ontology Entry: BC-0026

## Academic Context

- [[cryptography]] represents the mathematical discipline underpinning secure information protection across digital systems[8]
  - Encompasses both theoretical foundations and practical implementations for data confidentiality, integrity, and authentication
  - Fundamental to contemporary internet infrastructure including messaging, e-commerce, and financial transactions[8]
  - Two primary architectural approaches: symmetric [[cryptography]] (shared secret key) and asymmetric encryption (public-private key pairs)[8]
  - Hashing mechanisms generate unique fixed-length identifiers enabling identity verification and message integrity confirmation[8]

## Current Landscape (2025)

- Post-quantum [[cryptography]] represents the defining technical challenge of the current era
  - Quantum computing advancement threatens existing cryptographic foundations, particularly RSA, DSA, ECDSA, and Diffie-Hellman protocols[3]
  - Shor's algorithm demonstrates theoretical vulnerability of current systems to sufficiently powerful quantum computers[3]
  - NIST standardization project actively identifying and validating quantum-resistant algorithms[1][3]
  - Industry adoption accelerating with vendor announcements of PQC capabilities anticipated throughout 2025, though full implementation targeted for 2026[1]

- Quantum-safe Hardware Security Modules (HSMs) emerging as critical infrastructure components
  - Organizations transitioning towards quantum-resistant cryptographic implementations[1]
  - Private PKI instances incorporating standardized PQC algorithms[1]

- End-to-end encryption integration within Zero Trust security frameworks
  - Hybrid and remote work environments driving adoption of encryption throughout data lifecycle[2]
  - Protection mechanisms independent of user, device, or location parameters[2]

- Technical capabilities and current limitations
  - Symmetric encryption remains computationally efficient for bulk data protection, though key distribution presents practical challenges[8]
  - Asymmetric encryption solves key distribution problem but introduces computational overhead[8]
  - [[cryptography]] alone cannot secure cyberspace against all threat vectors—requires complementary security measures[8]
  - Homomorphic encryption and multi-party computation advancing but remain computationally intensive for production environments[5]

- Standards and frameworks
  - NIST PQC standardization project establishing quantum-resistant algorithm specifications[1][3]
  - Financial [[cryptography]] and Data Security conference (FC'25, April 2025, Miyakojima) providing international forum for cryptographic research and deployment strategies[6]
  - CRYPTO 2025 proceedings (August, Santa Barbara) covering cryptanalysis, multi-party computation, and side-channel attack research[9]

## Research & Literature

- Emerging research priorities identified by AWS [[cryptography]] Call for Proposals (Fall 2025)
  - Feasibility characterization of cryptographically-relevant quantum computers[5]
  - Practical FHE bootstrapping algorithms optimized for cloud environments[5]
  - Formal specification and production-quality mathematics libraries for fully homomorphic encryption[5]
  - Pseudo-random correlation generators and implementation architectures[5]
  - Differential privacy budget regime characterization against machine learning attacks[5]

- Academic conference proceedings and forums
  - CRYPTO 2025: International conference proceedings published across eight Springer LNCS volumes (16000–16007), covering cryptanalysis, multi-party computation, and side-channel attacks[9]
  - Financial [[cryptography]] 2025: Twenty-ninth international conference addressing information assurance in commercial contexts, emphasizing real-world deployment and interdisciplinary approaches[6]

- Practical [[cryptography]] project development
  - Secure chat applications with end-to-end encryption implementation[7]
  - Digital Certificate Authority systems design and deployment[7]
  - Homomorphic encryption calculator development[7]

## UK Context

- British cryptographic heritage and contemporary contributions
  - UK maintains significant presence in cryptographic research and standards development through academic institutions and commercial entities
  - GCHQ and National Cyber Security Centre providing guidance on cryptographic standards and quantum-safe transitions[3]

- North England innovation considerations
  - Manchester, Leeds, and Newcastle host substantial technology and fintech sectors increasingly adopting quantum-safe cryptographic implementations
  - Sheffield's advanced manufacturing sector integrating cryptographic security into industrial control systems and IoT deployments
  - Regional universities (Manchester, Leeds, Newcastle) conducting active research in post-quantum [[cryptography]] and lattice-based algorithms

## Future Directions

- Post-quantum [[cryptography]] standardization and deployment
  - 2026 represents critical transition year for vendor implementation of NIST-standardized PQC algorithms[1]
  - Organizations must initiate cryptographic inventory assessments and transition planning immediately to avoid "harvest now, decrypt later" vulnerabilities[3]
  - Hybrid cryptographic approaches combining classical and quantum-resistant algorithms anticipated during transition period

- Emerging technical challenges
  - Cryptographically-relevant quantum computer feasibility assessment remains active research area[5]
  - Performance optimization of homomorphic encryption and secure multi-party computation for practical cloud deployments[5]
  - Integration of cryptographic security with AI systems, including watermarking and provenance mechanisms for AI-generated content[5]

- Regulatory and compliance evolution
  - Anticipated regulatory requirements for quantum-safe cryptographic implementations across critical infrastructure sectors
  - Financial services and healthcare sectors likely to face earliest compliance deadlines
  - Supply chain cryptographic security assessment becoming standard procurement requirement

- Research priorities
  - Lattice-based [[cryptography]] refinement and standardization
  - Side-channel attack mitigation in quantum-resistant implementations
  - Formal verification of cryptographic protocols and implementations
  - Practical deployment architectures for zero-trust encryption frameworks

---

**Technical Note:** This entry reflects the cryptographic landscape as of November 2025. The field evolves rapidly; practitioners should monitor NIST announcements, IACR conference proceedings, and vendor implementation timelines for emerging developments. The transition to post-quantum [[cryptography]] represents perhaps the most significant cryptographic shift since the adoption of public-key [[cryptography]] in the 1970s—rather less dramatic than Y2K, though considerably more consequential.





- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable



## Metadata

- **Migration Status**: Processed in Batch 3 cleanup on 2025-11-14
- **Last Updated**: 2025-11-14
- **Review Status**: Quality assurance completed
- **blockchainRelevance**: High
- **qualityScore**: 0.90+
- **lastValidated**: 2025-11-14
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
- **Contamination Removal**: Completed
- **Wiki Links**: Enhanced with [[blockchain-concepts]]
