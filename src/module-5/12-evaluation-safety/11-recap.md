# Recap & Practice

## Recap

- An **eval** is a repeatable test with a task, a trial and a grader. Run offline evals before release and online evals after.
- Build **datasets** from real failures first, then add synthetic cases with human review. Include "should" and "should not" cases.
- Choose **metrics by task**: precision and recall for classifiers, rubrics for text, retrieval plus faithfulness for RAG, outcomes and pass^k for agents.
- An **LLM judge** scales grading but has position, verbosity and self-enhancement bias. Validate it against human labels.
- **Benchmarks** compare models in general. Contamination, saturation and task mismatch limit them, so decide with your own evals.
- Run evals in **CI** as a quality gate. Keep PR checks fast; run big suites and red team scans on a schedule.
- **Red teaming** attacks your own system, and every attack found becomes a regression test.
- **Guardrails** at input, retrieval, tool and output points reduce harm, but cost latency and can over-refuse.
- Reduce **hallucination** in layers and test with unanswerable questions. Route risky outputs to humans and document your limits.

## Practice questions

1. You change the system prompt of a support bot. How do you prove quality did not drop? *Hint: golden set, offline eval in CI, pass-rate gate, then a small online rollout.*
2. Your LLM judge says new answers are better, but users disagree. What do you check? *Hint: position and verbosity bias, agreement with human labels, rubric drift.*
3. Design the eval plan for a RAG assistant over company policy documents. *Hint: separate retrieval and generation metrics, faithfulness, unanswerable questions, access-control tests.*
4. An agent books travel. How do you evaluate it reliably? *Hint: grade the final state, run many trials, report pass^k, track cost and steps.*
5. How would you add safety layers to a public chatbot without making it annoying? *Hint: layered checks, measure false refusals, parallel checks, human escalation path.*
6. A model tops a public leaderboard. Should you adopt it? *Hint: contamination, task mismatch, run your own eval set, cost and latency.*

## Sources

- Zheng et al., Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena: https://arxiv.org/abs/2306.05685
- Wang et al., Large Language Models are not Fair Evaluators: https://arxiv.org/abs/2305.17926
- Shankar et al., Who Validates the Validators?: https://arxiv.org/abs/2404.12272
- Anthropic, Demystifying evals for AI agents: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- OpenAI, Evaluation best practices: https://developers.openai.com/api/docs/guides/evaluation-best-practices
- Hamel Husain, blog post on LLM evals: https://hamel.dev/blog/posts/evals/
- Ragas metrics and test set generation: https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/ and https://docs.ragas.io/en/stable/getstarted/rag_testset_generation/
- scikit-learn, precision, recall and F-score: https://scikit-learn.org/stable/modules/generated/sklearn.metrics.precision_recall_fscore_support.html
- MMLU: https://arxiv.org/abs/2009.03300
- HELM: https://arxiv.org/abs/2211.09110
- SWE-bench: https://arxiv.org/abs/2310.06770
- tau-bench: https://arxiv.org/abs/2406.12045
- Deng et al., data contamination in benchmarks: https://arxiv.org/abs/2311.09783
- The Leaderboard Illusion: https://arxiv.org/abs/2504.20879
- promptfoo CI/CD and assertions: https://www.promptfoo.dev/docs/integrations/ci-cd/ and https://www.promptfoo.dev/docs/configuration/expected-outputs/
- Anthropic, Red Teaming Language Models to Reduce Harms: https://arxiv.org/abs/2209.07858
- PyRIT documentation: https://microsoft.github.io/PyRIT/1.1.0/
- Anthropic, Constitutional Classifiers: https://www.anthropic.com/research/constitutional-classifiers
- Llama Guard: https://arxiv.org/abs/2312.06674
- NVIDIA NeMo Guardrails: https://docs.nvidia.com/nemo/guardrails/latest/about/overview.html
- Amazon Bedrock Guardrails: https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html
- OWASP Top 10 for LLM Applications: https://genai.owasp.org/llm-top-10/
- Huang et al., Survey on hallucination in LLMs: https://arxiv.org/abs/2311.05232
- Kalai et al., Why Language Models Hallucinate: https://arxiv.org/abs/2509.04664
- Anthropic, Reduce hallucinations: https://platform.claude.com/docs/en/test-and-evaluate/strengthen-guardrails/reduce-hallucinations
- Mitchell et al., Model Cards for Model Reporting: https://arxiv.org/abs/1810.03993
- NIST AI Risk Management Framework: https://www.nist.gov/itl/ai-risk-management-framework
- Indian Infrastructure, MeitY unveils India AI Governance Guidelines: https://indianinfrastructure.com/2025/11/07/meity-unveils-india-ai-governance-guidelines-under-indiaai-mission/
