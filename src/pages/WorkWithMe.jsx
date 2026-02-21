import { Helmet } from "react-helmet";

import Services from "../components/Services";

export default function WorkWithMe(){

    return(
        <main className="mt-20">
        <Helmet>
            <title>Work With Me | Ignite to Transform</title>
            <meta name="description" content="Learn more about working with Ignite to Transform and how we can help you and your team thrive." />
        </Helmet>
        <Services />
        </main>
    );
}