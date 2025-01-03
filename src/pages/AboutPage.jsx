function AboutPage() {
  return (
    <main className="content-area">
      <h1>UI Component Documentation</h1>
      <p>
        Welcome to our UI Component Documentation. This is a living document
        that helps developers understand and use our shared UI components.
      </p>

      <h2>Purpose</h2>
      <p>This documentation serves as:</p>
      <ul>
        <li>A catalog of available UI components</li>
        <li>A guide for using components correctly</li>
        <li>A reference for component props and variants</li>
        <li>A showcase of component examples</li>
      </ul>

      <h2>How to Use</h2>
      <p>Each component page includes:</p>
      <ol>
        <li>
          <strong>Description</strong> - What the component is and when to use
          it
        </li>
        <li>
          <strong>Props</strong> - All available props and their usage
        </li>
        <li>
          <strong>Examples</strong> - Code samples and common use cases
        </li>
        <li>
          <strong>Best Practices</strong> - Guidelines for proper implementation
        </li>
      </ol>
    </main>
  );
}

export default AboutPage;
