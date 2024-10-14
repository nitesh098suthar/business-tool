const FAQPage = () => {
    return (
      <div className="min-h-screen p-4 bg-gray-100">
        <h1 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h1>
        
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h2 className="text-xl font-medium">1. What sizes do you offer?</h2>
          <p className="text-gray-600 mt-2">
            We offer a variety of sizes for all men's clothing, ranging from Small (S) to Extra-Large (XL). Please refer to the size chart on each product page for more details.
          </p>
        </div>
  
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h2 className="text-xl font-medium">2. How do I track my order?</h2>
          <p className="text-gray-600 mt-2">
            After placing your order, you will receive an email with a tracking number. You can use this number to track your order on our website's tracking page.
          </p>
        </div>
  
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h2 className="text-xl font-medium">3. What is your return policy?</h2>
          <p className="text-gray-600 mt-2">
            We offer a 30-day return policy. If you're not satisfied with your purchase, you can return or exchange the item within 30 days from the delivery date. Please ensure the item is in its original condition with tags intact.
          </p>
        </div>
  
        <div className="bg-white p-4 shadow-md rounded-lg mb-4">
          <h2 className="text-xl font-medium">4. How long will shipping take?</h2>
          <p className="text-gray-600 mt-2">
            Standard shipping usually takes 5-7 business days. Expedited shipping options are available at checkout.
          </p>
        </div>
  
        <div className="bg-white p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-medium">5. Can I cancel or modify my order?</h2>
          <p className="text-gray-600 mt-2">
            If your order has not yet been processed, you can modify or cancel it by contacting our customer support team.
          </p>
        </div>
      </div>
    );
  };
  
  export default FAQPage;
  