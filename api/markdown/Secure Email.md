
Secure email is the set of technologies and practices that protect the confidentiality, integrity, and authenticity of electronic mail in transit and at rest. It combines transport encryption between mail servers, end-to-end message encryption and signing schemes, and sender-authentication and anti-spoofing controls, so that recipients can trust who sent a message and that its contents were not read or altered along the way.

- [[Secure Email]] protects the confidentiality, integrity, and authenticity of electronic mail. It applies [[End-to-End Encryption]] and [[Transport Layer Security]], depends on [[Digital Signature]] and [[Public Key Infrastructure]], and is grounded in [[Cryptography]].
- ### Overview
- Email was designed without built-in security, so secure email layers protections on top of the original protocols. These span the hop-by-hop transport between servers and the message body itself, addressing both eavesdropping and impersonation.
- A complete posture also includes sender authentication so that recipients can distinguish legitimate mail from spoofed messages, reducing phishing and fraud.
- ### Mechanisms
- Transport encryption secures the connection between mail servers using [[Transport Layer Security]].
- End-to-end schemes encrypt and sign message bodies so only intended recipients can read them and tampering is detectable.
- Sender-authentication frameworks let domains publish policies that receivers check to detect forgery.
- Key management via [[Public Key Infrastructure]] binds identities to verification keys.
- ### Applications
- Confidential business correspondence and regulated communications supporting [[Compliance]].
- Signed messages that prove sender identity and message integrity.
- Anti-phishing and anti-spoofing protection for organisational domains.
- ### Provenance

