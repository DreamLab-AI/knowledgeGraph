An Encryption Scheme is a cryptographic construction comprising key-generation, encryption, and decryption algorithms that together transform plaintext into ciphertext and back under a key. Schemes are categorised as symmetric (shared key, e.g. AES) or asymmetric (public/private key, e.g. RSA, ECC), and are evaluated by their security definitions such as semantic security. They are the building blocks of confidentiality in cryptographic protocols.

### Content

- Symmetric schemes such as AES use one shared key for speed, while asymmetric schemes such as RSA and elliptic-curve cryptography use key pairs to enable key exchange and signatures. Security is judged against formal notions like IND-CPA and IND-CCA, ensuring ciphertexts leak no useful information to adversaries.

