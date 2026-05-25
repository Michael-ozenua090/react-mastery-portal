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
        boxBody: 'Vanilla JS gets messy fast when your UI has lots of moving parts. React keeps everything organised into small, reusable pieces called components.'
      },
      {
        type: 'setup',
        title: 'Setting Up Your Project with Vite',
        body: 'We use Vite to create React apps. It is blazing fast because it only updates the exact file you change in milliseconds.',
        code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`,
        lang: 'bash'
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
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Guided Project: The Digital Business Card',
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
        title: 'The CSS Styling (App.css)',
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
        body: 'Now it is your turn to write code from scratch. Clear out your App.jsx and App.css. Your task is to build a single "Tweet" card.\n\n**Requirements for Audit:**\n1. You must define a `const username` and `const tweetBody` at the top of your function.\n2. You must inject those variables into your JSX using `{}`.\n3. You must use `className` to style it to look like a Tweet (white box, gray border, bold name).\n4. You must add an image of a heart icon for the "Like" button, and it must load from your `/public` folder.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use exactly one parent <code>&lt;div&gt;</code>? <br/>✓ Did you use <code>className</code> instead of <code>class</code>? <br/>✓ Does your <code>&lt;img /&gt;</code> tag have a closing slash?'
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
        body: 'Writing `props.` over and over gets repetitive. Modern React developers use standard JavaScript **Object Destructuring** right inside the function parameters to pull out exactly what they need instantly.',
        code: `// We pull 'name' and 'grade' directly out of the hidden props object!
function StudentCard({ name, grade }) {
  return (
    <div className="card">
      <h2>Name: {name}</h2>
      <p>Grade: {grade}</p>
    </div>
  );
}`,
        lang: 'jsx'
      },
      {
        type: 'code',
        title: 'Guided Project: Tech Team Roster',
        body: 'Let\'s build a reusable component. Instead of putting all our code in one file, we are going to create a brand new file for our component. Inside your `src/` folder, create a brand new file named `ProfileCard.jsx`. Paste this code inside it:',
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
        title: 'Step 3: The Styling',
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
        body: 'Time to prove you understand props and files! Your task is to build a reusable `<Product />` component and display 3 different items on the screen.\n\n**Requirements:**\n1. Create a new file named `Product.jsx` inside your `src/` folder.\n2. In that file, build and `export default` a `Product` component that accepts three props: `title`, `price`, and `isOnSale`.\n3. Render the `title` and `price` inside the component using `{}`.\n4. Use a ternary operator (`? :`) to display a "SALE!" badge only if `isOnSale` is true.\n5. Open your `App.jsx`, import your new `Product` component, and render three of them with different data. Make sure at least one is on sale, and one is not.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you <code>export default</code> the Product component and <code>import</code> it into App.jsx? <br/>✓ Did you use curly braces <code>{ title, price }</code> in the parameters? <br/>✓ Did you pass strings in quotes (<code>title="Shoes"</code>) but booleans/numbers in curly braces (<code>price={50} isOnSale={true}</code>)?'
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
    topics: ['What is State', 'useState Hook', 'State Updates', 'Never Mutate State', 'Knowledge Check'],
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
        lang: 'jsx'
      },
      {
        type: 'code',
        title: '⚠️ The Golden Rule: Never Mutate State',
        body: 'This is the #1 mistake beginners make. You are NEVER allowed to change a state variable directly. You must always use the setter function, and if it is a list (array), you must give React a **brand new list**.',
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
        type: 'code',
        title: 'Guided Project: The Speta Like Button',
        body: 'Let\'s build something you see every day on social media. Create a new file called `LikeButton.jsx` in your `src/` folder and paste this code. Notice how we use a boolean (true/false) state!',
        code: `// src/LikeButton.jsx
import { useState } from "react";
import './App.css'; // Let's assume we put styles here

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
    <div className="card">
      <p>Do you like this course?</p>
      <button 
        // We use a dynamic className to change colors if it is liked!
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
        type: 'text',
        title: 'Unguided Task: The Habit Tracker',
        body: 'Time to build your own stateful component from scratch! \n\n**Requirements:**\n1. Create a new file named `HabitTracker.jsx`.\n2. Create a component that tracks how many glasses of water you drank today.\n3. You need one `useState` variable starting at `0`.\n4. Create an "Add Water" button that increases the count by 1.\n5. Create a "Reset" button that sets the count back to 0.\n6. Import and render your `<HabitTracker />` inside `App.jsx`.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you <code>import { useState } from "react";</code> at the very top? <br/>✓ Did you use the setter function (e.g., <code>setWater(water + 1)</code>) instead of <code>water++</code>? <br/>✓ Did you pass a function to onClick like <code>onClick={() => setWater(0)}</code>?'
      },
      {
        type: 'quiz',
        title: 'Knowledge Check',
        questions: [
          {
            question: 'Why do we use useState instead of a regular variable like `let count = 0`?',
            options: [
              'Regular variables are too slow in JavaScript.',
              'Because useState automatically saves the data to a database.',
              'When State changes, it tells React to re-render the screen. Regular variables do not.',
              'It is just a newer syntax for regular variables.'
            ],
            correct: 2
          },
          {
            question: 'Which of the following is the CORRECT syntax to create a state variable?',
            options: [
              'const [score, setScore] = useState(0);',
              'const {score, setScore} = useState(0);',
              'let score = useState(0);',
              'const [score] = useState(0);'
            ],
            correct: 0
          },
          {
            question: 'You have a state array: `const [cars, setCars] = useState(["Toyota"])`. How do you correctly add "Honda"?',
            options: [
              'cars.push("Honda");',
              'setCars(["Honda"]);',
              'setCars(cars + "Honda");',
              'setCars([...cars, "Honda"]);'
            ],
            correct: 3
          },
          {
            question: 'What is the Golden Rule of React State?',
            options: [
              'Always use strings, never arrays.',
              'Never mutate (change) state directly. Always use the setter function.',
              'State can only be used in App.jsx.',
              'State must be passed down from Parent to Child.'
            ],
            correct: 1
          },
          {
            question: 'If you want a button to reset a score to 0, how should you write the onClick event?',
            options: [
              '<button onClick={setScore(0)}>',
              '<button onClick="setScore(0)">',
              '<button onClick={() => setScore(0)}>',
              '<button onClick={score = 0}>'
            ],
            correct: 2
          }
        ]
      }
    ]
  },
];