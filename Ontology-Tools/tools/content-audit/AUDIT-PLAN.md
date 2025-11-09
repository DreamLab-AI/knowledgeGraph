# Content Audit and Enrichment Plan
## Disruptive Technologies Ontology Knowledge Corpus Update

### Executive Summary

**Scope**: 1,001 markdown files, 917 with substantial content (>1KB beyond ontology blocks)
**Total Size**: 26 huge files (>100KB), 143 large files (20-100KB), 474 medium files (5-20KB)
**Challenge**: Outdated facts, missing context, inconsistent depth across domains

---

## Discovered Writing Styles

### Style A: Structured Technical (e.g., Bitcoin.md, AI Agent System.md)
- Formal headings and subheadings
- Systematic bullet points with nested indentation
- Technical precision with architectural details
- **Example**: "An **AI Agent System** is an autonomous software entity..."

### Style B: Rambling Research Notes (e.g., AI Development.md sections)
- Conversational observations
- Embedded links (Twitter, articles, YouTube)
- Personal commentary ("As Theo Priestley points out...")
- Stream-of-consciousness connections
- Economic/geopolitical analysis
- **Example**: "If anything can currently claim to be the metaverse it's Roblox..."

### Key Characteristics to Preserve:
- Rich, detailed content (not superficial)
- Multiple information layers (technical → application → implications)
- Mix of formal definitions with informal explorations
- Extensive linking to sources
- Cross-domain insights

---

## Critical Questions for You:

### 1. **Prioritisation Strategy**
Which approach do you prefer:
- **A. Public-first**: Start with 12 public-access concepts, then expand
- **B. Domain-based**: One domain at a time (AI, Blockchain, Metaverse, Robotics)
- **C. Size-based**: Large impactful files first (top 50 by size)
- **D. Quality-based**: Files with most outdated content first
- **E. Integration targets**: Files we recently enhanced (AI Agent System, etc.)

### 2. **Depth of Updates**
For each file, how deep should I go:
- **Quick pass**: Update obvious outdated facts (dates, numbers, events)
- **Medium depth**: Quick pass + fill major gaps + add recent developments
- **Deep enrichment**: Medium + expand sections + add new subsections + cross-reference
- **Or**: Different depths for different file categories?

### 3. **Fact-Checking Method**
- Use WebSearch for current facts (Bitcoin halving, recent developments, etc.)?
- Trust my training data (Jan 2025 cutoff)?
- Focus on which types of facts need verification?

### 4. **UK English Consistency**
Should I:
- Convert ALL American spellings to UK (behaviour, optimisation, realise, etc.)?
- Or only new content in UK English, leaving existing as-is?

### 5. **Token Budget Per File**
Rough estimates:
- **Tiny files** (<1KB): 200-500 tokens
- **Small files** (1-5KB): 1,000-2,000 tokens
- **Medium files** (5-20KB): 2,000-5,000 tokens
- **Large files** (20-100KB): 5,000-15,000 tokens
- **Huge files** (>100KB): 15,000-30,000 tokens

At medium depth, full corpus ≈ 2-4 million tokens total
Does this budget seem reasonable?

### 6. **Batch Size**
How many files should I process before committing?
- **Small batches**: 5-10 files, frequent commits
- **Medium batches**: 20-30 files, domain-based commits
- **Large batches**: 50-100 files, major phase commits

### 7. **Content Gaps**
When you say "where content is missing and should be present, write something small in" - what defines "should be present"?
- Core definitional content?
- Recent developments (2024-2025)?
- Cross-domain connections?
- Use cases/applications?

---

## Recommended Phased Approach

### **Phase 1: Pilot (5-10 files)**
**Purpose**: Validate approach, refine style matching, establish workflow

**Candidates**:
1. Bitcoin.md (public, outdated halving info, medium size)
2. AI Agent System.md (recent integration target, public)
3. Money.md (public, cross-domain)
4. Blockchain.md (public, foundational)
5. Neural 3D Generation.md (recent integration, public)

**Deliverable**:
- Updated files with before/after examples
- Style guide refinement
- Token budget validation
- Your approval before scaling

### **Phase 2: Public Concepts (remaining 7 public files)**
Prioritise public-facing content quality

### **Phase 3: Domain-Specific Campaigns**
Based on your preference:
- **AI Domain** (AI-* files, ~300 files)
- **Blockchain Domain** (BC-* files, ~300 files)
- **Metaverse Domain** (~200 files)
- **Robotics Domain** (RB-* files, ~100 files)
- **Cross-Domain** (DT-* files, ~50 files)

### **Phase 4: Long Tail**
Remaining small/less critical files

---

## Proposed Process Per File

1. **Read entire file** (understand context and current state)
2. **Identify outdated sections** (dates, statistics, deprecated tech)
3. **Check for factual errors** (use WebSearch for key claims)
4. **Fill content gaps** (sections that are stubs or missing)
5. **Expand thin sections** (where more detail would help)
6. **Update cross-references** (ensure [[wiki-links]] are current)
7. **Preserve OntologyBlock** (no changes to formal ontology structure)
8. **Match writing style** (technical vs rambling, based on existing tone)
9. **Use UK English** (for new content)
10. **Maintain source links** (keep Twitter, YouTube, article links)

---

## Tools and Automation

**Already Available**:
- WebSearch for fact-checking
- File reading/writing
- Grep for finding patterns

**Could Create**:
- Outdated date detector (finds "2023", "2024" references to check)
- Broken link checker
- Content gap analyzer (sections with <50 words)
- US→UK English converter

---

## Risk Mitigation

**Concerns**:
1. **Altering user's voice**: Preserve rambling style, don't over-formalise
2. **Introducing errors**: Fact-check all substantive claims
3. **Scope creep**: Focus on updates, not rewrites
4. **Token overrun**: Track per-file token usage, adjust depth if needed

**Safeguards**:
- Commit frequently with clear descriptions
- Pilot phase for your approval
- Different depths for different priorities
- Preserve original content structure

---

## Decision Template

Please specify your preferences:

**Prioritisation**: [ A / B / C / D / E or custom ]
**Depth**: [ Quick / Medium / Deep or mixed ]
**Fact-checking**: [ WebSearch / Training data / Selective ]
**UK English**: [ Convert all / New content only ]
**Token budget per file**: [ Conservative / Medium / Generous ]
**Batch size**: [ Small / Medium / Large ]
**Content gaps definition**: [ Your criteria ]

**Additional constraints or preferences**: ___

---

Would you like me to start with the **Phase 1 Pilot** on Bitcoin.md to demonstrate the approach, or do you have different preferences for how to proceed?
