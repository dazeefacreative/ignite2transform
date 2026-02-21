export default function WhyUs(){

    return(
        <section id="why_alignment" className="bg-[#F3F2EE] w-full scroll-mt-32">
            <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col items-center justify-start gap-8">
                <h3 className="md:text-3xl text-2xl text-brandGreen lg:text-black font-heading">Why alignment work matters</h3>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 divide-y-2 sm:divide-y-0 sm:gap-4 lg:divide-x-2 divide-gray-300 items-start justify-center items-justify">
                    <p className="px-0 py-4 sm:px-6 lg:py-0 lg:px-6">Alignment helps leadership teams move together, not just faster.</p>
                    <p className="px-0 py-4 sm:px-6 lg:py-0 lg:px-6">Alignment reduces friction, confusion, and costly missteps.</p>
                    <p className="px-0 py-4 sm:px-6 lg:py-0 lg:px-6">When leaders align, teams execute with confidence.</p>
                    <p className="px-0 py-4 sm:px-6 lg:py-0 lg:px-6">Alignment creates clarity across strategy, roles, and priorities.</p>
                </div>
            </div>
        </section>
    )
}