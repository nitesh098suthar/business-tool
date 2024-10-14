const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

      <div className="bg-white p-6 shadow-md rounded-lg">
        <p className="text-gray-600 leading-relaxed">
          At [Your Store Name], we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and protect your
          personal information when you use our website and services.
        </p>

        <h2 className="text-xl font-medium mt-6">1. Information We Collect</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          We may collect personal information such as your name, email address,
          shipping address, and payment details when you make a purchase on our
          site.
        </p>

        <h2 className="text-xl font-medium mt-6">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          We use your personal information to process orders, manage your
          account, and provide you with customer support. We may also use your
          information to send you promotional offers and updates.
        </p>

        <h2 className="text-xl font-medium mt-6">
          3. Sharing Your Information
        </h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          We do not sell or share your personal information with third parties,
          except as necessary to fulfill your orders (e.g., with shipping
          companies) or as required by law.
        </p>

        <h2 className="text-xl font-medium mt-6">4. Data Security</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          We take appropriate measures to protect your personal information
          against unauthorized access, alteration, disclosure, or destruction.
          However, no method of transmission over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-medium mt-6">5. Your Rights</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          You have the right to access, update, or delete your personal
          information. If you would like to exercise any of these rights, please
          contact us at [Your Contact Information].
        </p>

        <h2 className="text-xl font-medium mt-6">6. Changes to this Policy</h2>
        <p className="text-gray-600 mt-2 leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page, and the updated policy will take effect
          immediately.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
