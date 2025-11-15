# Technical Requirements - Logseq Publish-SPA Rust/WASM Port

## Project Goals

**Primary Objective:** Complete the Rust/WASM port of the Logseq publish-spa converter to achieve feature parity with the original ClojureScript implementation while providing performance improvements.

**Success Criteria:**
1. ✅ Successfully parse all valid Logseq markdown graphs
2. ✅ Generate functional Single Page Application output
3. ✅ Match or exceed original performance
4. ✅ Maintain compatibility with GitHub Actions workflow
5. ✅ Provide NPM-installable CLI tool

## Functional Requirements

### FR1: Graph Parsing

**FR1.1: File Discovery and Loading**
- MUST traverse directory structure recursively
- MUST find all .md files in pages/ and journals/
- MUST read logseq/config.edn
- MUST load logseq/custom.css if present
- MUST respect :hidden configuration
- SHOULD handle symlinks safely
- SHOULD report progress for large graphs

**FR1.2: Markdown Parsing**
- MUST parse frontmatter properties (YAML format)
- MUST parse block hierarchy based on indentation
- MUST support 2-space and tab indentation
- MUST extract wiki-links [[page]]
- MUST extract tags #tag
- MUST handle nested blocks recursively
- MUST preserve block order
- SHOULD handle malformed markdown gracefully

**FR1.3: Org-mode Support (Optional)**
- SHOULD parse basic Org-mode syntax
- SHOULD convert Org to internal format
- MAY delegate to external library

**FR1.4: Configuration Parsing**
- MUST parse EDN format (config.edn)
- MUST extract publishing configuration
- MUST apply :publishing/all-pages-public?
- MUST respect :hidden file patterns
- MUST load theme settings
- SHOULD validate configuration values

### FR2: Graph Construction

**FR2.1: Page Management**
- MUST store all parsed pages indexed by path
- MUST handle duplicate paths (last wins)
- MUST compute backlinks bidirectionally
- MUST track all page relationships
- SHOULD optimize for lookup performance

**FR2.2: Link Resolution**
- MUST resolve [[wiki-links]] to page paths
- MUST handle page aliases
- MUST create placeholders for missing targets
- SHOULD warn about broken links
- SHOULD normalize link formats

**FR2.3: Graph Analytics**
- MUST compute page count
- MUST compute total block count
- MUST compute total link count
- MUST identify orphan pages
- SHOULD compute graph depth
- SHOULD identify hub pages (high link count)

### FR3: Export and Publishing

**FR3.1: HTML Generation**
- MUST generate valid HTML5
- MUST include proper DOCTYPE and metadata
- MUST render all pages
- MUST preserve block hierarchy in HTML
- MUST maintain link integrity
- MUST be mobile responsive

**FR3.2: Styling**
- MUST apply theme (light/dark)
- MUST apply accent color
- MUST include custom.css if present
- MUST support custom CSS URL
- SHOULD optimize CSS output
- SHOULD support CSS variables for theming

**FR3.3: JavaScript**
- MUST include navigation logic
- MUST handle wiki-link clicks
- MUST load pages dynamically (SPA)
- SHOULD include graph visualization (optional)
- SHOULD include search functionality
- SHOULD be progressively enhanced

**FR3.4: Asset Handling**
- MUST copy Logseq static assets
- MUST copy graph assets (images, etc.)
- MUST preserve asset directory structure
- SHOULD optimize images
- SHOULD minify CSS/JS
- SHOULD generate asset manifest

### FR4: Content Rendering

**FR4.1: Basic Markdown**
- MUST render **bold** as `<strong>`
- MUST render *italic* as `<em>`
- MUST render links [[page]] as `<a>`
- MUST render tags #tag as styled spans
- MUST render code blocks with syntax highlighting
- MUST render lists (ordered/unordered)

**FR4.2: Logseq Extensions**
- MUST render block references ((id))
- MUST render block embeds {{embed ((id))}}
- MUST render properties as key-value pairs
- MUST render task markers (TODO, DOING, etc.)
- SHOULD render timestamps
- SHOULD render queries (read-only)
- SHOULD render macros

**FR4.3: Media Embedding**
- MUST render {{video URL}}
- MUST render {{youtube ID}}
- MUST render images
- SHOULD render {{audio}}
- SHOULD render {{pdf}}
- SHOULD support responsive embeds

**FR4.4: Advanced Formatting**
- MUST render #+BEGIN_QUOTE blocks
- MUST render #+BEGIN_SRC code blocks
- SHOULD render tables
- SHOULD render LaTeX math
- SHOULD render diagrams (mermaid, etc.)

### FR5: CLI and Integration

**FR5.1: Command Line Interface**
- MUST accept output directory argument
- MUST support --directory flag
- MUST support --static-directory flag
- MUST support --theme-mode flag
- MUST support --accent-color flag
- MUST support --help flag
- SHOULD support --version flag
- SHOULD support --verbose flag

**FR5.2: NPM Package**
- MUST be installable via npm
- MUST provide bin entry point
- MUST work cross-platform (Windows/macOS/Linux)
- SHOULD include WASM binaries
- SHOULD have minimal dependencies

**FR5.3: GitHub Action**
- MUST work as GitHub Action
- MUST accept action inputs
- MUST output to specified directory
- MUST support version pinning
- MUST handle CI environment

**FR5.4: Error Handling**
- MUST validate input directory
- MUST report missing config.edn
- MUST report parse errors clearly
- MUST exit with appropriate codes
- SHOULD continue on non-critical errors
- SHOULD collect all errors before failing

### FR6: WASM Interface

**FR6.1: JavaScript API**
- MUST expose `LogseqPublisher` class
- MUST provide `parse_files()` method
- MUST provide `get_page()` method
- MUST provide `get_backlinks()` method
- MUST provide `export_html()` method
- SHOULD provide streaming APIs
- SHOULD minimize serialization overhead

**FR6.2: Data Formats**
- MUST accept JSON for file input
- MUST accept JSON for configuration
- MUST return JSON for graph data
- SHOULD support binary formats (optional)
- SHOULD validate JSON schemas

## Non-Functional Requirements

### NFR1: Performance

**NFR1.1: Parsing Performance**
- MUST parse 1000 pages in <1 second
- MUST handle graphs up to 100,000 pages
- SHOULD use parallel parsing where safe
- SHOULD stream large files
- TARGET: 10x faster than original

**NFR1.2: Export Performance**
- MUST export 1000 pages in <2 seconds
- SHOULD use parallel rendering
- SHOULD minimize memory allocations
- TARGET: 5x faster than original

**NFR1.3: WASM Performance**
- MUST have <100ms initialization time
- MUST minimize WASM binary size (<1MB)
- SHOULD optimize for browser execution
- SHOULD use WASM SIMD where available

**NFR1.4: Memory Usage**
- MUST handle graphs up to 1GB in 2GB RAM
- SHOULD have linear memory growth
- SHOULD release memory after export
- TARGET: 50% less memory than original

### NFR2: Reliability

**NFR2.1: Error Handling**
- MUST never panic in WASM
- MUST handle all I/O errors gracefully
- MUST validate all inputs
- SHOULD provide helpful error messages
- SHOULD include error recovery suggestions

**NFR2.2: Data Integrity**
- MUST preserve all content during conversion
- MUST maintain link integrity
- MUST handle Unicode correctly
- MUST escape HTML properly
- MUST not lose data on errors

**NFR2.3: Compatibility**
- MUST work with Logseq v0.9.2+
- MUST handle all valid Logseq graphs
- SHOULD be forward compatible
- SHOULD migrate gracefully

### NFR3: Maintainability

**NFR3.1: Code Quality**
- MUST pass clippy lints
- MUST have rustfmt formatting
- MUST have >80% test coverage
- SHOULD follow Rust idioms
- SHOULD have comprehensive docs

**NFR3.2: Testing**
- MUST have unit tests for all modules
- MUST have integration tests
- MUST have property-based tests
- MUST have WASM tests
- SHOULD have benchmarks
- SHOULD have fuzzing tests

**NFR3.3: Documentation**
- MUST have API documentation
- MUST have usage examples
- MUST have architecture docs
- SHOULD have contribution guide
- SHOULD have migration guide

### NFR4: Portability

**NFR4.1: Platform Support**
- MUST compile on Linux (x86_64)
- MUST compile on macOS (x86_64, aarch64)
- MUST compile on Windows (x86_64)
- MUST compile to wasm32-unknown-unknown
- SHOULD support other architectures

**NFR4.2: Runtime Requirements**
- MUST work with Node.js 18+
- MUST work in modern browsers
- SHOULD have minimal dependencies
- SHOULD vendor critical dependencies

### NFR5: Security

**NFR5.1: Input Validation**
- MUST sanitize all HTML output
- MUST validate file paths (no traversal)
- MUST limit resource consumption
- SHOULD timeout on infinite loops
- SHOULD reject malicious patterns

**NFR5.2: Dependency Security**
- MUST use maintained dependencies
- MUST pass security audits
- SHOULD minimize dependency tree
- SHOULD pin dependency versions

## Technical Constraints

### TC1: Language and Runtime
- MUST use Rust (stable channel)
- MUST compile to WASM via wasm-bindgen
- MUST support Node.js for CLI
- MAY use Tokio for async (optional)

### TC2: Dependencies
- MUST use pulldown-cmark for markdown
- MUST use serde for serialization
- MUST use wasm-bindgen for WASM
- SHOULD minimize dependency count
- SHOULD use well-maintained crates

### TC3: Build System
- MUST use Cargo as build system
- MUST support `cargo build --release`
- MUST support `cargo test`
- MUST support `wasm-pack build`
- SHOULD support cross-compilation

### TC4: File Formats
- MUST support Markdown (.md)
- MUST support EDN (.edn)
- SHOULD support Org-mode (.org)
- MUST preserve UTF-8 encoding

### TC5: Size Constraints
- WASM binary SHOULD be <1MB compressed
- NPM package SHOULD be <5MB
- Generated HTML SHOULD be <100KB per page
- CSS SHOULD be <50KB

## Implementation Priorities

### Phase 1: Core Functionality (MVP)
1. ✅ Basic markdown parsing
2. ✅ Graph construction
3. ✅ HTML export
4. ✅ WASM bindings
5. 🔄 File system integration
6. 🔄 CLI wrapper
7. 🔄 NPM packaging

### Phase 2: Feature Parity
8. 📋 EDN config parsing
9. 📋 Theme/color configuration
10. 📋 Custom CSS integration
11. 📋 Asset copying
12. 📋 Public/private filtering
13. 📋 Advanced markdown features

### Phase 3: Enhancements
14. 📋 Org-mode support
15. 📋 Graph visualization
16. 📋 Search functionality
17. 📋 Performance optimizations
18. 📋 Comprehensive testing

### Phase 4: Polish
19. 📋 Documentation
20. 📋 Migration tools
21. 📋 Benchmarking
22. 📋 CI/CD pipeline

**Legend:**
- ✅ Complete
- 🔄 In Progress
- 📋 Not Started

## Testing Requirements

### Unit Tests
- Parser: All parsing functions
- Graph: All graph operations
- Exporter: All rendering functions
- WASM: All bindings

### Integration Tests
- Parse and export small graph
- Parse and export medium graph
- Handle missing files
- Handle malformed markdown
- Configuration variations

### End-to-End Tests
- Real Logseq graph export
- GitHub Action workflow
- NPM package installation
- Cross-platform CLI execution

### Property Tests
- Random markdown generation
- Graph invariant checking
- HTML validity
- Link integrity

### Performance Tests
- Benchmark parsing (small/medium/large)
- Benchmark export (small/medium/large)
- Memory profiling
- WASM overhead measurement

### Compatibility Tests
- Test with Logseq example graphs
- Test with community graphs
- Test with edge cases
- Test with historical versions

## Documentation Requirements

### User Documentation
- Installation guide
- CLI usage guide
- Configuration reference
- Examples and tutorials
- Troubleshooting guide
- Migration from original

### Developer Documentation
- Architecture overview
- Module documentation
- API reference
- Contributing guide
- Testing guide
- Release process

### Code Documentation
- Module-level docs
- Function-level docs
- Example code
- Safety documentation
- Performance notes

## Acceptance Criteria

### Minimum Viable Product (MVP)
- ✅ Parse basic markdown graphs
- ✅ Build graph with backlinks
- ✅ Export to HTML
- ✅ WASM bindings work
- 🔄 CLI tool functional
- 🔄 NPM package installable

### Feature Complete
- 📋 All FR1-FR5 requirements met
- 📋 >80% test coverage
- 📋 Documentation complete
- 📋 GitHub Action works
- 📋 Performance targets met

### Production Ready
- 📋 All requirements met
- 📋 Security audit passed
- 📋 Real-world testing complete
- 📋 Migration guide available
- 📋 Community feedback addressed

## Risk Analysis

### Technical Risks
1. **EDN Parsing Complexity**
   - Mitigation: Use existing EDN library or write minimal parser
   - Fallback: JSON config file support

2. **WASM Size Concerns**
   - Mitigation: Aggressive optimization, feature gating
   - Fallback: Split into multiple modules

3. **Performance Regression**
   - Mitigation: Continuous benchmarking
   - Fallback: Identify and optimize bottlenecks

### Integration Risks
1. **GitHub Action Compatibility**
   - Mitigation: Thorough testing in CI
   - Fallback: Maintain original as backup

2. **NPM Package Issues**
   - Mitigation: Test on multiple platforms
   - Fallback: Provide platform-specific builds

### Maintenance Risks
1. **Logseq Format Changes**
   - Mitigation: Version detection and compatibility layers
   - Fallback: Pin to specific Logseq version

2. **Dependency Breakage**
   - Mitigation: Pin versions, test upgrades
   - Fallback: Vendor critical dependencies
