import { Link } from "@inertiajs/react";
import React from "react";

const Home = ({ posts }) => {
    return (
        <>
            <h1 className="title">Home</h1>
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
