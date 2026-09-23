
A privacy-preserving protocol is a cryptographic protocol designed to let parties achieve a useful outcome while revealing as little personal or sensitive data as possible. Such protocols use techniques like zero-knowledge proofs, commitments, blind signatures, secure multiparty computation and differential privacy to prove claims, transact or compute jointly without disclosing the underlying inputs. They are central to confidential payments, anonymous credentials, private identity and any system that must reconcile verifiability with data minimisation.

- ### Overview
	- These protocols answer the question: how can one prove or compute something without exposing the underlying secret?
	- They span confidential transactions, anonymous credentials, private set intersection and federated analytics.
	- Many combine several primitives, layering [[Pedersen Commitment]] hiding with zero-knowledge soundness.
	- They stand in tension with disclosure regimes such as [[KYC]], driving designs that selectively reveal only what is required.
- ### Mechanisms
	- Zero-knowledge proofs let a prover convince a verifier of a statement while revealing nothing else.
	- Commitments bind a value secretly, allowing later opening or proof without early disclosure.
	- Blind and threshold signatures authorise actions without linking them to a specific identity.
	- Differential privacy adds calibrated noise so aggregate results do not leak individual records.
- ### Applications
	- Confidential blockchain transactions hiding amounts and participants.
	- Selective-disclosure identity wallets backed by a [[Revocation Registry]].
	- Privacy-preserving analytics using [[Differential Privacy]] over sensitive datasets.
	- Anonymous communication networks such as [[Tor]] and private messaging systems.
- ### Provenance

