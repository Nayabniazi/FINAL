import { useState } from "react";

export default function Accordion() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>
            <div className="accordion" id="accordionFAQ">
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(1)}>
                        <button className={isActive.key == 1 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'orange'}}>How can Our BinBear Company is
                            preferable?</button>
                    </h5>
                    <div className={isActive.key == 1 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">At BinBear, we make junk removal effortless. Whether it’s a single item or a full property cleanout, our team is here to handle every step. With BinBear 
                            .</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(2)}>
                        <button className={isActive.key == 2 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black'}}>Can Pay Only for the Space You Use
                            ?</button>
                    </h5>
                    <div className={isActive.key == 2 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Aut architecto consequatur sit error nemo sed
                            dolorum suscipit 33 impedit dignissimos ut velit blanditiis qui quos magni
                            id dolore dignissimos. Sit ipsa consectetur et sint harum et dicta
                            consequuntur id cupiditate perferendis qui quisquam enim. Vel autem illo id
                            error excepturi est dolorum voluptas qui maxime consequatur et culpa
                            quibusdam in iusto vero sit amet Quis.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(3)}>
                        <button className={isActive.key == 3 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black'}}>I have promotional or
                            discount code?</button>
                    </h5>
                    <div className={isActive.key == 3 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Eos nostrum aperiam ab enim quas sit voluptate fuga.
                            Ea aperiam voluptas a accusantium similique 33 alias sapiente non vitae
                            repellat et dolorum omnis eos beatae praesentium id sunt corporis. Aut nisi
                            blanditiis aut corrupti quae et accusantium doloribus sed tempore libero a
                            dolorum beatae.</div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(4)}>
                        <button className={isActive.key == 4 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black'}}>What Fast & Friendly Service
                           ?</button>
                    </h5>
                    <div className={isActive.key == 4 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Et beatae quae ex minima porro aut nihil quia sed
                            optio dignissimos et voluptates deleniti et nesciunt veritatis et suscipit
                            quod. Est sint voluptate id unde nesciunt non deleniti debitis. Ut dolores
                            tempore vel placeat nemo quo enim reprehenderit eos corrupti maiores et
                            minima quaerat. Quo sequi eaque eum similique sint et autem perspiciatis cum
                            Quis exercitationem quo quos excepturi non ducimus ducimus eos natus velit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item wow animate__animated animate__fadeIn">
                    <h5 className="accordion-header" onClick={() => handleToggle(5)}>
                        <button className={isActive.key == 5 ? "accordion-button text-heading-5 " : "accordion-button text-heading-5 collapsed"}style={{backgroundColor:'black'}}>How can Low Price Guarantee
                            ?</button>
                    </h5>
                    <div className={isActive.key == 5 ? "accordion-collapse" : "accordion-collapse collapse"}>
                        <div className="accordion-body">Qui quas itaque ut molestias culpa vel culpa
                            voluptas eos fugit sint ex veritatis totam cum unde maxime! Qui eius fugiat
                            qui veritatis cumque a nesciunt nemo. Id numquam rerum est molestiae quia ut
                            nisi architecto a officiis itaque eum quod repellat ut dolorem dolorem aut
                            ipsam ipsa.</div>
                    </div>
                </div>
            </div>
        </>
    )
}
