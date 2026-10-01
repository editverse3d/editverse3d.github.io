# EditVerse3D project website

## Maintenance

- Maintain this website locally and publish through GitHub Pages, independently
  of the research server.
- Author information follows the user-confirmed version: Guosheng Lin is the
  corresponding author. Keep this convention when reconciling external metadata.
- Keep paper and supplementary PDF copies out of this repository; use the
  existing shared Google Drive files.
- The user manages Google Drive uploads. For revised final PDFs, provide the
  files for the user to upload as new versions of the existing shared files.
  Keep the links stable and check public access after an update.
- When changing shared resource links or formal citation information, check
  consistency with `../cuteyyt.github.io/`.
- Enable the Code link only when a verified public repository URL is provided.

## Local preview

Run this command from the repository root:

```text
python -m http.server 0 --bind 127.0.0.1
```

Port `0` selects an available port; use the URL printed in the terminal.
No build step is needed.

Keep temporary review artifacts in the ignored `output/` directory, outside Git
and published content.

## Publication

- GitHub Pages automatically publishes the root directory of `main`; no local
  build or deployment script is needed. Pushing `main` triggers publication.
- Obtain explicit user authorization before pushing or publishing. Successful
  local review alone does not authorize a remote update. After publication,
  check the deployment result and live website.
