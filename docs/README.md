Presentation conversion
======================

This folder contains presentation source in Markdown (`presentation.md`) and a project report (`report.md`).

To convert the markdown slides into a PowerPoint `.pptx` file, use Pandoc (must be installed):

```bash
# Install pandoc if needed (platform-specific)
# Example on Ubuntu/Debian:
# sudo apt install pandoc

# Convert to PPTX
pandoc docs/presentation.md -t pptx -o docs/presentation.pptx
```

Alternatively, use Reveal.js to present the slides directly in a browser using tools such as `reveal-md` or by converting `presentation.md` to HTML.

If you want me to generate the `.pptx` file here, I can attempt to create one programmatically (requires python and python-pptx in the environment), or provide the conversion command and produce a downloadable file locally if you run the command.
