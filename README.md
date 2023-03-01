# Getting Started with delightree-editor

An editor library based on tiptap[https://tiptap.dev/], using internally for handling all the rich text type input.

## Structure

- example (example app to test out the editor functionality)
- src (editor logic)
  - index.js
  - editor.js
  - readonly.tsx
  - components (ui of custom made elements)
  - extensions (custom made extensions)

## Extensions and functionalities

- Slash command functionality enables to choose across the different elements of editor.
- Slash Options:
  - Paragraph
  - Heading 1
  - Heading 2
  - Heading 3
  - Bulleted List
  - Numbered List
  - To-do List
  - Quote
  - Divider
  - Table
  - Image (Resizbale)
  - Video (Resizable and currently youtube url is supported)
  - Google Form
  - Chapter Link
  - Paper form
  - Gallery
- Inline Options
  - Bold
  - Italic
  - Strike-through
  - Underline
  - Highlight
  - Left Align
  - Right Align
  - Center Align
  - Link

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the example app to test out the editor
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm build && npm run preversion`

compile and build the library for publish
