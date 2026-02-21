import React from "react";
import { Helmet } from "react-helmet";

import WhyUs from "../components/WhyUs";
import Book from "../components/TheBook";
import HowWeWork from "../components/HowWeWork";

export default function TheAlignment() {

    return(
        <>
        <Helmet>
            <title>The Alignment | Ignite to Transform</title>
            <meta name="description" content="Unlock your leadership potential and transform your team. Join Ignite to Transform for coaching, facilitation, and inclusive team building." />
            <meta property="og:title" content="Ignite to Transform | Align. Lead. Thrive." />
            <meta property="og:description" content="Unlock your leadership potential and transform your team. Join Ignite to Transform for coaching, facilitation, and inclusive team building." />
            <meta property="og:image" content="https://ignite2transform.com/images/og-image.jpg" />
            <meta property="og:url" content="https://ignite2transform.com/" />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content="Ignite to Transform | Align. Lead. Thrive." />
            <meta name="twitter:description" content="Unlock your leadership potential and transform your team. Join Ignite to Transform for coaching, facilitation, and inclusive team building." />
            <meta name="twitter:image" content="https://ignite2transform.com/images/og-image.jpg" />
            <link rel="canonical" href="https://ignite2transform.com/" />
            <meta name="whatsapp:url" content="https://ignite2transform.com/" />
            <meta name="whatsapp:title" content="Ignite to Transform | Align. Lead. Thrive." />
            <meta name="whatsapp:description" content="Unlock your leadership potential and transform your team. Join Ignite to Transform for coaching, facilitation, and inclusive team building." />
            <meta name="whatsapp:image" content="https://ignite2transform.com/images/og-image.jpg" />
        </Helmet>
        <main className="mt-20">
            <WhyUs />
            <Book />
            <HowWeWork />
        </main>
        </>
    );
}