import { Note } from "@/types/note";

export const demoNotes: Note[] = [
  {
    id: "1",
    title: "Grocery List",
    content: `Here's my grocery list for the week. I want to make sure I have everything to cook healthy meals and snacks:
- Apples (4-5, preferably Fuji or Gala)
- Bananas (a bunch, ripe)
- Bread (whole wheat)
- Milk (2 liters)
- Eggs (1 dozen)
- Spinach (fresh)
- Chicken breast (2 packs)
- Almonds (100g)
- Greek yogurt (500g)
- Olive oil`,
    color: "purple",
    tags: ["shopping", "food", "weekly"],
    archived: false,
    hidden: false,
    pinned: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 4, // 4 days ago
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 3, // 3 days ago
  },
  {
    id: "2",
    title: "Project Ideas",
    content: `I've been brainstorming some interesting projects I could work on to improve my skills:
1. Build a personal portfolio website using Next.js and Tailwind CSS, focusing on performance and animations.
2. Create a budget tracker app with user authentication, charts for spending, and notifications for overspending.
3. Develop a note-taking app that integrates AI for semantic search and tagging.
4. Experiment with a small e-commerce site using Stripe payments and Firebase backend.`,
    color: "blue",
    tags: ["projects", "ideas", "dev"],
    archived: false,
    hidden: false,
    pinned: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
  },
  {
    id: "3",
    title: "Daily Journal",
    content: `Today was quite productive. I spent most of the morning setting up my new development environment and refactoring some of my older code. 
I learned how to use React hooks more effectively, especially useEffect and useState together to manage component state and side effects.
In the afternoon, I experimented with different UI libraries and layouts. It was challenging at times, but by the end of the day, I felt much more confident in my approach.`,
    color: "green",
    tags: ["journal", "daily", "reflection"],
    archived: false,
    hidden: false,
    pinned: true,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
  },
  {
    id: "4",
    title: "Recipe: Pancakes",
    content: `I tried a new pancake recipe today. It's fluffy, soft, and perfect for a weekend breakfast. Here's the full recipe:
Ingredients:
- 1 cup all-purpose flour
- 1 egg
- 1 cup milk
- 2 tbsp sugar
- 1 tsp baking powder
- Pinch of salt
- Butter for cooking

Instructions:
1. In a large bowl, mix flour, sugar, baking powder, and salt.
2. Add egg and milk gradually, whisking until smooth.
3. Heat a skillet over medium heat and add a small amount of butter.
4. Pour batter to form pancakes, cook until bubbles form on top, flip and cook until golden.
5. Serve with syrup, honey, or fresh fruits.`,
    color: "red",
    tags: ["recipe", "breakfast", "food"],
    archived: false,
    hidden: false,
    pinned: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 4,
  },
  {
    id: "5",
    title: "Reading List",
    content: `Here's a list of books I want to read this year to improve both personal and professional skills:
- "Atomic Habits" by James Clear: Practical guide on building good habits.
- "The Pragmatic Programmer" by Andrew Hunt: Tips for becoming a better developer.
- "Clean Code" by Robert C. Martin: Essential book for writing maintainable code.
- "Deep Work" by Cal Newport: Strategies for focused, productive work.
- "Thinking, Fast and Slow" by Daniel Kahneman: Insights into human thinking and decision-making.`,
    color: "default",
    tags: ["reading", "books", "learning"],
    archived: false,
    hidden: false,
    pinned: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 6,
  },
  {
    id: "6",
    title: "Motivational Quote",
    content: `I love collecting motivational quotes that inspire me to stay focused and positive. Today's favorite:
"The only way to do great work is to love what you do." – Steve Jobs
I want to remind myself daily that passion drives excellence, and staying consistent is key to achieving long-term goals.`,
    color: "yellow",
    tags: ["motivation", "quotes", "inspiration"],
    archived: false,
    hidden: false,
    pinned: false,
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2,
    updatedAt: Date.now() - 1000 * 60 * 60 * 24 * 1,
  },
];
