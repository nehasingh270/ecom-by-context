import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <header className="text-center mb-8">
                
                <p className="mt-2 font-bold text-gray-600">Welcome to Our Store</p>
            </header>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-700">Our Mission</h2>
                <p className="mt-4 text-gray-500">
                    At <strong>EcomCharm</strong>, our mission is to provide the best online shopping experience
                    with a wide range of quality products at affordable prices. We strive to make online shopping
                    seamless and enjoyable for everyone.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-700">Our Story</h2>
                <p className="mt-4 text-gray-500">
                    Founded in [2024], <strong>Ecomcharm</strong> started with a simple idea: to make shopping
                    easier and more convenient for everyone. What began as a small venture has grown into a trusted
                    platform for millions of satisfied customers. Our focus on quality customer service and a
                    curated selection of products sets us apart.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-700">Why Choose Us?</h2>
                <ul className="list-disc ml-5 mt-4 text-gray-500">
                    <li>Wide range of products across multiple categories</li>
                    <li>Competitive prices with regular discounts and offers</li>
                    <li>Fast and reliable shipping options</li>
                    <li>Easy returns and customer-friendly policies</li>
                    <li>Excellent customer service to assist you</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-3xl font-semibold text-gray-700">Join Our Community</h2>
                <p className="mt-4 text-gray-500">
                    We believe in building a community of happy customers. Follow us on social media, subscribe
                    to our newsletter, and stay updated on the latest products and promotions.
                </p>
            </section>

            <footer className="text-center mt-8">
                <p className="text-gray-500">© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default About;