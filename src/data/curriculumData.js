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
        timeEstimate: '30–45 min',
        body: 'Now it is your turn to write code from scratch. Clear out your App.jsx and App.css. Your task is to build a single "Tweet" card.\n\n**Requirements for Audit:**\n1. You must define a `const username` and `const tweetBody` at the top of your function.\n2. You must inject those variables into your JSX using `{}`.\n3. You must use `className` to style it to look like a Tweet (white box, gray border, bold name).\n4. You must add an image of a heart icon for the "Like" button, and it must load from your `/public` folder.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you use exactly one parent <code>&lt;div&gt;</code>? <br/>✓ Did you use <code>className</code> instead of <code>class</code>? <br/>✓ Does your <code>&lt;img /&gt;</code> tag have a closing slash?'
      },
      {
        type: 'homework',
        title: 'The Retweet Counter',
        timeEstimate: '45–60 min',
        body: 'You built a static Tweet Card in class. Now make it come alive! Your job is to add an interactive Retweet counter to your Tweet Card.\n\n**Requirements:**\n1. Add a `const [retweetCount, setRetweetCount]` state variable starting at `0` — you will need to import `{ useState }` from `"react"`.\n2. Add a 🔁 Retweet button below the tweet body.\n3. Clicking the button must increase `retweetCount` by 1 and display the current count next to the button.\n4. Style the button so it turns green after being clicked (use a second boolean state variable like `isRetweeted`).',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Did you import <code>useState</code> at the top of the file? <br/>✓ Does clicking Retweet increase the count each time? <br/>✓ Did you use the setter function <code>setRetweetCount(retweetCount + 1)</code> and not <code>retweetCount++</code>? <br/>✓ <strong>Bonus:</strong> Can you make it toggle — so clicking again un-retweets and decreases the count?'
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
        lang: 'jsx'
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
        timeEstimate: '45–60 min',
        body: 'Time to prove you understand props and files! Your task is to build a reusable `<Product />` component and display 3 different items on the screen.\n\n**Requirements:**\n1. Create a new file named `Product.jsx` inside your `src/` folder.\n2. In that file, build and `export default` a `Product` component that accepts three props: `title`, `price`, and `isOnSale`.\n3. Render the `title` and `price` inside the component using `{}`.\n4. Use a ternary operator (`? :`) to display a "SALE!" badge only if `isOnSale` is true.\n5. Open your `App.jsx`, import your new `Product` component, and render three of them with different data. Make sure at least one is on sale, and one is not.',
        boxType: 'rule',
        boxTitle: 'Self-Audit Checklist',
        boxBody: '✓ Did you <code>export default</code> the Product component and <code>import</code> it into App.jsx? <br/>✓ Did you use curly braces <code>{ title, price }</code> in the parameters? <br/>✓ Did you pass strings in quotes (<code>title="Shoes"</code>) but booleans/numbers in curly braces (<code>price={50} isOnSale={true}</code>)?'
      },
      {
        type: 'homework',
        title: 'The Social Media Profile Grid',
        timeEstimate: '60–75 min',
        body: 'You built a roster using individual `<ProfileCard>` tags. Now challenge yourself to do it the smart way — using an array and `.map()`.\n\n**Requirements:**\n1. In your `App.jsx`, create a `const teamMembers` array with at least 5 objects. Each object should have `name`, `role`, and `isLead` properties.\n2. Instead of writing 5 individual `<ProfileCard>` tags, use `{teamMembers.map(member => <ProfileCard key={member.name} name={member.name} role={member.role} isLead={member.isLead} />)}` inside your JSX.\n3. The result on screen should look identical — the only difference is how you wrote the code.\n\n**Hint:** The `.map()` method loops over every item in an array and returns a new array — in our case, an array of JSX elements. React knows how to render this automatically!',
        boxTitle: 'Homework Checklist',
        boxBody: '✓ Is your <code>teamMembers</code> array defined outside the return statement? <br/>✓ Did you use <code>.map()</code> to loop over the array? <br/>✓ Did each rendered item get a unique <code>key</code> prop (e.g. <code>key={member.name}</code>)? <br/>✓ <strong>Bonus:</strong> Sort the array so Team Leads always appear first — use <code>.sort()</code> before <code>.map()</code>.'
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
        body: 'You have now covered the three pillars of React: JSX, Components & Props, and State. Here is a preview of what Week 2 will build on top of this foundation:\n\n1. **Lists & .map()** (Day 4–5): How to render dynamic lists of data from arrays — the skill behind every feed, product grid, and todo list you have ever seen.\n2. **Events & Forms** (Day 4–5): How to capture user input, validate it, and respond to it in real time.\n3. **useEffect** (Day 6): How to run code automatically — like fetching data from an API when a page loads. This is the Hook that connects your React app to the outside world.\n\nYou are further along than you think. Keep your projects open and keep tinkering!',
        boxType: 'tip',
        boxTitle: 'Tip: Keep Building Between Classes',
        boxBody: 'The students who improve fastest are the ones who keep their code editor open after class. Even 30 minutes of experimenting — breaking things and fixing them — is worth more than re-reading the notes.'
      },
      {
        type: 'exam', // Notice the new type!
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
    topics: ['onClick & onChange', 'Passing vs Calling', 'Ternary (? :)', 'Logical AND (&&)', 'Knowledge Check'],
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
        type: 'code',
        title: 'Guided Project: The Login Gate',
        body: 'Create a file named `Dashboard.jsx`. We will use a Ternary to show a Login button OR a Logout button, and an `&&` to show a secret message ONLY if they are logged in.',
        code: `// src/Dashboard.jsx
import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // We can write one function to toggle the boolean!
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn); // Sets it to the opposite of what it is
  };

  return (
    <div className="card">
      <h2>Welcome to the Portal</h2>

      {/* TERNARY (? :) -> If true show Logout, else show Login */}
      {isLoggedIn ? (
        <button onClick={toggleLogin}>Log Out</button>
      ) : (
        <button onClick={toggleLogin}>Log In</button>
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
  }
];