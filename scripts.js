const projectsData = [
    {
      id: 'project1',
      title: 'E-Commerce Dashboard',
      description: 'A responsive admin dashboard for managing online store inventory, orders, and customers.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: true,
      category: 'web'
    },
    {
      id: 'project2',
      title: 'Weather App',
      description: 'A beautiful weather application that shows current conditions and forecasts for any location.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['JavaScript', 'API', 'CSS3'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: true,
      category: 'web'
    },
    {
      id: 'project3',
      title: 'Task Management App',
      description: 'A productivity app for managing tasks, projects, and collaborating with team members.',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'Firebase', 'Mobile'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: true,
      category: 'mobile'
    },
    {
      id: 'project4',
      title: 'Portfolio Website',
      description: 'A minimalist portfolio website template for creative professionals and developers.',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['HTML', 'CSS', 'JavaScript'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: false,
      category: 'web'
    },
    {
      id: 'project5',
      title: 'Fitness Tracker',
      description: 'A mobile app for tracking workouts, nutrition, and health metrics.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Flutter', 'Dart', 'Mobile'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: false,
      category: 'mobile'
    },
    {
      id: 'project6',
      title: 'Date Picker Component',
      description: 'A reusable date picker widget with customizable themes and localization support.',
      image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['JavaScript', 'Component', 'UI'],
      demoUrl: 'https://example.com/demo',
      repoUrl: 'https://github.com/example/project',
      featured: false,
      category: 'widget'
    }
  ];
  
  const blogPostsData = [
    {
      id: 'post1',
      title: 'Getting Started with React Hooks',
      slug: 'getting-started-with-react-hooks',
      excerpt: 'Learn how to use React hooks to manage state and side effects in functional components.',
      date: 'June 15, 2023',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'JavaScript', 'Web Development'],
      content: `
        <div class="blog-post-image-container">
          <img src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="React Hooks">
        </div>
        
        <div class="blog-post-header">
          <div class="blog-post-meta-container">
            <time class="blog-post-date">
              <i data-lucide="calendar"></i>
              June 15, 2023
            </time>
            <div class="blog-post-tags">
              <span class="tag">React</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Web Development</span>
            </div>
          </div>
          <h1 class="blog-post-heading">Getting Started with React Hooks</h1>
        </div>
        
        <div class="blog-post-prose">
          <p>
            React Hooks were introduced in React 16.8 as a way to use state and other React features without writing a class component. This was a game-changer for React developers, making functional components more powerful and reducing the need for complex patterns like higher-order components and render props.
          </p>
          
          <h2>What are React Hooks?</h2>
          <p>
            Hooks are functions that let you "hook into" React state and lifecycle features from functional components. They don't work inside classes — they let you use React without classes.
          </p>
          <p>
            The most commonly used hooks are useState and useEffect. useState allows you to add state to your functional components, while useEffect lets you perform side effects (like data fetching, subscriptions, or manually changing the DOM).
          </p>
          
          <h2>The useState Hook</h2>
          <p>
            The useState hook lets you add state to your functional components. Here's a simple example:
          </p>
          <pre><code>import React, { useState } from 'react';
  
  const Counter = () => {
    const [count, setCount] = useState(0);
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  };</code></pre>
          <p>
            In this example, useState returns a pair: the current state value (count) and a function that lets you update it (setCount). You can call this function from an event handler or elsewhere.
          </p>
          
          <h2>The useEffect Hook</h2>
          <p>
            The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.
          </p>
          <pre><code>import React, { useState, useEffect } from 'react';
  
  const Example = () => {
    const [count, setCount] = useState(0);
    
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      // Update the document title using the browser API
      document.title = \`You clicked \${count} times\`;
    });
    
    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  };</code></pre>
          <p>
            By default, React runs the effects after every render — including the first render. However, you can optimize performance by skipping effects if certain values haven't changed between renders.
          </p>
          
          <h2>Conclusion</h2>
          <p>
            React Hooks offer a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. They don't fundamentally change how React works, but they do provide a more ergonomic way to reuse stateful logic between components.
          </p>
          <p>
            If you're new to React, or have been using class components and want to modernize your code, learning hooks is definitely worth your time.
          </p>
        </div>
      `
    },
    {
      id: 'post2',
      title: 'Responsive Design Best Practices',
      slug: 'responsive-design-best-practices',
      excerpt: 'Essential tips and techniques for creating websites that work well on all devices and screen sizes.',
      date: 'May 22, 2023',
      image: 'https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['CSS', 'Design', 'Responsive'],
      content: `
        <div class="blog-post-image-container">
          <img src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Responsive Design">
        </div>
        
        <div class="blog-post-header">
          <div class="blog-post-meta-container">
            <time class="blog-post-date">
              <i data-lucide="calendar"></i>
              May 22, 2023
            </time>
            <div class="blog-post-tags">
              <span class="tag">CSS</span>
              <span class="tag">Design</span>
              <span class="tag">Responsive</span>
            </div>
          </div>
          <h1 class="blog-post-heading">Responsive Design Best Practices</h1>
        </div>
        
        <div class="blog-post-prose">
          <p>
            In today's multi-device world, responsive web design is no longer optional—it's essential. Users expect websites to work seamlessly across devices of all sizes, from smartphones to desktop monitors. This article covers key best practices for creating responsive designs that provide an optimal viewing experience.
          </p>
          
          <h2>Use a Mobile-First Approach</h2>
          <p>
            Start your design process with the mobile experience and then progressively enhance for larger screens. This approach ensures that you focus on the essential content and functionality first, which typically leads to better user experiences across all devices.
          </p>
          <p>
            In CSS, this means writing your base styles for mobile devices, then using media queries to add styles for larger screens:
          </p>
          <pre><code>/* Base styles for mobile */
  .container {
    padding: 15px;
  }
  
  /* Styles for larger screens */
  @media (min-width: 768px) {
    .container {
      padding: 30px;
    }
  }</code></pre>
          
          <h2>Use Flexible Grid Layouts</h2>
          <p>
            Create layouts that can adapt to different screen sizes using flexible grid systems. CSS Grid and Flexbox are powerful tools for creating responsive layouts without relying heavily on media queries.
          </p>
          <pre><code>.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }</code></pre>
          <p>
            This grid automatically adjusts the number of columns based on the available space, ensuring your layout works across different screen sizes.
          </p>
          
          <h2>Make Images Responsive</h2>
          <p>
            Ensure images scale properly within their containers by using:
          </p>
          <pre><code>img {
    max-width: 100%;
    height: auto;
  }</code></pre>
          <p>
            For more advanced cases, use the picture element or srcset attribute to serve different image sizes based on the device:
          </p>
          <pre><code>&lt;img srcset="image-sm.jpg 320w,
               image-md.jpg 768w,
               image-lg.jpg 1280w"
       sizes="(max-width: 320px) 280px,
              (max-width: 768px) 720px,
              1200px"
       src="image-lg.jpg" alt="Responsive image"&gt;</code></pre>
          
          <h2>Use Relative Units</h2>
          <p>
            Prefer relative units like percentages, ems, rems, vw, and vh over fixed units like pixels. This allows your layout to scale proportionally based on screen size or font size.
          </p>
          <pre><code>.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .heading {
    font-size: 2rem; /* Relative to root font size */
    margin-bottom: 1.5em; /* Relative to the element's font size */
  }</code></pre>
          
          <h2>Test Across Devices</h2>
          <p>
            Regularly test your designs on actual devices or using device emulators in browser developer tools. Pay particular attention to:
          </p>
          <ul>
            <li>Navigation and menus</li>
            <li>Touch targets (ensure they're large enough)</li>
            <li>Text readability</li>
            <li>Page load times</li>
            <li>Form usability</li>
          </ul>
          
          <h2>Optimize Performance</h2>
          <p>
            Performance is crucial for mobile users who may have slower connections:
          </p>
          <ul>
            <li>Minimize HTTP requests</li>
            <li>Optimize and compress images</li>
            <li>Use system fonts where possible</li>
            <li>Implement lazy loading for images and non-critical content</li>
            <li>Minify CSS and JavaScript</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>
            Responsive design isn't just about making things "work" on different devices—it's about creating optimal experiences regardless of how users access your site. By following these best practices, you'll be well on your way to creating websites that are truly responsive and user-friendly.
          </p>
        </div>
      `
    },
    {
      id: 'post3',
      title: 'Introduction to TypeScript',
      slug: 'introduction-to-typescript',
      excerpt: 'Discover how TypeScript can improve your JavaScript development with static typing and enhanced tooling.',
      date: 'April 10, 2023',
      image: 'https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      content: `
        <div class="blog-post-image-container">
          <img src="https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="TypeScript Code">
        </div>
        
        <div class="blog-post-header">
          <div class="blog-post-meta-container">
            <time class="blog-post-date">
              <i data-lucide="calendar"></i>
              April 10, 2023
            </time>
            <div class="blog-post-tags">
              <span class="tag">TypeScript</span>
              <span class="tag">JavaScript</span>
              <span class="tag">Programming</span>
            </div>
          </div>
          <h1 class="blog-post-heading">Introduction to TypeScript</h1>
        </div>
        
        <div class="blog-post-prose">
          <p>
            TypeScript has become increasingly popular in the JavaScript ecosystem, offering static typing and other features that can help you write more robust code. In this article, we'll explore what TypeScript is, why you might want to use it, and how to get started.
          </p>
          
          <h2>What is TypeScript?</h2>
          <p>
            TypeScript is a strongly typed programming language that builds on JavaScript. It adds static type definitions, which can help you catch errors early during development rather than at runtime. TypeScript code compiles to plain JavaScript, which means it can run in any JavaScript environment (browsers, Node.js, etc.).
          </p>
          
          <h2>Why Use TypeScript?</h2>
          <p>
            There are several benefits to using TypeScript:
          </p>
          <ul>
            <li><strong>Early Error Detection:</strong> The type system helps you catch errors during development rather than at runtime.</li>
            <li><strong>Better IDE Support:</strong> TypeScript enables features like autocompletion, type checking, and refactoring tools in your editor.</li>
            <li><strong>Self-Documenting Code:</strong> Type annotations serve as documentation, making your code more readable and understandable.</li>
            <li><strong>Safer Refactoring:</strong> The type system helps ensure that changes don't break existing functionality.</li>
            <li><strong>Enhanced Productivity:</strong> While there's a learning curve, TypeScript can boost productivity in the long run by catching issues early.</li>
          </ul>
          
          <h2>Getting Started</h2>
          <p>
            To start using TypeScript, you'll need to install it via npm:
          </p>
          <pre><code>npm install -g typescript</code></pre>
          <p>
            Once installed, you can create a TypeScript file (with a .ts extension) and compile it to JavaScript:
          </p>
          <pre><code>// greeter.ts
  function greet(person: string) {
    return "Hello, " + person;
  }
  
  console.log(greet("World"));</code></pre>
          <p>
            Then compile it using the TypeScript compiler:
          </p>
          <pre><code>tsc greeter.ts</code></pre>
          <p>
            This will generate a greeter.js file that you can run with Node.js or include in a web page.
          </p>
          
          <h2>Basic Type Annotations</h2>
          <p>
            TypeScript allows you to add type annotations to specify what type a variable should be:
          </p>
          <pre><code>// Basic types
  let isDone: boolean = false;
  let decimal: number = 6;
  let color: string = "blue";
  let list: number[] = [1, 2, 3];
  let x: [string, number] = ["hello", 10]; // Tuple
  
  // Object type
  interface Person {
    firstName: string;
    lastName: string;
    age?: number; // Optional property
  }
  
  function greetPerson(person: Person) {
    return \`Hello, \${person.firstName} \${person.lastName}\`;
  }
  
  // Function types
  function add(x: number, y: number): number {
    return x + y;
  }</code></pre>
          
          <h2>Type Inference</h2>
          <p>
            TypeScript can often infer the types automatically, so you don't always have to explicitly annotate your code:
          </p>
          <pre><code>// TypeScript infers that 'message' is a string
  let message = "Hello, World!";
  
  // TypeScript infers the return type as number
  function multiply(x: number, y: number) {
    return x * y;
  }</code></pre>
          
          <h2>Integrating with Existing JavaScript</h2>
          <p>
            One of TypeScript's strengths is its gradual adoption path. You can:
          </p>
          <ul>
            <li>Rename .js files to .ts files</li>
            <li>Add type annotations gradually</li>
            <li>Use declaration files (.d.ts) to provide type information for libraries</li>
            <li>Use the "any" type to opt-out of type checking for specific variables</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>
            TypeScript offers a powerful type system on top of JavaScript, helping you catch errors early and write more maintainable code. While there's a learning curve, the long-term benefits in code quality and developer productivity make it worth considering for your next project.
          </p>
          <p>
            If you're already comfortable with JavaScript, TypeScript is a natural next step that can help you write more robust applications with better tooling support.
          </p>
        </div>
      `
    },
    {
      id: 'post4',
      title: 'CSS Grid vs Flexbox: When to Use Each',
      slug: 'css-grid-vs-flexbox',
      excerpt: 'A comparison of CSS Grid and Flexbox, with guidelines on when to use each layout system for optimal results.',
      date: 'March 5, 2023',
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['CSS', 'Web Development', 'Layout'],
      content: `
        <div class="blog-post-image-container">
          <img src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="CSS Grid vs Flexbox">
        </div>
        
        <div class="blog-post-header">
          <div class="blog-post-meta-container">
            <time class="blog-post-date">
              <i data-lucide="calendar"></i>
              March 5, 2023
            </time>
            <div class="blog-post-tags">
              <span class="tag">CSS</span>
              <span class="tag">Web Development</span>
              <span class="tag">Layout</span>
            </div>
          </div>
          <h1 class="blog-post-heading">CSS Grid vs Flexbox: When to Use Each</h1>
        </div>
        
        <div class="blog-post-prose">
          <p>
            CSS Grid and Flexbox are powerful layout systems that have revolutionized how we build web layouts. Both have their strengths and ideal use cases. This article explores when to use each layout system to create efficient and maintainable designs.
          </p>
          
          <h2>Understanding the Fundamental Difference</h2>
          <p>
            The most basic distinction between Grid and Flexbox is:
          </p>
          <ul>
            <li><strong>Flexbox</strong> is designed for one-dimensional layouts (either rows OR columns)</li>
            <li><strong>Grid</strong> is designed for two-dimensional layouts (rows AND columns)</li>
          </ul>
          <p>
            This core difference guides most decisions about which to use in different scenarios.
          </p>
          
          <h2>When to Use Flexbox</h2>
          <p>
            Flexbox excels in these scenarios:
          </p>
          
          <h3>1. For Components and Small-Scale Layouts</h3>
          <p>
            Flexbox is perfect for UI elements and components like:
          </p>
          <ul>
            <li>Navigation menus</li>
            <li>Form controls</li>
            <li>Card components</li>
            <li>Media objects (image with text)</li>
            <li>Button groups</li>
          </ul>
          <pre><code>.navigation {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .button-group {
    display: flex;
    gap: 8px;
  }</code></pre>
          
          <h3>2. When Content Should Determine Layout</h3>
          <p>
            Flexbox is content-first, making it ideal when:
          </p>
          <ul>
            <li>You want elements to be sized based on their content</li>
            <li>You need elements to expand/shrink dynamically</li>
            <li>The exact number of items is unknown or might change</li>
          </ul>
          
          <h3>3. For Alignment-Heavy Layouts</h3>
          <p>
            Flexbox provides simple solutions for:
          </p>
          <ul>
            <li>Vertical centering</li>
            <li>Equal height elements</li>
            <li>Dynamic spacing between items</li>
          </ul>
          <pre><code>.centered {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }</code></pre>
          
          <h2>When to Use CSS Grid</h2>
          <p>
            Grid is the better choice in these situations:
          </p>
          
          <h3>1. For Overall Page Layouts</h3>
          <p>
            Grid excels at defining the main areas of a page:
          </p>
          <ul>
            <li>Full page layouts with header, footer, sidebar, and main content</li>
            <li>Complex dashboards</li>
            <li>Magazine-style layouts</li>
          </ul>
          <pre><code>.page-layout {
    display: grid;
    grid-template-areas:
      "header header header"
      "sidebar main main"
      "footer footer footer";
    grid-template-columns: 250px 1fr 1fr;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;
  }</code></pre>
          
          <h3>2. For Grid-Based Interfaces</h3>
          <p>
            When you need elements aligned both horizontally and vertically:
          </p>
          <ul>
            <li>Photo galleries</li>
            <li>Product listings</li>
            <li>Calendar interfaces</li>
            <li>Data tables</li>
          </ul>
          <pre><code>.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
  }</code></pre>
          
          <h3>3. When Precise Control is Needed</h3>
          <p>
            Grid provides better control for:
          </p>
          <ul>
            <li>Overlapping elements</li>
            <li>Item placement in two dimensions</li>
            <li>Creating white space</li>
            <li>Maintaining consistent spacing</li>
          </ul>
          
          <h2>Using Them Together</h2>
          <p>
            The most powerful approach is often combining both layout systems:
          </p>
          <ol>
            <li>Use Grid for the overall page layout</li>
            <li>Use Flexbox for components within the grid areas</li>
          </ol>
          <pre><code>.page {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }
  
  .menu {
    display: flex;
    flex-direction: column;
  }
  
  .content-cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .card {
    display: flex;
    flex-direction: column;
  }</code></pre>
          
          <h2>Conclusion</h2>
          <p>
            The choice between CSS Grid and Flexbox isn't about which is "better" but rather which is better suited for a specific layout challenge:
          </p>
          <ul>
            <li>Choose Flexbox for one-dimensional layouts and components</li>
            <li>Choose Grid for two-dimensional layouts and page structures</li>
            <li>Use them together for the most robust layouts</li>
          </ul>
          <p>
            As you gain experience with both, your intuition about which to choose will become stronger. When in doubt, consider whether you need to control layout in one direction (use Flexbox) or two directions (use Grid).
          </p>
        </div>
      `
    }
  ];
  
  // Helper Functions
  function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = document.createElement('div');
    icon.className = `toast-icon ${type}`;
    
    const iconElement = document.createElement('i');
    iconElement.setAttribute('data-lucide', type === 'success' ? 'check-circle' : 'alert-circle');
    icon.appendChild(iconElement);
    
    const content = document.createElement('div');
    content.className = 'toast-content';
    
    const title = document.createElement('div');
    title.className = 'toast-title';
    title.textContent = type === 'success' ? 'Success' : 'Error';
    
    const description = document.createElement('div');
    description.className = 'toast-description';
    description.textContent = message;
    
    content.appendChild(title);
    content.appendChild(description);
    
    const closeButton = document.createElement('button');
    closeButton.className = 'toast-close';
    closeButton.setAttribute('aria-label', 'Close');
    
    const closeIcon = document.createElement('i');
    closeIcon.setAttribute('data-lucide', 'x');
    closeButton.appendChild(closeIcon);
    
    toast.appendChild(icon);
    toast.appendChild(content);
    toast.appendChild(closeButton);
    
    document.getElementById('toast-container').appendChild(toast);
    lucide.createIcons();
    
    closeButton.addEventListener('click', () => {
      toast.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        toast.remove();
      }, 300);
    });
    
    setTimeout(() => {
      toast.style.animation = 'slideOut 0.3s forwards';
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 5000);
  }
  
  // DOM Manipulation Functions
  function renderProjects(projects, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (projects.length === 0) {
      document.getElementById('no-projects')?.classList.remove('hidden');
      return;
    }
    
    document.getElementById('no-projects')?.classList.add('hidden');
    
    projects.forEach(project => {
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card';
      
      projectCard.innerHTML = `
        <div class="project-image-container">
          <img src="${project.image}" alt="${project.title}" class="project-image">
          ${project.featured ? '<div class="project-featured-badge">Featured</div>' : ''}
        </div>
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
        <div class="project-footer">
          ${project.demoUrl ? `
            <a href="${project.demoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="external-link"></i>
              Live Demo
            </a>
          ` : ''}
          ${project.repoUrl ? `
            <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="project-link">
              <i data-lucide="github"></i>
              View Code
            </a>
          ` : ''}
        </div>
      `;
      
      container.appendChild(projectCard);
    });
    
    lucide.createIcons();
  }
  
  function renderBlogPosts(posts, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    container.innerHTML = '';
    
    if (posts.length === 0) {
      document.getElementById('no-posts')?.classList.remove('hidden');
      return;
    }
    
    document.getElementById('no-posts')?.classList.add('hidden');
    
    posts.forEach(post => {
      const postCard = document.createElement('a');
      postCard.className = 'blog-post-card';
      postCard.href = `/blog-post.html?slug=${post.slug}`;
      
      postCard.innerHTML = `
        <div class="blog-post-image">
          <img src="${post.image}" alt="${post.title}">
        </div>
        <div class="blog-post-content">
          <div class="blog-post-meta">
            <i data-lucide="calendar"></i>
            <time datetime="${post.date}">${post.date}</time>
          </div>
          <h3 class="blog-post-title">${post.title}</h3>
          <p class="blog-post-excerpt">${post.excerpt}</p>
          <div class="project-tags">
            ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `;
      
      container.appendChild(postCard);
    });
    
    lucide.createIcons();
  }
  
  // Header Scroll Effect
  function initHeaderScroll() {
    const header = document.querySelector('.fixed-header');
    
    function updateHeaderBackground() {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
    
    window.addEventListener('scroll', updateHeaderBackground);
    updateHeaderBackground(); // Check initial state
  }
  
  // Mobile Menu Toggle
  function initMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mobileNav = document.querySelector('.mobile-nav');
    
    menuButton.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      
      // Update the icon
      const icon = menuButton.querySelector('i');
      if (mobileNav.classList.contains('active')) {
        icon.setAttribute('data-lucide', 'x');
      } else {
        icon.setAttribute('data-lucide', 'menu');
      }
      
      lucide.createIcons();
    });
  }
  
  // Form Handling
  function initContactForm(formId = 'contact-form') {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simulate form submission with a delay
      const submitButton = form.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      setTimeout(() => {
        showToast('Message sent! Thanks for reaching out. I\'ll get back to you soon.');
        form.reset();
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }, 1500);
    });
  }
  
  // Project Filtering
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-button');
    if (filterButtons.length === 0) return;
    
    // Initial render with all projects
    renderProjects(projectsData, 'projects-grid');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active state
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter projects
        const filteredProjects = category === 'all' 
          ? projectsData 
          : projectsData.filter(project => project.category === category);
        
        renderProjects(filteredProjects, 'projects-grid');
      });
    });
  }
  
  // Blog Search
  function initBlogSearch() {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) return;
    
    // Initial render with all posts
    renderBlogPosts(blogPostsData, 'blog-posts-grid');
    
    searchInput.addEventListener('input', () => {
      const searchQuery = searchInput.value.toLowerCase();
      
      const filteredPosts = blogPostsData.filter(post => 
        post.title.toLowerCase().includes(searchQuery) ||
        post.excerpt.toLowerCase().includes(searchQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery))
      );
      
      renderBlogPosts(filteredPosts, 'blog-posts-grid');
    });
  }
  
  // Load Blog Post
  function loadBlogPost() {
    const contentContainer = document.getElementById('blog-post-content');
    if (!contentContainer) return;
    
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get('slug');
    
    if (!slug) {
      document.getElementById('post-not-found').classList.remove('hidden');
      return;
    }
    
    const post = blogPostsData.find(p => p.slug === slug);
    
    if (!post) {
      document.getElementById('post-not-found').classList.remove('hidden');
      return;
    }
    
    contentContainer.innerHTML = post.content;
    document.title = `${post.title} - Portfolio`;
    
    lucide.createIcons();
  }
  
  // Initialize Featured Sections
  function initFeaturedSections() {
    // Featured Projects
    const featuredProjects = projectsData.filter(project => project.featured);
    renderProjects(featuredProjects, 'featured-projects');
    
    // Recent Blog Posts
    const recentPosts = blogPostsData.slice(0, 3);
    renderBlogPosts(recentPosts, 'featured-blog-posts');
  }
  
  // Initialize on DOM Load
  document.addEventListener('DOMContentLoaded', () => {
    initHeaderScroll();
    initMobileMenu();
    initFeaturedSections();
    initContactForm();
    
    // Initialize page-specific functionality based on the current page
    if (window.location.pathname === '/' || window.location.pathname.endsWith('index.html')) {
      // Home page specific init
    } else if (window.location.pathname.includes('projects')) {
      initProjectFilters();
    } else if (window.location.pathname.includes('blog') && !window.location.pathname.includes('blog-post')) {
      initBlogSearch();
    } else if (window.location.pathname.includes('blog-post')) {
      loadBlogPost();
    } else if (window.location.pathname.includes('contact')) {
      initContactForm('contact-page-form');
    }
  });