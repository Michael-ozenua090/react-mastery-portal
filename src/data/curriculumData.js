// src/data/curriculumData.js

export const WEEK_COLORS = {
  1: { color: '#00d4aa', label: 'Week 1 â€” Foundations' },
  2: { color: '#f7b731', label: 'Week 2 â€” Core Concepts' },
  3: { color: '#a371f7', label: 'Week 3 â€” Intermediate' },
  4: { color: '#f78166', label: 'Week 4 â€” Advanced & Project' }
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
        boxBody: 'Vanilla JS gets messy fast when your UI has lots of moving parts. React keeps everything organised into small, reusable pieces called components. <br/><br/><strong>The Virtual DOM in plain English:</strong> Imagine you have a printed recipe book (the real DOM) and a rough notepad (the Virtual DOM). When a recipe changes, you scribble the edit on the notepad first, compare it to the book, then only erase and rewrite the exact sentence that changed â€” instead of reprinting the whole book. That is how React updates the screen so fast.'
      },
      {
        type: 'setup',
        title: 'Setting Up Your Project with Vite',
        body: 'We use Vite to create React apps. It is blazing fast because it only updates the exact file you change in milliseconds. When you want to stop the server at any time, press **Ctrl+C** in the terminal.',
        code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`,
        lang: 'bash',
        boxType: 'danger',
        boxTitle: 'Step 0: Clear the default App.css first!',
        boxBody: 'Vite generates a default <code>App.css</code> file pre-filled with styles like <code>.hero</code>, <code>.counter</code>, and <code>.card</code>. These will conflict with your own styles and cause confusing visual bugs that are hard to trace. <strong>Before writing any code, open <code>src/App.css</code> and delete everything inside it.</strong> Start every project with a completely blank CSS file.'
      },
      {
        type: 'text',
        title: '🔧 Install React DevTools (Do This Now!)',
        body: 'React DevTools is a free browser extension that gives you superpowers. Without it, when your code breaks you are essentially debugging blindfolded. With it, you can see exactly what data is inside every component in real time.\n\n**Install it in 30 seconds:**\n1. Open Chrome (or Firefox) and search for **"React Developer Tools extension"**.\n2. Click "Add to Chrome" â†’ "Add extension".\n3. A small React icon will appear in your browser toolbar.\n4. Once your Vite app is running, click the icon â€” it turns from grey to coloured. You will see two new tabs in Chrome DevTools (F12): **"âš› Components"** and **"âš› Profiler"**.',
        boxType: 'tip',
        boxTitle: 'What does it actually show me?',
        boxBody: 'The <strong>Components</strong> tab shows your entire component tree â€” every component on the page, its current props, and its current state. When you click a button and the count changes, you can <em>watch the state update live</em> in the panel. This is the single most important debugging tool you will use throughout this course.'
      },
      {
        type: 'text',
        title: 'ã€°ï¸ Those Squiggly Lines in VS Code â€” What Do They Mean?',
        body: 'When you first open your project in VS Code, you will see coloured underlines beneath some of your code. These come from a tool called **ESLint** â€” a built-in code spell-checker that catches common mistakes before you even run the app.\n\n- **Red squiggles:** A syntax error â€” your code will not run until you fix it.\n- **Yellow squiggles:** A warning â€” the code will run, but you are doing something React considers risky (like a missing `key` prop in a list).\n- **Blue squiggles:** An informational hint.\n\nYour first instinct should be to hover over the squiggle â€” VS Code shows you exactly what is wrong and often suggests a fix.',
        boxType: 'info',
        boxTitle: 'ESLint is on your side',
        boxBody: 'Think of ESLint as a senior developer sitting next to you, pointing out things before they become bugs. Do not dismiss the warnings â€” they are almost always right. When you are stuck and the app is not behaving as expected, look at the squiggly lines first.'
      },
      {
        type: 'filetree',
        title: 'Understanding the File Structure',
        body: 'After setup, your project looks like this. Pay close attention to which files you should and should not edit:',
        tree: `my-app/
â”œâ”€â”€ ðŸ“ node_modules/       â† ðŸš« NEVER TOUCH â€” installed packages live here
â”œâ”€â”€ ðŸ“ public/             â† âœ… Static files (images like avatar.png go here)
â”œâ”€â”€ ðŸ“ src/                â† âœ… YOUR CODE GOES HERE
â”‚   â”œâ”€â”€ App.jsx            â† âœ… Main app component (you will edit this a lot)
â”‚   â”œâ”€â”€ App.css            â† âœ… Styles for App
â”‚   â””â”€â”€ main.jsx           â† ⚠️  Entry point â€” leave alone for now
â””â”€â”€ package.json           â† ⚠️  Project config`
      },
      {
        type: 'rules',
        title: 'The Rules of JSX',
        body: "JSX looks like HTML, but it's actually JavaScript under the hood. Because of this, it has strict rules:",
        rules: [
          { num: '1', title: 'One root element', body: 'Every JSX block needs exactly one parent. Wrap siblings in <div> or an empty fragment <>...</>' },
          { num: '2', title: 'className not class', body: '"class" is a JS keyword. Always write className="myClass" in JSX.' },
          { num: '3', title: 'Close every tag', body: '<img />, <br />, <input /> â€” the slash is mandatory for self-closing tags in JSX.' }
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
        boxBody: 'Look at line 3 in the code: <code>{`card theme-${user}`}</code>. Those backtick quotes (<code>`</code>) are called a <strong>Template Literal</strong> â€” a special type of JavaScript string that lets you embed variables directly using <code>${}</code>. Compare: <br/><strong>Old way:</strong> <code>"card theme-" + user</code> <br/><strong>Template literal:</strong> <code>`card theme-${user}`</code> <br/>They do the same thing â€” template literals are just cleaner to read. You will see them throughout this course whenever we need to mix a variable into a string.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Digital Business Card',
        body: "Let's build our first real React page. We will create a professional digital ID card that uses JSX expressions and className styling â€” exactly how a real developer would build it."
      },
      {
        type: 'code',
        title: 'Step 1: Edit App.jsx',
        body: "Delete the default code in your App.jsx and build this digital ID. Notice how we use `{}` to inject our data.",
        code: `import './App.css';

function App() {
  const studentName = "Michael Ozenua .O";
  const track = "Lead Instructor @ React Mastery";

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
  color: #c9d1d9; 
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
        timeEstimate: '30â€“45 min',
        body: 'Now it is your turn to write code from scratch. Clear out your App.jsx and App.css. Your task is to build a single "Tweet" card.\n\n**Requirements for Audit:**\n1. You must define a `const username` and `const tweetBody` at the top of your function.\n2. You must inject those variables into your JSX using `{}`.\n3. You must use `className` to style it to look like a Tweet (white box, gray border, bold name).\n4. You must add an image of a heart icon for the "Like" button, and it must load from your `/public` folder.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use exactly one parent <code>&lt;div&gt;</code>? <br/>âœ“ Did you use <code>className</code> instead of <code>class</code>? <br/>âœ“ Does your <code>&lt;img /&gt;</code> tag have a closing slash?'
      },
      {
        type: 'homework',
        title: 'Customise Your Business Card',
        timeEstimate: '30â€“45 min',
        body: 'You built a Digital Business Card in class using JSX variables and className. Now extend it using **only what you have learned today** â€” no new concepts needed!\n\n**Requirements:**\n1. Add two new `const` variables inside your `App` function: `const location = "Lagos, Nigeria"` and `const skills = "HTML Â· CSS Â· JavaScript"`.\n2. Render both variables on your card inside their own `<p>` tags, each with a unique `className`.\n3. Style the new elements in `App.css` â€” pick your own font size and colour.\n4. Change the entire colour scheme of the card â€” try a purple theme (`#7c3aed`) or a warm amber theme (`#f97316`).\n5. **Bonus:** Add a second `<div className="profile-card">` below the first with completely different variable values â€” a fictional second person.',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you declare your new variables at the <strong>top</strong> of the function, before the <code>return</code>? <br/>âœ“ Did you use curly braces <code>{location}</code> and <code>{skills}</code> to inject them into the JSX? <br/>âœ“ Did you use <code>className</code> (not <code>class</code>) on every element you styled? <br/>âœ“ <strong>Bonus:</strong> Does the second card show completely different data and a different colour scheme?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/writing-markup-with-jsx">Writing Markup with JSX</a>'
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
              'Nothing â€” JSX allows multiple root elements by default'
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
        body: 'Writing `props.` over and over gets repetitive. Modern React developers use standard JavaScript **Object Destructuring** right inside the function parameters to pull out exactly what they need instantly. If you have not seen this before â€” destructuring is a JavaScript trick that unpacks values from an object directly into named variables, so you can use them without writing `props.name` every time.',
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
        boxBody: 'Destructuring is a standard JavaScript shortcut â€” it is not React-specific. It unpacks values from an object into separate variables in one line. <br/><strong>Without destructuring:</strong> <code>const name = props.name; const grade = props.grade;</code> <br/><strong>With destructuring:</strong> <code>const { name, grade } = props;</code> <br/>React lets us do this shortcut right inside the function parentheses: <code>function StudentCard({ name, grade })</code>. Same result, cleaner code.'
      },
      {
        type: 'code',
        title: 'Bonus Skill: Default Prop Values',
        body: 'What happens if a parent forgets to pass a required prop? By default, you get `undefined` â€” which can cause blank text or broken layouts. The fix is simple: add a default value directly inside the destructuring parameters.',
        code: `// If 'name' is not passed, it falls back to "Guest" automatically
function Greeting({ name = "Guest", role = "Member" }) {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}

// This works perfectly â€” 'role' will show "Member" by default
<Greeting name="Precious" />`,
        lang: 'jsx',
        boxType: 'tip',
        boxTitle: 'ðŸ’¡ Default Props in the Real World',
        boxBody: 'You will use default props constantly for optional data â€” things like avatar images, placeholder text, or fallback labels. The pattern <code>{ propName = defaultValue }</code> is just standard JavaScript destructuring with a default assignment. It is not a React-specific feature.'
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
      <h1 className="team-title">React Mastery Tech Team</h1>
      
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
.team-role { color: #c9d1d9; margin-bottom: 1rem; font-size: 0.9rem; }
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
        timeEstimate: '45â€“60 min',
        body: 'Time to prove you understand props and files! Your task is to build a reusable `<Product />` component and display 3 different items on the screen.\n\n**Requirements:**\n1. Create a new file named `Product.jsx` inside your `src/` folder.\n2. In that file, build and `export default` a `Product` component that accepts three props: `title`, `price`, and `isOnSale`.\n3. Render the `title` and `price` inside the component using `{}`.\n4. Use a ternary operator (`? :`) to display a "SALE!" badge only if `isOnSale` is true.\n5. Open your `App.jsx`, import your new `Product` component, and render three of them with different data. Make sure at least one is on sale, and one is not.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you <code>export default</code> the Product component and <code>import</code> it into App.jsx? <br/>âœ“ Did you use curly braces <code>{ title, price }</code> in the parameters? <br/>âœ“ Did you pass strings in quotes (<code>title="Shoes"</code>) but booleans/numbers in curly braces (<code>price={50} isOnSale={true}</code>)?'
      },
      {
        type: 'homework',
        title: 'Expand the ProfileCard',
        timeEstimate: '45â€“60 min',
        body: 'Your `ProfileCard` currently shows `name`, `role`, and a Team Lead badge. Now make it richer by adding two brand-new props â€” using only what you know: props and destructuring.\n\n**Requirements:**\n1. Open `ProfileCard.jsx` and add `avatar` and `skills` to the destructured parameters: `{ name, role, isLead, avatar, skills }`.\n2. Render `avatar` (an emoji string like `"ðŸ‘¨\u200dðŸ’»"`) inside a `<span className="team-avatar">` at the top of the card.\n3. Render `skills` (a comma-separated string like `"React, Node, Python"`) inside a `<p className="team-skills">` below the role.\n4. Open `App.jsx` and update all three `<ProfileCard>` instances to pass the new `avatar` and `skills` props with different values for each person.',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you add <code>avatar</code> and <code>skills</code> to the destructured parameters <code>{ name, role, isLead, avatar, skills }</code>? <br/>âœ“ Did you render both new props inside the JSX with <code>{}</code> curly braces? <br/>âœ“ Did you pass strings using quotes (<code>avatar="ðŸ‘©â€ðŸ’»"</code>) from <code>App.jsx</code>? <br/>âœ“ <strong>Bonus:</strong> Add a <code>yearsExp</code> number prop and display it as "X years experience" below the skills â€” pass it as <code>yearsExp={3}</code> (curly braces for numbers!).'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/your-first-component">Your First Component</a><br/>â€¢ <a href="https://react.dev/learn/passing-props-to-a-component">Passing Props to a Component</a>'
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
            question: 'A component is defined as `function Greeting({ name = "Guest" })`. What happens if you render `<Greeting />` without passing the `name` prop?',
            options: [
              'The component crashes with an undefined error.',
              'The `name` variable will automatically be the string "Guest".',
              'React throws a warning in the console and renders nothing.',
              'The `name` variable will be `null`.'
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
        boxBody: 'If you write <code>let score = 0;</code> and then do <code>score = 1;</code>, the math works, but <strong>React will not update the screen</strong>. Regular variables are invisible to React. State is specialâ€”when you update State, it taps React on the shoulder and says, "Hey, redraw the screen!"'
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
        boxTitle: 'ðŸ’¡ Pro Tip: The Safe Way to Update From Previous State',
        boxBody: 'In the example above we write <code>setCount(count + 1)</code>. This works for simple cases, but there is a safer pattern you will see in real codebases: <code>setCount(prev => prev + 1)</code>. <br/><br/>The <code>prev</code> version passes a function to the setter. React guarantees that <code>prev</code> is always the most up-to-date value â€” important when multiple updates happen at the same time. <strong>Rule of thumb:</strong> if your new state depends on the old state, use <code>prev =&gt;</code>. <br/><br/><strong>One more key insight:</strong> Each component instance has its own completely separate state. If you render <code>&lt;Counter /&gt;&lt;Counter /&gt;</code> twice, each counter is totally independent â€” clicking one has zero effect on the other.'
      },
      {
        type: 'code',
        title: '⚠️ The Golden Rule: Never Mutate State',
        body: 'This is the #1 mistake beginners make. You are NEVER allowed to change a state variable directly. You must always use the setter function, and if it is a list (array), you must give React a **brand new list**. The three dots (`...`) you will see below are the **Spread Operator** â€” they unpack all the existing items from the old array into a brand new one, then we add the new item at the end.',
        code: `import { useState } from "react";

export default function ShoppingCart() {
  const [items, setItems] = useState(["Shoes", "Shirt"]);

  const addItemWrong = () => {
    // âŒ WRONG: Mutating the array directly
    items.push("Hat"); 
    setItems(items); // React thinks nothing changed, screen won't update!
  };

  const addItemRight = () => {
    // âœ… CORRECT: Using the "Spread Operator" (...) to create a NEW array
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
        type: 'code',
        title: 'Updating Object State',
        body: 'Just like arrays, you cannot mutate an object in state directly. Instead, use the spread operator `...` to copy all the existing fields, then override only the field you want to change. This is one of the most common patterns in real React apps.',
        code: `import { useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState({ name: "David", age: 25, city: "Lagos" });

  const changeName = () => {
    // âŒ WRONG: Mutating the object directly
    // user.name = "Michael"; â† React won't notice this!

    // âœ… CORRECT: Spread the old fields, override only 'name'
    setUser({ ...user, name: "Michael" });
    // Result: { name: "Michael", age: 25, city: "Lagos" }
  };

  return (
    <div>
      <p>Name: {user.name} | Age: {user.age} | City: {user.city}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'info',
        boxTitle: '⚡ The Spread + Override Pattern',
        boxBody: '<code>{ ...user, name: "Michael" }</code> means: â€œcopy every field from the user object, then set <code>name</code> to "Michael"â€. Any field listed after the spread <strong>overwrites</strong> the copied value. Fields you do not list are kept exactly as they were. You will use this pattern constantly when building forms and user profile pages.'
      },
      {
        type: 'text',
        title: 'Guided Project: The React Mastery Like Button',
        body: 'Let\'s build something you see every day on social media: an interactive Like button. We will use TWO state variables together â€” a boolean to track if something is liked, and a number to track the total count.'
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
        {isLiked ? 'â¤ï¸ Liked' : 'ðŸ¤ Like'} ({likeCount})
      </button>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Update App.jsx',
        body: 'Now bridge your new component into your main application file. The Island Rule from Day 2 in action â€” import at the top, render in the return!',
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
        body: 'Add this to your `App.css`. Notice how the `.liked` class applies a red glow â€” this is the conditional className pattern you will use throughout the course!',
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

.like-card p { color: #c9d1d9; margin-bottom: 1rem; }

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
.btn.default { background: #334155; color: #c9d1d9; }
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
        body: 'Time to build your own stateful component from scratch! This version applies the Object State pattern you just learned â€” tracking two pieces of data inside one state object.\n\n**Requirements:**\n1. Create a new file named `HabitTracker.jsx`.\n2. Create **one state object** (not two separate variables): `const [tracker, setTracker] = useState({ count: 0, lastReset: \'Never\' })`.\n3. Create an "Add Water ðŸ’§" button. When clicked, use the spread pattern to update only the count: `setTracker({ ...tracker, count: tracker.count + 1 })`.\n4. Create a "Reset" button. When clicked, set count back to 0 AND update lastReset to the current time: `setTracker({ count: 0, lastReset: new Date().toLocaleTimeString() })`.\n5. Display `tracker.count` and `tracker.lastReset` on the screen.\n6. Import and render your `<HabitTracker />` inside `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use ONE state object instead of two separate <code>useState</code> calls? <br/>âœ“ Did your "Add Water" button use <code>{ ...tracker, count: tracker.count + 1 }</code> â€” spreading first, then overriding? <br/>âœ“ Did the <code>lastReset</code> text on screen update the moment you clicked Reset? <br/>âœ“ Did you access values using <code>tracker.count</code> and <code>tracker.lastReset</code> (dot notation)?'
      },
      {
        type: 'homework',
        title: 'The Mood Tracker',
        timeEstimate: '45â€“60 min',
        body: 'Build a component that tracks your mood for the day using State.\n\n**Requirements:**\n1. Create a file named `MoodTracker.jsx`.\n2. Create two state variables: `mood` (a string, starting as `"Neutral"`) and `moodEmoji` (a string, starting as `"ðŸ˜"`).\n3. Render 3 buttons: "ðŸ˜„ Happy", "ðŸ˜ Neutral", and "ðŸ˜¢ Sad".\n4. Clicking each button must update BOTH state variables â€” e.g. clicking Happy sets `mood` to `"Happy"` and `moodEmoji` to `"ðŸ˜„"`.\n5. Display a line like: "Today I am feeling: ðŸ˜„ Happy" that updates live as buttons are clicked.\n6. Use a conditional className to change the background colour of the card based on mood (green for Happy, grey for Neutral, blue for Sad).',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Do both <code>mood</code> and <code>moodEmoji</code> update when a button is clicked? <br/>âœ“ Is the displayed text reactive â€” does it change without a page reload? <br/>âœ“ Did you use a dynamic <code>className</code> to change the card colour? <br/>âœ“ <strong>Bonus:</strong> Add a timestamp that shows "Last updated at HH:MM" using <code>new Date().toLocaleTimeString()</code> whenever a mood is selected.'
      },
      {
        type: 'text',
        title: '🔭 Coming Up in Week 2',
        body: 'You have now covered the three pillars of React: JSX, Components & Props, and State. Here is a preview of what Week 2 will build on top of this foundation:\n\n1. **Events & Conditional Rendering (Day 4):** How to react to user actions like clicks and typing â€” and how to show or hide UI based on conditions using the Ternary operator and `&&`.\n2. **Lists & .map() (Day 5):** How to render dynamic lists of data from arrays â€” the skill behind every feed, product grid, and todo list you have ever seen.\n3. **Forms & User Input (Day 6):** How to capture user input safely with controlled components, prevent page reloads, and combine everything you have learned to build a working To-Do List.\n\nYou are further along than you think. Keep your projects open and keep tinkering!',
        boxType: 'tip',
        boxTitle: 'Tip: Keep Building Between Classes',
        boxBody: 'The students who improve fastest are the ones who keep their code editor open after class. Even 30 minutes of experimenting â€” breaking things and fixing them â€” is worth more than re-reading the notes.'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/state-a-components-memory">State: A Componentâ€™s Memory</a><br/>â€¢ <a href="https://react.dev/learn/updating-objects-in-state">Updating Objects in State</a>'
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
            question: 'You have `const [user, setUser] = useState({ name: "David", age: 25 })`. How do you update ONLY the name to "Michael" without losing the `age` value?',
            options: ['setUser({ name: "Michael" })', 'setUser({ ...user, name: "Michael" })', 'user.name = "Michael"; setUser(user)', 'setUser(name: "Michael", age: user.age)'],
            correct: 1
          },
          {
            question: 'If you render `<Counter /><Counter />` twice on the same page and click the button in the first counter, what happens to the second counter?',
            options: ['Both counters update because they share the same state.', 'The second counter resets to 0.', 'Nothing â€” each component instance has its own completely separate state.', 'React throws an error because the same component cannot be rendered twice.'],
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
        lang: 'jsx',
        boxType: 'info',
        boxTitle: 'ðŸ” What is e.target.value?',
        boxBody: 'When a user types, React passes an <strong>Event Object</strong> (we call it <code>e</code>) to your handler function. This object contains details about the action. <br/><br/><strong><code>e.target</code></strong> â€” the actual HTML element the user interacted with (the input box itself). <br/><strong><code>e.target.value</code></strong> â€” whatever text the user typed into that element right now. <br/><br/>So <code>setText(e.target.value)</code> simply means: "put whatever the user just typed into my state variable." You will write this line on almost every input field you ever build in React.'
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
          <h3>ðŸ¤« Secret Dashboard Data</h3>
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
        timeEstimate: '30â€“40 min',
        body: 'Time to practice! Your task is to build a frequently asked question (FAQ) component that expands when clicked.\n\n**Requirements:**\n1. Create a file named `FaqBox.jsx`.\n2. Create a state variable called `isOpen` that starts as `false`.\n3. Create a `<div className="faq-card">` that holds an `<h3>` with a question (e.g., "What is React?").\n4. Add an `onClick` event to the `<h3>` or a button that toggles `isOpen` to true/false.\n5. Use the `&&` operator to display a `<p>` tag with the answer *only* when `isOpen` is true.\n6. Import and render it in your `App.jsx`.\n\nðŸ’¡ **Hint:** To toggle a boolean, use `setIsOpen(!isOpen)` â€” the `!` operator flips `true` to `false` and `false` to `true`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use camelCase for <code>onClick</code>? <br/>âœ“ Did you pass a function to onClick without instantly calling it? <br/>âœ“ Did you use <code>isOpen && &lt;p&gt;Answer&lt;/p&gt;</code> to hide the text?'
      },
      {
        type: 'homework',
        title: 'The Dark / Light Mode Toggle',
        timeEstimate: '45â€“60 min',
        body: 'Build a Dark / Light mode theme switcher â€” a feature used in virtually every professional app.\n\n**Requirements:**\n1. Create a file named `ThemeSwitcher.jsx`.\n2. Create a state variable `isDark` that starts as `true` (dark mode on by default).\n3. Render a button that says "â˜€ï¸ Switch to Light Mode" when dark, and "ðŸŒ™ Switch to Dark Mode" when light. Use a **ternary operator** for this.\n4. Use `isDark` with a **conditional className** to apply a `.dark-card` or `.light-card` class to the outer div, giving it different background and text colours.\n5. Add a toggle function that calls `setIsDark(!isDark)` when the button is clicked.\n6. Import and display it in `App.jsx`.',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Does the button text change based on the current theme state? <br/>âœ“ Does the card background colour change when you click? <br/>âœ“ Did you use a ternary operator for the button label and a conditional className for the styles? <br/>âœ“ <strong>Bonus:</strong> Save the theme to <code>localStorage</code> so it remembers the userâ€™s preference after a page refresh â€” use <code>localStorage.setItem("theme", isDark ? "dark" : "light")</code>.'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/responding-to-events">Responding to Events</a><br/>â€¢ <a href="https://react.dev/learn/conditional-rendering">Conditional Rendering</a>'
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
    milestone: { icon: '🗺️', title: 'Data-Driven UI', text: 'Stop hardcoding your components. Today you will learn how to take an array of data and automatically generate a beautiful interface for it.' },
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
        boxBody: 'Remember the Virtual DOM from Day 1? When an array changes (maybe an item is deleted or reordered), React needs to figure out exactly which item changed so it only updates that tiny piece of the screen. <br><br>The <code>key</code> is like a tracking ID. If you do not provide it, React gets confused, destroys the whole list, and redraws it from scratch â€” which is terrible for performance.'
      },
      {
        type: 'code',
        title: 'âœ‚ï¸ Removing Items with .filter()',
        body: 'You have learned how to render lists with `.map()`. But what about *removing* items from a list? That is where `.filter()` comes in. The `.filter()` method creates a new array containing only the items that pass a test you define â€” perfect for implementing "Delete" buttons or "Show only active items" features.',
        code: `import { useState } from "react";

export default function ShoppingList() {
  const [items, setItems] = useState(["Shoes", "Shirt", "Hat", "Bag"]);

  const removeItem = (itemToRemove) => {
    // filter KEEPS every item where the condition is true.
    // So this KEEPS everything EXCEPT the item we want to remove.
    setItems(items.filter(item => item !== itemToRemove));
  };

  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          {item}
          <button onClick={() => removeItem(item)}>âœ• Remove</button>
        </li>
      ))}
    </ul>
  );
}`,
        lang: 'jsx',
        boxType: 'tip',
        boxTitle: 'The Real-World Power Move: .filter().map()',
        boxBody: 'The most common pattern in production React apps is chaining both methods together. Filter first, then render only what passes: <br/><code>tasks.filter(task =&gt; !task.done).map(task =&gt; &lt;TaskItem key={task.id} /&gt;)</code><br/><br/>This one line says: "Give me only the unfinished tasks, then turn each one into a component." You will use this exact chain in your Task Manager homework.'
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
  { id: "m1", title: "Inception", year: 2010, rating: "â­ï¸â­ï¸â­ï¸â­ï¸â­ï¸" },
  { id: "m2", title: "Interstellar", year: 2014, rating: "â­ï¸â­ï¸â­ï¸â­ï¸" },
  { id: "m3", title: "The Dark Knight", year: 2008, rating: "â­ï¸â­ï¸â­ï¸â­ï¸â­ï¸" }
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
.year { color: #c9d1d9; font-size: 0.9rem; margin-bottom: 1rem; }
.rating { font-size: 1.2rem; margin: 0; }`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The High Score Leaderboard',
        timeEstimate: '30â€“40 min',
        body: 'Time to practice! Your task is to build a leaderboard that both renders AND filters a list of players.\n\n**Requirements:**\n1. Create a file named `Leaderboard.jsx`.\n2. Inside the file (above the component), create an array called `PLAYERS`. Each object should have `id`, `name`, and `score`. Add at least 5 players â€” some with scores above 5000, some below.\n3. Add a state variable: `const [showAll, setShowAll] = useState(true)`.\n4. Add a toggle button: "Show Top Scorers Only" / "Show All Players" â€” use a ternary to switch the label.\n5. Use the following logic to decide which players to display: `const displayedPlayers = showAll ? PLAYERS : PLAYERS.filter(p => p.score > 5000)`.\n6. Map over `displayedPlayers` to render a `<div>` for each player showing their rank position, name, and score. Remember the `key` prop!\n7. Import and display it in `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use <code>PLAYERS.filter(p =&gt; p.score &gt; 5000)</code> to filter the list? <br/>âœ“ Did you map over <code>displayedPlayers</code> (not the original <code>PLAYERS</code> array)? <br/>âœ“ Does clicking the toggle button immediately hide/show players without a page reload? <br/>âœ“ Did you use <code>key={player.id}</code> on the outermost element returned by the map?'
      },
      {
        type: 'homework',
        title: 'Combining .map() with Components',
        timeEstimate: '45â€“60 min',
        body: 'In the Guided Project, we mapped the array directly into standard HTML `<div>` tags. In the real world, you map data into **Reusable Components** (like what we learned on Day 2!).\n\n**Requirements:**\n1. In your `MovieList.jsx` file, create a second, separate component at the bottom of the file called `function MovieItem({ title, year, rating })`. \n2. Move the HTML structure (the `div`, `h3`, `p` tags) out of the `.map()` and into the `MovieItem` return statement.\n3. Update your `.map()` to return `<MovieItem />` components instead of divs! Pass the data down as props (e.g. `title={movie.title}`).\n4. **CRITICAL:** Where does the `key` go now? It must go on the `<MovieItem>` tag itself, inside the map (e.g. `<MovieItem key={movie.id} ... />`).',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you extract the UI into a child component? <br/>âœ“ Does your map look like: <code>MOVIE_DATA.map(movie =&gt; &lt;MovieItem key={movie.id} title={movie.title} /&gt;)</code>? <br/>âœ“ Is the <code>key</code> placed on the custom component tag?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/rendering-lists">Rendering Lists</a>'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'You have `const [items, setItems] = useState(["Shoes", "Shirt", "Hat"])`. How do you remove "Shirt" from the list without mutating state?',
            options: [
              'items.splice(1, 1); setItems(items)',
              'setItems(items.filter(item => item !== "Shirt"))',
              'setItems(items.map(item => item !== "Shirt"))',
              'delete items[1]; setItems(items)'
            ],
            correct: 1
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
        body: 'In standard HTML, input fields (`<input>`, `<textarea>`) manage their own state. You type, and the browser remembers what you typed. \n\nIn React, we do not let the browser manage data â€” we want React to be the single source of truth. We do this by "controlling" the input. \n\nTo control an input, you must do TWO things:\n1. Tie the `value` attribute to a state variable.\n2. Tie the `onChange` event to a state setter function.',
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
        title: 'Guided Project: The React Mastery Newsletter',
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
    alert(\`Success! \${email} has been added to the React Mastery mailing list.\`);
    
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
.form-card p { color: #c9d1d9; font-size: 0.9rem; margin-bottom: 1.5rem; }

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
        type: 'code',
        title: 'Level Up: Multi-Input Forms with One handleChange',
        body: 'The newsletter form had only one input. Real forms have many â€” name, email, password, etc. Writing a separate `useState` and `onChange` for every field gets messy fast. The professional pattern is to store all your form fields in **one state object** and use a single `handleChange` function that detects which field changed using `e.target.name`.',
        code: `import { useState } from "react";

export default function ContactForm() {
  // 1. One state object holds ALL the fields
  const [form, setForm] = useState({ name: "", email: "", subject: "" });

  // 2. One handler for ALL inputs
  const handleChange = (e) => {
    // e.target.name tells us WHICH field changed ("name", "email", or "subject")
    // e.target.value is what the user typed
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Message from \${form.name} about: \${form.subject}\`);
    setForm({ name: "", email: "", subject: "" }); // Clear all at once
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Each input MUST have a 'name' attribute that matches the state key */}
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Your email" />
      <input name="subject" value={form.subject} onChange={handleChange} placeholder="Subject" />
      <button type="submit" disabled={!form.name || !form.email}>Send</button>
    </form>
  );
}`,
        lang: 'jsx',
        boxType: 'info',
        boxTitle: '⚡ How [e.target.name] Works',
        boxBody: 'The square brackets in <code>{ ...form, [e.target.name]: e.target.value }</code> are called a <strong>Computed Property Name</strong>. It means: "use the value of <code>e.target.name</code> as the key." So if the user typed in the email field, <code>e.target.name</code> is <code>"email"</code>, and the result is <code>{ ...form, email: "what they typed" }</code>. This one handler replaces three separate handlers.'
      },
      {
        type: 'code',
        title: 'Controlled select and textarea',
        body: 'Text inputs are not the only form elements you will use. Dropdowns (`<select>`) and multi-line text areas (`<textarea>`) are in every real form. The good news: they are controlled exactly the same way â€” `value` tied to state, `onChange` updating state.',
        code: `import { useState } from "react";

export default function ProfileSetup() {
  const [bio, setBio] = useState("");
  const [level, setLevel] = useState("beginner");

  return (
    <form>
      {/* textarea: value + onChange, exactly like <input> */}
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Tell us about yourself..."
        rows={4}
      />

      {/* select: value goes on the <select> tag, NOT on <option> tags */}
      <select value={level} onChange={(e) => setLevel(e.target.value)}>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <p>Current level: {level}</p>
    </form>
  );
}`,
        lang: 'jsx',
        boxType: 'warn',
        boxTitle: 'Common Mistake with <select>',
        boxBody: 'In plain HTML, you mark the selected option with a <code>selected</code> attribute on the <code>&lt;option&gt;</code> tag. In React, <strong>never do this</strong>. Instead, put <code>value={level}</code> on the <code>&lt;select&gt;</code> tag itself. React will automatically highlight the matching option. The same approach works for <code>&lt;textarea&gt;</code>.'
      },
      {
        type: 'text',
        title: '🛡️ Basic Form Validation: The Disabled Button Pattern',
        body: 'One of the most common UX patterns in real apps is disabling the submit button when required fields are empty. This prevents blank or broken form submissions before they happen.\n\nBecause JSX attributes can hold any JavaScript expression, you can wire `disabled` directly to your state:',
        boxType: 'tip',
        boxTitle: 'disabled={!email}',
        boxBody: '<code>disabled={!email}</code> means: "disable the button when the email string is empty (falsy)". An empty string <code>""</code> is falsy in JavaScript, so the button is disabled until the user types something. As soon as the field has content, <code>!email</code> becomes <code>false</code> and the button enables. <br/><br/>For multiple required fields: <code>disabled={!form.name || !form.email}</code> â€” the button stays disabled until BOTH fields have content.'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Contact Form',
        timeEstimate: '40â€“55 min',
        body: 'Time to put the professional form patterns together! Build a full contact form using the single-object state + `handleChange` approach you just learned â€” no separate state variable per field.\n\n**Requirements:**\n1. Create a file named `ContactForm.jsx`.\n2. Create ONE state object with three fields: `const [form, setForm] = useState({ name: \"\", subject: \"\", message: \"\" })`.\n3. Build a **single** `handleChange` function that uses `e.target.name` and `e.target.value` to update the correct field.\n4. Build a form with three controlled fields â€” each must have a `name` attribute matching the state key:\n   - An `<input type="text">` for name\n   - A `<select>` for subject (options: "General Inquiry", "Bug Report", "Partnership")\n   - A `<textarea>` for message\n5. Add a submit button. Disable it using `disabled={!form.name || !form.message}` so it only activates when both required fields have content.\n6. Create a `handleSubmit` function that prevents the page refresh, shows an alert with the form data, and clears the form back to empty strings.\n7. Import and render it in `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use ONE state object and ONE <code>handleChange</code> function â€” not three separate ones? <br/>âœ“ Does each input have a <code>name</code> attribute that exactly matches its key in the state object? <br/>âœ“ Did you use <code>value={form.subject}</code> on the <code>&lt;select&gt;</code> tag (not on the <code>&lt;option&gt;</code> tags)? <br/>âœ“ Is the submit button disabled until both name and message have content?'
      },
      {
        type: 'homework',
        title: 'The Ultimate Test: The Task Manager',
        timeEstimate: '60+ min',
        body: 'This is where Week 2 comes together. You will combine what you learned on Day 5 (Mapping Arrays) with what you learned today (Forms) to build a working To-Do List.\n\n**Requirements:**\n1. Create `TaskManager.jsx`.\n2. Create a state variable for your list of tasks: `const [tasks, setTasks] = useState(["Learn React", "Read Comics"])`.\n3. Create a state variable for the new task input: `const [newTask, setNewTask] = useState("")`.\n4. Build a form with an input and a submit button. Tie the input to the `newTask` state.\n5. On submit, prevent the default refresh, and use the spread operator to add the new task to the array: `setTasks([...tasks, newTask])`. Then clear the input.\n6. Below the form, map over the `tasks` array and render a `<div className="task">` for each one.\n\n*Hint: If you get stuck, look at the "Never Mutate State" section from Day 3 to remember how the Spread Operator works!*',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you create two separate state variables (one array, one string)? <br/>âœ“ Does typing in the input work without crashing? <br/>âœ“ When you submit, does the new task appear at the bottom of the list instantly? <br/>âœ“ Did you remember the <code>key</code> prop in your <code>.map()</code> function?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/reference/react-dom/components/input">React &lt;input&gt; Reference</a>'
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
            question: 'You have a list of tasks in state. How do you correctly delete the task with `id: 3` without mutating the array?',
            options: ['setTasks(tasks.splice(3))', 'setTasks(tasks.filter(task => task.id !== 3))', 'tasks.delete(3); setTasks(tasks)', 'setTasks(tasks.map(task => task.id !== 3))'],
            correct: 1
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
            question: 'What is the professional pattern for handling a form with multiple input fields (name, email, subject) in React?',
            options: [
              'Create a separate `useState` and `onChange` function for every single field.',
              'Store all fields in one state object and use a single `handleChange` that reads `e.target.name` to know which field to update.',
              'Use `document.querySelector` to read each field value on submit.',
              'Put all field values in an array and use `.map()` to render and update them.'
            ],
            correct: 1
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
    milestone: { icon: '🌍', title: 'Welcome to Week 3!', text: 'Your apps are about to get real. Today, you learn how to reach outside of React to fetch data from the internet, control the browser, and manage timers.' },
    sections: [
      {
        type: 'text',
        title: 'What is a Side Effect?',
        body: 'React components are supposed to be "pure" â€” they take in data (Props/State) and return UI (JSX). \n\nBut sometimes, your component needs to do things that fall *outside* of simply drawing UI. We call these **Side Effects**. Common side effects include:\n1. Fetching data from an API or database.\n2. Setting a timer or interval (`setTimeout`).\n3. Directly changing the browser (like updating `document.title`).\n\nTo handle these safely without breaking React\'s rendering process, we use the **`useEffect`** Hook.',
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
        title: '⚡ Quick JS Refresher: async / await',
        body: 'Before we build the guided project, we need to understand two JavaScript keywords that will appear in the code: `async` and `await`. These are not React concepts â€” they are standard JavaScript used for anything that takes time (like fetching data from the internet).\n\nJavaScript normally runs line by line, instantly. But fetching data from a server takes time â€” sometimes milliseconds, sometimes seconds. Without `async/await`, your code would continue running before the data arrives, giving you `undefined` instead of real data.',
        boxType: 'info',
        boxTitle: '\ud83d\udd0d How async / await works',
        boxBody: '<strong><code>async</code></strong> marks a function as asynchronous â€” meaning it can contain waits. <br/><strong><code>await</code></strong> tells JavaScript: "pause right here until this operation finishes, then continue." <br/><br/>Example: <br/><code>const fetchAdvice = async () => {</code><br/><code>&nbsp;&nbsp;const response = await fetch(url); // Pause until server responds</code><br/><code>&nbsp;&nbsp;const data = await response.json(); // Pause until JSON is parsed</code><br/><code>&nbsp;&nbsp;setAdvice(data.slip.advice); // NOW we have the data</code><br/><code>};</code><br/><br/>Without <code>await</code>, <code>response</code> would be a pending Promise (not actual data) and your app would break. You will see this pattern on every API call in every React app.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Random Quote API',
        body: 'Let\'s build a component that reaches out to a real, live public API on the internet and fetches a random piece of advice the moment the page loads.'
      },
      {
        type: 'code',
        title: 'Step 1: Create QuoteGenerator.jsx',
        body: 'Create a new file named `QuoteGenerator.jsx`. This version includes the three states every real API call needs: `advice` for the data, `loading` to show a spinner/message while waiting, and `error` to handle failures gracefully.',
        code: `// src/QuoteGenerator.jsx
import { useState, useEffect } from "react";

export default function QuoteGenerator() {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);  // Start loading immediately
  const [error, setError] = useState(null);       // No error yet

  useEffect(() => {
    const fetchAdvice = async () => {
      // 1. Start loading
      setLoading(true);
      setError(null);

      try {
        // 2. Fetch (await: pause until server responds)
        const response = await fetch("https://api.adviceslip.com/advice");
        // 3. Parse JSON (await: pause until parsing is done)
        const data = await response.json();
        // 4. Store the real data
        setAdvice(data.slip.advice);
      } catch (err) {
        // 5. If ANYTHING went wrong (offline, API down), catch it here
        setError("Could not load advice. Please try again.");
      } finally {
        // 6. Always stop loading, whether it worked or not
        setLoading(false);
      }
    };

    fetchAdvice();
  }, []); // Run only once on mount

  // Render loading state
  if (loading) return <div className="quote-card"><p>Loading advice...</p></div>;

  // Render error state
  if (error) return <div className="quote-card"><p style={{ color: '#f87171' }}>{error}</p></div>;

  // Render the data
  return (
    <div className="quote-card">
      <h2>Daily Advice</h2>
      <p>"{advice}"</p>
    </div>
  );
}`,
        lang: 'jsx',
        boxType: 'tip',
        boxTitle: 'ðŸ† The Full Professional Fetch Pattern',
        boxBody: 'Every real-world API component should have these three states: <br/><strong>1. Loading</strong> â€” show a spinner/message while waiting for the server. <br/><strong>2. Error</strong> â€” catch failures gracefully instead of crashing silently. <br/><strong>3. Data</strong> â€” render the actual content once it arrives. <br/><br/>The <code>try/catch/finally</code> block is the standard way to handle this. <code>try</code> runs the risky code, <code>catch</code> handles any error that occurs, <code>finally</code> runs regardless of success or failure â€” perfect for turning off the loading state.'
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
        boxBody: 'âœ“ Did you import <code>useEffect</code> at the top? <br/>âœ“ Did you put <code>[notificationCount]</code> in your dependency array? <br/>âœ“ Does clicking the button immediately change the text at the top of your web browser tab?'
      },
      {
        type: 'homework',
        title: 'The Cleanup Function (Stopwatch Timer)',
        timeEstimate: '45 min',
        body: 'If you start a timer in a component, and that component is deleted from the screen, the timer will keep running in the background forever and cause a memory leak! You must clean it up.\n\n**Requirements:**\n1. Create `Timer.jsx` with a `seconds` state (starting at 0).\n2. Write a `useEffect` with an empty array `[]`.\n3. Inside the effect, start a timer: `const interval = setInterval(() => { setSeconds(s => s + 1) }, 1000);`\n4. At the very end of your effect, **return a function** that clears the interval: `return () => clearInterval(interval);`\n5. Render the seconds on the screen.',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you use <code>setSeconds(s =&gt; s + 1)</code> instead of <code>seconds + 1</code> to get the most recent state? <br/>âœ“ Did you <code>return</code> an arrow function inside your useEffect to clean up the interval?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/synchronizing-with-effects">Synchronizing with Effects</a>'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Inside a `useEffect`, why must you define your fetch function as `async` and use `await` before `fetch()`?',
            options: [
              'Because `fetch()` only works inside `useEffect` hooks.',
              'Because React requires all functions to be async.',
              '`fetch()` returns a Promise. Without `await`, your code continues before the data arrives and you get `undefined` instead of real data.',
              'Because `async/await` is faster than regular functions.'
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
            question: 'What is the purpose of a `loading` state variable in a component that fetches API data?',
            options: [
              'To slow down the app so the user can read content more easily.',
              'To show a loading indicator while waiting for data and prevent showing empty or broken UI.',
              'To cache the fetched data permanently in the browser.',
              'To tell React to skip re-rendering until the fetch is done.'
            ],
            correct: 1
          }
        ]
      }
    ]
  },

  // --- DAY 8 ---
  {
    dayNumber: 8, week: 3,
    title: 'Custom Hooks',
    subtitle: 'Creating your own reusable React superpower',
    topics: ['Why Custom Hooks?', 'Rules of Hooks', 'Building useFetch', 'Loading & Error States', 'Knowledge Check'],
    milestone: { icon: '🪝', title: 'Extracting Logic', text: 'You have used React\'s built-in hooks. Now it is time to build your own. Custom hooks separate your app\'s logic from its UI, making your code incredibly clean and professional.' },
    sections: [
      {
        type: 'text',
        title: 'What is a Custom Hook?',
        body: 'On Day 7, you wrote fetch logic directly inside a component. But if you have 5 different pages that all fetch data, copying and pasting that `useEffect` 5 times violates the DRY (Don\'t Repeat Yourself) principle.\n\nA Custom Hook is just a standard JavaScript function that starts with the word `use` (e.g., `useFetch`, `useToggle`) and calls other hooks (like `useState` or `useEffect`) inside it.',
        boxType: 'info',
        boxTitle: 'The "use" Naming Convention',
        boxBody: 'React is strict about this. Your custom hook <strong>must</strong> start with the word <code>use</code>. This tells React that this function is special, and allows React to enforce the Rules of Hooks on it.'
      },
      {
        type: 'text',
        title: 'âš–ï¸ The Rules of Hooks',
        body: 'Before we build our own hooks, you must memorize the Two Golden Rules of Hooks. If you break these, React will crash with a very confusing error message.\n\n1. **Only call Hooks at the top level.** Do not call Hooks inside loops, conditions (`if` statements), or nested functions. React relies on the order in which Hooks are called to keep track of state.\n2. **Only call Hooks from React functions.** You can call them from regular React Components, or from your own Custom Hooks. Never call them from regular JavaScript functions.',
        boxType: 'danger',
        boxTitle: 'The Most Common Crash: Hooks Inside an "if" Statement',
        boxBody: 'If you write: <code>if (isLoggedIn) { useEffect(...) }</code>, React will crash with an error like: <em>"Rendered more hooks than during the previous render."</em> Hooks must always be called in the exact same order on every single render. This is non-negotiable!'
      },
      {
        type: 'code',
        title: 'The "Before and After" Bridge',
        body: 'Look at how much cleaner our component becomes when we extract the logic into a custom hook. We go from managing 3 states and a full `useEffect` block to just a single line of code.',
        code: `// âŒ YESTERDAY (Day 7): Messy Component â€” logic lives inside the UI
function Profile() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/user')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{data?.name}</div>;
}

// âœ… TODAY (Day 8): Clean Component â€” logic lives in the hook
function Profile() {
  const { data, isLoading, error } = useFetch('/api/user');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return <div>{data?.name}</div>;
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Guided Project: The useFetch Hook',
        body: 'Let\'s build that `useFetch` hook.\n\nWe will also introduce a professional habit: the `AbortController`. If a user navigates away from the page before a fetch finishes, the `AbortController` cleanly cancels the background request. Without it, React will try to update a component that no longer exists and throw a memory leak warning.'
      },
      {
        type: 'code',
        title: 'Step 1: Create useFetch.js',
        body: 'Create a new folder inside `src/` called `hooks/`. Inside it, create `useFetch.js`. This is a JavaScript file â€” it returns data and functions, not JSX!',
        code: `// src/hooks/useFetch.js
import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 🛡️ Professional Habit: Create an AbortController to cancel stale requests
    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);

      try {
        // Pass the abort signal into the fetch call
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) throw new Error("Could not fetch data.");

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        // If the error is just from aborting, we can safely ignore it
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    // âœ… Cleanup: abort the fetch if the component unmounts before it finishes
    return () => controller.abort();
  }, [url]); // Re-run if the URL changes

  // Return state as an object â€” components destructure what they need
  return { data, isLoading, error };
}`,
        lang: 'javascript'
      },
      {
        type: 'code',
        title: 'Step 2: Use it in App.jsx',
        body: 'Now look how clean `App.jsx` becomes. One import, one line to call the hook, and then you focus purely on rendering the UI.',
        code: `// src/App.jsx
import './App.css';
import useFetch from './hooks/useFetch';

function App() {
  // One line replaces 20+ lines of fetch logic!
  const { data, isLoading, error } = useFetch("https://jsonplaceholder.typicode.com/users/1");

  return (
    <div className="app-container">
      <h1>Week 3: Custom Hooks</h1>

      <div className="profile-card">
        {isLoading && <p className="loading">â³ Loading user data...</p>}
        {error && <p className="error">âŒ Error: {error}</p>}

        {data && (
          <div>
            <h2>{data.name}</h2>
            <p className="email">ðŸ“§ {data.email}</p>
            <p className="city">ðŸ™ï¸ {data.address.city}</p>
          </div>
        )}
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
        body: 'Add this CSS to style the loading, error, and success states. The `pulse` animation gives the loading state a professional breathing effect.',
        code: `/* App.css */
.profile-card {
  background: #1e293b;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid #334155;
  width: 300px;
  margin: 2rem auto;
  min-height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.profile-card h2 { color: #f8fafc; margin-top: 0; margin-bottom: 1rem; }
.profile-card p { color: #cbd5e1; margin: 0.5rem 0; font-size: 1rem; }

.loading { color: #38bdf8 !important; animation: pulse 1.5s infinite; }
.error { color: #ef4444 !important; font-weight: bold; }

@keyframes pulse {
  0%   { opacity: 0.6; }
  50%  { opacity: 1; }
  100% { opacity: 0.6; }
}`,
        lang: 'css'
      },
      {
        type: 'text',
        title: 'Unguided Task: The useToggle Hook',
        timeEstimate: '20 min',
        body: 'Custom hooks do not always have to be complex API fetchers. Let\'s build a simple one to toggle a boolean â€” perfect for dark mode, dropdowns, or show/hide password buttons.\n\n**Requirements:**\n1. Fill in the `toggle` function in the scaffold below so it correctly flips the boolean.\n2. Import `useToggle` into `App.jsx`.\n3. Use it to show/hide a `<p>` tag that says `"ðŸŽ‰ Secret message revealed!"` when a button is clicked.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Does your function name start with "use"? <br/>âœ“ Does your hook return an <strong>array</strong> (not an object)? <br/>âœ“ Does clicking the button correctly show <em>and</em> hide the message on alternate clicks?'
      },
      {
        type: 'code',
        title: 'Your Scaffold (fill in the blanks)',
        body: 'Create `useToggle.js` inside your `hooks/` folder and fill in the missing `toggle` function. Notice we return an **array** here â€” this lets callers name the values whatever they want, just like `useState` does.',
        code: `// src/hooks/useToggle.js
import { useState } from "react";

export default function useToggle(initialValue = false) {
  const [state, setState] = useState(initialValue);

  // YOUR JOB: Write a function called "toggle"
  // that flips state to its opposite using setState
  const toggle = () => ???;

  // Return an ARRAY (like useState does)
  // This lets callers write: const [isOpen, toggleOpen] = useToggle();
  return [state, toggle];
}`,
        lang: 'javascript'
      },
      {
        type: 'homework',
        title: 'Advanced Hook: useWindowSize',
        timeEstimate: '45 min',
        body: 'Often you need to know the exact width of the user\'s screen for responsive layouts. Let\'s build a hook that listens to the browser window and returns the live width!\n\n**Requirements:**\n1. Create `useWindowSize.js` in your `hooks/` folder.\n2. Create a state variable `width` starting at `window.innerWidth`.\n3. Write a `useEffect` with a `handleResize` function inside that updates `width` to `window.innerWidth`.\n4. Attach the listener: `window.addEventListener("resize", handleResize)`.\n5. **Critical:** Return a cleanup function that removes it: `return () => window.removeEventListener("resize", handleResize)`.\n6. Return `width` from the hook and render it in `App.jsx`. Try dragging your browser smaller â€” the number should change live!\n\n**Hint:** The dependency array for this `useEffect` should be empty `[]` â€” you only want to attach and clean up the event listener once.',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you use an empty dependency array <code>[]</code> so the listener is only attached once? <br/>âœ“ Did you include the cleanup function to prevent a memory leak? <br/>âœ“ Does the number change immediately as you resize the browser window?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Documentation',
        boxBody: 'For deeper reading on what we covered today, check out the official React docs:<br/><br/>â€¢ <a href="https://react.dev/learn/reusing-logic-with-custom-hooks" target="_blank">Reusing Logic with Custom Hooks</a>'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'What is the primary benefit of creating a Custom Hook?',
            options: [
              'It makes the code run faster in the browser.',
              'It allows you to share stateful logic between components without repeating code.',
              'It connects React directly to a SQL database.',
              'It replaces the need for CSS styling.'
            ],
            correct: 1
          },
          {
            question: 'What is the mandatory naming convention for a Custom Hook?',
            options: [
              'It must end with "Hook" (e.g., fetchHook).',
              'It must be all uppercase (e.g., USEFETCH).',
              'It must start with the word "use" (e.g., useFetch).',
              'It must start with a capital letter (e.g., UseFetch).'
            ],
            correct: 2
          },
          {
            question: 'Which of the following BREAKS the Rules of Hooks?',
            options: [
              'Calling useState at the top of a component function.',
              'Calling useEffect inside an "if" statement.',
              'Calling a custom hook from another custom hook.',
              'Using multiple useState calls in the same component.'
            ],
            correct: 1
          },
          {
            question: 'What does the AbortController in useFetch actually do?',
            options: [
              'It speeds up the network request.',
              'It retries the fetch if it fails.',
              'It cancels the network request if the component unmounts before it finishes.',
              'It converts the response from XML to JSON.'
            ],
            correct: 2
          },
          {
            question: 'What does a Custom Hook typically return?',
            options: [
              'JSX/HTML elements that get drawn on the screen.',
              'Only a single boolean value.',
              'Data and/or functions (usually packaged in an object or an array).',
              'A new React Component.'
            ],
            correct: 2
          },
          {
            question: 'If you use useFetch on three different pages, do those pages share the exact same state?',
            options: [
              'Yes, changing data on Page 1 will change it on Page 2.',
              'No. Custom Hooks share the LOGIC, but the state is completely independent for each component.',
              'Yes, but only if they are rendered at the same time.',
              'React throws an error if you use a hook more than once.'
            ],
            correct: 1
          }
        ]
      }
    ]
  },
  // --- DAY 9 ---
  {
    dayNumber: 9, week: 3,
    title: 'React Router',
    subtitle: 'Multi-page navigation in a Single Page App',
    topics: ['Client-Side Routing', 'BrowserRouter', 'Routes & Route', 'The Link Component', 'Certification Exam'],
    milestone: { icon: '🧭', title: 'Mapping the Web', text: 'Real applications have multiple pages. Today, you learn how to seamlessly navigate between URLs without ever refreshing the browser.' },
    sections: [
      {
        type: 'text',
        title: 'Single Page Applications (SPAs)',
        body: 'Historically, when you clicked a link to go to `/about`, the browser requested a brand new HTML file from the server, causing the screen to blink white and refresh.\n\nReact is a **Single Page Application**. There is only one HTML file (`index.html`). When a user navigates to `/about`, React simply destroys the "Home" component and draws the "About" component on the screen instantly. \n\nTo manage this fake "multi-page" illusion, we use the industry-standard library: **React Router**.',
        boxType: 'info',
        boxTitle: 'Installation Required',
        boxBody: 'React Router does not come built into React. In your terminal, you must run: <br/><code>npm install react-router-dom</code>'
      },
      {
        type: 'text',
        title: '⚠️ The Golden Rule of Navigation',
        body: 'Because we are preventing the browser from refreshing, we can **never use standard HTML anchor tags** (`<a href="/about">`). \n\nIf you use an `<a>` tag, the browser will refresh, and all your React State (like logged-in users or shopping cart items) will be instantly destroyed.',
        boxType: 'danger',
        boxTitle: 'Use <Link> instead of <a>',
        boxBody: 'React Router provides a special component called <code>&lt;Link to="/about"&gt;</code>. It looks exactly like a normal link, but it intercepts the click and updates the URL secretly behind the scenes, preserving all your app\'s memory.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Multi-Page Portfolio',
        body: 'Let\'s convert a standard React app into a multi-page website with a Home page, an About page, and a persistent Navigation bar.'
      },
      {
        type: 'code',
        title: 'Step 1: The BrowserRouter (main.jsx)',
        body: 'To use React Router, we must wrap our entire application inside a `<BrowserRouter>`. We usually do this at the very top level of our app, in `main.jsx`.',
        code: `// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // 1. Import it!
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the App! Now every component inside can use the router. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Define Routes (App.jsx)',
        body: 'Now we set up our "traffic cop". We tell React: "If the URL is `/`, show the Home component. If the URL is `/about`, show the About component."',
        code: `// src/App.jsx
import { Routes, Route } from 'react-router-dom';

// Simple components just for this example
const Home = () => <h2>ðŸ  Home Page</h2>;
const About = () => <h2>ðŸ“– About Us</h2>;

function App() {
  return (
    <div className="app-container">
      <h1>React Mastery Portfolio</h1>
      
      {/* The Routes component looks at the URL and decides what to show */}
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: Navigation Links (Navbar.jsx)',
        body: 'Finally, let\'s create a Navigation component using `<Link>` so the user can actually click around!',
        code: `// src/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar">
      {/* Do NOT use <a href="/">! Use <Link to="/"> */}
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>
    </nav>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Unguided Task: The 404 Error Page',
        timeEstimate: '15 min',
        body: 'What happens if a user types `mysite.com/pizza` and that route doesn\'t exist? The screen goes blank! Let\'s fix that.\n\n**Requirements:**\n1. Create a simple component called `NotFound` that displays a "404 - Page Not Found" message.\n2. In your `App.jsx`, add a new `<Route>` at the very bottom of your `<Routes>` list.\n3. For the path, use the special wildcard character `path="*"`. This tells React Router: "If the URL doesn\'t match anything above, show this element."\n4. Set the `element` to your new `<NotFound />` component.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you use the asterisk <code>path="*"</code>? <br/>âœ“ Is the 404 route the very last route in your list? <br/>âœ“ Does typing a fake URL instantly show your error component?'
      },
      {
        type: 'homework',
        title: 'Dynamic URL Parameters',
        timeEstimate: '45 min',
        body: 'If you have 1,000 users, you can\'t write 1,000 `<Route>` tags. You need Dynamic Routes!\n\n**Requirements:**\n1. In `App.jsx`, create a dynamic route: `<Route path="/users/:id" element={<UserProfile />} />`.\n2. Note the colon `:`! This means whatever is typed after `/users/` will be treated as a variable named `id`.\n3. In your `UserProfile.jsx` component, import the `useParams` hook from `react-router-dom`.\n4. Call it to extract the variable: `const { id } = useParams();`\n5. Render a message on the screen: "Now viewing profile for User # [id]".',
        boxTitle: 'Homework Checklist',
        boxBody: 'âœ“ Did you create a dynamic route using <code>:id</code>? <br/>âœ“ Did you use the <code>useParams</code> hook to extract the ID? <br/>âœ“ Does the screen correctly display the dynamic ID?'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        boxType: 'resource',
        boxTitle: 'Official React Router Docs',
        boxBody: 'Routing can get incredibly complex. Check out the <a href="https://reactrouter.com/en/main/start/tutorial" target="_blank" style="color: var(--accent); text-decoration: underline;">Official React Router Tutorial</a> to see how to handle nested routes and data loaders.'
      },
      {
        type: 'exam',
        title: 'Week 3 Certification Exam',
        questions: [
          {
            question: 'What happens if you use useEffect WITHOUT a dependency array?',
            options: [
              'The effect will only run once when the component first mounts.',
              'The effect will run on every single re-render, potentially causing an infinite loop.',
              'The effect will never run.',
              'React will throw a syntax error.'
            ],
            correct: 1
          },
          {
            question: 'If you want an API call to run EXACTLY ONCE when the component loads, what should your dependency array be?',
            options: ['Nothing', 'An empty object: {}', 'An empty array: []', 'An array with the word "mount": ["mount"]'],
            correct: 2
          },
          {
            question: 'Why do we sometimes need to return a "Cleanup Function" inside a useEffect?',
            options: [
              'To stop background processes like timers or event listeners from running after the component unmounts.',
              'To delete the component from the screen.',
              'To reset all state variables to zero.',
              'To wipe the database clear.'
            ],
            correct: 0
          },
          {
            question: 'What is the mandatory naming convention for a Custom Hook?',
            options: [
              'It must end with "Hook" (e.g., fetchHook).',
              'It must start with the word "use" (e.g., useFetch).',
              'It must be all uppercase (e.g., USEFETCH).',
              'It must start with a capital letter (e.g., UseFetch).'
            ],
            correct: 1
          },
          {
            question: 'What happens if you call a Hook inside an "if" statement?',
            options: [
              'React will only run the hook if the condition is true.',
              'It will work perfectly fine.',
              'React will crash because Hooks must be called in the exact same order on every single render.',
              'The hook will become a regular JavaScript function.'
            ],
            correct: 2
          },
          {
            question: 'If you use a custom hook on three different pages, do those pages share the exact same state data?',
            options: [
              'Yes, changing the data on Page 1 will change it on Page 2.',
              'Yes, but only if they are rendered at the exact same time.',
              'No. Custom Hooks share the LOGIC, but the state itself is completely independent for each component that uses it.',
              'React throws an error if you use a hook more than once.'
            ],
            correct: 2
          },
          {
            question: 'What is the main advantage of Client-Side Routing in a React SPA?',
            options: [
              'It makes the code easier to read.',
              'It automatically encrypts the URL.',
              'It is required by Google for SEO.',
              'It prevents the browser from refreshing the page, making navigation instant and preserving state.'
            ],
            correct: 3
          },
          {
            question: 'Why should you avoid using standard HTML <a href="..."> tags for internal navigation in React?',
            options: [
              'They cause CSS bugs.',
              'They force the browser to do a full page refresh, which destroys your React application state.',
              'They are deprecated in modern HTML.',
              'They cannot be clicked on mobile devices.'
            ],
            correct: 1
          },
          {
            question: 'Which component is used to wrap your entire application so it can use routing features?',
            options: [
              '<BrowserRouter>',
              '<RouterWrapper>',
              '<Routes>',
              '<NavigationProvider>'
            ],
            correct: 0
          },
          {
            question: 'How do you create a "Catch-All" route to display a 404 Not Found page for invalid URLs?',
            options: [
              '<Route error={true} element={<NotFound />} />',
              '<Route path="catch" element={<NotFound />} />',
              '<Route path="*" element={<NotFound />} />',
              '<Route path="404" element={<NotFound />} />'
            ],
            correct: 2
          }
        ]
      }
    ]
  },
  // --- DAY 10 ---
  {
    dayNumber: 10, week: 4,
    title: 'The Context API',
    subtitle: 'Managing global state without Prop Drilling',
    topics: ['Prop Drilling', 'The Radio Analogy', 'When NOT to use Context', 'createContext & Provider', 'useContext', 'Knowledge Check'],
    milestone: { icon: '🌍', title: 'Global State', text: 'Welcome to the final week! Today you learn how to teleport data across your entire application without passing a single prop.' },
    sections: [
      {
        type: 'text',
        title: 'The Nightmare of Prop Drilling',
        body: 'Imagine you have a `User` object containing the logged-in user\'s name. \n\nYour `App` component holds this state. But the component that actually needs to display the name is a `ProfileAvatar` component, which is nested inside a `Navbar`, which is nested inside a `Header`. \n\nTo get the data there, you have to pass it as a prop through `Header`, and then through `Navbar`, even though neither of those components care about the user data! This is called **Prop Drilling**, and it makes code messy and hard to maintain.',
        boxType: 'info',
        boxTitle: 'The Solution: React Context',
        boxBody: 'The Context API allows you to bypass the middle-men. Any component, no matter how deep in the tree, can simply "tune in" to a global broadcast and grab the data directly.'
      },
      {
        type: 'text',
        title: '📻 How it Works: The Radio Analogy',
        body: 'Before we write any code, you need to understand that React Context is exactly like a real-world Radio Station. It requires three distinct pieces to work:\n\n1. **The Frequency (`createContext`)**: You have to claim a specific channel for your data (e.g., 99.5 FM).\n2. **The Radio Tower (`Provider`)**: You need a massive tower at the very top of your application to broadcast the music (your state) into the air.\n3. **The Radio Receiver (`useContext`)**: Down in your individual components, you turn on the radio, tune it to 99.5 FM, and instantly hear the music.',
        boxType: 'rule',
        boxTitle: 'The Component Tree Rule',
        boxBody: 'Just like a real radio tower, the <code>Provider</code> can only broadcast to components that live <em>beneath</em> it. That is why we usually wrap our entire <code>&lt;App /&gt;</code> inside the Provider!'
      },
      {
        type: 'text',
        title: '⚠️ When NOT to use Context',
        body: 'Context feels like magic, so beginners often try to put *every* piece of state into it. This is a massive mistake.\n\nWhenever the state inside a Provider changes, **every single component listening to that Provider will re-render.** If you put a rapidly changing text input into a global Context, your entire application will re-render every time the user types a single letter, causing massive lag.',
        boxType: 'danger',
        boxTitle: 'The Rule of Thumb',
        boxBody: 'Only use Context for data that changes rarely or needs to be accessed globally by many different components. Examples: <strong>Logged-in User Data, Dark/Light Theme, or Shopping Cart Items.</strong> For local form inputs, stick to standard <code>useState</code>!'
      },
      {
        type: 'text',
        title: 'Guided Project: Global User Auth',
        body: 'Let\'s create a Global Authentication Context step-by-step. \n\n**Setup:** Before we write code, go to your `src` folder. Create a new folder named `context`. This is where professional developers store their global state files!'
      },
      {
        type: 'code',
        title: 'Step 1: Create the Context (src/context/UserContext.jsx)',
        body: 'Inside your new `context` folder, create a file named `UserContext.jsx`. Here, we create the Frequency (`createContext`) and the Tower (`UserProvider`).',
        code: `// src/context/UserContext.jsx
import { createContext, useState } from 'react';

// 1. Create the Context (The Radio Frequency)
export const UserContext = createContext();

// 2. Create the Provider (The Radio Tower)
export function UserProvider({ children }) {
  const [user, setUser] = useState("Jane Doe"); // Our global state

  return (
    // The "value" is what we are broadcasting to the world
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: Wrap the App (src/main.jsx)',
        body: 'For components to hear the broadcast, they must be inside the Provider. Open your `main.jsx` and wrap your entire `<App />` inside it.',
        code: `// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { UserProvider } from './context/UserContext.jsx'; // 1. Import Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Wrap the App to make User data available everywhere! */}
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
);`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: Consume the Data (src/Navbar.jsx)',
        body: 'Create a `Navbar.jsx` file in your `src` folder. Any component can use the `useContext` hook (The Receiver) to grab the data instantly, without any props!',
        code: `// src/Navbar.jsx
import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export default function Navbar() {
  // Grab the user data directly from the context!
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar" style={{ padding: '20px', background: '#333', color: 'white' }}>
      <h2>Speta App</h2>
      <p>Welcome back, {user}!</p>
      
      {/* We can even update the global state from here! */}
      <button onClick={() => setUser("Guest")}>Log Out</button>
    </nav>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 4: Render the Navbar (src/App.jsx)',
        body: 'Finally, don\'t forget to actually put your Navbar on the screen! Open `App.jsx` and render it.',
        code: `// src/App.jsx
import Navbar from './Navbar';

export default function App() {
  return (
    <div>
      {/* The Navbar will automatically grab the user data from Context! */}
      <Navbar />
      <div style={{ padding: '20px' }}>
        <h1>Dashboard</h1>
        <p>This is the main application content.</p>
      </div>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Shopping Cart Context',
        timeEstimate: '30 min',
        body: 'Time to build your own global state for an E-commerce store!\n\n**Requirements:**\n1. Inside `src/context/`, create a `CartContext.jsx` file.\n2. Inside, create and export a `CartContext`.\n3. Create and export a `CartProvider` component. Inside it, create a state variable `cartCount` (starting at 0).\n4. Return the `<CartContext.Provider>` passing `cartCount` and `setCartCount` in the `value` object.\n5. Wrap your `<App />` in `main.jsx` with your new `<CartProvider>`.\n6. In a child component, use `useContext` to display the cart count and a button to increase it.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: 'âœ“ Did you export BOTH the Context and the Provider? <br/>âœ“ Did you remember the <code>children</code> prop in your Provider component? <br/>âœ“ Does clicking the button successfully update the global state?'
      },
      {
        type: 'homework',
        title: 'Advanced Context: Custom Hook Wrappers',
        timeEstimate: '20 min',
        body: 'Importing BOTH `useContext` and `UserContext` into every file gets annoying. Professional developers write a custom hook to wrap it!\n\n**Requirements:**\n1. Go back to your `UserContext.jsx` file.\n2. At the bottom, write a new custom hook:\n`export const useUser = () => useContext(UserContext);`\n3. Now, go to your `Navbar.jsx`.\n4. Delete the `useContext` and `UserContext` imports.\n5. Instead, just import your new hook: `import { useUser } from "./context/UserContext";`\n6. Call it cleanly: `const { user, setUser } = useUser();`\n\nThis makes your code dramatically cleaner and easier to read!',
        boxTitle: 'Pro-Tip',
        boxBody: 'This pattern is used by almost every major React library (like React Router\'s <code>useNavigate</code>). They are all just wrappers around React Context!'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        body: 'The Context API is a powerful tool, but understanding exactly how data flows through the component tree requires practice. To master global state and see more advanced architectural patterns, reading the official documentation is highly recommended.',
        boxType: 'info',
        boxTitle: 'Official React Docs',
        boxBody: 'Dive deeper into Context by reading the official guide on <a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank" style="color: var(--accent); text-decoration: underline;">Passing Data Deeply with Context</a>.'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'What problem does the Context API solve?',
            options: [
              'It makes API fetch requests faster.',
              'It eliminates "Prop Drilling" by allowing you to share state globally across the component tree.',
              'It automatically styles your application.',
              'It replaces the need for React Router.'
            ],
            correct: 1
          },
          {
            question: 'In our Radio analogy, what does the <Provider> component act as?',
            options: [
              'The Radio Receiver that listens to the music.',
              'The Radio Tower that broadcasts the data to all components beneath it.',
              'The Radio Frequency (like 99.5 FM).',
              'The static interference.'
            ],
            correct: 1
          },
          {
            question: 'Why is it a bad idea to put a rapidly changing text input into a global Context?',
            options: [
              'Because Context can only hold numbers.',
              'Because every component listening to that Context will re-render on every keystroke, causing severe lag.',
              'Because it is a security risk.',
              'Because React does not allow strings in Context.'
            ],
            correct: 1
          },
          {
            question: 'What happens if you try to use useContext() in a component that is NOT wrapped inside the corresponding Provider?',
            options: [
              'React automatically wraps it for you.',
              'The context will return undefined (or the default value), potentially crashing your app if you try to read its properties.',
              'It will trigger an infinite loop.',
              'It fetches the data from the internet instead.'
            ],
            correct: 1
          }
        ]
      }
    ],
  },
  // --- DAY 11 ---
  {
    dayNumber: 11, week: 4,
    title: 'useRef & The Grand Finale',
    subtitle: 'Silent memory and building a full multi-page application',
    topics: ['The Re-render Problem', 'The Sticky Note Analogy', 'Direct DOM Access', 'Building a Multi-Page App', 'Further Reading', 'Knowledge Check'],
    milestone: { icon: '🎯', title: 'Targeting Elements', text: 'Today is your final lesson! You will learn how to directly control HTML elements using useRef, and combine it with everything you learned to build a full 3-page website.' },
    sections: [
      {
        type: 'text',
        title: 'The Re-render Problem',
        body: 'By now, you know that `useState` is how we remember data in React. But `useState` has a side effect: every time you update a state variable, React completely redraws (re-renders) the component to show the new data on the screen. \n\nBut what if you want to remember a piece of data in the background *without* forcing the screen to redraw? Or what if you just want to grab a specific HTML element (like an `<input>`) to force the cursor to focus on it? \n\nFor this, we use the **`useRef`** hook.',
        boxType: 'info',
        boxTitle: 'The Definition',
        boxBody: '`useRef` is a hook that lets you reference a value that\u2019s not needed for rendering. It returns an object with a single property: <code>current</code>.'
      },
      {
        type: 'text',
        title: '📝 The Sticky Note Analogy',
        body: 'Think of `useState` as a loud megaphone. When you change state, you scream into the megaphone, and React immediately scrambles to redraw the entire screen to match what you said.\n\nThink of `useRef` as a **secret sticky note** on the back of your component. You can write information on it (`ref.current = 5`), and you can read it later. But React doesn\'t know about the sticky note, and it will never redraw the screen when you change it.',
        boxType: 'danger',
        boxTitle: 'The Golden Rule',
        boxBody: 'If the data is going to be displayed on the screen, you MUST use <code>useState</code>. If the data is only used in the background (like a timer ID, or grabbing an HTML element to click it), use <code>useRef</code>.'
      },
      {
        type: 'text',
        title: 'Guided Project: The Speta Agency Website',
        body: 'For your final teaching day, we are going to build a full multi-page agency website from scratch! \n\n**Setup:** Go to your `src` folder. Create a folder named `pages` and a folder named `components`.\n\nInside `pages`, create four empty files: `Home.jsx`, `About.jsx`, `Contact.jsx`, and `NotFound.jsx`.\nInside `components`, create `Footer.jsx`.'
      },
      {
        type: 'code',
        title: 'Step 1: The Global Footer (src/components/Footer.jsx)',
        body: 'Instead of writing the footer on every single page, we create it once as a reusable component. We will place this at the bottom of our entire app.',
        code: `// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ padding: '40px 20px', background: '#111', color: '#fff', marginTop: '50px', textAlign: 'center' }}>
      <h3>Speta Agency</h3>
      <p>© 2026 All Rights Reserved.</p>
    </footer>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 2: The 404 Error Page (src/pages/NotFound.jsx)',
        body: 'We learned about this in Day 9. If a user types a bad URL, we need a fallback screen to catch them.',
        code: `// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>Oops! The page you are looking for does not exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>Take me back home</Link>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 3: The Routing Setup (src/App.jsx)',
        body: 'Now we wire everything together. We will place our new `<Footer />` component outside of the `<Routes>` block so it permanently stays at the bottom of every page.',
        code: `// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <nav style={{ display: 'flex', gap: '15px', padding: '20px', background: '#eee' }}>
        <strong>Speta Agency</strong>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div style={{ padding: '20px', flexGrow: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* The Catch-All Route for our 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* The Global Footer appears on every page automatically! */}
      <Footer />
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 4: Scroll To Bottom (src/pages/Home.jsx)',
        body: 'Let\'s build the Home page. We will use `useRef` to create a \"Scroll to Bottom\" button. We attach a ref to a specific section on this page, and use native DOM methods to scroll to it!',
        code: `// src/pages/Home.jsx
import { useRef } from 'react';

export default function Home() {
  // 1. Create the sticky note
  const bottomSectionRef = useRef(null);

  const scrollToBottom = () => {
    // 3. Use native DOM methods to scroll to the element!
    bottomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <h1>Welcome to Speta Agency</h1>
      <button onClick={scrollToBottom}>Jump to Call to Action</button>
      
      {/* Creating artificial empty space to force scrolling */}
      <div style={{ height: '150vh', background: 'linear-gradient(#fff, #ccc)' }}></div>
      
      {/* 2. Attach the ref to the HTML element we want to target */}
      <div ref={bottomSectionRef} style={{ padding: '50px', background: '#4caf50', color: 'white' }}>
        <h2>Ready to start your project?</h2>
        <p>Head over to our Contact page.</p>
      </div>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 5: Custom Video Controls (src/pages/About.jsx)',
        body: 'On the About page, we have a showcase video. HTML `<video>` tags have built-in `.play()` and `.pause()` methods, but we can only trigger them from custom buttons if we grab the element using `useRef`!',
        code: `// src/pages/About.jsx
import { useRef } from 'react';

export default function About() {
  // 1. Create the sticky note for the video
  const videoRef = useRef(null);

  return (
    <div>
      <h1>About Our Agency</h1>
      
      {/* 2. Attach the ref to the video element */}
      <video 
        ref={videoRef} 
        width="400" 
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
      />
      
      <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
        {/* 3. Use the ref to trigger native HTML methods! */}
        <button onClick={() => videoRef.current.play()}>Play Showcase</button>
        <button onClick={() => videoRef.current.pause()}>Pause Showcase</button>
      </div>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Step 6: Auto-Focus the Form (src/pages/Contact.jsx)',
        body: 'When a user visits the Contact page, we want their cursor to automatically start blinking inside the \"Name\" input. We combine `useEffect` (Day 7) and `useRef` to do this!',
        code: `// src/pages/Contact.jsx
import { useRef, useEffect } from 'react';

export default function Contact() {
  // 1. Create the sticky note
  const nameInputRef = useRef(null);

  useEffect(() => {
    // 3. When the component loads, directly access the HTML and focus it!
    nameInputRef.current.focus();
  }, []); // Empty array means this only runs once on load

  return (
    <div>
      <h1>Contact Us</h1>
      <form style={{ display: 'flex', flexDirection: 'column', width: '300px', gap: '10px' }}>
        {/* 2. Attach the sticky note to this specific input */}
        <input ref={nameInputRef} type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'text',
        title: 'Unguided Task: The Image Carousel',
        timeEstimate: '30 min',
        body: 'Let\'s use `useRef` to manipulate the DOM one last time! Build a horizontal scrolling image gallery.\n\n**Requirements:**\n1. In your `pages` folder, create `Gallery.jsx`.\n2. In `App.jsx`, add a new `<Link>` and `<Route>` for `/gallery`.\n3. In `Gallery.jsx`, create a `div` that contains 5 images (or colored boxes). Give the `div` a style of `{ display: "flex", overflowX: "scroll", width: "400px" }`.\n4. Create a `galleryRef` and attach it to that `div`.\n5. Create two buttons: "Scroll Left" and "Scroll Right".\n6. In the onClick handlers, use the native DOM method to scroll the div: `galleryRef.current.scrollBy({ left: 300, behavior: "smooth" })`. (Use `-300` for left).',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '\u2713 Did you remember to add the Route to App.jsx? <br/>\u2713 Did you attach the ref to the parent container, not the individual images? <br/>\u2713 Does clicking the buttons smoothly slide the images?'
      },
      {
        type: 'homework',
        title: 'Advanced Ref: The Silent Stopwatch',
        timeEstimate: '30 min',
        body: 'We can also use `useRef` to store background mechanics. Try building a stopwatch!\n\n**Requirements:**\n1. Use `useState` to track the `seconds` (because we want to see the numbers tick up on the screen).\n2. Use `useRef` to store the `timerId` (because saving the timer ID shouldn\'t cause a screen refresh).\n3. Create a `handleStart` function that uses `setInterval` to increase the seconds every 1000ms. Save the ID returned by `setInterval` into your ref: `timerRef.current = setInterval(...)`.\n4. Create a `handleStop` function that stops the timer by passing your ref to `clearInterval`: `clearInterval(timerRef.current)`.',
        boxTitle: 'Pro-Tip',
        boxBody: 'This pattern is incredibly common. We use state for what the user <em>sees</em>, and refs for the background mechanics that the developer needs to <em>control</em>.'
      },
      {
        type: 'text',
        title: '📚 Further Reading',
        body: 'Understanding when to use `useState` versus `useRef` is one of the key milestones in becoming a Senior React Developer. The official docs have a fantastic visual breakdown of this comparison.',
        boxType: 'info',
        boxTitle: 'Official React Docs',
        boxBody: 'Deepen your understanding by reading the official guide on <a href="https://react.dev/learn/referencing-values-with-refs" target="_blank" style="color: var(--accent); text-decoration: underline;">Referencing Values with Refs</a>.'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'What is the primary difference between useState and useRef?',
            options: [
              'useRef is much faster at updating the screen.',
              'useState triggers a component re-render when it changes, but useRef does not.',
              'useRef can only store strings, while useState can store objects.',
              'useState is for external APIs, useRef is for internal APIs.'
            ],
            correct: 1
          },
          {
            question: 'If you create a ref called `myRef`, how do you access the actual HTML element stored inside it?',
            options: [
              'myRef.value',
              'myRef.data',
              'myRef.current',
              'myRef()'
            ],
            correct: 2
          },
          {
            question: 'When should you absolutely NOT use useRef?',
            options: [
              'When you need to store the ID of a setInterval timer.',
              'When you need to directly focus an HTML input element.',
              'When you are building a custom Video Player.',
              'When you want to display the changing data on the screen for the user to see.'
            ],
            correct: 3
          },
          {
            question: 'How do you attach a ref to an HTML element in JSX?',
            options: [
              'By passing it to the "id" attribute.',
              'By passing it to the special "ref" attribute (e.g., <input ref={myRef} />).',
              'By wrapping the element in a <Provider>.',
              'By calling document.getElementById().'
            ],
            correct: 1
          }
        ]
      }
    ]
  },
  {
    dayNumber: 12, week: 4,
    title: 'Capstone & Certification',
    subtitle: 'The Final Trial',
    topics: ['Project Architecture', 'Global State Management', 'Routing', 'Final Exam'],
    milestone: { icon: '🎓', title: 'React Master', text: 'This is it. Build a full application from scratch, pass the final exam, and claim your Speta Academy certificate.' },
    sections: [
      {
        type: 'text',
        title: 'The Capstone Project',
        body: 'For the past four weeks, you have been learning individual React tools in isolation. Today, the training wheels come off.\n\nYour final task is to build a fully functional E-Commerce frontend for the **Speta Academy Merchandise Store**. You must combine Components, Props, State, Effects, Custom Hooks, Routing, Context, and Refs into a single, cohesive application.',
        boxType: 'info',
        boxTitle: 'The API Endpoint',
        boxBody: 'You will fetch your store products using this free, open-source mock API: <br/><code>https://fakestoreapi.com/products</code>'
      },
      {
        type: 'homework',
        title: 'Project Requirements: The Speta Store',
        timeEstimate: '3 hours',
        body: 'Build the application from scratch using your own file structure.\n\n**Architectural Requirements:**\n1. **Routing:** Use React Router to create three pages: `/` (Home), `/products` (Shop), and `/cart` (Shopping Cart). Include a global Navbar that appears on all pages.\n2. **Side Effects:** On the Shop page, write a `useEffect` that fetches the products from the FakeStore API and displays them in a grid.\n3. **Global State:** Create a `CartContext` to hold the user\'s selected items. When a user clicks "Add to Cart" on a product, it should update the global state. The Navbar must display the total number of items currently in the cart.\n4. **DOM Manipulation:** On the Home page, create a Newsletter Signup input. Use `useRef` and `useEffect` to automatically focus the input field as soon as the Home page loads.\n5. **Clean Code:** Extract your API fetching logic into a custom hook (e.g., `useFetchProducts`).\n\nTake your time. Read the errors in your console. You have everything you need to build this.',
        boxTitle: 'Submission',
        boxBody: 'Once you have successfully built the Speta Store and confirmed all routes and global state updates work flawlessly, you are authorized to proceed to the Master Exam.'
      },
      {
        type: 'exam',
        title: 'Master Certification Exam',
        questions: [
          {
            question: 'What is the absolute golden rule of returning JSX from a component?',
            options: [
              'You must write it in single quotes.',
              'You must return one single parent element.',
              'You must always use a <div> as the wrapper.',
              'You cannot return standard HTML tags.'
            ],
            correct: 1
          },
          {
            question: 'If you want to map over an array of users and display their names, what special prop MUST you provide to the top-level element in the map return?',
            options: [
              'The "id" prop.',
              'The "key" prop, using a unique identifier.',
              'The "index" prop.',
              'The "map" prop.'
            ],
            correct: 1
          },
          {
            question: 'When submitting a form in React, how do you stop the browser from refreshing the page and wiping out your state?',
            options: [
              'Use a <button type="button"> instead of "submit".',
              'Pass the form to useEffect.',
              'Call event.preventDefault() inside your onSubmit handler.',
              'React automatically stops the refresh for you.'
            ],
            correct: 2
          },
          {
            question: 'If you provide an empty dependency array [] to a useEffect hook, when will the effect run?',
            options: [
              'Every time the component re-renders.',
              'Only when the component first mounts to the screen.',
              'Only when the component unmounts.',
              'Never.'
            ],
            correct: 1
          },
          {
            question: 'What happens if you use standard HTML <a href="..."> tags for internal navigation in a React Single Page Application?',
            options: [
              'The app crashes instantly.',
              'The browser does a full page refresh, permanently destroying your React state (like your shopping cart).',
              'React Router automatically converts it into a <Link>.',
              'The styles break.'
            ],
            correct: 1
          },
          {
            question: 'What is the purpose of the React Context API?',
            options: [
              'To fetch data from backend servers.',
              'To teleport global state directly to any component, completely avoiding Prop Drilling.',
              'To create multi-page navigation.',
              'To force a component to re-render.'
            ],
            correct: 1
          },
          {
            question: 'Why is it a terrible idea to put a rapidly changing text input into a global Context Provider?',
            options: [
              'It will cause every single component listening to that Context to re-render on every keystroke, causing severe lag.',
              'Context can only hold arrays and objects.',
              'It is a security vulnerability.',
              'React will throw a syntax error.'
            ],
            correct: 0
          },
          {
            question: 'Which hook should you use if you need to remember data in the background WITHOUT triggering a component re-render?',
            options: [
              'useState',
              'useContext',
              'useRef',
              'useEffect'
            ],
            correct: 2
          },
          {
            question: 'If you create a ref called `inputRef`, how do you access the actual raw HTML element to call native methods like .focus()?',
            options: [
              'inputRef.html',
              'inputRef.current',
              'inputRef.element',
              'inputRef()'
            ],
            correct: 1
          },
          {
            question: 'You want to display a counter number on the screen. The user clicks a button to increase it. Should you use useState or useRef?',
            options: [
              'useRef, because it is faster.',
              'useState, because the data must be displayed on the screen, requiring a re-render to show the new number.',
              'It doesn\'t matter, both work exactly the same.',
              'useContext, because the button is clicking it.'
            ],
            correct: 1
          }
        ]
      }
    ]
  }

];
