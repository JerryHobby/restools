'use client';

import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface FAQ {
  id: number;
  category: string;
  question: string;
  answer: string;
  orderInCategory: number;
}

export default function FaqPage() {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch('/api/faq');
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error('Error fetching FAQs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  const toggleItem = (id: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFaqs = faqs.filter(faq => {
    const searchLower = searchTerm.toLowerCase();
    return (
      faq.question.toLowerCase().includes(searchLower) ||
      faq.answer.toLowerCase().includes(searchLower) ||
      faq.category.toLowerCase().includes(searchLower)
    );
  });

  // Group FAQs by category
  const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Frequently Asked Questions</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
        />
      </div>

      {/* FAQ Accordion */}
      {Object.entries(groupedFaqs).map(([category, categoryFaqs]) => (
        <div key={category} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <div className="space-y-4">
            {categoryFaqs.map((faq) => (
              <div
                key={faq.id}
                className="border rounded-lg overflow-hidden dark:border-gray-600"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-4 text-left bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 flex justify-between items-center"
                >
                  <span>{faq.question}</span>
                  <span className="transform transition-transform duration-200">
                    {openItems.has(faq.id) ? '−' : '+'}
                  </span>
                </button>
                {openItems.has(faq.id) && (
                  <div className="p-4 bg-gray-50 dark:bg-gray-800 prose dark:prose-invert max-w-none">
                    <ReactMarkdown>{faq.answer}</ReactMarkdown>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {filteredFaqs.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No FAQs found matching your search.
        </p>
      )}
    </div>
  );
}
