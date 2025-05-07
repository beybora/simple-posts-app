import { Head, Link, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

const Home = ({ posts }) => {
    const route = useRoute();
    const { flash } = usePage().props;
    const { component } = usePage();

    const [flasMsg, setFlashMsg] = useState(flash.message);
    const [successMsg, setSuccessMsg] = useState(flash.message);

    setTimeout(() => {
        setFlashMsg(null);
        setSuccessMsg(null);
    }, 2000);

    return (
        <>
            <Head title={component} />
            <h1 className="title">{component}</h1>
            {flasMsg && (
                <div className="absolute top-24 right-6 bg-rose-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {flasMsg}
                </div>
            )}
            {successMsg && (
                <div className="absolute top-24 right-6 bg-green-500 p-2 rounded-md shadow-lg text-sm text-white">
                    {successMsg}
                </div>
            )}
            <div>
                {posts.data.map((post, id) => {
                    return (
                        <div key={id} className="p-4 border-b">
                            <div className="text-sm text-gray-500">
                                <span>
                                    <span>Postet on: </span>
                                    {new Date(
                                        post.created_at
                                    ).toLocaleTimeString()}
                                </span>
                            </div>
                            <p className="font-medium">{post.body}</p>
                            <Link
                                href={route("posts.show", post)}
                                className="text-link"
                            >
                                Read more
                            </Link>
                        </div>
                    );
                })}
            </div>
            <div>
                {posts.links.map((link) =>
                    link.url ? (
                        <Link
                            key={link.label}
                            href={link.url}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className={`p-1 mx-1 ${
                                link.active ? "text-blue-500 font-bold" : ""
                            }`}
                        />
                    ) : (
                        <span
                            key={link.label}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            className="p-1 mx-1 text-gray-300"
                        />
                    )
                )}
            </div>
        </>
    );
};

export default Home;
