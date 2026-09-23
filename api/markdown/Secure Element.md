
A Secure Element (SE) is a tamper-resistant hardware component, typically a dedicated microcontroller, that securely stores cryptographic keys and executes sensitive operations such as signing and authentication in physical isolation from the host system. It enforces hardware-backed access controls so that secret material never leaves the chip in plaintext, resisting both software extraction and many physical attacks. Secure Elements underpin hardware wallets, payment cards, SIMs and mobile secure payment systems, and are commonly certified against standards such as Common Criteria EAL levels.

- ### Overview
	- A Secure Element combines isolated non-volatile storage, a cryptographic coprocessor and hardened firmware in a single package.
	- Two principal form factors dominate: embedded SE soldered onto a device board, and removable SE such as smart cards and SIMs.
	- Certification regimes (Common Criteria EAL5+/EAL6+, EMVCo, FIPS 140) provide assurance about resistance to defined attacker capabilities.
	- The chip exposes a constrained command interface, so the host can request signatures or authentication results but cannot read the underlying secrets.
- ### Mechanisms
	- **Physical isolation**: secrets reside in shielded memory inaccessible to the application processor.
	- **On-chip cryptography**: signing, key derivation and encryption execute inside the SE so plaintext keys never traverse external buses.
	- **Tamper response**: active meshes, voltage and clock sensors, and shielding detect and react to invasive and fault-injection attempts.
	- **Access control**: PIN, lifecycle states and counters gate operations and rate-limit guessing.
- ### Applications
	- [[Hardware Wallet]] devices that sign blockchain transactions without exposing keys to internet-connected hosts.
	- Mobile and contactless payment, where the SE holds tokenised card credentials.
	- SIM/eSIM identity and network authentication.
	- Passports and national identity documents using embedded secure chips.
- ### Provenance

