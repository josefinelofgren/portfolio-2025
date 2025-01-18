const Footer = () => {

    return (
        <footer
            id="footer"
            className="bg-white footer p-6 md:p-12 lg:p-24 justify-center  pt-24 pb-24 md:pt-24 md:pb-24 "
        >
            <div className="flex flex-col lg:flex-row lg:gap-[20%]">
                <div className=" mb-8">
                    <h3 className="relative max-w-2xl">This is the part where you <a className="no-underline" href="mailto:josefine.lofgren@live.se">reach out</a> to schedule a chat over some coffee</h3>
                </div>
                <div className="mb-24 flex flex-row lg:flex-col gap-12">
                    <div>
                        <p className="paragraph-small md:paragraph">www.josefinelofgren.se</p>
                        <p className="paragraph-small md:paragraph">josefine.lofgren@live.se</p>
                        <p className="paragraph-small md:paragraph">(+46) 76 79 88 105</p>
                    </div>
                    <div>
                        <p className="paragraph-small md:paragraph">
                            <a href="https://www.linkedin.com/in/josefinelofgren/">LinkedIn</a>
                        </p>
                        <p className="paragraph-small md:paragraph">
                            <a href="https://github.com/josefinelofgren">Github</a>
                        </p>
                    </div>
                </div>
            </div>
            <p className="paragraph-xsmall md:paragraph-small">Website designed my <span className="underline">me</span> and developed by <span className="underline">me</span>.</p>
            <p className="paragraph-xsmall md:paragraph-small">© 2025 all rights reserved.</p>
        </footer >
    );
};

export default Footer;