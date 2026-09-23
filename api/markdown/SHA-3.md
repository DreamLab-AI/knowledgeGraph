
SHA-3 is a family of cryptographic hash functions standardised by NIST in FIPS 202, based on the Keccak sponge construction rather than the Merkle-Damgaard design of SHA-2. Its sponge structure provides strong resistance to length-extension attacks and offers configurable output lengths and extendable-output functions. It is used as a collision-resistant primitive in digital signatures and integrity verification.

- ### Content
  - The sponge absorbs input into a large internal state through the Keccak-f permutation, then squeezes out a digest, supporting SHA3-224 through SHA3-512 and the SHAKE XOFs. Standardised in 2015 as a structurally distinct alternative to SHA-2, it provides cryptographic diversity rather than replacing the still-secure SHA-2 family.

