import { Link, useForm } from "@inertiajs/react";
import { useRoute } from "../../../vendor/tightenco/ziggy";

export default function Show({ post }) {
    const { delete: destroy } = useForm();
    const route = useRoute();

    const handleSubmit = (e) => {
        e.preventDefault();
        destroy(route("posts.destroy", post));
    };

    return (
        <>
            <div className="p-4 border-b">
                <div className="text-sm text-gray-500">
                    <span>
                        <span>Postet on: </span>
                        {new Date(post.created_at).toLocaleTimeString()}
                    </span>
                </div>
                <p className="font-medium">{post.body}</p>
                <div className="flex items-center justify-end gap-2">
                    <form onSubmit={handleSubmit}>
                        <button className="bg-red-500 rounded-md text-sm px-4 py-1 text-white cursor-pointer">
                            Delete
                        </button>
                    </form>
                    <Link
                        href={route("posts.edit", post)}
                        className="bg-green-500 rounded-md text-sm px-4 py-1 text-white"
                    >
                        Update
                    </Link>
                </div>
            </div>
        </>
    );
}
