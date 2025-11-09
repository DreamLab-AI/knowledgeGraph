#!/usr/bin/env python3
"""
Batch 3 Converter: Blockchain Domain Ontology Files (BC-0101 to BC-0200)
Transforms Format B (markdown headers) to Format A (Logseq nested blocks)

Key Differences from Batch 1:
- Domain tag: blockchain (not ai-grounded)
- Namespace: bc: (not aigo:)
- Already has good OWL syntax structure
- Standards extraction from multiple standards sections
"""

import re
import sys
import json
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass, asdict
from datetime import datetime

@dataclass
class ConversionResult:
    file_path: str
    success: bool
    term_id: str = ""
    preferred_term: str = ""
    error: Optional[str] = None
    warnings: List[str] = None

    def __post_init__(self):
        if self.warnings is None:
            self.warnings = []

class BlockchainOntologyConverter:
    """Converts Format B blockchain ontology files to canonical Format A"""

    def __init__(self):
        self.warnings = []
        self.term_id_pattern = re.compile(r'BC-\d{4}')

    def slugify(self, text: str) -> str:
        """Convert concept name to slug: 'Smart Contract' -> 'smart-contract'"""
        return text.lower().replace(' ', '-').replace('_', '-').replace('/', '-')

    def extract_metadata(self, content: str) -> Dict[str, str]:
        """Extract metadata from Format B markdown"""
        metadata = {}

        # Extract term ID from filename pattern or metadata
        term_id_match = self.term_id_pattern.search(content)
        if term_id_match:
            metadata['term-id'] = term_id_match.group()

        # Extract from metadata section
        metadata_section = re.search(r'## Metadata\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
        if metadata_section:
            lines = metadata_section.group(1).strip().split('\n')
            for line in lines:
                if line.startswith('- **'):
                    match = re.match(r'- \*\*([^*]+)\*\*:\s*(.+)', line)
                    if match:
                        key = match.group(1).strip()
                        value = match.group(2).strip()
                        metadata[key] = value

        return metadata

    def extract_definition(self, content: str) -> Tuple[str, str]:
        """Extract primary/technical definition and maturity"""
        # Try primary definition first
        def_section = re.search(r'### Primary Definition\s*\n([^\n]+)', content)
        if def_section:
            definition = def_section.group(1).strip()
        else:
            # Try technical definition
            def_section = re.search(r'### Technical Definition\s*\n([^\n]+)', content)
            definition = def_section.group(1).strip() if def_section else ""

        # Infer maturity from authority score
        authority_match = re.search(r'Authority Score["\']?:\s*([\d.]+)', content)
        authority = float(authority_match.group(1)) if authority_match else 0.95

        if authority >= 0.95:
            maturity = "mature"
        elif authority >= 0.8:
            maturity = "emerging"
        else:
            maturity = "experimental"

        return definition, maturity

    def extract_standards(self, content: str) -> List[str]:
        """Extract standards from Standards and References section"""
        standards = []

        # Find standards section
        standards_section = re.search(
            r'## Standards and References\s*\n(.*?)(?=\n##|\Z)',
            content,
            re.DOTALL
        )

        if standards_section:
            std_text = standards_section.group(1)

            # Extract ISO/IEC standards
            iso_matches = re.findall(r'(ISO/IEC\s+[\w.-]+(?::\d{4})?)', std_text)
            standards.extend(iso_matches)

            # Extract ITU standards
            itu_matches = re.findall(r'(ITU-T\s+[\w.-]+)', std_text)
            standards.extend(itu_matches)

            # Extract IEEE standards
            ieee_matches = re.findall(r'(IEEE\s+[\w.-]+)', std_text)
            standards.extend(ieee_matches)

            # Extract NIST references
            nist_matches = re.findall(r'(NIST\w*\s+[\w.-]+)', std_text)
            standards.extend(nist_matches)

        # Deduplicate and limit
        return list(dict.fromkeys(standards))[:5]  # Top 5 standards

    def extract_relationships(self, content: str) -> Dict[str, List[str]]:
        """Extract relationships from Format B"""
        relationships = {
            'is-subclass-of': [],
            'has-part': [],
            'requires': [],
            'enables': [],
            'related-to': []
        }

        # Parse relationships section
        rel_section = re.search(r'## Relationships\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
        if not rel_section:
            return relationships

        rel_text = rel_section.group(1)

        # Parent concepts
        parent_match = re.search(r'### Parent Concepts\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if parent_match:
            # Extract concept names from **Name** patterns
            parents = re.findall(r'\*\*([^*]+)\*\*', parent_match.group(1))
            # Clean up BC-xxxx references
            parents = [p.split('(')[0].strip() for p in parents]
            relationships['is-subclass-of'] = parents

        # Child concepts (becomes has-part)
        child_match = re.search(r'### Child Concepts\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if child_match:
            children = re.findall(r'\*\*([^*]+)\*\*', child_match.group(1))
            children = [c.split('(')[0].strip() for c in children]
            relationships['has-part'] = children

        # Related concepts
        related_match = re.search(r'### Related Concepts\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if related_match:
            related = re.findall(r'\*\*([^*]+)\*\*', related_match.group(1))
            related = [r.split('(')[0].strip() for r in related]
            relationships['related-to'] = related

        # Dependencies (from "Dependencies" or "Requires")
        dep_match = re.search(r'### Dependencies\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
        if dep_match:
            # Extract from "**Requires**:" line
            requires_match = re.search(r'\*\*Requires\*\*:\s*([^\n]+)', dep_match.group(1))
            if requires_match:
                requires = [r.strip() for r in requires_match.group(1).split(',')]
                relationships['requires'] = requires

            # Extract from "**Enables**:" line
            enables_match = re.search(r'\*\*Enables\*\*:\s*([^\n]+)', dep_match.group(1))
            if enables_match:
                enables = [e.strip() for e in enables_match.group(1).split(',')]
                relationships['enables'] = enables

        return relationships

    def extract_owl_axioms(self, content: str) -> str:
        """Extract OWL axioms from code block"""
        # Find OWL functional syntax in clojure fence
        owl_match = re.search(r'```clojure\s*\n(.*?)\n```', content, re.DOTALL)
        if owl_match:
            return owl_match.group(1).strip()
        return ""

    def extract_owl_class(self, owl_axioms: str, concept_name: str) -> str:
        """Extract OWL class name from axioms"""
        # Look for Declaration(Class(:ClassName))
        class_match = re.search(r'Declaration\(Class\(:(\w+)\)\)', owl_axioms)
        if class_match:
            return class_match.group(1)

        # Fallback: convert concept name to PascalCase
        return ''.join(word.capitalize() for word in concept_name.split())

    def infer_domain_and_layer(self, content: str, metadata: Dict) -> Tuple[str, str]:
        """Infer domain and layer from content"""
        # Check category
        category = metadata.get('Category', '').lower()

        if 'consensus' in category:
            domain = 'ConsensusDomain'
            layer = 'ProtocolLayer'
        elif 'cryptograph' in category or 'security' in category:
            domain = 'CryptographicDomain'
            layer = 'SecurityLayer'
        elif 'network' in category:
            domain = 'NetworkDomain'
            layer = 'NetworkLayer'
        elif 'smart contract' in category or 'application' in category:
            domain = 'ApplicationDomain'
            layer = 'ApplicationLayer'
        elif 'token' in category or 'economic' in category:
            domain = 'TokenEconomicsDomain'
            layer = 'EconomicLayer'
        else:
            domain = 'BlockchainDomain'
            layer = 'ConceptualLayer'

        return domain, layer

    def extract_about_section(self, content: str, concept_name: str) -> Dict[str, str]:
        """Extract structured about content from various sections"""
        about_parts = {}

        # Key characteristics
        char_match = re.search(
            r'### Essential Characteristics\s*\n(.*?)(?=\n###|\n##|\Z)',
            content,
            re.DOTALL
        )
        if char_match:
            about_parts['characteristics'] = char_match.group(1).strip()

        # Technical properties
        tech_match = re.search(
            r'### Technical Properties\s*\n(.*?)(?=\n###|\n##|\Z)',
            content,
            re.DOTALL
        )
        if tech_match:
            about_parts['components'] = tech_match.group(1).strip()

        # Use cases
        use_match = re.search(
            r'### Primary Use Cases\s*\n(.*?)(?=\n###|\n##|\Z)',
            content,
            re.DOTALL
        )
        if not use_match:
            use_match = re.search(
                r'## Use Cases\s*\n(.*?)(?=\n##|\Z)',
                content,
                re.DOTALL
            )
        if use_match:
            about_parts['use-cases'] = use_match.group(1).strip()

        return about_parts

    def infer_status(self, content: str, metadata: Dict) -> str:
        """Infer completion status from content richness and metadata"""
        status_field = metadata.get('Status', '').lower()

        if 'approved' in status_field or 'complete' in status_field:
            return 'complete'
        elif 'draft' in status_field:
            return 'draft'
        elif len(content) > 5000 and '## Use Cases' in content and '```clojure' in content:
            return 'complete'
        elif len(content) > 1000:
            return 'in-progress'
        else:
            return 'draft'

    def convert_to_format_a(self, file_path: Path) -> str:
        """Transform Format B blockchain file to canonical Format A"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract components
        metadata = self.extract_metadata(content)
        definition, maturity = self.extract_definition(content)
        standards = self.extract_standards(content)
        relationships = self.extract_relationships(content)
        owl_axioms = self.extract_owl_axioms(content)
        about_parts = self.extract_about_section(content, "")

        # Get concept name
        first_line = content.split('\n')[0]
        if first_line.startswith('# BC-'):
            # Extract from "# BC-0001: Blockchain" format
            concept_name = first_line.split(':', 1)[1].strip() if ':' in first_line else metadata.get('Term Name', 'Unknown')
        else:
            concept_name = metadata.get('Term Name', file_path.stem.replace('BC-', '').replace('-', ' ').title())

        slug = self.slugify(concept_name)
        term_id = metadata.get('term-id', metadata.get('Term ID', 'BC-0000'))

        # Infer fields
        status = self.infer_status(content, metadata)
        domain, layer = self.infer_domain_and_layer(content, metadata)
        owl_class = self.extract_owl_class(owl_axioms, concept_name)

        # Format standards as WikiLinks
        standards_str = ', '.join([f'[[{s}]]' for s in standards]) if standards else '[[ISO/IEC 23257:2021]]'

        # Build Format A structure
        output = f"""- ### OntologyBlock
  id:: {slug}-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: {term_id}
    - preferred-term:: {concept_name}
    - source-domain:: blockchain
    - status:: {status}
    - version:: {metadata.get('Version', '1.0.0')}
    - last-updated:: {metadata.get('Last Updated', '2025-10-28')}

  - **Definition**
    - definition:: {definition}
    - maturity:: {maturity}
    - source:: {standards_str}
    - authority-score:: {metadata.get('Authority Score', '1.0')}

  - **Semantic Classification**
    - owl:class:: bc:{owl_class}
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[{domain}]]
    - implementedInLayer:: [[{layer}]]

  - #### Relationships
    id:: {slug}-relationships
"""

        # Add relationships with proper WikiLink formatting
        if relationships['is-subclass-of']:
            formatted = ', '.join([f'[[{r}]]' for r in relationships['is-subclass-of']])
            output += f"    - is-subclass-of:: {formatted}\n"

        if relationships['has-part']:
            formatted = ', '.join([f'[[{r}]]' for r in relationships['has-part']])
            output += f"    - has-part:: {formatted}\n"

        if relationships['requires']:
            formatted = ', '.join([f'[[{r}]]' for r in relationships['requires']])
            output += f"    - requires:: {formatted}\n"

        if relationships['enables']:
            formatted = ', '.join([f'[[{r}]]' for r in relationships['enables']])
            output += f"    - enables:: {formatted}\n"

        if relationships['related-to']:
            formatted = ', '.join([f'[[{r}]]' for r in relationships['related-to']])
            output += f"    - related-to:: {formatted}\n"

        # Add OWL axioms (preserve existing good structure)
        output += f"""
  - #### OWL Axioms
    id:: {slug}-owl-axioms
    collapsed:: true
    - ```clojure
      {owl_axioms}
      ```

- ## About {concept_name}
  id:: {slug}-about

  - {definition}
  -
"""

        # Add about subsections
        if 'characteristics' in about_parts:
            output += f"""  - ### Key Characteristics
    id:: {slug}-characteristics
{self.format_bullet_list(about_parts['characteristics'], indent=4)}
  -
"""

        if 'components' in about_parts:
            output += f"""  - ### Technical Components
    id:: {slug}-components
{self.format_bullet_list(about_parts['components'], indent=4)}
  -
"""

        if 'use-cases' in about_parts:
            output += f"""  - ### Use Cases
    id:: {slug}-use-cases
{self.format_bullet_list(about_parts['use-cases'], indent=4)}
  -
"""

        # Add standards reference
        output += f"""  - ### Standards & References
    id:: {slug}-standards
"""
        for std in standards:
            output += f"    - [[{std}]] - Blockchain and distributed ledger technologies\n"

        output += "  -\n"

        # Add related concepts
        if relationships['related-to']:
            output += f"""  - ### Related Concepts
    id:: {slug}-related
"""
            for rel in relationships['related-to'][:10]:  # Limit to top 10
                output += f"    - [[{rel}]]\n"

        return output

    def format_bullet_list(self, text: str, indent: int = 4) -> str:
        """Format text content as proper bullet list with indentation"""
        if not text:
            return ""

        lines = text.strip().split('\n')
        formatted = []
        spaces = ' ' * indent

        for line in lines:
            line = line.strip()
            if not line:
                continue

            # Already a bullet point
            if line.startswith('-') or line.startswith('*'):
                formatted.append(f"{spaces}{line}")
            # Numbered list item
            elif re.match(r'^\d+\.', line):
                formatted.append(f"{spaces}- {line}")
            # Regular paragraph or heading
            elif line.startswith('#'):
                formatted.append(f"{spaces}- **{line.strip('#').strip()}**")
            else:
                formatted.append(f"{spaces}- {line}")

        return '\n'.join(formatted)

    def convert_file(self, file_path: Path) -> ConversionResult:
        """Convert a single file and handle errors"""
        try:
            self.warnings = []

            # Read file
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            # Skip if already in Format A
            if content.startswith('- ### OntologyBlock'):
                # Extract term info for reporting
                term_id_match = self.term_id_pattern.search(content)
                term_id = term_id_match.group() if term_id_match else "BC-0000"

                preferred_match = re.search(r'preferred-term::\s*(.+)', content)
                preferred_term = preferred_match.group(1).strip() if preferred_match else file_path.stem

                return ConversionResult(
                    file_path=str(file_path),
                    success=True,
                    term_id=term_id,
                    preferred_term=preferred_term,
                    warnings=['Already in Format A - skipped']
                )

            # Extract term info before conversion
            metadata = self.extract_metadata(content)
            term_id = metadata.get('term-id', metadata.get('Term ID', 'BC-0000'))

            first_line = content.split('\n')[0]
            if first_line.startswith('# BC-') and ':' in first_line:
                preferred_term = first_line.split(':', 1)[1].strip()
            else:
                preferred_term = metadata.get('Term Name', file_path.stem)

            # Convert to Format A
            converted = self.convert_to_format_a(file_path)

            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(converted)

            return ConversionResult(
                file_path=str(file_path),
                success=True,
                term_id=term_id,
                preferred_term=preferred_term,
                warnings=self.warnings if self.warnings else None
            )

        except Exception as e:
            return ConversionResult(
                file_path=str(file_path),
                success=False,
                term_id="ERROR",
                preferred_term="ERROR",
                error=str(e)
            )

def main():
    """Process batch 3: BC-0101 to BC-0200 blockchain files"""

    # Read file list
    batch_file = Path('/tmp/bc-batch-3-files.txt')

    with open(batch_file, 'r') as f:
        file_list = [line.strip() for line in f if line.strip()]

    print("=" * 80)
    print("📋 BATCH 3 CONVERSION: Blockchain Domain (BC-0101 to BC-0200)")
    print("=" * 80)
    print(f"Total Files: {len(file_list)}")
    print(f"🎯 Target Format: Logseq nested blocks (Format A)")
    print(f"🏷️  Domain: blockchain")
    print(f"🔖 Namespace: bc:")
    print("=" * 80)
    print()

    converter = BlockchainOntologyConverter()
    results = []
    start_time = datetime.now()

    for idx, file_path_str in enumerate(file_list, 1):
        file_path = Path(file_path_str)

        if not file_path.exists():
            print(f"[{idx:3d}/100] ⚠️  File not found: {file_path.name}")
            results.append(ConversionResult(
                file_path=str(file_path),
                success=False,
                error="File not found"
            ))
            continue

        print(f"[{idx:3d}/100] 🔄 {file_path.name:50s}...", end=' ')
        result = converter.convert_file(file_path)
        results.append(result)

        if result.success:
            if result.warnings and 'Already in Format A' in result.warnings[0]:
                print(f"✓ (already)")
            else:
                print(f"✅ {result.term_id}")
        else:
            print(f"❌ {result.error[:40]}")

    end_time = datetime.now()
    duration = (end_time - start_time).total_seconds()

    # Generate summary statistics
    print("\n" + "=" * 80)
    print("📊 CONVERSION SUMMARY")
    print("=" * 80)

    successful = sum(1 for r in results if r.success)
    failed = sum(1 for r in results if not r.success)
    skipped = sum(1 for r in results if r.success and r.warnings and 'Already' in r.warnings[0])
    converted = successful - skipped

    print(f"Total Files:        {len(results):3d}")
    print(f"✅ Successful:      {successful:3d} ({100*successful/len(results):.1f}%)")
    print(f"❌ Failed:          {failed:3d} ({100*failed/len(results) if len(results) > 0 else 0:.1f}%)")
    print(f"⏭️  Already Format A: {skipped:3d} ({100*skipped/len(results) if len(results) > 0 else 0:.1f}%)")
    print(f"🔄 Newly Converted: {converted:3d} ({100*converted/len(results) if len(results) > 0 else 0:.1f}%)")
    print(f"⏱️  Duration:        {duration:.1f}s ({duration/len(results):.2f}s per file)")

    if failed > 0:
        print("\n❌ FAILED FILES:")
        for r in results:
            if not r.success:
                print(f"  - {Path(r.file_path).name}: {r.error}")

    # Write detailed log
    log_path = Path('/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-3-log.txt')
    with open(log_path, 'w') as f:
        f.write("BATCH 3 TRANSFORMATION LOG\n")
        f.write("Blockchain Domain: BC-0101 to BC-0200\n")
        f.write("=" * 80 + "\n\n")
        f.write(f"Date: {start_time.strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"Duration: {duration:.1f} seconds\n")
        f.write(f"Conversion Rate: {duration/len(results):.2f}s per file\n\n")

        f.write(f"Total Files:        {len(results)}\n")
        f.write(f"Successful:         {successful}\n")
        f.write(f"Failed:             {failed}\n")
        f.write(f"Already Format A:   {skipped}\n")
        f.write(f"Newly Converted:    {converted}\n\n")

        f.write("DETAILED RESULTS:\n")
        f.write("=" * 80 + "\n\n")

        for r in results:
            status = "✅ SUCCESS" if r.success else "❌ FAILED"
            f.write(f"{status}: {r.term_id:8s} | {r.preferred_term}\n")
            f.write(f"  File: {Path(r.file_path).name}\n")

            if r.error:
                f.write(f"  Error: {r.error}\n")
            if r.warnings:
                f.write(f"  Warnings: {', '.join(r.warnings)}\n")
            f.write("\n")

    # Write statistics JSON
    stats_path = Path('/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-3-statistics.json')
    stats = {
        "batch": 3,
        "domain": "blockchain",
        "term_range": "BC-0101 to BC-0200",
        "date": start_time.isoformat(),
        "duration_seconds": duration,
        "total_files": len(results),
        "successful": successful,
        "failed": failed,
        "already_format_a": skipped,
        "newly_converted": converted,
        "conversion_rate_per_file": duration / len(results) if len(results) > 0 else 0,
        "failed_files": [
            {
                "file": Path(r.file_path).name,
                "term_id": r.term_id,
                "error": r.error
            }
            for r in results if not r.success
        ]
    }

    with open(stats_path, 'w') as f:
        json.dump(stats, f, indent=2)

    print(f"\n📝 Log written to:        {log_path}")
    print(f"📊 Statistics written to: {stats_path}")

    return 0 if failed == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
