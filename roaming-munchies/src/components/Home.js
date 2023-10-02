import React from 'react';

function Home() {
  return (
    <div className="home">
      <header>
        <h1>Welcome to RoamingMunchies</h1>
        <p>Find your favorite food trucks and place your order!</p>
      </header>
      <main>
        <section className="features">
          <h2>Features</h2>
          <ul>
            <li>Discover nearby food trucks</li>
            <li>Explore delicious menus</li>
            <li>Place orders with ease</li>
            <li>Track your order status</li>
          </ul>
        </section>
        <section className="get-started">
          <h2>Get Started</h2>
          <p>Sign in or create an account to begin your culinary adventure.</p>
          {/* Insert Auth0 login button here */}
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} RoamingMunchies</p>
      </footer>
    </div>
  );
}

export default Home;
