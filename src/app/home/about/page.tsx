import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>

      <Image
        src="/images/about.webp"
        alt="about"
        width={700}
        height={500}
        className="h-[300px] md:h-[400px]  w-full object-cover"
        priority
      />

      <p className="text-sm mb-6 mt-4">
        Welcome to Duality Commerce, where we provide an unparalleled shopping
        experience that combines speed, cost-effectiveness, and flexibility.
        Unlike expensive one-size-fits-all commercial solutions, we believe in
        empowering businesses of all sizes with the tools they need to succeed,
        without limitations.
      </p>

      <h2 className="text-2xl font-bold mb-2">Speed</h2>
      <p className="mb-6 text-sm">
        We understand that in today's fast-paced world, every second counts.
        That's why we've optimized every aspect of our platform to ensure
        lightning-fast loading times, seamless navigation, and smooth checkout
        experiences. Say goodbye to frustratingly slow loading pages and hello
        to instant gratification for your customers.
      </p>

      <h2 className="text-2xl font-bold mb-2">Cost-effectiveness</h2>
      <p className="mb-6 text-sm">
        Running an online store shouldn't break the bank. At Duality, we offer
        competitive pricing plans tailored to fit your budget, whether you're
        just starting out or scaling up your operations. With transparent
        pricing and no hidden fees, you can trust that you're getting the most
        bang for your buck.
      </p>

      <h2 className="text-2xl font-bold mb-2">No Limitations</h2>
      <p className="mb-6 text-sm">
        Unlike other commercial solutions that impose restrictions on your
        creativity and flexibility, we believe in giving you the freedom to
        customize your store to meet your unique needs. Whether it's designing a
        stunning storefront, implementing advanced features, or integrating with
        third-party tools, the sky's the limit with Duality.
      </p>

      <h2 className="text-2xl font-bold mb-2">Why Choose Us?</h2>
      <ul className="list-disc pl-6 mb-6 text-sm">
        <li className="mb-2">
          <strong>Unmatched Speed:</strong> Enjoy lightning-fast loading times
          and seamless performance.
        </li>
        <li className="mb-2">
          <strong>Cost-effective Pricing:</strong> Get the most value for your
          money with our competitive pricing plans.
        </li>
        <li className="mb-2">
          <strong>Flexibility and Freedom:</strong> Customize your store exactly
          the way you want, without limitations.
        </li>
        <li className="mb-2">
          <strong>Exceptional Support:</strong> Our dedicated support team is
          here to help you every step of the way.
        </li>
      </ul>

      <p className="text-sm">
        Join the Duality family today and experience the difference for
        yourself. Welcome to the future of e-commerce.
      </p>
    </div>
  );
};

export default AboutPage;
