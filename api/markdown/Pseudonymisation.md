
Pseudonymisation is a data de-identification technique, defined in GDPR Article 4(5), that processes personal data such that it can no longer be attributed to a specific data subject without additional information held separately under technical and organisational safeguards. It replaces direct identifiers—names, national identification numbers, email addresses—with pseudonyms such as tokens, encrypted identifiers, or keyed hashes, preserving data utility for analytics and machine learning while reducing but not eliminating re-identification risk. Unlike full anonymisation, pseudonymisation is reversible by an authorised party holding the supplementary mapping or key material.

- ### Semantic Classification

- ### Content

  Pseudonymisation implementation takes several practical forms. Cryptographic hashing with a secret key (keyed HMAC) transforms direct identifiers into fixed-length pseudonyms deterministically, enabling consistent linkage across datasets without exposing the original identifiers. Tokenisation replaces identifiers with randomly generated tokens stored in a secure mapping table, enabling authorised re-identification on request. Encryption-based approaches apply reversible symmetric or asymmetric encryption, with keys held in a separate, access-controlled key management system. Format-preserving encryption maintains the structural properties of the original identifier—such as postal code format or date format—for compatibility with legacy schema constraints.

  Under GDPR, pseudonymised data remains personal data (Recital 26): it is still subject to data subject rights and processing restrictions, but the regulation offers processing flexibilities and reduced obligations where pseudonymisation is in place. Article 25 requires data controllers to implement pseudonymisation as a technical measure supporting data protection by design. Article 32 lists it as an appropriate security measure proportionate to risk. The combination of pseudonymisation with Data Minimisation—collecting only pseudonymised identifiers rather than full names—reduces the severity of data breach consequences, because stolen pseudonyms have limited value to an attacker without the corresponding key material.

  In AI systems, pseudonymisation is applied at dataset creation—replacing subject identifiers in training data—and at inference time—masking identifiers in inputs to model APIs. Both applications reduce the risk that trained models memorise and later reproduce personal information in their outputs. However, pseudonymisation is not a complete defence against model inversion or membership inference attacks, which can sometimes recover information about training data without needing the original identifiers.

- ### Provenance

