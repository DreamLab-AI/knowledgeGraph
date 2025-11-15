# Blockchain Batch 5 Processing Plan

## CRITICAL PRIORITY FILES

### 1. Salt.md (BC-0049) - 35% CONTAMINATION
**Contaminated Sections (Lines 124-197 = ~74 lines)**:
- Lines 124-128: "International money transfer networks" (duplicate, off-topic)
- Lines 131-146: Food/mineral salt industry content (NaCl chemistry, mining operations)
- Lines 137-165: Global salt market data, production methods, specialty salts
- Lines 159-165: UK salt mining in Cheshire, de-icing applications
- Lines 167-179: Future directions for salt industry
- Lines 181-195: References to salt market research

**Action**: REMOVE all ~74 lines, replace with:
- Cryptographic salt usage (password hashing, key derivation functions)
- Salt in blockchain key management (PBKDF2, bcrypt, Argon2)
- Nonce generation and uniqueness guarantees
- Random number generation in consensus mechanisms
- 2025 NIST standards on key derivation

### 2. Script.md (BC-0023) - 60% CONTAMINATION  
**Contaminated Sections (Lines 124+ = ~300+ lines)**:
- AI tools: Transcription, Video editing, Website builders, Chatbots
- Task management tools: BeforeSunset, Notion, Twitter
- Video creation tools: Synthesia, HeyGen, Descript, CapCut, TimeBolt, Guidde, Noisee, VideoGPT
- Lead generation tools: Reply.io, Artisan, Dopplio
- Digital human creation projects
- Generic scripting definitions (not blockchain-related)

**Action**: REMOVE all ~300+ lines, keep/expand:
- Bitcoin Script fundamentals (stack-based language, opcodes)
- Miniscript language and improvements
- Smart contract scripting languages (Solidity, Move, Clarity)
- Script validation and transaction verification
- Discrete log contracts and advanced scripting patterns
- 2025 script security improvements and layer 2 solutions

## STANDARD PROCESSING (13 remaining files)

1. Preimage Resistance.md
2. Private Key.md
3. Pruned Node.md
4. Public Key.md
5. SHA-256.md
6. Schnorr Signature.md
7. Selfish Mining.md
8. Sybil Attack.md
9. Transaction Confirmation.md
10. Transaction Pool.md
11. Transaction.md
12. Verifiable Credential (VC).md
13. Zero-Knowledge Proof.md

## PROCESSING CHECKLIST

For each file:
- [ ] Remove off-topic contamination
- [ ] Expand bare URLs with Perplexity API
- [ ] Fix Logseq formatting (hyphens, [[wiki-links]], spacing)
- [ ] Update to 2025 standards and recent developments
- [ ] Add 10-15 academic citations per file
- [ ] Ensure blockchainRelevance:: High
- [ ] Ensure qualityScore:: ≥0.90
- [ ] Write to blockchain-batch5-processed/[filename]

## QUALITY TARGETS

- Salt.md: 0.45 → 0.91 (+101% improvement)
- Script.md: 0.42 → 0.91 (+117% improvement)
- Others: Average 0.80 → 0.91 (+14% improvement)
- Overall batch 5: Quality ≥0.91
- Contamination removed: ~374 lines (~17.4 KB)
- Final state: 15/15 files at blockchain-ready quality
