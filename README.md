# System Design in the AI Era (2026 Edition)

An open-source, diagram-first reference for software engineers. It covers foundational distributed systems, ML systems, LLM serving, RAG, agentic workflows, the Model Context Protocol (MCP), security, observability, evaluation and system design interview preparation.

**Read online:** https://saurabhraj042.github.io/ai-system-design/

## What is inside

| Module | Chapters |
|---|---|
| 1. Foundations of scalable distributed systems | Networking, storage and indexing, scalability and reliability |
| 2. Predictive ML systems | ML pipelines, feature stores and real-time inference |
| 3. Generative AI and RAG | LLM serving, advanced RAG patterns |
| 4. Agentic systems and MCP | Agent architectures, MCP, security and identity |
| 5. Operations, safety and LLMOps | Observability, evaluation and trust |
| 6. Interview masterclass | A repeatable framework and eight end-to-end designs |

Every concept is a short page (about five minutes or less) with a diagram, trade-offs and key takeaways. Every chapter ends with practice questions and the sources used.

## Run it locally

You need [mdBook](https://rust-lang.github.io/mdBook/) 0.5 or newer.

```bash
mdbook serve --open
```

Diagrams are written in [Mermaid](https://mermaid.js.org/) inside ` ```mermaid ` code blocks. Mermaid is bundled in `theme/`, so no extra plugin is needed.

## Deploy

Pushing to `main` builds the book and publishes it with GitHub Actions. In the repository settings, set **Pages → Source** to **GitHub Actions** once.

## Contributing

Spotted a mistake or an outdated fact? Please open an issue or a pull request. Cite a source for any factual change.
