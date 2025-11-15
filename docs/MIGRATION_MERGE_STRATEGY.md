# Migration Branch Merge Strategy
**Branch**: `origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA`
**Analysis Date**: 2025-11-14

---

## Summary Statistics

| Category | Files | Action |
|----------|-------|--------|
| Migration Logs | 38 | ARCHIVE |
| Processing Reports | 38 | ARCHIVE |
| Processing Artifacts | 3 | ARCHIVE |
| Backup Files | 2 | ARCHIVE |
| Corrected Content (docs/) | 37 | ARCHIVE |
| **Total to Archive** | **118** | **Keep in branch only** |
| Infrastructure Scripts | 16 | MERGE |
| Documentation | 6 | MERGE |
| Configuration | 1 | MERGE |
| Modified Pages | 1 | MERGE |
| **Total to Merge** | **24** | **Cherry-pick to main** |

---

## Detailed Merge Plan

### Phase 1: Cherry-Pick Infrastructure (Priority: HIGH)

#### Files to Merge (24 files):

**1. Configuration (1 file)**
```bash
.gitignore  # Add Claude Flow entries
```

**2. Perplexity Research Skill (7 files)**
```bash
skills/perplexity-research/skill.md
skills/perplexity-research/README.md
skills/perplexity-research/QUICKSTART.md
skills/perplexity-research/demo.sh
skills/perplexity-research/examples/usage-example.md
skills/perplexity-research/src/citation-formatter.js
skills/perplexity-research/src/perplexity-client.js
```

**3. Test Suite (3 files)**
```bash
skills/perplexity-research/tests/citation-formatter.test.js
skills/perplexity-research/tests/integration-test.js
skills/perplexity-research/tests/perplexity-client.test.js
```

**4. Analysis Scripts (10 files)**
```bash
scripts/README.md
scripts/citation-formatter.js
scripts/content-analyzer.js
scripts/knowledge-graph-indexer.js
scripts/knowledge-graph-lookup-api.js
scripts/ontology-header-extractor.js
scripts/ontology-subject-inferencer.js
scripts/perplexity-client.js
scripts/perplexity-expand.sh
scripts/perplexity-subject-inferencer.js
scripts/validate-and-store.js
```

**5. Modified Pages (1 file)**
```bash
mainKnowledgeGraph/pages/Input.md  # Enhanced OntologyBlock
```

---

### Phase 2: Archive Processing Artifacts (Priority: NONE - Keep in branch)

#### Files to Archive (118 files):

**1. Migration Logs (38 files)**
```
docs/51-percent-attack-migration-log.md
docs/acceleration-migration-log.md
docs/account-model-migration-log.md
docs/address-migration-log.md
docs/ai-risk-md-migration-log.md
docs/bc-0102-inflation-migration-log.md
docs/bc-0103-halving-migration-log.md
docs/bc-0104-supply-cap-migration-log.md
docs/bc-0109-priority-fee-migration-log.md
docs/bc-0110-fee-market-migration-log.md
docs/bc-0111-deflationary-token-migration-log.md
docs/bc-0112-inflationary-token-migration-log.md
docs/bc-0114-burning-mechanism-migration-log.md
docs/bc-0115-minting-migration-log.md
docs/bc-0116-total-supply-migration-log.md
docs/bc-0117-circulating-supply-migration-log.md
docs/bc-0119-economic-security-migration-log.md
docs/block-time-md-migration-log.md
docs/blockchain-network-migration-log.md
docs/coin-md-migration-log.md
docs/cryptographic-commitment-migration-log.md
docs/cryptography-migration-log.md
docs/difficulty-migration-log.md
docs/digital-signature-md-migration-log.md
docs/etsi-domain-virtual-society-migration-log.md
docs/fairness-auditing-tools-migration-log.md
docs/hash-function-migration-log.md
docs/human-rights-migration-log.md
docs/input-md-migration-log.md
docs/light-node-migration-log.md
docs/loss-function-migration-log.md
docs/mobile-robot-migration-log.md
docs/node-migration-log.md
docs/perception-system-migration-log.md
docs/proof-of-work-migration-log.md
docs/recurrent-neural-network-migration-log.md
docs/robot-control-migration-log.md
docs/robot-migration-log.md
```

**2. Processing Reports (38 files)**
```
docs/51-percent-attack-processing-report.md
docs/acceleration-processing-report.md
docs/account-model-processing-report.md
docs/address-processing-report.md
docs/ai-risk-md-processing-report.md
docs/bc-0102-inflation-processing-report.md
docs/bc-0103-halving-processing-report.md
docs/bc-0104-supply-cap-processing-report.md
docs/bc-0109-priority-fee-processing-report.md
docs/bc-0110-fee-market-processing-report.md
docs/bc-0111-deflationary-token-processing-report.md
docs/bc-0112-inflationary-token-processing-report.md
docs/bc-0114-burning-mechanism-processing-report.md
docs/bc-0115-minting-processing-report.md
docs/bc-0116-total-supply-processing-report.md
docs/bc-0117-circulating-supply-processing-report.md
docs/bc-0119-economic-security-processing-report.md
docs/block-time-md-processing-report.md
docs/blockchain-network-processing-report.md
docs/coin-md-processing-report.md
docs/cryptographic-commitment-processing-report.md
docs/cryptography-processing-report.md
docs/difficulty-processing-report.md
docs/digital-signature-md-processing-report.md
docs/etsi-domain-virtual-society-processing-report.md
docs/fairness-auditing-tools-processing-report.md
docs/hash-function-processing-report.md
docs/human-rights-processing-report.md
docs/light-node-processing-report.md
docs/loss-function-processing-report.md
docs/mining-md-processing-report.md
docs/mobile-robot-processing-report.md
docs/node-processing-report.md
docs/perception-system-processing-report.md
docs/proof-of-work-processing-report.md
docs/recurrent-neural-network-processing-report.md
docs/robot-control-processing-report.md
docs/robot-processing-report.md
```

**3. Other Processing Artifacts (3 files)**
```
docs/input-md-processing-summary.md
docs/input-md-final-report.txt
mainKnowledgeGraph/moves.log
```

**4. Backup Files (2 files)**
```
mainKnowledgeGraph/pages/Mining.md.backup-2025-11-13
mainKnowledgeGraph/pages/Public Key - CORRECTED.md
```

**5. Corrected Content in docs/ (37 files)**
```
docs/51-percent-attack-corrected.md
docs/acceleration-corrected.md
docs/account-model-corrected.md
docs/address-corrected.md
docs/ai-risk-md-corrected.md
docs/bc-0102-inflation-corrected.md
docs/bc-0103-halving-corrected.md
docs/bc-0104-supply-cap-corrected.md
docs/bc-0109-priority-fee-corrected.md
docs/bc-0110-fee-market-corrected.md
docs/bc-0111-deflationary-token-corrected.md
docs/bc-0112-inflationary-token-corrected.md
docs/bc-0114-burning-mechanism-corrected.md
docs/bc-0115-minting-corrected.md
docs/bc-0116-total-supply-corrected.md
docs/bc-0117-circulating-supply-corrected.md
docs/bc-0119-economic-security-corrected.md
docs/block-time-md-corrected.md
docs/blockchain-network-corrected.md
docs/coin-md-corrected.md
docs/cryptographic-commitment-corrected.md
docs/cryptography-corrected.md
docs/difficulty-corrected.md
docs/digital-signature-md-corrected.md
docs/etsi-domain-virtual-society-corrected.md
docs/fairness-auditing-tools-corrected.md
docs/hash-function-corrected.md
docs/human-rights-corrected.md
docs/light-node-corrected.md
docs/loss-function-corrected.md
docs/mobile-robot-corrected.md
docs/node-corrected.md
docs/perception-system-corrected.md
docs/proof-of-work-corrected.md
docs/recurrent-neural-network-corrected.md
docs/robot-control-corrected.md
docs/robot-corrected.md
```

**Rationale**: These corrected files represent enhanced versions of knowledge graph pages, but they are:
1. In the wrong location (docs/ instead of mainKnowledgeGraph/pages/)
2. Need individual review before integration
3. Should not be merged as-is into main branch
4. Can be referenced from the branch for future manual integration

---

### Phase 3: Optional Summary Documents (Priority: LOW)

#### Review for Selective Merge:

**1. Processing Summaries (4 files)**
```bash
docs/mining-md-detailed-summary.md              # REVIEW - useful context
docs/MINING-NEXT-STEPS.md                       # REVIEW - actionable items
mainKnowledgeGraph/Public-Key-Cleanup-Summary.md # REVIEW - useful context
scripts/ONTOLOGY-SUBJECT-INFERENCE-SUMMARY.md    # REVIEW - useful context
```

**Recommendation**: Consider moving to docs/archives/ or converting to wiki pages rather than merging to root docs/.

**2. Unrelated Content (1 file)**
```bash
docs/uk-immigration-sponsor-licence-priority-fees.md  # DELETE - unrelated
```

---

## Git Commands for Merge

### Option A: Selective Cherry-Pick (RECOMMENDED)

```bash
# Create a new branch for clean merge
git checkout main
git checkout -b merge/perplexity-infrastructure

# Cherry-pick infrastructure files only
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- \
  .gitignore \
  skills/perplexity-research/ \
  scripts/citation-formatter.js \
  scripts/content-analyzer.js \
  scripts/knowledge-graph-indexer.js \
  scripts/knowledge-graph-lookup-api.js \
  scripts/ontology-header-extractor.js \
  scripts/ontology-subject-inferencer.js \
  scripts/perplexity-client.js \
  scripts/perplexity-expand.sh \
  scripts/perplexity-subject-inferencer.js \
  scripts/validate-and-store.js \
  scripts/README.md \
  mainKnowledgeGraph/pages/Input.md

# Add migration summary
git add docs/MIGRATION_SUMMARY.md

# Review changes
git status
git diff --staged

# Commit
git commit -m "Add Perplexity research infrastructure and analysis tools

- Add Perplexity API citation-based research skill
- Add 10 analysis scripts for knowledge graph processing
- Add ontology subject matter inference system (1,719 files processed)
- Add knowledge graph in-memory lookup API
- Enhance Input.md with complete OntologyBlock
- Update .gitignore for Claude Flow

Content migration logs preserved in branch:
origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA

See docs/MIGRATION_SUMMARY.md for detailed analysis.

Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Push
git push origin merge/perplexity-infrastructure
```

### Option B: Manual File-by-File (ALTERNATIVE)

```bash
# For maximum control, copy files individually
git checkout main
git checkout -b merge/perplexity-infrastructure-manual

# Copy each directory
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- skills/perplexity-research/
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- scripts/

# Remove unwanted files
git rm --cached scripts/*-SUMMARY.md 2>/dev/null || true

# Review and commit
git status
git commit -m "Add Perplexity infrastructure..."
```

---

## What NOT to Do

### ❌ DO NOT: Merge the entire branch
```bash
# This would bring in 118 unwanted files
git merge origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA  # WRONG
```

### ❌ DO NOT: Cherry-pick processing logs
```bash
# Do not merge migration logs
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- docs/*-migration-log.md  # WRONG
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- docs/*-processing-report.md  # WRONG
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- docs/*-corrected.md  # WRONG
```

### ❌ DO NOT: Merge backup files
```bash
# Do not merge backups or CORRECTED files
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- mainKnowledgeGraph/pages/*.backup-*  # WRONG
git checkout origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA -- "mainKnowledgeGraph/pages/*CORRECTED.md"  # WRONG
```

---

## Post-Merge Actions

### 1. Verify Infrastructure Works
```bash
# Test Perplexity skill
cd skills/perplexity-research/
npm test

# Test analysis scripts
cd ../../scripts/
node ontology-header-extractor.js --help
```

### 2. Update Documentation
- Add Perplexity skill to main README.md
- Document new analysis scripts
- Update knowledge graph processing workflow

### 3. Archive Branch Reference
- Tag the branch for historical reference
- Document in project changelog
- Keep branch accessible for corrected content review

```bash
# Create archive tag
git tag -a v1.0-migration-archive \
  origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA \
  -m "Archive: Knowledge graph migration processing artifacts (118 files, 64k+ lines)"

git push origin v1.0-migration-archive
```

---

## Future Use of Corrected Content

### Manual Integration Process

The 37 corrected content files in docs/ can be manually integrated later:

1. **Review Each File Individually**
   ```bash
   # Compare corrected vs current
   git show origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA:docs/51-percent-attack-corrected.md
   cat mainKnowledgeGraph/pages/51%\ Attack.md
   ```

2. **Cherry-Pick Improvements**
   - Enhanced OntologyBlocks
   - Added wiki-links (45+ per file)
   - Updated citations (2024-2025)
   - Removed irrelevant content

3. **Apply to Actual Pages**
   ```bash
   # Copy useful improvements manually
   # Update mainKnowledgeGraph/pages/[Topic].md
   ```

4. **Quality Standards to Maintain**
   - Authority score: 0.95
   - Wiki-links: 45+ per file
   - Citations: 10+ per file
   - Content currency: 2024-2025
   - Structure: No empty markers, no bare URLs

---

## Summary

**MERGE**: 24 files (infrastructure + 1 page)
**ARCHIVE**: 118 files (keep in branch only)
**MANUAL REVIEW**: 37 corrected files (future integration)

**Next Steps**:
1. Execute Option A cherry-pick commands
2. Test infrastructure
3. Create PR for review
4. Tag branch for archive
5. Document in changelog

**Branch Reference**: `origin/claude/perplexity-api-citation-skill-014WQBVm59MePJzUEWefHSiA`
**Archive Tag**: `v1.0-migration-archive` (to be created)
**Documentation**: `docs/MIGRATION_SUMMARY.md` (in this commit)

---

**Generated**: 2025-11-14
