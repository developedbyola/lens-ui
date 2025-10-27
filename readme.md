# Lens UI

A modern, accessible UI component library built with PandaCSS and Ark UI.

## Features

- 🎨 **Styled with PandaCSS** - Type-safe, atomic CSS-in-JS styling
- ♿ **Accessible by Default** - Built on Ark UI's accessibility foundations
- 🚀 **TypeScript First** - Fully typed components for better developer experience
- 📦 **Tree Shakeable** - Only include what you use
- 🎯 **Headless Components** - Complete control over styling with Ark UI primitives

## Installation

```bash
# npm
npm install lens-ui

# yarn
yarn add lens-ui

# pnpm
pnpm add lens-ui

# bun
bun add lens-ui
```

## Usage

### Basic Usage

```jsx
import { Button } from "@lens-ui/react";

export default function App() {
  return <Button>Hello, World!</Button>;
}
```

### Styling

You can style Lens UI components using PandaCSS. For example, to style a button:

```jsx
import { Button } from "@lens-ui/react";

export default function App() {
  return (
    <Button
      backgroundColor="blue.60"
      color="white"
    >
      Hello, World!
    </Button>
  );
}
```

### Accessibility

Lens UI is built on top of Ark UI's accessibility foundations. This means that all components are accessible by default, and you can customize the accessibility features using the `aria-` and `data-` attributes.

For example, to add an `aria-label` to a button:

```jsx
import { Button } from "lens-ui";

export default function App() {
  return (
    <Button aria-label="Click me">
      Click me
    </Button>
  );
}
```

<!--## Contributing

Contributions are welcome! Please see the [contributing guidelines](contributing.md) for more information.-->

## License

Lens UI is licensed under the [MIT License](license.md).
