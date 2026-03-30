export default function FAQPage() {
  const faqs = [
    {
      question: 'How do I prepare Madame Mai soup bowls?',
      answer: 'Simply remove from freezer and heat in the microwave for 8-10 minutes or on the stovetop until hot. Stir well and enjoy!',
    },
    {
      question: 'How long do the products last in the freezer?',
      answer: 'Our products can be stored in the freezer for up to 6 months from the production date.',
    },
    {
      question: 'Are the products suitable for vegetarians?',
      answer: 'Currently, all our products contain meat or seafood. We\'re working on vegetarian options for the future.',
    },
    {
      question: 'Where can I buy Madame Mai products?',
      answer: 'Our products are available through our online store and select retailers across South Australia.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1
          className="text-5xl md:text-6xl font-serif mb-8 text-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          FAQ
        </h1>
        <p className="text-center text-gray-600 mb-16">
          Frequently asked questions about our products and services.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h2 className="text-xl font-medium mb-4">{faq.question}</h2>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
