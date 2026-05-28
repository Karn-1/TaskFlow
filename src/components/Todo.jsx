import React from 'react'
import { api } from '../redux/Mediapipe';
import { useEffect ,useState } from 'react';
import List from './List';


const Todo = () => {

  const [statement, setStatement] = useState({
  quote: '',
  author: ''
  });

  const [error, setError] = useState(null);

  useEffect(() => {
    async function getQuotes() {
      try {
        const res = await fetch(api);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch quotes: ${res.status}`);
        }
        
        const q = await res.json();

        setStatement({
          quote: q.quote,
          author: q.author
        });
        
        setError(null);
      } catch (err) {
        console.error('Error fetching quote:', err);
        setError('Failed to load quote. Please try again later.');
      }
    }

    getQuotes();
  }, []);

  
  

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      
      {/* Quote Section */}
      <div className="max-w-4xl mx-auto px-4 pt-3">
        <div className="bg-gray-800 rounded-xl shadow-lg p-2">
          
          {error ? (
            <p className="text-xl text-red-400 text-center">{error}</p>
          ) : (
            <>
              <p className="text-xl md:text-2xl font-medium leading-relaxed break-words text-gray-100">
                {statement.quote || "You have the right to work, but never to the fruit of work"}
              </p>

              <p className="mt-2 text-right text-sm md:text-base text-blue-400 italic">
                — {statement.author || "Geeta"}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Todo List */}
      <div>
        <List />
      </div>

    </div>
  )
}

export default Todo
