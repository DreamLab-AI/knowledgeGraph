use logseq_publisher_rust::parser::parse_logseq_page;
use std::fs;

#[test]
fn validate_with_real_ontology_files() {
    let test_files = vec![
        ("AI Alignment.md", true),
        ("AI Audit.md", true),
        ("AI Board.md", true),
        ("AI Deployment.md", true),
        ("AI Development.md", true),
        ("3D and 4D.md", false),  // Regular file
        ("424.md", false),  // Regular file
        ("ADAS.md", true),
        ("6G Network Slice.md", true),
        ("AI Adoption.md", false),  // May or may not have ontology
    ];

    let base_path = "/home/user/logseq/mainKnowledgeGraph/pages";
    let mut results = Vec::new();

    for (filename, expected_ontology) in test_files {
        let file_path = format!("{}/{}", base_path, filename);

        match fs::read_to_string(&file_path) {
            Ok(content) => {
                match parse_logseq_page(&content, filename) {
                    Ok(page) => {
                        let has_ontology = page.ontology.is_some();
                        let ontology_info = if let Some(ref ont) = page.ontology {
                            format!("term_id: {}, preferred_term: {}",
                                ont.term_id, ont.preferred_term)
                        } else {
                            "None".to_string()
                        };

                        results.push(format!(
                            "✓ {} - Parsed successfully. Ontology: {} (Expected: {}) - {}",
                            filename, has_ontology, expected_ontology, ontology_info
                        ));
                    }
                    Err(e) => {
                        results.push(format!("✗ {} - Parse error: {}", filename, e));
                    }
                }
            }
            Err(e) => {
                results.push(format!("✗ {} - File read error: {}", filename, e));
            }
        }
    }

    // Print all results
    println!("\n========== VALIDATION RESULTS ==========");
    for result in &results {
        println!("{}", result);
    }
    println!("========================================\n");

    // Fail the test if any errors occurred
    let has_errors = results.iter().any(|r| r.starts_with("✗"));
    assert!(!has_errors, "Some files failed validation");
}
