#!/usr/bin/env python3
"""
Retry Failed Files from Corpus Overhaul
Processes the 30 files that failed due to API timeouts
"""

import json
import subprocess
import time
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

PAGES_DIR = Path(__file__).parent.parent.parent / "mainKnowledgeGraph" / "pages"
PERPLEXITY_API_KEY = os.environ.get("PERPLEXITY_API_KEY", "")

# Files that failed in the previous run
FAILED_FILES = [
    "3D Scene Exchange Protocol (SXP).md",
    "AugmentedReality.md",
    "Early Stopping.md",
    "Hyperparameter.md",
    "IMPLEMENTATION-SUMMARY.md",
    "INDEX.md",
    "Identity Federation.md",
    "Identity Graph.md",
    "Identity Provider (IdP).md",
    "Image Classification.md",
    "Image Generation.md",
    "Image-to-Image Translation.md",
    "Immersive Experience.md",
    "Infrastructure Layer.md",
    "Instruction Tuning.md",
    "Layer2Scaling.md",
    "Loss Function.md",
    "Machine Learning.md",
    "Machine Translation.md",
    "Marketplace.md",
    "Maximum Sequence Length.md",
    "Medical Imaging AI.md",
    "Membership Inference.md",
    "Metadata Standard.md",
    "Metaverse Architecture Stack.md",
    "Metaverse Liability Model.md",
    "Metaverse Psychology Profile.md",
    "Metaverse.md",
    "Persistence.md",
    "Mean Absolute Error.md",
    "Root Mean Square Error.md"
]

def call_perplexity_with_retry(prompt, max_retries=3):
    """Call Perplexity API with exponential backoff retry"""
    for attempt in range(max_retries):
        try:
            payload = {
                "model": "sonar",
                "messages": [
                    {
                        "role": "system",
                        "content": "You are a precise research assistant providing current, factual information with citations. Use UK English spelling. Format responses in Logseq nested bullet markdown (use -, tabs for nesting). Be technically precise yet cordial, with subtle dry humour where appropriate."
                    },
                    {"role": "user", "content": prompt}
                ],
                "temperature": 0.2,
                "max_tokens": 4000
            }

            result = subprocess.run(
                ["curl", "-s", "-X", "POST", "https://api.perplexity.ai/chat/completions",
                 "-H", f"Authorization: Bearer {PERPLEXITY_API_KEY}",
                 "-H", "Content-Type: application/json",
                 "-d", json.dumps(payload)],
                capture_output=True,
                text=True,
                timeout=90  # Increased timeout
            )

            if not result.stdout or result.stdout.strip() == "":
                raise ValueError("Empty response from API")

            response = json.loads(result.stdout)

            if "choices" in response and response["choices"]:
                return response["choices"][0]["message"]["content"], response.get("citations", [])
            elif "error" in response:
                print(f"    API error (attempt {attempt + 1}/{max_retries}): {response['error']}")
            else:
                print(f"    Unexpected response (attempt {attempt + 1}/{max_retries})")

            # Exponential backoff
            if attempt < max_retries - 1:
                wait_time = 5 * (2 ** attempt)  # 5s, 10s, 20s
                print(f"    Waiting {wait_time}s before retry...")
                time.sleep(wait_time)

        except json.JSONDecodeError as e:
            print(f"    JSON error (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(5 * (2 ** attempt))
        except subprocess.TimeoutExpired:
            print(f"    Timeout (attempt {attempt + 1}/{max_retries})")
            if attempt < max_retries - 1:
                time.sleep(5 * (2 ** attempt))
        except Exception as e:
            print(f"    Error (attempt {attempt + 1}/{max_retries}): {e}")
            if attempt < max_retries - 1:
                time.sleep(5 * (2 ** attempt))

    return None, []

def extract_term_from_ontology_block(content):
    """Extract the preferred term from ontology block"""
    lines = content.split('\n')
    for line in lines:
        if 'preferred-term::' in line:
            return line.split('preferred-term::')[1].strip()
    return None

def review_and_update_file(filename):
    """Review and update a single file with retry logic"""
    file_path = PAGES_DIR / filename

    if not file_path.exists():
        return f"❌ {filename}: File not found"

    print(f"\n📄 Retrying: {filename}")

    try:
        content = file_path.read_text(encoding='utf-8')
        term = extract_term_from_ontology_block(content)

        if not term:
            term = filename.replace('.md', '').replace('-', ' ')

        print(f"  🔍 Analyzing: {term}")

        # Rate limiting
        time.sleep(2)

        prompt = f"""Review and improve this ontology entry for "{term}".

CURRENT CONTENT:
{content[:2000]}...

REQUIRED IMPROVEMENTS:
1. Remove any dated news, announcements, or time-sensitive content
2. Update facts that have changed since 2024
3. Verify all assertions are current and accurate
4. Add UK context, especially North England where relevant and natural
5. Convert ALL content to Logseq nested bullet format (use -, tabs for nesting, NO bold **)
6. Remove ALL bold text (**), use headings (##, ###) instead
7. Resolve any partial academic references with complete citations
8. Add appropriate academic references with DOI/URLs where relevant
9. Ensure technically precise yet cordial tone
10. Include subtle dry humour where it fits naturally

FORMAT:
Use the following structure with Logseq nested bullets:

## Academic Context

- Brief contextual overview
  - Key developments and current state
  - Academic foundations

## Current Landscape (2025)

- Industry adoption and implementations
  - Notable organisations and platforms
  - UK and North England examples where relevant
- Technical capabilities and limitations
- Standards and frameworks

## Research & Literature

- Key academic papers and sources
  - Properly cited with DOI/URL
- Ongoing research directions

## UK Context

- British contributions and implementations
- North England innovation hubs (only if genuinely relevant)
- Regional case studies

## Future Directions

- Emerging trends and developments
- Anticipated challenges
- Research priorities

## References

1. Author, Year. Title. Journal/Source. DOI/URL
2. [etc]

## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

Provide ONLY the content sections (starting from ## Academic Context), not the ontology block."""

        updated_content, citations = call_perplexity_with_retry(prompt)

        if not updated_content:
            return f"❌ {filename}: Failed after all retries"

        # Extract ontology block from original
        ontology_block_end = content.find('\n\n##')
        if ontology_block_end == -1:
            return f"❌ {filename}: Could not find ontology block"

        ontology_block = content[:ontology_block_end]

        # Combine ontology block with new content
        final_content = f"{ontology_block}\n\n{updated_content}\n\n"

        # Write updated content
        file_path.write_text(final_content, encoding='utf-8')

        size = len(final_content.encode('utf-8'))
        print(f"  ✅ Updated successfully ({size} bytes)")
        return f"✅ {filename}: Success"

    except Exception as e:
        return f"❌ {filename}: {str(e)}"

def main():
    """Retry all failed files"""
    print("🔄 RETRYING FAILED FILES FROM CORPUS OVERHAUL")
    print("=" * 70)
    print(f"Total files to retry: {len(FAILED_FILES)}\n")

    results = {
        'success': [],
        'failed': []
    }

    # Process files sequentially to avoid overwhelming API
    for filename in FAILED_FILES:
        result = review_and_update_file(filename)

        if result.startswith('✅'):
            results['success'].append(filename)
        else:
            results['failed'].append(filename)
            print(f"  {result}")

    print("\n\n" + "=" * 70)
    print("📊 RETRY SUMMARY")
    print("=" * 70)
    print(f"✅ Successfully updated: {len(results['success'])}")
    print(f"❌ Still failed: {len(results['failed'])}")
    print("=" * 70)

    if results['failed']:
        print("\n⚠️  Files that still failed:")
        for f in results['failed']:
            print(f"  - {f}")

    return results

if __name__ == "__main__":
    main()
