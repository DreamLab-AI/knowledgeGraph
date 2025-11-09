#!/usr/bin/env python3
"""
Batch 1 Converter: AI-Grounded Domain Ontology Files
Transforms Format B (markdown headers) to Format A (Logseq nested blocks)
"""

import re
import sys
from pathlib import Path
from typing import Dict, List, Tuple, Optional
from dataclasses import dataclass
from datetime import datetime

@dataclass
class ConversionResult:
    file_path: str
    success: bool
    error: Optional[str] = None
    warnings: List[str] = None

class OntologyConverter:
    """Converts Format B ontology files to canonical Format A"""

    def __init__(self):
        self.warnings = []
        self.term_id_pattern = re.compile(r'AI-\d+')

    def slugify(self, text: str) -> str:
        """Convert concept name to slug: 'Algorithmic Accountability' -> 'algorithmic-accountability'"""
        return text.lower().replace(' ', '-').replace('_', '-')

    def extract_metadata(self, content: str) -> Dict[str, str]:
        """Extract metadata from Format B markdown"""
        metadata = {}

        # Extract term ID
        term_id_match = self.term_id_pattern.search(content)
        if term_id_match:
            metadata['term-id'] = term_id_match.group()

        # Extract from metadata section
        metadata_section = re.search(r'## Metadata\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
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

    def extract_definition(self, content: str) -> Tuple[str, str, str]:
        """Extract primary definition, source, and authority score"""
        def_section = re.search(r'## Definition\s*\n\s*### Primary Definition\s*\n([^\n]+)', content, re.DOTALL)
        definition = def_section.group(1).strip() if def_section else ""

        source_match = re.search(r'\*\*Source\*\*:\s*([^-]+)', content)
        source = source_match.group(1).strip() if source_match else ""

        authority_match = re.search(r'Authority Score:\s*([\d.]+)', content)
        authority = authority_match.group(1) if authority_match else "0.95"

        return definition, source, authority

    def extract_relationships(self, content: str) -> Dict[str, List[str]]:
        """Extract relationships from Format B"""
        relationships = {
            'is-subclass-of': [],
            'has-part': [],
            'related-to': []
        }

        # Parse relationships section
        rel_section = re.search(r'## Relationships\s*\n(.*?)(?=\n##|\Z)', content, re.DOTALL)
        if rel_section:
            rel_text = rel_section.group(1)

            # Parent classes
            parent_match = re.search(r'### Parent Classes\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
            if parent_match:
                parents = re.findall(r'\*\*(\w+)\*\*', parent_match.group(1))
                relationships['is-subclass-of'] = parents

            # Child classes
            child_match = re.search(r'### Child Classes\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
            if child_match:
                children = re.findall(r'\*\*(\w+)\*\*', child_match.group(1))
                relationships['has-part'] = children

            # Related concepts
            related_match = re.search(r'### Related Concepts\s*\n(.*?)(?=\n###|\Z)', rel_text, re.DOTALL)
            if related_match:
                related = re.findall(r'\*\*(\w+)\*\*', related_match.group(1))
                relationships['related-to'] = related

        return relationships

    def extract_owl_axioms(self, content: str) -> str:
        """Extract OWL axioms from <details> block"""
        # Find OWL code in details block or direct clojure fence
        owl_match = re.search(r'```clojure\s*\n(.*?)\n```', content, re.DOTALL)
        if owl_match:
            return owl_match.group(1).strip()
        return ""

    def extract_about_section(self, content: str) -> str:
        """Extract rich description and use cases"""
        about_parts = []

        # Skip metadata and formal ontology, get the rest
        sections = [
            'Implementation Patterns',
            'Use Cases',
            'Technical Considerations',
            'Challenges and Solutions',
            'Best Practices',
            'Standards Alignment'
        ]

        for section in sections:
            pattern = rf'## {section}\s*\n(.*?)(?=\n##|\Z)'
            match = re.search(pattern, content, re.DOTALL)
            if match:
                about_parts.append(f"### {section}\n{match.group(1).strip()}")

        return '\n-\n'.join(about_parts) if about_parts else ""

    def infer_status(self, content: str) -> str:
        """Infer completion status from content richness"""
        if len(content) > 5000 and '## Use Cases' in content and '```clojure' in content:
            return 'complete'
        elif len(content) > 1000:
            return 'in-progress'
        else:
            return 'draft'

    def infer_maturity(self, metadata: Dict) -> str:
        """Infer maturity from authority score and content"""
        authority = float(metadata.get('authority-score', '0.5'))
        if authority >= 0.9:
            return 'mature'
        elif authority >= 0.7:
            return 'emerging'
        else:
            return 'experimental'

    def convert_to_format_a(self, file_path: Path) -> str:
        """Transform Format B file to canonical Format A"""
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Extract components
        metadata = self.extract_metadata(content)
        definition, source, authority = self.extract_definition(content)
        relationships = self.extract_relationships(content)
        owl_axioms = self.extract_owl_axioms(content)
        about_section = self.extract_about_section(content)

        # Get concept name from filename or metadata
        concept_name = metadata.get('Term ID', file_path.stem.replace('AI-', '').replace('-', ' ').title())
        if 'preferred-term' in metadata:
            concept_name = metadata.get('preferred-term', concept_name)
        else:
            # Extract from first line
            first_line = content.split('\n')[0].strip('# ')
            if first_line and not first_line.startswith('AI-'):
                concept_name = first_line

        slug = self.slugify(concept_name)
        term_id = metadata.get('term-id', metadata.get('Term ID', 'AI-0000'))

        # Infer missing fields
        status = self.infer_status(content)
        maturity = self.infer_maturity({'authority-score': authority})

        # Get OWL class from metadata or infer
        owl_class = metadata.get('Type', 'AIGovernancePrinciple')
        domain = metadata.get('Domain', 'AIEthicsDomain')
        layer = metadata.get('Layer', 'ConceptualLayer')

        # Build Format A structure
        output = f"""- ### OntologyBlock
  id:: {slug}-ontology
  collapsed:: true

  - **Identification**
    - ontology:: true
    - term-id:: {term_id}
    - preferred-term:: {concept_name}
    - source-domain:: ai-grounded
    - status:: {status}
    - version:: {metadata.get('Version', '1.0')}
    - last-updated:: {metadata.get('Last Updated', datetime.now().strftime('%Y-%m-%d'))}

  - **Definition**
    - definition:: {definition}
    - maturity:: {maturity}
    - source:: {self.format_sources(source)}
    - authority-score:: {authority}

  - **Semantic Classification**
    - owl:class:: aigo:{owl_class}
    - owl:physicality:: VirtualEntity
    - owl:role:: Process
    - owl:inferred-class:: aigo:VirtualProcess
    - belongsToDomain:: [[{domain}]]
    - implementedInLayer:: [[{layer}]]

  - #### Relationships
    id:: {slug}-relationships
"""

        # Add relationships
        if relationships['is-subclass-of']:
            output += f"    - is-subclass-of:: {', '.join([f'[[{r}]]' for r in relationships['is-subclass-of']])}\n"
        if relationships['has-part']:
            output += f"    - has-part:: {', '.join([f'[[{r}]]' for r in relationships['has-part']])}\n"
        if relationships['related-to']:
            output += f"    - related-to:: {', '.join([f'[[{r}]]' for r in relationships['related-to']])}\n"

        # Add OWL axioms
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
  {self.format_about_section(about_section)}
"""

        return output

    def format_sources(self, source: str) -> str:
        """Format source references as WikiLinks"""
        # Split by commas and wrap in brackets
        sources = [s.strip() for s in source.split(',')]
        return ', '.join([f'[[{s}]]' for s in sources if s])

    def format_about_section(self, about_text: str) -> str:
        """Format about section content with proper indentation"""
        if not about_text:
            return ""

        # Add proper indentation
        lines = about_text.split('\n')
        formatted = []
        for line in lines:
            if line.startswith('### '):
                formatted.append(f"  - {line}")
            elif line.strip():
                formatted.append(f"    {line}")
            else:
                formatted.append("  -")

        return '\n'.join(formatted)

    def convert_file(self, file_path: Path) -> ConversionResult:
        """Convert a single file and handle errors"""
        try:
            self.warnings = []

            # Skip if already in Format A
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()

            if content.startswith('- ### OntologyBlock'):
                return ConversionResult(
                    file_path=str(file_path),
                    success=True,
                    warnings=['Already in Format A - skipped']
                )

            # Convert to Format A
            converted = self.convert_to_format_a(file_path)

            # Write back to file
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(converted)

            return ConversionResult(
                file_path=str(file_path),
                success=True,
                warnings=self.warnings
            )

        except Exception as e:
            return ConversionResult(
                file_path=str(file_path),
                success=False,
                error=str(e)
            )

def main():
    """Process batch of AI-Grounded files"""

    # Read file list
    batch_file = Path('/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-1-ai-files.txt')

    with open(batch_file, 'r') as f:
        file_list = [line.strip() for line in f if line.strip()]

    print(f"📋 Batch 1 Conversion: {len(file_list)} AI-Grounded files")
    print(f"🎯 Target: Format A (Logseq nested blocks)")
    print("=" * 80)

    converter = OntologyConverter()
    results = []

    for file_path_str in file_list:
        file_path = Path(file_path_str)

        if not file_path.exists():
            print(f"⚠️  File not found: {file_path}")
            results.append(ConversionResult(
                file_path=str(file_path),
                success=False,
                error="File not found"
            ))
            continue

        print(f"🔄 Converting: {file_path.name}...", end=' ')
        result = converter.convert_file(file_path)
        results.append(result)

        if result.success:
            if result.warnings and 'Already in Format A' in result.warnings[0]:
                print("✓ (already converted)")
            else:
                print("✅")
        else:
            print(f"❌ {result.error}")

    # Generate report
    print("\n" + "=" * 80)
    print("📊 CONVERSION SUMMARY")
    print("=" * 80)

    successful = sum(1 for r in results if r.success)
    failed = sum(1 for r in results if not r.success)
    skipped = sum(1 for r in results if r.success and r.warnings and 'Already' in r.warnings[0])

    print(f"Total Files: {len(results)}")
    print(f"✅ Successful: {successful}")
    print(f"❌ Failed: {failed}")
    print(f"⏭️  Skipped (already converted): {skipped}")
    print(f"🔄 Actually converted: {successful - skipped}")

    if failed > 0:
        print("\n❌ FAILED FILES:")
        for r in results:
            if not r.success:
                print(f"  - {Path(r.file_path).name}: {r.error}")

    # Write log
    log_path = Path('/home/devuser/workspace/project/Metaverse-Ontology/swarm-coordination/batch-1-transformation-log.txt')
    with open(log_path, 'w') as f:
        f.write(f"Batch 1 Transformation Log\n")
        f.write(f"Date: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        f.write(f"=" * 80 + "\n\n")
        f.write(f"Total Files: {len(results)}\n")
        f.write(f"Successful: {successful}\n")
        f.write(f"Failed: {failed}\n")
        f.write(f"Skipped: {skipped}\n\n")

        f.write("DETAILED RESULTS:\n")
        f.write("=" * 80 + "\n")
        for r in results:
            status = "✅ SUCCESS" if r.success else "❌ FAILED"
            f.write(f"{status}: {Path(r.file_path).name}\n")
            if r.error:
                f.write(f"  Error: {r.error}\n")
            if r.warnings:
                f.write(f"  Warnings: {', '.join(r.warnings)}\n")
            f.write("\n")

    print(f"\n📝 Log written to: {log_path}")

    return 0 if failed == 0 else 1

if __name__ == '__main__':
    sys.exit(main())
