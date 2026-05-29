// src/data/curriculumData.js

export const WEEK_COLORS = {
  1: { color: '#00d4aa', label: 'Week 1 — Foundations' },
  2: { color: '#f7b731', label: 'Week 2 — Core Concepts' },
  3: { color: '#a371f7', label: 'Week 3 — Intermediate' },
  4: { color: '#f78166', label: 'Week 4 — Advanced & Project' }
};

export const curriculum = [
{
    dayNumber: 1, week: 1,
    title: 'Getting Started with React',
    subtitle: 'Setup, file structure & JSX explained',
    topics: ['Node Setup', 'What is React', 'Vite Setup', 'JSX Rules', 'Expressions', 'Knowledge Check'],
    milestone: { icon: '🚀', title: 'Welcome to React!', text: 'Today is your foundation. We will set up your professional environment and learn the core language of React: JSX.' },
    sections: [
      {
        type: 'text',
        title: 'Part 0: The Pre-flight Checklist',
        body: 'Before we start coding, we need to install the engine that runs our React projects.\n\n1. Download Node.js: Go to nodejs.org and click on the button that says "LTS" (Long Term Support). This is the stable version used by professionals.\n2. Run the Installer: Run the downloaded file and click "Next" through the defaults.\n3. Verify Installation: Open your terminal (or Command Prompt). Type `node -v` and press Enter. If you see a version number (e.g., v22.1.0), you have successfully installed the engine!',
        boxType: 'info',
        boxTitle: 'What is the Terminal?',
        boxBody: 'The terminal is just a chat box where you give direct instructions to your computer instead of clicking buttons. We use it to tell Node to build our app. If you get a "command not found" error, restart your computer so it registers your new Node installation.'
      },
      {
        type: 'text',
        title: 'What is React?',
        body: 'React is a declarative JavaScript library for building user interfaces. Instead of manually manipulating the DOM (like writing document.getElementById), you describe what the UI should look like, and React handles the rest efficiently.\n\nReact uses a "Virtual DOM" (a lightweight, invisible copy of the actual web page). When your data changes, React updates the Virtual DOM first, compares it to the real page, and only updates the exact tiny piece that changed instead of reloading the whole page.',
        boxType: 'tip',
        boxTitle: 'Why React over plain JS?',
        boxBody: 'Vanilla JS gets messy fast when your UI has lots of moving parts. React keeps everything organised into small, reusable pieces called components. <br/><br/><strong>The Virtual DOM in plain English:</strong> Imagine you have a printed recipe book (the real DOM) and a rough notepad (the Virtual DOM). When a recipe changes, you scribble the edit on the notepad first, compare it to the book, then only erase and rewrite the exact sentence that changed — instead of reprinting the whole book. That is how React updates the screen so fast.'
      },
      {
        type: 'setup',
        title: 'Setting Up Your Project with Vite',
        body: 'We use Vite to create React apps. It is blazing fast because it only updates the exact file you change in milliseconds.',
        code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`,
        lang: 'bash',
        boxType: 'danger',
        boxTitle: 'Step 0: Clear the default App.css first!',
        boxBody: 'Vite generates a default <code>App.css</code> file pre-filled with styles like <code>.hero</code>, <code>.counter</code>, and <code>.card</code>. These will conflict with your own styles and cause confusing visual bugs that are hard to trace. <strong>Before writing any code, open <code>src/App.css</code> and delete everything inside it.</strong> Start every project with a completely blank CSS file.'
      },
      {
        type: 'text',
        title: '🔧 Install React DevTools (Do This Now!)',
        body: 'React DevTools is a free browser extension that gives you superpowers. Without it, when your code breaks you are essentially debugging blindfolded. With it, you can see exactly what data is inside every component in real time.\n\n**Install it in 30 seconds:**\n1. Open Chrome (or Firefox) and search for **"React Developer Tools extension"**.\n2. Click "Add to Chrome" → "Add extension".\n3. A small React icon will appear in your browser toolbar.\n4. Once your Vite app is running, click the icon — it turns from grey to coloured. You will see two new tabs in Chrome DevTools (F12): **"⚛ Components"** and **"⚛ Profiler"**.',
        boxType: 'tip',
        boxTitle: 'What does it actually show me?',
        boxBody: 'The <strong>Components</strong> tab shows your entire component tree — every component on the page, its current props, and its current state. When you click a button and the count changes, you can <em>watch the state update live</em> in the panel. This is the single most important debugging tool you will use throughout this course.'
      },
      {
        type: 'text',
        title: '〰️ Those Squiggly Lines in VS Code — What Do They Mean?',
        body: 'When you first open your project in VS Code, you will see coloured underlines beneath some of your code. These come from a tool called **ESLint** — a built-in code spell-checker that catches common mistakes before you even run the app.\n\n- **Red squiggles:** A syntax error — your code will not run until you fix it.\n- **Yellow squiggles:** A warning — the code will run, but you are doing something React considers risky (like a missing `key` prop in a list).\n- **Blue squiggles:** An informational hint.\n\nYour first instinct should be to hover over the squiggle — VS Code shows you exactly what is wrong and often suggests a fix.',
        boxType: 'info',
        boxTitle: 'ESLint is on your side',
        boxBody: 'Think of ESLint as a senior developer sitting next to you, pointing out things before they become bugs. Do not dismiss the warnings — they are almost always right. When you are stuck and the app is not behaving as expected, look at the squiggly lines first.'
      },
      {
        type: 'filetree',
        title: 'Understanding the File Structure',
        body: 'After setup, your project looks like this. Pay close attention to which files you should and should not edit:',
        tree: `my-app/
├── 📁 node_modules/       ← 🚫 NEVER TOUCH — installed packages live here
├── 📁 public/             ← ✅ Static files (images like avatar.png go here)
├── 📁 src/                ← ✅ YOUR CODE GOES HERE
│   ├── App.jsx            ← ✅ Main app component (you will edit this a lot)
│   ├── App.css            ← ✅ Styles for App
│   └── main.jsx           ← ⚠️  Entry point — leave alone for now
└── package.json           ← ⚠️  Project config`
      },
      {
        type: 'rules',
        title: 'The Rules of JSX',
        body: "JSX looks like HTML, but it's actually JavaScript under the hood. Because of this, it has strict rules:",
        rules: [
          { num: '1', title: 'One root element', body: 'Every JSX block needs exactly one parent. Wrap siblings in <div> or an empty fragment <>...</>' },
          { num: '2', title: 'className not class', body: '"class" is a JS keyword. Always write className="myClass" in JSX.' },
          { num: '3', title: 'Close every tag', body: '<img />, <br />, <input /> — the slash is mandatory for self-closing tags in JSX.' }
        ]
      },
      {
        type: 'text',
        title: 'Beginner Trap: Asset Paths & Styling',
        body: 'Two mistakes trip up almost every beginner in their first Vite project. Read this box carefully before you write a single line of code in the guided project below.',
        boxType: 'danger',
        boxTitle: 'Asset Paths & Styling',
        boxBody: '<strong>Images:</strong> Notice the image source in the code below is <code>/avatar.png</code>. In Vite, static images should be placed inside your <code>public/</code> folder, not your <code>src/</code> folder.<br><br><strong>CSS:</strong> You must explicitly write <code>import "./App.css";</code> at the top of your component file, otherwise your <code>className</code> tags will do nothing.'
      },
      {
        type: 'code',
        title: 'The Magic of JSX Expressions {}',
        body: 'Because JSX is JavaScript, you can open a "window" back into JavaScript anywhere inside your HTML by using curly braces `{}`. You can do math, format strings, or use variables!',
        code: `function App() {
  const user = "Ngozi";
  const birthYear = 2005;
  const currentYear = 2026;

  return (
    <div>
      {/* 1. Using Variables */}
      <h1>Welcome, {user.toUpperCase()}!</h1>
      
      {/* 2. Doing Math */}
      <p>You are {currentYear - birthYear} years old.</p>
      
      {/* 3. Generating dynamic classes */}
      <div className={\`card theme-\${user}\`}>
        Dynamic styling!
      </div>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'info',
        boxTitle: '⚡ What are those backticks (`)?',
        boxBody: 'Look at line 3 in the code: <code>{`card theme-${user}`}</code>. Those backtick quotes (<code>`</code>) are called a <strong>Template Literal</strong> — a special type of JavaScript string that lets you embed variables directly using <code>${}</code>. Compare: <br/><strong>Old way:</strong> <code>"card theme-" + user</code> <br/><strong>Template literal:</strong> <code>`card theme-${user}`</code> <br/>They do the same thing — template literals are just cleaner to read. You will see them throughout this course whenever we need to mix a variable into a string.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Digital Business Card',
        body: "Let's build our first real React page. We will create a professional digital ID card that uses JSX expressions and className styling — exactly how a real developer would build it."
      },
      {
        type: 'code',
        title: 'Step 1: Edit App.jsx',
        body: "Delete the default code in your App.jsx and build this digital ID. Notice how we use `{}` to inject our data.",
        code: `import './App.css';

function App() {
  const studentName = "Michael Oshovue";
  const track = "Lead Instructor @ Speta";

  return (
    <div className="app-container">
      <div className="profile-card">
        <img src="/avatar.png" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h1 className="profile-name">{studentName}</h1>
          <h2 className="profile-role">{track}</h2>
          <p className="profile-bio">Tech professional focusing on AI and Robotics.</p>
        </div>
      </div>
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: The CSS Styling (App.css)',
        body: "Paste this into your App.css file to style the business card:",
        code: `/* App.css - Clean, Modern Tech Aesthetic */
.app-container { 
  min-height: 100vh; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  background-color: #0f172a; 
  margin: 0; 
}

.profile-card { 
  background-color: #1e293b; 
  width: 320px; 
  padding: 2.5rem 2rem; 
  border-radius: 20px; 
  text-align: center; 
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.4); 
  border: 1px solid #334155; 
}

.profile-image { 
  width: 120px; 
  height: 120px; 
  border-radius: 50%; 
  border: 3px solid #38bdf8; 
  margin-bottom: 1.25rem; 
  object-fit: cover; 
}

.profile-name { 
  color: #ffffff; 
  margin: 0; 
  font-size: 1.6rem; 
  font-weight: 700; 
}

.profile-role { 
  color: #38bdf8; 
  font-size: 0.9rem; 
  margin-top: 0.5rem; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
  font-weight: 600; 
}

.profile-bio { 
  color: #94a3b8; 
  font-size: 0.9rem; 
  line-height: 1.5; 
  margin-top: 1.5rem; 
  margin-bottom: 0; 
}`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: Build a Twitter Clone Card',
        timeEstimate: '30–45 min',
        body: 'Now it is your turn to write code from scratch. Clear out your App.jsx and App.css. Your task is to build a single "Tweet" card.\n\n**Requirements for Audit:**\n1. You must define a `const username` and `const tweetBody` at the top of your function.\n2. You must inject those variables into your JSX using `{}`.\n3. You must use `className` to style it to look like a Tweet (white box, gray border, bold name).\n4. You must add an image of a heart icon for the "Like" button, and it must load from your `/public` folder.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use exactly one parent <code>&lt;div&gt;</code>? <br/>✓ Did you use <code>className</code> instead of <code>class</code>? <br/>✓ Does your <code>&lt;img /&gt;</code> tag have a closing slash?'
      },
      {
        type: 'homework',
        title: 'Customise Your Business Card',
        timeEstimate: '30–45 min',
        body: 'You built a Digital Business Card in class using JSX variables and className. Now extend it using **only what you have learned today** — no new concepts needed!\n\n**Requirements:**\n1. Add two new `const` variables inside your `App` function: `const location = "Lagos, Nigeria"` and `const skills = "HTML · CSS · JavaScript"`.\n2. Render both variables on your card inside their own `<p>` tags, each with a unique `className`.\n3. Style the new elements in `App.css` — pick your own font size and colour.\n4. Change the entire colour scheme of the card — try a purple theme (`#7c3aed`) or a warm amber theme (`#f97316`).\n5. **Bonus:** Add a second `<div className="profile-card">` below the first with completely different variable values — a fictional second person.',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you declare your new variables at the <strong>top</strong> of the function, before the <code>return</code>? <br/>✓ Did you use curly braces <code>{location}</code> and <code>{skills}</code> to inject them into the JSX? <br/>✓ Did you use <code>className</code> (not <code>class</code>) on every element you styled? <br/>✓ <strong>Bonus:</strong> Does the second card show completely different data and a different colour scheme?'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Why does Vite update so much faster than older React build tools?',
            options: [
              'It ignores CSS files to save memory.',
              'It rebuilds the entire app in the background.',
              'It only updates the exact file you changed.',
              'It uses a smaller version of React.'
            ],
            correct: 2
          },
          {
            question: 'Which of the following is completely INVALID in JSX?',
            options: [
              '<h1>Hello {name}</h1>',
              '<div class="container">Content</div>',
              '<img src="/logo.png" />',
              '<> <p>Paragraph 1</p> <p>Paragraph 2</p> </>'
            ],
            correct: 1
          },
          {
            question: 'Where should you place a static image (like a logo) in a Vite project?',
            options: [
              'Inside the node_modules/ folder',
              'Inside the src/ folder',
              'Inside the public/ folder',
              'Inside the package.json file'
            ],
            correct: 2
          },
          {
            question: 'In JSX, if your component needs to return two sibling elements side by side, what must you wrap them in?',
            options: [
              'A <body> tag',
              'A <html> tag',
              'A Fragment (<>) or a single parent <div>',
              'Nothing — JSX allows multiple root elements by default'
            ],
            correct: 2
          },
          {
            question: 'Which folder in a Vite project should you NEVER manually edit or delete?',
            options: [
              'src/',
              'public/',
              'node_modules/',
              'The project root folder'
            ],
            correct: 2
          }
        ]
      }
    ]
  },
 {
    dayNumber: 2, week: 1,
    title: 'Components & Props',
    subtitle: 'Building reusable UI pieces that talk to each other',
    topics: ['Component Tree', 'Import & Export', 'Props (Custom Attributes)', 'Destructuring', 'Knowledge Check'],
    milestone: { icon: '🧱', title: 'Think in Components', text: 'Today you stop writing web pages and start building Lego blocks. By the end of today, you will know how to build a component once and reuse it everywhere.' },
    sections: [
      {
        type: 'text',
        title: 'Thinking in Components',
        body: 'A React app is just a tree of components. A component is a JavaScript function that returns JSX.\n\nImagine a website as a family tree. The `App` is the parent. Inside the `App`, you might have a `Navbar`, a `MainContent`, and a `Footer`. These are its children. Breaking an app into pieces means if a button breaks, you only have to fix the Button component, not the whole website.'
      },
      {
        type: 'text',
        title: 'The Island Rule: Import and Export',
        body: 'In vanilla JavaScript, if you make a variable, every file can usually see it. **React is different.** Every file in React is an isolated island. It cannot see what is happening in other files.\n\nTo share a component between files, you must build a bridge:\n1. The creator file must **`export`** the component.\n2. The receiver file must **`import`** the component.',
        boxType: 'rule',
        boxTitle: 'The ES6 Module Bridge',
        boxBody: 'Always write <code>export default FunctionName;</code> at the bottom of your component file. To use it in another file, write <code>import FunctionName from "./FileName";</code> at the very top.'
      },
      {
        type: 'code',
        title: 'Props: Inventing Your Own HTML Attributes',
        body: 'You already know how HTML attributes work. You pass data to an image tag like this: `<img src="me.jpg" />`. \n\nIn React, you get to invent your own tags and your own attributes! We call these custom attributes **Props** (short for properties). Under the hood, React takes all the attributes you write and wraps them into a single JavaScript object.',
        code: `// 1. The Parent passing custom attributes (Props)
function App() {
  return (
    <div>
      <StudentCard name="Precious" grade="A" />
      <StudentCard name="David" grade="B+" />
    </div>
  );
}

// 2. The Child receiving data as a single Object
function StudentCard(props) {
  return (
    <div className="card">
      <h2>Name: {props.name}</h2>
      <p>Grade: {props.grade}</p>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'danger',
        boxTitle: 'Never modify props!',
        boxBody: 'Props are <strong>Read-Only</strong>. They belong to the parent. If a child tries to change its own props (e.g., <code>props.name = "New Name"</code>), React will throw an error.'
      },
      {
        type: 'code',
        title: 'Props (The Modern Way: Destructuring)',
        body: 'Writing `props.` over and over gets repetitive. Modern React developers use standard JavaScript **Object Destructuring** right inside the function parameters to pull out exactly what they need instantly. If you have not seen this before — destructuring is a JavaScript trick that unpacks values from an object directly into named variables, so you can use them without writing `props.name` every time.',
        code: `// We pull 'name' and 'grade' directly out of the hidden props object!
function StudentCard({ name, grade }) {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Grade: {grade}</p>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'info',
        boxTitle: '⚡ Quick JS Refresher: What is Destructuring?',
        boxBody: 'Destructuring is a standard JavaScript shortcut — it is not React-specific. It unpacks values from an object into separate variables in one line. <br/><strong>Without destructuring:</strong> <code>const name = props.name; const grade = props.grade;</code> <br/><strong>With destructuring:</strong> <code>const { name, grade } = props;</code> <br/>React lets us do this shortcut right inside the function parentheses: <code>function StudentCard({ name, grade })</code>. Same result, cleaner code.'
      },
      {
        type: 'text',
        title: 'Guided Project: Tech Team Roster',
        body: 'Let\'s build a reusable component. Instead of putting all our code in one file, we are going to create a brand new file for our component. This is how real React apps are built!'
      },
      {
        type: 'code',
        title: 'Step 1: Create ProfileCard.jsx',
        body: 'Inside your `src/` folder, create a brand new file named `ProfileCard.jsx`. Paste this code inside it:',
        code: `// src/ProfileCard.jsx

export default function ProfileCard({ name, role, isLead }) {
  return (
    <div className="team-card">
      <h3>{name}</h3>
      <p className="team-role">{role}</p>
      
      {/* Conditional rendering: Only show this span if isLead is true! */}
      {isLead ? <span className="team-badge">Team Lead</span> : null}
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Now open your main `src/App.jsx` file. We need to **import** the card we just made so we can use it here.',
        code: `// src/App.jsx
import './App.css';
import ProfileCard from './ProfileCard'; // Importing our new component!

function App() {
  return (
    <div className="team-container">
      <h1 className="team-title">Speta Tech Team</h1>
      
      <div className="team-grid">
        {/* Rendering the same component 3 times with different data! */}
        <ProfileCard name="Michael" role="Full-Stack Dev" isLead={true} />
        <ProfileCard name="Precious" role="UI/UX Designer" isLead={false} />
        <ProfileCard name="David" role="Data Scientist" isLead={false} />
      </div>
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Because we imported `App.css` in our parent file, those styles are global! Paste this into `App.css` to make the team roster look great.',
        code: `/* App.css */
.team-container { padding: 2rem; background-color: #0d1117; color: white; min-height: 100vh; }
.team-title { text-align: center; color: #00d4aa; margin-bottom: 2rem; font-size: 2rem; }
.team-grid { display: flex; gap: 1.5rem; justify-content: center; flex-wrap: wrap; }

.team-card { 
  background-color: #161b22; 
  border: 1px solid #30363d; 
  padding: 1.5rem; 
  border-radius: 12px; 
  width: 250px; 
  text-align: center;
}
.team-card h3 { margin: 0 0 0.5rem 0; font-size: 1.4rem; }
.team-role { color: #8b949e; margin-bottom: 1rem; font-size: 0.9rem; }
.team-badge { 
  background-color: rgba(0, 212, 170, 0.2); 
  color: #00d4aa; 
  padding: 0.3rem 0.8rem; 
  border-radius: 20px; 
  font-size: 0.8rem; 
  font-weight: bold; 
}`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The E-Commerce Product Grid',
        timeEstimate: '45–60 min',
        body: 'Time to prove you understand props and files! Your task is to build a reusable `<Product />` component and display 3 different items on the screen.\n\n**Requirements:**\n1. Create a new file named `Product.jsx` inside your `src/` folder.\n2. In that file, build and `export default` a `Product` component that accepts three props: `title`, `price`, and `isOnSale`.\n3. Render the `title` and `price` inside the component using `{}`.\n4. Use a ternary operator (`? :`) to display a "SALE!" badge only if `isOnSale` is true.\n5. Open your `App.jsx`, import your new `Product` component, and render three of them with different data. Make sure at least one is on sale, and one is not.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you <code>export default</code> the Product component and <code>import</code> it into App.jsx? <br/>✓ Did you use curly braces <code>{ title, price }</code> in the parameters? <br/>✓ Did you pass strings in quotes (<code>title="Shoes"</code>) but booleans/numbers in curly braces (<code>price={50} isOnSale={true}</code>)?'
      },
      {
        type: 'homework',
        title: 'Expand the ProfileCard',
        timeEstimate: '45–60 min',
        body: 'Your `ProfileCard` currently shows `name`, `role`, and a Team Lead badge. Now make it richer by adding two brand-new props — using only what you know: props and destructuring.\n\n**Requirements:**\n1. Open `ProfileCard.jsx` and add `avatar` and `skills` to the destructured parameters: `{ name, role, isLead, avatar, skills }`.\n2. Render `avatar` (an emoji string like `"👨\u200d💻"`) inside a `<span className="team-avatar">` at the top of the card.\n3. Render `skills` (a comma-separated string like `"React, Node, Python"`) inside a `<p className="team-skills">` below the role.\n4. Open `App.jsx` and update all three `<ProfileCard>` instances to pass the new `avatar` and `skills` props with different values for each person.',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you add <code>avatar</code> and <code>skills</code> to the destructured parameters <code>{ name, role, isLead, avatar, skills }</code>? <br/>✓ Did you render both new props inside the JSX with <code>{}</code> curly braces? <br/>✓ Did you pass strings using quotes (<code>avatar="👩‍💻"</code>) from <code>App.jsx</code>? <br/>✓ <strong>Bonus:</strong> Add a <code>yearsExp</code> number prop and display it as "X years experience" below the skills — pass it as <code>yearsExp={3}</code> (curly braces for numbers!).'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Why must React components start with a Capital letter?',
            options: [
              'Because it looks more professional.',
              'So React can differentiate them from standard HTML tags like <div>.',
              'Because JavaScript functions require capital letters.',
              'It is just a suggestion, lowercase works fine too.'
            ],
            correct: 1
          },
          {
            question: 'If you create a new component in Navbar.jsx, how do you make it available to be used in App.jsx?',
            options: [
              'Link it using a <script> tag in the index.html file.',
              'Use "export default Navbar;" in Navbar.jsx, and "import" it in App.jsx.',
              'React automatically finds it as long as it is in the src folder.',
              'Copy and paste the code directly into App.jsx.'
            ],
            correct: 1
          },
          {
            question: 'Which of the following is TRUE about Props?',
            options: [
              'A child component can change its own props whenever it wants.',
              'Props are passed upwards from a Child to a Parent.',
              'Props are read-only and passed downwards from Parent to Child.',
              'Props can only be strings, never numbers or booleans.'
            ],
            correct: 2
          },
          {
            question: 'If you want to pass a boolean (true/false) or a number as a prop, what is the correct syntax?',
            options: [
              '<Product isOnSale="true" price="50" />',
              '<Product isOnSale=true price=50 />',
              '<Product isOnSale={true} price={50} />',
              '<Product isOnSale: true price: 50 />'
            ],
            correct: 2
          },
          {
            question: 'What is the modern, cleanest way to extract "title" and "price" directly from props inside the component parameters?',
            options: [
              'function Product(props.title, props.price)',
              'function Product({ title, price })',
              'function Product([title, price])',
              'function Product(props => title, price)'
            ],
            correct: 1
          }
        ]
      }
    ]
  },
 {
    dayNumber: 3, week: 1,
    title: 'State with useState',
    subtitle: 'Making components remember and react to change',
    topics: ['What is State', 'useState Hook', 'State Updates', 'Never Mutate State', 'Certification Exam'],
    milestone: { icon: '⚡', title: 'State is the heartbeat of React', text: 'Props are for passing data in. State is for data that changes. Master this and your websites officially become interactive web applications.' },
    sections: [
      {
        type: 'text',
        title: 'What is State?',
        body: 'State is data that belongs to a component and can change over time. \n\nThink of a component like a person. Props are things given to them (like a name tag). State is what they are feeling right now (like their mood). Moods change! When state changes, React automatically "re-renders" the component to show the new data on the screen.',
        boxType: 'warn',
        boxTitle: 'Why not just use a regular variable?',
        boxBody: 'If you write <code>let score = 0;</code> and then do <code>score = 1;</code>, the math works, but <strong>React will not update the screen</strong>. Regular variables are invisible to React. State is special—when you update State, it taps React on the shoulder and says, "Hey, redraw the screen!"'
      },
      {
        type: 'code',
        title: 'The useState Hook',
        body: 'To use state, we have to "import" a special tool from React called a Hook. The `useState` hook gives us two things: a variable to hold the data, and a special function to change it.',
        code: `// 1. You MUST import useState at the very top of your file
import { useState } from "react";

export default function Counter() {
  // 2. Destructuring the array returned by useState
  //    [currentValue, functionToChangeIt] = useState(initialValue)
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2>Score: {count}</h2>
      
      {/* 3. We call setCount to change the data. NEVER do count++ */}
      <button onClick={() => setCount(count + 1)}>
        Add Point
      </button>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'tip',
        boxTitle: '💡 Pro Tip: The Safe Way to Update From Previous State',
        boxBody: 'In the example above we write <code>setCount(count + 1)</code>. This works for simple cases, but there is a safer pattern you will see in real codebases: <code>setCount(prev => prev + 1)</code>. <br/><br/>The <code>prev</code> version passes a function to the setter. React guarantees that <code>prev</code> is always the most up-to-date value — important when multiple updates happen at the same time. <strong>Rule of thumb:</strong> if your new state depends on the old state, use <code>prev =&gt;</code>.'
      },
      {
        type: 'code',
        title: '⚠️ The Golden Rule: Never Mutate State',
        body: 'This is the #1 mistake beginners make. You are NEVER allowed to change a state variable directly. You must always use the setter function, and if it is a list (array), you must give React a **brand new list**. The three dots (`...`) you will see below are the **Spread Operator** — they unpack all the existing items from the old array into a brand new one, then we add the new item at the end.',
        code: `import { useState } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState(["Shoes", "Shirt"]);

  const addItemWrong = () => {
    // ❌ WRONG: Mutating the array directly
    items.push("Hat"); 
    setItems(items); // React thinks nothing changed, screen won't update!
  };

  const addItemRight = () => {
    // ✅ CORRECT: Using the "Spread Operator" (...) to create a NEW array
    // This says: "Copy all existing items, and add Hat to the end."
    setItems([...items, "Hat"]); 
  };

  return (
    <div>
      <button onClick={addItemRight}>Add Hat</button>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'danger',
        boxTitle: 'Mutation leads to bugs',
        boxBody: 'Never do <code>items.push()</code>, <code>array[0] = value</code>, or <code>count = count + 1</code>. Always pass a brand new value into the setter function!'
      },
      {
        type: 'text',
        title: 'Guided Project: The Speta Like Button',
        body: 'Let\'s build something you see every day on social media: an interactive Like button. We will use TWO state variables together — a boolean to track if something is liked, and a number to track the total count.'
      },
      {
        type: 'code',
        title: 'Step 1: Create LikeButton.jsx',
        body: 'Create a new file called `LikeButton.jsx` in your `src/` folder and paste this code:',
        code: `// src/LikeButton.jsx
import { useState } from "react";

export default function LikeButton() {
  // State 1: Is it liked? (Boolean)
  const [isLiked, setIsLiked] = useState(false);
  // State 2: Total like count (Number)
  const [likeCount, setLikeCount] = useState(120);

  const handleLikeClick = () => {
    if (isLiked === false) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  return (
    <div className="like-card">
      <p>Do you like this course?</p>
      <button
        className={\`btn \${isLiked ? 'liked' : 'default'}\`}
        onClick={handleLikeClick}
      >
        {isLiked ? '❤️ Liked' : '🤍 Like'} ({likeCount})
      </button>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Now bridge your new component into your main application file. The Island Rule from Day 2 in action — import at the top, render in the return!',
        code: `// src/App.jsx
import './App.css';
import LikeButton from './LikeButton'; // Import the new component

function App() {
  return (
    <div className="app-container">
      <h1>Day 3: State with useState</h1>
      <LikeButton />
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Add this to your `App.css`. Notice how the `.liked` class applies a red glow — this is the conditional className pattern you will use throughout the course!',
        code: `/* Add to App.css */
.like-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  width: 300px;
  margin: 2rem auto;
}

.like-card p { color: #94a3b8; margin-bottom: 1rem; }

.btn {
  border: none;
  padding: 0.6rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.1s ease, background 0.2s ease;
}

.btn:active { transform: scale(0.96); }
.btn.default { background: #334155; color: #94a3b8; }
.btn.liked {
  background: rgba(239, 68, 68, 0.15);
  color: #f87171;
  border: 1px solid rgba(239, 68, 68, 0.4);
}`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Habit Tracker',
        timeEstimate: '45 min',
        body: 'Time to build your own stateful component from scratch! \n\n**Requirements:**\n1. Create a new file named `HabitTracker.jsx`.\n2. Create a component that tracks how many glasses of water you drank today.\n3. You need one `useState` variable starting at `0`.\n4. Create an "Add Water" button that increases the count by 1.\n5. Create a "Reset" button that sets the count back to 0.\n6. Import and render your `<HabitTracker />` inside `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you <code>import { useState } from "react";</code> at the very top? <br/>✓ Did you use the setter function (e.g., <code>setWater(water + 1)</code>) instead of <code>water++</code>? <br/>✓ Did you pass a function to onClick like <code>onClick={() => setWater(0)}</code>?'
      },
      {
        type: 'homework',
        title: 'The Mood Tracker',
        timeEstimate: '45–60 min',
        body: 'Build a component that tracks your mood for the day using State.\n\n**Requirements:**\n1. Create a file named `MoodTracker.jsx`.\n2. Create two state variables: `mood` (a string, starting as `"Neutral"`) and `moodEmoji` (a string, starting as `"😐"`).\n3. Render 3 buttons: "😄 Happy", "😐 Neutral", and "😢 Sad".\n4. Clicking each button must update BOTH state variables — e.g. clicking Happy sets `mood` to `"Happy"` and `moodEmoji` to `"😄"`.\n5. Display a line like: "Today I am feeling: 😄 Happy" that updates live as buttons are clicked.\n6. Use a conditional className to change the background colour of the card based on mood (green for Happy, grey for Neutral, blue for Sad).',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Do both <code>mood</code> and <code>moodEmoji</code> update when a button is clicked? <br/>✓ Is the displayed text reactive — does it change without a page reload? <br/>✓ Did you use a dynamic <code>className</code> to change the card colour? <br/>✓ <strong>Bonus:</strong> Add a timestamp that shows "Last updated at HH:MM" using <code>new Date().toLocaleTimeString()</code> whenever a mood is selected.'
      },
      {
        type: 'text',
        title: '🔭 Coming Up in Week 2',
        body: 'You have now covered the three pillars of React: JSX, Components & Props, and State. Here is a preview of what Week 2 will build on top of this foundation:\n\n1. **Events & Conditional Rendering (Day 4):** How to react to user actions like clicks and typing — and how to show or hide UI based on conditions using the Ternary operator and `&&`.\n2. **Lists & .map() (Day 5):** How to render dynamic lists of data from arrays — the skill behind every feed, product grid, and todo list you have ever seen.\n3. **Forms & User Input (Day 6):** How to capture user input safely with controlled components, prevent page reloads, and combine everything you have learned to build a working To-Do List.\n\nYou are further along than you think. Keep your projects open and keep tinkering!',
        boxType: 'tip',
        boxTitle: 'Tip: Keep Building Between Classes',
        boxBody: 'The students who improve fastest are the ones who keep their code editor open after class. Even 30 minutes of experimenting — breaking things and fixing them — is worth more than re-reading the notes.'
      },
      {
        type: 'exam',
        title: 'Week 1 Certification Exam',
        questions: [
          {
            question: 'What is the primary command used to start a new React project rapidly?',
            options: ['npm create react-app', 'npm create vite@latest', 'npm start react', 'node build react'],
            correct: 1
          },
          {
            question: 'Which of the following is a strict rule of writing JSX?',
            options: ['Every file must have CSS.', 'You must use "class" instead of "className".', 'You must wrap multiple elements in a single parent element like <div> or <>.', 'Tags do not need to be closed.'],
            correct: 2
          },
          {
            question: 'Where should you place static images (like a logo) so they load correctly in a Vite React app?',
            options: ['Inside the src/ folder', 'Inside the node_modules/ folder', 'Inside the public/ folder', 'Inside the package.json file'],
            correct: 2
          },
          {
            question: 'How does React know that a JavaScript function is a Component and not a standard HTML tag?',
            options: ['It is placed in the src folder.', 'The function name starts with a Capital letter.', 'It uses the word "Component" in the name.', 'React just guesses based on the code.'],
            correct: 1
          },
          {
            question: 'If you create a Profile.jsx component, what is the "Island Rule" to use it inside App.jsx?',
            options: ['You must export default in Profile.jsx and import it in App.jsx.', 'React will link them automatically.', 'You have to copy and paste the code.', 'You link it in the index.html file.'],
            correct: 0
          },
          {
            question: 'What is the best definition of "Props" in React?',
            options: ['State that can be changed by a child component.', 'Custom HTML-like attributes used to pass data from a Parent down to a Child.', 'A way to link CSS files.', 'Variables that hold the color scheme.'],
            correct: 1
          },
          {
            question: 'What is the correct way to pass a number as a prop?',
            options: ['<Card price="50" />', '<Card price=50 />', '<Card price={50} />', '<Card {price=50} />'],
            correct: 2
          },
          {
            question: 'Why do we use the useState Hook instead of standard variables (let count = 0)?',
            options: ['State variables are stored in the database.', 'State variables trigger React to re-render the screen when they change.', 'Standard variables are deprecated in modern JS.', 'State makes the code run faster.'],
            correct: 1
          },
          {
            question: 'What is the Golden Rule of updating State arrays or objects?',
            options: ['Never mutate them directly. Create a new copy using the spread operator (...).', 'Always use the .push() method.', 'Delete the old state before making a new one.', 'Arrays cannot be saved in State.'],
            correct: 0
          },
          {
            question: 'Which is the CORRECT way to write an onClick function that changes state?',
            options: ['onClick={setScore(0)}', 'onClick="setScore(0)"', 'onClick={() => setScore(0)}', 'onClick={score = 0}'],
            correct: 2
          }
        ]
      }
    ]
  },
  // --- DAY 4 ---
  {
    dayNumber: 4, week: 2,
    title: 'Events & Conditional Rendering',
    subtitle: 'Making your app react to the user',
    topics: ['onClick & onChange', 'Pass, Don\'t Call', 'Ternary (? :)', 'Logical AND (&&)', 'Knowledge Check'],
    milestone: { icon: '🎯', title: 'Welcome to Week 2!', text: 'You know how to store data. Now you will learn how to change it based on user actions, and dynamically hide or show UI based on those changes.' },
    sections: [
      {
        type: 'text',
        title: 'Event Handling in React',
        body: 'React handles events similarly to standard HTML, but with a few very important differences:\n\n1. **CamelCase:** In HTML you write `onclick`. In React, you must write `onClick`.\n2. **Pass, Don\'t Call:** You pass a function to the event, you don\'t call it as a string. \n3. **The Event Object (e):** Just like vanilla JS, React gives you an event object containing details about the action (like what the user typed).',
        boxType: 'danger',
        boxTitle: 'The Infinite Loop Crash (⚠️ CRITICAL)',
        boxBody: 'If you write <code>onClick={calculateScore()}</code> with parentheses, the function runs <strong>immediately</strong> when the page loads. If that function updates State, it forces a reload, which runs the function again, causing an Infinite Loop that crashes the browser! <br><br><strong>Always pass the function name without parentheses:</strong> <code>onClick={calculateScore}</code> or use an arrow function: <code>onClick={() => calculateScore(5)}</code>.'
      },
      {
        type: 'code',
        title: 'Common Events in Action',
        body: 'Here are the two most common events you will use: Clicks on buttons, and Changes in text inputs.',
        code: `import { useState } from "react";

export default function EventExamples() {
  const [text, setText] = useState("");

  // A helper function for the click event
  const handleClick = () => {
    alert("You clicked the button!");
  };

  // A helper function for the typing event
  // 'e' is the event object. 'e.target.value' gets the text!
  const handleTyping = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="card">
      {/* 1. Button Click */}
      <button onClick={handleClick}>Click Me</button>

      {/* 2. Input Change */}
      <input 
        type="text" 
        placeholder="Type here..." 
        onChange={handleTyping} 
      />
      <p>You are typing: {text}</p>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Conditional Rendering (Showing and Hiding)',
        body: 'Often, you want to show a button *only* if a user is logged in, or show an error message *only* if a form is broken. We do this using JavaScript logic directly inside our JSX.\n\nThere are two main tools we use:\n1. **The Ternary Operator (`condition ? true : false`)**: Use this when you have TWO options (an IF and an ELSE).\n2. **The Logical AND (`condition && true`)**: Use this when you only have ONE option (an IF, but no ELSE).',
        boxType: 'tip',
        boxTitle: 'Read it like English',
        boxBody: 'For Ternaries: "Is it raining <strong>?</strong> Take an umbrella <strong>:</strong> Wear sunglasses." <br>For ANDs: "Is it raining <strong>&&</strong> Take an umbrella."'
      },
      {
        type: 'text',
        title: 'Guided Project: The Login Gate',
        body: 'Let\'s build a secure portal. We will use a Ternary to show a Login or Logout button, and the `&&` operator to reveal secret data ONLY if the user is logged in.'
      },
      {
        type: 'code',
        title: 'Step 1: Create Dashboard.jsx',
        body: 'Create a new file named `Dashboard.jsx` inside your `src/` folder and paste this logic:',
        code: `// src/Dashboard.jsx
import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // One function to toggle the boolean to its opposite state!
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); 
  };

  return (
    <div className="auth-card">
      <h2>Welcome to the Portal</h2>

      {/* TERNARY (? :) -> If true show Logout, else show Login */}
      {isLoggedIn ? (
        <button className="btn-logout" onClick={toggleLogin}>Log Out</button>
      ) : (
        <button className="btn-login" onClick={toggleLogin}>Log In</button>
      )}

      {/* LOGICAL AND (&&) -> Only show this div if isLoggedIn is true! */}
      {isLoggedIn && (
        <div className="secret-content">
          <h3>🤫 Secret Dashboard Data</h3>
          <p>Your bank balance is $1,000,000.</p>
        </div>
      )}
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Now, bridge your new component into your main application file so it actually renders on the screen.',
        code: `// src/App.jsx
import './App.css';
import Dashboard from './Dashboard'; // Import the new component

function App() {
  return (
    <div className="app-container">
      <h1>Week 2: Conditional Rendering</h1>
      <Dashboard /> 
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Add this to your `App.css` so our secret dashboard looks like a real secure vault when it opens!',
        code: `/* Add to App.css */
.auth-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  width: 350px;
  margin: 0 auto;
}

.btn-login { background: #10b981; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }
.btn-logout { background: #ef4444; color: white; border: none; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; }

.secret-content {
  margin-top: 1.5rem;
  padding: 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px dashed #10b981;
  border-radius: 8px;
  color: #10b981;
  animation: fadeIn 0.4s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The FAQ Accordion',
        timeEstimate: '30–40 min',
        body: 'Time to practice! Your task is to build a frequently asked question (FAQ) component that expands when clicked.\n\n**Requirements:**\n1. Create a file named `FaqBox.jsx`.\n2. Create a state variable called `isOpen` that starts as `false`.\n3. Create a `<div className="faq-card">` that holds an `<h3>` with a question (e.g., "What is React?").\n4. Add an `onClick` event to the `<h3>` or a button that toggles `isOpen` to true/false.\n5. Use the `&&` operator to display a `<p>` tag with the answer *only* when `isOpen` is true.\n6. Import and render it in your `App.jsx`.\n\n💡 **Hint:** To toggle a boolean, use `setIsOpen(!isOpen)` — the `!` operator flips `true` to `false` and `false` to `true`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use camelCase for <code>onClick</code>? <br/>✓ Did you pass a function to onClick without instantly calling it? <br/>✓ Did you use <code>isOpen && &lt;p&gt;Answer&lt;/p&gt;</code> to hide the text?'
      },
      {
        type: 'homework',
        title: 'The Dark / Light Mode Toggle',
        timeEstimate: '45–60 min',
        body: 'Build a Dark / Light mode theme switcher — a feature used in virtually every professional app.\n\n**Requirements:**\n1. Create a file named `ThemeSwitcher.jsx`.\n2. Create a state variable `isDark` that starts as `true` (dark mode on by default).\n3. Render a button that says "☀️ Switch to Light Mode" when dark, and "🌙 Switch to Dark Mode" when light. Use a **ternary operator** for this.\n4. Use `isDark` with a **conditional className** to apply a `.dark-card` or `.light-card` class to the outer div, giving it different background and text colours.\n5. Add a toggle function that calls `setIsDark(!isDark)` when the button is clicked.\n6. Import and display it in `App.jsx`.',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Does the button text change based on the current theme state? <br/>✓ Does the card background colour change when you click? <br/>✓ Did you use a ternary operator for the button label and a conditional className for the styles? <br/>✓ <strong>Bonus:</strong> Save the theme to <code>localStorage</code> so it remembers the user’s preference after a page refresh — use <code>localStorage.setItem("theme", isDark ? "dark" : "light")</code>.'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'What is the correct way to write a click event in React?',
            options: [
              'onclick={handleClick}',
              'onClick={handleClick}',
              'on-click="handleClick"',
              'click={handleClick}'
            ],
            correct: 1
          },
          {
            question: 'Why is <button onClick={calculateScore()}> DANGEROUS in React?',
            options: [
              'It creates a syntax error.',
              'Parentheses are not allowed in JSX.',
              'It calls the function immediately on load, which can cause an infinite loop if it updates state.',
              'It will only run once and then permanently break the button.'
            ],
            correct: 2
          },
          {
            question: 'If you want to pass a value to a function inside an onClick, what is the safe way to do it?',
            options: [
              'onClick={updateScore(5)}',
              'onClick={() => updateScore(5)}',
              'onClick="updateScore(5)"',
              'onClick={function: updateScore(5)}'
            ],
            correct: 1
          },
          {
            question: 'You want to show an "Error" banner ONLY if hasError is true, and show NOTHING otherwise. Which is the best tool?',
            options: [
              'The Ternary Operator (? :)',
              'The Logical AND (&&)',
              'A standard JavaScript if/else block inside the return statement.',
              'A switch statement.'
            ],
            correct: 1
          },
          {
            question: 'How do you extract the text a user just typed into an <input> field?',
            options: [
              'e.value',
              'e.target.text',
              'e.target.value',
              'input.getValue()'
            ],
            correct: 2
          }
        ]
      }
    ]
  },
  // --- DAY 5 ---
  {
    dayNumber: 5, week: 2,
    title: 'Lists & Keys',
    subtitle: 'Rendering arrays of data dynamically',
    topics: ['Array.map()', 'Dynamic UI', 'The Key Prop', 'List of Components', 'Knowledge Check'],
    milestone: { icon: '📋', title: 'Data-Driven UI', text: 'Stop hardcoding your components. Today you will learn how to take an array of data and automatically generate a beautiful interface for it.' },
    sections: [
      {
        type: 'text',
        title: 'Say Goodbye to Hardcoding',
        body: 'If you are building Netflix and have a list of 100 movies, you cannot write `<MovieCard />` 100 times in your code. Instead, we use JavaScript to loop over the data and generate the components for us.\n\nIn React, we do not use `for` loops or `.forEach()`. Instead, we use the **`.map()`** array method. Why? Because `.map()` takes an array of data and *returns a brand new array* of JSX elements that React can instantly draw on the screen.',
        boxType: 'tip',
        boxTitle: 'Quick Vanilla JS Refresher: .map()',
        boxBody: 'The <code>.map()</code> method runs a function on every item in an array. <br/><code>const numbers = [1, 2, 3];</code><br/><code>const doubled = numbers.map(num => num * 2);</code><br/>In React, instead of returning math, we return HTML/JSX: <code>num => &lt;p&gt;{num}&lt;/p&gt;</code>.'
      },
      {
        type: 'code',
        title: 'Rendering a Basic List',
        body: 'Here is how we take a simple array of strings and turn it into an HTML list (`<ul>`). Notice how we wrap the `.map()` function inside curly braces `{}` so React knows it is JavaScript!',
        code: `export default function TechStack() {
  const skills = ["React", "TypeScript", "Node.js", "Python"];

  return (
    <div className="card">
      <h2>My Tech Stack</h2>
      <ul>
        {/* We map over the array and return an <li> for every string */}
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Beginner Trap: The Blank Screen of Death',
        body: 'When writing your `.map()` arrow functions, pay extremely close attention to the brackets you use after the arrow `=>`. If you use the wrong ones, your list will not render and React will not give you an error!',
        boxType: 'danger',
        boxTitle: 'Parentheses ( ) vs Curly Braces { }',
        boxBody: 'If you use <strong>curly braces</strong>, you MUST write the word <code>return</code>:<br/><code>skills.map(skill => { return &lt;li&gt;{skill}&lt;/li&gt; })</code><br/><br/>If you use <strong>parentheses</strong> (or no brackets), the return is automatic (implicit):<br/><code>skills.map(skill => ( &lt;li&gt;{skill}&lt;/li&gt; ))</code><br/><br/>If you write <code>skills.map(skill => { &lt;li&gt;...&lt;/li&gt; })</code> without the word <code>return</code>, you will just get a blank screen!'
      },
      {
        type: 'text',
        title: '🔑 The Danger Zone: The Key Prop',
        body: 'Did you notice the `key={skill}` in the code above? **This is mandatory.**\n\nWhenever you map over a list in React, the outermost element you return MUST have a unique `key` prop. If you forget it, React will scream at you in the console with a red warning.',
        boxType: 'danger',
        boxTitle: 'Why does React need Keys?',
        boxBody: 'Remember the Virtual DOM from Day 1? When an array changes (maybe an item is deleted or reordered), React needs to figure out exactly which item changed so it only updates that tiny piece of the screen. <br><br>The <code>key</code> is like a tracking ID. If you do not provide it, React gets confused, destroys the whole list, and redraws it from scratch — which is terrible for performance.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Netflix Movie List',
        body: 'Let\'s build something real. We are going to take an array of Movie Objects (like you would get from an API) and map them into reusable `<MovieCard />` components.'
      },
      {
        type: 'code',
        title: 'Step 1: Create MovieList.jsx',
        body: 'Create a new file named `MovieList.jsx`. We will put our data array at the top, and map over it in the `return`.',
        code: `// src/MovieList.jsx

// 1. A simulated database array of objects
const MOVIE_DATA = [
  { id: "m1", title: "Inception", year: 2010, rating: "⭐️⭐️⭐️⭐️⭐️" },
  { id: "m2", title: "Interstellar", year: 2014, rating: "⭐️⭐️⭐️⭐️" },
  { id: "m3", title: "The Dark Knight", year: 2008, rating: "⭐️⭐️⭐️⭐️⭐️" }
];

export default function MovieList() {
  return (
    <div className="movie-container">
      <h2>Christopher Nolan Classics</h2>
      
      <div className="movie-grid">
        {MOVIE_DATA.map((movie) => (
          // The KEY goes on the outermost element returned by the map!
          <div key={movie.id} className="movie-card">
            <h3>{movie.title}</h3>
            <p className="year">Release: {movie.year}</p>
            <p className="rating">{movie.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Bridge your `MovieList` into your main `App.jsx`.',
        code: `// src/App.jsx
import './App.css';
import MovieList from './MovieList';

function App() {
  return (
    <div className="app-container">
      <h1>Week 2: Lists & Keys</h1>
      <MovieList />
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Paste this into `App.css` to give it that dark, cinematic feel.',
        code: `/* Add to App.css */
.movie-container {
  background: #0f172a;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto;
}

.movie-container h2 { color: #38bdf8; text-align: center; margin-bottom: 2rem; }

.movie-grid {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
}

.movie-card {
  background: #1e293b;
  border: 1px solid #334155;
  padding: 1.5rem;
  border-radius: 8px;
  width: 200px;
  text-align: center;
  transition: transform 0.2s;
}

.movie-card:hover { transform: translateY(-5px); border-color: #38bdf8; }
.movie-card h3 { margin: 0 0 0.5rem 0; font-size: 1.2rem; }
.year { color: #94a3b8; font-size: 0.9rem; margin-bottom: 1rem; }
.rating { font-size: 1.2rem; margin: 0; }`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The High Score Leaderboard',
        timeEstimate: '30 min',
        body: 'Time to practice! Your task is to build a leaderboard ranking component.\n\n**Requirements:**\n1. Create a file named `Leaderboard.jsx`.\n2. Inside the file (but above the component), create an array of objects called `PLAYERS`. Each object should have an `id`, `name`, and `score` (e.g., `{ id: 1, name: "David", score: 9500 }`). Add at least 3 players.\n3. Build the `Leaderboard` component. Map over the `PLAYERS` array and render a `<div>` for each player showing their name and score.\n4. Make sure the parent `<div>` inside the map has a `key` prop!\n5. Import and display it in `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use <code>.map()</code> inside curly braces <code>{}</code> in your JSX? <br/>✓ Did you use <code>key={player.id}</code> on the outermost element returned by the map? <br/>✓ Did you export the component and import it successfully?'
      },
      {
        type: 'homework',
        title: 'Combining .map() with Components',
        timeEstimate: '45–60 min',
        body: 'In the Guided Project, we mapped the array directly into standard HTML `<div>` tags. In the real world, you map data into **Reusable Components** (like what we learned on Day 2!).\n\n**Requirements:**\n1. In your `MovieList.jsx` file, create a second, separate component at the bottom of the file called `function MovieItem({ title, year, rating })`. \n2. Move the HTML structure (the `div`, `h3`, `p` tags) out of the `.map()` and into the `MovieItem` return statement.\n3. Update your `.map()` to return `<MovieItem />` components instead of divs! Pass the data down as props (e.g. `title={movie.title}`).\n4. **CRITICAL:** Where does the `key` go now? It must go on the `<MovieItem>` tag itself, inside the map (e.g. `<MovieItem key={movie.id} ... />`).',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you extract the UI into a child component? <br/>✓ Does your map look like: <code>MOVIE_DATA.map(movie =&gt; &lt;MovieItem key={movie.id} title={movie.title} /&gt;)</code>? <br/>✓ Is the <code>key</code> placed on the custom component tag?'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Which JavaScript array method is exclusively used to render lists of data in React?',
            options: [
              '.forEach()',
              '.filter()',
              '.map()',
              '.reduce()'
            ],
            correct: 2
          },
          {
            question: 'Why does React require a "key" prop when mapping over an array?',
            options: [
              'To apply unique CSS styles to each element.',
              'To help the Virtual DOM track which specific items changed, were added, or removed.',
              'To pass secret data to the backend database.',
              'Because JavaScript arrays require keys by default.'
            ],
            correct: 1
          },
          {
            question: 'What is the BEST value to use for a key prop?',
            options: [
              'The index of the array (0, 1, 2...).',
              'A random number generated by Math.random().',
              'A unique ID from your data (like a database ID).',
              'The same string for every item.'
            ],
            correct: 2
          },
          {
            question: 'Where must the key prop be placed?',
            options: [
              'On the <ul> or parent wrapper outside the map.',
              'On the outermost element or component returned INSIDE the .map() callback.',
              'On every single HTML tag inside the map.',
              'It doesn\'t matter as long as it is somewhere in the component.'
            ],
            correct: 1
          },
          {
            question: 'If you use .map() to return a custom <UserCard /> component, what is the correct syntax?',
            options: [
              'users.map(u => <UserCard key={u.id} name={u.name} />)',
              '{users.map(u => UserCard(u))}',
              '<UserCard map={users} />',
              'users.forEach(u => <UserCard />)'
            ],
            correct: 0
          }
        ]
      }
    ]
  },
  // --- DAY 6 ---
  {
    dayNumber: 6, week: 2,
    title: 'Forms & User Input',
    subtitle: 'Controlled components and submitting data',
    topics: ['Controlled Inputs', 'onSubmit', 'e.preventDefault()', 'Clearing Forms', 'Certification Exam'],
    milestone: { icon: '📝', title: 'Two-Way Communication', text: 'Today you learn how to safely capture user data, prevent page reloads, and use forms to build truly interactive applications.' },
    sections: [
      {
        type: 'text',
        title: 'The "Controlled Component" Pattern',
        body: 'In standard HTML, input fields (`<input>`, `<textarea>`) manage their own state. You type, and the browser remembers what you typed. \n\nIn React, we do not let the browser manage data — we want React to be the single source of truth. We do this by "controlling" the input. \n\nTo control an input, you must do TWO things:\n1. Tie the `value` attribute to a state variable.\n2. Tie the `onChange` event to a state setter function.',
        boxType: 'tip',
        boxTitle: 'The Input Loop',
        boxBody: 'When a user types "A", the <code>onChange</code> function fires and updates the state. React then re-renders the component, passing the new state back into the input\'s <code>value</code> attribute. It happens so fast the user cannot tell, but React is entirely in control.'
      },
      {
        type: 'text',
        title: '⚠️ The Page Refresh Killer',
        body: 'HTML forms have a built-in behavior from the 1990s: when you click a `<button type="submit">`, the browser attempts to send the data to a server and **refreshes the page**. \n\nIn a Single Page Application like React, a page refresh destroys all your state! You lose everything.',
        boxType: 'danger',
        boxTitle: 'e.preventDefault() is Mandatory',
        boxBody: 'Whenever you write an <code>onSubmit</code> function for a form, the very first line of code inside that function MUST be <code>e.preventDefault();</code>. This stops the browser from refreshing the page, allowing React to handle the data silently in the background.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Speta Newsletter',
        body: 'Let\'s build a clean, controlled newsletter signup form. We will capture an email address, prevent the page refresh, and clear the input field after the user submits.'
      },
      {
        type: 'code',
        title: 'Step 1: Create Newsletter.jsx',
        body: 'Create a new file named `Newsletter.jsx`. Notice how we attach `onSubmit` to the `<form>` tag, not the button!',
        code: `// src/Newsletter.jsx
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    // 1. STOP THE PAGE REFRESH!
    e.preventDefault(); 
    
    // 2. Do something with the data
    alert(\`Success! \${email} has been added to the Speta mailing list.\`);
    
    // 3. Clear the form by resetting the state to an empty string
    setEmail(""); 
  };

  return (
    <div className="form-card">
      <h2>Join the Tech Newsletter</h2>
      <p>Get the latest AI and React insights delivered weekly.</p>
      
      {/* Attach onSubmit to the FORM, not the button */}
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input 
          type="email" 
          placeholder="Enter your email..." 
          value={email} /* 1. Controlled Value */
          onChange={(e) => setEmail(e.target.value)} /* 2. Controlled Setter */
          required
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Import and render your new form component.',
        code: `// src/App.jsx
import './App.css';
import Newsletter from './Newsletter';

function App() {
  return (
    <div className="app-container">
      <h1>Week 2: Forms & User Input</h1>
      <Newsletter />
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Paste this into `App.css` to give the form a clean, modern tech aesthetic.',
        code: `/* Add to App.css */
.form-card {
  background: #1e293b;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3);
}

.form-card h2 { color: #f8fafc; margin-top: 0; }
.form-card p { color: #94a3b8; font-size: 0.9rem; margin-bottom: 1.5rem; }

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.newsletter-form input {
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #475569;
  background: #0f172a;
  color: white;
  font-size: 1rem;
  outline: none;
}

.newsletter-form input:focus {
  border-color: #38bdf8;
  box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.2);
}

.newsletter-form button {
  background: #38bdf8;
  color: #0f172a;
  border: none;
  padding: 0.8rem;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}

.newsletter-form button:hover { background: #0ea5e9; }`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Contact Form',
        timeEstimate: '30–45 min',
        body: 'Time to handle multiple inputs! Your task is to build a contact form for a portfolio website.\n\n**Requirements:**\n1. Create a file named `ContactForm.jsx`.\n2. Create TWO separate state variables: `name` and `message`.\n3. Build a `<form>` containing an `<input type="text">` for the name and a `<textarea>` for the message.\n4. Make sure both are "controlled" (tie their `value` and `onChange` to your state variables).\n5. Create a `handleSubmit` function that prevents the page refresh, alerts "Message sent by [Name]!", and clears both fields.\n6. Import and render it in `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use <code>e.preventDefault()</code> inside your submit function? <br/>✓ Did you attach your submit function to the <code>&lt;form onSubmit={...}&gt;</code> rather than the button? <br/>✓ Did both input fields reset to empty strings after the alert?'
      },
      {
        type: 'homework',
        title: 'The Ultimate Test: The Task Manager',
        timeEstimate: '60+ min',
        body: 'This is where Week 2 comes together. You will combine what you learned on Day 5 (Mapping Arrays) with what you learned today (Forms) to build a working To-Do List.\n\n**Requirements:**\n1. Create `TaskManager.jsx`.\n2. Create a state variable for your list of tasks: `const [tasks, setTasks] = useState(["Learn React", "Read Comics"])`.\n3. Create a state variable for the new task input: `const [newTask, setNewTask] = useState("")`.\n4. Build a form with an input and a submit button. Tie the input to the `newTask` state.\n5. On submit, prevent the default refresh, and use the spread operator to add the new task to the array: `setTasks([...tasks, newTask])`. Then clear the input.\n6. Below the form, map over the `tasks` array and render a `<div className="task">` for each one.\n\n*Hint: If you get stuck, look at the "Never Mutate State" section from Day 3 to remember how the Spread Operator works!*',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you create two separate state variables (one array, one string)? <br/>✓ Does typing in the input work without crashing? <br/>✓ When you submit, does the new task appear at the bottom of the list instantly? <br/>✓ Did you remember the <code>key</code> prop in your <code>.map()</code> function?'
      },
      {
        type: 'exam',
        title: 'Week 2 Final Certification Exam',
        questions: [
          {
            question: 'What is the correct way to attach a click event to a button in React?',
            options: ['onclick={handleClick}', 'onClick={handleClick}', 'onClick={handleClick()}', 'click="handleClick"'],
            correct: 1
          },
          {
            question: 'Why is writing onClick={myFunction()} with parentheses dangerous?',
            options: ['Parentheses are not allowed in JSX.', 'It calls the function immediately when the component loads, which can cause an infinite loop.', 'It prevents the button from being clicked.', 'It causes a CSS error.'],
            correct: 1
          },
          {
            question: 'Which tool is best used when you want to show a component IF a condition is true, and show NOTHING if it is false?',
            options: ['The Ternary Operator (? :)', 'A standard if/else block', 'The Logical AND operator (&&)', 'A Switch statement'],
            correct: 2
          },
          {
            question: 'Which JavaScript array method is exclusively used to loop over data and generate lists of UI elements in React?',
            options: ['.forEach()', '.map()', '.filter()', '.reduce()'],
            correct: 1
          },
          {
            question: 'Why does React require a "key" prop when rendering a list of items?',
            options: ['To apply unique styles.', 'To help the Virtual DOM track which specific items changed, were added, or removed.', 'Because JavaScript arrays require keys.', 'To securely encrypt the data.'],
            correct: 1
          },
          {
            question: 'Where MUST the "key" prop be placed when mapping an array?',
            options: ['On the parent container outside the map.', 'On every single HTML tag inside the map.', 'On the outermost element or component returned inside the .map() callback.', 'Inside the App.jsx file.'],
            correct: 2
          },
          {
            question: 'What makes an input field a "Controlled Component" in React?',
            options: ['The input is styled with CSS.', 'The browser handles the memory of the input.', 'The input value is tied to a State variable, and onChange updates that State.', 'The input is inside a <form> tag.'],
            correct: 2
          },
          {
            question: 'What happens to a React app if you forget to use e.preventDefault() in a form submission?',
            options: ['The button breaks.', 'React throws a syntax error.', 'The browser refreshes the page, destroying all your React State.', 'The form cannot be cleared.'],
            correct: 2
          },
          {
            question: 'Where is the correct place to attach your form submission function?',
            options: ['<button onSubmit={handleSubmit}>', '<form onSubmit={handleSubmit}>', '<input onSubmit={handleSubmit}>', '<div onSubmit={handleSubmit}>'],
            correct: 1
          },
          {
            question: 'How do you clear a controlled input field after the user clicks submit?',
            options: ['document.getElementById("input").value = "";', 'e.target.reset();', 'Call e.preventDefault() again.', 'Set the State variable tied to that input back to an empty string (e.g., setText("")).'],
            correct: 3
          }
        ]
      }
    ]
  },
// --- DAY 7 ---
  {
    dayNumber: 7, week: 3,
    title: 'The useEffect Hook',
    subtitle: 'Connecting your app to the outside world',
    topics: ['What is a Side Effect?', 'useEffect Syntax', 'The Dependency Array', 'Cleanup Functions', 'Knowledge Check'],
    milestone: { icon: '🌐', title: 'Welcome to Week 3!', text: 'Your apps are about to get real. Today, you learn how to reach outside of React to fetch data from the internet, control the browser, and manage timers.' },
    sections: [
      {
        type: 'text',
        title: 'What is a Side Effect?',
        body: 'React components are supposed to be "pure" — they take in data (Props/State) and return UI (JSX). \n\nBut sometimes, your component needs to do things that fall *outside* of simply drawing UI. We call these **Side Effects**. Common side effects include:\n1. Fetching data from an API or database.\n2. Setting a timer or interval (`setTimeout`).\n3. Directly changing the browser (like updating `document.title`).\n\nTo handle these safely without breaking React\'s rendering process, we use the **`useEffect`** Hook.',
        boxType: 'info',
        boxTitle: 'The Component Lifecycle',
        boxBody: 'Think of a component like a person. It is <strong>born</strong> (Mounts onto the screen), it <strong>grows</strong> (Updates when state changes), and it <strong>dies</strong> (Unmounts/disappears from the screen). <code>useEffect</code> lets you run specific code at these exact moments.'
      },
      {
        type: 'text',
        title: '⚠️ The Dependency Array (The Infinite Loop Killer)',
        body: 'The `useEffect` hook takes two arguments: a function, and an array.\n`useEffect(() => { /* your code */ }, [dependencies]);`\n\nThe second argument (the array) tells React exactly *when* to run the effect. If you mess this up, you will crash your browser.',
        boxType: 'danger',
        boxTitle: 'The 3 Rules of the Dependency Array',
        boxBody: '<strong>1. No Array:</strong> <code>useEffect(() => {...})</code><br/>Runs on EVERY single render. DANGEROUS! Never do this when fetching data.<br><br><strong>2. Empty Array:</strong> <code>useEffect(() => {...}, [])</code><br/>Runs exactly ONCE when the component first loads. Perfect for initial data fetching.<br><br><strong>3. Array with variables:</strong> <code>useEffect(() => {...}, [score])</code><br/>Runs on load, and then runs again ONLY if the `score` variable changes.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Random Quote API',
        body: 'Let\'s build a component that reaches out to a real, live public API on the internet and fetches a random piece of advice the moment the page loads.'
      },
      {
        type: 'code',
        title: 'Step 1: Create QuoteGenerator.jsx',
        body: 'Create a new file named `QuoteGenerator.jsx`. Notice how we use the empty dependency array `[]` so we only fetch the quote ONE time when the component mounts.',
        code: `// src/QuoteGenerator.jsx
import { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [advice, setAdvice] = useState("Loading advice...");

  // The useEffect hook runs automatically!
  useEffect(() => {
    // 1. Define the async fetch function
    const fetchAdvice = async () => {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      
      // 2. Update our state with the fetched data
      setAdvice(data.slip.advice);
    };

    // 3. Call the function
    fetchAdvice();
    
  }, []); // <-- EMPTY ARRAY: Run only ONCE on load!

  return (
    <div className="quote-card">
      <h2>Daily Advice</h2>
      <p>"{advice}"</p>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Import and render your new component so we can see it on the screen.',
        code: `// src/App.jsx
import './App.css';
import QuoteGenerator from './QuoteGenerator';

function App() {
  return (
    <div className="app-container">
      <h1>Week 3: APIs and Side Effects</h1>
      <QuoteGenerator />
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Styling (App.css)',
        body: 'Paste this into `App.css` to make our quote card look elegant.',
        code: `/* Add to App.css */
.quote-card {
  background: linear-gradient(145deg, #1e293b, #0f172a);
  padding: 2.5rem;
  border-radius: 16px;
  text-align: center;
  border: 1px solid #38bdf8;
  width: 100%;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 10px 25px -5px rgba(56, 189, 248, 0.2);
}

.quote-card h2 { color: #38bdf8; text-transform: uppercase; letter-spacing: 2px; font-size: 0.9rem; margin-bottom: 1rem; }
.quote-card p { color: white; font-size: 1.5rem; font-style: italic; line-height: 1.4; margin: 0; }
.quote-card p::before { content: open-quote; color: #38bdf8; font-size: 2rem; }
.quote-card p::after { content: close-quote; color: #38bdf8; font-size: 2rem; }`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Tab Title Sync',
        timeEstimate: '20 min',
        body: 'Side effects aren\'t just for APIs! Let\'s control the browser itself.\n\n**Requirements:**\n1. Create a file named `TitleUpdater.jsx`.\n2. Create a state variable called `notificationCount` (start at 0).\n3. Create a button that increases `notificationCount` by 1 when clicked.\n4. Write a `useEffect` hook. Inside it, write: `document.title = "You have " + notificationCount + " notifications";`\n5. **Crucial:** You want this effect to run every time `notificationCount` changes. What should you put in the dependency array?\n6. Render it in `App.jsx` and watch the browser tab name change when you click!',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you import <code>useEffect</code> at the top? <br/>✓ Did you put <code>[notificationCount]</code> in your dependency array? <br/>✓ Does clicking the button immediately change the text at the top of your web browser tab?'
      },
      {
        type: 'homework',
        title: 'The Cleanup Function (Stopwatch Timer)',
        timeEstimate: '45 min',
        body: 'If you start a timer in a component, and that component is deleted from the screen, the timer will keep running in the background forever and cause a memory leak! You must clean it up.\n\n**Requirements:**\n1. Create `Timer.jsx` with a `seconds` state (starting at 0).\n2. Write a `useEffect` with an empty array `[]`.\n3. Inside the effect, start a timer: `const interval = setInterval(() => { setSeconds(s => s + 1) }, 1000);`\n4. At the very end of your effect, **return a function** that clears the interval: `return () => clearInterval(interval);`\n5. Render the seconds on the screen.',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you use <code>setSeconds(s =&gt; s + 1)</code> instead of <code>seconds + 1</code> to get the most recent state? <br/>✓ Did you <code>return</code> an arrow function inside your useEffect to clean up the interval?'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Which of the following is considered a "Side Effect" in React?',
            options: [
              'Mapping an array into a list of <li> elements.',
              'Passing Props from a parent to a child component.',
              'Fetching data from an external database API.',
              'Using a ternary operator for conditional rendering.'
            ],
            correct: 2
          },
          {
            question: 'What happens if you use useEffect WITHOUT a dependency array at all?',
            options: [
              'The effect will never run.',
              'The effect will only run once when the component first mounts.',
              'The effect will run on every single re-render, potentially causing an infinite loop.',
              'React will throw a syntax error.'
            ],
            correct: 2
          },
          {
            question: 'If you only want an API to be called EXACTLY ONCE when the page loads, what should you pass as the dependency array?',
            options: [
              'Nothing',
              'An empty array: []',
              'An array with the word "mount": ["mount"]',
              'An empty object: {}'
            ],
            correct: 1
          },
          {
            question: 'Why do we sometimes need to return a "Cleanup Function" inside a useEffect?',
            options: [
              'To delete the component from the screen.',
              'To reset all state variables to zero.',
              'To stop background processes like timers or event listeners from continuing to run after the component unmounts.',
              'To wipe the database clear.'
            ],
            correct: 2
          },
          {
            question: 'You want an effect to run only when the "userId" state variable changes. How should your dependency array look?',
            options: [
              'useEffect(() => {...}, [])',
              'useEffect(() => {...}, [userId])',
              'useEffect(() => {...}, [change(userId)])',
              'useEffect(() => {...}).onChange(userId)'
            ],
            correct: 1
          }
        ]
      }
    ]
  }
];